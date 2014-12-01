app.views.DrugView = Backbone.View.extend({
    initialize: function () {
        this.searchResults = new app.models.PlanCollection();
        this.searchresultsView = new app.views.PlanListView({model: this.searchResults});
        app.views.PlanListItemView.drug_id = this.model.attributes["id"];
        $.each($('#plan-list>ul>li>a'), function(i, v){
            $(v).click(function(){

            });
        });
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        $('#plan-list', this.el).append(this.searchresultsView.render().el);
        return this;
    },

    events: {
        "click .btn-back": "back",
        "keyup .search-key":    "search",
        "keypress .search-key": "onkeypress"
    },

    back: function(event) {
        window.history.back();
        return false;
    },
    search: function (event) {
        var key = $('.search-key').val();
        var stateEle = $('#state');
        var stateVal = "CA";
        if (stateEle.length !== 0) {
            stateVal = stateEle.val();
        };
        this.searchResults.fetch({reset: true, data: {name: key, state: stateVal}});
    },

    onkeypress: function (event) {
        if (event.keyCode === 13) { // enter key pressed
            event.preventDefault();
        }
    }
});
