
var Elem = (function() {
    
    function Elem( id, DB ) {
        
        
        if ( undefined != id && '' != id ) this.getFromId( id );
        
    }
    
    
    Elem.prototype.init = function() {
        var _this = this;
        
    }
    
    
    Elem.prototype.setInfos = function( data ) {
        
        
    }
    
    
    Elem.prototype.setConfig = function( data ) {
        
    }
    
    
    Elem.prototype.setElems = function( data ) {
        
    }
    
    
    Elem.prototype.setDone = function( data ) {
        
        this.done = data;
        
    }
    
    
    Elem.prototype.getFromId = function( id ) {
        var _this = this;
        
        var elems = this.List.elems;
        
        for( var arrID in elems ) {
            
            if ( id == elems[arrID].infos.id ) {
                
                var myElem = elems[arrID];
                
                break;
            }
            
        }
        
        
    }
    
    
    Elem.prototype.erase = function() {
        var _this = this;
        
        
    }
    
    
    Elem.prototype.save = function(update) {
        var _this = this;
        
        var myObj = {};
        
        if (!update) {
            //this.List.addElem( myObj );
        } else {
            /*
            var elems = this.List.getElems();
        
            for( var arrID in elems ) {
            
                if ( _this.infos.id == elems[arrID].infos.id ) {
                    
                    elems[arrID] = myObj;
                    
                    _this.DB.storeElem( elems );
                    
                    break;
                }
            }
            */
            
        }
        
    }
    
    return Elem;
    
})();





















