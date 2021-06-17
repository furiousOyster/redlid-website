$(document).ready(function () {
  var the_terms = $("#the-terms");

  the_terms.click(function () {
    if ($(this).is(":checked")) {
      $("#submitBtn").removeAttr("disabled");
    } else {
      $("#submitBtn").attr("disabled", "disabled");
    }
  });
  document.getElementById("zone1selector").checked = true;
  showzone();
});

$("select[id=pickupcycle]").change(function () {
  if ($(this).val() == "eightweekly") {
    $("#eightweekly").show();
  } else {
    $("#eightweekly").hide();
  }
});

$("select[name=wastetype]").change(setWasteTypes);

function setWasteTypes() {
  var zones = ["#zone1", "#zone2", "#zone3"];
  zones.map(function (id) {
    var selector = $(id);
    var type = selector.find("#wastetype").val();

    if (type === "general") {
      selector.find("#gen").show().prop("disabled", false);
    } else {
      selector.find("#gen").hide().prop("disabled", true);
    }

    if (type === "green") {
      selector.find("#green").show().prop("disabled", false);
    } else {
      selector.find("#green").hide().prop("disabled", true);
    }

    if (type === "hard") {
      selector.find("#hard").show().prop("disabled", false);
    } else {
      selector.find("#hard").hide().prop("disabled", true);
    }
  });
}

$("select[name=payment]").change(function () {
  if ($(this).val() == "cc") {
    $("#cc").show();
  } else {
    $("#cc").hide();
  }
});

function showzone() {
  if (document.getElementById("zone1selector").checked) {
    document.getElementById("zone1").style.display = "block";
    document.getElementById("zone1").disabled = false;
  } else {
    document.getElementById("zone1").style.display = "none";
    document.getElementById("zone1").disabled = true;
  }

  if (document.getElementById("zone2selector").checked) {
    document.getElementById("zone2").style.display = "block";
    document.getElementById("zone2").disabled = false;
  } else {
    document.getElementById("zone2").style.display = "none";
    document.getElementById("zone2").disabled = true;
  }

  if (document.getElementById("zone3selector").checked) {
    document.getElementById("zone3").style.display = "block";
    document.getElementById("zone3").disabled = false;
  } else {
    document.getElementById("zone3").style.display = "none";
    document.getElementById("zone3").disabled = true;
  }

  setWasteTypes();
}
