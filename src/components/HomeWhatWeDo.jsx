import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HomeWhatWeDo = ({smallScreen}) => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start center", "end start"]
    });
    const opacity = useTransform(scrollYProgress, [1,0], ['0%', '100%']);
    
    return(
        <div ref={ref} className="w-screen h-screen">
            <motion.div className="relative h-screen w-full  block md:flex flex-wrap justify-center bg-black items-center"
                style={{opacity}}
            >
                <div className="h-screen w-full md:w-1/2 p-12 flex flex-col justify-center items-center">
                    <h1 className="font-comfortaa text-center font-bold text-4xl">
                        Trap your Trip?
                    </h1>
                    <p className="font-raleway text-sm  leading-6 py-4 text-justify">
                       Welcome to Trap Your Trip, the leading platform for travel enthusiasts to discover and share exciting itineraries. 
                       Whether you&apos;re a family planning a vacation, a budget-conscious backpacker, or a student or bachelor seeking the perfect itinerary, Trap Your Trip is here to empower you. 
                       By leveraging the power of our community, you can escape the reliance on travel agencies, save money, and unlock a world of personalized travel experiences. 
                       Read on to explore how Trap Your Trip can cater to your specific travel needs.
                    </p>
                </div>
               {smallScreen &&  <div className="flex w-1/2 flex-col justify-center items-center">
                    <div className="w-10/12 shadow-[0_0_50px] shadow-zinc-700 rounded-3xl">
                        <img src="https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_1280.jpg" className="rounded-3xl"/>
                    </div>
                </div>}
            </motion.div>
        </div>
    );
    
}

export default HomeWhatWeDo;