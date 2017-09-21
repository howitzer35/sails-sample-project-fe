(function(){

  $(function(){

    $("#addStudentForm").validate({
      errorClass: "text-danger",
      rules: {
      first_name: {
        required: true,
        minlength: 2
      },
      last_name: {
        required: true,
        minlength: 2
      },
      start_date: {
        required: true,
        dateISO: true
      },
    },
      messages: {
      first_name: {
        required: "success",
        minlength: "unsuccessful"
        },
      }
    })
  })

})();
