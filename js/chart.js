var chart;
		var legend;

		var chartData = [{
				country: "Python",
			  value: 1110
			},
			{
				country: "Bootstrap",
				value: 700
		  },
			//{
			//	country: "JavaScript",
				//value: 550
			//},
			//{
				//country: "PHP",
				//value: 600
			//},
			{
				country: "NodeJs",
				value: 1300
			},
			{
				country: "PHP",
				value: 1220
			}
		];

		AmCharts.ready(function () {
			// PIE CHART
			chart = new AmCharts.AmPieChart();
			chart.dataProvider = chartData;
			chart.titleField = "country";
			chart.valueField = "value";
			chart.outlineColor = "";
			chart.outlineAlpha = 0.8;
			chart.outlineThickness = 2;
			// this makes the chart 3D
			chart.depth3D = 20;
			chart.angle = 30;

			// WRITE
			chart.write("chartdiv");
		});