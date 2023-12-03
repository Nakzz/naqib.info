import React, { useState, useEffect } from "react";
import Link from "next/link";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

interface IProps {
  data: {
    name: string;
    path: string;
    heading: string;
    image: { filename: string };
  }[];
}

const Works: React.FC<IProps> = ({ data }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpenImage, setIsOpenImage] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const newImages = data.map((item) => {
      const hostname = "https://naqib.info/public/projects/";
      return item.image && item.image.filename
        ? hostname + item.image.filename
        : "./../images/work-image/1.jpg";
    });
    setImages(newImages);
  }, [data]);

  const renderProject = (item, index) => {
    const hostname = "https://naqib.info/public/projects/";
    const link = `/projects/${item.path}`;
    const imageLink = images[index];
    const bootClass =
      index === 0 || index % 5 === 0
        ? "col-lg-6 col-md-12 col-sm-12 p-0"
        : "col-lg-3 col-md-6 col-sm-6 p-0";

    return (
      <div key={index} className={bootClass}>
        <div className="single-work m-0 m-b-50">
          <img src={imageLink} alt="image" />
          <div className="works-content">
            <h3>
              <Link href={link}>
                <a>{item.name}</a>
              </Link>
            </h3>
            <p>{item.heading}</p>
          </div>
          <Link href={link}>
            <a
              className="popup-btn"
              onClick={(e) => {
                e.preventDefault();
                setPhotoIndex(index);
                setIsOpenImage(true);
              }}
            >
              <i className="icofont-expand"></i>
            </a>
          </Link>
        </div>
      </div>
    );
  };

  if (data && data.length !== 0) {
    return (
      <section className="works-area ptb-120 pb-0 bg-08071c">
        <div className="container">
          <div className="section-title">
            <span className="wow fadeInUp">Highlighted Projects </span>
            <h2 className="wow fadeInDown">A few projects I have worked on</h2>
          </div>
        </div>
        <div className="row m-0 justify-content-md-center">
          {data.map(renderProject)}
          {isOpenImage && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setIsOpenImage(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)
              }
            />
          )}
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Works;
