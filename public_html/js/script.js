$(document).ready(function () {
  $('#contact').validate({
    debug: true,
    errorClass: 'alert alert-danger',
    ErrorLabelContainer: '#output-area',
    errorElement: 'div',
    // input validation rules
    // each rule starts with element name attribute
    rules: {
      email: {
        email: true,
        required: true
      },
      message: {
        required: true,
        maxlength: 2000
      },
      messages: {
        name: {
          required: 'Name is required.'
        },
        email: {
          email: 'Please provide a valid email.',
          required: 'Email is required.'
        },
        message: {
          required: 'A message is required.',
          maxlength: 'Message be 2000 characters or less.'
        },
      },
      submitHandler: (form) => {
        $('#contact').ajaxSubmit({
          type: 'POST',
          url: $('contact').attr('action'),
          success: (ajaxOutput) => {
            $('#output-area').css('display', '')
            $('#output-area').html(ajaxOutput)

            if ($('.alert-success') >= 1) {
              $('#contact')[0].reset()
            }
          }
        })
      }
    },
  })
})