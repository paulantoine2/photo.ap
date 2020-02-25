import React from 'react';
import './_menu.scss';
import classnames from 'classnames';
import ActiveLink from '../ActiveLink';

export default class Menu extends React.Component {
  render () {
    const { open } = this.props;
    return <div className={classnames('Menu', {'Menu--open' : open})}>
      <div className="Menu__black"></div>
      <div className="Menu__pane">
        <nav>
          <ul>
            <li><ActiveLink className="Menu__item" href="/">Home</ActiveLink></li>
            <li><ActiveLink className="Menu__item" href="/work">Work</ActiveLink></li>
            <li><ActiveLink className="Menu__item" href="/prints">Prints</ActiveLink></li>
            <li><ActiveLink className="Menu__item" href="/presets">Presets</ActiveLink></li>
            <li><ActiveLink className="Menu__item" href="/about">About me</ActiveLink></li>
            <li><ActiveLink className="Menu__item" href="/contact">Contact</ActiveLink></li>
          </ul>
        </nav>
      </div>
    </div> 
  }
}