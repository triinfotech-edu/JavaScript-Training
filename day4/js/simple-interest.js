$(() => {
  $('.btn').on('click', () => {
    const p = $('[type=number]').eq(0).val();
    const r = $('[type=number]').eq(1).val();
    const t = $('[type=number]').eq(2).val();

    let interest = (p * r * t) / 100.0;
    let amount = p + interest;

    $('.col-md-8').append("<h3>Interest is " + interest + "</h3>");
    $('.col-md-8').append("<h3>Total Amount payable is " + amount + "</h3>");
  });
});
