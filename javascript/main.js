let navbar = document.querySelector("#navbar");
let navbar_container = document.querySelector("#navbar .container");
let bodyScroll = document.querySelector("html,body");

// fuction to minmize header's padding when scrolling 
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.padding = "0.1% 1%";
    navbar_container.style.height = "12vh";
  } else {
    navbar.style.padding = "1% 1%";
    navbar_container.style.height = "16vh";
  }
}

let err = document.querySelector(".err");
let inputName = document.querySelector(".inputname");

// function to scroll to banners when clicking on nav bar options

function customScroll(targetId){

  var topOfElement = document.querySelector('#'+targetId).offsetTop - 132;
  window.scroll({ top: topOfElement, behavior: "smooth" });
  
}

// functions to pop up an error msg and icon when user doesn't write his info

$(document).ready(function () {

  $("#name").on("blur", () => {
    if ($("#name").val() == "") {
      $("#name").css("border", "2px solid red");
      $("#name").parent().find(".error-msg").html("A name is required");
      $("#name").parent().find(".err").css("display","block");
    } else {
      $("#name").css("border", "2px solid white");
      $("#name").parent().find(".error-msg").html(" ");
      $("#name").parent().find(".err").css("display","none");
    }
  });

   
    $("#email").on("blur", () => {
      // console.log(nameValue)
      if ($("#email").val() == "") {
        $("#email").css("border", "2px solid red");
        $("#email").parent().find(".error-msg").html("An email is required");
        $("#email").parent().find(".err").css("display","block");
      } else {
        $("#email").css("border", "2px solid white");
        $("#email").parent().find(".err-msg").html("display","block");
        $("#email").parent().find(".err").css("display","none");

      }
    });

  
    $("#number").on("blur", () => {
      // console.log(nameValue)
      if ($("#number").val() == "") {
        $("#number").css("border", "2px solid red");
        $("#number").parent().find(".error-msg").html("A number is required");
        $("#number").parent().find(".err").css("display","block");
      } else {
        $("#number").css("border", "2px solid white");
        $("#number").parent().find(".error-msg").html("");
        $("#number").parent().find(".err").css("display","none");
      }
    });

   
    $("#message").on("blur", () => {
      // console.log(nameValue)
      if ($("#message").val() == "") {
        
        $("#message").css("border", "2px solid red");
        $("#message").parent().find(".error-msg").html("A message is required");
        $("#message").parent().find(".err").css("display","block");
      } else {
        $("#message").css("border", "2px solid white");
        $("#message").parent().find(".error-msg").html("");
        $("#message").parent().find(".err").css("display","none");
      }
    });

});
