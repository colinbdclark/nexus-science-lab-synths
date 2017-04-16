"use strict";

fluid.defaults("floe.scienceLab.phSonification", {
    gradeNames: "fluid.component",

    components: {
        enviro: {
            type: "flock.enviro"
        },

        synth: {
            type: "floe.scienceLab.phSynth"
        },

        bufferLoader: {
            type: "floe.scienceLab.bufferLoader"
        }
    },

    events: {
        afterBuffersLoaded: null
    },

    listeners: {
        "afterBuffersLoaded.playSynth": "{synth}.play()"
    }
});
