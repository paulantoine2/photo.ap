import React, { Component } from 'react'
import Layout from '../components/Layout'
import ShopCard from '../components/ShopCard'
import Fade from 'react-reveal/Fade';
import '../styles/global.scss';

export default class Prints extends Component {
  render() {
    return (
      <Layout>
        <section>
          <h1>Prints Gallery</h1>
          <p>To support my work, you can get a print of my favorites pictures here.</p>
          <ul className="Filters"> 
            <li className="Filters__item"><a href="">All</a></li>
            <li className="Filters__item"><a href="">Aerial</a></li>
            <li className="Filters__item"><a href="">Landscape</a></li>
          </ul>
        </section>
        <section className="Grid">
          <Fade duration={300}>
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
          </Fade>
        </section>
      </Layout>
    )
  }
}
