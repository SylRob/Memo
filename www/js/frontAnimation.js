app.directive( 'menuDirective', function () {
    
    function link( scope, element, attrs ) {
         
        var h, paddT;
        
        scope.menuActive = false;
        
        //height setting on resize
        $(window).resize(function() {
            
            reasign();
            
            $('#sideMenu').height( h );
            
        }).resize();
        
        
        scope.menuToggle = function( elems ) {
            
            if( !scope.menuActive ) {
                $('#bottomPos > div[id^="btn_"]').hide();
                for(elem in elems) { $("#btn_"+elems[elem]).show(); }
            }
            
            scope.menuActive = !scope.menuActive;
            reasign();
            
            var speed = 300;
            
            reasign();
            
            $("#sideMenu").animate({
                height  : h
            }, speed);
            
        } //scope.menuToggle
        
        
        scope.menuEdit = function() {
            //$scope.toEdit( scope.selectedId );
            console.log(scope.selectedId);
        }
        
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

.directive( 'selectItem', function () {
    
    function link( scope, element, attrs ) {
        
        scope.animElem = function( id, name ) {
            
            if ( !scope.activate ) {
                
                scope.listActivate = !scope.listActivate;
                
                
            }
            
        }
        
        
    }

    return {
        scope: {
            toEdit : "&"
        },
        link: link
    };
    
    
    
});





























