import style from "./ourExperience.module.css";

interface IOurExperience {
  title: string;
  subtitle: string;
}

const experienceData: IOurExperience[] = [
  {
    title: "5 лет",
    subtitle: "Опыт в проектировании и создании современных зданий.",
  },
  {
    title: "120+",
    subtitle: "Уникальных архитектурных концепций и решений.",
  },
  {
    title: "120 000 м²",
    subtitle: "Общая площадь спроектированных объектов.",
  },
];

export default function OurExperience() {
  return (
    <div className={style.container}>
      <div className={style.cards}>
        {experienceData.map((item, index) => (
          <div key={index} className={`${style.card} card${index + 1}`}>
            <h2 className={style.title}>{item.title}</h2>
            <p
              className={`${style.subtitle} ${
                style[`subtitle${index + 1}`] ?? ""
              }`}
            >
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
