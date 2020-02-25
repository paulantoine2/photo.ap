import React from 'react';
import Layout from '../components/Layout';
import Fade from 'react-reveal/Fade';
import '../styles/global.scss';

export default class About extends React.Component {
  render() {
    return (
      <Layout>
        <section className="AboutMe">
          <h1>About me</h1>
          <Fade duration={300}>
            <div className="AboutMe__wrapper">
              <img src="/profile.jpeg" alt="" />
              <div className="edito">
                <p>
                  Bonjour, je m’appelle Paul, j’ai 26 ans et je suis un Photographe et <a href="https://dev.antoine-paul.com">Developpeur web</a> francais.
                <br />
                  <br />
                Photographe <strong>passionné et autodidacte</strong>, je propose mes services de création de contenu photo et vidéo pour tout ceux qui souhaitent <strong>leur histoire racontée d'une manière unique et magique</strong>.
                <br />
                  <br />
                J'ai déjà créé du contenu pour les industries qui m'intéressent le plus :
              </p>
                <ul>
                  <li><strong>Le tourisme</strong>, pour des agences de voyage en Indonésie et au Maroc</li>
                  <li><strong>L'hôtellerie/restauration</strong>, pour des AirBnBs</li>
                  <li><strong>L'événementiel</strong>, pour des soirées et concerts ainsi que pour la promotion d'événements sportifs comme la coupe du monde de Rugby</li>
                </ul>
                <p>
                  <br />
                J'aime également mettre en valeur des produits avec des mises en scènes originales ! Accessoires de mode comme voitures.
                <br />
                  <br />
                Enfin, je fais souvent des shooting portrait pour des particuliers et des artistes via Instagram.
              </p>
              </div>
            </div>
          </Fade>
        </section>
      </Layout>
    )
  }
}