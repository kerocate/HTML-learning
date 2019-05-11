function $(elm){
   return document.querySelector(elm);
}

function move(location) {
    for (i = 0; i < location; i++) {
        //闭包解决计数困境
        (function (i) {
            //正常递加的i作为等待时间函数的参数
            //由于第一个参数是function 所以用了箭头函数表达式
            setTimeout(() => {
                $("#box").style.left = i + "px";
                if (i == 99) {
                    // 这样子在结尾不会抛出结果
                    console.log(i);
                    move1(100);
                }
            }, i * 5);
        })(i);
        // for(j=0;j<location;j++){
        //     (function (j) {
        //         setTimeout(() => {
        //             $("#box").style.top=j+"px";
        //         }, j*5);
        //     })(j);
        // } 异步在for里面不好使，用递归吧
    }
}

function move1(location) {
    for(j=0;j<location;j++){
        (function (j) {
            setTimeout(() => {
                $("#box").style.top=j+"px";
            }, j*5);
        })(j);
    }
}

move(100);
//move1(100);
