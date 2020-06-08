import React from "react";
import ActiveLink from "./ActiveLink";

export default function MenuItems() {
  return (
    <nav className="Menu__items">
      <ul>
        <li>
          <ActiveLink className="typography__eyebrow Menu__item " href="/">
            Home
          </ActiveLink>
        </li>
        <li>
          <ActiveLink className="typography__eyebrow Menu__item" href="/work">
            My Work
          </ActiveLink>
        </li>
        {/* <li><ActiveLink className="Menu__item Menu__item--disabled typography__headline" href="/blog">Blog<span className="soon-badge">Soon</span></ActiveLink></li> */}
        {/* <li><ActiveLink className="Menu__item" href="/services">Services</ActiveLink></li>
            <li><ActiveLink className="Menu__item Menu__item--disabled" href="/prints">Prints<span className="soon-badge">Soon</span></ActiveLink></li>
            <li><ActiveLink className="Menu__item Menu__item--disabled" href="/presets">Presets<span className="soon-badge">Soon</span></ActiveLink></li> */}
        <li>
          <ActiveLink className="typography__eyebrow Menu__item" href="/about">
            About me
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
}
