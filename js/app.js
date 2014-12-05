var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};
var config = {
    restUrl : "http://192.168.2.4/f/"
    //restUrl : "http://10.0.0.185/f/"
    //restUrlLive : "http://usvsolutions.com/formulary_api/f/"
    //restUrl :"http://usvsolutions.com/formulary_api/f/"
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
    $( document ).ajaxStart(function() {
        $( "#loading" ).show();
    });
    $( document ).ajaxStop(function() {
        $( "#loading" ).hide();
    });
});