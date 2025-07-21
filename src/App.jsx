/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import { fetchWeatherByCity } from './services/weatherAPI';

export default function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        if (!city) return;
        setLoading(true);
        setError(null);

        try {
            const data = await fetchWeatherByCity(city);
            setWeather(data);
        } catch (err) {
            setError('City not found or API error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold mb-6">🌤️ Weather App</h1>
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    className="px-4 py-2 rounded border border-gray-300 w-64"
                    placeholder="Enter city name..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Search
                </button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {weather && <WeatherCard weather={weather} />}
        </div>
    );
}