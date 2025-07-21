const API_KEY = '2bcc7358e6e538ff74c703301b7d9a5d'; // Ganti dengan API key dari OpenWeatherMap

export const fetchWeatherByCity = async (city) => {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    if (!res.ok) throw new Error('Failed to fetch weather');
    return res.json();
};