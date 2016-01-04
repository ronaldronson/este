import Restaurant from './restaurant';
import {Map} from 'immutable';
import {Record} from 'immutable';
import {actions} from './actions';

function revive(state) {
  const map = (state && state.get('map') || Map())
    .map(json => new Restaurant(json));
  return new (Record({
    list: map.sortBy(r => r.name).toList(),
    map: map
  }));
}

export default function(state, action, payload) {
  if (!action) return revive(state);

  switch (action) {

  case actions.onRestaurant: {
    const {id} = payload;
    return state.setIn(['map', id], new Restaurant(payload));
  }

  }

  return state;
}
