angular.module('myApp').controller('homeCtrl', function ($scope, homeService) {

   $scope.getproducts = ()=>{
       homeService.getproducts().then(response =>{
           $scope.products = response.data;
       })
   };

   $scope.findProductById = id =>{
       homeService.findProductById(id).then(response =>{
           $scope.found = response.data;
       })
   }
});