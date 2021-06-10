import '../styles.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';

import Modal from './modal';

import PropTypes from 'prop-types'

import React, { useState } from 'react';
import DummyData from '../DummyData.json';

SwiperCore.use([Autoplay,Navigation, Pagination]);

const ComSwiper = ({id, slides, freeMode, tag, wrapperTag, navigation, slidesPerView, spaceBetween, onInit, onSlideChange, onReachEnd }) => {
   
const [show, setShow] = useState(false);




const getData = () => {
  const data = DummyData
  return (
      data.map((campaign) => (
          <div className="swiper-slide">

          <SwiperSlide key= {campaign.key} onClick ={() => setShow(!show)}>
             <div class="container">

            <Modal key ={campaign.mkey}  show= {show} > </Modal>
         <img
        src = {campaign.img.src}
        alt = {campaign.img.alt}
        />
        <div class="capption-title">
            <h1> {campaign.cmpgtitle} </h1>
            </div>

             <div class="capption-subtitle">
            {campaign.brand}
        </div>
        </div>

    </SwiperSlide>

   
    
        </div>
      ))
  );
};
   
    return (
        
        <Swiper className="mySwiper" id={id}
        tag={tag}
        wrapperTag={wrapperTag}
        navigation = {navigation}
        slidesPerView={slidesPerView}
        spaceBetween ={spaceBetween}
        onInit={onInit}
        onSlideChange={onSlideChange}
        onReachEnd={onReachEnd}
        freeMode={freeMode} 
        autoplay={{
  "delay": 2500,
  "disableOnInteraction": false
}}>


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