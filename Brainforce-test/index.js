/* accordion */
function triggerAccordion() {
  $(".js-accordion__trigger").on("click", (e) => {
    let target = $(e.currentTarget);
    let expanded = target.attr("aria-expanded") === "true" || false;
    let targetContent = target
      .closest(".js-accordion")
      .find(".js-accordion__content");

    /* collapse all accordion contents */
    $(".js-accordion__trigger").attr("aria-expanded", "false");
    $(".js-accordion__content").attr("aria-hidden", "true").slideUp(700);

    /* toggle the target accordion block */
    target.attr("aria-expanded", !expanded);
    targetContent.attr("aria-hidden", expanded);

    let targetContentShown =
      targetContent.attr("aria-hidden") === "true" || false;

    targetContentShown
      ? targetContent.slideUp(700)
      : targetContent.slideDown(700);
  });
}

/* init accordion logic if it exists on the page */
$(".js-accordion") ? triggerAccordion() : false;

var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var mymodalthanks = document.getElementById('myModalthanks');


var btnfooter = document.getElementById("btn__footer");


var span = document.getElementsByClassName("closed")[0];


btnfooter.onclick = function() {
  myModalthanks.style.display = "block";
}


span.onclick = function() {
  myModalthanks.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == mymodalthanks) {
      mymodalthanks.style.display = "none";
    }
}

$(document).ready(function() {
	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '' || document.form.phone.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.modalthanks-content').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});