define ["js/app"], (App) ->
  App.module '<%= name.substr(0,1).toUpperCase() + name.substr(1, name.length) %>', (<%= name.substr(0,1).toUpperCase() + name.substr(1, name.length) %>, App, Backbone, Marionette, $, _) ->
    App.Router = Marionette.AppRouter.extend(
      appRoutes:
        <%= name %>:"sayHello"
    )
    API =
      sayHello: ->
        require ["js/apps/<%= name %>/<%= module%>/<%= module%>_controller"], ->
          console.log("API hello controller")
          App.<%= name.substr(0,1).toUpperCase() + name.substr(1, name.length) %>.<%= module.substr(0,1).toUpperCase() + module.substr(1, module.length) %>.Controller.sayHello()

    App.addInitializer ->
      new App.Router(controller: API)

  App.<%= name.substr(0,1).toUpperCase() + name.substr(1, name.length) %>