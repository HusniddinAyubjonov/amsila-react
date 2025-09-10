import style from "./team.module.css";
import clsx from "clsx";

interface ITeamText {
  title: string;
  description: string;
}

const TeamText: ITeamText[] = [
  {
    title: "Качество во всём",
    description:
      "Пространство, которое мы оживили, создавая вдохновение в каждой детали.",
  },

  {
    title: "Творческий подход",
    description:
      "Мы ищем нестандартные решения для каждой задачи, чтобы проект отражал уникальный стиль и вдохновение.",
  },

  {
    title: "Ответственность перед клиентом",
    description:
      "Доверие клиента — наш приоритет, и мы бережно работаем над каждой деталью, соблюдая сроки и обещания.",
  },

  {
    title: "Прозрачность и доверие",
    description:
      "Мы честны и открыты в работе, выстраивая доверительные отношения с клиентами и партнёрами, чтобы добиться взаимного успеха..",
  },

  {
    title: "Развитие и обучение",
    description:
      "Мы стремимся расти и учиться, делясь знаниями друг с другом и вдохновляя на новый уровень профессионализма.",
  },

  {
    title: "Работа в команде",
    description:
      "Вместе мы достигаем большего: синергия идей и усилий помогает нам создавать действительно значимые результаты.",
  },
];

export default function Team() {
  return (
    <div className={style.container}>
      <div className={style.Teamtext}>
        <h1>
          То, что нас <mark>объединяет</mark>
        </h1>
      </div>
      <div className={style.teams}>
        {TeamText.map((item, index) => (
          <div className={clsx(style.team, style[`team${index + 1}`])}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
