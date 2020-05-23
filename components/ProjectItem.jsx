import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import Link from "next/link";

export default function ProjectItem({ project, fake }) {
  const [showImg, setshowImg] = useState(false);
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
  const style = { opacity: showImg ? "1" : "0" };
  return (
    <Link href={"/project/" + project.id}>
      <div className="row ProjectItem">
        <div className="col-12 col-sm-6">
          {project.image.card && (
            <img
              onLoad={() => setshowImg(true)}
              src={project.image.card.url}
              alt={project.image.card.alt}
              style={style}
            />
          )}
        </div>
        <div className="col-12 col-sm-6">
          <div className="typography__eyebrow">
            {RichText.asText(project.eyebrow)}
          </div>
          <div className="typography__title">
            {RichText.asText(project.title)}
          </div>
          <div className="typography__body">
            {RichText.render(project.body)}
          </div>
        </div>
      </div>
    </Link>
  );
}
