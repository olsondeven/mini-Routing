angular.module('miniRouting').controller('productsCtrl',function($scope,productsService,$stateParams){

  if ($stateParams.id === 'shoes') {
       $scope.productData = productsService.shoeData;
   }
   else if ($stateParams.id === 'socks') {
       $scope.productData = productsService.sockData;
   }

});//closing backet
