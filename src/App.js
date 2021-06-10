import './styles.css';

import ComSwiper from './components/Swiper';
import SwiperCore, { Autoplay,Navigation, Pagination} from 'swiper';
import {SwiperSlide} from 'swiper/react';

import GL from './grey_louis_logo_long_white.png';




SwiperCore.use([Autoplay,Navigation, Pagination]);

function initSlide (swiper) {console.log('Swiper initialized!', swiper)}
  

function App() {

  const slides = [];
 

  for (let i = 0; i < 5; i+= 1) {
    slides.push(
      <SwiperSlide key={'slide-'}>
        <img
        src = {'https://picsum.photos/id$'+i + 1+'/500/300'}
        alt = {'Slide'+i}
        />
      </SwiperSlide>
    )
  }


  
  return (
    <div className="App">
    
      <header className="App-header">
  <img className="gl-logo"
        src = "https://getlouis.com/assets/img/grey_louis_logo_long_white.png?2"
        alt = "Get Louis"
        />
    

       <ComSwiper  id='main'
        tag='section'
        wrapperTag='ul'
        navigation 
        slidesPerView={3.5} spaceBetween={110} freeMode={true} 
        onInit={(swiper) => console.log('Swiper initialized!', swiper)}
        onSlideChange={(swiper) => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        onReachEnd={() => console.log('Swiper end reached')} />

        
    

     

      </header>
    </div>
  );
}

export default App;
