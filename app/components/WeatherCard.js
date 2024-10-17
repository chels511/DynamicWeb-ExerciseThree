import styles from "../page.module.css";
import WeatherIcon from "./Weathericon";
export default function WeatherCard({
  city,
  cloudiness,
  currentTemperature,
  highTemp,
  humidity,
  lowTemp,
  weatherType,
  windSpeed,
}) {
  // Define color ranges

  const getColorForTemperature = (currentTemperature) => {
    if (currentTemperature <= 30) return "blue";
    if (currentTemperature <= 50) return "lightblue";
    if (currentTemperature <= 60) return "yellow";
    if (currentTemperature <= 80) return "orange";
    return "red";
  };

  const backgroundColor = getColorForTemperature(currentTemperature);
  const background = `linear-gradient(90deg, ${backgroundColor}, white)`;
  //const currentPercentage = 100 - currentTemperature;
  // const background = `linear-gradient(90deg, blue ${currentPercentage}%, red)`;
  return (
    <div className={styles.weatherCardWrapper} style={{ background }}>
      <div className={styles.weatherCity}>
        <h2>{city}</h2>
      </div>
      <div className={styles.weatherContent}>
        <div className={styles.weatherLeft}>
          <div className={styles.weatherIcon}>
            <WeatherIcon weatherType={weatherType} />
          </div>
          <p className={styles.temperature}>{currentTemperature}°</p>
        </div>
        <div className={styles.weatherRight}>
          <p>High Temp: {highTemp}°</p>
          <p>Low Temp: {lowTemp}°</p>
          <p>Cloudiness: {cloudiness}%</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind Speed: {windSpeed} mph </p>
        </div>
      </div>
    </div>
  );
}
