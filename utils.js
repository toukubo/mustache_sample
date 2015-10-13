function hot(id){
    //alert("hogehoge");
next(id);
}
function nothot(){
    next();

}
function next(id){
    $('#note_'+id).remove();

}


function zeroPadding(number){
    return (Array(2).join('0') + number).slice(-2);
}
function markItDone(guid){
//    alert(guid)
// var url = "http://50.116.21.222:8080/SetNoteReminderDone?guid="+guid;
var url = "http://zxc.cz:8080/SetNoteReminderDone?guid="+guid;
//    alert(url)
    jQuery.ajax({
//        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(data, status, xhr) {
            alert(JSON.stringify(data))
        },
        error:function() {
//            alert('問題がありました。');
        }
    });

    $('#'+guid).remove();
}

function markItLinked(guid){
//    alert(guid)
//    alert("mark1")
    var url = "http://zxc.cz:8080/AddTag?guid="+guid+"&tag=linked";

    jQuery.ajax({
        url: url,
        dataType: 'json',
        success: function(data, status, xhr) {
            alert(JSON.stringify(data))
        },
        error:function() {
//            alert('問題がありました。');
        }
    });

    $('#'+guid).remove();
}


function postpone(guid){
//    alert(guid)
    var url = "http://zxc.cz:8080/Postpone?guid="+guid;
//    alert(url)
    jQuery.ajax({
//        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(data, status, xhr) {
            alert(JSON.stringify(data))
        },
        error:function() {
//            alert('問題がありました。');
        }
    });

    $('#'+guid).remove();
}



function pomodoro(guid){
//    alert(guid)
    var url = "http://zxc.cz:8080/SetNotePomodoro?guid="+guid;
//    alert(url)
    jQuery.ajax({
//        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(data, status, xhr) {
            alert(JSON.stringify(data))
        },
        error:function() {
//            alert('問題がありました。');
        }
    });

    $('#'+guid).remove();
}


function micro(guid){
    var url = "http://zxc.cz:8080/SetNoteMicro?guid="+guid;
    jQuery.ajax({
        url: url,
        dataType: 'json',
        success: function(data, status, xhr) {
            alert(JSON.stringify(data))
        },
        error:function() {
//            alert('問題がありました。');
        }
    });
    $('#'+guid).remove();
}

