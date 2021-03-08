'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/v100/index', controller.v100.index);

  router.get('/v100/index2', controller.v100.index2);
};
