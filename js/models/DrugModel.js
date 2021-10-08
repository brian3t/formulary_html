/**
 * Convert array to object
 * @param arr e.g. [1, 'drug name', 3, ml]
 *
 */
function convArrToObj(arr){
  if (! arr.length || arr.length < 3) return {err: 'malformed_array'}
  return {
    rxcui: arr[0], id: arr[1], str: arr[2],
    full_name: arr[2] + ' ' + arr[0]
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
    rxcui: '',
    str: ''
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

