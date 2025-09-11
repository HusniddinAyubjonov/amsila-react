import style from "./banners.module.css";

interface IBanners {
  bannerUrl: string;
  textImg: string;
  title: string;
}

export default function Banners({ bannerUrl, textImg, title }: IBanners) {
  return (
    <div className={style.container}>
      <header>
        <div
          className={style.banner}
          style={{ backgroundImage: `url(${bannerUrl})` }}
        >
          <img src={textImg} alt="logo" />
          <h1>{title}</h1>
        </div>
      </header>
    </div>
  );
}
