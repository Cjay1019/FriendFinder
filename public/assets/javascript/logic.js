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
  console.log(newMemer);
  $.post("/api/newmemer", newMemer).then(function(data) {});
});
