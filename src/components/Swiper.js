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
// Modals needs their own state, to fix the "shared modal". My problem was figuring out how to handle each clickevent to point to each modal



const getData = () => {
  const data = DummyData
  return (
      data.map((campaign) => (
          <div className="swiper-slide">

          <SwiperSlide key= {campaign.key} onClick ={() => setShow(!show)}>
             <div class="container">

            <Modal key ={campaign.mkey}  show= {show} >
                Category: {campaign.category} <br/>
                Followers: {campaign.totalnumf}  <br/>
                Target Audiance Gender: {campaign.TAgender}  <br/>
                Target Audiance Age: {campaign.TAage}  <br/>
                Campaign Hashtag: {campaign.campaignhashtag}  <br/>
                Site: <a href={campaign.brandURL}> {campaign.brand} </a>

                <br/>
                
                 </Modal>
         <img className="brand-img"
        src = {campaign.img.src}
        alt = {campaign.img.alt}
        />
        <div className="capption-title">
            <h1> {campaign.brand} </h1>
            </div>

             <div className="capption-subtitle">
                 {campaign.cmpgtitle}
            
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