
var HomeCtrl = function ( $scope, $routeParams, $location, DB ) {  
      
    var data = DB.getElem();
    
    //is the user a new user ?
    if( !data ) {
        //yes, then
    } else {
        
    }
    
    var listFunc = {};
    var actionList = ['edit', 'add', 'remove'];
    
    $scope.listsData = data;
    
    $scope.goToCreateList = function() {
        $location.path( '/list/newList' );
    }
    
    listFunc.goToCreateElem = function() {
        $location.path( '/list/'+listId+'/elem/newElem' );
    }
    
    listFunc.toEdit = function( listId ) {
        $location.path( '/list/'+listId );
    }
    
    listFunc.toRemove = function( listId, listName ) {
        
        if( window.confirm( "Are you sure you want to delete "+listName+" ?" ) ) {
            
            var listToDelete = new List(listId, DB);
            listToDelete.erase();
            data = DB.getElem();
            $scope.listsData = data;
            
        }
        
    }
    
    listFunc.unselectElem = function() {
        $scope.selectedIndex = -1;
    }
    
    $scope.toElemList = function( listId ) {
        
        $location.path( '/list/'+listId+'/elem' );
    }
    
    $scope.selectElem = function( id, name ) {
         
        if( $scope.selectedIndex != -1 && $scope.menuActive ) {
            $scope.menuToggle();
            $scope.selectedIndex = -1;
            return ;
        }
        $scope.selectedIndex = $scope.selectedIndex == id ? -1 : id;
        $scope.selectItem( id, name );
        $scope.menuToggle( actionList, id, name, listFunc );
    }
    
    alert('window W '+$(window).width())
    alert('window H '+$(window).height())

}

var aListCtrl = function( $scope, $routeParams, $location, DB ) {
    
    var listNumber = $routeParams.numList;
    
    var listFunc = {};
    
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
        
        var listToSave = new List( $scope.edit ? listNumber : false , DB );
        
        var myNewListObj = {};
        
        myNewListObj.name = $scope.name;
        myNewListObj.description = $scope.description;
        myNewListObj.nbrOfElements = 0;
        myNewListObj.elem = $scope.edit ? listToSave.elem : {};
        
        myNewListObj.id = $scope.edit ? listNumber : DB.getUniqueId();
        
        listToSave.setInfos( myNewListObj );
        
        listToSave.save( $scope.edit ? true : false );
        
        var listId = myNewListObj.id;
        
        toElemPage ? $location.path( '/list/'+listId+'/elem/newElem' ) : $location.path( '/mainList' );
        
    }
}


var DetailsCtrl = function( $scope, $routeParams, $location, DB ) {
    
    var listId = $routeParams.numList;
    var actionList = ['edit', 'add', 'remove'];
    var theList = new List( listId, DB );
    
    $scope.ListInfo = theList.infos;
    $scope.elemsData = theList.elems;
    
    var listFunc = {};
    
    $scope.goToCreateElem = listFunc.goToCreateElem = function() {
        $location.path( '/list/'+listId+'/elem/newElem' );
    }
    
    listFunc.toEdit = function( elemId ) {
        $location.path( '/list/'+listId+'/elem/'+elemId );
    }
    
    $scope.selectElem = function( id, name ) {
        if( $scope.selectedIndex != -1 && $scope.menuActive ) {
            $scope.menuToggle();
            $scope.selectedIndex = -1;
            return ;
        }
        $scope.selectedIndex = $scope.selectedIndex == id ? -1 : id;
        $scope.selectItem( id, name );
        $scope.menuToggle( actionList, id, name, listFunc );
    }
    
    listFunc.unselectElem = function() {
        $scope.selectedIndex = -1;
    }
    
    listFunc.toRemove = function( elemId, elemName ) {
        
        var elemToDelete = new Elem( elemId, theList );
        elemToDelete.erase();
        theList = new List( listId, DB );
        $scope.ListInfo = theList.infos;
        $scope.elemsData = theList.elems;
        
        
    }
    
    $scope.setDone = function( elemId ) {
        
        var e = new Elem( elemId, theList );
        //e.setDone();
        e.save( true );
        theList = new List( listId, DB );
        $scope.ListInfo = theList.infos;
        $scope.elemsData = theList.elems;
        
    }
    
    
}

var aElemCtrl = function( $scope, $routeParams, $location, DB ) {
    
    var listId = $routeParams.numList;
    var elemId = $routeParams.numElem;
    
    var theList = new List( listId, DB );
    
    $scope.ListInfo = theList.infos;
    $scope.edit = elemId != "newElem" ? true : false;
    
    if( $scope.edit ) {
        
        var elemToEdit = new Elem( elemId, theList );
        
        for( var info in elemToEdit.infos ) {
            $scope[info] = elemToEdit.infos[info];
            
        }
        $scope.done = elemToEdit.done;
        
    }
    
    
    $scope.elemSave = function(toNewElem) {
        
        var elemToSave = new Elem( false, theList );
        
        var myNewElemObj = {};
        
        myNewElemObj.name = $scope.name;
        myNewElemObj.memo = $scope.memo;
        myNewElemObj.done = false;
        myNewElemObj.from = $scope.from;
        myNewElemObj.to = $scope.to;
        
        myNewElemObj.id = $scope.edit ? elemId : DB.getUniqueId();
        
        elemToSave.setInfos( myNewElemObj );
        
        elemToSave.save( $scope.edit ? true : false );
        
        toNewElem ? $location.path( '/list/'+listId+'/elem/newElem' ) : $location.path( '/list/'+listId+'/elem/' );
        
    }
    
}