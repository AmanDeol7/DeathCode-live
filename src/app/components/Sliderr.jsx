"use client"
import {useState , useEffect} from "react"
import {MdKeyboardArrowRight} from "react-icons/md"
import { LuPlay } from "react-icons/lu"
import {FaRegBookmark} from "react-icons/fa" 
import { landingPageApi } from "../interfaces/landingPageApi"

const Sliderr = () => {
    const [index, setIndex] = useState(0)
    const [fade, setFade] = useState(true)

function handleDecrement() {
    setFade(false);

    setTimeout(() => {
            setIndex((index === 0 ? 4:index-1))
            setFade(true)
    }, 300);
        
}

function handleIncrement() {
    setFade(false);

    setTimeout(() => {
            setIndex((index+1)%5)
            setFade(true)
    }, 300);
        
}




  return (
    <>
    <div className={`relative overflow-hidden transition-opacity duration-500 ${fade ? 'opacity-100': 'opacity-0'}`}>
    <img src={landingPageApi[index].heroImage} alt="heroImage" className="h-[105vh] z-[5] w-full mt-16 object-cover" />
    <div onClick={handleDecrement}className="absolute top-[10rem] z-[9] left-0 h-4">
            <MdKeyboardArrowRight className="text-white rotate-180 text-5xl absolute top-[25vh] z-[9] hover:text-gray-500 transition-colors cursor-pointer " />
    </div>
         <div onClick={handleIncrement} className="absolute top-[10rem] z-[9] left-0 h-4 w-4 ">
            <MdKeyboardArrowRight className="text-white text-5xl absolute top-[25vh] z-[9] left-[97vw] hiver:text-gray-500 transition-colors cursor-pointer " />
         </div>
         <div className=" absolute bottom-[42vh] left-10 text-white flex flex-col ">
    <img src={landingPageApi[index].logoImage} alt="logoImage"  className="w-[20rem] z-[5] pb-4 ml-[3.25rem]  scale-75" />
    <p className="text-gray-500 text-sm font-normal pb-2 ml-[3.25rem] z-[5]">Sub | Dub</p>
    <p className="text-white text-md font-normal  w-[27rem] pb-6 ml-[3.25rem] z-[5]">{landingPageApi[index].description}</p>
    <div className="flex py-2 ml-[3.25rem] z-[5] ">

        <button className="bg-orange-600 text-black w-60 p-4 mr-3 h-11 font-semibold flex items-center justify-center hover:bg-orange-500 transition-all duration-300">
            <LuPlay />
            &nbsp; Start Watching E1 
        </button>
        <button className="text-orange-600 text-lg  w-60 p-4 mr-3 h-11 font-semibold flex items-center justify-center border-[3px] border-orange-600   hover:border-orange-500 transition-all duration-300 ">
            <FaRegBookmark />
            &nbsp; Start Watching E1 
        </button>
    </div>

    </div>
    <div className="absolute m-0 top-[0rem] left-[-10rem] z-[4] w-[140vw] h-[160vh] verticalfade"></div>
    <div className="absolute m-0 top-[0rem] left-[-10rem] z-[4] w-[140vw] h-[160vh] horizontalfade"></div>

    </div>
    </>
  )
}

export default Sliderr