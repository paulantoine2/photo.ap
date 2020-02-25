import React from 'react';
import Card from '../components/Card';
import Fonts from '../helpers/Fonts';
import Button from '../components/Button';
import Layout from '../components/Layout';
import { FaCaretDown } from 'react-icons/fa';
import { IoIosEye } from 'react-icons/io';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import '../styles/global.scss';

import * as smoothscroll from 'smoothscroll-polyfill';

if (typeof window !== 'undefined') {
  smoothscroll.polyfill();
}


export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scroll: false };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount () {
    Fonts();
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll (event) {
    this.setState({
      scroll: window.scrollY > 10
    });
  }
  scrollToPortfolio () {
    window.scrollTo({
      top: 300,
      behavior: 'smooth'
    });
  }
  render() {
    return (
      <Layout>
        <Fade duration={300}>
          <section id="hero">
            <h1>Photography, <br/>made with love.</h1>
            <p className="upcase">Creating creative digital content for companies, individuals, non profits and everyone who wants their story to be told in a unique, emotional and magical way.</p>
          </section>
        </Fade>
        <section id="portfolio">
          <Fade duration={500} delay={1000}>
            <div className="button-wrapper">
                <Button id="see-work"
                        className={this.state.scroll ? 'Button--hidden' : ''}
                        onClick={this.scrollToPortfolio}>
                          <FaCaretDown /> See my work
                </Button>
            </div>
          </Fade>
          <Fade duration={500} delay={500}>
            <Card img={'travel1'} title={"Travel agencies"} className={`Card--tall ${this.state.scroll ? '' : 'Card--intro'}`} />
          </Fade>
          <Zoom duration={300} opposite>
            <Card img={'portrait1'} title={"Portraits"} />
            <Card img={'product1'} title={"Products"} />
            <Card img={'event1'} title={"Events"} />
            <Button><IoIosEye />See all work</Button>
          </Zoom>
        </section>
        <section id="shop">
          <h2>Prints shop</h2>
          <p>To support my work, you can get prints of my favorite pictures.</p>
        </section>
      </Layout>
    );
  }
}