app.directive( 'menuDirective', function () {
    
    function link( scope, element, attrs ) {
         
        var h, paddT;
        
        scope.menuActive = false;
        
        //height setting on resize
        $(window).resize(function() {
            
            reasign();
            
            $('#sideMenu').height( h );
            
        }).resize();
        
        
        scope.menuToggle = function( elems, id, name, listFunc ) {
            
            if( !scope.menuActive ) {
                $('#bottomPos > div[id^="btn_"]').hide();
                for(elem in elems) { $("#btn_"+elems[elem]).show(); }
            }
            
            scope.menuActive = !scope.menuActive;
            reasign();
            
            var speed = 300;
            
            $("#sideMenu").animate({
                height  : h
            }, speed);
            
            
            if ( id !== undefined ) {
                scope.menuEdit = function() {
                    listFunc.toEdit( id );
                }
                scope.menuAdd = function() {
                    listFunc.toElemList( id );
                }
                scope.menuRemove = function() {
                    listFunc.toRemove( id );
                }
            }
            
            
        } //scope.menuToggle
        
        
        function reasign() {
            
            if ( scope.menuActive ) { h = $(window).height(); }
            else { h = $('#btn_menu img').height(); }
            
        }
    }
    
    return {
        templateUrl : "templates/sideMenu.html",
        link : link
    }
})

.directive( 'selectItems', function () {
    
    function link( scope, element, attrs ) {
        
        scope.listActivate = false;
        
        scope.$parent.selectItem = function( id, name ) {
            
            if ( !scope.listActivate ) {
                
                
                
                
            }
            
            scope.listActivate = !scope.listActivate;
            
        }        
        
    }

    return {
        link: link
    };
    
    
});





























