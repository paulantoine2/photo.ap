import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { FaPlane } from 'react-icons/fa';

export default class Card extends React.Component {
  render() {
    if (this.props.href) return <Link href={this.props.href}>
      <a className={classnames('Card', this.props.className)}>
        <img src={this.props.img.url} alt={this.props.img.alt} />
        <div className="Card__title">
          
          <h3 className="typography__headline">
            {this.props.title}
          </h3>
          <p className="typography__body__elevated">{this.props.sub_title}</p>
        </div>
      </a>
    </Link>

    return <div className={classnames('Card', this.props.className)}>
      <img src={this.props.img.url} alt={this.props.img.alt} />
      <div className="Card__title">
        <h3 className="typography__headline">
          {this.props.title}
        </h3>
        <p className="typography__body__elevated">{this.props.sub_title}</p>
      </div>
    </div>
  }
}