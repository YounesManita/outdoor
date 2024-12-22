import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

import background from "../assets/background.mp4"
const Home = () => {
  const realisation = [
    {
      src: '/assets/wael1.jpg', // Remplacer par une image réelle
      title: 'Service 1',
    },
    {
      src: '/assets/image2.jpg', 

      title: 'Service 2',
    },
    {
      src: '/assets/image3.jpg', 

      title: 'Service 3',
    },
    {
      src: '/assets/image4.jpg',

      title: 'Service 4',
    },
    {
      src: '/assets/image5.jpg', // Remplacer par une image réelle
      title: 'Service 1',
    },
    {
      src: '/assets/image6.jpg', 

      title: 'Service 2',
    },
    {
      src: '/assets/image7.jpg', 

      title: 'Service 3',
    },
    {
      src: '/assets/image8.jpg',

      title: 'Service 4',
    },

  ];
  
  const testimonials = [
    {
      name: "Juan Pérez",
      profession: "Gerente de Empresa",
      feedback:
        "El trabajo de mantenimiento que realizaron en nuestras instalaciones fue impecable. La empresa se encargó de la fontanería y los paneles solares, y todo quedó perfectamente instalado. Estoy muy satisfecho con la calidad y el servicio.",
      rating: 5,
      image: "https://via.placeholder.com/150", // Remplacer par l'URL de l'image réelle
    },
    {
      name: "Ana García",
      profession: "Directora de Operaciones",
      feedback:
        "Contratamos el servicio de albañilería para realizar una reforma en la oficina y quedamos encantados. Todo se hizo con rapidez y precisión, ¡el equipo es muy profesional!",
      rating: 5,
      image: "https://via.placeholder.com/150", // Remplacer par l'URL de l'image réelle
    },
    {
      name: "Carlos López",
      profession: "Propietario de Vivienda",
      feedback:
        "El servicio de pintura que contraté para mi hogar fue excepcional. Pintaron las paredes de la casa con mucho detalle y sin hacer ningún desorden. ¡Recomiendo esta empresa sin dudar!",
      rating: 5,
      image: "https://via.placeholder.com/150", // Remplacer par l'URL de l'image réelle
    },
    
  
  
  ];
  
  const services = [
    {
      src: "/assets/image10.jpg",
      title: "Paneles Solares",
      desc: "Instalación y mantenimiento de paneles solares para hogares y empresas.",
    },
    {
      src: "/assets/462572392_574286441873966_4481292426819294374_n.jpg",
      title: "Aires Acondicionados",
      desc: "Servicio de instalación y reparación de aires acondicionados.",
    },
    {
      src: "/assets/imag1.jpg",
      title: "Pintura",
      desc: "Pintura profesional para interiores y exteriores con acabados impecables.",
    },
    {
      src: "/assets/image5.jpg",
      title: "Electricidad",
      desc: "Reparación e instalación eléctrica para proyectos residenciales y comerciales.",
    },
    {
      src: "assets/image2.jpg",
      title: "Albañilería",
      desc: "Reformas de albañilería para oficinas y hogares con diseño personalizado.",
    },
  ];
  
  return (
    <div style={styles.container}>
      {/* Section Héro */}
      
      <section style={styles.home}>
      
  <div style={styles.hero}>
     <a
      href="https://wa.me/21612345678" // Remplacez ce numéro par le vôtre
      target="_blank"
      rel="noopener noreferrer"
      style={styles.whatsappButton}
    >
      WhatsApp
    </a>
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
    
      <h1 style={styles.heroTitle}>
        Bienvenidos a <span style={styles.brand}>Portorreal Obros</span>
      </h1>
      <p style={styles.heroSubtitle}>
        Líder en renovación y mantenimiento para casas y locales comerciales.
      </p>
      <p style={styles.sectionText}>
          Ofrecemos una amplia gama de servicios, desde renovaciones completas hasta mantenimiento regular. 
          Nos especializamos en adaptar nuestros servicios a las necesidades de cada cliente, garantizando resultados de alta calidad.
        </p>
        <button style={styles.button}>Ver Más Servicios</button>
     
     

      <div style={styles.sectionContent}>
        <h2 style={styles.sectionTitle}>¿Por qué elegirnos?</h2>
        <p style={styles.sectionText}>
          En <span style={styles.brand}>Portorreal Obros</span>, nos enorgullece brindar servicios personalizados que superan las expectativas. 
          Nuestros expertos trabajan con los mejores materiales para asegurar durabilidad y satisfacción en cada proyecto.
        </p>
        <button style={styles.button}>Descubre Más</button>
      </div>

 
    </motion.div>
  </div>
</section>


      <div class="container">
  <div class="section">
    <div class="image-text">
     
      <div class="text">
        <h2>Estamos preparados para ayudarte con tus reformas.</h2>
        <p>“DeReformas”, reformas integrales de pisos, chalets y locales comerciales en Madrid.</p>
        <p>Somos líderes en el sector debido a nuestra política de calidad y precios.</p>
        <p>Vea nuestras reformas integrales, reformas de cocinas, reformas de exteriores y reformas de baño.</p>
        <p>Somos especialistas en muebles de cocina, muebles de baño, albañilería, carpintería y pintura.</p>
      </div>
      <div class="image">
        <img src="https://portorrealobros-com.preview-domain.com/wp-content/uploads/2024/12/pexels-shkrabaanthony-5493664-1-1536x1024.jpg" alt="Reformas"/>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="image-text">
      <div class="image">
        <img src="https://portorrealobros-com.preview-domain.com/wp-content/uploads/2024/12/pexels-shkrabaanthony-5493664-1-1536x1024.jpg" alt="Reformas"/>
      </div>
      <div class="text">
        <h2>Reformas de cocinas y baños personalizadas.</h2>
        <p>Trabajamos con materiales de la más alta calidad para ofrecer soluciones duraderas.</p>
        <p>Nuestro equipo de expertos garantiza una ejecución rápida y eficiente.</p>
        <p>Garantizamos satisfacción en cada uno de nuestros proyectos.</p>
        <p>Nuetros precios son competitivos, ajustados a las necesidades de cada cliente.</p>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="image-text">
      
      <div class="text">
        <h2>Especialistas en reformas de exteriores.</h2>
        <p>Transformamos el aspecto exterior de tu vivienda o local comercial.</p>
        <p>Trabajamos con materiales resistentes para garantizar la durabilidad de nuestros proyectos.</p>
        <p>Desde jardines hasta terrazas, contamos con un equipo capacitado para realizar reformas completas.</p>
        <p>Brindamos un servicio completo, desde el diseño hasta la ejecución final.</p>
      </div>
      <div class="image">
        <img src="https://portorrealobros-com.preview-domain.com/wp-content/uploads/2024/12/pexels-shkrabaanthony-5493664-1-1536x1024.jpg" alt="Reformas"/>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="image-text">
      <div class="image">
        <img src="https://portorrealobros-com.preview-domain.com/wp-content/uploads/2024/12/pexels-shkrabaanthony-5493664-1-1536x1024.jpg" alt="Reformas"/>
      </div>
      <div class="text">
        <h2>Reformas integrales de viviendas.</h2>
        <p>Realizamos reformas de viviendas completas, desde la demolición hasta la finalización.</p>
        <p>Nos encargamos de todas las fases del proyecto: planificación, ejecución y acabados finales.</p>
        <p>Adaptamos nuestros proyectos a tus necesidades y gustos personales.</p>
        <p>Tu satisfacción es nuestra prioridad, garantizando un trabajo de calidad.</p>
      </div>
    </div>
  </div>
</div>




      {/* Section Services */}
      <div className="container">
  {/* Vidéo en arrière-plan */}
  <video src={background} autoPlay loop muted className="video">
    <source src="background.mp4" type="video/mp4" />
    Votre navigateur ne supporte pas la balise vidéo.
  </video>

  {/* Section des services */}
  <motion.div
    className="services"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    <h2 className='sectionTitle'>Nuestros Servicios</h2>
    <div className='serviceCards'>
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="card"
          whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={service.src} alt={service.title} className='image' />
          <h3 className='cardTitle'>{service.title}</h3>
          <p className="cardDesc">{service.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</div>


      {/* Section Galerie */}
      <motion.div
    style={styles.gallery}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2, delay: 0.5 }}
  >
    <h2 style={styles.sectionTitle}>
    Nuestras Realizaciones</h2>
    <div style={styles.photos}>
      {realisation.map((service, index) => (
        <motion.div
          key={index}
          style={styles.photoCard}
          whileHover={{ scale: 1.1, boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)' }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={service.src} alt={service.title} style={index % 2 === 0 ? styles.smallPhoto : styles.largePhoto} />
          <motion.p
            style={styles.photoDesc}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {service.title}
          </motion.p>
        </motion.div>
      ))}
    </div>
  </motion.div>
      <div className="testimonials-section" >
      <h2>Lo Que Dicen Nuestros Clientes</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="client-image">
              <img src={testimonial.image} alt={`${testimonial.name}`} />
            </div>
            <h3>{testimonial.name}</h3>
            <p className="profession">{testimonial.profession}</p>
            <div className="rating">
              {"⭐".repeat(testimonial.rating)}
            </div>
            <p className="feedback">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>


    </div>
  );
};

const styles = {
  
  gallery: {
    textAlign: 'center',
    marginTop: '2rem',
    padding: '2rem',
    background: '#f8f9fa',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333',
  },
  photos: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
  },
  photoCard: {
    position: 'relative',
    width: 'auto',
    marginBottom: '1rem',
    overflow: 'hidden',
  },
  smallPhoto: {
    width: '200px',
    height: '150px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  largePhoto: {
    width: '300px',
    height: '225px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  whatsappButton: {
    marginTop: '-20px',
    display: 'inline-block',
    backgroundColor: '#25D366', 
    color: '#fff',
    padding: '10px 25px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderRadius: '50px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  photoDesc: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '0.5rem',
    background: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    fontSize: '1rem',
    textAlign: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  home: {
    backgroundImage:
      'url("/assets/bacckground.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    backgroundAttachment: 'fixed',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    marginBottom: "20%",
  },
  hero: {
    textAlign: 'center',
    backgroundColor: 'rgba(156, 172, 189, 0.5)', // Bleu transparent
    borderRadius: '50px',
    margin: '2rem auto',
    width: '90%',
    height: '300px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  brand: {
    color: '#ffc107',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    color: '#e0e0e0',
    marginTop: '1rem',
    fontStyle: 'italic',
  },
  sectionContent: {
    margin: '10rem 0',
    padding: '1.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.4)', 
    marginBottom:'8%',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s, transform 0.3s',
  },
  
  sectionText: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#444',
    textAlign: 'justify',
    marginBottom: '1.5rem',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '0.8rem 2rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    textTransform: 'uppercase',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },

  

  
   
    services: {
      padding: '2rem 0',
      backgroundColor: 'rgba(248, 249, 250, 0.7)',
      
    },
    serviceCards: {
      display: 'flex',
      gap: '2rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    card: {
      textAlign: 'center',
      maxWidth: '280px',
      padding: '1.5rem',
      border: '1px solid #ddd',
      borderRadius: '10px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'box-shadow 0.3s, transform 0.3s',
    },
    cardTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginTop: '1rem',
      color: '#007bff',
    },
    cardDesc: {
      fontSize: '1rem',
      color: '#666',
      marginTop: '0.5rem',
    },
    image: {
      width: '100%',
      borderRadius: '10px',
      transition: 'transform 0.3s',
      objectFit: 'cover',
    },
   
    
   
   
  
    // Media Queries pour les écrans plus petits
    '@media (max-width: 768px)': {
      hero: {
        height: '250px', // Réduit la hauteur de la section héro sur mobile
        padding: '0.5rem',
      },
      heroTitle: {
        fontSize: '2rem', // Réduit la taille du titre
      },
      heroSubtitle: {
        fontSize: '1rem', // Réduit la taille de la sous-titre
      },
      sectionTitle: {
        fontSize: '2rem', // Réduit la taille de titre de la section
      },
      serviceCards: {
        gap: '1rem', // Réduit l'écart entre les cartes
        flexDirection: 'column', // Aligne les cartes en colonne sur mobile
      },
      card: {
        maxWidth: '100%', // Les cartes prennent 100% de la largeur sur mobile
        padding: '1rem',
      },
      gallery: {
        marginTop: '2rem',
      },
      photoCard: {
        maxWidth: '150px', // Réduit la taille des photos
      },
    },
  
    // Media Queries pour les écrans plus petits que 480px (mobile)
    '@media (max-width: 480px)': {
      heroTitle: {
        fontSize: '1.5rem', // Encore plus petit sur les très petits écrans
      },
      heroSubtitle: {
        fontSize: '0.9rem', // Plus petit pour mobile
      },
      sectionTitle: {
        fontSize: '1.8rem', // Plus petit pour mobile
      },
      photoDesc: {
        fontSize: '0.8rem', // Réduit la taille de la description
      },
    },
    
  };
  

export default Home;
