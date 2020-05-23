import React from "react";
import { Client } from "../../prismic-configuration";
import Layout from "../../components/Layout";
import Fade from "react-reveal/Fade";
import Hero from "../../components/Hero";
import Error from "next/error";

export default class ProjectPage extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const { id } = query;
    const project = await Client(req).getByID(id);
    if (!project) res.statusCode = 404;
    return {
      project,
    };
  }

  render() {
    const { project } = this.props;
    if (!project) return <Error statusCode="404" />;
    return (
      <Layout>
        <Hero project={project.data} className="Project__hero" />
        <section className="Project">
          <Fade>
            {project.data.pictures.map((p) => (
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
