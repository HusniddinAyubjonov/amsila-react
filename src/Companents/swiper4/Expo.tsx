import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

// Импортируем SVG-иконки
import prevBtn from "../../assets/icon/prevBtn.svg";
import nextBtn from "../../assets/icon/nextBtn.svg";

// Импортируем изображения
import img1 from "../../assets/images/product/expo/1.jpg"
import img2 from "../../assets/images/product/expo/2.jpg";
import img3 from "../../assets/images/product/expo/3.jpg";

import styles from "./Expo.module.css";

const Expo: React.FC = () => {
  const products = [
    { img: img1, text: "Прикассовое оборудование" },
    { img: img2, text: "Театрализация" },
    { img: img3, text: "Категорийное оформление" },
  ];

  // 🔥 ИСПОЛЬЗУЕМ useRef ДЛЯ ХРАНЕНИЯ ЭКЗЕМПЛЯРА SWIPER
  const swiperRef = useRef<any>(null);

  return (
    <div className={styles.all_carousell}>
      <div className={styles.carousell_header_button}>
        <span className={styles.idea_title_2}>Экспо</span>

        <div className={styles.vektor_button} style={{ display: "none" }}>
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

export default Expo;
