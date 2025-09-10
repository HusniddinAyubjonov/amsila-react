import { Link } from "react-router-dom";
import style from "./header.module.css";

interface IHeader {
  imgURL: string;
  textImgURL: string;
  title: string;
  Link: string;
  possition?: string;
}

const headerData: IHeader[] = [
  {
    imgURL: "/src/assets/images/homeBanners/1.jpg",
    textImgURL: "/src/shared/icon/architectureTxt.svg",
    title:
      "Архитектура, которая вдохновляет. Проектируем уникальные пространства для жизни и работы.",
    Link: "/architecture",
  },
  {
    imgURL: "/src/assets/images/homeBanners/2.jpg",
    textImgURL: "/src/shared/icon/productTxt.svg",
    title:
      "Создаем запоминающуюся рекламу. Полиграфические и наружные решения для бренда.",
    Link: "/product",
  },
  {
    imgURL: "/src/assets/images/homeBanners/3.jpg",
    textImgURL: "/src/shared/icon/modellingTxt.svg",
    title:
      "Визуализируйте будущее! Создаем точные и детализированные 3D макеты.",
    Link: "/modelling",
  },
  {
    imgURL: "/src/assets/images/homeBanners/4.jpg",
    textImgURL: "/src/shared/icon/academyTxt.svg",
    title:
      "Станьте профессионалом! Программы обучения для творческих умов в архитектуре",
    Link: "/academy",
  },
];

export default function Header() {
  return (
    <div className={style.container}>
      <header>
        <div className={style.headerContainer}>
          {headerData.map((item, index) => (
            <Link to={item.Link}>
              <div
                key={index}
                className={style.head}
                style={{ backgroundImage: `url(${item.imgURL})` }}
              >
                <img
                  src={item.textImgURL}
                  alt="Header Text"
                  className={style.textImg}
                />
                <div className={style.overlay}>
                  <p className={style.title}>{item.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </header>
    </div>
  );
}
