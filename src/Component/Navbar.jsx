import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { FaHome, FaCog, FaPhoneAlt, FaInfoCircle, FaUser, FaSignOutAlt,FaCommentAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Vérifier l'état de connexion au chargement du composant
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token); // Si un token est présent, l'utilisateur est connecté
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Supprimer le token de localStorage
    setIsLoggedIn(false); // Mettre à jour l'état de la connexion
  };

  const colors = ['#ADD8E6', '#4682B4', '#808080', '#000000', '#8A2BE2'];
  const word = 'OUTDOOR';

  return (
    <nav style={styles.navbar}>
    <h1 style={styles.logo}>
      {word.split('').map((letter, index) => (
        <span key={index} style={styles.letter(colors[index % colors.length])}>
          {letter}
        </span>
      ))}
    </h1>
    <ul style={styles.navLinks}>
      <li style={styles.navItem}>
        <Link to="/" style={styles.link}>
          <FaHome /> Inicio
        </Link>
      </li>
      <li style={styles.navItem}>
        <Link to="/services" style={styles.link}>
          <FaCog /> Servicios
        </Link>
      </li>
      <li style={styles.navItem}>
 
        {isLoggedIn ? (
             <div style={styles.contactMessages}>
             <Link to="/messages" style={styles.link}>
               <FaCommentAlt style={styles.icon} />
               <span style={styles.text}>Mensajes</span>
             </Link>
           </div>
        ) : (
          <Link to="/contact" style={styles.link}>
            <FaPhoneAlt /> Contacto
          </Link>
        )}
      </li>
      <li style={styles.navItem}>
        <Link to="/aboutus" style={styles.link}>
          <FaInfoCircle /> Sobre Nosotros
        </Link>
      </li>
      <li style={styles.navItem}>
      
        {!isLoggedIn ? (
          <Link to="/login" style={styles.link}>
            <FaUser /> Iniciar Sesión
          </Link>
        ) : (
          <li style={styles.navItem}>
          <Link to="#" onClick={handleLogout} style={styles.link}>
            <FaSignOutAlt /> Cerrar Sesión
          </Link>
        </li>
        )}
      </li>
    </ul>
  </nav>

  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 3rem',
    backgroundColor: 'rgb(255, 254, 254)',
    color: 'rgb(150, 163, 186)',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    transition: 'background-color 0.3s ease',
  },
  letter: (color) => ({
    color: color,
    margin: '0 5px',
  }),
  logo: {
    fontSize: '2rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
    cursor: 'pointer',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  navItem: {
    fontSize: '1.2rem',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
  },
  contactMessages: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
};

export default Navbar;
