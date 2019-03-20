
/*按钮弹出模态框*/
function pop_box(){
    var container = document.getElementById('div-container');
    container.style.display="block";
}

/*取消事件*/
function cancel(){
    var container = document.getElementById('div-container');
    container.style.display="none";
}

/*确认事件，因为现在没有确认事件，就将弹出框隐藏*/
function confirm(){
    var container = document.getElementById('div-container');
    container.style.display="none";
}