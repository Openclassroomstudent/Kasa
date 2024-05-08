import React from 'react'

const Banner = ({ img, text }) => {
  return (
    <div className="banner">
      <img
        // ajoutez une classe si nous avons un texte pour la bannière
        className={'banner-img' + (text ? ' banner__img--text' : '')}
        src={img}
        alt="bannière Kasa"
      />
      <h1 className="banner__text">{text}</h1>
    </div>
  )
}

export default Banner
