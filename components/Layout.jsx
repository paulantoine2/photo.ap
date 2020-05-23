import React, { Component } from "react";
import Menu from "./Menu";
import Fonts from "../helpers/Fonts";
import { MdClose, MdMenu } from "react-icons/md";
import classnames from "classnames";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Button from "./Button";
import Link from "next/link";

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      scroll: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    Fonts();
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    this.setState({
      scroll: window.scrollY > 10,
    });
  }

  toggleMenu() {
    this.setState((state) => ({ ...state, menuOpen: !state.menuOpen }));
  }
  render() {
    const { menuOpen } = this.state;
    return (
      <div className={classnames({ scroll: this.state.scroll })}>
        <Link href="/">
          <img src="/logo.svg" alt="Logo" className="TopLogo" />
        </Link>

        <header>
          <Button
            className={classnames("Menu__button", {
              "Menu__button--open": menuOpen,
            })}
            onClick={() => this.toggleMenu()}
          >
            MENU {menuOpen ? <MdClose /> : <MdMenu />}
          </Button>
          <Menu open={menuOpen} />
        </header>
        <main className="Main">{this.props.children}</main>
        <footer className="Footer">
          <div className="Footer__links">
            <a
              href="https://www.instagram.com/paul.ntn/"
              target="_blank"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/paul__ntn"
              target="_blank"
              title="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/paul-antoine-183707121/"
              target="_blank"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="Footer__sub typography__body">
            <p>
              Design and Development by Paul ANTOINE | © antoine-paul.com 2020
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
