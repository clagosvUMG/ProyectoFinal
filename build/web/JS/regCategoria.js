function registrar(){
    $.ajax({
        url : "../NewServlet",
        method : "POST",
        data : {
            descripcion : $("#descripcion").val(),
            control : "regCategoria"
        },
        success : function(){
            alert("Enviado A Servlet")
        },
        error : function(error){
            alert(error)
        }
    })
}


