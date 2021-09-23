app.models.Formulary = Backbone.Model.extend({

    initialize: function () {
    },

    sync: function (method, model, options) {
        if (method === "read") {
            app.adapters.formulary.findByFidDrugId(this.get('formulary_id'), this.get('drug_id')).done(function (data) {
                options.success(data);
            });
        }
    },
    defaults:{
        plan_name:"",
        plan_url:"#"
    }

});

app.models.FormularyCollection = Backbone.Collection.extend({

    model: app.models.Formulary,

    sync: function (method, model, options) {
        if (method === "read") {

            app.adapters.formulary.findByFidDrugId(options.data.formulary_id, options.data.drug_id).done(function (data) {
                options.success(data);
            });
            //app.adapters.formulary.findByStateName(options.data.state, options.data.name).done(function (data) {
            //    options.success(data);
            //});
        }
    }

});
