new Chart(document.getElementById('horizontalbarChart'), {
	type: 'horizontalBar',
	data: {
		labels: ['AUT','BEL','CAN','FIN','FRA','GBR','NOR','SUI','SWE','USA'],
		datasets:[{
			label: 'Number of Medals',
			backgroundColor: ['#FF0000', '#800000', '#DC143C','#191970','#FF6347','#00BFFF','#FF8C00','#8B008B','#FFD700','#228B22'],
			data: [98,4,203,147,35,11,171,77,129,319]
		}]
	},

	options:{
		legend:{
			display: false
		}
		
		}
});

new Chart (document.getElementById('barChart'),{
	type: 'bar',
	data:{
		labels: ['AUT','BEL','CAN','FIN','FRA','GBR','NOR','SUI','SWE','USA'],
		datasets:[
		{
			label: 'Number of Medals',
			data: [103, 7, 107, 221, 81,34, 127, 132, 177, 167],
			backgroundColor: ['#FF0000', '#800000', '#DC143C','#191970','#FF6347','#00BFFF','#FF8C00','#8B008B','#FFD700','#228B22']
		}

		]
	},
	options: {
		legend: {
            display: false
		}
	}
});

new Chart (document.getElementById('pieChart'),{
	type: 'pie',
	data: {
		labels: ['AUT','BEL','CAN','FIN','FRA','GBR','NOR','SUI','SWE','USA'],
		datasets: [
            {
            	data:[79, 2, 315, 66, 36, 34, 159, 76, 127, 167],
            	backgroundColor: ['#FF0000', '#800000', '#DC143C','#191970','#FF6347','#00BFFF','#FF8C00','#8B008B','#FFD700','#228B22']
            }
		]

	},
	options: {
		title: {
			display: true
		}
	}
});

new Chart(document.getElementById('advancedChart'),{
	type: 'bar',
	data:{
		labels: ['1994','1998','2002','2006','2010','2014'],
		datasets: [
		{
			label:'Number of victories',
			data:[40,49,75,68,91,90],
			backgroundColor: ['rgb(0,0,205,0.2)',
			'rgb(0,0,205,0.2)',
			'rgb(0,0,205,0.2)',
			'rgb(0,0,205,0.2)',
			'rgb(0,0,205,0.2)',
			'rgb(0,0,205,0.2)'
			]
		},
		{
			label:'Femal athletes',
			type: 'line',
			fill:false,
			data: [10,33,38,47,44,44],
			borderColor:'#FA8072',
			backgroundColor:'#FA8072',
			borderWidth:1
		},
		{
		label:'Male athletes',
			type: 'line',
			fill:false,
			data: [30,16,38,21,47,46],
			borderColor:'#1E90FF',
			backgroundColor:'#1E90FF',
			borderWidth:1	
		}
		]
	}
});























