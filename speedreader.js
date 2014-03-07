id = undefined;
pos = 0;
text = undefined;
tokens = undefined; 

function update() {
    if (pos >= tokens.length) {
        pos = 0;
    }
    $("#current-word").text(tokens[pos++]);
}

$(document).ready(function(){

    $("#start").click(function(){
        text = $('#text').val();
        tokens = text.split(/ |\n/);
        id = setInterval(update, $("#timer").val());
    });

    $("#stop").click(function(){
        clearInterval(id);
    });
});
