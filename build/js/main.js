$(document).ready(function () {
  // language choice
  $(".second").click(function () {
    var langSecond = $(".second").text();
    var langFirst = $(".first").text();
    var langThird = $(".third").text();

    $(".first").text(langSecond);
    $(".second").text(langFirst);
    $(".third").text(langThird);
  });
  $(".third").click(function () {
    var langSecond = $(".second").text();
    var langFirst = $(".first").text();
    var langThird = $(".third").text();

    $(".first").text(langThird);
    $(".second").text(langFirst);
    $(".third").text(langSecond);
  });

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

  /***************** Activate video call and gift */
  $("#video-gift-checkbox").click(function () {
    if (this.checked) {
      $(".video-gift-input ").each(function () {
        $(".payment-gift").prop("disabled", false);
        $(this).css("color", "rgba(255, 255, 255, 1)");
        $(this).css("background", "#362649");
      });
    } else {
      $(".video-gift-input").prop("disabled", true);
      $(".video-gift-input").css("color", "rgba(255, 255, 255, 0.2)");
      $(".video-gift-input").css("background", "#201231");
    }
  });
  $("#video-call-checkbox").click(function () {
    if (this.checked) {
      $(".video-call-input").each(function () {
        $(".payment-call").prop("disabled", false);
        $(this).css("color", "rgba(255, 255, 255, 1)");
        $(this).css("background", "#362649");
      });
      $("span.flatpickr-day").css("color", "rgba(255, 255, 255, 1)");
      //Modal time open
      $("span.flatpickr-day").click(function () {
        $("#modal-time-picker").css("display", "flex");
      });
    } else {
      $(".video-call-input").prop("disabled", true);
      $(".video-call-input").css("color", "rgba(255, 255, 255, 0.2)");
      $(".video-call-input").css("background", "#201231");
      $(".flatpickr-day").css("color", "rgba(255, 255, 255, 0.2)");
    }
  });
  //Modal time close
  $("#cancel-modal-time-picker").click(function () {
    $("#modal-time-picker").hide();
  });
  //Update selected time
  $("#update-selected-time").click(function () {
    $("#modal-time-picker").css("display", "flex");
    $("#add-time-btn").text("Sil");
  });

  /**********Video block border bold and user choice  */
  $("#block-video-call-choice").click(function () {
    $("#block-video-call-choice").css("border", "3px solid white");
    $("#block-video-gift-choice").css("border", "none");
  });
  $("#block-video-gift-choice").click(function () {
    $("#block-video-call-choice").css("border", "none");
    $("#block-video-gift-choice").css("border", "3px solid white");
  });
  //************Date and time picker *************/
  var configDate = {
    enableTime: false,
    dateFormat: "Y-m-d",
    inline: true,
  };
  var configTime = {
    enableTime: true,
    dateFormat: "H:i",
    inline: true,
    noCalendar: true,
  };

  $("#add-date").flatpickr(configDate);
  $("#add-time").flatpickr(configTime);

  // Modal time picker
  // $("#add-date").change(function () {
  //   $("#modal-time-picker").css("display", "flex");
  // });

  // $("#cancel-modal-time-picker").click(function () {
  //   $("#modal-time-picker").hide();
  //   $(document).ready();
  // });

  /**************Video call price option with 5 min and 10 min */
  var option10 = $(".option-10");
  var option5 = $(".option-5");
  $(option10).click(function () {
    if (!option10.hasClass("active-border")) {
      option10.addClass("active-border");
      option5.removeClass("active-border");
    }
  });
  $(option5).click(function () {
    if (!option5.hasClass("active-border")) {
      option5.addClass("active-border");
      option10.removeClass("active-border");
    }
  });

  /**************Inbox messages border */
  var giftMsg = $("#inbox-gift-msg");
  var callMsg = $("#inbox-call-msg");
  $(callMsg).click(function () {
    if (!callMsg.hasClass("active-border")) {
      callMsg.addClass("active-border");
      giftMsg.removeClass("active-border");
    }
  });
  $(giftMsg).click(function () {
    if (!giftMsg.hasClass("active-border")) {
      giftMsg.addClass("active-border");
      callMsg.removeClass("active-border");
    }
  });
});
