app.views.FormularyView = Backbone.View.extend({
    initialize: async function () {
        app.models.Drug.rxcui = this.model.get('rxcui');
        app.views.PlanListItemView.drug_id = this.model.get('drug_id');

        this.planSearchResults = new app.models.PlanCollection();
        this.planSearchresultsView = new app.views.PlanListView({model: this.planSearchResults});

        this.drugSearchResults = new app.models.DrugCollection();
        this.drugSearchresultsView = new app.views.DrugListGoToFormularyView({model: this.drugSearchResults});

        //async update drug name and plan details
        const self = this;
        let drug = await app.adapters.drug.findByRxcui(this.model.get('rxcui'))
        this.listenTo(this.model, "add", this.modelUpdated);
        this.listenTo(this.model, "change", this.modelUpdated);
        self.model.set('drug_full_name', drug[2]);
        const plan = await app.adapters.plan.findByFid(self.model.get('f_id'))
        self.model.set({plan_name: plan.name, contract_name: plan.contract_name});
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        app.utils.misc.bindModal();
        app.utils.misc.afterBBRender();
        app.utils.misc.initFb();
        if (typeof FB == "object") {
            FB.XFBML.parse();
        }
        else {
            setTimeout(function () {
                if (typeof FB == "object") {
                    FB.XFBML.parse();
                }
            }, 2000);
        }
        return this;
    },
    events: {
        "click .btn-back": "back",
        "keyup #drug-select.search-key": "searchDrug",
        "keypress .search-key": "onkeypress",
        "change #state": "changeState",
        "click #current-state": "showSelectState",
        "click #current-plan .icon-edit": "showSelectPlan",
        "click #drug-name .icon-edit": "showSelectDrug",
        "keyup #plan-select.search-key": "searchPlan"
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
    showSelectDrug: function () {
        $('#drug-name').toggle();
        $('#drug-select-wrap').toggle();
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

    searchDrug: function (event) {
        var key = $('#drug-select.search-key').val();
        this.drugSearchResults.fetch({reset: true, data: {name: key}});
        $('#drug-list', this.el).append(this.drugSearchresultsView.render().el);
    },
    searchPlan: function(event){
      var key = $('#plan-select.search-key').val();//event.target.val()
        var stateVal = this.model.get('state');
        this.planSearchResults.fetch({reset:true, data:{name:key, state:stateVal}});
        $('#plan-list', this.el).append(this.planSearchresultsView.render().el);//reuse backbonejs view element
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
