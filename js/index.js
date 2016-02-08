$("#aboutItems").gridalicious({
  width: 350,
  gutter: 12,
  selector: '.card'
});

$("#products").gridalicious({
  width: 280,
  gutter: 12,
  selector: '.card'
});

$("#age").text(_calculateAge(new Date(1994, 9, 9)));

function _calculateAge(birthday) { // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
