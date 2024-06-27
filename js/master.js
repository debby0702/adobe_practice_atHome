// 1.先依window實體寬度判斷是否為手機(480px)
// 2.再決定套grid-2 or grid-3
// 3.優化式子(提出具名函數setGrid)(用return減少大括號)

// 1.             直接在此判斷
// const isMobile=$(window).width()<= 480;
// 可看判斷結果
// console.log(isMobile);
let isMobile;
if($(window).width()<= 480){
    isMobile=true;
}else{
    isMobile=false;
}
const $grid=$('#Grid');
const $nav= $('#Nav');

// 2.
// if(isMobile==true)
function setGrid(){
    if(isMobile){
        $grid.addClass('grid-2');
        return;
    }
        $grid.addClass('grid-3')
    
}

setGrid();

// 每次scroll都要判斷scrooTop是否為0
// 決定nav要刪除/添加class
$(window).scroll(function(){
    if($(this).scrollTop()==0){
        $nav.removeClass('nav-active')
    }else{
        $nav.addClass('nav-active')
    }
})

