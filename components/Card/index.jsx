import React from 'react';
import './_card.scss';
import classnames from 'classnames';

export default class Card extends React.Component {
  
  
  render () {
    return <div className={classnames('Card', this.props.className)}>
      <img src={`/${this.props.img}.jpeg`} alt=""/>
      <div className="Card__title">
        {this.props.title}
      </div>
    </div> 
  }
}