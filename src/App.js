// 앱이 실행되자마자 현재위치기반의 날씨가 보인다
// 날씨 정보에는 도시, 섭씨, 화씨, 날씨 상태정보가 보인다
// 5개의 버튼이 있다 (현재위치 1개, 다른도시 4개)
// 도시버튼을 클릭할 때마다 도시별 날씨가 나온다
// 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다
// 데이터를 들고오는 동안 로딩 스피너가 돈다

import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

function App() {

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${`93976fd635a5ca9cfda6c66184d6d3fe`}`;
    let reponse = await fetch(url);
    let data = await reponse.json();
    console.log(`data`, data);
  };

  useEffect(() => {
    getCurrentLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className='container'>
        <WeatherBox />
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
