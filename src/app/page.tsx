import Image from "next/image";
import Navbar from "../app/components/Navbar";
import Sliderr from "../app/components/Sliderr"
import Heading from "./components/Heading";
export default function Home() {
  return (
    <>
    <Navbar />
    <Sliderr />
    <div className="absolute top-[90vh] w-full h-full z-10">
      {/* <Heading title={"July 2024 Seasonal Sampler"} description={"Check out the first few episodes of these new shows for free!"} /> */}
      <Heading title="July 2024 Seasonal Sampler" description="Check out the first few episodes of these new shows for free!" />
    </div>
     

    </>
  );
}
