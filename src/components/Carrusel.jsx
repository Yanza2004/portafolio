import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../StylesPage/carrusel.css";

export function Carrusel({ imgs }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // cambia cada 3 segundos
    arrows: true, // muestra botones de navegación
  };

  if (!imgs || imgs.length === 0) {
    return <p>No hay imágenes</p>;
  }

  return (
    <div className="carrusel-container">
      <Slider {...settings}>
        {imgs.map((img, index) => (
          <div key={index} className="img-slide">
            <img src={img} alt={`slide-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
