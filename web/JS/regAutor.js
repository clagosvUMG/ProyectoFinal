function registrar(){
    $.ajax({
        url : "../NewServlet",
        method : "POST",
        data : {
            nombre : $("#autorNombre").val(),
            pseudo : $("#autorPseudo").val(),
            año : $("#autorAño").val(),
            control : "regAutor"
        },
        success : function(){
            alert("Enviado A Servlet")
        },
        error : function(error){
            alert(error)
        }
    })
}


