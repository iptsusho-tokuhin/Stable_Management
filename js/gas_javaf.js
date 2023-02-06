function Output_to_gas()
{
	document.getElementById('startes').innerHTML = "保存中";
	var text = '';
	var output;
	
	output[0] = data;
	output[1] = note;
	output[2] = his;
	
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
	
	set_data();
	export_table();
	main.scrollLeft = 3000;
	road_history();
	set_select();
	document.getElementById('forum').value = forum;
	document.getElementById('startes').innerHTML = "読込完了";
	
	
	
	
	
	//動作試験
	//var arr1 = text.split('***');
	//var arr2 = [];
	//var arr3 = [];
	//for(var i = 0; i < arr1.length; i++)
	//{
	//	arr2[i] = arr1[i].split('\n');
	//	arr2[i].pop();//各最後の行はごみデータになるので削除
	//}
	
	//for(var i = 0; i < arr2.length; i++)
	//{
	//	arr3[i] = [];
	//	for(var j = 0; j < arr2[i].length; j++)
	//	{
	//		arr3[i][j] = arr2[i][j].split(',');
	//		arr3[i][j].pop();//各最後の行はごみデータになるので削除
	//	}
	//}
	
	//data = arr3[0];
	//for(var i = 0; i < arr3[1].length; i++){note[i] = arr3[1][i][0];}
	//for(var i = 0; i < arr3[2].length; i++){his[i] = arr3[2][i][0];}
	//forum = arr3[3][0][0].replace(/<br>/g, "\n");
}
