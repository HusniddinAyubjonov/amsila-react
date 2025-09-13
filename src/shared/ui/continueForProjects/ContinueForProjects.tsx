import { Link } from "react-router-dom";
import style from "./continueForProjects.module.css";

interface IContinueForProjects {
  imgUrl: string;
  text: string;
  hrefTo: string; // <== здесь тоже должно быть "To", не "То"
}

export default function ContinueForProjects({
  imgUrl,
  text,
  hrefTo,
}: IContinueForProjects) {
  return (
    <div className={style.container}>
      <div className={style.continueTxt}>
        <h1>
          Продолжение <mark>вдохновения</mark>
        </h1>
      </div>

      <div className={style.continueProject}>
        <Link to={hrefTo}>
          <img src={imgUrl} alt="img" />
          <h1>{text}</h1>
        </Link>
      </div>
    </div>
  );
}
