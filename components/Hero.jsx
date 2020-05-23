import React from "react";
import { Fade } from "react-reveal";
import { RichText } from "prismic-reactjs";
import cn from "classnames";
import { IoMdArrowDown } from "react-icons/io";

export default function Hero({
  project,
  title,
  body,
  legend,
  image,
  className,
}) {
  return (
    <Fade>
      <section className={cn("Site__hero", className)}>
        <div className="container">
          <Fade delay={500} bottom>
            <h1 className="typography__headline typography__headline__elevated">
              {project ? RichText.asText(project.title) : title}
            </h1>
            <div className="typography__body ">
              {project ? RichText.render(project.body) : body}
            </div>
          </Fade>
          {project && (
            <div className="icon">
              <Fade delay={1000} bottom>
                <IoMdArrowDown />
              </Fade>
            </div>
          )}
        </div>
        {project ? (
          <img
            className="Site__hero__bg"
            src={project.image.url}
            alt={project.image.alt}
          />
        ) : (
          <img className="Site__hero__bg" src={image.url} alt={image.alt} />
        )}
        <legend>{project ? RichText.asText(project.eyebrow) : legend}</legend>
      </section>
    </Fade>
  );
}
