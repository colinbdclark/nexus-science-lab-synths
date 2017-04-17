"use strict";

fluid.defaults("floe.scienceLab.temperatureSonification", {
    gradeNames: "fluid.component",

    components: {
        enviro: {
            type: "flock.enviro"
        },

        band: {
            type: "floe.scienceLab.temperatureBand"
        }
    },

    listeners: {
        "onCreate.startSynths": "{band}.play()"
    }
});
