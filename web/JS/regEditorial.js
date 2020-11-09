function registrar(){
    $.ajax({
        url : "../NewServlet",
        method : "POST",
        data : {
            nombre : $("#editorialNombre").val(),
            direccion : $("#editorialEdicion").val(),
            control : "regEditorial"
        },
        success : function(){
            alert("Enviado A Servlet")
        },
        error : function(error){
            alert(error)
        }
    })
}


