
 (function() {

   $(function() {

     let selected;
     //disable all input fields at first
     $("#updateStudentForm :input").prop("disabled", true);
     $("#student_id").on("change", function() {
       $("#updateStudentForm :input").prop("disabled", false);
       selected = $(this).val();
       $.get("http://localhost:1337/student/" + selected, function(student) {
         //loop over the student i got back from the api
         $.each(student, function(key, val) {
           //find the input field that matches the name of the key
           let el = $('[name="' + key + '"]');
           //find the type of field that we selected
           let type = el.attr('type');
           //based on the type choose how we set the value
           switch (type) {
             case 'checkbox':
               el.attr('checked', 'checked');
               break;
             case 'radio':
               el.filter('[value="' + val + '"]').attr('checked', 'checked');
               break;
             default:
               el.val(val);
           }
         });
       })
     });

     $('.selectpicker').selectpicker({
        style: 'btn-info',
        size: 10
      });

   })
   $("#updateStudentForm").validate({
     errorClass: "text-danger",
     rules: {
       first_name: {
         required: true,
         minlength: 2,
       },
       last_name: {
         required: true,
         minlength: 2
       },
       start_date: {
         dateISO: true,
         required: true,
         minlength: 2
       }
     },
     messages: {
       first_name: {
         required: "this is required",
         minlength: "this is the new error"
       }
     }

   });
 })();
