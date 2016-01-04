export const actions = create();
export const feature = 'restaurants';

export function create(dispatch, validate, fetch, state) {

  return {

    onRestaurant(json) {
      dispatch(actions.onRestaurant, json);
    }

  };

}
