
console.log("Your index.js file is loaded correctly!");

$(document).ready(function (){
  $("#arrowHero").click(function (){
      $('html, body').animate({
          scrollTop: $("#topIntro").offset().top
      }, 800);
  $("#arrowHero").hide(100);       
  });
});



$(document).ready(function (){
  $("#arrowIntro").click(function (){
      $('html, body').animate({
          scrollTop: $("#arrowIntro").offset().top
      }, 800);
  $("#arrowIntro").hide(1000);
  });
});

$(document).ready(function (){
  $("#arrowSparky").click(function (){
      $('html, body').animate({
          scrollTop: $("#arrowSparky").offset().top
      }, 800);
  $("#arrowSparky").hide(1000);
  });
});

$(document).ready(function (){
  $("#arrowElectoral").click(function (){
      $('html, body').animate({
          scrollTop: $("#topTinyTails").offset().top
      }, 800);
  $("#arrowElectoral").hide(1000);
  });
});



$(document).ready(function (){
  $("#home").click(function (){
      $('html, body').animate({
          scrollTop: $("#topNav").offset().top
      }, 3500);
      $("#arrowIntro").show(4000);
      $("#arrowHero").show(3500);
      $("#arrowSparky").show(3000);
      $("#arrowElectoral").show(2500);
      
  });
});











