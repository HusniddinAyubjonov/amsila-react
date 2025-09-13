import { Link } from "react-router-dom";
import style from "./projects.module.css";

interface IProjects {
  bgUrl: string;
  text: string;
  hrefTo: string;
}

export default function ProjectsModelling() {
  const projects: IProjects[] = [
    {
      bgUrl: "/src/assets/images/architecture/bannerArch.jpg",
      text: "Банкетный дом",
      hrefTo: "/",
    },
    {
      bgUrl: "/src/assets/images/architecture/bannerArch.jpg",
      text: "Банкетный дом",
      hrefTo: "/architecture/projects/2",
    },
    {
      bgUrl: "/src/assets/images/architecture/bannerArch.jpg",
      text: "Банкетный дом",
      hrefTo: "/architecture/projects/3",
    },
    {
      bgUrl: "/src/assets/images/architecture/bannerArch.jpg",
      text: "Банкетный дом",
      hrefTo: "/architecture/projects/4",
    },
  ];

  return (
    <div className={style.container}>
      <h1 className={style.ProjectTitle}>
        Каждое пространство — <mark>история</mark>
      </h1>
      <div className={style.projects}>
        {projects.map((project, index) => (
          <div key={index} className={style.card}>
            <Link to={project.hrefTo}>
              <div className={style.image}>
                <img src={project.bgUrl} alt="img" />
                <p className={style.text}>{project.text}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
