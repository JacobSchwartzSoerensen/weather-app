import './App.css'
import WeatherCard from './components/WeatherCard/WeatherCard'
import * as styles from './App.css';

function App() {
  return (
    <div className={styles.container}>
      <WeatherCard />
      <p>Icons made by iconixar from www.flaticon.com</p>
    </div>
  );
}

export default App
