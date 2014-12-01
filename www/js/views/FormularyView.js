app.views.FormularyView = Backbone.View.extend({
    initialize: function () {
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
        "keyup .search-key": "search",
        "keypress .search-key": "onkeypress"
    },

    back: function (event) {
        window.history.back();
        return false;
    },
    search: function (event) {
        var key = $('.search-key').val();
        var stateEle = $('#state');
        var stateVal = "ca";
        if (stateEle.length !== 0) {
            stateVal = stateEle.val();
        }
        ;
        this.searchResults.fetch({reset: true, data: {name: key, state: stateVal}});
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
