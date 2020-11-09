function registrar(){
    $.ajax({
        url : "../NewServlet",
        method : "POST",
        data : {
            nombre : $("#libroNombre").val(),
            añoEmision : $("#libroEmision").val(),
            edicion : $("#libroEdicion").val(),
            casaEditorial : $("#libroEditorial").val(),
            autor : $("#autor").val(),
            categoria : $("#categoria").val(),
            control : "RegistroAutor"
        },
        success : function(){
            alert("Enviado A Servlet")
        },
        error : function(error){
            alert(error)
        }
    })
}


