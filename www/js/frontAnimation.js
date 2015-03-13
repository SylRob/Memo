app.directive( 'menuDirective', function () {
    
    function link( scope, element, attrs ) {
         
        var h, paddT;
        
        scope.menuActive = false;
        scope.elemActive = -1;
        scope.isAnimated = false;
        
        //height setting on resize
        $(window).resize(function() {
            
            resizePageWrapper();
            
        })
        
        scope.$on('$routeChangeStart', function(next, current) { 
            
            if( scope.menuActive ) {
                scope.menuToggle();
            }
            
        });
        
        
        scope.menuToggle = function( elems, id, name, listFunc ) {
            
            scope.elemActive = id || -1;
            
            if( !scope.menuActive ) {
                $('#bottomPos div[id^="btn_"] img').hide();
                for(elem in elems) { $("#btn_"+elems[elem]+" img").show(); }
                
                $('#pageWrapper').addClass('active');
                $('#menuWrapper').addClass('active');
                resizePageWrapper();
            
            } else {
                
                $('#pageWrapper').removeClass('active');
                $('#menuWrapper').removeClass('active');
                resizePageWrapper();
                
            }
            
            scope.menuActive = !scope.menuActive;
            
            
            if ( id !== undefined ) {
                scope.menuEdit = function() {
                    listFunc.toEdit( id );
                }
                scope.menuAdd = function() {
                    listFunc.goToCreateElem( id );
                }
                scope.menuRemove = function() {
                    if( window.confirm( "Are you sure you want to delete "+name+" ?" ) ) {
                        listFunc.toRemove( id, name );
                        scope.menuToggle();
                    }
                }
                scope.menuClose = function() {
                    listFunc.unselectElem();
                    scope.menuToggle();
                }
            }
            
            
        } //scope.menuToggle
        
        scope.menuPrevious = function() {
            window.history.back();
        }
        
        scope.menuHome = function() {
            window.location.href="index.html";
        }
        
        $('#pageWrapper').width(Math.round($(window).width()*98/100));
        
        function resizePageWrapper() {
            
            if( $('#pageWrapper').hasClass('active') ) {
                var newWidth = $(window).width() - $('#menuWrapper').outerWidth();
            } else {
                var newWidth = Math.round($(window).width()*98/100);
            }
            
            
            $('#pageWrapper').stop().animate({
                width : newWidth
            }, 300);
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





























