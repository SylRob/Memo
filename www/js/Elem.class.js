
var Elem = (function() {
    
    function Elem( id, List ) {
        
        this.List = List;
        this.config = {};
        this.infos = {};
        this.done = false;
        
        if ( undefined != id && '' != id ) this.getFromId( id );
        
        
        
    }
    
    
    Elem.prototype.init = function() {
        var _this = this;
        
    }
    
    
    Elem.prototype.setInfos = function( data ) {
        
        this.infos.id = data.id;
        this.infos.name = data.name;
        this.infos.memo = data.memo;
        this.infos.from = data.from;
        this.infos.to = data.to;
        this.done = data.done;        
    }
    
    Elem.prototype.setConfig = function( data ) {
        
        this.config.notify = data.notify;
        this.config.notifyTime = data.notifyTime;
        
    }
    
    
    Elem.prototype.setDone = function() {
        
        if ( this.done ) this.done = false;
        else this.done = true;
        
    }
    
    
    Elem.prototype.getFromId = function( id ) {
        var _this = this;
        
        var elems = this.List.elems;
        
        for( var arrID in elems ) {
            
            if ( id == elems[arrID].infos.id ) {
                
                var myElem = elems[arrID].infos;
                
                myElem.done = elems[arrID].done;
                _this.setInfos(myElem);
                
                break;
            }
            
        }
        
        
    }
    
    
    Elem.prototype.erase = function() {
        var _this = this;
        
        if ( undefined == this.infos.id || '' == this.infos.id ) return false;
        
        var elems = this.List.elems;
        var toSave = [];
        
        for( var arrID in elems ) {
            
            if ( _this.infos.id != elems[arrID].infos.id ) {                
                toSave.push( elems[arrID] );
            }
        }
        
        this.List.setElems( toSave );
        this.List.save(true);
        
    }
    
    
    Elem.prototype.save = function(update) {
        var _this = this;
        
        var myObj = {};
        
        myObj.infos = this.infos;
        myObj.config = this.config;
        myObj.done = this.done;
        
        if (!update) {
            this.List.addElem( myObj );
        } else {
            
            var elems = this.List.elems;
        
            for( var arrID in elems ) {
            
                if ( _this.infos.id == elems[arrID].infos.id ) {
                    
                    elems[arrID] = myObj;
                    
                    _this.List.setElems( elems );
                    _this.List.save(true);
                    
                    break;
                }
            }
            
        }
        
    }
    
    return Elem;
    
})();





















