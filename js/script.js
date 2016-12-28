var document = document;

function getRandomInRange() {
  return Math.floor(Math.random() * (0 - 2 + 1));
}

function Start () {
	var red = '#FF0000', blue = '#0000FF', green = '#00FF00', color = [red, blue, green];
	
	var min = 0, max = 2;
	var CurrentColor = document.createElement('div');
	CurrentColor.id = 'CurrentColorBox';
	CurrentColor.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
	var table2 = document.createElement('table');
	table2.id = 'CurrentTable';
	var tr_2 = document.createElement('tr');
	var td_2 = document.createElement('td');
	td_2.appendChild(CurrentColor);
	tr_2.appendChild(td_2);
	table2.appendChild(tr_2);

	
	var startB = document.getElementById('StartB');
	var destination = document.getElementById("Area");
	var table = document.createElement('table');
	table.id = 'tableGame';
	table.setAttribute('align', 'center');

	var tr1 = document.createElement('tr');
	var tr2 = document.createElement('tr');
	var tr3 = document.createElement('tr');
	var td1 = document.createElement('td');
	var td2 = document.createElement('td');
	var td3 = document.createElement('td');
	var td4 = document.createElement('td');
	var td5 = document.createElement('td');
	var td6 = document.createElement('td');
	var td7 = document.createElement('td');
	var td8 = document.createElement('td');
	var td9 = document.createElement('td');

	var box1 = document.createElement('div');
	box1.id ="GameBox";
	box1.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
	td1.appendChild(box1);
	tr1.appendChild(td1);
	table.appendChild(tr1);
	var box2 = document.createElement('div');
	box2.id ="GameBox";
	box2.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
	td2.appendChild(box2);
	tr1.appendChild(td2);
	table.appendChild(tr1);
	var box3 = document.createElement('div');
	box3.id ="GameBox";
	box3.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
	td3.appendChild(box3);
	tr1.appendChild(td3);
	table.appendChild(tr1);
	var box4 = document.createElement('div');
	box4.id ="GameBox";
	box4.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
	td4.appendChild(box4);
	tr2.appendChild(td4);
	table.appendChild(tr2);
	var box5 = document.createElement('div');
	box5.id ="GameBox";
	box5.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
	td5.appendChild(box5);
	tr2.appendChild(td5);
	table.appendChild(tr2);	
	var box6 = document.createElement('div');
	box6.id ="GameBox"
	box6.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
	td6.appendChild(box6);
	tr2.appendChild(td6);
	table.appendChild(tr2);
	var box7 = document.createElement('div');
	box7.id ="GameBox"
	box7.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
	td7.appendChild(box7);
	tr3.appendChild(td7);
	table.appendChild(tr3);
	var box8 = document.createElement('div');
	box8.id ="GameBox"
	box8.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
	td8.appendChild(box8);
	tr3.appendChild(td8);
	table.appendChild(tr3);
	var box9 = document.createElement('div');
	box9.id ="GameBox"
	box9.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
	td9.appendChild(box9);
	tr3.appendChild(td9);
	table.appendChild(tr3);
	destination.appendChild(table);
	destination.removeChild(startB);
	destination.appendChild(table2);
	}

function get_random_color () {
	var letters = '0123456789ABCDEF'.split('');
    var color = "#";
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}