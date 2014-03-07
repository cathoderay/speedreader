var intervalId = null;
var pos = 0;
var tokens = [];

function update() {
    if (pos >= tokens.length) {
        pos = 0;
        $("#current-word").text('\u00a0');  // \u00a0 == &nbsp;
    } else {
        $("#current-word").text(tokens[pos++]);
    }
}

// Starts or restarts the interval.
function startInterval() {
    stopInterval();
    var milliseconds = $("#timer").val()
    intervalId = setInterval(update, milliseconds);
}

function stopInterval() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function updateTokens() {
    var text = $('#text').val().trim();
    tokens = text.split(/\s+/);
}

$(document).ready(function(){
    $("#start").click(function() {
        updateTokens();
        startInterval();
    });

    $("#timer").on('input', function() {
        if (intervalId) {
            startInterval();
        }
    });

    $("#stop").click(function() {
        stopInterval();
    });
});
