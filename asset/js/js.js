
/*проверка на правильность формы*/
$(document).ready(function () {
  $('#form-base-1').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: {
        required: true,
        minlength: 9
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: 'Укажите ваше имя',
        minlength: 'Минимум 2 символа'
      },
      phone: {
        required: 'Укажите ваш телефон',
        minlength: 'Неверный формат телефона'
      },
      email: {
        required: 'Укажите электронную почту',
        email: 'Неверный формат почты'
      }
    }
  });
});

$(document).ready(function () {
  $('#form-base-2').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: {
        required: true,
        minlength: 9
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: 'Укажите ваше имя',
        minlength: 'Минимум 2 символа'
      },
      phone: {
        required: 'Укажите ваш телефон',
        minlength: 'Неверный формат телефона'
      },
      email: {
        required: 'Укажите электронную почту',
        email: 'Неверный формат почты'
      }
    }
  });
});

$(document).ready(function () {
  $('#form-base-3').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: {
        required: true,
        minlength: 9
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: 'Укажите ваше имя',
        minlength: 'Минимум 2 символа'
      },
      phone: {
        required: 'Укажите ваш телефон',
        minlength: 'Неверный формат телефона'
      },
      email: {
        required: 'Укажите электронную почту',
        email: 'Неверный формат почты'
      }
    }
  });
});


/*отправка формы*/

$("#form-base-1").submit(function () {
  if ($('#form-base-1').valid()) {
    var form_data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "/asset/js/formbase-1.php",
      data: form_data
    }).done(function () {
      $('#popup').css('display', 'none');
      $('#popupThank').css('display', 'flex');
    });
    return false;
  }
});

$("#form-base-2").submit(function () {
  if ($('#form-base-2').valid()) {
    var form_data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "/asset/js/formbase-2.php",
      data: form_data
    }).done(function () {
      $('#form-base-2').css('display', 'none');
      $('#ThankFooter').css('display', 'flex');
    });
    return false;
  }
});


$("#form-base-3").submit(function () {
  if ($('#form-base-3').valid()) {
    var form_data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "/asset/js/formbase-3.php",
      data: form_data
    }).done(function () {
      $('#form-base-3').css('display', 'none');
      $('#ThankMainForm').css('display', 'flex');
    });
    return false;
  }
});

