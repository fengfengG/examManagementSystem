'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index(ctx) {
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
