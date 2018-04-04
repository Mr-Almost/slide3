makeFakeSlides();
var number=$('.number>svg');
var next=$('#next');
var previous=$('#previous');
var n=0;
var $images=$('img');
var width = $images[0].width;
var distance=-width;
var timeset=1;
 $(number[0]).addClass('active')
num(number,distance);
nextImg();
previousImg();
autoslide();
 
  
$('.slide-wrapper').on('mouseleave',function(){
  autoslide();

 
})
$('.slide-wrapper').on('mouseenter',function(){
    clearInterval(timer)
})





function autoslide(){
  timer=setInterval(()=>{
  next.click()
  
},2500)
   
}

function nextImg(){

  next.on('click',function(e){ 
    n+=1;
  let p=distance*(n+1%number.length)
  $('img').css({
      transform:'translate('+p+'px)'
  })
   if(n===number.length)
   { 
       n=0;
       let p=distance*(number.length+1)
        $('img').css({
      transform:'translate('+p+'px)'
      }).one('transitionend', function(){
       $images.hide() 
        $images.offset()
       $images.css({
         transform:'translate('+distance+'px)'
       }).show()
        })
   }
   addActive();

 })
}




function previousImg(){
  
  previous.on('click',function(e){
    n-=1;
  let p=distance*(n+1%number.length)
  $('img').css({
      transform:'translate('+p+'px)'
  })
      if(n===-1)
   {    n=(number.length-1);
       let p=distance*(0)
        $('img').css({
      transform:'translate('+p+'px)'
    }).one('transitionend', function(){
      
       $images.hide()
        $images.offset()
       $images.css({
         transform:'translate('+distance*number.length+'px)'
       }).show()
        })
      
   }     
 addActive();

})
}



 function num(number,distance){
 
  for(let i=0;i<number.length;i++){
 $(number[i]).on('click',function(e){
  n=i;
  let p=distance*(i+1)
  $('img').css({
      transform:'translate('+p+'px)'
  })
 addActive()
});
}
  
} 

function addActive(){
   $(number[n]).addClass('active').siblings('.active').removeClass('active')
}

                


function makeFakeSlides(){
  let $firstCopy = $('img').eq(0).clone(true)
  let $lastCopy = $('img').eq($('img').length-1).clone(true)
  $('.show').append($firstCopy)
  $('.show').prepend($lastCopy)
}