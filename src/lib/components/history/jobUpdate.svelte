<script>
	import * as Card from '$lib/components/ui/card';

	export let jobUpdate;
</script>
<div class="w-full relative">
	<img alt="Arrow Up" class="absolute top-0" src="/assets/arrow-up.svg" style="left: -69px" />
	<div class="border-8 border-primary bg-white absolute"
			 style="height:28px; width: 28px; border-radius: 14px; left: -75px; top: 40%;"></div>
	<div class="flex flex-col items-end gap-0 absolute h-full justify-center" style="left: -240px">
		<img alt="Duggup Logo" src="/assets/duggup-logo.svg" style="height: 48px; width: 48px;" />
		<span class="text-black font-bold">{jobUpdate.company.name}</span>
		<span class="text-gray text-sm">{jobUpdate.company.location}</span>
		<span class="text-gray text-sm">Joined</span>
		<span class="text-gray text-sm">{jobUpdate.since}</span>
	</div>
	<Card.Root class="w-full">
		<Card.Header class="pb-0">
			<h2 class="font-bold text-xl">{jobUpdate.company.position}</h2>
		</Card.Header>
		<Card.Footer class="pt-0 mt-4">
			<span class="text-gray text-sm">{jobUpdate.company.time}</span>
		</Card.Footer>
	</Card.Root>
</div>
