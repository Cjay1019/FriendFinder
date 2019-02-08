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
        .trim()
    ]
  };
  $.post("/api/newmemer", newMemer).then(function(data) {
    switch (data) {
      case "First":
        $("#modalTitle").text("You're The First Memer");
        $("#modalBody").text("Check back later to find your meme match!");
        $("#modalBody").append(
          "<img src='https://media.tenor.com/images/1200075e7ad907ee57e6b70f500bce57/tenor.gif' class='img-fluid'>"
        );
        break;
      case "Exists":
        $("#modalTitle").text("This Memer Already Exists");
        $("#modalBody").text("Try entering a different name!");
        $("#modalBody").append(
          "<img src='https://media.tenor.com/images/1200075e7ad907ee57e6b70f500bce57/tenor.gif' class='img-fluid'>"
        );
        break;
      default:
        $("#modalTitle").text("Your Meme Match");
        $("#modalBody").text(data.name + " has the most similar meme taste!");
        $("#modalBody").append(
          "<img src='" + data.photo + "' class='img-fluid'>"
        );
    }
  });
});
