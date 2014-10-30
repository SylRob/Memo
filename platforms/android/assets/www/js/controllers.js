
var HomeCtrl = function ( $scope, $routeParams, $location, DB ) {  
    
    //is the user a new user ?
    if( DB.getElem() === null ) {
        //yes, then go to the new User page
        $location.url('/newUser');
    }

}

var newUserCtrl = function( $scope, $routeParams, $location ) {
        
    $scope.goToCreateList = function() {
        $location.path('/list/newList');
    }
}

var aListCtrl = function( $scope, $routeParams, $location, DB ) {
        
    $scope.formNewList = function() {
        
        var myNewListObj = {};
        
        myNewListObj.name = $scope.name;
        myNewListObj.description = $scope.description;
        myNewListObj.from = $scope.from;
        myNewListObj.to = $scope.to;
        myNewListObj.elem = {};
        myNewListObj.id = DB.numberOfItems+1;
        
        DB.addData(myNewListObj);
        
        var listId = myNewListObj.id;
        
        $location.path('/list/'+listId+'/elem/newElem');
        
    }
}

var aElemCtrl = function( $scope, $routeParams, $location, DB ) {
    
}