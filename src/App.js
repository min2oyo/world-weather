// 앱이 실행되자마자 현재위치기반의 날씨가 보인다
// 날씨 정보에는 도시, 섭씨, 화씨, 날씨 상태정보가 보인다
// 5개의 버튼이 있다 (현재위치 1개, 다른도시 4개)
// 도시버튼을 클릭할 때마다 도시별 날씨가 나온다
// 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다
// 데이터를 들고오는 동안 로딩 스피너가 돈다

import { useEffect } from 'react';
import './App.css';

function App() {

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log(`현재위치`, lat, lon);
    });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      {console.log(`ㅋ`)}
      hi
    </div>
  );
}

export default App;
