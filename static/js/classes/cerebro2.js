var Cerebro2 = Cerebro2 || {};

/*
var Cerebro2 = (function( Cerebro2 ){    

	// private

	function intParam(key) {
		return Number(strParam(key));
	}

	function strParam(key) {
		return $.url().fparam(key);
	}

	function defaultModelURL() {
		return "http://" + window.location.hostname + ":9090/_model";
	}


	var loadDelay = intParam('loadDelay') || 0,
    	modelURL = strParam('modelURL') || defaultModelURL();

	//public

	return {
		runModel : function () {
		    model.getNextSnapshot(function(error, snapshot) {
		        var delay = 1000;

		        if (snapshot) {
		            history.addSnapshot(snapshot);
		            visualization.historyUpdated();

		            delay = 0;
		        }

		        setTimeout(function() {
		            runModel();
		        }, delay);
		    });
		},
		container3D : $('#container-3D'),
    	container2D : $('#container-2D'),
    	visualization3D : {
    		loadDelay : loadDelay
    	},
		visualization3D.render();

visualization2D.loadDelay = loadDelay;
visualization2D.render();

var sync = new GUISync(visualization3D);
sync.addChild(visualization2D);


	}
    
})(Cerebro2);

*/