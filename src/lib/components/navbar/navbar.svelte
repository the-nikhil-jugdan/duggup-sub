<script>
	import { Button } from '$lib/components/ui/button';
	import * as Avatar from '$lib/components/ui/avatar';

	export let profile;
</script>

<nav class="w-full flex items-center py-4 border-b border-dotted">
	<img alt="Duggup Logo" src="/assets/duggup.svg" />

	<Button class="flex gap-2 text-sm ml-auto" variant='navLink'>
		<img alt="Home Icon" src="/assets/home.svg" />
		Home
	</Button>

	<Button class="flex gap-2 text-sm" variant='navLink'>
		<img alt="Explore Icon" src="/assets/explore.svg" />
		Explore
	</Button>

	<Button class="flex gap-2 text-sm" variant='navLink'>
		<img alt="Learn Icon" src="/assets/learn.svg" />
		Learn
	</Button>

	<Button class="flex gap-2 text-sm" variant='ctaButton'>
		<img alt="Add Icon" src="/assets/add.svg" />
		Post
	</Button>

	<Button class="flex gap-2" variant="navLink">
		<Avatar.Root class="ml-4 border border-secondary">
			<Avatar.Image alt="@shadcn" src="{profile.profileImage}" />
			<Avatar.Fallback>NJ</Avatar.Fallback>
		</Avatar.Root>
		<span class="text-lg text-secondary">{profile.name}</span>
		<img alt="Open Menu" src="/assets/caret-down.svg" />
	</Button>
</nav>
