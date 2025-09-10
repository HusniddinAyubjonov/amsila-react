import clsx from "clsx";
import style from "./partners.module.css";

interface PartnersImg {
  img: string;
}

const partners: PartnersImg[] = [
  { img: "/src/assets/images/partners/1.jpg" },
  { img: "/src/assets/images/partners/2.jpg" },
  { img: "/src/assets/images/partners/3.jpg" },
  { img: "/src/assets/images/partners/4.jpg" },
  { img: "/src/assets/images/partners/Frame 6.jpg" },
  { img: "/src/assets/images/partners/Frame 7.jpg" },
  { img: "/src/assets/images/partners/Frame 8.jpg" },
  { img: "/src/assets/images/partners/Frame 9.jpg" },
  { img: "/src/assets/images/partners/Frame 10.jpg" },
  { img: "/src/assets/images/partners/Frame 11.jpg" },
  { img: "/src/assets/images/partners/4.jpg" },
];

const partnersTwo: PartnersImg[] = [
  { img: "/src/assets/images/partners/Frame 12.jpg" },
  { img: "/src/assets/images/partners/Frame 13.jpg" },
  { img: "/src/assets/images/partners/Frame 14.jpg" },
  { img: "/src/assets/images/partners/Frame 15.jpg" },
  { img: "/src/assets/images/partners/Frame 16.jpg" },
  { img: "/src/assets/images/partners/Frame 17.jpg" },
  { img: "/src/assets/images/partners/Frame 18.jpg" },
  { img: "/src/assets/images/partners/Frame 20.jpg" },
  { img: "/src/assets/images/partners/Frame 21.jpg" },
  { img: "/src/assets/images/partners/Frame 22.jpg" },
  { img: "/src/assets/images/partners/Frame 23.jpg" },
];

const duplicatedPartners = [...partners, ...partners];
const duplicatedPartnersTwo = [...partnersTwo, ...partnersTwo];

export default function Partners() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.PartnerText}>
          <h1>
            Каждый наш партнёр — это
            <mark> история доверия, проверенная годами. </mark>Мы ценим каждого
            и с гордостью продолжаем совместный путь.
          </h1>
        </div>
      </div>
      <div className={style.imgsContainer}>
        <div className={style.track}>
          {duplicatedPartners.map((partner, index) => (
            <div key={index} className={style.imgContainer}>
              <img
                src={partner.img}
                alt={`Partner ${index + 1}`}
                className={clsx(style.img, style[`img${index + 1}`])}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={style.imgsContainerTwo}>
        <div className={style.trackTwo}>
          {duplicatedPartnersTwo.map((partner, index) => (
            <div key={index} className={style.imgContainerTwo}>
              <img
                src={partner.img}
                alt={`Partner ${index + 1}`}
                className={clsx(style.img, style[`img${index + 1}`])}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
