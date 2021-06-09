import '../styles.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';

import PropTypes from 'prop-types'
import pandora from '../Pandora.jpg';

import DummyData from '../DummyData.json';

SwiperCore.use([Navigation, Pagination]);

const ComSwiper = ({id, slides, tag, wrapperTag, navigation, slidesPerView, spaceBetween, onInit, onSlideChange, onReachEnd }) => {
   
const getData = () => {
  const data = DummyData

  return (
      data.map((slide) => (
          <SwiperSlide key= {slide.key}>
         <img
        src = {slide.img.src}
        alt = {slide.img.alt}
        />
    </SwiperSlide>
      ))
  );
};
   
    return (
        
        <Swiper id={id}
        tag={tag}
        wrapperTag={wrapperTag}
        navigation = {navigation}
        slidesPerView={slidesPerView}
        spaceBetween ={spaceBetween}
        onInit={onInit}
        onSlideChange={onSlideChange}
        onReachEnd={onReachEnd} >


           {getData()}


        </Swiper>
        
    )
}

export default ComSwiper

Swiper.propTypes = {
    id: PropTypes.string,
    slides: PropTypes.array,
    tag: PropTypes.string,
    wrapperTag: PropTypes.string,
    slidesPerView: PropTypes.number,
    spaceBetween: PropTypes.number,
    onInit: PropTypes.func,
    onSlideChange: PropTypes.func,
    onReachEnd: PropTypes.func
}


// (swiper) => console.log('Swiper initialized!', swiper)


// (swiper) => {
//           console.log('Slide index changed to: ', swiper.activeIndex);
//         }


// () => console.log('Swiper end reached')