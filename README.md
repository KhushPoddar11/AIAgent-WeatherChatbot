# AI Chatbot with Weather API Integration

## Overview
This project is an AI-powered chatbot that interacts with users and fetches real-time weather details using the OpenWeather API. The chatbot follows a structured process involving planning, action execution, observation, and response generation.

## Features
- Conversational AI chatbot powered by OpenAI's GPT-3.5-turbo
- Real-time weather information retrieval using OpenWeather API
- JSON-based structured interaction format
- Continuous conversation flow with user inputs
- Easy-to-use command-line interface

## Technologies Used
- **Node.js** – Backend runtime environment
- **OpenAI API** – Provides natural language processing capabilities
- **OpenWeather API** – Fetches real-time weather data
- **Axios** – Handles HTTP requests
- **Readline-sync** – Manages user input
- **dotenv** – Handles environment variables

## Installation
### Prerequisites
- Node.js installed (latest LTS version recommended)
- OpenAI API key
- OpenWeather API key

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/KhushPoddar11/AIAgent-WeatherChatbot.git
   cd AIAgent-WeatherChatbot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following content:
   ```plaintext
   OPENWEATHER_API_KEY=your_openweather_api_key
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Run the chatbot:**
   ```bash
   node index.js
   ```

## Usage
1. Start the chatbot by running `node index.js`.
2. Enter a weather-related query, such as:
   ```
   What is the weather in Mumbai?
   ```
3. The chatbot processes the request, retrieves the weather data, and responds with details like temperature and conditions.
4. To exit, press `Ctrl + C`.

## Project Structure
```
📂 AIAgent-WeatherChatbot
│-- 📄 index.js (Main chatbot logic)
│-- 📄 .env (Environment variables)
│-- 📄 package.json (Project dependencies)
│-- 📄 README.md (Project documentation)
```

## How It Works
1. **User Input Processing:**
   - The chatbot listens for user queries.
   - It identifies weather-related questions and extracts relevant locations.

2. **Data Retrieval:**
   - The OpenAI API processes natural language input.
   - The OpenWeather API fetches real-time weather data.

3. **Response Generation:**
   - The chatbot structures the response using OpenAI’s conversational model.
   - It presents weather details in an easy-to-understand format.

## Example Interaction
**User:** "What is the weather in Delhi?"

**Chatbot:** "The current temperature in Delhi is 12°C with clear skies."

## License
This project is open-source and available under the MIT License.

## Contributors
- **Khush Sushil Poddar** ([GitHub](https://github.com/KhushPoddar11))

## Future Enhancements
- Add more weather details like humidity, wind speed, and precipitation.
- Deploy as a web-based chatbot or integrate with messaging platforms (e.g., WhatsApp, Telegram, Discord).
- Improve natural language processing for better query handling.
- Implement multi-language support for a broader audience.

---
Enjoy using the AI chatbot! 🚀

