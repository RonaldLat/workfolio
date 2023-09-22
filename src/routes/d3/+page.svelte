<!-- BarChart.svelte -->
<script>
  import { onMount } from 'svelte';
  import * as d3 from "d3";


  // Data for the bar chart (you can replace this with your own data)
  let data = [10, 20, 30, 40, 50];

  // Select the container element
  let container;

  onMount(() => {
    // Set up the SVG canvas
    const svg = d3.select(container)
      .append('svg')
      .attr('width', 400)
      .attr('height', 200);

    // Create and render the bars
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 60)
      .attr('y', (d) => 200 - d)
      .attr('width', 40)
      .attr('height', (d) => d)
      .attr('fill', 'teal');
  });
</script>

<h2>D3</h2>
<div bind:this={container} class="chart-container"></div>

<style>
  /* Add styling for the chart container if needed */
  .chart-container {
    text-align: center;
  }
</style>

