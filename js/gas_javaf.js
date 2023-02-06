function Output_to_gas()
{
	document.getElementById('startes').innerHTML = "保存中";
	var text = '';
	var output = [];
	
	output[0] = data;
	output[1] = note;
	output[2] = his;
	output[3][0][0] = document.getElementById('forum').value;
	
	
	let DataJSON = JSON.stringify(output); 
	google.script.run.withSuccessHandler(showStartes).write_ss(DataJSON);
	
	//for(var i = 0; i < data.length; i++)
	//{
	//	for(var j = 0; j < data[i].length; j++)
	//	{
	//			text += data[i][j] + ',';
	//	}
	//	text += '\n';
	//}
	
	//text += '***';//データ区切り

	//for(var i = 0; i < note.length; i++)
	//{
	//	text += note[i] + ',' + '\n';
	//}
	
	//text += '***';//データ区切り
	
	//for(var i = 0; i < his.length; i++)
	//{
	//	text += his[i] + ',' + '\n';
	//}
	
	//text += '***';//データ区切り
	
	//text += document.getElementById('forum').value.replace(/\r?\n/g, '<br>') + ',' + '\n';
	
	//google.script.run.withSuccessHandler(showStartes).write_ss(text);
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
	document.getElementById('startes').innerHTML = "読込完了２";
}
