import type { NextPage } from 'next';
import Header from '../components/Header';
import Banner from '../components/Home/Banner';
import Infos from '../components/Home/Infos';
import Slider from '../components/Home/Slider';

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <Banner/>  
      <Infos/>
      <Slider/>
    </>
  )
}

export default Home
