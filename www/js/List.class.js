
var List = (function() {
    
    function List( id, DB ) {
        
        this.DB = DB;
        
        this.config = {};
        this.infos = {};
        this.done = false;
        this.elems = {};
        
        if ( !isNaN( id ) ) this.getFromId( id );
        
    }
    
    List.prototype.init = function() {
        var _this = this;
        
        
    }
    
    
    List.prototype.setInfos = function( data ) {
        
        this.infos.id = data.id;
        this.infos.name = data.name;
        this.infos.description = data.description;
        this.infos.from = data.from;
        this.infos.to = data.to;
        this.infos.nbrOfElements = data.nbrOfElements;
        
    }
    
    
    List.prototype.setConfig = function( data ) {
        
        this.config.notify = data.notify;
        this.config.every = data.every;
        this.config.type = data.type;
        
    }
    
    List.prototype.setElems = function( data ) {
                
        this.infos.nbrOfElements = Object.keys(data).length;
        
        this.elems = data;
        
    }
    
    List.prototype.setDone = function( data ) {
        
        this.done = data;
        
    }
    
    
    
    List.prototype.getFromId = function( id ) {
        var _this = this;
        
        var lists = this.DB.getElem();
        
        for( var arrID in lists ) {
            
            if ( id == lists[arrID].infos.id ) {
                
                var myList = lists[arrID];
                
                _this.setInfos( myList.infos );
                _this.setConfig( myList.config );
                _this.setElems( myList.elems );
                
                break;
            }
            
        }
        
        
    }
    
    List.prototype.erase = function() {
        var _this = this;
        
        if ( isNaN( this.infos.id ) ) return false;
        
        
        
    }
    
    List.prototype.save = function(update) {
        var _this = this;
        
        var myObj = {};
        
        myObj.config = this.config;
        myObj.infos = this.infos;
        myObj.elems = this.elems;
        
        if (!update) {
            this.DB.addData( myObj );
        } else {
            
            var lists = this.DB.getElem();
        
            for( var arrID in lists ) {
            
                if ( _this.infos.id == lists[arrID].infos.id ) {
                    
                    lists[arrID] = myObj;
                    
                    _this.DB.storeElem( lists );
                    
                    break;
                }
            }
            
            
        }
        
        this.DB.getElem();
        
        
        
    }
    
    return List;
    
})();





















