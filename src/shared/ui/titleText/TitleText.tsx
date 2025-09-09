import style from "./titleText.module.css";
import imgUrl from "../../icon/A.svg";

interface ITitleText {
  title: string;
  titleGreen?: string;
  description?: string;
}

export default function TitleText({
  title,
  titleGreen,
  description,
}: ITitleText) {
  return (
    <div className={style.container}>
      <div className={style.TitleText}>
        <span>
          <h1 className={style.title}>
            {title} <mark>{titleGreen}</mark>
          </h1>
          <img className={style.img} src={imgUrl} alt="title image" />
        </span>
        <p className={style.description}>{description}</p>
      </div>
    </div>
  );
}
