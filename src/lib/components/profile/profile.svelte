<script>
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';

	export let profile;
</script>

<div class="flex gap-12 items-center px-12 lg:px-20 xl:px-24 2xl:px-36 max-w-7xl mt-20">
	<div>
		<Avatar.Root class="ml-4 border-2 flex flex-col justify-center items-center"
								 style="height: 120px; width: 120px; border-color: #EAEFF5">
			<Avatar.Image alt="@shadcn" src="{profile.profileImage}" />
			<Avatar.Fallback>NJ</Avatar.Fallback>
		</Avatar.Root>
		<p class="text-center w-full text-secondary font-bold text-2xl">
			{profile.name}
		</p>
	</div>
	<div>
		<p class="text-sm text-black">
			{profile.about.bio}
		</p>
		<Button class="mt-8 hover:bg-primary hover:text-white hover:border-primary primary-dark"
						variant="ctaButton">Followed
		</Button>
	</div>
	<div class="flex flex-col items-end gap-0" style="width: 30%;">
		<img alt="Duggup Logo" src="/assets/duggup-logo.svg" style="height: 36px; width: 36px;" />
		<span class="text-black font-bold">{profile.about.company}</span>
		<span class="text-gray text-sm">{profile.about.position}</span>
	</div>
</div>
