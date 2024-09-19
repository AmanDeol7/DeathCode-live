import Image from "next/image";
import Navbar from "../app/components/Navbar";
import Sliderr from "../app/components/Sliderr"
import Header from "../app/components/Header"
export default function Home() {
  return (
    <>
    <Navbar />
    <Sliderr />
    <div className="absolute top-[90vh] w-full h-full z-10">
      {/* <Header title={"July 2024 Seasonal Sampler"} description={"Check out the first few episodes of these new shows for free!"} /> */}
    </div>
     

    </>
  );
}
