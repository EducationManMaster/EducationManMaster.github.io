window.addEventListener("DOMContentLoaded", function(){

  setTimeout(function() { window.scrollTo(0, 0); }, 150);


});

window.addEventListener("resize", function(){

  setTimeout(function() { window.scrollTo(0, 0); }, 150);
  console.log("S");


});

function letsGO(){

  document.getElementById("browserCheck").className += "bs_blocker"
  setTimeout(function() { wc_animations(); document.getElementById("browserCheck").style.display = "none";}, 201);

}



function scrollDown(slide_raw) {

  console.log(slide_raw);

  var slide = document.getElementById(slide_raw);
  slide.getElementsByClassName("slide_more")[0].scrollIntoView({behavior: "smooth"});
  topicAnimation(slide)

}
function scrollUp(slide_raw) { window.scrollTo({top: 0, behavior: 'smooth'}); }

function scrollSide(slide_raw) { document.getElementById(slide_raw).scrollIntoView({behavior: "smooth"}); }


function topicAnimation(slide) {

  console.log(slide);

  var slide_more = slide.getElementsByClassName("slide_more")[0];
  var topics = slide_more.getElementsByClassName("sl_more");

  var alreadyRun = slide_more.getElementsByClassName("slide_more_header")[0].className.includes("general_fadein_animation");

  if(!alreadyRun){

    setTimeout(function() {
      slide_more.getElementsByClassName("slide_more_header")[0].className += " general_fadein_animation";
      slide_more.getElementsByClassName("more_header")[0].className += " general_fadein_animation";
      for (var i = 0; i < topics.length; i++) { setTimeout(delayAni, 350*(i+1), topics, i); }
    }, 400);

  }

}
function delayAni(topics, i){ topics[i].className += " wc_slidein_animation"; }




function wc_animations() {

  var welcome_next = document.getElementById("welcome_next");
  var wc_blue = document.getElementById("wc_blue");
  var wc_bottom = document.getElementById("wc_bottom");
  var wc_circles = document.getElementById("wc_circles");
  var wc_circle = document.getElementById("wc_circle");
  var wc_t_wrapper = document.getElementById("wc_t_wrapper");

  wc_blue.className = "wc_blue_animation";
  setTimeout(function() {

    wc_bottom.className = "wc_bottom_animation";

    setTimeout(function() {

      welcome_next.className = "slide_next general_fadein_animation";
      wc_circles.className = "wc_fade_animation";
      wc_circle.className = "wc_fade_animation";
      wc_t_wrapper.className = "wc_fadesp_animation";

    }, 250);

  }, 1000);

}


function ar_animations(){

  var main_aurubis = document.getElementById("main_aurubis");
  var ar_logo = document.getElementById("ar_logo");
  var ar_tit = document.getElementById("ar_tit");
  var ar_info = document.getElementById("ar_info");

  if(!ar_tit.className.includes("ar_slide_fade_animation")){

    ar_tit.className += " ar_slide_fade_animation";


  setTimeout(function() {

    main_aurubis.className += " slow_fadein_animation";

    setTimeout(function() {

      ar_logo.className += " ar_slide_fade_animation";
      ar_info.className += " ar_slide_fade_animation";

    }, 500);

  }, 2000);

  }

}

function env_animations(){

  var main_aurubis = document.getElementById("main_env");
  var ar_logo = document.getElementById("env_logo");
  var ar_tit = document.getElementById("env_tit");
  var ar_info = document.getElementById("env_info");

  if(!main_aurubis.className.includes("sp_slow_fadein_animation")){

  main_aurubis.className += " sp_slow_fadein_animation";

  setTimeout(function() {

    ar_tit.className += " sp_ar_slide_fade_animation";

    setTimeout(function() {

      ar_logo.className += " sp_ar_slide_fade_animation";
      ar_info.className += " sp_ar_slide_fade_animation";

    }, 500);

  }, 1000);

  }

}


function it_animations(){

  var main_aurubis = document.getElementById("main_it");
  var ar_logo = document.getElementById("it_logo");
  var ar_tit = document.getElementById("it_tit");
  var ar_info = document.getElementById("it_info");

  if(!main_aurubis.className.includes("sp_slow_fadein_animation")){

  main_aurubis.className += " sp_slow_fadein_animation";

  setTimeout(function() {

    ar_tit.className += " sp_ar_slide_fade_animation";

    setTimeout(function() {

      ar_logo.className += " sp_ar_slide_fade_animation";
      ar_info.className += " sp_ar_slide_fade_animation";

    }, 500);

  }, 1000);

  }

}
