define ["js/app", "js/apps/<%= name %>/<%= module %>/<%= module %>_view"], (App, View) ->
  App.module "<%= name.substr(0,1).toUpperCase() + name.substr(1, name.length) %>.<%= module.substr(0,1).toUpperCase() + module.substr(1, module.length) %>", (<%= module.substr(0,1).toUpperCase() + module.substr(1, module.length) %>, App, Backbone, Marionette, $, _) ->
    <%= module.substr(0,1).toUpperCase() + module.substr(1, module.length) %>.Controller =
      <%= module.substr(0,1).toUpperCase() + module.substr(1, module.length) %>Model =
      sayHello: ->
        require ["js/entities/hello"], ->
          getHello = App.request "hello"
          $.when(getHello).done (hello) ->
            <%= module%>View = new View.<%= module.substr(0,1).toUpperCase() + module.substr(1, module.length) %>View(model: hello)

            App.mainRegion.show <%= module %>View

  App.<%= name.substr(0,1).toUpperCase() + name.substr(1, name.length) %>.<%= module.substr(0,1).toUpperCase() + module.substr(1, module.length) %>.Controller

