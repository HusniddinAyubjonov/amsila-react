import Certificate from "../../shared/ui/certificates/Certificate";
import MapComponent from "../../shared/ui/map/Map";
import Navbar from "../../shared/ui/navbar/Navbar";
import Partners from "../../shared/ui/partners/Partners";
import TitleText from "../../shared/ui/titleText/TitleText";
import Header from "./header/Header";
import Slider from "./slider/Slider";
import Team from "./team/Team";

export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar />
      <div style={{ marginTop: "120px" }}>
        <TitleText
          title="Гармония"
          titleGreen="идей и инноваций"
          description="В Амсила мы гордимся тем, что можем предложить нашим клиентам полный спектр услуг: от архитектурного проектирования и 3D макетирования до наружной рекламы и полиграфии. Мы стремимся создавать не просто проекты, а пространства, которые вдохновляют. Наша академия предоставляет обучение для архитекторов и дизайнеров, помогая развивать таланты и внедрять новые идеи в жизнь. Мы верим, что каждое наше начинание — это шаг к будущему, где креативность и мастерство идут рука об руку."
        />
      </div>
      <Slider />
      <Team />
      <Partners />
      <Certificate />
      <MapComponent />
    </div>
  );
}
