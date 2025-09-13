import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

// Импортируем SVG-иконки
import prevBtn from "../../assets/icon/prevBtn.svg";
import nextBtn from "../../assets/icon/nextBtn.svg";

// Импортируем изображения
import img1 from "../../assets/images/product/printing_branding/1.png";
import img2 from "../../assets/images/product/printing_branding/2.png";
import img3 from "../../assets/images/product/printing_branding/3.png";
import img4 from "../../assets/images/product/printing_branding/4.png";
import img5 from "../../assets/images/product/printing_branding/5.png";
import img6 from "../../assets/images/product/printing_branding/6.png";
import img7 from "../../assets/images/product/printing_branding/7.png";
import img8 from "../../assets/images/product/printing_branding/8.png";
import img9 from "../../assets/images/product/printing_branding/9.png";
import img10 from "../../assets/images/product/printing_branding/10.png";
import img11 from "../../assets/images/product/printing_branding/11.png";
import img12 from "../../assets/images/product/printing_branding/12.png";
import img13 from "../../assets/images/product/printing_branding/13.png";
import img14 from "../../assets/images/product/printing_branding/14.png";
import img15 from "../../assets/images/product/printing_branding/15.png";
import img16 from "../../assets/images/product/printing_branding/16.png";
import img17 from "../../assets/images/product/printing_branding/17.png";
import img18 from "../../assets/images/product/printing_branding/18.png";
import img19 from "../../assets/images/product/printing_branding/19.png";
import img20 from "../../assets/images/product/printing_branding/20.png";
import img21 from "../../assets/images/product/printing_branding/21.png";

import styles from "./PrintingBranding.module.css";

const PrintingBranding: React.FC = () => {
  const products = [
    { img: img1, text: "Визитки" },
    { img: img2, text: "Конверты" },
    { img: img3, text: "Листовки" },
    { img: img4, text: "Журналы и каталоги" },
    { img: img5, text: "Блокноты" },
    { img: img6, text: "Кубарики" },
    { img: img7, text: "Бейджи" },
    { img: img8, text: "Папки" },
    { img: img9, text: "Календари" },
    { img: img10, text: "Ручки и карандаши" },
    { img: img11, text: "Пакеты" },
    { img: img12, text: "Шопперы" },
    { img: img13, text: "Кружки" },
    { img: img14, text: "Флеш карты" },
    { img: img15, text: "Футболки бейсболки" },
    { img: img16, text: "Брелки" },
    { img: img17, text: "Зонты" },
    { img: img18, text: "Награды" },
    { img: img19, text: "Праздничные коробки" },
    { img: img20, text: "Коробки для вашей продукции" },
    { img: img21, text: "Именные коробки" },
  ];

  // 🔥 ИСПОЛЬЗУЕМ useRef ДЛЯ ХРАНЕНИЯ ЭКЗЕМПЛЯРА SWIPER
  const swiperRef = useRef<any>(null);

  return (
    <div className={styles.all_carousell}>
      <div className={styles.carousell_header_button}>
        <span className={styles.idea_title_2}>Полиграфия Брендирование</span>

        <div className={styles.vektor_button}>
          <button
            className={styles.custom_prev}
            aria-label="Previous"
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slidePrev(); // ✅ Теперь это работает!
              }
            }}
          >
            <img src={prevBtn} alt="Previous" />
          </button>
          <button
            className={styles.custom_next}
            aria-label="Next"
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideNext(); // ✅ Теперь это работает!
              }
            }}
          >
            <img src={nextBtn} alt="Next" />
          </button>
        </div>
      </div>

      <div className={styles.carousel_wrapper}>
        <Swiper
          // 🔥 ВАЖНО: УБИРАЕМ ref={swiperRef} — он даёт DOM, а не Swiper!
          // ref={swiperRef} ← УДАЛИТЕ ЭТО!

          onSwiper={(swiper) => {
            // 🔥 СОХРАНЯЕМ ЭКЗЕМПЛЯР SWIPER В useRef
            swiperRef.current = swiper;
            console.log("✅ Swiper instance saved:", swiper);
          }}
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={"auto"}
          freeMode={true}
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

export default PrintingBranding;
