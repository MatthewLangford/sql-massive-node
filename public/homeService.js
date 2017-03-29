angular.module('myApp').service('homeService', function ($http) {

    this.getproducts = () =>{
        return $http.get('/api/products');
    };

    this.findProductById = id =>{
        return $http.get('/api/product/' + id);
    }

});
