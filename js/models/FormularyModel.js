app.models.Formulary = Backbone.Model.extend({

    initialize: function () {
    },

    sync: function (method, model, options) {
        if (method === "read") {
            app.adapters.formulary.findByFidRxcui(this.get('f_id'), this.get('rxcui')).done(function (data) {
                options.success(data);
            });
        }
    },
    defaults:{
        contract_name:"",
        drug_full_name:"",
        plan_name:"",
        plan_url:"#"
    }

});

app.models.FormularyCollection = Backbone.Collection.extend({

    model: app.models.Formulary,

    sync: function (method, model, options) {
        if (method === "read") {

            app.adapters.formulary.findByFidRxcui(options.data.formulary_id, options.data.rxcui).done(function (data) {
                options.success(data);
            });
            //app.adapters.formulary.findByStateName(options.data.state, options.data.name).done(function (data) {
            //    options.success(data);
            //});
        }
    }

});
