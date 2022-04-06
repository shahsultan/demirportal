/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      -
 * @created_by  -
 * @created_at  -
 * @modified_by -
 */

$(document).ready(function () {
	// chart-1 init
	$(function () {
		let options = {
			series: [200, 140],
			chart: {
				type: 'donut',
				width: 150,
			},
			dataLabels: {
				enabled: false,
			},
			tooltip: {
				enabled: false,
			},
			plotOptions: {
				pie: {
					customScale: 1,
					donut: {
						size: '80%',
						labels: {
							show: true,
							name: {
								show: false,
							},
							value: {
								show: true,
								fontWeight: 500,
								fontSize: '16px',
								offsetY: 6,
								formatter: function (val) {
									$('#donut-result').text(val + ' kg');
									return val + 'kg';
								},
							},
						},
					},
				},
			},
			colors: ['#5D6DCA', '#FF783B'],
			legend: false,
		};
		let chart = new ApexCharts(document.querySelector('#chart-1'), options);
		chart.render();
	});

	// chart-2 init
	$(function () {
		let options = {
			series: [45, 55],
			chart: {
				type: 'donut',
				width: 200,
			},
			dataLabels: {
				enabled: false,
			},
			tooltip: {
				enabled: false,
			},
			plotOptions: {
				pie: {
					startAngle: -90,
					endAngle: 90,
					offsetY: 0,
					donut: {
						size: '80%',
						labels: {
							show: true,
							name: {
								show: false,
							},
							value: {
								show: true,
								fontWeight: 500,
								fontSize: '14px',
								offsetY: -8,
								formatter: function (val) {
									return 'Target:' + val + '%';
								},
							},
						},
					},
				},
			},
			grid: {
				padding: {
					bottom: -80,
				},
			},
			colors: ['#FF783B', '#5D6DCA'],
			legend: false,
		};
		let chart = new ApexCharts(document.querySelector('#chart-2'), options);
		chart.render();
	});

	// chart-3 init
	$(function () {
		let options = {
			series: [
				{
					name: 'B',
					data: [50, 40, 30, 20, 90, 100, 50],
				},
			],
			fill: {
				colors: ['#3E4CA5'],
			},
			chart: {
				type: 'bar',
				height: '110px',
				stacked: true,
				toolbar: {
					show: false,
				},
				zoom: {
					enabled: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			xaxis: {
				labels: {
					show: false,
				},
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
			},
			yaxis: {
				labels: {
					show: false,
				},
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '28px',
					borderRadius: 6,
					colors: {
						ranges: [
							{
								from: 0,
								to: 0,
								color: undefined,
							},
						],
						backgroundBarColors: ['#7887E4'],
						backgroundBarOpacity: 1,
						backgroundBarRadius: 4,
					},
				},
			},
			legend: {
				show: false,
			},
			grid: {
				show: false,
			},
		};

		let chart = new ApexCharts(document.querySelector('#chart-3'), options);
		chart.render();
	});

	// chart-4 init
	$(function () {
		var options = {
			series: [{
				name: "STOCK ABC",
				data: [0, 50, 50, 80, 60, 200, 180, 80, 80,]
			}],
			chart: {
				type: 'area',
				height: 150,
				width: 160,
				toolbar: {
					show: false,
				},
				zoom: {
					enabled: false
				}
			},
			dataLabels: {
				enabled: false
			},
			fill: {
				type: "gradient",
				gradient: {
					opacityFrom: .5,
					opacityTo: .1,
					inverseColors: false,
				}
			},
			stroke: {
				curve: 'straight',
				width: 2,
			},
			xaxis: {
				labels: {
					show: false
				},
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
				crosshairs: {
					show: false,
				},
			},
			yaxis: {
				show: false
			},
			legend: {
				show: false,
			},
			grid: {
				show: false,
			},
		};

		var chart = new ApexCharts(document.querySelector("#chart-4"), options);
		chart.render();
	});


	// chart-5 init
	$(function () {
		var options = {
			series: [
				{
					name: 'A',
					data: [250, 300, 200],
				},
				{
					name: 'B',
					data: [250, 0, 350],
				},
				{
					name: 'C',
					data: [250, 0, 0],
				},
				{
					name: 'D',
					data: [150, 0, 0],
				},
			],
			fill: {
				colors: ['#2B3781', '#3E4CA5', '#5D6DCA', '#7887E4'],
			},
			chart: {
				type: 'bar',
				height: '420px',
				stacked: true,
				toolbar: {
					show: false,
				},
				zoom: {
					enabled: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			xaxis: {
				type: 'category',
				categories: [['ASSETS' , '(835,000.00)'], ['EXPENSE' , '(62,400.000)'], ['DEBTS' , '(512,000.00)']],
				labels: {
					show: true,
					style: {
						colors: [],
						fontSize: '12px',
						fontFamily: 'Inter, sans-serif',
						fontWeight: 600,
					},
				},
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: [],
						fontSize: '12px',
						fontFamily: 'Inter, sans-serif',
						fontWeight: 600,
					},
					formatter: (value) => { return value + 'K' },
				},
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '30px',
					barHeight: '100%',
					borderRadius: 6,
				},
			},
			legend: {
				show: false,
			},
			grid: {
				show: true,
			},
		};

		let chart = new ApexCharts(document.querySelector('#chart-5'), options);
		chart.render();
	});
});
