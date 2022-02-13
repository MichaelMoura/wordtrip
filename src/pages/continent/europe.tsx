import Header from "../../components/Header";
import ContinentBanner from "../../components/Continent/ContinentBanner";
import ContinentDescription from "../../components/Continent/ContinentDescription";
import ContinentCities from "../../components/Continent/ContinentCities";
import Slider from "../../components/Home/Slider";

export default function Europe(){

    const description = {
        text:`A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da àsia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.`,
        infos:[50,60, 27]
    }

    const cities = [
        {
            name:"Londres",
            countryName:"Reino Unido",
            countryFlag:"/europe/londonCountryFlag.png",
            banner:"/europe/london.jpg"
        },
        {
            name:"Paris",
            countryName:"França",
            countryFlag:"/europe/parisCountryFlag.jpg",
            banner:"/europe/paris.jpg"
        },
        {
            name:"Roma",
            countryName:"Itália",
            countryFlag:"/europe/romeCountryFlag.png",
            banner:"/europe/rome.jpg"
        },
    ]

    return(
        <>
            <Header/>
            <ContinentBanner name="Europa" src="/europe/banner.png"/>
            <ContinentDescription description={description}/>
            <ContinentCities cities={cities}/>
        </>
    )
}