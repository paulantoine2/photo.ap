import React, { Component } from 'react'
import './_shop-card.scss';

export default class ShopCard extends Component {
  render() {
    return (
      <div className="ShopCard">
        <div className="ShopCard__image-wrapper">
          <img className="ShopCard__image" src="/printframe.png" alt=""/>
          <img className="ShopCard__image" src="/travel1.jpeg" alt=""/>
        </div>
        <div className="ShopCard__title">
          Shop card title long
        </div>
        <div className="ShopCard__price">
          $20.00
        </div>
      </div>
    )
  }
}
