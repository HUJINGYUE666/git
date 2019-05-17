//点击startGame startPage消失 游戏开始
//随机出现食物 出现三节蛇开始运动
//上下左右 改变方向运动
//判断是否吃到食物 食物消失 蛇加1
//判断游戏结束 弹出框

var oStartPage = document.getElementById('startPage');
var oStartGame = document.getElementById('startGame');

var oLeftSide = document.getElementById('leftSide');
var oScore = document.getElementById('score');
var oContent = document.getElementById('content');

var oLoser = document.getElementById('loser');
var oLoserScore = document.getElementById('loserScore');
var oReturn = document.getElementById('return');

var oSnakeMove;
var speed = 200;
var startGameBool = true;
var startPushBool = true;

init();
function init() {
    //地图宽高
    // this.mapW = parseInt(getComputedStyle(content).width);
    // this.mapH = parseInt(getComputedStyle(content).height);
    this.mapW = 730;
    this.mapH = 490;
    this.mapDiv = oContent;
    //食物宽高坐标
    this.foodW = 20;
    this.foodH = 20;
    this.foodX = 0;
    this.foodY = 0;
    //蛇宽高 
    this.snakeW = 20;
    this.snakeH = 20;
    this.snakeBody = [
        [4, 2, 'head'],
        [3, 2, 'body'],
        [2, 2, 'body']
    ];
    //游戏属性
    this.direct = 'right';
    this.left = false;
    this.right = false;
    this.up = true;
    this.down = true;

    this.score = 0;

    startGame();
}

function startGame() {
    food();
    snake();
    oSnakeMove = setInterval(function () {
        move();
    }, speed)
    bindEvent();
    oStarPage.style.display = 'none';
    oLeftSide.style.display = 'block';
}

function food() { //地图范围 食物坐标 随机出现
    var oFood = document.createElement('div');
    oFood.style.width = this.foodW + 'px';
    oFood.style.height = this.foodH + 'px';
    oFood.style.position = 'absolute';
    this.foodX = Math.floor(Math.random() * (this.mapW / 20)) * 20;
    this.foodY = Math.floor(Math.random() * (this.mapH / 20)) * 20;
    oFood.style.left = this.foodX + 'px';
    oFood.style.top = this.foodY + 'px';
    this.mapDiv.appendChild(oFood).setAttribute('class', 'food');
}

function snake() { //蛇 蛇身 移动方向
    for (var i = 0; i < this.snakeBody.length; i++) {
        var oSnake = document.createElement('div');
        // this.mapDiv.appendChild(oSnake).setAttribute('class', 'snake');
        oSnake.style.width = this.snakeW + 'px';
        oSnake.style.height = this.snakeH + 'px';
        oSnake.style.position = 'absolute';
        oSnake.style.left = this.snakeBody[i][0] * 20 + 'px';
        oSnake.style.top = this.snakeBody[i][1] * 20 + 'px';
        oSnake.classList.add(this.snakeBody[i][2]);
        this.mapDiv.appendChild(oSnake).classList.add('snake');
        switch (this.direct) {
            case 'right':
                break;
            case 'up':
                oSnake.style.transform = 'rotate(270deg)';
                break;
            case 'left':
                oSnake.style.transform = 'rotate(180deg)';
                break;
            case 'down':
                oSnake.style.transform = 'rotate(90deg)';
                break;
            default:
                break;
        }
    }
}

function move() { //蛇移动
    for (var i = this.snakeBody.length - 1; i > 0; i--) {
        this.snakeBody[i][0] = this.snakeBody[i - 1][0]; //前面x值
        this.snakeBody[i][1] = this.snakeBody[i - 1][1]; //前面y值
    }
    switch (this.direct) {
        case 'right':
            this.snakeBody[0][0] += 1;
            break;
        case 'up':
            this.snakeBody[0][1] -= 1;
            break;
        case 'left':
            this.snakeBody[0][0] -= 1;
            break;
        case 'down':
            this.snakeBody[0][1] += 1;
            break;
        default:
            break;
    }
    removeClass('snake'); //删除最后一个蛇身体
    snake(); //新蛇
    //蛇头碰到食物 碰到边界
    if (this.snakeBody[0][0] * 20 == this.foodX && this.snakeBody[0][1] * 20 == this.foodY) {
        //吃到食物 身体加1
        var snakeEndX = this.snakeBody[this.snakeBody.length - 1][0];
        var snakeEndY = this.snakeBody[this.snakeBody.length - 1][1];
        switch (this.direct) {
            case 'right':
                this.snakeBody.push([snakeEndX + 1, snakeEndY, 'body']);
                break;
            case 'up':
                this.snakeBody.push([snakeEndX, snakeEndY + 1, 'body']);
                break;
            case 'left':
                this.snakeBody.push([snakeEndX + 1, snakeEndY, 'body']);
                break;
            case 'down':
                this.snakeBody.push([snakeEndX, snakeEndY + 1, 'body']);
                break;
            default:
                break;
        }
        this.score += 1; //吃到食物 分数加1
        oScore.innerHTML = this.score;
        removeClass('food'); //食物消失
        food(); //新食物
    }
    //碰到边界 游戏结束
    if (this.snakeBody[0][0] < 0 || this.snakeBody[0][0] > this.mapW / 20) {
        gameOver();
    }
    if (this.snakeBody[0][1] < 0 || this.snakeBody[0][1] > this.mapH / 20) {
        gameOver();
    }
    var snakeHX = this.snakeBody[0][0];
    var snakeHY = this.snakeBody[0][1];
    //碰到自己身体 游戏结束
    for (var i = 1; i < this.snakeBody.length; i++) {
        if (snakeHX == this.snakeBody[i][0] && snakeHY == this.snakeBody[i][1]) {
            gameOver();
        }
    }
}

function gameOver() { //游戏结束
    removeClass('snake');
    removeClass('food');
    clearInterval(oSnakeMove);
    //游戏初始值
    this.snakeBody = [
        [4, 3, 'head'],
        [3, 3, 'body'],
        [2, 3, 'body']
    ];
    this.direct = 'right';
    this.left = false;
    this.right = false;
    this.up = true;
    this.down = true;

    // this.score = 0;
    oScore.innerHTML = this.score; 
    oLoser.style.display = 'block';
    // oLoserScore.innerHTML = oScore.innerHTML;
    oLoserScore.innerHTML = oScore.innerHTML;
    this.score = 0;
}

function removeClass(className) {
    var ele = document.getElementsByClassName(className);
    while (ele.length > 0) {
        ele[0].parentNode.removeChild(ele[0]);
    }
}

function setDirect(code) { //游戏属性 键盘码
    switch (code) {
        case 37:
            if (this.left) {
                this.direct = 'left';
                this.left = false;
                this.right = false;
                this.up = true;
                this.down = true;
            }
            break;
        case 38:
            if (this.up) {
                this.direct = 'up';
                this.left = true;
                this.right = true;
                this.up = false;
                this.down = false;
            }
            break;
        case 39:
            if (this.right) {
                this.direct = 'right';
                this.left = false;
                this.right = false;
                this.up = true;
                this.down = true;
            }
            break;
        case 40:
            if (this.down) {
                this.direct = 'down';
                this.left = true;
                this.right = true;
                this.up = false;
                this.down = false;
            }
            break;
        default:
            break;
    }
}

function bindEvent(e) { //点击事件
    document.onkeydown = function (e) {
        var code = e.keyCode;
        setDirect(code);
    } 
    oReturn.onclick = function(){ //点击return 关闭loser框
        oLoser.style.display = 'none';
        startGame();
    }
    // oStartGame.onclick = function(){
    //     startAndPush();
    // }
    // oLeftSide.onclick = function(){
    //     startAndPush();
    // }
}

function  startAndPush(){
    if(startPushBool){
        if(startGameBool)
            startGame();
            startGameBool = false;
    }
}