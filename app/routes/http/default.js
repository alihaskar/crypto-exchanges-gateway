"use strict";
const util = require('util');
const _ = require('lodash');
const url = require('url');
const logger = require('winston');

/**
 * Default route
 */

module.exports = function(app, config) {

app.use(function (req, res) {
    if ('OPTIONS' == req.method)
    {
        res.status(200).end();
        return;
    }
    let u = url.parse(req.url);
    if ('/favicon.ico' == u.pathname)
    {
        res.status(404).end();
        return;
    }
    logger.warn("Unknown route %s %s", req.method, u.pathname)
    res.status(404).send({origin:"gateway",error:'Unknown route'});
});

};
