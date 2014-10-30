
var HomeCtrl = function ( $scope, $routeParams, $location, DB ) {  
    
    var data = DB.getElem();
    
    //is the user a new user ?
    if( !data ) {
        //yes, then
    } else {
        
    }
    
    $scope.listsData = data;
    
    $scope.goToCreateList = function() {
        $location.path('/list/newList');
    }
    
    $scope.toEdit = function( listId ) {
        $location.path( '/list/'+listId );
    }
    
    $scope.toRemove = function( listId ) {
        
    }

}

var aListCtrl = function( $scope, $routeParams, $location, DB ) {
    
    var listNumber = $routeParams.numList;
    
    $scope.edit = listNumber != "newList" ? true : false;
    
    if ($scope.edit) {
        
        var listToEdit = new List( listNumber, DB );
        
        for( var info in listToEdit.infos ) {
            $scope[info] = listToEdit.infos[info];
        }
        
        for( var config in listToEdit.config ) {
            $scope[config] = listToEdit.config[config];
        }
        
    }
    
    
    $scope.listSave = function(toElemPage) {
        
        var listToSave = new List( false, DB );
        
        var myNewListObj = {};
        
        myNewListObj.name = $scope.name;
        myNewListObj.description = $scope.description;
        myNewListObj.from = $scope.from;
        myNewListObj.to = $scope.to;
        myNewListObj.done = false;
         myNewListObj.nbrOfElements = 0;
        myNewListObj.elem = {};
        
        myNewListObj.id = $scope.edit ? listNumber : DB.numberOfItems+1;
        
        listToSave.setInfos( myNewListObj );
        
        listToSave.save( $scope.edit ? true : false );
        
        var listId = myNewListObj.id;
        
        toElemPage ? $location.path( '/list/'+listId+'/elem/newElem') : $location.path('/mainList' );
        
    }
}

var aElemCtrl = function( $scope, $routeParams, $location, DB ) {
    
}