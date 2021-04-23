/*
 * angular-jsoneditor 1.0.0
 * (c) 2014 Bastien Donjon http://bastien-donjon.fr
 * License: MIT
 */

(function (window, angular) {

    'use strict';

    angular.module('angular-pagehelper', [])
        .factory('pageHelper',()=>{ 
            let self = {};
            return {
                showLoader : () => { debugger; self.ctrl.showLoader() },
                hideLoader : () => { self.ctrl.hideLoader() },
                registerCtrl : (ctrl)=> {
                    self.ctrl = ctrl;
                }
            }
        })

        .directive('angularPagehelper', directive)
        .controller('pageHelperCtrl',pageHelperCtrl)

    /**
     * @returns {}
     */
    function directive(pageHelper) {
        return {
            restrict: 'E',
            transclude: false,
            controller:"pageHelperCtrl",
            template:`<div ng-show="pageLoader">
            <div class="loader"></div>
            <div class="overlay"></div>
        </div>
        
        <style>
        .loader {
            position: absolute;
            top:45%;
            left: 45%;
            border: 9px solid #404040;
            border-radius: 50%;
            border-top: 9px solid #9aaebd;
            border-bottom: 9px solid #9aaebd;
            width: 100px;
            height: 100px;
            -webkit-animation: spin 1.5s linear infinite;
            animation: spin 1.5s linear infinite;
            z-index: 9999;
        }
        .overlay {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color:#000;
            opacity: .75;
            z-index: 9998;
        }
        </style>`
        };
    }
    function pageHelperCtrl($scope,pageHelper){
        $scope.pageLoader = false;
        (function($scope){
            var showLoader = () => { debugger;$scope.pageLoader = true };
            var hideLoader = () => { debugger;$scope.pageLoader = false };
            pageHelper.registerCtrl({showLoader,hideLoader});
        })($scope)
    }

})(window, angular);
