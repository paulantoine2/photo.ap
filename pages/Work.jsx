import React, { Component } from "react";
import { Client } from "../prismic-configuration";
import { Predicates } from "prismic-javascript";
import Layout from "../components/Layout";
import cn from "classnames";
import Fade from "react-reveal/Fade";
import { map, isArray } from "lodash";
import ProjectItem from "../components/ProjectItem";
import Contact from "../components/Contact";
import { FaTimes } from "react-icons/fa";
import Hero from "../components/Hero";

const hero_img = {
  url: "./work-2.jpg",
  alt: "Nomads in desert",
};

export default class Work extends Component {
  state = {
    work: [],
    activeFilter: null,
  };
  filterData = async (filter) => {
    const activeFilter = this.state.activeFilter === filter ? null : filter;
    let work = this.props.projects;
    if (activeFilter)
      work = this.props.projects.filter((w) => w.data.category === filter);
    this.setState({
      activeFilter,
      work,
    });
  };
  componentDidMount() {
    this.filterData(null);
  }

  render() {
    let items = this.state.work.map((p, index) => (
      <Fade key={p.id}>
        <ProjectItem project={p} />
      </Fade>
    ));
    if (isArray(items) && !items.length) items = null;
    const categories = [
      "Travel",
      "Portrait",
      "Event",
      "Product",
      "Real estate",
      "Others",
    ];
    return (
      <Layout>
        <Fade>
          <Hero title="Projects" image={hero_img} />
          <section className="Work">
            <aside className="Work__aside">
              <div className="typography__title">Categories</div>
              <ul>
                {categories.map((c, i) => (
                  <li
                    className={cn("typography__eyebrow", {
                      active: this.state.activeFilter === c,
                    })}
                    onClick={() => this.filterData(c)}
                    key={i}
                  >
                    {c} <FaTimes />
                  </li>
                ))}
              </ul>
            </aside>
            {items ? items : <div className="Work__empty">Pas de resulats</div>}
          </section>
          <Contact />
        </Fade>
      </Layout>
    );
  }
}

export async function getStaticProps({ req }) {
  const projects = await Client(req).query(
    Predicates.at("document.type", "project")
  );
  return {
    props: {
      projects: projects.results,
    },
  };
}
