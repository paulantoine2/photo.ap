import React, { Component } from 'react'
import Layout from '../components/Layout'

export default class Blog extends Component {
  render() {
    return (
      <Layout>
        <section>
          <h1 className="typography__headline">Blog</h1>
          <p className="typography__subhead">Retrouvez bientôt des articles et vidéos pour vous aider à prendre des photo memorables.</p>
        </section>
      </Layout>
    )
  }
}
