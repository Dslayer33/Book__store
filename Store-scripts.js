"use strict";
let menuBut=document.querySelector('.header__menu--button');
let menuList=document.querySelector('.header__menu-list');
let menuListImg=document.querySelector('.list__img');
let accBut=document.querySelector('.header__acc--button');
let accList=document.querySelector('.header__accaunt-list');
let accListImg=document.querySelector('.list__accimg');
let bodyText=document.querySelector('.body__text');
let bodyTextItem=document.querySelector('.body__textanimate');
let bodyTextItem1=document.querySelector('.body__textanimate1');
let bodyTextItem2=document.querySelector('.body__textanimate2');
let bodyTextItem3=document.querySelector('.body__textanimate3');
let bodyTextItem4=document.querySelector('.body__textanimate4');
let collectionRArrow=document.querySelector('.collection__rarrow');
let collectionLArrow=document.querySelector('.collection__larrow');
let fantasticRArrow=document.querySelector('.fantastic__rarrow');
let fantasticLArrow=document.querySelector('.fantastic__larrow');
let horrorsRArrow=document.querySelector('.horrors__rarrow');
let horrorsLArrow=document.querySelector('.horrors__larrow');
let programmingRArrow=document.querySelector('.programming__rarrow');
let programmingLArrow=document.querySelector('.programming__larrow');

let collectionRArrow1=document.querySelector('.collection__rarrow1');
let collectionLArrow1=document.querySelector('.collection__larrow1');
let fantasticRArrow1=document.querySelector('.fantastic__rarrow1');
let fantasticLArrow1=document.querySelector('.fantastic__larrow1');
let horrorsRArrow1=document.querySelector('.horrors__rarrow1');
let horrorsLArrow1=document.querySelector('.horrors__larrow1');
let programmingRArrow1=document.querySelector('.programming__rarrow1');
let programmingLArrow1=document.querySelector('.programming__larrow1');

let collectionRArrow2=document.querySelector('.collection__rarrow2');
let collectionLArrow2=document.querySelector('.collection__larrow2');
let fantasticRArrow2=document.querySelector('.fantastic__rarrow2');
let fantasticLArrow2=document.querySelector('.fantastic__larrow2');
let horrorsRArrow2=document.querySelector('.horrors__rarrow2');
let horrorsLArrow2=document.querySelector('.horrors__larrow2');
let programmingRArrow2=document.querySelector('.programming__rarrow2');
let programmingLArrow2=document.querySelector('.programming__larrow2');

let collectionRArrow3=document.querySelector('.collection__rarrow3');
let collectionLArrow3=document.querySelector('.collection__larrow3');
let fantasticRArrow3=document.querySelector('.fantastic__rarrow3');
let fantasticLArrow3=document.querySelector('.fantastic__larrow3');
let horrorsRArrow3=document.querySelector('.horrors__rarrow3');
let horrorsLArrow3=document.querySelector('.horrors__larrow3');
let programmingRArrow3=document.querySelector('.programming__rarrow3');
let programmingLArrow3=document.querySelector('.programming__larrow3');

menuBut.addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    menuList.style.display='flex';
});

menuListImg.addEventListener('click',function(e1){
    e1.preventDefault();
    e1.stopPropagation();
    menuList.style.display='none';
});

accBut.addEventListener('click',function(e2){
    e2.preventDefault();
    e2.stopPropagation();
    accList.style.display='flex';
});

accListImg.addEventListener('click',function(e3){
    e3.preventDefault();
    e3.stopPropagation();
    accList.style.display='none';
});

let offset=0;
const sliderLine1=document.querySelector('.slider1__line');
const sliderLine2=document.querySelector('.slider2__line');
const sliderLine3=document.querySelector('.slider3__line');
const sliderLine4=document.querySelector('.slider4__line');

collectionRArrow.addEventListener('click',function(e4){
    e4.preventDefault();
    e4.stopPropagation();
    offset=offset + 100;
    if(offset > 300){
       offset=0;
    }
    sliderLine1.style.left=-offset + '%';
});

fantasticRArrow.addEventListener('click',function(e5){
    e5.preventDefault();
    e5.stopPropagation();
    offset=offset + 100;
    if(offset > 300){
       offset=0;
    }
    sliderLine1.style.left=-offset + '%';
});

horrorsRArrow.addEventListener('click',function(e6){
    e6.preventDefault();
    e6.stopPropagation();
    offset=offset + 100;
    if(offset > 300){
       offset=0;
    }
    sliderLine1.style.left=-offset + '%';
});

programmingRArrow.addEventListener('click',function(e7){
    e7.preventDefault();
    e7.stopPropagation();
    offset=offset + 100;
    if(offset > 300){
       offset=0;
    }
    sliderLine1.style.left=-offset + '%';
});

collectionLArrow.addEventListener('click',function(e8){
    e8.preventDefault();
    e8.stopPropagation();
    offset=offset - 100;
    if(offset < 0){
       offset=300;
    }
    sliderLine1.style.left=-offset + '%';
});

fantasticLArrow.addEventListener('click',function(e9){
    e9.preventDefault();
    e9.stopPropagation();
    offset=offset - 100;
    if(offset < 0){
       offset=300;
    }
    sliderLine1.style.left=-offset + '%';
});

horrorsLArrow.addEventListener('click',function(e10){
    e10.preventDefault();
    e10.stopPropagation();
    offset=offset - 100;
    if(offset < 0){
       offset=300;
    }
    sliderLine1.style.left=-offset + '%';
});

programmingLArrow.addEventListener('click',function(e11){
    e11.preventDefault();
    e11.stopPropagation();
    offset=offset - 100;
    if(offset < 0){
       offset=300;
    }
    sliderLine1.style.left=-offset + '%';
});



collectionRArrow1.addEventListener('click',function(e12){
    e12.preventDefault();
    e12.stopPropagation();
    offset=offset + 100;
    if(offset > 300){
       offset=0;
    }
    sliderLine2.style.left=-offset + '%';
});

fantasticRArrow1.addEventListener('click',function(e13){
    e13.preventDefault();
    e13.stopPropagation();
    offset=offset + 100;
    if(offset > 300){
       offset=0;
    }
    sliderLine2.style.left=-offset + '%';
});

horrorsRArrow1.addEventListener('click',function(e14){
    e14.preventDefault();
    e14.stopPropagation();
    offset=offset + 100;
    if(offset > 300){
       offset=0;
    }
    sliderLine2.style.left=-offset + '%';
});

programmingRArrow1.addEventListener('click',function(e15){
    e15.preventDefault();
    e15.stopPropagation();
    offset=offset + 100;
    if(offset > 300){
       offset=0;
    }
    sliderLine2.style.left=-offset + '%';
});

collectionLArrow1.addEventListener('click',function(e16){
    e16.preventDefault();
    e16.stopPropagation();
    offset=offset - 100;
    if(offset < 0){
       offset=300;
    }
    sliderLine2.style.left=-offset + '%';
});

fantasticLArrow1.addEventListener('click',function(e17){
    e17.preventDefault();
    e17.stopPropagation();
    offset=offset - 100;
    if(offset < 0){
       offset=300;
    }
    sliderLine2.style.left=-offset + '%';
});

horrorsLArrow1.addEventListener('click',function(e18){
    e18.preventDefault();
    e18.stopPropagation();
    offset=offset - 100;
    if(offset < 0){
       offset=300;
    }
    sliderLine2.style.left=-offset + '%';
});

programmingLArrow1.addEventListener('click',function(e19){
    e19.preventDefault();
    e19.stopPropagation();
    offset=offset - 100;
    if(offset < 0){
       offset=300;
    }
    sliderLine2.style.left=-offset + '%';
});



collectionRArrow2.addEventListener('click',function(e20){
    e20.preventDefault();
    e20.stopPropagation();
    offset=offset + 100;
    if(offset > 300){
       offset=0;
    }
    sliderLine3.style.left=-offset + '%';
});

fantasticRArrow2.addEventListener('click',function(e21){
    e21.preventDefault();
    e21.stopPropagation();
    offset=offset + 100;
    if(offset > 300){
       offset=0;
    }
    sliderLine3.style.left=-offset + '%';
});

horrorsRArrow2.addEventListener('click',function(e22){
    e22.preventDefault();
    e22.stopPropagation();
    offset=offset + 100;
    if(offset > 300){
       offset=0;
    }
    sliderLine3.style.left=-offset + '%';
});

programmingRArrow2.addEventListener('click',function(e23){
    e23.preventDefault();
    e23.stopPropagation();
    offset=offset + 100;
    if(offset > 300){
       offset=0;
    }
    sliderLine3.style.left=-offset + '%';
});

collectionLArrow2.addEventListener('click',function(e24){
    e24.preventDefault();
    e24.stopPropagation();
    offset=offset - 100;
    if(offset < 0){
       offset=300;
    }
    sliderLine3.style.left=-offset + '%';
});

fantasticLArrow2.addEventListener('click',function(e25){
    e25.preventDefault();
    e25.stopPropagation();
    offset=offset - 100;
    if(offset < 0){
       offset=300;
    }
    sliderLine3.style.left=-offset + '%';
});

horrorsLArrow2.addEventListener('click',function(e26){
    e26.preventDefault();
    e26.stopPropagation();
    offset=offset - 100;
    if(offset < 0){
       offset=300;
    }
    sliderLine3.style.left=-offset + '%';
});

programmingLArrow2.addEventListener('click',function(e27){
    e27.preventDefault();
    e27.stopPropagation();
    offset=offset - 100;
    if(offset < 0){
       offset=300;
    }
    sliderLine3.style.left=-offset + '%';
});



collectionRArrow3.addEventListener('click',function(e28){
    e28.preventDefault();
    e28.stopPropagation();
    offset=offset + 100;
    if(offset > 300){
       offset=0;
    }
    sliderLine4.style.left=-offset + '%';
});

fantasticRArrow3.addEventListener('click',function(e29){
    e29.preventDefault();
    e29.stopPropagation();
    offset=offset + 100;
    if(offset > 300){
       offset=0;
    }
    sliderLine4.style.left=-offset + '%';
});

horrorsRArrow3.addEventListener('click',function(e30){
    e30.preventDefault();
    e30.stopPropagation();
    offset=offset + 100;
    if(offset > 300){
       offset=0;
    }
    sliderLine4.style.left=-offset + '%';
});

programmingRArrow3.addEventListener('click',function(e31){
    e31.preventDefault();
    e31.stopPropagation();
    offset=offset + 100;
    if(offset > 300){
       offset=0;
    }
    sliderLine4.style.left=-offset + '%';
});

collectionLArrow3.addEventListener('click',function(e32){
    e32.preventDefault();
    e32.stopPropagation();
    offset=offset - 100;
    if(offset < 0){
       offset=300;
    }
    sliderLine4.style.left=-offset + '%';
});

fantasticLArrow3.addEventListener('click',function(e33){
    e33.preventDefault();
    e33.stopPropagation();
    offset=offset - 100;
    if(offset < 0){
       offset=300;
    }
    sliderLine4.style.left=-offset + '%';
});

horrorsLArrow3.addEventListener('click',function(e34){
    e34.preventDefault();
    e34.stopPropagation();
    offset=offset - 100;
    if(offset < 0){
       offset=300;
    }
    sliderLine4.style.left=-offset + '%';
});

programmingLArrow3.addEventListener('click',function(e35){
    e35.preventDefault();
    e35.stopPropagation();
    offset=offset - 100;
    if(offset < 0){
       offset=300;
    }
    sliderLine4.style.left=-offset + '%';
});