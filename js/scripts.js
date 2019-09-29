$(document).ready(function() {
  $("form#ok").submit(function(event) {
    event.preventDefault();

    var sure = $("#sure").val();
    console.log("data is", sure);

    var creature;

    $("#Output").children().remove();
  for (i = 0; i < sure; i++) {
    if (i % 3 === 1 && i % 5 === 0) {
      creature =[ i + ": Alien from Xorgon 6!"];
    } else if (i === 0) {
      creature = [i + ": White Rabbit With One Yellow Eye"];
    } else if (i % 7 === 0 ) {
        creature = [i + ": Leopard With 9 Spots And 6 Feet!"];
      } else if (i === 5) {
        creature = [i + ": Human!"];
      } else if (i % 4 === 0) {
        creature = [i + ": Octopus!"];
      } else if (i % 3 === 2) {
        creature = [i + ": Dolphin!"];
      } else if (i % 45 === 12) {
        creature = [i + ": Dolphin With 2 Snaggleteeth!"];
      } else if (i === 3) {
        creature = [i + ": Dragon!"];
      } else {
        creature = [i + ": Not A Valid Creature."];
    }

    $("#Output").append("<h4>" + creature + "</h4>");

    console.log(i);
  }
 });
});
