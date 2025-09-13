import style from "./slider.module.css";

const images: string[] = [
  "/src/assets/images/homeSlider/1.jpg",
  "/src/assets/images/homeSlider/2.jpg",
  "/src/assets/images/homeSlider/3.jpg",
  "/src/assets/images/homeSlider/4.jpg",
  "/src/assets/images/homeSlider/5.jpg",
  "/src/assets/images/homeSlider/6.jpg",
  "/src/assets/images/homeSlider/7.jpg",
  "/src/assets/images/homeSlider/8.jpg",
  "/src/assets/images/homeSlider/9.jpg",
  "/src/assets/images/homeSlider/10.jpg",
  "/src/assets/images/homeSlider/11.jpg",
  "/src/assets/images/homeSlider/12.jpg",
  "/src/assets/images/homeSlider/13.jpg",
  "/src/assets/images/homeSlider/14.jpg",
  "/src/assets/images/homeSlider/15.jpg",
  "/src/assets/images/homeSlider/16.jpg",
  "/src/assets/images/homeSlider/17.jpg",
  "/src/assets/images/homeSlider/18.jpg",
  "/src/assets/images/homeSlider/19.jpg",
  "/src/assets/images/homeSlider/20.jpg",
  "/src/assets/images/homeSlider/21.jpg",
  "/src/assets/images/homeSlider/22.jpg",
  "/src/assets/images/homeSlider/23.jpg",
  "/src/assets/images/homeSlider/24.jpg",
  "/src/assets/images/homeSlider/25.jpg",
  "/src/assets/images/homeSlider/26.jpg",
  "/src/assets/images/homeSlider/27.jpg",
  "/src/assets/images/homeSlider/28.jpg",
  "/src/assets/images/homeSlider/29.jpg",
  "/src/assets/images/homeSlider/30.jpg",
  "/src/assets/images/homeSlider/31.jpg",
  "/src/assets/images/homeSlider/32.jpg",
  // ... добавь разные изображения
];

export default function Slider() {
  // Удваиваем массив для бесконечной прокрутки
  const duplicatedImages = [...images, ...images];

  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        {duplicatedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={style.image}
          />
        ))}
      </div>
    </div>
  );
}
