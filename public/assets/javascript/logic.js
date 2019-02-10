new WOW().init();

$("#start-btn").click(function() {
  window.location.href = "./survey";
});

$("#submit-btn").on("click", function(event) {
  event.preventDefault();
  var newMemer = {
    name: $("#name")
      .val()
      .trim(),
    photo: $("#image")
      .val()
      .trim(),
    scores: [
      $("#select-1")
        .val()
        .trim(),
      $("#select-2")
        .val()
        .trim(),
      $("#select-3")
        .val()
        .trim(),
      $("#select-4")
        .val()
        .trim(),
      $("#select-5")
        .val()
        .trim(),
      $("#select-6")
        .val()
        .trim(),
      $("#select-7")
        .val()
        .trim(),
      $("#select-8")
        .val()
        .trim(),
      $("#select-9")
        .val()
        .trim(),
      $("#select-10")
        .val()
        .trim(),
      $("#select-11")
        .val()
        .trim()
    ]
  };
  $.post("/api/newmemer", newMemer).then(function(data) {
    console.log(data);
    if (data === "Exists") {
      $("#modalTitle").text("This Memer Already Exists");
      $("#modalBody").text("Try entering a different name!");
      $("#modalBody").append(
        "<img src='https://media.tenor.com/images/1200075e7ad907ee57e6b70f500bce57/tenor.gif' class='img-fluid rounded z-index-3'>"
      );
    } else {
      $("#modalTitle").text("Your Meme Match");
      $("#modalBody").text(data.name + " has the most similar meme taste!");
      $("#modalBody").append(
        "<img src='" + data.photo + "' class='img-fluid rounded z-index-3'>"
      );
    }
  });
});
