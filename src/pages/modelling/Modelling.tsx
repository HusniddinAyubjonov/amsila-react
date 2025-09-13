import Navbar from "../../shared/ui/navbar/Navbar";
import Banners from "../../shared/ui/banners/Banners";
import TitleText from "../../shared/ui/titleText/TitleText";
import OurExperience from "../../shared/ui/OurExperience/OurExperience";
import Partners from "../../shared/ui/partners/Partners";
import Certificate from "../../shared/ui/certificates/Certificate";
import MapComponent from "../../shared/ui/map/Map";
import ProjectsModelling from "../../Companents/projectsModellingArray/Projects";

import banner from "../../assets/images/modelling/bannerModelling.jpg";
import textImg from "../../shared/icon/modellingTxt.svg";

import style from "./modelling.module.css";

export default function Modelling() {
  return (
    <div>
      <Navbar />
      <Banners
        bannerUrl={banner}
        textImg={textImg}
        title="Макеты, которые раскрывают суть ваших проектов до мельчайших деталей."
      />
      <div>
        <TitleText
          title="Проектируем для"
          titleGreen="жизни"
          description="Архитектура для нас — это искусство создания пространства, где эстетика встречается с функциональностью. Мы проектируем здания, которые отражают современность и одновременно сохраняют свою актуальность на долгие годы. От жилых комплексов до коммерческих объектов — каждый проект для нас уникален, как и люди, которые будут жить и работать в этих пространствах."
        />
        <OurExperience />
      </div>
      <ProjectsModelling />
      <Partners />
      <Certificate />
      <MapComponent />
    </div>
  );
}
