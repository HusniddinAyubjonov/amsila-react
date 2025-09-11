import Navbar from "../../shared/ui/navbar/Navbar";
import Certificate from "../../shared/ui/certificates/Certificate";
import Partners from "../../shared/ui/partners/Partners";
import TitleText from "../../shared/ui/titleText/TitleText";
import Banners from "../../shared/ui/banners/Banners";
import banner from "../../assets/images/architecture/bannerArch.jpg";
import textImg from "../../shared/icon/architectureTxt.svg";
import OurExperience from "../../shared/ui/OurExperience/OurExperience";

export default function Architecture() {
  return (
    <div>
      <Banners
        bannerUrl={banner}
        textImg={textImg}
        title="Каждая линия проекта — шаг к гармонии. Архитектура, которая чувствует и понимает вас
"
      />
      <div>
        <TitleText
          title="Проектируем для"
          titleGreen="жизни"
          description="Архитектура для нас — это искусство создания пространства, где эстетика встречается с функциональностью. Мы проектируем здания, которые отражают современность и одновременно сохраняют свою актуальность на долгие годы. От жилых комплексов до коммерческих объектов — каждый проект для нас уникален, как и люди, которые будут жить и работать в этих пространствах."
        />
        <OurExperience />
      </div>
      <Navbar />
      <Partners />
      <Certificate />
    </div>
  );
}
