$(() => {
  $('#number2').on('keyup', () => {
    const number1 = $('#number1').val();
    const number2 = $('#number2').val();

    let data = "";
    for (let i = 1; i <= number2; i++) {
      data += "<h4>" + number1 + " X " + i + " = " + (number1*i) + "</h4>"
    }

    $('.result').html(data);
  });
});
