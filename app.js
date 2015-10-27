"use strict";

var appconfig = require("./appconfig");
var express = require("express");
var path = require("path");

var app = express();
var router_main = express.Router();

router_main.use(function(req, res, next){
	console.log(req.method, req.url);
	next();
});

router_main.get("/", function(req, res){
	res.send("Frakn is here");
});

app.use(express.static(path.join(__dirname, "public")));
app.use("/", router_main);

appconfig(router_main);

app.listen(80);
