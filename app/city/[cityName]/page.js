import Image from "next/image";
import Header from "../../components/Header";
import styles from "../../page.module.css";
import WeatherCard from "../../components/WeatherCard";

export default async function City({ params }) {
  const city = params.cityName;
  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`;
  const request = await fetch(queryURL);
  const weatherData = await request.json();

  console.log(weatherData.weather[0].main);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1></h1>
        <WeatherCard
          city={city}
          cloudiness={weatherData.clouds.all}
          currentTemperature={weatherData.main.temp}
          highTemp={weatherData.main.temp_max}
          humidity={weatherData.main.humidity}
          lowTemp={weatherData.main.temp_min}
          weatherType={weatherData.weather[0].main}
          windSpeed={weatherData.wind.speed}
        />
      </main>
    </div>
  );
}
