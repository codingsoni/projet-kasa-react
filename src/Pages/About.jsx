import React from 'react'
import Shaping from "../Layout/Shaping"
import Navbar from "../Layout/Navbar"
import Banner from '../Components/Banner'
import Footer from "../Layout/Footer"
import Collapse from '../Components/Collapse'

import "../Styles/About.scss"

function About() {
   
    const fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const service = "La qualité du service est au coeur de notre engagement chez kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreintes de respect et de bienveillance."
    const securite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

    return (
        <div className='flex'>
            <Shaping>
                <Navbar />
                <Banner>
                    <div className="banner2 banner-commun"></div>
                </Banner>
                <div className='about'>
                    {}
                    <div>
                        <Collapse title="Fiabilité" content={<div className="collapse-content">{fiabilite}</div>} />
                    </div>
                    <div>
                        <Collapse title="Respect" content={<div className="collapse-content">{respect}</div>} />
                    </div>
                    <div>
                        <Collapse title="Service" content={<div className="collapse-content">{service}</div>} />
                    </div>
                    <div>
                        <Collapse title="Sécurité" content={<div className="collapse-content">{securite}</div>} />
                    </div>
                </div>
            </Shaping>
            <Footer />
        </div>
    )
}

export default About;
