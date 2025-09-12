import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // Общий CSS Swiper

// Импортируем SVG-иконки
import prevBtn from "../../../assets/icon/prevBtn.svg";
import nextBtn from "../../../assets/icon/nextBtn.svg";

// Импортируем все изображения как модули
import img1 from "../../../assets/images/product/outdoor_advertising/1.png";
import img2 from "../../../assets/images/product/outdoor_advertising/2.png";
import img3 from "../../../assets/images/product/outdoor_advertising/3.png";
import img4 from "../../../assets/images/product/outdoor_advertising/4.png";
import img5 from "../../../assets/images/product/outdoor_advertising/5.png";
import img6 from "../../../assets/images/product/outdoor_advertising/6.png";
import img7 from "../../../assets/images/product/outdoor_advertising/7.png";
import img8 from "../../../assets/images/product/outdoor_advertising/8.png";
import img9 from "../../../assets/images/product/outdoor_advertising/9.png";
import img10 from "../../../assets/images/product/outdoor_advertising/10.png";
import img11 from "../../../assets/images/product/outdoor_advertising/11.png";
import img12 from "../../../assets/images/product/outdoor_advertising/12.png";
import img13 from "../../../assets/images/product/outdoor_advertising/13.png";
import img14 from "../../../assets/images/product/outdoor_advertising/14.png";
import img15 from "../../../assets/images/product/outdoor_advertising/15.png";
import img16 from "../../../assets/images/product/outdoor_advertising/16.png";
import img17 from "../../../assets/images/product/outdoor_advertising/17.png";
import img18 from "../../../assets/images/product/outdoor_advertising/18.png";
import img19 from "../../../assets/images/product/outdoor_advertising/19-2.png";
import img20 from "../../../assets/images/product/outdoor_advertising/20.png";
import img21 from "../../../assets/images/product/outdoor_advertising/21.png";

// Импортируем CSS Modules
import styles from "./OutdoorAdvertisingCarousel.module.css";

const OutdoorAdvertisingCarousel: React.FC = () => {
  const products = [
    { img: img1, text: "Оклейка и брендирование витрин" },
    { img: img2, text: "Широкоформатная печать" },
    { img: img3, text: "Крышные установки" },
    { img: img4, text: "Брендирование авто" },
    { img: img5, text: "Световые короба (лайтбокс)" },
    { img: img6, text: "Объемные буквы" },
    { img: img7, text: "Дорожные знаки" },
    { img: img8, text: "Сигнальные знаки" },
    { img: img9, text: "Навигационный пилон" },
    { img: img10, text: "Указатели" },
    { img: img11, text: "Дверные таблички" },
    { img: img12, text: "Сити-форматы (ситилайт)" },
    { img: img13, text: "Флагшток" },
    { img: img14, text: "Павильоны и будки для банкоматов" },
    { img: img15, text: "Рекламная стелла" },
    { img: img16, text: "Ростовая фигура" },
    { img: img17, text: "Промостойки" },
    { img: img18, text: "Штендер" },
    { img: img19, text: "Паук (Х-стенд) || Ролл-ап (Roll-up)" },
    { img: img20, text: "Рекламные 3D скульптуры" },
    { img: img21, text: "(МА Ф) Малые Архитектурные формы" },
  ];

  return (
    <div className={styles.all_carousell}>
      <div className={styles.carousell_header_button}>
        <span className={styles.idea_title_2}>Наружная реклама</span>

        {/* 🔥 КНОПКИ НАВИГАЦИИ — ЧИСТЫЕ, БЕЗ ЛИШНЕГО */}
        <div className={styles.vektor_button}>
          <button className={styles.custom_prev} aria-label="Previous">
            <img src={prevBtn} alt="Previous" />
          </button>
          <button className={styles.custom_next} aria-label="Next">
            <img src={nextBtn} alt="Next" />
          </button>
        </div>
      </div>

      <div className={styles.carousel_wrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={"auto"}
          freeMode={true}
          navigation={{
            nextEl: `.${styles.custom_next}`, // ← ТОЛЬКО ЭТОТ КЛАСС!
            prevEl: `.${styles.custom_prev}`, // ← ТОЛЬКО ЭТОТ КЛАСС!
          }}
          pagination={{ clickable: true }}
          className={styles.endless}
          style={{ marginTop: "24px" }}
        >
          {products.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "fit-content" }}>
              <div className={styles.card_product}>
                <div className={styles.top_card}>
                  <img
                    src={item.img}
                    alt="card_image"
                    className={styles[`img_${index}`]}
                  />
                </div>
                <h3 className={styles.card_text}>{item.text}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OutdoorAdvertisingCarousel;
