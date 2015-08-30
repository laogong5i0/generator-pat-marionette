'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var getValidatedFolder = function( path ){
	try { 
		var fsStat = fs.statSync( path );
		if ( fsStat.isDirectory() ) {
			return path;
		}
		else {
			return '';
		}
	} catch (e) { 
		return ''; 
	}
}

module.exports = yeoman.generators.NamedBase.extend({
	constructor: function (subAppName) {
		yeoman.generators.NamedBase.apply(this, arguments);
		this.argument('module', { 
			type: String, 
			required: false,
			defaults: 'main',
			desc: 'module name si required!'
		});

		// this.module = this.module.substr(0,1).toUpperCase() + this.module.substr(1, this.module.length);
		// console.log("jjjjjjjjjjj", this.module)
	},

	createTmplFiles: function(){
		var baseDir = getValidatedFolder('app/')
		var dir = 'app/assets/coffee/apps/';// + this.name;
		this.mkdir(path.join(dir, this.name));
		this.mkdir(path.join(dir, this.name, this.module, 'templates'));
		this.template('_sub_app.coffee', path.join(dir, this.name, this.name + '.coffee' ));
		this.template('_template.tpl', path.join(dir, this.name, this.module, 'templates', this.module+'_view.tpl'));
		this.template('_view.coffee', path.join(dir, this.name, this.module, this.module+'_view.coffee'));
		this.template('_controller.coffee', path.join(dir, this.name, this.module, this.module+'_controller.coffee'));
	}
});