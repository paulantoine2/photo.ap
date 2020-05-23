import React from "react";
import Layout from "../components/Layout";
import Fade from "react-reveal/Fade";
import Button from "../components/Button";
import { RichText } from "prismic-reactjs";
import { FaInstagram } from "react-icons/fa";
import { Client } from "../prismic-configuration";
import Contact from "../components/Contact";
import Hero from "../components/Hero";

const hero_img = {
  url: "./about.jpeg",
  alt: "Event",
};

export default class About extends React.Component {
  static async getInitialProps(context) {
    const req = context.req;
    const about = await Client(req).getSingle("about");
    return {
      doc: about,
    };
  }
  render() {
    return (
      <Layout>
        <Hero title="About Me" image={hero_img} />
        <section className="AboutMe">
          <div className="row">
            <Fade>
              <img src="/profile.jpeg" alt="" className="col-sm-3" />
            </Fade>
            <div className="col-sm">
              <div className="typography__body">
                {RichText.render(this.props.doc.data.body)}
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </Layout>
    );
  }
}
