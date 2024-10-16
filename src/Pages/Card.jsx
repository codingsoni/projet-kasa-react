import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Shaping from "../Layout/Shaping";
import ErrorPage from "./ErrorPage";
import Collapse from '../Components/Collapse';
import Carousel from '../Components/Carousel';

import "../Styles/Card.scss";
import records from "../Datas/logements.json";

const arrayStars = [1, 2, 3, 4, 5];

function Card() {
   
    const [searchParams] = useSearchParams();
    const [idLogement] = useState(searchParams.get('_id'));

   
    const record = records.find(element => element.id === idLogement);

    
    if (!record) return(<ErrorPage />);

    
    const equipements = record.equipments.map((element, index) => (
        <li className='description-content' key={"equip-"+index.toString()}>{element}</li>
    ));

    return (
        <div className='logement'>
            <Shaping>
                <Navbar />

                {}
                <Carousel pictures={record.pictures} />

                {}
                <div className='ficheLogement'>
                    <div className='div-description'>
                        <h1>{record.title}</h1>
                        <h4>{record.location}</h4>
                        <div className='div-tags'>
                            { record.tags.map((element, index) => {
                                return(<p className='tags' key={"tags-"+index}>{element}</p>);
                            })}
                        </div>
                    </div>

                    {}
                    <div className='bloc-stars'>
                        <div className='div-etoiles'>
                            <p>{record.host.name}</p>
                            <img src={record.host.picture} alt={record.title} />
                        </div>
                        
                        {}
                        <div className='stars'>
                            { arrayStars.map(element => {
                                const nbreEtoiles = parseInt(record.rating);
                                return(<span key={"star-"+element} className={element <= nbreEtoiles ? 'span1' : 'span2'}>★</span>);
                            })}
                        </div>
                    </div>
                </div>

                {}
                <div className='collapseLogement'>
                    {}
                    <Collapse title="Description" content={<div className="description-content">{record.description}</div>} />
                    
                    {}
                    <Collapse title="Equipements" content={<div className="equipements-content">{equipements}</div>} />
                </div>

            </Shaping>
            <Footer />
        </div>
    );
}

export default Card;


