//点击开始游戏 starPage消失 游戏开始
//随机出现实物 出现三节蛇开始运动
//上下左右 根据方向 改变方向运动
//判断是否吃到食物 食物消失 蛇加1
//判断游戏结束 弹出框

var oContent = document.getElementById('content');
var oStarPage = document.getElementById('starPage');
var oSnakeMove;
var speed = 200;
init();

function init() {
    //地图
    this.mapW = parseInt(getComputedStyle(content).width);
    this.mapH = parseInt(getComputedStyle(content).height);
    this.mapDiv = oContent;

    //食物
    this.foodW = 20;
    this.foodH = 20;
    this.foodX = 0;
    this.foodY = 0;
    //蛇
    this.snakeW = 20;
    this.snakeH = 20;
    this.snakeBody = [
        [3, 1, 'head'],
        [2, 1, 'body'],
        [1, 1, 'body']
    ];
    //游戏属性
    this.direct = 'right';
    this.left = false;
    this.right = false;
    this.up = true;
    this.down = true;

    startGame();
}

function startGame() {
    food();
    snake();
    oSnakeMove = setInterval(function(){
        move();
    },speed)
    bindEvent();
}

function food() {
    var oFood = document.createElement('div');
    this.mapDiv.appendChild(oFood).setAttribute('class', 'food');
    oFood.style.width = this.foodW + 'px';
    oFood.style.height = this.foodH + 'px';
    oFood.style.position = 'absolute';
    this.foodX = Math.floor(Math.random() * (this.mapW / 20)) * 20;
    this.foodY = Math.floor(Math.random() * (this.mapH / 20)) * 20;
    oFood.style.left = this.foodX + 'px';
    oFood.style.top = this.foodY + 'px';
}

function snake() {
    for (var i = 0; i < this.snakeBody.length; i++) {
        var oSnake = document.createElement('div');
        this.mapDiv.appendChild(oSnake).setAttribute('class', 'snake');
        oSnake.style.width = this.snakeW + 'px';
        oSnake.style.height = this.snakeH + 'px';
        oSnake.style.position = 'absolute';
        oSnake.style.left = this.snakeBody[i][0] * 20 + 'px';
        oSnake.style.top = this.snakeBody[i][1] * 20 + 'px';
        oSnake.classList.add(this.snakeBody[i][2]);
    }
}

function move() {
    for (var i = this.snakeBody.length - 1; i > 0; i--){
        this.snakeBody[i][0] = this.snakeBody[i - 1][0];
        this.snakeBody[i][1] = this.snakeBody[i - 1][1];
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
    removeClass('snake');
    snake();
}

function removeClass(className) {
    var ele = document.getElementsByClassName('className');
    while (ele.length > 0) {
        ele[0].parentNode.removeChild(ele[0]);
    }
}

function setDirect(code) {
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

function bindEvent() {
    document.onkeydown = function (e) {
        var code = e.keyCode;
        setDirect(code);
    }
}