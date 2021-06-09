import './styles.css';

import ComSwiper from './components/Swiper';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import {SwiperSlide} from 'swiper/react';

import pandora from './Pandora.jpg';




SwiperCore.use([Navigation, Pagination]);

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
       <ComSwiper id='main'
        tag='section'
        wrapperTag='ul'
        navigation 
        slidesPerView={3.5} spaceBetween={30} freeMode={true}
        onInit={(swiper) => console.log('Swiper initialized!', swiper)}
        onSlideChange={(swiper) => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        onReachEnd={() => console.log('Swiper end reached')} >

       <SwiperSlide key={'slide-1'}>
        <img
        src = {pandora}
        alt = {'Slide'}
        />
      </SwiperSlide>

           <SwiperSlide key={'slide-2'}>
        <img
        src = {pandora}
        alt = {'Slide'}
        />
      </SwiperSlide>
           <SwiperSlide key={'slide-3'}>
        <img
        src = {pandora}
        alt = {'Slide'}
        />
      </SwiperSlide>

       </ComSwiper>

      </header>
    </div>
  );
}

export default App;
