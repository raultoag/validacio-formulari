// validacion formulario registro

function classError() {
    console.log("msg");
    $('.divError').addClass('invalid-feedback');
    $('.divError').removeClass('valid-feedback');    
}

function classValid(){
    //$('.divError').text("");
    
    $('.divError').removeClass('invalid-feedback');
    $('.divError').addClass('valid-feedback');
    msg="Todo correcto";
    $('.divError').text(msg);
}
(function() {
    
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          
            var pass = document.getElementById("inputPassword").value;
            var newPass = document.getElementById("inputPassword2").value;
            var msg="";
            switch (form.checkValidity()) {
                case false:   
                    if( pass != newPass ) {
                        console.log("hola1");
                        msg="La contraseña ha de ser igual";
                        $('.divPass').text(msg);
                        
                    }
                    else if( pass=="" || newPass=="" ) {
                        console.log("hola1");
                        msg="Introduce contraseña";
                        $('.divPass').text(msg);
                        
                    }
                    
                    classError();
                    event.preventDefault();
                    event.stopPropagation(); 
                    break;
                case true:
                    classValid();
                    break;
                default:
                    break;
            }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();