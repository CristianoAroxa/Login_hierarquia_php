$(function(){
    $("button#btnLogin").on("click", function(e){
        e.preventDefault();

        var campoEmail = $("form#fomrulario #typeEmailX").val();
        var campoSenha = $("form#fomrulario #typePasswordX").val();

        $.ajax({
            url: "",
            type: "POST",
            data: {
                email: campoEmail,
                senha: campoSenha
            },

            success: function(retorno){
                console.log(retorno);
            }

        });
    });
});