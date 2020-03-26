import React from 'react';
import Layout from '../components/Layout';
import Fade from 'react-reveal/Fade';
import Button from '../components/Button';
import { RichText } from 'prismic-reactjs'
import { FaInstagram } from 'react-icons/fa';
import { Client } from '../prismic-configuration'

export default class About extends React.Component {
  static async getInitialProps(context) {
    const req = context.req
    const about = await Client(req).getSingle('about')
    return {
      doc: about
    }
  }
  render() {
    return (
      <Layout>
        <section className="AboutMe">
          <div className="row">
            <Fade>
              <img src="/profile.jpeg" alt="" className="col-sm-3" />
            </Fade>
            <div className="col-sm">
              <h1 className="typography__eyebrow">About me</h1>
              <p className="typography__headline">{RichText.asText(this.props.doc.data.title)}</p>
              <div className="typography__body">
                {RichText.render(this.props.doc.data.body)}
              </div>
            </div>
          </div>
        </section>
        <section className="Contact">
          <div className="row">
            <div className="col-sm">
              <h2 className="typography__eyebrow">Contact</h2>
              <p className="typography__headline">Let's grab a coffee</p>
              <p className="typography__body">For business inquiries, please contact me by email with this address</p>
              <Button>paul.antoine2@gmail.com</Button>
              <p className="typography__body">You can also send me a direct message on Instagram</p>
              <Button><FaInstagram />@paul.ntn</Button>
            </div>
            <Fade>
              <img src="/contact.jpeg" alt="" className="col-sm-4"/>
            </Fade>
          </div>
        </section>
      </Layout>
    )
  }
}