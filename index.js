import OpenAI from "openai";
import readlineSync from 'readline-sync';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const API_KEY = process.env.OPENWEATHER_API_KEY; 
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const OPENAI_AI_KEY = process.env.OPENAI_API_KEY
const client = new OpenAI({
    apiKey: OPENAI_AI_KEY,
});

// Tools

async function getWeatherDetails(city = ' ') {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',
            },
        });
        return `${response.data.main.temp}°C`;  
    } catch (error) {
        return "Weather data not available";
    }
}


const tools = {
    "getWeatherDetails" : getWeatherDetails
}

const system_prompt = `
You are an AI assistant with START, PLAN, ACTION, Observation and Output state.
Wait for the user prompt and first plan with available tools.
After planning, Take the action with appropiate tools and wait for observation based on action.
Once, you get the observations, Return the AI response based on START prompt and observation.

Strictly follow the JSON output format as in examples.

Available Tools:
- function getWeatherDetails(city: string) : string 
getWeatherDetails Is a function that accepts city name as a string and returns the weather details

EXAMPLE:
{"type":"user", "user":"what is the sum of the weather of patiala and delhi?"}
{"type":"plan","plan":"I will the call the getWeatherDetails for patiala"}
{"type": "action", "function":"getWeatherDetails": "input":"patiala"}
{"type":"observation", "observation":"10°C"}
{"type":"plan", "plan":"I will the call the getWeatherDetails for delhi"}
{"type": "action", "function":"getWeatherDetails": "input":"delhi"}
{"type":"observation", "observation":"12°C"}
{"type":"output","output":"The sum of weather of patiala and delhi is 32°C"}
`

const messages =[
    {"role":"system",content:system_prompt}
];

while(true){
    const query = readlineSync.question('>>');
    const q = {
        type:'user',
        user:query,
    };
    messages.push({role:"user", content: JSON.stringify(q)});

    while(true){
        const chat  = await client.chat.completions.create({
            model:"gpt-3.5-turbo",
            messages:messages,
            response_format:{type:'json_object'}
        });

        const res = chat.choices[0].message.content;
        messages.push({role:'assistant', content:res});
        
        const call = JSON.parse(res);

        if(call.type == "output"){
            console.log(`gpt : ${call.output}`);
            break; 
        }else if(call.type=="action"){
            const fn = tools[call.function]
            const observation = await fn(call.input)
            const obs = {
                "type":"observation","observation":observation
            }
            messages.push({role:'developer', content: JSON.stringify(obs)});
        }
    }
}
