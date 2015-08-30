define ["js/app"], (App) ->
  App.module "<%= name %>", (<%= name %>, App, Backbone, Marionette, $, _) ->
    App.Router = Marionette.AppRouter.extend(
      appRoutes:
        <%= name %>:"sayHello"
    )
    API =
      sayHello: ->
        require ["js/apps/<%= name %>/<%= module%>/<%= module%>_controller"], ->
          console.log("API hello controller")
          App.<%= name %>.Hello.Controller.sayHello()

    App.addInitializer ->
      new App.Router(controller: API)

  App.<%= name %>