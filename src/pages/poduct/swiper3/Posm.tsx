import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

// Импортируем SVG-иконки
import prevBtn from "../../../assets/icon/prevBtn.svg";
import nextBtn from "../../../assets/icon/nextBtn.svg";

// Импортируем изображения
import img1 from "../../../assets/images/product/posm/1.png";
import img2 from "../../../assets/images/product/posm/2.png";
import img3 from "../../../assets/images/product/posm/3.png";
import img4 from "../../../assets/images/product/posm/4-2.png";
import img5 from "../../../assets/images/product/posm/5.png";
import img6 from "../../../assets/images/product/posm/6.png";
import img7 from "../../../assets/images/product/posm/7.png";
import img8 from "../../../assets/images/product/posm/8.png";
import img9 from "../../../assets/images/product/posm/9.png";
import img10 from "../../../assets/images/product/posm/10.png";
import img11 from "../../../assets/images/product/posm/11.png";

import styles from "./Posm.module.css";

const Posm: React.FC = () => {
  const products = [
    { img: img1, text: "Прикассовое оборудование" },
    { img: img2, text: "Театрализация" },
    { img: img3, text: "Категорийное оформление" },
    { img: img4, text: "Подвесные дисплеи" },
    { img: img5, text: "Торговая мебель" },
    { img: img6, text: "Напольная реклама" },
    { img: img7, text: "Мобайл" },
    { img: img8, text: "Стрип-лента" },
    { img: img9, text: "Ценниковыделитель" },
    { img: img10, text: "Диспенер" },
    { img: img11, text: "Стоппер, Воблер, Шелфтокер" },
  ];

  // 🔥 ИСПОЛЬЗУЕМ useRef ДЛЯ ХРАНЕНИЯ ЭКЗЕМПЛЯРА SWIPER
  const swiperRef = useRef<any>(null);

  return (
    <div className={styles.all_carousell}>
      <div className={styles.carousell_header_button}>
        <span className={styles.idea_title_2}>Посм</span>

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

export default Posm;
