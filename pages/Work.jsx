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
    loading: true,
    work: [],
    activeFilter: null,
  };
  loadData = async (filter) => {
    const activeFilter = this.state.activeFilter === filter ? null : filter;
    this.setState({ loading: true, activeFilter });
    const work_data = await Client().query(
      activeFilter
        ? Predicates.at("my.project.category", filter)
        : Predicates.at("document.type", "project")
    );
    console.log("work_data :>> ", work_data);
    this.setState({
      work: map(work_data.results, (w) => ({ ...w.data, id: w.id })),
      loading: false,
    });
  };
  componentDidMount() {
    this.loadData();
  }

  render() {
    let items = this.state.loading ? (
      <>
        <ProjectItem fake />
        <ProjectItem fake />
        <ProjectItem fake />
        <ProjectItem fake />
        <ProjectItem fake />
      </>
    ) : (
      this.state.work.map((p, index) => (
        <Fade>
          <ProjectItem project={p} key={p.id} />
        </Fade>
      ))
    );
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
                    onClick={() => this.loadData(c)}
                    key={i}
                  >
                    {c} <FaTimes />
                  </li>
                ))}
              </ul>
            </aside>
            {items ? items : <div class="Work__empty">Pas de resulats</div>}
          </section>
          <Contact />
        </Fade>
      </Layout>
    );
  }
}
