import {useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import a from "../../assets/1.jpg";
import b from "../../assets/2.jpg";
import c from "../../assets/3.jpg";
import d from "../../assets/4.jpg";

const SliderC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className='mb-40'> 
        <h2 className='uppercase text-4xl tracking-wider text-orange-500 w-fit font-mono bg-slate-800 py-5 px-10 rounded-lg'>
          <span className='w-full'>Obras</span> {''}
          <span className='w-full'>Destacadas</span>
          </h2>
        <Slider {...settings} className="mt-10">
          
          <div>
            <img src={a} alt="" className='w-full transition duration-300 imgSlider hover:opacity-40 cursor-pointer'/>
            <h3 className='textSlider absolute top-0 pl-5 pt-5 font-mono text-3xl'>Imagen 1</h3>
          </div>
          <div>
            <img src={b} alt="" className='w-full transition duration-300 imgSlider hover:opacity-40 cursor-pointer'/>
            <h3 className='textSlider absolute top-0 pl-5 pt-5 font-mono text-3xl w-32'>Imagen 2</h3>
          </div>
          <div>
            <img src={c} alt="" className='w-full transition duration-300 imgSlider hover:opacity-40 cursor-pointer'/>
            <h3 className='textSlider absolute top-0 pl-5 pt-5 font-mono text-3xl'>Imagen 3</h3>
          </div>
          <div>
            <img src={d} alt="" className='w-full transition duration-300 imgSlider hover:opacity-40 cursor-pointer'/>
            <h3 className='textSlider absolute top-0 pl-5 pt-5 font-mono text-3xl'>Imagen 4</h3>
          </div>
          
        </Slider>
      </div>
  );
};

export default SliderC;
