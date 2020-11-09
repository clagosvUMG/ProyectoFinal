

package Modelos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class BaseDatos {
   private Conexion conn;
    private Connection cn;
    private PreparedStatement prstmt = null;
    private ResultSet result = null;
    
    public void regAutor(String nombre,String pseudo, String año){
        String sql = "INSERT INTO mydb.autor (nombre, pseudo, año) VALUES(?,?,?)";
        conn= new Conexion();
        cn=conn.conectar();
        
        try{
            prstmt = cn.prepareStatement(sql);       
            prstmt.setString(1,nombre);
            prstmt.setString(2,pseudo);
            prstmt.setString(3,año);
            prstmt.executeUpdate();  
        }
        catch(SQLException e){
            e.printStackTrace();
        }
    }
    
}
