Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc2/doc/">App SDK 2.0rc2 Docs</a>'},
    launch: function(){
	console.log("Hello World");
	this._loadData();
    },
    //get data from Rally
    _loadData: function(){
	var myStore = Ext.create('Rally.data.wsapi.Store', {
	model: 'User Story',
	autoLoad: true,
	//events that will fire
	listeners: {
	    load: function(myStore, myData, success) {
	    //add grid logic after store loaded...
	    this. _loadGrid(myStore);
	    
	    },
	    scope: this
	},
	fetch: ['FormattedID', 'Name', 'ScheduleState']
       });
    },
    //create and show a grid of given stories
    _loadGrid: function(myStore){
	var myGrid= Ext.create('Rally.ui.grid.Grid', {
	    store: myStore,
	    columnCfgs: [
		 'FormattedID', 'Name', 'ScheduleState'
	     ]
	});
	this.add(myGrid);
	console.log("What is this?", this);
	
    }
});

