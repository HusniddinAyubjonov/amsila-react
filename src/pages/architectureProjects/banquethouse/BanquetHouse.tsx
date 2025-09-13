import style from "./BanquetHouse.module.css";
import Banners from "../../../shared/ui/banners/Banners";
import Navbar from "../../../shared/ui/navbar/Navbar";
import banner from "../../../assets/images/architecture/1/1.jpg";
import textImg from "../../../shared/icon/architectureTxt.svg";
import TitleForProjects from "../../../shared/ui/TitleForProjects/TitleForProjects";
import img1 from "../../../assets/images/architecture/1/2.jpg";
import img2 from "../../../assets/images/architecture/1/3.jpg";
import img3 from "../../../assets/images/architecture/1/4.jpg";
import img4 from "../../../assets/images/architecture/1/5.jpg";
import img5 from "../../../assets/images/architecture/1/6.jpg";
import img6 from "../../../assets/images/architecture/1/7.jpg";
import img7 from "../../../assets/images/architecture/1/8.jpg";
import img8 from "../../../assets/images/architecture/1/9.jpg";
import img9 from "../../../assets/images/architecture/1/10.jpg";

export default function BanquetHouse() {
  return (
    <div>
      <Navbar />
      <Banners bannerUrl={banner} textImg={textImg} title="Банкетный дом" />
      <TitleForProjects
        title="
            Архитектурный проект банкетного дома общей площадью 282,3 м2, спроектирован и построен на 21 км. трассы Душанбе-Худжанд Варзобского ущелья в соответствии с техническим заданием, утвержденным заказчиком.
            По заданию заказчика нужно было проектировать прямоугольное здание, но архитектор проекта предложил сделать здание дугообразным, что позволяет сохранить существующие деревья на проектируемом участке.
            У архитектора была идея вписать здание в естественный ландшафт, поэтому здание одноэтажное и посажено низко. Это позволяет не чувствовать границ между внутренним пространством здания и окружающей природы. Внутри запроектированы тамбур, основной банкетный зал, санузлы и мини-кухня. Еда готовится на кухне, которое уже существовало на данной территории. Мини-кухня используется как место раздачи еды, приготовления закусок и напитков.
            Банкетный зал, в котором проходят мероприятия, не имеет глухих стен, ограждение помещения - раскладные витражи. В летний сезон, раскрывая их полностью, то создаётся объединение внутреннего и внешнего пространства здания.
            На крыше находится зона отдыха, откуда с помощью парящей металлической лестницы со стеклянными перилами есть доступ к террасе с бассейном.
            У здания протекает речка. Над речкой построен мостик, соединяющий террасу и зону балкона. Поверх речки течет искусственный водопад. Путем проведения труб с истока речки на поверхности горы, вода возвращается и впадает в саму же речку у здания, образуя циркулирующий процесс."
        subtitle="Авторский колектив: Аюбджонов Хуршед, Раджабов Санджар, Шозиёев Джамшед"
        subtitle2="Локация: р. Варзоб"
        subtitle3="Год проектирования: 2021"
        subtitle4="Год реализации: 2022"
      />

      <div className={style.container}>
        <div className={style.gallery}>
          <img className={style.img1} src={img1} alt="img" />
          <span className={style.span}>
            <img className={style.img2} src={img2} alt="img" />
            <img className={style.img3} src={img3} alt="img" />
          </span>
          <span className={style.span}>
            <img className={style.img4} src={img4} alt="img" />
            <img className={style.img5} src={img5} alt="img" />
          </span>
          <img className={style.img6} src={img6} alt="img" />
          <img className={style.img7} src={img7} alt="img" />
          <span className={style.span}>
            <img className={style.img8} src={img8} alt="img" />
            <img className={style.img9} src={img9} alt="img" />
          </span>
        </div>
      </div>
    </div>
  );
}
