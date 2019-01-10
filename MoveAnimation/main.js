function $(elm){
   return document.querySelector(elm);
}

function move(location){
    for(i=0;i<location;i++){
        (function (i) {
            setTimeout(() => {
                $("#box").style.left=i+"px";
                if (i==99) {
                    // 这样子在结尾不会抛出结果
                    console.log(i);
                    move1(100);
                }
            }, i*5);
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