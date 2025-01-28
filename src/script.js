$(document).ready(() =>{
    $(".nav-toggle").on("click", () => {
        $("#nav-bar ul").slideToggle("medium");
    });

    $("#contact-form").on("submit", function(event){
        event.preventDefault();

        if(!$("#Name").val() )
        {
            alert("Campo deve ser informado");
        }

        const formData = {
            name: $("#Name").val(),
            email: $("#email").val(),
            subject: $("#subject").val(),
            message: $("#message").val()
        };

        console.log(formData)
/*
        $.ajax({
            type: "POST",
            url: 'endereço-backend',
            data: formData,
            sucess: function(response){
                console.log("Formulário enviado com sucesso");
            }
            error: function(error){
                console.error("Erro ao enviar o formulário", error);
            }
        })
*/
    })
});
