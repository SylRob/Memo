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

document.addEventListener('deviceready', function() {

    console.log("deviceready");
    
    
}, false);


var app = angular
.module( 'Memo', ['ngRoute', 'ngAnimate'] )

.factory('DB', function() {
    
    //set the DB for all the page 
    return new DBLocal("memoLists");

})
.config( ['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/mainList', {
            templateUrl: 'templates/main.html',
            controller: 'HomeCtrl'
        }).
        when('/list/:numList', {
            templateUrl: 'templates/aList.html',
            controller: 'aListCtrl'
        }).
        when('/list/:numList/elem', {
            templateUrl: 'templates/allElems.html',
            controller: 'DetailsCtrl'
        }).
        when('/list/:numList/elem/:numElem', {
            templateUrl: 'templates/aElem.html',
            controller: 'aElemCtrl'
        }).
        otherwise({
            redirectTo: '/mainList'
        });
    }
])

.controller('HomeCtrl' ,['$scope', '$routeParams', '$location', 'DB', HomeCtrl ])

.controller('aListCtrl', ['$scope', '$routeParams', '$location', 'DB', aListCtrl ])

.controller('DetailsCtrl', ['$scope', '$routeParams', '$location', 'DB', DetailsCtrl ])

.controller('aElemCtrl', ['$scope', '$routeParams', '$location', 'DB', aElemCtrl ]);








