//点击开始游戏 starPage消失 游戏开始
//随机出现实物 出现三节蛇开始运动
//上下左右 根据方向 改变方向运动
//判断是否吃到食物 食物消失 蛇加1
//判断游戏结束 弹出框

var oContent = document.getElementById('content');
var oTarPage = document.getElementById('starPage');

init();
function init(){
    //地图
    this.mapW = parseInt(getComputedStyle(content).width);
    this.mapH = parseInt(getComputedStyle(content).height);
    this.mapDiv = content;

    //食物
    this.foodW = 20;
    this.foodH = 20;
}



