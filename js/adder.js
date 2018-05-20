
// var articleDiv = document.getElementById('one');
// // создаем элемент
// var elem = document.createElement("h2");
// // создаем для него текст
// var elemText = document.createTextNode("Привет мир");
// // добавляем текст в элемент в качестве дочернего элемента
// elem.appendChild(elemText);
// // добавляем элемент в блок div
// articleDiv.appendChild(elem);





var common = document.getElementById('prtone');
var down = document.getElementById('down');

var newcell = document.createElement('div');
var newcell = document.createElement('div');
var btn = document.getElementById('nazhim');

(function()
{
var ourRequest= new XMLHttpRequest();

ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');



ourRequest.onload=function () {

  var ourData =JSON.parse(ourRequest.responseText);

  getText(ourData);

};

ourRequest.onerror = function() {
  console.log("Connection error");
}

ourRequest.send();

})()


function getText(data)

{



for (i = 0; i < data.length; i++)
{
  var htmlString = data[i].name;
  var htmlString2 = data[i].species;
  var newraw_i = document.createElement('div');
  var newrardown_i = document.createElement('div');
  common.insertBefore(newraw_i,down);
  common.appendChild(newrardown_i);
  newraw_i.classList.add('row','rabbit');
  newrardown_i.classList.add('row','rabbit2');

  var newcell_0=document.createElement('div');
  newcell_0.textContent = " ";
  newraw_i.appendChild(newcell_0);
  newcell_0.classList.add('cell','mobhide');
  newcell_0.setAttribute('data-title', "ну допустим");

  var newcell_1=document.createElement('div');
  newcell_1.textContent = htmlString2;
  newraw_i.appendChild(newcell_1);
  newcell_1.classList.add('cell');

  var newcell_2=document.createElement('div');
  newcell_2.textContent = htmlString;
  newraw_i.appendChild(newcell_2);
  newcell_2.classList.add('cell');

  var newcell_3=document.createElement('div');
  newcell_3.textContent = htmlString;
  newraw_i.appendChild(newcell_3);
  newcell_3.classList.add('cell');


  var newcell_4=document.createElement('div');
  newcell_4.textContent = htmlString;
  newraw_i.appendChild(newcell_4);
  newcell_4.classList.add('cell','bottomline');

  var newcell_5=document.createElement('div');
  newcell_5.textContent = " ";
  newraw_i.appendChild(newcell_5);
  newcell_5.classList.add('cell','mobhide');

  var newcell_6=document.createElement('div');
  newcell_6.textContent = " ";
  newraw_i.appendChild(newcell_6);
  newcell_6.classList.add('cell','mobhide');



  var newcell_0=document.createElement('div');
  newcell_0.textContent = " ";
  newrardown_i.appendChild(newcell_0);
  newcell_0.classList.add('cell','mobhide','botleftborder');
  newcell_0.setAttribute('data-title', "ну допустим");

  var newcell_1=document.createElement('div');
  newcell_1.textContent = htmlString2;
  newrardown_i.appendChild(newcell_1);
  newcell_1.classList.add('cell');

  var newcell_2=document.createElement('div');
  newcell_2.textContent = htmlString;
  newrardown_i.appendChild(newcell_2);
  newcell_2.classList.add('cell');

  var newcell_3=document.createElement('div');
  newcell_3.textContent = htmlString;
  newrardown_i.appendChild(newcell_3);
  newcell_3.classList.add('cell');


  var newcell_4=document.createElement('div');
  newcell_4.textContent = htmlString;
  newrardown_i.appendChild(newcell_4);
  newcell_4.classList.add('cell','bottomline');

  var newcell_5=document.createElement('div');
  newcell_5.textContent = "livecoin";
  newrardown_i.appendChild(newcell_5);
  newcell_5.classList.add('cell');

  var newcell_6=document.createElement('div');
  newcell_6.textContent = " ";
  newrardown_i.appendChild(newcell_6);
  newcell_6.classList.add('cell','mobhide','botrightborder');


}
}




// newraw.appendChild(newcell_2);
// newcell_2.classList.add('cell');
// newcell_2.classList.add('newrar');
