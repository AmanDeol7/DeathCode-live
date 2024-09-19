import Image from "next/image";
import Navbar from "../app/components/Navbar";
import Sliderr from "../app/components/Sliderr"
import Heading from "./components/Heading";
import CardSection from "@/app/components/CardSection"
import {fetchAnime} from "@/app/actions"
import Banner from "./components/Banner";

const Home: React.FC = async() => {
  const seasonalSamplerView = await fetchAnime("https://api.jikan.moe/v4/seasons/now")
  const sportsAnimeView = await fetchAnime("https://api.jikan.moe/v4/anime?q=sports&sfw&limit=15")
  const specialViewArray = await fetchAnime("https://api.jikan.moe/v4/seasons/now?limit=15")
  let bannerView = specialViewArray[3]
  const topAnimeView = await fetchAnime("https://api.jikan.moe/v4/top/anime?sfw&limit=15")
  return (
    <>
    <Navbar />
    <Sliderr />
    <div className="absolute top-[90vh] w-full h-full z-10">
      {/* <Heading title={"July 2024 Seasonal Sampler"} description={"Check out the first few episodes of these new shows for free!"} /> */}
      <Heading title="July 2024 Seasonal Sampler" description="Check out the first few episodes of these new shows for free!" />
      <CardSection item={seasonalSamplerView}/>
      <Heading title="Free to watch sports anime" description="Go for glory with these athletes!" />
      <CardSection item={sportsAnimeView}/>
      <section>
        <Banner apicall={bannerView}/>
      </section>
      <Heading title="Top Anime available on crunchyroll" description=""/>
      <CardSection item={topAnimeView}/>
    </div>
     

    </>
  );
}

export default Home;