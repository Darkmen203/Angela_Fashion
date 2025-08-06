'use strict';

/**
 * vpn-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vpn-user.vpn-user');
