import React from "react";
import { Client } from "../../prismic-configuration";
import Layout from "../../components/Layout";
import Fade from "react-reveal/Fade";
import Hero from "../../components/Hero";

export default class ProjectPage extends React.Component {
  static async getInitialProps(context) {
    const { id } = context.query;
    const project = await Client(context.req).getByID(id);
    return {
      project: project.data,
    };
  }

  render() {
    const { project } = this.props;
    return (
      <Layout>
        <Hero project={project} className="Project__hero" />
        <section className="Project">
          <Fade>
            {project.pictures.map((p) => (
              <div className="block-img">
                <img src={p.picture.url} alt={p.picture.alt} />
              </div>
            ))}
          </Fade>
        </section>
      </Layout>
    );
  }
}
