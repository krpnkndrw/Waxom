function hoverIn() {
  $(this).css({opacity:1});
}
function hoverOut() {
  $(this).css({opacity:0});
}
$('#home button:first-child img').hover(hoverIn, hoverOut);
$('#home button:last-child img').hover(hoverIn, hoverOut);
$('#left img:last-child').hover(hoverIn, hoverOut);
$('#right img:last-child').hover(hoverIn, hoverOut);
$('.case').hover(function hoverIn() {
  $(this).find('img:nth-child(2)').css({opacity:1});
}, function hoverOut() {
  $(this).find('img:nth-child(2)').css({opacity:0});
});
$('.cardButtons button:first-child img').hover(hoverIn, hoverOut);
$('.cardButtons button:last-child img').hover(hoverIn, hoverOut);
$('#playIconHover').hover(hoverIn, hoverOut);
/***********************************************************/
let cnt = 0;
$( "#left" ).click(function() {
  if($('.item:nth-child(1)').css('left') != '0px'/*$(window).width()*/){//условие запрета скрола
    cnt -=1;
    $('.indicator').removeClass('activeIndicator');
    $('.indicator').eq(cnt).addClass('activeIndicator'); //переключение кружков-индикаторов
    $('.item').css("left", "+="+$(window).width() )   //скрол
  } else {
    $('.item').css("left", "+=0px")//запрет скрола
  }
});
$( "#right" ).click(function(){  
  if($('.item:nth-child(1)').css('left') != '-'+($(window).width()*2)+'px'){
    cnt +=1;
    $('.indicator').removeClass('activeIndicator');
    $('.indicator').eq(cnt).addClass('activeIndicator');
    $('.item').css("left", "-="+$(window).width())
  } else {
    $('.item').css("left", "+=0px")
  }
});
/***********************************************************/
$('.loadMore').click(function(){
  hideLoadMore();
  $('div.card:not(.inactive):gt(5)').toggleClass('disabled');
  $(this).toggleClass('hide');
});
const hideLoadMore = () => {
  if($('#ourLatestProjects > button').attr('class').indexOf('hide') === -1){
    console.log('hide');
    $('#ourLatestProjects > button').text('Hide');
  } else{
    $('#ourLatestProjects > button').text('Load more');
    }
}
$('#portfolioNav>button').click(function(){
  console.log();
  $(this).siblings().removeClass('portfolioButtonActive');
  $(this).addClass('portfolioButtonActive');
  if(this.id === 'allButton'){
    $('.card').removeClass('inactive');
    $('.card:not(.inactive):gt(5)').addClass('disabled');
  }
  if(this.id === 'webDesignButton'){
    $('.card').addClass('inactive');
    $('.webDesign').removeClass('inactive disabled');
    $('.card:not(.inactive):gt(5)').addClass('disabled');
  }
  if(this.id === 'illustrationButton'){
    $('.card').addClass('inactive');
    $('.illustration').removeClass('inactive disabled');
    $('.card:not(.inactive):gt(5)').addClass('disabled');
  }
  if(this.id === 'mobileButton'){
    $('.card').addClass('inactive');
    $('.mobile').removeClass('inactive disabled');
    $('.card:not(.inactive):gt(5)').addClass('disabled');
  }
  if(this.id === 'photoButton'){
    $('.card').addClass('inactive');
    $('.photo').removeClass('inactive disabled');
    $('.card:not(.inactive):gt(5)').addClass('disabled');
  }
  if($('.card:not(.inactive)').length <= 6){
    console.log('none');
    $('.loadMore').css({opacity:0});
  } else {
    $('.loadMore').css({opacity:1});
  }
});
/**************************************************************/
const youTube1 = 'https://www.youtube.com/embed/Rk6_hdRtJOE?autoplay=1&rel=0';
$('#playIconHover').click(function(){
  $('.modal').css({display:'block'});
  $('#youtube').attr('src', youTube1);
});
$('.modalContent>button, .modal').click(function(){
  $('.modal').css({display:'none'});
  $('#youtube').attr('src', '');
});
/*******************************************************/
const dropMenuFun = () => {
  if($(window).width() < 1050){
    $('header li').unbind();
  } else {
    $('header li').hover(
    function(){
      $(this).children('ul').fadeIn(200);
    },
    function(){
      $(this).children('ul').fadeOut(200);
    }
  );}
}
dropMenuFun();
$(window).resize(function() {
  dropMenuFun();
});
$('#responsiveButton').click(function(){
  $(this).next('ul').slideToggle();
})
$('header a>.fas').click(function(event){
  event.preventDefault();
  $('header a>.fas').not(this).parent().siblings().slideUp();
  $(this).parent().next('ul').slideToggle();
})

/**********************************************************/
$(window).scroll(function(){
  if($(window).scrollTop() > 10){
    $('.header').css({backgroundColor: '#fff', paddingTop: '0', boxShadow: '0 1px 2px rgba(0,0,0,0.07)'});
    $('.header a').css({color: '#000'});
    $('.header p').css({color: '#000'});
    $('.header img').css({filter: 'brightness(0.5)'});
    $('.dropMenu').css({backgroundColor: '#fff'});
  } else {
    $('.header').css({backgroundColor: 'rgba(0,0,0,0)', paddingTop: '40px', boxShadow: 'none'});
    $('.header a').css({color: '#fff'});
    $('.header p').css({color: '#fff'});
    $('.header img').css({filter: 'brightness(1)'});
    $('.dropMenu').css({backgroundColor: '#191919'});
  }
});
