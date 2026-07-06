# 🌤 SkyCast – Real-Time Weather Forecast at Your Fingertips

> **SkyCast** is a sleek, responsive weather application that delivers **real-time weather information** for any city across the globe. Built with **React**, **Material UI**, and the **OpenWeather API**, SkyCast offers a clean user experience with dynamic weather-based backgrounds, making weather updates both informative and visually engaging.

---

## 🌍 Live Demo

🔗 **Live Website:** [https://sky-cast-weather-app-ashen.vercel.app/](https://sky-cast-weather-app-ashen.vercel.app/)

🔗 **Source Code:** [https://github.com/aspirant-22/SkyCast-Weather-App-](https://github.com/aspirant-22/SkyCast-Weather-App-)

---

## 📖 Overview

Ever wondered what the weather is like before stepping out or planning your next trip?

**SkyCast** provides accurate and up-to-date weather forecasts in seconds. Simply enter a city name, and SkyCast fetches real-time weather data including temperature, humidity, weather conditions, and much more.

To enhance the user experience, the application dynamically changes its background according to the current weather conditions, creating a more immersive and intuitive interface.

---

## ✨ Features

- 🌍 Search weather for **any city worldwide**
- 🌡️ Real-time temperature updates
- 🤗 Displays **Feels Like** temperature
- 💧 Humidity information
- 📈 Minimum & Maximum temperature
- ☁️ Current weather description
- 🎨 Dynamic weather-based background
- 📱 Fully responsive UI
- ⚡ Fast API integration using OpenWeather API
- ❌ Graceful error handling for invalid city names
- 🎯 Clean and modern Material UI design

---

## 🖼️ Preview

### Home Page

<img width="960" height="540" alt="Screenshot 2026-07-06 055520" src="https://github.com/user-attachments/assets/383ab36c-78ee-438f-8acc-250825027844" />


### Weather Result

<img width="960" height="540" alt="Screenshot 2026-07-06 055607" src="https://github.com/user-attachments/assets/b8670ee5-06a4-4fea-99e4-8ea4716676b2" />

---

## 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript (ES6+)
- Material UI (MUI)
- HTML5
- CSS3

### API

- OpenWeather API

### Deployment

- Vercel

---

## 📂 Project Structure

```text
SkyCast/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── WeatherApp.jsx
│   ├── SearchBox.jsx
│   ├── InfoBox.jsx
│   ├── App.css
│   ├── SearchBox.css
│   ├── InfoBox.css
│   └── main.jsx
│
├── .env
├── package.json
└── vite.config.js
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/skycast.git
```

### Navigate to the project

```bash
cd skycast
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file in the root directory

```env
VITE_WEATHER_API_KEY=YOUR_API_KEY
```

### Start the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory.

```env
VITE_WEATHER_API_KEY=YOUR_API_KEY
```

> **Note:** Never commit your API key to GitHub.

---

## 🎯 How It Works

1. Enter the name of any city.
2. SkyCast sends a request to the OpenWeather API.
3. The API returns real-time weather information.
4. The application processes the response.
5. Weather details are displayed in an elegant weather card.
6. The background dynamically changes according to the current weather conditions.

---

## 🚀 Future Enhancements

- 📍 Current Location Weather
- 🌅 Sunrise & Sunset Timings
- 🌬️ Wind Speed
- 🌧️ Rain Probability
- 🛰️ 5-Day Weather Forecast
- 🕒 Recent Search History
- 🌙 Dark Mode
- 🌎 Multiple Language Support
- 📊 Air Quality Index (AQI)
- 🗺️ Interactive Weather Map

---

## 💡 Challenges Faced

- Managing asynchronous API requests efficiently.
- Handling invalid city names and API errors gracefully.
- Implementing dynamic UI updates based on live weather conditions.
- Securing API keys using environment variables during deployment.
- Designing a responsive and visually appealing interface using Material UI.

---

## 📚 What I Learned

This project helped me strengthen my understanding of:

- React Hooks (`useState`)
- Component-based architecture
- Fetch API
- Asynchronous JavaScript (`async/await`)
- Conditional Rendering
- Environment Variables in Vite
- Material UI Components
- Responsive Web Design
- Error Handling
- Deploying React Applications on Vercel

---

## 🌟 Why SkyCast?

Unlike a basic weather application, **SkyCast** combines functionality with an engaging user experience. Real-time weather data, responsive design, dynamic backgrounds, and intuitive interactions make it a polished, production-ready project that showcases modern frontend development skills.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push to your branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## 👩‍💻 Author

**Garima Mittal**

- **GitHub:** https://github.com/aspirant-22
- **LinkedIn:** [https://linkedin.com/in/yourprofile](https://www.linkedin.com/in/garima-mittal-2a86732a9)

---

## ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub. It motivates me to continue building impactful and user-friendly applications.

---

# 🌤 *"SkyCast isn't just a weather app—it's a clean, modern, and interactive experience that brings real-time weather information to your fingertips."*
