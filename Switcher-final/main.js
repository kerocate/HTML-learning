let count; //共享count会出现奇妙的手感问题
let updown = 0;
let adition = 1080;
let pointPosition;

let scrollFunc = function (e) {  
    count++;
     //event?event||window.event;
    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件  
        console.log();             
        if (!Math.round(count%9)&&event.deltaY > 0&&updown<adition*4) { //当滑轮向下滚动时  
            updown = updown + adition;
            document.querySelector('page_contanner').style.top = -updown+'px';
            count=null;
        }  
        if (!Math.round(count%9)&&event.deltaY < 0&&updown>0) { //当滑轮向上滚动时  
            updown = updown - adition;
            document.querySelector('page_contanner').style.top = -updown+'px';
            count=null;
        }  
     }  
} 

function touchback(evt) {
    evt.preventDefault(); //阻止默认触摸的行为
    let touches = event.touches;
    console.log(touches);
    // console.log(touched.screenX);
}

function TouchStart(event){
    let point = event.targetTouches[0]; 

    pointPosition = new Array(
        parseInt(point.clientX),
        parseInt(point.clientY)
        );
    
    return pointPosition;
}

function TouchSwitch(event){
    count++;
    let nowPoint = event.targetTouches[0];
    let startPoint = pointPosition;
    let ActionDirection = startPoint[1]-parseInt(nowPoint.clientY);

    if(!Math.round(count%15)&&ActionDirection>0&&updown<adition*4){
        updown = updown + adition;
        document.querySelector('page_contanner').style.top = -updown+'px';
        count=null;
    }

    if (!Math.round(count%15)&&ActionDirection<0&&updown>0) {
        updown = updown - adition;
        document.querySelector('page_contanner').style.top = -updown+'px';
        count=null;
    }

}
//document.addEventListener('wheel', scrollFunc);

//console.log(document.querySelector('displayer').offsetHeight);
//要加载完才算

//old and worng
// document.addEventListener('wheel',
//     function () {
//         count++;
//             if(!Math.round(count%5)&&window.scrollY>8&&updown<4320){
//                 updown = updown + 1080;
//                 document.querySelector('page_contanner').style.top = -updown+'px';
//                 count=null;
//             }
//             if (!Math.round(count%5)&&window.scrollY<8&&updown>0) {
//                 updown = updown - 1080;
//                 document.querySelector('page_contanner').style.top = -updown+'px';
//                 count=null;
//             }
//     })
document.querySelector('html').addEventListener('touchmove',TouchSwitch,{passive:false});
document.querySelector('html').addEventListener('touchstart',TouchStart,{passive:false});
window.onwheel =  scrollFunc;
//在addeventListener的回调函数那一块，一旦传入了参数就会出现一些怪怪的问题。
//在默认的passive:true情况下 不能用preventDefault组织默认浏览器事件。