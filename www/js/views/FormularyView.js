app.views.FormularyView = Backbone.View.extend({
    initialize: function () {
        this.planSearchResults = new app.models.PlanCollection();
        this.planSearchresultsView = new app.views.PlanListView({model: this.planSearchResults});

        //async update drug name and plan details
        var self = this;
        $.when(app.adapters.drug.findById(this.model.get('drug_id'))).then(function (data) {
            self.model.set('drug_name', data.name);
        });
        var state = this.model.get("state");
        this.model.set({
            "state_name": app.utils.misc.USSTATES[state]
        });
        $.when(app.adapters.plan.findByFidState(this.model.get('f_id'), state)).then(function (data) {
            self.model.set({plan_name: data.name, plan_url: data.origin_url});
        });
        this.listenTo(this.model, "add", this.modelUpdated);
        this.listenTo(this.model, "change", this.modelUpdated);
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        app.utils.misc.bindModal();
        return this;
    },

    events: {
        "click .btn-back": "back",
        "keyup #plan-select.search-key": "searchPlan",
        "keypress .search-key": "onkeypress",
        "change #state": "changeState",
        "click #current-state": "showSelectState",
        "click #current-plan .icon-edit": "showSelectPlan"
    },
    changeState: function (event) {
        this.model.set('state', event.currentTarget.value);
        $('#state-name').html($(event.currentTarget.selectedOptions).text());
        $('#result').hide();
        this.showSelectPlan();
    },
    showSelectState: function () {
        $('#current-state').toggle();
        $('#state_select').toggle();
    },
    showSelectPlan: function () {
        $('#current-plan').toggle();
        $('#plan-select-wrap').toggle();
    },
    foo: function (event) {
        console.log("bar");
    },

    back: function (event) {
        window.history.back();
        return false;
    },
    searchPlan: function (event) {
        var key = $('#plan-select.search-key').val();
        var stateVal = this.model.get('state');
        this.planSearchResults.fetch({reset: true, data: {name: key, state: stateVal}});
        $('#plan-list', this.el).append(this.planSearchresultsView.render().el);
    },

    onkeypress: function (event) {
        if (event.keyCode === 13) { // enter key pressed
            event.preventDefault();
        }
    },
    modelUpdated: function () {
        this.render();
    }
});
