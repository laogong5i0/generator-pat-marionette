# coffescript output to app/assets/js directory
requirejs.config
  baseUrl: "assets"
  urlArgs: 'bust=' + Math.random() # cachebuster
  paths:
    backbone: "../<%= bowerDirectory %>/backbone-amd/backbone"
    localstorage: "../<%= bowerDirectory %>/backbone.localstorage/backbone.localstorage"
    jquery: "../<%= bowerDirectory %>/jquery/jquery"
    underscore: "../<%= bowerDirectory %>/underscore-amd/underscore"
    marionette: "../<%= bowerDirectory %>/backbone.marionette/lib/backbone.marionette"
    tpl: "../<%= bowerDirectory %>/requirejs-tpl/tpl"
    json2: "../<%= bowerDirectory %>/json2/json2"

  shim:
    underscore:
      exports: "_"

    backbone:
      deps: ["jquery", "underscore", "json2"]
      exports: "Backbone"

    marionette:
      deps: ["backbone"]
      exports: "Marionette"

  name: "app",
  out: "app.min.js"

require ["js/app"], (App) ->
  App.start()

requirejs [
  "jquery"
], ($) ->

  (($, window, undefined_) ->
    $doc = $(document)
  ) $, window
  return

