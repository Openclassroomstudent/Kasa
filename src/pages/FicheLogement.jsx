import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logements from '../data/Logements.json';
import Rating from '../components/Rating';
import Carrousel from '../components/Carrousel';
import DropDown from '../components/DropDown';
import Tag from '../components/Tag';

const FicheLogement = () => {
      const { id } = useParams();
      const selectedData = logements.find((item) => item.id === id);

      if (!selectedData) {
            return <Navigate to="/NotFound" />;
      }

      const { title, location, host, tags, rating, description, equipments } =
            selectedData;
      const hostName = host.name;
      const hostPic = host.picture;
      const data = [
            {
                  title: 'Description',
                  description,
            },
            {
                  title: 'Équipements',
                  description: equipments.map((equipment) => (
                        <p className="equipement-text" key={equipment}>
                              {equipment}
                              <br />
                        </p>
                  )),
            },
      ];

      return (
            <div>
                  <Carrousel pictures={selectedData.pictures} title={selectedData.title} />
                  <div className="logementHost">
                        <div className="logementTag">
                              <div className="logementTitle">
                                    <h1>{title}</h1>
                                    <p className="logement">{location}</p>
                              </div>
                              <div className="tags">
                                    {tags.map((tag, index) => (
                                          <Tag key={index} tag={tag} />
                                    ))}
                              </div>
                        </div>
                        <div className="hostRating">
                              <div className="host">
                                    <p className="hostName">{hostName}</p>
                                    <img
                                          src={hostPic}
                                          alt="Hôte"
                                          className="hostImg"
                                    />
                              </div>
                              <div className="ratings">
                                    <Rating rating={rating} />
                              </div>
                        </div>
                  </div>
                  <div className="dropdown-main">
                        {data.map((item) => (
                              <DropDown
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                              />
                        ))}
                  </div>
            </div>
      );
};

export default FicheLogement;
