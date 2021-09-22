app.models.Drug = Backbone.Model.extend({
    initialize:function () {
        this.drugs = new app.models.DrugCollection();
        this.drugs.parent = this;
    },

    sync: function(method, model, options) {
        if (method === "read") {
            app.adapters.drug.findById(parseInt(this.id)).done(function (data) {
                options.success(data);
            });
        }
    }

},
    {
        id: undefined,
        ndc: '',
        proprietary_name: '',
        active_numerator_strength: '',
        active_ingred_unit: ''
    });

app.models.DrugCollection = Backbone.Collection.extend({

    model: app.models.Drug,

    sync: function(method, model, options) {
        if (method === "read") {
            app.adapters.drug.findByName(options.data.name).done(function (data) {
                //convert drug models from array form to object form
                data.forEach((e, i)=>{
                    let obj = {id: e[0], ndc: e[1], proprietary_name: e[2],active_numerator_strength: e[3], active_ingred_unit: e[4]}
                    data[i] = obj
                })
                options.success(data);
            });
        }
    }

});

