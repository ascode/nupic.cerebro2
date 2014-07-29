Cerebro2.CellDrawing = Cerebro2.AbstractDrawing.extend(function(base) {
    return {
        init: function() {
            base.init.call(this);

            this.regionDimensions = null;
            this.inputDrawing = null;

            this.showActiveColumns = true;
            this.showActiveCells = true;
            this.showPredictedCells = true;
            this.showProximalSynapses = true;
            this.showDistalSynapses = true;
        },

        /* Public */

        setRegionDimensions: function(regionDimensions, reshape) {
            this.regionDimensions = regionDimensions;
        },

        setInputDrawing: function(inputDrawing) {
            this.inputDrawing = inputDrawing;
        },

        setActiveColumns: function(activeColumns) {
            this.activeColumns = activeColumns;
        },

        setActiveCells: function(activeCells) {
            this.activeCells = activeCells;
        },

        setPredictedCells: function(predictedCells) {
            this.predictedCells = predictedCells;
        },

        setProximalSynapses: function(proximalSynapses) {
            this.proximalSynapses = proximalSynapses;
        },

        setDistalSynapses: function(distalSynapses) {
            this.distalSynapses = distalSynapses;
        },

        reset: function() {
            base.reset.call(this);

            this.activeColumns = [];
            this.activeCells = [];
            this.predictedCells = [];
            this.proximalSynapses = [];
            this.distalSynapses = [];
        },

        reshape3Dimensions: function(dimensions) {
            var x = dimensions[0],
                y = dimensions[1],
                z = dimensions[2],
                product = x * y,
                newX,
                newY = Math.round(Math.sqrt(product));

            while (product % newY > 0) {
                newY--;
            }
            newX = product / newY;

            return [newX, newY, z];
        },

        /* To override */

        updateCells: function() {},

        updateProximalSynapses: function() {},

        updateDistalSynapses: function() {}
    };
});
