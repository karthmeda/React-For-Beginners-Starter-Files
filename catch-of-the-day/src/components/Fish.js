import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  render() {
    const { details, index }  = this.props;


    const isAvailable = details.status=== 'available';
    const buttonText = isAvailable ? 'Add To Order':'Sold Out!';

    return (
      <li className="menu-fish">
      <img src={this.props.details.image} alt={this.props.details.name} />
        <h3 className="className">
        {details.name}
        <span className="price">{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button onClick={ () => this.props.addToOrder(this.props.index) } disabled={!isAvailable}>{buttonText}</button>

      </li>

      )
  }
}

Fish.propTypes = {
  details: React.PropTypes.object.isRequired,
  index: React.PropTypes.string.isRequired,
  addToOrder: React.PropTypes.func.isRequired
};

export default Fish;

