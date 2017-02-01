$(document).ready(function() {
  // static initialition
  // let fruits = ['Apple', 'Banana', 'Grapes', 'Kiwi', 'Orange', 'Papaya', 'Pineapple'];
  // dynamic initialition
  let fruits = [];

  // for (let i = 0; i < fruits.length; i++) {
  //   $('.list-group').append('<li class="list-group-item">' + fruits[i] + '</li>');
  // }
$(document).on('keyup', '#fruit-name', function(e) {
    if (e.keyCode == 13 && $(this).val() !== '') {
      fruits.push($(this).val())
      $('.list-group').append('<li class="list-group-item">' + $(this).val() + '<i class="fa fa-times pull-right"></i></li>');
      $(this).val('');
    }
  });

  $(document).on('click', '.list-group-item', function() {
    //shuffle();
    $('.list-group').html('');
    for (let i = 0; i < fruits.length; i++) {
      $('.list-group').append('<li class="list-group-item">' + fruits[i] + '<i class="fa fa-times pull-right"></i></li>');
    }
  });

  $('.list-group').on('click', '.fa-times', function() {
    $(this).parent().addBack().remove();
  });

  function shuffle() {
    fruits.sort(function() {
      return 4*Math.random() > 2 ? 1 : -1;
    });
  }
});
