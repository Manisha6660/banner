$(document).ready(function(){
    $("#submit").click(function(){ 
		      alert("Please fill all the fields!!!");
           $(".t,select").addClass("alert");
	       
	  });

    $(".less").hide();
    $(".full").hide();
      $(".more").click(function(){  
            $(".full").show();
             $(".more").hide();
             $(".less").show();
             $(".less").click(function(){
                 $(".full").hide();
                 $(".more").show();
                 $(".less").hide();
             });    
    });

      
      
  $(".nav ul li a").click(function(){
       $(".nav ul li a").removeClass("active");
      $(this).addClass("active");
     
   });
   $(".subfooter ul li a").click(function(){
    $('html,body').animate({
         scrollTop: 0},'slow');
  });


 $("#arleft").click(function()
       {  $(".images").css("background-color", "red");
   });
  
  $("#arright").click(function()
       {  $(".images").css("background-color", "blue");
   });
  /*  function myFunction(){
  var element = document.getElementById(".purple");
  var x = 100;
  var y=window.pageYOffset;
  if( y>=x){
     /*element.style.cssText += "position: fixed; top: auto; bottom: 20px; right: 20px; left: auto;"; 
    */
    /*$(".purple").animate({ scrollTop: $(".yellow").offset().top},1000);
  });

    }
  else {
     element.style.cssText += "position: relative; top: 20px; bottom: auto; right: auto; left: 20px;";  
   } 
 }*/
   $(window).scroll(function() {
   var hT = $('.parts').offset().top,
       hH = $('.parts').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH)){
     /*alert('you have scrolled to the h1!');*/
     $(".purple").animate({ slideUp: $(".yellow").offset().top},1000);
  

   }
});

   /*$('#scroll-to').scroll(function() {
     alert('you have scrolled to the h1!');
      });*/
});
