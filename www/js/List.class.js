
var List = (function() {
    
    function List( id, DB ) {
        
        this.DB = DB;
        
        this.config = {};
        this.infos = {};
        this.elems = [];
        
        this.type = ['shopping', 'todo', 'recipe'];
        
        if ( undefined != id && '' != id ) this.getFromId( id );
        
    }
    
    
    List.prototype.init = function() {
        var _this = this;
        
        
    }
    
    
    List.prototype.setInfos = function( data ) {
        
        this.infos.id = data.id;
        this.infos.name = data.name;
        this.infos.description = data.description;
        this.infos.nbrOfElements = data.nbrOfElements;
        
    }
    
    
    List.prototype.setConfig = function( data ) {
        
        this.config.notify = data.notify;
        this.config.type = data.type;
        
    }
    
    
    List.prototype.setElems = function( data ) {
                
        this.infos.nbrOfElements = Object.keys(data).length;
        
        this.elems = data;
        
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
        
        if ( undefined == this.infos.id || '' == this.infos.id ) return false;
        
        var lists = this.DB.getElem();
        var toSave = [];
        
        for( var arrID in lists ) {
            
            if ( _this.infos.id != lists[arrID].infos.id ) {
                
                toSave.push( lists[arrID] );
                
            }
        }
        
        this.DB.storeElem( toSave );
        
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
        
    }
    
    List.prototype.addElem = function(data) {
        
        this.elems.push(data);
        this.save(true);
        
    }
    
    return List;
    
})();





















