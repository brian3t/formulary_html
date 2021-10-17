app.adapters.plan = (function (){

  var
    getPlans = function (params){
      return $.getJSON(config.restUrl + 'plan/get/' + app.utils.restful.assocArrayToRESTString(params), {})
    },
    findByFid = async function (f_id){
      let plan = null;
      const plans = await $.getJSON(config.restUrl + 'plan/get/' + app.utils.restful.assocArrayToRESTString({formulary_id: f_id}), {})
      let l = plans.length;
      for (let i = 0; i < l; i++) {
        if (plans[i].f_id === f_id.toString()) {
          plan = plans[i];
          break;
        }
      }
      return plan
    },

    findById = function (id){
      var deferred = $.Deferred();
      var plan = null;
      var l = plans.length;
      for (var i = 0; i < l; i++) {
        if (plans[i].id === id.toString()) {
          plan = plans[i];
          break;
        }
      }
      deferred.resolve(plan);
      return deferred.promise();
    },

    findByContractName = function (contract_name){
      let deferred = $.Deferred();
      let results = null;
      $.when(getPlans({contract_name})).then(
        function (result1){
          results = result1;
          deferred.resolve(results);
        });
      return deferred.promise();
    },
    findByContractNameRxcui = function (contract_name, rxcui){
      let deferred = $.Deferred();
      let results = null;
      $.when(getPlans({contract_name, rxcui})).then(
        function (result1){
          results = result1;
          deferred.resolve(results);
        });
      return deferred.promise();
    },
    findByState = function (state){
      var deferred = $.Deferred();
      var plans = null;
      plans = getPlans({"state": state});
      deferred.resolve(plans);
      return deferred.promise();
    },
    findByNameState = function (name, state){
      var deferred = $.Deferred();
      var results = null;
      $.when(getPlans({"name": name, "state": state})).then(
        function (result1){
          results = result1;
          deferred.resolve(results);
        });
      return deferred.promise();
    },

    plans = [];
  // The public API
  return {
    findByFid: findByFid,
    findById: findById,
    findByContractName: findByContractName,
    findByContractNameRxcui: findByContractNameRxcui,
    findByState: findByState,
    findByNameState: findByNameState,
  };

}());

app.adapters.formulary = (function (){

  var
    getFormularys = function (params){
      return $.getJSON(config.restUrl + 'cmsForm/get/' + app.utils.restful.assocArrayToRESTString(params), {});
    },
    findById = function (id){
      var deferred = $.Deferred();
      var formulary = null;
      var l = formularys.length;
      for (var i = 0; i < l; i++) {
        if (formularys[i].id === id.toString()) {
          formulary = formularys[i];
          break;
        }
      }
      deferred.resolve(formulary);
      return deferred.promise();
    },

    findByName = function (searchKey){
      var deferred = $.Deferred();
      var results = formularys.filter(function (element){
        return element.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
      });
      results = results.slice(0, 20);
      deferred.resolve(results);
      return deferred.promise();
    },
    findByFidRxcui = function (formulary_id, rxcui){
      let deferred = $.Deferred();
      let results = null;
      $.when(getFormularys({formulary_id, rxcui})).then(
        function (xhrResult){
          results = xhrResult;
          deferred.resolve(results);
        }
      );
      return deferred.promise();
    }

  // The public API
  return {
    findById: findById,
    findByName: findByName,
    findByFidRxcui: findByFidRxcui
  };

}());
