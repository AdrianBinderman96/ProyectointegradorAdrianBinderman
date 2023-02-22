
/*configuracoin de botones */


    document.getElementById("Experiencialaboralid").style.display= 'none';
    document.getElementById("informacionacademicabotonid").style.color= "white";


    document.getElementById("informacionacademicabotonid").addEventListener('click', function() {
    document.getElementById('Experiencialaboralid').style.display = 'none';

    document.getElementById("FormacionAcademicaid").style.display= 'block';
    document.getElementById("informacionacademicabotonid").style.color= "white";
    document.getElementById("experiencialaboralbotonid").style.color= "black";
    });


    document.getElementById("experiencialaboralbotonid").addEventListener('click', function() {
    document.getElementById('Experiencialaboralid').style.display = 'block';
    document.getElementById("FormacionAcademicaid").style.display= 'none';
    document.getElementById("informacionacademicabotonid").style.color= "black";
    document.getElementById("experiencialaboralbotonid").style.color= "white";
    });
       



/* mover imagen */

        let listadeimagenes = new Array ()

        listadeimagenes[1] = "https://scontent.faep9-1.fna.fbcdn.net/v/t1.18169-9/10431717_10204433587553678_4237075678303979089_n.jpg?stp=c120.0.720.720a_dst-jpg_s851x315&_nc_cat=109&ccb=1-7&_nc_sid=da31f3&_nc_ohc=V_Vp9Tf4qxAAX9Uwr-g&_nc_ht=scontent.faep9-1.fna&oh=00_AfD8DjnQGkSDx4dvcSHd4s24KOMi7Yv2AlqXJkU69_aonQ&oe=641CBF93";
        listadeimagenes[2] = "https://scontent.faep9-3.fna.fbcdn.net/v/t1.18169-9/10425408_10204433586353648_1772972035815747588_n.jpg?stp=c120.0.720.720a_dst-jpg_s851x315&_nc_cat=101&ccb=1-7&_nc_sid=da31f3&_nc_ohc=4ZAvQcs0bjEAX8n2c2m&_nc_ht=scontent.faep9-3.fna&oh=00_AfBq-YzpKllp4oOK9daDNdqlc3frWGVNUeL0emXGkhDQhw&oe=6419B98C" ;  
        listadeimagenes[3] = "https://scontent.faep9-1.fna.fbcdn.net/v/t1.18169-9/1517512_10200595692694922_401339192_n.jpg?stp=c120.0.720.720a_dst-jpg_s851x315&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_ohc=FVTZQlAscAoAX9omIdP&_nc_ht=scontent.faep9-1.fna&oh=00_AfBYCBeBlbVv_TM-lJVftISHzr9tCl5166du_6LBdc8_4w&oe=641CD16A";
        listadeimagenes[0] = "https://scontent.faep9-2.fna.fbcdn.net/v/t1.18169-9/63770_10204433596273896_8229715307534015775_n.jpg?stp=c120.0.720.720a_dst-jpg_s851x315&_nc_cat=111&ccb=1-7&_nc_sid=da31f3&_nc_ohc=T1XAC9YiY4UAX-W8vbQ&_nc_ht=scontent.faep9-2.fna&oh=00_AfCwL7h__I4CVUD5xq359FujHTmy7JH4pCLXGLRWimR3lA&oe=641CB9A0"

      
        let n = 1 ;

       
        setInterval(function() {

            document.getElementById("imaganenprincipal").src= listadeimagenes[n]; 

            if (n <= 2 ) {
                n++
              } else {
                n=0
              }
            }, 2000);
           
              