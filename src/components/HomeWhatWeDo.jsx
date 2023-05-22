import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HomeWhatWeDo = () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });
    const x = useTransform(scrollYProgress, [1,0], ['0%', '100%']);
    const y = useTransform(scrollYProgress, [1,0], ['0%', '100%']);
    const opacity = useTransform(scrollYProgress, [0,1], ['0%', '100%']);

    return(
        <div ref={ref} className="relative w-full h-full lg:h-screen">
            <motion.div className="h-full w-full overflow-hidden block lg:flex flex-wrap justify-center bg-black items-center"
                style={{opacity}}
            >
                <motion.div className="w-full h-screen lg:w-1/2 p-6 flex flex-col justify-center items-center"
                    style={{x}}
                >
                    <h1 className="font-raleway text-center font-bold text-3xl">
                        What is <br></br><span className="font-comfortaa text-4xl">Trap your Trip?</span>
                    </h1>
                    <p className="font-raleway text-sm  leading-6 py-4 text-justify">
                        Welcome to Trap Your Trip, your go-to platform for seamless travel planning and sharing. 
                        At Trap Your Trip, we believe that every journey should be unique, memorable, and tailored to your preferences. 
                        Our platform empowers travelers like you to create personalized itineraries, explore curated recommendations, and connect with a vibrant community of fellow adventurers. 
                        Whether you&apos;re a seasoned globetrotter seeking inspiration or a first-time traveler looking for expert guidance, Trap Your Trip has you covered. Discover the world of immersive travel experiences, save time with ready-to-use itineraries, share your own travel gems, and unlock the full potential of your journeys. 
                        <span className="font-bold text-md cursor-pointer">Join our growing community </span>today and embark on your next adventure with confidence.
                    </p>
                </motion.div>
                <div className="hidden sm:flex w-1/2 flex-col justify-center items-center">
                    <motion.div className="w-10/12 shadow-[0_0_50px] shadow-zinc-700 rounded-3xl"
                        style={{y}}
                    >
                        <img src="https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_1280.jpg" className="rounded-3xl"/>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default HomeWhatWeDo;