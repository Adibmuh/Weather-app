import React from 'react';

export default function WeatherCard({ weather }) {
    const { name, sys, main, weather: weatherDetails, wind } = weather;
    const iconUrl = `https://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`;

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-xl font-semibold">{name}, {sys.country}</h2>
            <img src={iconUrl} alt="weather icon" className="mx-auto" />
            <p className="text-2xl font-bold">{Math.round(main.temp)}°C</p>
            <p className="capitalize text-gray-600">{weatherDetails[0].description}</p>
            <div className="mt-4 text-sm text-gray-700">
                <p>Humidity: {main.humidity}%</p>
                <p>Wind Speed: {wind.speed} m/s</p>
            </div>
        </div>
    );
}