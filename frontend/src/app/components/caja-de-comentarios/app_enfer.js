
function funcion_en(entrada,nombre,comen,claves,j,boton){
    const comentarios=document.getElementById('comentar');
    const botones=document.getElementById('btn_group1');
    const comens=document.getElementById('ing_comen');
    let clones=document.querySelector('#comen_1').querySelector('a');
    const templa=document.importNode(clones,true);
    const frag=document.createDocumentFragment();
    var botones_disable = boton;
    var i=j;
    var name=comens.querySelector('#usuario').value;
    var clave=comens.querySelector('#pass').value;
    var men=comens.querySelector('#mensaje').value;
      
       if(entrada==1)
       {    
    
           templa.querySelector('h5').textContent=name;
           templa.querySelector('p').textContent=men;
           templa.querySelector('#b_cerrar').value='a'+i;
           
            if((i%2)==0){
                templa.id='a'+i;
                templa.classList.add('bg-dark','text-light');
                i++; 
            }
            else{
                templa.id='a'+i;
                templa.classList.remove('bg-dark','text-light');
                
                i++;
            }
            if(botones_disable==false)
            {
                templa.querySelector('#b_cerrar').disabled=false;
            }
            else if(botones_disable==true)
            {
                templa.querySelector('#b_cerrar').disabled=true;
            }
    
            let clone=document.importNode(templa,true);
            frag.appendChild(clone);
            comentarios.appendChild(frag);
            return ;
        }
        



        else if(entrada==3 && event.target.id!='b_cerrar')
        {       
                var botones_int=document.querySelectorAll("#b_cerrar",".boton");
              
                var z=0;
                if(botones_disable){
                    botones_int.forEach(function(){
                        botones_int[z].disabled=false;
                        z++;
                       
                    });
                    botones_disable = false;
                }
                else{
                    botones_int.forEach(function(){
                        botones_int[z].disabled=true;
                        z++;
                    });
                    botones_disable = true;
                    }
                   
            }
    
         else if(entrada==2)   
         {
                       
            if((name=='admin')&(clave=='admin')){
                botones.querySelector('#b_elim').classList.remove('invisible');
                Swal.fire({
                    icon: 'success',
                    title: 'Boton eliminar desbloqueado'
                  });
                
            }
            else if((name=='admin')&(clave=='admin1'))
            {
                botones.querySelector('#b_elim').classList.add('invisible');
                
                Swal.fire({
                    icon: 'success',
                    title: 'Boton eliminar ocultado'
                  });
                  
                var botones_int=document.querySelectorAll("#b_cerrar",".boton");
               
                var z=0;
                botones_disable = true;
                botones_int.forEach(function(){
                    
                    botones_int[z].disabled=true;
                    z++;
                });
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Datos de comprobacion erroneos',
                    footer: 'El usuario o la clave a sido incorrecta'
                  });
            }
            return ;
         }
    
    

    comentarios.addEventListener("click",event =>{
        const htmla=document.getElementById(event.target.value);
        event.preventDefault();
               if(event.target.id =='b_cerrar'){
                   htmla.remove();
               }
           
    });
          
    
};

function botones_act_Desac ()
{
    if(event.target.id!='b_cerrar')
        {       
                var botones_int=document.querySelectorAll("#b_cerrar",".boton");
                var z=0;
                botones_int.forEach(function(){
                    botones_int[z].disabled=false;
                     z++;
                    });
              setTimeout(()=>{
                var botones_int=document.querySelectorAll("#b_cerrar",".boton");
                var z=0;
                botones_int.forEach(function(){
                    botones_int[z].disabled=true;
                    z++;
                });
                   
              },10000)
                    
        }
}


