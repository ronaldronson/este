import express from 'express';

const router = express.Router();

router.route('/2')
  .get((req, res, next) => {

    // Simulate DB checks here.
    setTimeout(() => {
      res
        .json({
          addressStreet: 'Elsewhere 666',
          couisin: ['Indian'],
          deliveryMinimum: 10,
          id: '2',
          name: 'Almabra Ma Bunga'
        })
        .status(200)
        .end();
    }, 1000);

  });

export default router;
