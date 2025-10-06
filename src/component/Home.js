import React from 'react'

import Carousel1 from './Carousel1';


//import { motion, useScroll, useTransform } from "framer-motion";



const Home = () => {
 // const { scrollYProgress } = useScroll(); 
  
  
  //const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
 // const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <>
    <Carousel1/>
   
    
     
      <div>
        <h2 style={{color:"greenyellow", 
        

        }}
        
        
        > Well come to DD Foundation</h2>
        
        <div className="row" style={{width:"20rem",border:"2px"}}>
          <img src="  https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/02/07/2571337-untitled-design-2023-02-07t224926.366.jpg" 
style={{marginBlock:"100px", }} />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero 
              esse consequuntur illo, quidem mollitia
              qui consequatur sint vero blanditiis alias commodi dicta ex, quia ipsam velit
              temporibus nihil sapiente omnis.</p>
        </div>
      </div>
    </>
  )
}


export default Home
