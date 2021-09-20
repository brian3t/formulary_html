app.adapters.employee = (function () {

    console.log("Loading localstorage adapter module");

    var findById = function (id) {

            var deferred = $.Deferred(),
                employees = JSON.parse(window.localStorage.getItem("employees")),
                employee = null,
                l = employees.length;

            for (var i = 0; i < l; i++) {
                if (employees[i].id === id) {
                    employee = employees[i];
                    break;
                }
            }

            deferred.resolve(employee);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred(),
                employees = JSON.parse(window.localStorage.getItem("employees")),
                results = employees.filter(function (element) {
                    var fullName = element.firstName + " " + element.lastName;
                    return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
            deferred.resolve(results);
            return deferred.promise();
        },

        findByManager = function (managerId) {
            var deferred = $.Deferred(),
                employees = JSON.parse(window.localStorage.getItem("employees")),
                results = employees.filter(function (element) {
                    return managerId === element.managerId;
                });
            deferred.resolve(results);
            return deferred.promise();
        };


    // Store sample data in Local Storage

        // The public API
    return {
        findById: findById,
        findByName: findByName,
        findByManager: findByManager
    };


}());
