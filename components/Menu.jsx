import React from "react";
import classnames from "classnames";
import ActiveLink from "./ActiveLink";

export default class Menu extends React.Component {
  render() {
    const { open } = this.props;
    return (
      <div className={classnames("Menu", { "Menu--open": open })}>
        <div className="Menu__black"></div>
        <div className="Menu__pane">
          <nav>
            <ul>
              <li>
                <ActiveLink
                  className="typography__eyebrow Menu__item "
                  href="/"
                >
                  Home
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  className="typography__eyebrow Menu__item"
                  href="/work"
                >
                  My Work
                </ActiveLink>
              </li>
              {/* <li><ActiveLink className="Menu__item Menu__item--disabled typography__headline" href="/blog">Blog<span className="soon-badge">Soon</span></ActiveLink></li> */}
              <br />
              {/* <li><ActiveLink className="Menu__item" href="/services">Services</ActiveLink></li>
            <li><ActiveLink className="Menu__item Menu__item--disabled" href="/prints">Prints<span className="soon-badge">Soon</span></ActiveLink></li>
            <li><ActiveLink className="Menu__item Menu__item--disabled" href="/presets">Presets<span className="soon-badge">Soon</span></ActiveLink></li> */}
              <br />
              <li>
                <ActiveLink
                  className="typography__eyebrow Menu__item"
                  href="/about"
                >
                  About me
                </ActiveLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
