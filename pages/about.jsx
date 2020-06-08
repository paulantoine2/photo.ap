import React from "react";
import Layout from "../components/Layout";
import Fade from "react-reveal/Fade";
import { RichText } from "prismic-reactjs";
import { Client } from "../prismic-configuration";
import Contact from "../components/Contact";
import Hero from "../components/Hero";

export default function About({ about }) {
  return (
    <Layout className="AboutPage">
      <section className="AboutMe">
        <Fade>
          <div className="AboutMe__block">
            <img src="/profile.jpeg" alt="" className="col-sm-3" />
          </div>
        </Fade>
        <div className="AboutMe__block">
          <h1 className="typography__headline">About Me</h1>
          <div className="typography__body">
            {RichText.render(about.data.body)}
          </div>
        </div>
      </section>
      <Contact />
    </Layout>
  );
}

export async function getStaticProps({ req }) {
  const about = await Client(req).getSingle("about");
  return {
    props: {
      about,
    },
  };
}
