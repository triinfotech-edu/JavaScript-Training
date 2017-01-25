// jQuery Code
// $(document).ready(function() {
//   $('form').on('submit', function(event) {
//     event.preventDefault();
//
//     const name = $('#name').val();
//     const age = $('#age').val();
//     const phone = $('#phone').val();
//
//     const data = "<tr>" +
//     "<td>" + name + "</td>" +
//     "<td>" + age + "</td>" +
//     "<td>" + phone + "</td>" +
//     "</tr>";
//
//     $('.table tbody').append(data);
//   });
// });

// JS
window.onload = function() {
  const form = document.getElementById("form");
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById("name");
    let age = document.getElementById("age");
    let phone = document.getElementById("phone");

    const tbody = document.getElementsByTagName("tbody")[0];
    const data = "<tr>" +
        "<td>" + name.value + "</td>" +
        "<td>" + age.value + "</td>" +
        "<td>" + phone.value + "</td>" +
        "</tr>";

    tbody.innerHTML += data;

    name.value = "";
    age.value = "";
    phone.value = "";
  });
};
