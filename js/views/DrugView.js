app.views.DrugView = Backbone.View.extend({
    initialize: function () {
        this.searchResults = new app.models.PlanCollection();
        this.searchresultsView = new app.views.PlanListView({model: this.searchResults});
        app.views.PlanListItemView.drug_id = this.model.attributes["id"];/*storing selected drug id*/
    },
    updateLocation: function(){
        $('#state', this.$el).val(capp.position.stateCode);

    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        $('#plan-list', this.el).append(this.searchresultsView.render().el);
        if (capp.position.stateCode=="")
        {
            navigator.geolocation.getCurrentPosition(capp.onGeolocationSuccess, capp.onGeoLocationError);
        }
        this.listenToOnce(capp.event_bus, 'iGotLocation', this.updateLocation);
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
        //scroll top
        let planSelEle = $('#plan-select'), plan_top = planSelEle.offset().top
        if (plan_top > 10){
            $('div.content').scrollTop(plan_top)
        }

        let key = $('.search-key').val();
        this.searchResults.fetch({reset: true, data: {contract_name: key}});
    },

    onkeypress: function (event) {
        if (event.keyCode === 13) { // enter key pressed
            event.preventDefault();
        }
    }
});
