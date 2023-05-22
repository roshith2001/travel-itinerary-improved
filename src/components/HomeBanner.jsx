import { IconButton } from "@mui/material";
import { useRef, useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion, useScroll, useTransform } from "framer-motion";
import places from "../../public/placeSource";

const HomeBanner = () => {

    const[placeIndex, setPlaceIndex] = useState(0);
    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
      target: ref,
      offset: ["start start", "end start"]

    });
    const y = useTransform(scrollYProgress, [0,1], ['0%', '50%'])
    const opacity = useTransform(scrollYProgress, [0,1], ['100%', '0%'])
     
      const handleNextClick = () => {
        if(placeIndex != places.length-1)
        {
            const nextIndex = placeIndex + 1;
            setPlaceIndex(nextIndex);
        }
        else{
         setPlaceIndex(0);
        }
      }
      const handlePreviousClick = () => {
        if(placeIndex != 0)
        {
            const prevIndex = placeIndex - 1;
            setPlaceIndex(prevIndex);
        }
        else{
         setPlaceIndex(places.length - 1);
        }
      }

    return(
        <div>
          <div ref={ref} className="w-full h-screen">
            <motion.div  className="relative bg-cover w-full h-full"
              style={{y, opacity, backgroundImage: `url(${places[placeIndex].image})`}}
            >
              <div className="w-full h-full bg-black/50 flex flex-wrap content-center justify-center items-center">
              <div className="w-full px-12">
                    <div className="w-full md:w-1/2 font-raleway text-zinc-100">
                        <h1 className="text-2xl">{places[placeIndex].name}</h1>
                        <p className="text-sm mt-2 mb-7 border-t-[1px]">{places[placeIndex].description}</p>
                        <a className="p-3 bg-transparent text-white rounded-md cursor-pointer hover:bg-blue-600 ease-in-out duration-200">See Itineraries</a>
                    </div>
                </div>
                <div className="absolute top-[90%]">
                    <IconButton onClick={handlePreviousClick} >
                      <ArrowBackIosIcon
                        sx={{
                          color: 'white',
                          backgroundColor: 'rgba(0,0,0,0.4)',
                          padding: '10px',
                          boxSizing: 'content-box',
                          borderRadius: '50%'
                          }}/>
                    </IconButton>
                    <IconButton onClick={handleNextClick}>
                      <ArrowForwardIosIcon  
                        sx={{
                          color: 'white',
                          backgroundColor: 'rgba(0,0,0,0.4)',
                          padding: '10px',
                          boxSizing: 'content-box',
                          borderRadius: '50%'
                          }}
                      />
                    </IconButton>                    
                </div>
              </div>
            </motion.div>
        </div>
        </div>
    );
}

export default HomeBanner;