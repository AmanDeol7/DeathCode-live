import Image from "next/image";
import Navbar from "../app/components/Navbar";
import Sliderr from "../app/components/Sliderr"
import Heading from "./components/Heading";
import CardSection from "@/app/components/CardSection"
import {fetchAnime} from "@/app/actions"

const Home: React.FC = async() => {
  const seasonalSamplerView = await fetchAnime("https://api.jikan.moe/v4/seasons/now")
  return (
    <>
    <Navbar />
    <Sliderr />
    <div className="absolute top-[90vh] w-full h-full z-10">
      {/* <Heading title={"July 2024 Seasonal Sampler"} description={"Check out the first few episodes of these new shows for free!"} /> */}
      <Heading title="July 2024 Seasonal Sampler" description="Check out the first few episodes of these new shows for free!" />
      <CardSection item={seasonalSamplerView}/>
    </div>
     

    </>
  );
}

export default Home;