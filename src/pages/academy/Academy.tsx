import style from "./academy.module.css";

import Navbar from "../../shared/ui/navbar/Navbar";
import Banners from "../../shared/ui/banners/Banners";
import Partners from "../../shared/ui/partners/Partners";
import Certificate from "../../shared/ui/certificates/Certificate";
import MapComponent from "../../shared/ui/map/Map";
import ProjectsAcademy from "../../Companents/projectsAcademyArray/Projects";

import banner from "../../assets/images/academy/bannerAcademy.jpg";
import textImg from "../../shared/icon/academyTxt.svg";
import img1 from "../../assets/images/academy/1.png";
import img2 from "../../assets/images/academy/2.png";
import img3 from "../../assets/images/academy/3.png";

export default function Academy() {
  return (
    <div>
      <Navbar />
      <Banners
        bannerUrl={banner}
        textImg={textImg}
        title="это площадка, сообщество, где будут собираться нынешние и будущие архитекторы страны, проводиться образовательные курсы, лекции, мастер-классы, воркшопы и исследовательские работы."
      />

      <div className={style.container}>
        <div className={style.OurMission}>
          <h1>Наша миссия</h1>
          <span>
            <img src={img1} alt="img" />
            <img src={img2} alt="img" />
            <img src={img3} alt="img" />
          </span>
        </div>
      </div>

      <ProjectsAcademy />
      <Partners />
      <Certificate />
      <MapComponent />
    </div>
  );
}
