import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Layout from '../components/Layout';
import { FaCaretDown } from 'react-icons/fa';
import { MdFilterNone } from 'react-icons/md';
import { Client } from '../prismic-configuration'
import { Predicates } from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'
import { chain } from 'lodash';

import Fade from 'react-reveal/Fade'



export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: false,
      medias: []
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  static async getInitialProps(context) {
    const req = context.req
    const about = await Client(req).getSingle('about')
    const work_data = await Client(req).query(
      Predicates.at('document.type', 'work_category')
    );
    const work = chain(work_data.results)
      .map(w => w.data)
      .filter(w => w.home_position)
      .orderBy('home_position', 'asc')
    return {
      about,
      work
    }
  }
  componentDidMount() {
    const token = 'IGQVJVelh2RDRxbWVUMjZArSUM0cVlydjdJeTlMaTJ2ZAUJPTGVPdjFyU3k2YlFWZAEo0YlU2UjAtRHl6MGJ6c3lPUkpVbFF1RGIwTXVZAMFR3c2NMT0tuMnhVX1NidERPbFFDUjd5Ykt3';
    fetch('https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=' + token);
    fetch('https://graph.instagram.com/me/media?fields=media_url&access_token=' + token)
      .then(response => response.json())
      .then(medias => {
        if (medias.error) return;
        this.setState(state => ({ ...state, medias: medias.data.map(o => o.media_url).slice(0, 6) }));
      });
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
    this.setState({
      scroll: window.scrollY > 10
    });
  }
  scrollToPortfolio() {
    window.scrollTo({
      top: 300,
      behavior: 'smooth'
    });
  }
  render() {
    return (
      <Layout>
        <Fade>
        <section className="Home__hero">
          <h1 className="typography__headline">Photography, made with love.</h1>
          <p className="typography__subhead">Creating creative digital content for companies, individuals, non profits and everyone who wants their story to be told in a unique, emotional and magical way.</p>
        </section>
        <section className="Home__portfolio">
          <div className="button-wrapper button-wrapper-top">
            <Button id="see-work"
              className={this.state.scroll ? 'Button--hidden' : ''}
              onClick={this.scrollToPortfolio}>
              <FaCaretDown /> See my work
            </Button>
          </div>
          
            <div className="cards-wrapper">
              {
                this.props.work.map((work, i) => {
                  if (i === 0) return <Card href={'/work/' + work.id } img={work.picture} title={RichText.asText(work.title)} className={`Card--tall ${this.state.scroll ? '' : 'Card--intro'}`} />
                  return <Card href={'/work/' + work.id } img={work.picture} title={RichText.asText(work.title)} />
                })
              }
            </div>
          <div className="button-wrapper">
            <Button href="/work"><MdFilterNone />See all work</Button>
          </div>
        </section>
        <section className="Home__instagram">
          <h2 className="typography__eyebrow">Instagram <a href="https://www.instagram.com/paul.ntn/" target="_blank">@paul.ntn</a></h2>
          <h2 className="typography__headline">Follow my story</h2>
          <div className="Home__instagram__wrapper">
          {
            this.state.medias.map((media, i) => (
              <img src={media} key={i} alt=""/>
            ))
          }
          </div>
        </section>
        <section className="Home__about">
          <div className="row">
            <img src="/profile.jpeg" alt="" className="col-3"/>
            <div className="edito col">
              <h2 className="typography__eyebrow">About</h2>
              <h2 className="typography__headline">{RichText.asText(this.props.about.data.title)}</h2>
              <div className="typography__body">
                {RichText.render(this.props.about.data.body_condensed)}
              </div>
              <Button href="/about">En savoir plus</Button>
            </div>
          </div>
        </section>
        </Fade>
      </Layout>
    );
  }
}