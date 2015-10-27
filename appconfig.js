"use strict";

var express = require("express");
var path = require("path");

var APP_PATHS = [
	{route: "/bouleycalendar", path: path.join("..", "boulcalendar", "app.js")}
];

function add_apps(router){
	for(var i = 0; i < APP_PATHS.length; i++){
		router.use(APP_PATHS[i].route, require(APP_PATHS[i].path));
	}
}

module.exports = add_apps;
