import React, { Component } from "react";
import { Client } from "../prismic-configuration";
import { Predicates } from "prismic-javascript";
import Layout from "../components/Layout";
import cn from "classnames";
import { isArray } from "lodash";
import ProjectItem from "../components/ProjectItem";
import Contact from "../components/Contact";

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: [],
      activeFilter: null,
    };
  }

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
      <ProjectItem key={p.id} project={{ ...p.data, id: p.id }} />
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
      <Layout className="WorkPage">
        <aside className="Work__aside">
          <ul>
            {categories.map((c, i) => (
              <li
                className={cn("typography__eyebrow", {
                  active: this.state.activeFilter === c,
                })}
                onClick={() => this.filterData(c)}
                key={i}
              >
                {c}
              </li>
            ))}
          </ul>
        </aside>
        <section className="Work">
          {items ? items : <div className="Work__empty">Pas de resulats</div>}
        </section>
        <Contact />
      </Layout>
    );
  }
}

export async function getStaticProps(context) {
  const projects = await Client(context.req).query(
    Predicates.at("document.type", "project")
  );
  return {
    props: {
      projects: projects.results,
    },
  };
}
