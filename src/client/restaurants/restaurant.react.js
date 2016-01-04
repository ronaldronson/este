import './restaurant.styl';
import Address from './address.react';
import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import fetch from '../fetch/fetch.react';

@fetch(props => ({
  action: props.actions.restaurants.onRestaurant,
  url: '/api/v1/restaurants/' + props.params.id
}))
export default class Restaurant extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired,
    restaurants: React.PropTypes.object.isRequired
  }

  render() {
    const {params: {id}, restaurants: {map}} = this.props;
    const restaurant = map.get(id);
    if (!restaurant)
      return <div>Loading...</div>;
    const {name} = restaurant;

    return (
      <DocumentTitle title={name}>
        <div className="restaurants-restaurant">
          <h1>{name}</h1>
          <Address />
        </div>
      </DocumentTitle>
    );
  }

}
