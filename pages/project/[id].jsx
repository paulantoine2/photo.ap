import React from "react";
import { Client } from "../../prismic-configuration";
import Layout from "../../components/Layout";
import Fade from "react-reveal/Fade";
import Hero from "../../components/Hero";
import Error from "next/error";
import { Predicates } from "prismic-javascript";

export default function ProjectPage({ project }) {
  if (!project) return <Error statusCode="404" />;
  return (
    <Layout>
      <Hero project={project.data} className="Project__hero" />
      <section className="Project">
        {project.data.pictures &&
          project.data.pictures.map((p, i) => (
            <Fade key={i}>
              <div className="block-img">
                <img src={p.picture.url} alt={p.picture.alt} />
              </div>
            </Fade>
          ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps({ req, res, params }) {
  const { id } = params;
  const project = await Client(req).getByID(id);
  return {
    props: { project },
  };
}
export async function getStaticPaths() {
  const projects = await Client().query(
    Predicates.at("document.type", "project")
  );
  const paths = projects.results.map((p) => `/project/${p.id}`);
  return { paths, fallback: false };
}
