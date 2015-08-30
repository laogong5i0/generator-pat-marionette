define ["js/app", "tpl!js/apps/<%= name %>/<%= module %>/templates/<%= module %>_view.tpl"], (App, <%= module %>Tpl) ->
  App.module "<%= name %>.View", (View, App, Backbone, Marionette, $, _) ->

    View.<%= module.substr(0,1).toUpperCase() + module.substr(1, module.length) %>View = Marionette.ItemView.extend(
      template: <%= module %>Tpl
    )

  App.<%= name %>.View