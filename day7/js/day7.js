$(document).ready(function() {
  let property = ['font-weight', 'font-style', 'text-decoration'];

  $('#size').on('keyup', function() {
    $('#hello').css('font-size', $('#size').val() + 'px');
  });

  $('[type=radio]').on('click', function() {
    $('#hello').css(property[$(this).parent().index()], $(this).attr('id'));
  });
});
