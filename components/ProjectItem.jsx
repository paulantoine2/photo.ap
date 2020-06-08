import React from "react";
import { RichText } from "prismic-reactjs";
import Link from "next/link";

export default function ProjectItem({ project, fake }) {
  if (fake)
    return (
      <div className="row ProjectItem">
        <div className="col-12 col-sm-6">
          <div className="loading-img glow"></div>
        </div>
        <div className="col-12 col-sm-6">
          <div className="typography__eyebrow glow">Load data</div>
          <div className="typography__title glow">Load data</div>
          <div className="typography__body glow">Load data</div>
        </div>
      </div>
    );
  return (
    <Link href={"/project/" + project.id}>
      <a className="ProjectItem">
        <div>
          {project.image && project.image.card && (
            <img src={project.image.card.url} alt={project.image.card.alt} />
          )}
        </div>
        <div className="hover">
          <div className="typography__title">
            {RichText.asText(project.title)}
          </div>
          <div className="typography__body">
            {RichText.render(project.body)}
          </div>
        </div>
      </a>
    </Link>
  );
}
