angular.module('myApp').service('homeService', function ($http) {

    this.deleteProduct = id =>{
        return $http.delete('/api/product/' + id);
    };

    this.addProduct = product =>{
        return $http.post('/api/product', product)
    };

    this.getproducts = () =>{
        return $http.get('/api/products');
    };

    this.findProductById = id =>{
        return $http.get('/api/product/' + id);
    }

});
