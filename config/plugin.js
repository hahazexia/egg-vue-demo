'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};

module.exports = {
    nunjucks : {
        enable: true,
        package: 'egg-view-nunjucks',
    },
    assets : {
        enable: true,
        package: 'egg-view-assets',
    }
};
