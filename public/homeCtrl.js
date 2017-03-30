angular.module('myApp').controller('homeCtrl', function ($scope, homeService) {

    $scope.deletProduct = (id) =>{
        homeService.deleteProduct(id).then(response =>{
            $scope.getproducts();
        })
    };
    $scope.addProduct = (product) =>{
        homeService.addProduct(product).then(response =>{
            $scope.getproducts();
        })
    };

   $scope.getproducts = ()=>{
       homeService.getproducts().then(response =>{
           $scope.products = response.data;
       })
   };

   $scope.findProductById = id =>{
       homeService.findProductById(id).then(response =>{
           // console.log(response.data)
           $scope.found = response.data[0];
       })
   }
});