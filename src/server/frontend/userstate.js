import Promise from 'bluebird';
import Immutable from 'immutable';

export default function userState() {

  return (req, res, next) => {
    loadUserData(req).then(loadedData => {
      req.userState = Immutable.Map().merge(...loadedData);
      next();
    });
  };

}

// Gracefully settle all promises, ignore failed.
function loadUserData(req) {
  const dataSources = [
    // loadRestaurants()
  ];

  return Promise.settle(dataSources).then(receivedData =>
    receivedData
      .filter(promise => promise.isFulfilled())
      .map(promise => promise.value())
  );
}

// Simulate async action.
function loadRestaurants() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        restaurants: {
          map: {
            '1': {
              addressStreet: 'Somewhere 666',
              couisin: ['Pasta'],
              deliveryMinimum: 10,
              id: '1',
              name: 'Pasta Deli'
            },
            '2': {
              addressStreet: 'Elsewhere 666',
              couisin: ['Indian'],
              deliveryMinimum: 10,
              id: '2',
              name: 'Almabra Ma Bunga'
            },
            '3': {
              addressStreet: 'Nowhere 666',
              couisin: ['Czech'],
              deliveryMinimum: 30,
              id: '3',
              name: 'U Rozvařilů'
            }
          }
        }
      });
    }, 20);
  });
}
