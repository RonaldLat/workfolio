<script>
export let affiliateUrl
</script>

<a href={affiliateUrl} target=”_blank” >
<button class="rounded  px-4 py-2  border border-yellow-400 bg-gradient-to-b from-yellow-300 to-yellow-500">
<slot>Buy Now</slot>
</button>
</a>

<button class="hidden rounded w-1/2 px-2 py-3 border border-yellow-700 bg-gradient-to-b from-yellow-500 to-yellow-600">
<a href={affiliateUrl}>Buy Now</a>
</button>
