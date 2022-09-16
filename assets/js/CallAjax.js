var v = 2;
var f =5;
function lista(){
  const url = fetch("https://votosgt.azurewebsites.net/api/votos?d=0&m=0&te=1")
  url.then(response => response.json())
  .then(data => { 
  console.log(data)
  const obj = JSON.parse(data);
// console.log(obj.FECHAHORA)
 //console.log(obj.VOTOS)
 obj.forEach(function(index){
console.log(index );
});
  }
) 



//console.log(lista2())




};



function buscar(){
  var label = [];
  var color = [];
  var inf = [];
  $.ajax({
    url: "https://votosgt.azurewebsites.net/api/votos?d=0&m=0&te=1"
  }).done(function(data){
    var res = JSON.parse(data);
    var res2 = res.VOTOS;
   // console.log(res2);
for(let i = 0; i < res2.length; i++){
  label.push(res2[i].S);
  color.push(res2[i].C);
  inf.push(res2[i].V);
}   
});


//console.log(label);

//alert(label)

const data = {
labels: label,
datasets: [{
  label: 'Votos',
  backgroundColor: color,
  borderColor: 'rgb(255, 99, 132)',
  data: inf,

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

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);



}