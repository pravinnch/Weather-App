## Weather App
A fully functional weather application built with Node.js, Express, and Handlebars (HBS). Users can input a city name to retrieve current weather data from the OpenWeatherMap API, displayed with dynamic date and weather icons.

## Features
Displays current day, date, and month.
Fetches weather data (temperature, condition, icon) for a specified city.
Multi-page app with Home, About, Contact, and Weather routes.
Styled with CSS and Font Awesome icons.
API key stored securely in a separate, Git-ignored config.js file.

## Project Structure

weather-app/
├── .gitignore
├── public/
│   ├── js/
│   │   ├── config.js        # API key config (ignored by Git)
│   │   └── main.js          # Client-side weather logic
│   └── style/
│       └── style.css        # Stylesheet
├── src/
│   └── app.js               # Express server
├── templates/
│   ├── partials/
│   │   ├── header.hbs       # Header partial
│   │   └── footer.hbs       # Footer partial
│   └── views/
│       ├── about.hbs        # About page
│       ├── contact.hbs      # Contact page
│       ├── err.hbs          # 404 error page
│       └── weather.hbs      # Weather page
├── README.md
└── package.json             # Node.js dependencies

## Prerequisites
Node.js (v14 or higher recommended).
An OpenWeatherMap API key (free tier available)

## Setup Instructions

1. Clone the Repository

git clone https://github.com/your-username/weather-app.git
cd weather-app

2. Install Dependencies
npm install

Installs express and hbs as specified in package.json.

3. Configure the API Key

Create public/js/config.js:

touch public/js/config.js

## Add your OpenWeatherMap API key:

// public/js/config.js
const config = {
  apiKey: 'YOUR_API_KEY_HERE'
};
window.config = config;

Note: public/js/config.js is ignored by .gitignore.

4. Run the App

## Start the server:
node src/app.js

Visit http://localhost:3000/weather in your browser.

## Enter a city name and click "Search" to view weather data.

Routes
/ - Serves static content from public/weather.html (if present).

/weather - Displays the weather app interface.

/about - About page with sample data (id: 1, user: 'Pravin').

/contact - Contact page.

* - 404 error page for undefined routes.

Usage

Navigate to http://localhost:3000/weather.

Type a city name (e.g., "London") in the input field.

Click "Search" to see the current weather, temperature, and date.

#Dependencies
Defined in package.json:

{
  "name": "weather-app",
  "version": "1.0.0",
  "main": "src/app.js",
  "scripts": {
    "start": "node src/app.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "hbs": "^4.2.0"
  }
}

## Credits
Weather data: OpenWeatherMap.

## Icons: Font Awesome.

## License
This project is unlicensed—free to use and modify as desired.
