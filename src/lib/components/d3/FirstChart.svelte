<script>
	import * as d3 from 'd3';

	let wrapper;
	async function drawLineChart() {
		let dataset = await d3.json(
			'https://kamalabot.github.io/json_data_repo/company_progress_db/location_data.json'
		);
		// const dataset = await d3.json('https://kamalabot.github.io/json_data_repo/glass_door_DSci_datasets/gd_salary_data_cleaned.json')
		dataset = dataset['location_data'];
		// console.table(dataset[0])

		//Accessor functions
		const yAccessor = (d) => d.location_sales;
		const xAccessor = (d) => d.location;

		let dimensions = {
			width: 600,
			height: 400,
			margin: {
				top: 15,
				right: 15,
				bottom: 40,
				left: 60
			}
		};

		d3.select(wrapper)
			.append('svg')
			.attr('width', dimensions.width)
			.attr('height', dimensions.height);
		console.log(wrapper);

		const bounds = wrapper
			.append('g')
			.style('transform', `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`);
	}

	//drawLineChart();
	$: console.log(wrapper);
</script>

<p class="text-gray-800">first chart</p>
<div bind:this={wrapper} />
