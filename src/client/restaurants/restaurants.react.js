// import './restaurants.styl';
import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {Link} from 'react-router';

export default class Restaurants extends Component {

  static propTypes = {
    restaurants: React.PropTypes.object.isRequired
  }

  render() {
    const {list} = this.props.restaurants;

    return (
      <DocumentTitle title="Restaurants">
        <div className="restaurants-restaurants">
          <h1>Restaurants</h1>
          <ol>
            {list.map(({id, name}) =>
              <li key={id}>
                <Link params={{id}} to="restaurant">{name}</Link>
              </li>
            )}
          </ol>
        </div>
      </DocumentTitle>
    );
  }

}
