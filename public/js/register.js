$(document).ready(function () {


    $("#createBtn").click(function (event) {
        event.preventDefault();
        // console.log($('#name').val());
        // console.log($('#email').val());
        // console.log($('#password').val());
        
        var name = $('#name').val()
        var email = $('#email').val()
        var password = $('#password').val()
            $.post("/api/posts/register", {name, email, password}
            )
                .then(function(res){
                    
                    console.log(res);
                });

     });
});
