function update_status(){
    $.ajax({
            url: 'get/running',
            success: function(running){
                console.log(running)
                if (running){
                    $('#disconnect').attr('disabled', null);
                    $('#connect').attr('disabled', 'disabled');
                } else {
                    $('#connect').attr('disabled', null);
                    $('#disconnect').attr('disabled', 'disabled');
                }
            }
    });
}

function update_log(){
    $.ajax({
            url: 'get/log',
            success: function(log){
                $("#log").text(log.log);
            }
    })
}

function disconnect(){
    $.ajax({
            url: 'stop',
            success: function(){
                update_log();
                update_status();
            }
    })
}

function ready(){
    $("#disconnect").click(disconnect);
    update_log();
    update_status();
    setInterval("update_log()", 10000);
}

$(document).ready(ready);

