import React, { Component } from "react";
import Menu from "./Menu";
import { MdClose, MdMenu } from "react-icons/md";
import classnames from "classnames";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Button from "./Button";
import MenuItems from "./MenuItems";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Head from "next/head";

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
    document.getElementById("main-container").style.visibility = "visible";
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
      <div
        id="main-container"
        style={{ visibility: "hidden" }}
        className={classnames(
          { scroll: this.state.scroll },
          this.props.className
        )}
      >
        <Head>
          <link rel="icon" type="image/ico" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-102252045-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-102252045-1'); `,
            }}
          ></script>
        </Head>
        <NextSeo
          title="Paul Antoine"
          description="Creating creative digital content for companies, individuals, non profits and everyone who wants their story to be told in a unique, emotional and magical way."
          canonical="https://photo.antoine-paul.com/"
          openGraph={{
            url: "https://photo.antoine-paul.com/",
            title: "📸 Paul Antoine",
            description:
              "Creating creative digital content for companies, individuals, non profits and everyone who wants their story to be told in a unique, emotional and magical way.",
            images: [
              {
                url: "https://paul.antoine-paul.com/og_img.jpg",
                width: 1200,
                height: 630,
                alt: "Paul Antoine website preview",
              },
            ],
            site_name: "Paul Antoine",
          }}
        />
        <header>
          <Link href="/">
            <a>
              <img src="/logo.svg" alt="Logo" className="TopLogo" />
            </a>
          </Link>

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
          <MenuItems />
        </header>
        <Button
          className={classnames("Menu__button", {
            "Menu__button--open": menuOpen,
          })}
          onClick={() => this.toggleMenu()}
        >
          MENU {menuOpen ? <MdClose /> : <MdMenu />}
        </Button>
        <Menu open={menuOpen} />
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
