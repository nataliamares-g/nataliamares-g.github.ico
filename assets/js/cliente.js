function saludar(){
    console.log('Diseño web 1')
    //alert('Diseño web 1')
    console.log(document);
    console.log(document.getElementById('parrafo 1').innerHTML)
    console.log(document.getElementById('parrafo 1').getAttribute('style'))


}
function cambiarParrafo2(){
    console.log(document.getElementById('parrafo2').innerHTML='FES Aragon UNAM')
    
    

}
function cambiarFondoBody(){
    const colores=['#FFFFFF','#33FF57','#222FFF','#22FF11','#FF2222' ];
    const colorAlea= colores[Math.floor(Math.random() *5)];
    console.log(colorAlea)
    document.getElementById('cuerpo').style.backgroundColor = colorAlea


}