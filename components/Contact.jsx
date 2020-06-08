import React from "react";
import Button from "./Button";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="Contact">
      <h2 className="typography__headline">Let's grab a coffee</h2>
      <div className="typography__body">
        <p>
          For business inquiries, please contact me by email or send me a direct
          message on Instagram.
        </p>
      </div>
      <div className="buttons_container">
        <Button
          href="mailto:paul.antoine2@gmail.com"
          title="Send an email to Paul"
        >
          paul.antoine2@gmail.com
        </Button>
        <Button
          href="https://instagram.com/paul.ntn"
          title="Send a message on Instagram"
          target="_blank"
        >
          <FaInstagram />
          paul.ntn
        </Button>
      </div>
    </section>
  );
}
