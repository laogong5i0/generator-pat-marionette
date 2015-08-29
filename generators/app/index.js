'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    yeoman.generators.Base.apply(this, arguments);
    // console.log("this.readFileAsString: ", this.readFileAsString)
    // console.log("this.path: ", this.path);
    // this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
    // this.empty = this.options['empty'];
    // Next, add your custom code
    // this.option('coffee'); // This method adds support for a `--coffee` flag
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the excellent ' + chalk.red('PatMarionette') + ' generator!'
    ));

    var prompts = [{
      type: 'string',
      name: 'appName',
      message: 'What would you like to name this app?',
      default: 'app'
    }, {
      type: 'string', 
      name: 'cssFramework',
      message: 'Include a CSS framework? twitter bootstrap(B), foundation(F), I don\'t want to include a CSS framework(N)?',
        default: 'B'
    },{
      type: 'string',
      name: 'bowerDirectory',
      message: 'Where do you want the Bower components installed?',
      default: 'bower_components'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      if(this.props.cssFramework.toUpperCase() === 'B'){
        this.props.bootstrap = true;
        this.props.foundation = false;
      }else{
        this.props.bootstrap = false;
        this.props.foundation = true;
      }
      this.props.empty = false;
      // To access props later use this.props.someOption;
      done();
    }.bind(this));
  },

  writing: {
    configFiles: function(){
      this.mkdir('app');
      this.mkdir('app/assets/coffee');
      this.mkdir('app/assets/coffee/apps');
      this.mkdir('app/assets/coffee/entities');
      this.mkdir('app/assets/coffee/common');
      this.mkdir('app/assets/img');
      this.mkdir('server');
      this.mkdir('app/assets/css/');
      this.mkdir('test');

      this.template('gitignore', '.gitignore', this.props);//配置不需要上传到git的文件
      this.copy('_README.md', 'README.md');
      this.copy('_r.js', 'app/r.js');
      this.copy('_favicon.ico', 'app/favicon.ico');
      this.copy('_404.html', 'app/404.html');

      this.template('_package.json', 'package.json', this.props);
      this.template('bowerrc', '.bowerrc', this.props);
      this.template('_bower.json', 'bower.json', this.props);
      this.copy('server/app.js', 'server/app.js');
      this.template('Gruntfile.js', 'Gruntfile.js', this.props);

      this.copy('_app.css', 'app/assets/css/app.css');
      this.template('_require_main.coffee', 'app/assets/require_main.coffee', this.props);

      this.copy('_build.js', 'app/assets/build.js');

    },
    app: function () {
      // folders
      this.mkdir('app/assets/coffee/apps/sub_app');
      this.mkdir('app/assets/coffee/apps/sub_app/hello/');
      this.mkdir('app/assets/coffee/apps/sub_app/hello/templates/');
      // example files
      this.template('_template.html', 'app/template.html', this.props);
      this.copy('example/_app.coffee', 'app/assets/coffee/app.coffee');
      this.copy('example/_sub_app.coffee', 'app/assets/coffee/apps/sub_app/sub_app.coffee');
      this.copy('example/_view.coffee', 'app/assets/coffee/apps/sub_app/hello/hello_view.coffee');
      this.copy('example/_controller.coffee', 'app/assets/coffee/apps/sub_app/hello/hello_controller.coffee');
      this.copy('example/_template.tpl', 'app/assets/coffee/apps/sub_app/hello/templates/hello_view.tpl');
      this.template('example/_hello.coffee', 'app/assets/coffee/entities/hello.coffee', this.props);
      this.copy('example/_HelloSpec.coffee', 'test/coffee/HelloSpec.coffee');
      

    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }


});
