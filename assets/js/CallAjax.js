tabla()
var d = '0';
var m = '0';
var te = '1';

buscar2(d,m,te);



function nl(){
  var ax = document.getElementById("NL").innerHTML;
  lista(ax)
  
console.log(pv);
}
function gu(){
  var bx = document.getElementById("GU").innerHTML;
  lista(bx)

}
function mo(){
  var cx = document.getElementById("MO").innerHTML;
  lista(cx)

}
function saa(){
  var dx = document.getElementById("SAA").innerHTML;
  lista(dx)

}
function sca(){
  var ex = document.getElementById("SCA").innerHTML;
  lista(ex)
}
function ej(){
  var fx = document.getElementById("EJ").innerHTML;
  lista(fx)

}
function sn(){
  var gx = document.getElementById("SN").innerHTML;
  lista(gx)
  console.log(gx);
}
function sr(){
  var hx = document.getElementById("SR").innerHTML;
  lista(hx)

}
function sp(){
  var ix = document.getElementById("SP").innerHTML;
  lista(ix)

}

function lista(a){
 
  var pv = document.getElementById("Tipo").value;
  var xb;
  var xc;
  var xf;
 
if(pv == "PRESIDENTE Y VICEPRESIDENTE"){
  xf = '1';
}else if(pv == "CORPORACION MUNICIPAL"){
  xf = '4';
}

  if( a == "NIVEL NACIONAL" ){
    xb = '0';
    xc = '0';
    buscar2(xb,xc,xf);
   
  }else if(a == "GUASTATOYA"){
  
    xb = '4';
    xc = '1';
    buscar2(xb,xc,xf);

  }else if( a == "MORAZÁN"){
    xb = '4';
    xc = '2';
    buscar2(xb,xc,xf);

  }else if( a == "SAN AGUSTÍN ACASAGUASTLÁN"){

    xb = '4';
    xc = '3';
    buscar2(xb,xc,xf);
  }else if(a == "SAN CRISTÓBAL ACASAGUASTLÁN"){
    xb = '4';
    xc = '4';
    buscar2(xb,xc,xf);

  }else if(a == "EL JÍCARO"){
    xb = '4';
    xc = '5';
    buscar2(xb,xc,xf);

  }else if( a == "SANARATE"){

    xb = '4';
    xc = '7';
    buscar2(xb,xc,xf);
  }else if( a == "SAN ANTONIO LA PAZ"){
    xb = '4';
    xc = '8';
    buscar2(xb,xc,xf);

  }else if( a == "SANSARE"){
    xb = '4';
    xc = '6';
    buscar2(xb,xc,xf);
  }


 console.log(a);
  
};


function buscar2(ds,ms,tes){
  
  var label = [];
  var color = [];
  var inf = []; 
 

console.log(d)
  $.ajax({
    url: "https://votosgt.azurewebsites.net/api/votos?d="+ds+"&m="+ms+"&te="+tes+""
  }).done(function(data){
    var res = JSON.parse(data);
     var res2 = res.VOTOS;
    console.log(res2);
for(let i = 0; i < res2.length; i++){
  label.push(res2[i].S);
  color.push(res2[i].C);
  inf.push(res2[i].V);


}  
//console.log(res2)
grafica(label,color,inf);
tabla(res2);
});

}


function grafica(l,c,i){

  const data = {
    labels: l,
    datasets: [{
      label: 'Votos',
      backgroundColor: c,
      borderColor: 'rgb(105, 226, 247)',
      data: i,
    }]
    };

    const config = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart'
          }
        }
      },
    };

  const my = new Chart(
    document.getElementById('my'),
    config
  );

}

function tabla(r){
  var lb = [];
  var pr = [];
  var vo = [];
//  console.log(r);
//  var tbodyUser = document.getElementById('tbodyUser');
//  tbodyUser.innerHTML = '';



   let creartabla = function(lista){
    let Tabla = "<tr><th>Organizaciones Politicas</th><th>ㅤㅤㅤㅤㅤㅤ</th> <th>Votos</th><th>ㅤㅤㅤㅤ</th> <th>%</th></tr>"
    for (let r of lista) {
      
      let fila = "<tr> <td>"
      
      fila += r.S
      fila += "</td>"

      fila += "<td>"
      fila += "</td>"

      fila += "<td>"
      fila += r.V
      fila += "</td>"

      fila += "<td>"
      fila += "</td>"

      fila += "<td>"
      fila += r.P
      fila += "</td>"

      Tabla += fila;
    //  console.log(Tabla);
    }
return Tabla;
  }
document.getElementById("table").innerHTML = creartabla(r);

  
}

