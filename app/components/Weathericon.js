import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faUmbrella,
  faSun,
  faBolt,
  faSnowflake,
  faSmog,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
export default function WeatherIcon({ weatherType }) {
  switch (weatherType) {
    case "Clouds":
      return <FontAwesomeIcon icon={faCloud} />;
    case "Rain":
      return <FontAwesomeIcon icon={faUmbrella} />;
    case "Clear":
      return <FontAwesomeIcon icon={faSun} />;
    case "Thunderstorm":
      return <FontAwesomeIcon icon={faBolt} />;
    case "Snow":
      return <FontAwesomeIcon icon={faSnowflake} />;
    case "Haze":
      return <FontAwesomeIcon icon={faSmog} />;
    case "Mist":
      return <FontAwesomeIcon icon={faWater} />;
    default:
      return <FontAwesomeIcon icon={faCloud} />;
  }
}
