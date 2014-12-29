app.directive( 'menuDirective', function () {
    
    return {
        templateUrl : "templates/sideMenu.html",
        link : function(scope, element, attrs) {
            scope.menuActive = false;
            scope.menuToggle = function() {
                
                var speed = 300;
                if( scope.menuActive ) {
                    
                    $("#sideMenu").animate({
                        height  : "7%"
                    }, speed);
                    
                } else {
                
                    $("#sideMenu").animate({
                        height  : "96%"
                    }, speed);
                }
                
                
                scope.menuActive = !scope.menuActive;
            }
            
        }
    }
});