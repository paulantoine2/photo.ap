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
      <div className="row ProjectItem">
        <div className="col-12 col-sm-6">
          {project.data.image && project.data.image.card && (
            <img
              src={project.data.image.card.url}
              alt={project.data.image.card.alt}
            />
          )}
        </div>
        <div className="col-12 col-sm-6">
          <div className="typography__eyebrow">
            {RichText.asText(project.data.eyebrow)}
          </div>
          <div className="typography__title">
            {RichText.asText(project.data.title)}
          </div>
          <div className="typography__body">
            {RichText.render(project.data.body)}
          </div>
        </div>
      </div>
    </Link>
  );
}
