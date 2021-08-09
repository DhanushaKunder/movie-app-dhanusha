import React from 'react';
import { Carousel } from 'react-bootstrap';
import lotr from '../Images/lotr.jpg'
import iceage from '../Images/iceage.jpg'
import joker from '../Images/joker.jpg'
import venom from '../Images/venom.jpg'
import johnwick from '../Images/johnwick.jpg'
import fios from '../Images/fios.jpg'
import poc from '../Images/poc.jpg'
import hp from '../Images/hp.jpg'
import loneranger from '../Images/ln.jpg'
import kfp from '../Images/kfp.jpg'

const MovieSlide = ({poster_path, title}) =>
(
    <>
    <div className="bannerImage">
    <Carousel controls= {false} fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img src={johnwick} alt="John Wick" />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
        <img src={lotr} alt="lotr" />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
        <img src={iceage} alt="iceage" />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
        <img src={joker} alt="joker" />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
        <img src={loneranger} alt="lone ranger" />
    </Carousel.Item>
    </Carousel>
    </div>

    <div className="bannerImage">

    <Carousel controls= {false} fade={true} pause={false}> 
    
    
    <Carousel.Item interval={2000}>
        <img src={venom} alt="venom" />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
        <img src={hp} alt="harry potter" />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
        <img src={kfp} alt="Kung fu panda" />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
        <img src={fios} alt="falut in our star" />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
        <img src={poc} alt="poc" />
    </Carousel.Item>
    
    </Carousel>
    </div>
    </>
);

export default MovieSlide;