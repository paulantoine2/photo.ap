import React, { Component } from 'react'
import Menu from './Menu';
import { MdClose, MdMenu } from 'react-icons/md';
import classnames from 'classnames';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

export default class Layout extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       menuOpen: false
    }
  }
  
  toggleMenu() {
    this.setState(state => ({ ...state, menuOpen: !state.menuOpen }))
  }
  render() {
    const { menuOpen } = this.state;
    return (
      <div>
        <header>
          <img src='/logo.svg' alt="logo"/>
          <button className={classnames('Menu__button', {'Menu__button--open': menuOpen})} onClick={() => this.toggleMenu()}>
            { menuOpen ? <MdClose /> : <MdMenu />}
          </button>
          <Menu open={menuOpen} />
        </header>
        <main className="Main">
          { this.props.children }
        </main>
        <footer className="Footer">
          <a className="Footer__title upcase" href="antoine-paul.com"><img src='/logo.svg' alt="logo"/> ANTOINE-PAUL.COM</a>
          <div className="Footer__links">
            <a href="/"><FaInstagram /></a>
            <a href="/"><FaTwitter /></a>
          </div>
          <div className="Footer__sub">
            Design and Development by Paul ANTOINE
          </div>
        </footer>
      </div>
    )
  }
}
