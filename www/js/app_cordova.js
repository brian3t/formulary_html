/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
Backbone app
 */
var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};
var config = {
    //restUrl : "http://192.168.2.4/f/"
    //restUrl : "http://10.0.0.185/f/"
    //restUrlLive : "http://usvsolutions.com/formulary_api/f/"
    restUrl :"http://usvsolutions.com/formulary_api/f/"
    //TODO auto switch rest url based on deployment
};

var backboneInit =  function () {
    app.router = new app.routers.AppRouter();
    app.utils.templates.load(["HomeView", "DrugView", "DrugListItemView","PlanListItemView","FormularyView"],
        function () {
            app.router = new app.routers.AppRouter();
            Backbone.history.start();
        });
    $.ajaxSetup({ cache: true });
    $( document ).ajaxStart(function() {
        $( "#loading" ).show();
    });
    $( document ).ajaxStop(function() {
        $( "#loading" ).hide();
    });
    StatusBar.hide();
    //for ios
    $('body').height($('body').height() + 20);
    //end for ios
};

//capp is Cordova app
var capp = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        capp.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');
        //
        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        backboneInit();
    }
};

capp.initialize();
