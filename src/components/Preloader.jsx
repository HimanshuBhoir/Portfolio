import React, { useEffect } from 'react'
import '../styles/global.css';
import '../styles/reset.css';
import { gsap } from 'gsap';
import Hero from '../pages/hero/Hero';

function Preloader() {

  useEffect(() => {

    const tl = gsap.timeline();

    tl.to('body', { delay: 4, duration: 1, translateY: '-100%', ease: 'power1.inOut' });

  }, []);

  return (
    <Hero />
    
  )
}

export default Preloader;