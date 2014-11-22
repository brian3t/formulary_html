var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};
var config = {
    //restUrl : "http://localhost/f/",
    //restUrlLive : "http://usvsolutions.com/formulary_api/f/"
    restUrl :"http://usvsolutions.com/formulary_api/f/"
    //TODO auto switch rest url based on deployment
}

$(document).on("ready", function () {
    app.router = new app.routers.AppRouter();
    app.utils.templates.load(["HomeView", "DrugView", "DrugListItemView","PlanListItemView","FormularyView"],
        function () {
            app.router = new app.routers.AppRouter();
            Backbone.history.start();
        });
    $.ajaxSetup({ cache: true });
});