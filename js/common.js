$(function(){
  // virtual classes arcodian
  $(".curriculum").css({"display":"none"});
  $(".course_box .course_name").on("click",function(){
    console.log("click");
    if($("+.curriculum",this).css("display") == "none"){
      console.log("display none");
      $(".course_box .curriculum").slideUp();
      $("+.curriculum",this).slideDown();
    }
  });// course_name click
});// document ready
