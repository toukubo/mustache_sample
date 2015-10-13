function countDown() {
    if(!running){
        return;
    }
    left--;
//            var left = start - passed;

// 残時間を秒で割って残分数を出す。
// 残分数を60で割ることで、残時間の「時」の余りとして、『残時間の分の部分』を出す
    var s = left % 60
    var m = Math.floor(left / 60 )

    $(".time").text(zeroPadding(m) + ':' + zeroPadding(s));
    if(left>0 ){
        setTimeout('countDown()', 1000);
    }else{
        toggleMode();
        setTimeout('countDown()', 1000);

    }
}
function breakTimer(){
    running = false;
    $('#restarter').toggle();
    $('#breaker').toggle();
}
function restart(){
    running =true;
    $('#breaker').toggle();
    $('#restarter').toggle();
    countDown();
}
function toggleMode(){
    alert($('#mode').html()+"finished.")
    if($('#mode').html()=="break"){
        $('#mode').html("pomodoro");
        left = 60 * getTime()
    }else{
        $('#mode').html("break");
        left = 60 * 2

    }
}

function getTime(){
    if (typeof micro !== 'undefined'){
        var micro = gup("micro");
    }

    if(micro==1){
        return 5
    }else{
        return 25
    }
}