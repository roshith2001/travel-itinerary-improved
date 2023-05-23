import { whoIsGoingToUse } from "../../public/placeSource";

const HomeInsideTabComponent = ({index}) => {
    return(
        <div className="bg-cover"
            style={{backgroundImage: `url(${whoIsGoingToUse[index].image})`}}
        >
            <div className="bg-black/80 p-4 lg:flex font-raleway justify-center items-center">
            <div className="w-full lg:w-1/2">
                <div className="text-center font-comfortaa font-bold text-3xl">
                    {whoIsGoingToUse[index].title}
                </div>
                <div className="text-justify p-4 leading-loose">
                    {whoIsGoingToUse[index].text}
                </div>
            </div>
            <div className="w-full lg:w-1/2 rounded-xl p-4">
                <img 
                    className="rounded-xl mx-auto shadow-zinc-700 shadow-[0_0_50px]" 
                    src={whoIsGoingToUse[index].image}
                    alt="text/Image" 
                />
            </div>
            </div>
        </div>
    );
}

export default HomeInsideTabComponent;