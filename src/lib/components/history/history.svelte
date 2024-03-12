<script>
	import * as Card from '$lib/components/ui/card';
	import Article from './articles.svelte';
	import JobUpdate from './jobUpdate.svelte';

	export let profile;
	$: history = profile?.history;
</script>
<div class="flex gap-12 items-center px-12 lg:px-20 xl:px-24 2xl:px-36 max-w-7xl mt-20 pb-20">
	<div class="flex-grow flex flex-col gap-12 border-l-2 h-full border-dotted"
			 style="padding-left: 60px; margin-left: 60px;">

		{#if history}
			{#each history as his (his.id)}
				{#if his.type === 'articles'}
					<Article articles={his} />
				{:else if his.type === 'job_update' }
					<JobUpdate jobUpdate={his} />
				{/if}
			{/each}
		{/if}

	</div>
</div>
