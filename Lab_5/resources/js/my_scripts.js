/*
	players is an array to hold each player's information.
	Fields:
		name - Football player's name
		img  - The relative/absolute path to the image file.
		alt  - The alternative text that describes the image.
		year - The student's year in college (Freshman, Sophomore, Junior, Senior).
		major- The student's current college major.
		games_played    - The number of football games the student has played for the Buffs.
		pass_yards      - The total number of passing yards in the student's football career for the Buffs.
		rushing_yards   - The total number of rushing yards in the student's football career for the Buffs.
		receiving_yards - The total number of receiving yards in the student's football career for the Buffs.
*/
var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];



//	Registration Page:
	function viewStudentStats(id, toggle)
	{
		if(toggle==1)
		{
			document.getElementById(id).style.visibility = "visible";
			document.getElementById(id).style.height="auto";
		}
		else
		{
			document.getElementById(id).style.visibility = "hidden";
			document.getElementById(id).style.height="0px";
		}
	}

		/*
			parameters:
				id - The css id of the html tag being updated.
				toggle -
					0 - hide the html tag
					1 - make the html tag visible

		/*	purpose: This method will accept the id of an html tag and a toggle value.
					 The method will then set the html tag's css visibility and height.
					 To hide the html tag (toggle - 0), the visibility will be set to hidden and
					 the height will be set to 0.
					 To reveal the html tag (toggle - 1), the visibility will be set to visible and
					 the height will be set to auto.

*/
function changeColor(color)
{
	document.body.style.backgroundColor = color;
}

function loadStatsPage()
{
	var wins=0;
	var losses=0;
	let table = document.getElementById("stats_table");
	let table2 = document.getElementById("table");
	//let rows = table.getElementByTagName("tr");
	for(var i=2; i<table.rows.length;i++)
	{
		var x = document.getElementById("stats_table").rows[i].cells[2].innerHTML;
		var a=  document.getElementById("stats_table").rows[i].cells[1].innerHTML;
		var y = document.getElementById("stats_table").rows[i].cells[3].innerHTML;
		if (parseInt(x) < parseInt(y)) //cu loses
		{
			document.getElementById("stats_table").rows[i].cells[4].innerHTML=a;
			losses++;
		}
		else
		{
			document.getElementById("stats_table").rows[i].cells[4].innerHTML="CU Football";
			wins++;
		}
	}
	document.getElementById("wins").innerHTML=wins;
	document.getElementById("losses").innerHTML=losses;
}

function loadPlayersPage()
{
	var atag="";
	for(var i=0; i<players.length; i++)
	{
		atag += "<a style='display:block;' 'href='#' onclick='switchPlayers("+i+")'>" + players[i].name + "</a>\n";
	}
	document.getElementById("player_selector").innerHTML = atag;
}


function switchPlayers(playerNum)
{
	var x=0
	var y=0
	var z=0
	var p_year = players[playerNum]["year"];
	console.log('here');
	document.getElementById("p_year").innerHTML = p_year;

	var p_major = players[playerNum]["major"];
	document.getElementById("p_major").innerHTML=p_major;

	var p_gamesplayed= players[playerNum]["games_played"];
	document.getElementById("g_played").innerHTML=p_gamesplayed;

	var p_rushingyds=players[playerNum]["rushing_yards"]
	document.getElementById("r_yards").innerHTML=p_rushingyds;

	var p_passingyds=players[playerNum]["pass_yards"]
	document.getElementById("p_yards").innerHTML=p_passingyds;

	var p_recievingyds=players[playerNum]["receiving_yards"]
	document.getElementById("rec_yards").innerHTML=p_recievingyds;

	x=p_recievingyds/p_gamesplayed
	document.getElementById("avg_rec_yards").innerHTML=x

	y=p_passingyds/p_gamesplayed
	document.getElementById("avg_p_yards").innerHTML=y

	z=p_rushingyds/p_gamesplayed
	document.getElementById("avg_r_yards").innerHTML=z



}
/*
		switchPlayers(playerNum) method:
			parameters:
				playerNum - The index of the football player in the players array.

			purpose:
				This method will update the the spans on the player's information pageX
				and calculate the average passing, rushing, and receiving yards.

				Span ids:
					p_year     - the player's year in college
					p_major    - the player's major in college
					g_played   - the number of games played for Buffs
					player_img - the player's photo (must set src and alt)
					p_yards    - the number of passing yards
					r_yards    - the number of rushing yards
					rec_yards  - the number of receiving yards

					Calculated values:
					  avg_p_yards   - the average number of passing yards for the player's Buff career
					  avg_r_yards   - the average number of rushing yards for the player's Buff career
					  avg_rec_yards - the average number of receiving yards for the player's Buff career
*/
