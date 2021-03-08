'use strict';

const Controller = require('egg').Controller;

class V100Controller extends Controller {
  async index () {
    await this.ctx.render('v100/index.html');
  }

  async index2 () {
    await this.ctx.render('v100/index2.html');
  }
}

module.exports = V100Controller;
