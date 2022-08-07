$(document).ready(function () {
  //login modal
  $("#submit").click(function () {
    $("#modal").show();
  });
  $("#cancel").click(function () {
    $("#modal").hide();
  });
  // update photo
  $("#update-photo-btn").click(function () {
    $("#modal-photo").show();
  });
  $("#cancel").click(function () {
    $("#modal-photo").hide();
  });
  $("#update-video-btn").click(function () {
    $("#modal-video").show();
  });
  $("#cancel").click(function () {
    $("#modal-video").hide();
  });
  // password visible
  $("#eye-slash").click(function () {
    if ($("#password").attr("type") === "password") {
      $("#password").attr("type", "text");
      $("#eye-slash").css("visibility", "hidden");
      $("#eye").css("visibility", "visible");
    }
  });
  $("#eye").click(function () {
    if ($("#password").attr("type") === "text") {
      $("#password").attr("type", "password");
      $("#eye-slash").css("visibility", "visible");
      $("#eye").css("visibility", "hidden");
    }
  });

  // repeat password

  $("#eye-slash-repeat").click(function () {
    if ($("#password-repeat").attr("type") === "password") {
      $("#password-repeat").attr("type", "text");
      $("#eye-slash-repeat").css("visibility", "hidden");
      $("#eye-repeat").css("visibility", "visible");
    }
  });
  $("#eye-repeat").click(function () {
    if ($("#password-repeat").attr("type") === "text") {
      $("#password-repeat").attr("type", "password");
      $("#eye-slash-repeat").css("visibility", "visible");
      $("#eye-repeat").css("visibility", "hidden");
    }
  });

  // Activate video call and gift
  var videoGiftCheckBox = document.querySelector("#video-gift-checkbox");
  var videoCallCheckBox = document.querySelector("#video-call-checkbox");

  var videoGiftInputsParent = document.querySelector("#video-gift-inputs");
  var allGiftInputs =
    videoGiftInputsParent && videoGiftInputsParent.querySelectorAll("input");

  var videoCallInputsParent = document.querySelector("#video-call-inputs");
  var allCallInputs =
    videoCallInputsParent && videoCallInputsParent.querySelectorAll("input");

  if (videoGiftCheckBox) {
    videoGiftCheckBox.addEventListener("click", function (e) {
      if (e.target.checked) {
        for (var i = 0; i < allGiftInputs.length; i++) {
          allGiftInputs[i].disabled = false;
          allGiftInputs[i].style.color = "rgba(255, 255, 255, 1)";
          allGiftInputs[i].style.background = "#362649";
        }
      } else {
        for (var i = 0; i < allGiftInputs.length; i++) {
          allGiftInputs[i].disabled = true;
          allGiftInputs[i].style.color = "rgba(255, 255, 255, 0.2)";
          allGiftInputs[i].style.background = "#201231";
        }
      }
    });
  }

  if (videoCallCheckBox) {
    videoCallCheckBox.addEventListener("click", function (e) {
      if (e.target.checked) {
        for (var i = 0; i < allCallInputs.length; i++) {
          allCallInputs[i].disabled = false;
          allCallInputs[i].style.color = "rgba(255, 255, 255, 1)";
          allCallInputs[i].style.background = "#362649";
        }
      } else {
        for (let i = 0; i < allCallInputs.length; i++) {
          allCallInputs[i].disabled = true;
          allCallInputs[i].style.color = "rgba(255, 255, 255, 0.2)";
          allCallInputs[i].style.background = "#201231";
        }
      }
    });
  }

  // Video block
  $("#block-video-call-choice").click(function () {
    $("#block-video-call-choice").css("border", "3px solid white");
    $("#block-video-gift-choice").css("border", "none");
  });
  $("#block-video-gift-choice").click(function () {
    $("#block-video-call-choice").css("border", "none");
    $("#block-video-gift-choice").css("border", "3px solid white");
  });
});



