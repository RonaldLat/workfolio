<script>
import * as d3 from 'd3';
import epl from '$lib/data/epl.js'
import AxisX from '$lib/components/d3/AxisX.svelte';
import AxisY from '$lib/components/d3/AxisY.svelte';

const year =11
let eplData = epl[year].table
const eplSeason = epl[year].season
console.table(eplData)


const width = 400
const height = 500

const margin = { top: 20, right: 20, bottom: 20, left: 0 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

 $: xDomain = eplData.map((d) => d.team);
//$: yDomain = eplData.map((d) => d.points);

const yAccessor = d => eplData.map((d)=>d.points)


  const yDomain =d3.max(eplData.map((d)=>d.points))
  let yScale = d3.scaleLinear()
    .domain([0, 102])
    .range([innerHeight, 0]);
  let xScale = d3.scaleLinear().domain([0,34]).range([0, innerWidth]);
  console.log(yDomain)

</script>

<h2 class="text-3xl text-emerald-600 text-bold text-center">{eplSeason} Season</h2>

<div class="my-auto w-full h-screen  border border-sky-800">
<svg {width} {height} class="bg-sky-50 border-pink-300 border p-3 m-auto">
  <AxisX {height} {xScale} {margin}/>
  <AxisY {height} {width} {yScale} {margin}/>
  <g transform="translate({margin.left} {margin.top})">
    {#each eplData as d}

      <circle
        class="fill-pink-500 stroke-black m-5"
        cx={xScale(d.draw)}
        cy={yScale(d.points)}
        r={'7'}
        data-p={d.points}
        data-g={d.goal_difference}
      />

    {/each}
  </g>
</svg>
</div>



