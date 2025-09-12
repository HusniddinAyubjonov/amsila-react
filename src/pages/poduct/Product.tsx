import Banners from "../../shared/ui/banners/Banners";
import TitleText from "../../shared/ui/titleText/TitleText";
import OurExperience from "../../shared/ui/OurExperience/OurExperience";
import Navbar from "../../shared/ui/navbar/Navbar";
import Partners from "../../shared/ui/partners/Partners";
import Certificate from "../../shared/ui/certificates/Certificate";
import MapComponent from "../../shared/ui/map/Map";
import banner from "../../assets/images/product/bannerProduct.jpg";
import textImg from "../../shared/icon/productTxt.svg";
import OutdoorAdvertisingCarousel from "./swiper/OutdoorAdvertisingCarousel";
import PrintingBranding from "./swiper2/PrintingBranding";
import Posm from "./swiper3/Posm";
import Expo from "./swiper4/Expo";

export default function Product() {
  return (
    <div>
      <div>
        <Navbar />
        <Banners
          bannerUrl={banner}
          textImg={textImg}
          title="Воплощаем ваши идеи в реальном масштабе"
        />
        <div>
          <TitleText
            title="Воплощение идей"
            description="Визуальные решения, которые работают на успех: от наружной рекламы до стильной полиграфии. Ассортимент услуг включает яркие вывески, брендирование транспорта, эксклюзивную упаковку и многое другое. Креативный подход, современные технологии и внимание к деталям позволяют создавать проекты, которые выделяют бренды и помогают им расти."
          />
          <OurExperience />
        </div>
         <OutdoorAdvertisingCarousel/>
         <PrintingBranding/>
         <Posm/>
         <Expo/>
        <Partners />
        <Certificate />
        <MapComponent />
      </div>
    </div>
  );
}
