/* Main */

(function() {

    var loadDelay = intParam('loadDelay') || 0,
        modelURL = strParam('modelURL') || defaultModelURL(),
        encoderName = strParam('encoderName') || "coordinate";

    var container = $('#container');

    var model = new Cerebro2.NetworkReadonlyModel(modelURL),
        history = new Cerebro2.History(),
        visualization = new Cerebro2.FakeGeospatialCoordinateEncoderVisualization(container, history, encoderName);

    visualization.loadDelay = loadDelay;
    visualization.render();

    runModel();

    /* Functions */

    function runModel() {
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
    }

    /* Utilities */

    function intParam(key) {
        return Number(strParam(key));
    }

    function strParam(key) {
        return $.url().fparam(key);
    }

    function defaultModelURL() {
        return "http://" + window.location.hostname + ":8080/_model";
    }

}());
