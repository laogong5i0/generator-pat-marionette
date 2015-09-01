define ["js/app", "tpl!js/apps/<%= name %>/<%= module %>/templates/<%= module %>_view.tpl"], (App, <%= module %>Tpl) ->
  App.module "<%= name.substr(0,1).toUpperCase() + name.substr(1, name.length) %>.View", (View, App, Backbone, Marionette, $, _) ->

    View.<%= module.substr(0,1).toUpperCase() + module.substr(1, module.length) %>View = Marionette.ItemView.extend(
      template: <%= module %>Tpl
      id: 'module-<%= module %>'
    )

  App.<%= name.substr(0,1).toUpperCase() + name.substr(1, name.length) %>.View