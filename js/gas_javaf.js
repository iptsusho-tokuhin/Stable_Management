function Output_to_gas()
{
	document.getElementById('startes').innerHTML = "保存中";
	var output = [];
	
	output[0] = data;
	output[1] = note;
	output[2] = his;
	output[3] = [];
	output[3][0] = [];
	output[3][0][0] = document.getElementById('forum').value.replace(/\n/g, '<br>');

	let DataJSON = JSON.stringify(output);
	google.script.run.withSuccessHandler(showStartes).write_ss(DataJSON);
}

function showStartes(returnString)
{
	document.getElementById('startes').innerHTML = returnString;
}

function Intput_from_gas()
{
	document.getElementById('startes').innerHTML = "読込中";
	google.script.run.withSuccessHandler(output_to_html).read_ss();
}

function output_to_html(DataJSON)
{
	var input = JSON.parse(DataJSON);
	data = input[0];
	note = input[1];
	his = input[2];
	forum = input[3][0][0].replace(/<br>/g, "\n");
	
	set_data();
	export_table();
	main.scrollLeft = 3000;
	road_history();
	set_select();
	document.getElementById('forum').value = forum;
	document.getElementById('startes').innerHTML = "読込完了";
}
