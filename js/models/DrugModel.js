/**
 * Convert array to object
 * @param arr e.g. [1, 'drug name', 3, ml]
 *
 */
function convArrToObj(arr){
  if (! arr.length || arr.length < 5) return {err: 'malformed_array'}
  return {
    id: arr[0], ndc: arr[1], proprietary_name: arr[2], active_numerator_strength: arr[3], active_ingred_unit: arr[4],
    full_name: arr[2] + ' ' + arr[3] + ' ' + arr[4]
  }
}

app.models.Drug = Backbone.Model.extend({
    initialize: function (){
      this.drugs = new app.models.DrugCollection();
      this.drugs.parent = this;
    },

    sync: function (method, model, options){
      if (method === "read") {
        app.adapters.drug.findById(parseInt(this.id)).done(function (data){
          options.success(convArrToObj(data))
        });
      }
    },

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

  sync: function (method, model, options){
    if (method === "read") {
      app.adapters.drug.findByName(options.data.name).done(function (data){
        //convert drug models from array form to object form
        data.forEach((e, i) => {
          data[i] = convArrToObj(e)
        })
        options.success(data);
      });
    }
  }

});

