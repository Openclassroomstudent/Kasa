import React from 'react'
import { Link } from 'react-router-dom'
import logements from '../data/Logements.json'

const Card = () => {
  return (
    <section className="card-main">
      {logements.map((logement) => {
        return (
          <article key={logement.id}>
            <Link
              to={`/FicheLogement/${logement.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div className="card-content">
                <img
                  className="card-img"
                  src={logement.cover}
                  alt={logement.title}
                />
                <h3 className="card-title">{logement.title}</h3>
              </div>
            </Link>
          </article>
        )
      })}
    </section>
  )
}

export default Card
