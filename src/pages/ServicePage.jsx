import React from "react";
import Slider from "react-slick";
import "./Services.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'; 
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Albanileria",
      paragraphs: [
        "Reformas de albañilería para mejorar y renovar tu hogar o espacio comercial.",
        "Trabajamos con materiales de alta calidad para garantizar durabilidad.",
      ],
      images: [
        "https://images.unsplash.com/photo-1543541650-764b9f831199?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "https://images.unsplash.com/photo-1590512292424-6ca02e7ecb8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "https://images.unsplash.com/photo-1593642531847-b38e2871ee7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      ],
      icon: "🧱",
    },
    {
      id: 2,
      title: "Fontaneria",
      paragraphs: [
        "Instalación y reparación de sistemas de fontanería para tu hogar o negocio.",
        "Soluciones rápidas y efectivas para problemas de plomería.",
      ],
      images: [
        "https://images.unsplash.com/photo-1579764365733-10758e1dcb11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "https://images.unsplash.com/photo-1585745291075-e2286c8d7270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "https://images.unsplash.com/photo-1579553563192-61c1a8d98261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      ],
      icon: "🚰",
    },
    {
      id: 3,
      title: "Electricidad",
      paragraphs: [
        "Servicios de electricidad para asegurar el funcionamiento de tus instalaciones.",
        "Reparación e instalación de sistemas eléctricos de manera segura y eficiente.",
      ],
      images: [
        "https://images.unsplash.com/photo-1603701836146-2c2f98d31a30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "https://images.unsplash.com/photo-1506755568160-35b5b8f52b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "https://images.unsplash.com/photo-1600970745675-52b519199fa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      ],
      icon: "⚡",
    },
    {
      id: 4,
      title: "Paneles Solares",
      paragraphs: [
        "Instalación de paneles solares para una energía más limpia y económica.",
        "Aprovecha el sol y reduce tus costos energéticos.",
      ],
      images: [
        "https://images.unsplash.com/photo-1507597720153-9600c318cb99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "https://images.unsplash.com/photo-1579763144329-0cbfa167fe0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "https://images.unsplash.com/photo-1586266236396-099ee84e3b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      ],
      icon: "☀️",
    },
    {
      id: 5,
      title: "Pintura",
      paragraphs: [
        "Servicios de pintura para renovar y embellecer tu espacio.",
        "Colores y acabados que se adaptan a tu estilo.",
      ],
      images: [
        "https://images.unsplash.com/photo-1512820790803-194f1d97ed2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "https://images.unsplash.com/photo-1531250604287-44c6c5f7d3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "https://images.unsplash.com/photo-1557692568-f4c259219f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      ],
      icon: "🎨",
    },
    {
      id: 6,
      title: "Baño",
      paragraphs: [
        "Renovación de baños con diseños modernos y funcionales.",
        "Creación de espacios confortables con materiales de calidad.",
      ],
      images: [
        "https://images.unsplash.com/photo-1584556311986-bdf04e33a6c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "https://images.unsplash.com/photo-1551836027-95fd08f3b9b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "https://images.unsplash.com/photo-1579720219860-b3873b1660b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      ],
      icon: "🛁",
    },
    {
      id: 7,
      title: "Carpinteria",
      paragraphs: [
        "Servicios de carpintería para crear muebles personalizados y más.",
        "Trabajo a medida para satisfacer tus necesidades y gustos.",
      ],
      images: [
        "https://images.unsplash.com/photo-1550836624-04b9f32bcf58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "https://images.unsplash.com/photo-1563885466-f039045dffb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        "https://images.unsplash.com/photo-1603384877006-b9a9a276a34e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      ],
      icon: "🪚",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div>
      {services.map((service) => (
        <section
          key={service.id}
          className={`service-section ${service.id === 1
            ? "albanileria"
            : service.id === 2
            ? "fontaneria"
            : service.id === 3
            ? "electricidad"
            : service.id === 4
            ? "paneles-solares"
            : service.id === 5
            ? "pintura"
            : service.id === 6
            ? "bano"
            : "carpinteria"
          }`}
        >
          <div className="service-content">
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            {service.paragraphs.map((para, index) => (
              <p key={index} className="service-description">
                {para}
              </p>
            ))}
            <Slider {...sliderSettings} className="service-carousel">
              {service.images.map((img, index) => (
                <div key={index} className="carousel-image-wrapper">
                  <img
                    src={img}
                    alt={`Image ${index + 1}`}
                    className="service-image"
                  />
                </div>
              ))}
            </Slider>
            <Link to={`/details/${service.id}`}  state={{ service }} className="service-button">
              Voir Plus
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;
