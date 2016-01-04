export const actions = create();
export const feature = 'fetch';

export function create(dispatch, validate, fetch, state) {

  return {

    get(action, url) {

      dispatch(actions.get, {action, url});

      // Hot reload fails to fetch error, because server was just restarted.
      fetch(url)
        .then(response => response.json())
        .then(json => action(json))
        .catch(error => {
          // TODO: Show nicer, probably another action, and log it.
          console.log(error);
        });
    }

  };

}
