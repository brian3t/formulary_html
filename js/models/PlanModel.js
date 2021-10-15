app.models.Plan = Backbone.Model.extend({
  initialize: function (){
  },

  sync: function (method, model, options){
    if (method === "read") {
      app.adapters.plan.findById(parseInt(this.id)).done(function (data){
        options.success(data);
      });
    }
  }

});

app.models.PlanCollection = Backbone.Collection.extend({

  model: app.models.Plan,

  sync: function (method, model, options){
    if (method === "read") {
      app.adapters.plan.findByContractNameRxcui(options.data.contract_name, options.data.rxcui).done(function (data){
        options.success(data);
      });
/*
      app.adapters.plan.findByContractName(options.data.contract_name).done(function (data){
        options.success(data);
      });
*/
    }
  }

});

app.models.ReportsCollection = Backbone.Collection.extend({

  model: app.models.Plan

  //sync: function(method, model, options) {
  //    if (method === "read") {
  //        console.log("find by manager");
  //        app.adapters.plan.findByManager(this.parent.id).done(function (data) {
  //            options.success(data);
  //        });
  //    }
  //}

});
