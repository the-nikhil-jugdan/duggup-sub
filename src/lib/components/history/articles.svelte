<script>
	import * as Card from '$lib/components/ui/card';

	export let articles;
</script>

<div class="flex gap-12 relative">
	<div class="border-4 border-primary bg-white absolute top-1/2"
			 style="height: 16px; width: 16px; border-radius: 8px; left: -69px;"></div>
	<span class="text-gray text-sm absolute top-1/2 mt-0" style="left: -160px">{articles.since}</span>
	{#each articles.articles as art (art.heading)}
		<Card.Root class="w-50">
			<Card.Header class="p-0" style="border-radius: 12px 12px 0 0;">
				<img alt="Article" src="{art.banner}" style="border-radius: 12px 12px 0 0;" />
			</Card.Header>
			<Card.Footer>
				<p class="text-sm text-black mt-4">
					{art.heading}
				</p>
			</Card.Footer>
		</Card.Root>
	{/each}
</div>
