let count = 0;
let updown = 0;
document.addEventListener('wheel',
    function () {
        count++;
            if(!Math.round(count%5)&&window.scrollY>8&&updown<4320){
                updown = updown + 1080;
                document.querySelector('page_contanner').style.top = -updown+'px';
                count=null;
            }
            if (!Math.round(count%5)&&window.scrollY<8&&updown>0) {
                updown = updown - 1080;
                document.querySelector('page_contanner').style.top = -updown+'px';
                count=null;
            }
    })