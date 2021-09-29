// Отправка заявки 
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

// Закрыть попап «спасибо»
$('.closed').click(function() { // по клику на крестик
	$('.modalthanks-content').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.modalthanks-header');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.modalthanks-content').fadeOut();
    }
});

// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="phone"]').mask("+375(XX) XX-XXX-XX");
});

