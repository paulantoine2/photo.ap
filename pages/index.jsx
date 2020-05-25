import React from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { FaInstagram, FaMagic } from "react-icons/fa";
import { Client } from "../prismic-configuration";
import { Predicates } from "prismic-javascript";
import { RichText } from "prismic-reactjs";

import Fade from "react-reveal/Fade";
import ProjectItem from "../components/ProjectItem";
import Link from "next/link";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: false,
      parallaxStyle: {},
      medias: [],
      magicMode: false,
    };
    this.radiusVal = 4;
    this.mouseListening = false;
    this.handleScroll = this.handleScroll.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    const token =
      "IGQVJVelh2RDRxbWVUMjZArSUM0cVlydjdJeTlMaTJ2ZAUJPTGVPdjFyU3k2YlFWZAEo0YlU2UjAtRHl6MGJ6c3lPUkpVbFF1RGIwTXVZAMFR3c2NMT0tuMnhVX1NidERPbFFDUjd5Ykt3";
    fetch(
      "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=" +
        token
    );
    fetch(
      "https://graph.instagram.com/me/media?fields=media_url&access_token=" +
        token
    )
      .then((response) => response.json())
      .then((medias) => {
        if (medias.error) return;
        this.setState((state) => ({
          ...state,
          medias: medias.data.map((o) => o.media_url).slice(0, 8),
        }));
      });
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("mousemove", this.handleMouseMove);
    this.setState({
      magicMode:
        typeof DeviceOrientationEvent !== "undefined" &&
        typeof DeviceOrientationEvent.requestPermission === "function",
    });
  }
  activateMotion = () => {
    if (typeof DeviceOrientationEvent === "undefined") return;
    DeviceOrientationEvent.requestPermission()
      .then((response) => {
        if (response == "granted") {
          this.setState({ magicMode: false });
          window.addEventListener("deviceorientation", (event) => {
            this.handleMouseMove(null, event.gamma * 10, event.beta * 10);
          });
        }
      })
      .catch(console.error);
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("mousemove", this.handleMouseMove);
  }
  handleScroll(event) {
    this.mouseListening = false;
  }

  handleMouseMove(event, customDx, customDy) {
    const cx = Math.ceil(window.innerWidth / 2.0);
    const cy = Math.ceil(window.innerHeight / 2.0);
    const tiltx = (customDy || event.pageY - cy) / cy;
    const tilty = -((customDx || event.pageX - cx) / cx);
    const radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
    const degree = radius * this.radiusVal;
    const parallaxStyle = {
      transition: "none",
      transform:
        "rotate3d(" +
        tiltx +
        ", " +
        tilty +
        ", 0, " +
        (parseFloat(degree) > 20 ? 20 : degree) +
        "deg)",
    };

    if (!this.mouseListening) {
      parallaxStyle.transition = "all .3s linear";
      setTimeout(() => {
        this.mouseListening = true;
      }, 300);
    }
    this.setState({ parallaxStyle });
  }
  scrollToPortfolio() {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <Layout>
        <section className="Home__hero">
          <Fade delay={500}>
            <img
              src="hero_layer_1.png"
              alt=""
              className="Home__hero__bg layer_0"
            />
          </Fade>
          <div className="parallax-container">
            <div className="parallax-base" style={this.state.parallaxStyle}>
              <div className="Home__hero__bg layer_1">
                <Fade bottom delay={1000}>
                  <h1 className="typography__headline typography__headline__elevated">
                    {RichText.asText(this.props.hero.data.title)}
                  </h1>
                </Fade>
              </div>
              <img
                src="hero_layer_2.png"
                alt=""
                className="Home__hero__bg layer_2"
              />
              <div className="Home__hero__bg layer_3">
                <Fade bottom delay={1150}>
                  <div className="typography__body">
                    {RichText.render(this.props.hero.data.sub_head)}
                  </div>
                </Fade>
                <Fade bottom delay={1300}>
                  <Button href="/work">See my work</Button>
                </Fade>
              </div>

              <img
                src="hero_layer_3.png"
                alt=""
                className="Home__hero__bg layer_4"
              />
              <img
                src="hero_layer_4.png"
                alt=""
                className="Home__hero__bg layer_5"
              />
            </div>
          </div>
          <legend>Komodo National Park, Flores, Indonesia</legend>
          {this.state.magicMode && (
            <FaMagic className="MagicButton" onClick={this.activateMotion} />
          )}
        </section>
        <section className="Home__work">
          <h2 className="typography__headline">Favorite projects</h2>
          <hr />

          {this.props.projects.map((p, index) => (
            <Fade key={index}>
              <ProjectItem project={p} />
            </Fade>
          ))}

          <Button href="/work">See more projects</Button>
        </section>
        {this.state.medias.length && (
          <Fade>
            <section className="Home__instagram">
              <h2 className="typography__headline">Follow my story</h2>
              <hr />
              <div className="typography__body">
                <p>
                  Follow me on Instagram to see before/after editing, behind the
                  scenes and share of inspiring accounts.
                </p>
                <br />
              </div>

              <Button href="http://instagram.com/paul.ntn/">
                <FaInstagram /> paul.ntn
              </Button>
              <div className="Home__instagram__wrapper">
                {this.state.medias.map((media, i) => (
                  <img src={media} key={i} alt="" />
                ))}
              </div>
            </section>
          </Fade>
        )}

        {this.props.about && (
          <Fade>
            <section className="Home__about">
              <img src="/profile.jpeg" alt="Profile picture" />
              <h2 className="typography__headline">
                {RichText.asText(this.props.about.data.title)}
              </h2>
              <hr />
              <div className="edito">
                <div className="typography__body">
                  {RichText.render(this.props.about.data.body_condensed)}
                </div>
                <Button href="/about">Learn more</Button>
              </div>
            </section>
          </Fade>
        )}
      </Layout>
    );
  }
}

export async function getStaticProps(context) {
  const req = context.req;
  const hero = await Client(req).getSingle("hero");
  const about = await Client(req).getSingle("about");
  const project_data = await Client(req).query(
    Predicates.at("my.project.show_on_home", true),
    { orderings: "[my.project.title]" }
  );

  const projects = project_data.results.map((p) => ({ ...p.data, id: p.id }));

  return {
    props: {
      hero,
      projects,
      about,
    },
  };
}
