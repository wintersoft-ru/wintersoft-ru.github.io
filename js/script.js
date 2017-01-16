var doc = document;
var red = '#FF0000', blue = '#0000FF', green = '#00FF00', color = [red, blue, green];
var min = 0, max = 2;
var CurrentColor, box1, box2, box3, box4, box5, box6, box7, box8, box9, score, scoreInt, scoreT;

(function () {

	var Timer = function () {
		//alert('Timer 1 sec');
	}
	setTimeout(Timer, 1000);

}
)();

function Start () {
	CurrentColor = document.createElement('div');
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

	box1 = document.createElement('div');
	box1.id ="GameBox";
	box1.setAttribute('onclick', 'ScoreCheck()');
	box1.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
	td1.appendChild(box1);
	tr1.appendChild(td1);
	table.appendChild(tr1);
	box2 = document.createElement('div');
	box2.id ="GameBox";
	box2.setAttribute('onclick', 'ScoreCheck()');
	box2.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
	td2.appendChild(box2);
	tr1.appendChild(td2);
	table.appendChild(tr1);
	box3 = document.createElement('div');
	box3.id ="GameBox";
	box3.setAttribute('onclick', 'ScoreCheck()');
	box3.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
	td3.appendChild(box3);
	tr1.appendChild(td3);
	table.appendChild(tr1);
	box4 = document.createElement('div');
	box4.id ="GameBox";
	box4.setAttribute('onclick', 'ScoreCheck()');
	box4.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
	td4.appendChild(box4);
	tr2.appendChild(td4);
	table.appendChild(tr2);
	box5 = document.createElement('div');
	box5.id ="GameBox";
	box5.setAttribute('onclick', 'ScoreCheck()');
	box5.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
	td5.appendChild(box5);
	tr2.appendChild(td5);
	table.appendChild(tr2);	
	box6 = document.createElement('div');
	box6.id ="GameBox";
	box6.setAttribute('onclick', 'ScoreCheck()');
	box6.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
	td6.appendChild(box6);
	tr2.appendChild(td6);
	table.appendChild(tr2);
	box7 = document.createElement('div');
	box7.id ="GameBox";
	box7.setAttribute('onclick', 'ScoreCheck()');
	box7.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
	td7.appendChild(box7);
	tr3.appendChild(td7);
	table.appendChild(tr3);
	box8 = document.createElement('div');
	box8.id ="GameBox";
	box8.setAttribute('onclick', 'ScoreCheck()');
	box8.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
	td8.appendChild(box8);
	tr3.appendChild(td8);
	table.appendChild(tr3);
	box9 = document.createElement('div');
	box9.id ="GameBox";
	box9.setAttribute('onclick', 'ScoreCheck()');
	box9.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
	td9.appendChild(box9);
	tr3.appendChild(td9);
	table.appendChild(tr3);
	destination.appendChild(table);
	destination.removeChild(startB);
	destination.appendChild(table2);

	score = document.createElement('h1'); scoreInt = 0, scoreT = document.createTextNode('Score: '+ scoreInt);
	score.id = 'dest';
	score.appendChild(scoreT);
	destination.insertBefore(score, table);
}

function ScoreUp ()
{
	scoreInt +=1;
			score.removeChild(scoreT);
			scoreT = document.createTextNode('Score: '+ scoreInt);
			score.appendChild(scoreT);
			console.log(scoreInt);
}

function ScoreCheck () {

	if(box1.onclick)  
	{
		if (box1.style.backgroundColor == CurrentColor.style.backgroundColor)
			{
			box1.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
			CurrentColor.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
			ScoreUp();
			}	
	}
	if(box2.onclick)  
	{
		if (box2.style.backgroundColor == CurrentColor.style.backgroundColor)
			{
			box2.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
			CurrentColor.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
			ScoreUp();
			}	
	}
	if(box3.onclick)  
	{
		if (box3.style.backgroundColor == CurrentColor.style.backgroundColor)
			{
			box3.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
			CurrentColor.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
			ScoreUp();
			}	
	}
	if(box4.onclick)  
	{
		if (box4.style.backgroundColor == CurrentColor.style.backgroundColor)
			{
			box4.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
			CurrentColor.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
			ScoreUp();
			}	
	}
	if(box5.onclick)  
	{
		if (box5.style.backgroundColor == CurrentColor.style.backgroundColor)
			{
			box5.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
			CurrentColor.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
			ScoreUp();
			}	
	}
	if(box6.onclick)  
	{
		if (box6.style.backgroundColor == CurrentColor.style.backgroundColor)
			{
			box6.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
			CurrentColor.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
			ScoreUp();
			}	
	}
	if(box7.onclick)  
	{
		if (box7.style.backgroundColor == CurrentColor.style.backgroundColor)
			{
			box7.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
			CurrentColor.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
			ScoreUp();
			}	
	}
	if(box8.onclick)  
	{
		if (box8.style.backgroundColor == CurrentColor.style.backgroundColor)
			{
			box8.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
			CurrentColor.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
			ScoreUp();
			}	
	}
	if(box9.onclick)  
	{
		if (box9.style.backgroundColor == CurrentColor.style.backgroundColor)
			{
			box9.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
			CurrentColor.style.backgroundColor = color[Math.round(Math.random() * (max - min))];
			ScoreUp();
			}	
	}
}