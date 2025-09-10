import clsx from "clsx";
import style from "./certificate.module.css";

interface CertificateImg {
  img: string;
}

const certificate: CertificateImg[] = [
  { img: "/src/assets/images/certificates/1.jpg" },
  { img: "/src/assets/images/certificates/2.jpg" },
  { img: "/src/assets/images/certificates/3.jpg" },
  { img: "/src/assets/images/certificates/4.jpg" },
  { img: "/src/assets/images/certificates/5.jpg" },
  { img: "/src/assets/images/certificates/6.jpg" },
  { img: "/src/assets/images/certificates/7.jpg" },
  { img: "/src/assets/images/certificates/8.jpg" },
];

const duplicatedCertificate = [...certificate, ...certificate];

export default function Certificate() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.PartnerText}>
          <h1>
            Знаки
            <mark> доверия и признания</mark>
          </h1>
        </div>
      </div>
      <div className={style.imgsContainer}>
        <div className={style.track}>
          {duplicatedCertificate.map((partner, index) => (
            <div key={index} className={style.imgContainer}>
              <img
                src={partner.img}
                alt={`Partner ${index + 1}`}
                className={clsx(style.img, style[`img${index + 1}`])}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
