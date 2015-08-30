define ["js/app", "js/apps/<%= name %>/<%= module %>/<%= module %>_view"], (App, View) ->
  App.module "SubApp.<%= module.substr(0,1).toUpperCase() + module.substr(1, module.length) %>", (<%= module.substr(0,1).toUpperCase() + module.substr(1, module.length) %>, App, Backbone, Marionette, $, _) ->
    <%= module.substr(0,1).toUpperCase() + module.substr(1, module.length) %>.Controller =
      <%= module.substr(0,1).toUpperCase() + module.substr(1, module.length) %>Model =
      sayHello: ->
        require ["js/entities/hello"], ->
          getHello = App.request "hello"
          $.when(getHello).done (hello) ->
            <%= module%>View = new View.<%= module.substr(0,1).toUpperCase() + module.substr(1, module.length) %>View(model: <%= module %>)

            App.mainRegion.show <%= module %>View

  App.SubApp.<%= module.substr(0,1).toUpperCase() + module.substr(1, module.length) %>.Controller

