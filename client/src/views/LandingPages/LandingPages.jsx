import React from 'react';
import { Link } from 'react-router-dom';
import style from './LandingPages.module.css';

const LandingPages = () => {
  return (
    <div className={ style.LandingPages }>
      <title>LandingPages</title>
      <div className={ style.container }>
        <h1>PI Dogs by Juan Salvá aka "1ennon" </h1>
        <br />
        <br />
        <br />
        <h3>THIS IS A PERSONAL PROJECT FOR HENRY, FROM A HENRY STUDENT.</h3>

        <Link to="/home">
          <button>ENTER</button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPages;