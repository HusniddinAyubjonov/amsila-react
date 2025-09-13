import style from "./TitleForProjects.module.css";

interface ITitleForProjects {
  title?: string;
  subtitle?: string;
  subtitle2?: string;
  subtitle3?: string;
  subtitle4?: string;
  subtitle5?: string;
}

export default function TitleForProjects({
  title,
  subtitle,
  subtitle2,
  subtitle3,
  subtitle4,
  subtitle5,
}: ITitleForProjects) {
  return (
    <div className={style.container}>
      <div className={style.TitleForProjectsTxt}>
        <h1>{title}</h1>
        <h3>
          {subtitle} <br /> {subtitle2} <br /> {subtitle3} <br /> {subtitle4}{" "}
          <br /> {subtitle5} <br />
        </h3>
      </div>
    </div>
  );
}
