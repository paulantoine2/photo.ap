import React, { Component } from 'react'
import Layout from '../components/Layout'
import ShopCard from '../components/ShopCard'
import Zoom from 'react-reveal/Zoom';

export default class Prints extends Component {
  render() {
    return (
      <Layout>
        <section>
          <h1 className="typography__headline">Prints</h1>
          <p className="typography__subhead">To support my work, you can get a print of my favorites pictures here soon.</p>
        </section>
      </Layout>
    )
  }
}
