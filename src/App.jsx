  import {Swiper, SwiperSlide} from 'swiper/react';
import './App.css'
import Arte1 from './assets/images/arte1.jpg';
import Arte2 from './assets/images/arte6.jpg';
import Arte3 from './assets/images/grafiteiro4.jpg';

function App() {
 

  return (
    <>
    <Swiper>
      <SwiperSlide className="slide-item">
        <img src={Arte1} alt="arte1" />
      </SwiperSlide>
      <SwiperSlide className="slide-item">
        <img src={Arte2} alt="arte2" />
      </SwiperSlide>
      <SwiperSlide className="slide-item">
        <img src={Arte3} alt="arte3" />
      </SwiperSlide>
    </Swiper>
     
    </>
  )
}

export default App
