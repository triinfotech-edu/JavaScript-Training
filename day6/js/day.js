$(() => {
  $('#color').on('keyup', () => {
    $('.colorbox').css('background', $('#color').val());
  });

  $('.colorbox').on('click', () => {
    const red = Math.ceil(Math.random() * 255);
    const green = Math.ceil(Math.random() * 255);
    const blue = Math.ceil(Math.random() * 255);

    $('.colorbox').css('background', 'rgb(' + red + ', ' +  green + ', ' + blue + ')');
    $('.colorbox').css('box-shadow', '10px 10px rgba(' + (red-10) + ', ' +  (green-10) + ', ' + (blue-10) + ', 0.5)');
    $('.color-name').html('rgb(' + red + ', ' +  green + ', ' + blue + ')');
  });
});
