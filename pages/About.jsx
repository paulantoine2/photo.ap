import React from "react";
import Layout from "../components/Layout";
import Fade from "react-reveal/Fade";
import { RichText } from "prismic-reactjs";
import { Client } from "../prismic-configuration";
import Contact from "../components/Contact";
import Hero from "../components/Hero";

const hero_img = {
  url: "./about.jpeg",
  alt: "About me",
};

export default function About({ about }) {
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
              {RichText.render(about.data.body)}
            </div>
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
