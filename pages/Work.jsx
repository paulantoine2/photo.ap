import React, { Component } from 'react'
import { Client } from '../prismic-configuration'
import { Predicates } from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'
import Layout from '../components/Layout'
import Fade from 'react-reveal/Fade'
import Card from '../components/Card'
import { map } from 'lodash';

export default class Work extends Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps(context) {
    const req = context.req
    const work_data = await Client(req).query(
      Predicates.at('document.type', 'work_category')
    );

    
    const work = map(work_data.results, w => w.data)
    return {
      work
    }
  }
  render() {
    console.warn(this.props.work);
    return (
      <Layout>
        <Fade>
          <section className="Work">
            <h1 className="typography__headline">My Work</h1>
            <p className="typography__subhead">Browse the projects i've been working on for different individuals and companies.</p>
          </section>
          <section className="Work__cards">
            {
              this.props.work.map((work, i) => {
                return <Card href="/work/event" img={work.picture} title={RichText.asText(work.title)} sub_title={RichText.asText(work.subtitle)} />
              })
            }
          </section>
        </Fade>
      </Layout>
    )
  }
}
