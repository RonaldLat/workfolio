<script>
import * as d3 from 'd3';

export let salaries
salaries = salaries['gd_salary_data_cleaned'].slice(0,20)



const population = [
	 { country: "China", population: 1439324 },
    { country: "India", population: 1380004 },
    { country: "United States of America", population: 331003 },
    { country: "Indonesia", population: 273524 },
    { country: "Pakistan", population: 220892 },
    { country: "Brazil", population: 212559 },
    { country: "Nigeria", population: 206140 },
    { country: "Bangladesh", population: 164689 },
    { country: "Russian Federation", population: 145934 },
    { country: "Mexico", population: 128933 },
];

console.table(salaries[0])

const width = 800
const height = 600
const margin = { top: 20, right: 20, bottom: 20, left: 180 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

 $: xDomain = salaries.map((d) => d.Location);
  $: yDomain = salaries.map((d) => +d.founded);

  $: yScale = d3.scaleBand().domain(xDomain).range([0, innerHeight]).padding(0.1);
  $: xScale = d3.scaleLinear()
    .domain([0, Math.max.apply(null, yDomain)])
    .range([0, innerWidth]);
</script>

<svg {width} {height}>
  <g transform={`translate(${margin.left},${margin.top})`}>
    {#each xScale.ticks() as tickValue}
      <g transform={`translate(${xScale(tickValue)},0)`}>
        <line y2={innerHeight} stroke="black" />
        <text text-anchor="middle" dy=".71em" y={innerHeight + 3}>
          {tickValue}
        </text>
      </g>
    {/each}
    {#each salaries as d}
      <text
        text-anchor="end"
        x="-3"
        dy=".32em"
        y={yScale(d.founded) + yScale.bandwidth() / 2}
        fill='red'
      >
        {d.Location}
      </text>
      <rect
        x="0"
        y={yScale(d.Location)}
        width={xScale(d.founded)}
        height={yScale.bandwidth()}
      />
    {/each}
  </g>
</svg>


<div class="wrap" id="wrap"> d3333</div>
