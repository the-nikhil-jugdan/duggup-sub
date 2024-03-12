<script>
	import * as Card from '$lib/components/ui/card';
</script>
<div class="flex gap-12 items-center px-12 lg:px-20 xl:px-24 2xl:px-36 max-w-7xl mt-20 pb-20">
	<div class="flex-grow flex flex-col gap-12 border-l-2 h-full border-dotted"
			 style="padding-left: 60px; margin-left: 60px;">

		<div class="flex gap-12 relative">
			<div class="border-4 border-primary bg-white absolute top-1/2"
					 style="height: 16px; width: 16px; border-radius: 8px; left: -69px;"></div>
			<span class="text-gray text-sm absolute top-1/2 mt-0" style="left: -160px">Dec 2023</span>
			<Card.Root class="w-50">
				<Card.Header class="p-0" style="border-radius: 12px 12px 0 0;">
					<img alt="Article" src="/assets/steve-jobs.png" style="border-radius: 12px 12px 0 0;" />
				</Card.Header>
				<Card.Footer>
					<p class="text-sm text-black mt-4">
						No amount of technology can convert a bad story into a good story.
					</p>
				</Card.Footer>
			</Card.Root>
			<Card.Root class="w-50">
				<Card.Header class="p-0" style="border-radius: 12px 12px 0 0;">
					<img alt="Article" src="/assets/man.png" style="border-radius: 12px 12px 0 0;" />
				</Card.Header>
				<Card.Footer>
					<p class="text-sm text-black mt-4" style="max-height: 36px; overflow: hidden; text-overflow: ellipsis;">
						Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas.
					</p>
				</Card.Footer>
			</Card.Root>
		</div>

		<div class="w-full relative">
			<img alt="Arrow Up" class="absolute top-0" src="/assets/arrow-up.svg" style="left: -69px" />
			<div class="border-8 border-primary bg-white absolute"
					 style="height:28px; width: 28px; border-radius: 14px; left: -75px; top: 40%;"></div>
			<div class="flex flex-col items-end gap-0 absolute h-full justify-center" style="left: -240px">
				<img alt="Duggup Logo" src="/assets/duggup-logo.svg" style="height: 48px; width: 48px;" />
				<span class="text-black font-bold">Duggup</span>
				<span class="text-gray text-sm">San Francisco Bay Area</span>
				<span class="text-gray text-sm">Joined</span>
				<span class="text-gray text-sm">Nov 2023</span>
			</div>
			<Card.Root class="w-full">
				<Card.Header class="pb-0">
					<h2 class="font-bold text-xl">Co-Founder and CEO</h2>
				</Card.Header>
				<Card.Footer class="pt-0 mt-4">
					<span class="text-gray text-sm">Full-time · Remote</span>
				</Card.Footer>
			</Card.Root>
		</div>


		<div class="flex gap-12 relative">
			<div class="border-4 border-primary bg-white absolute top-1/2"
					 style="height: 16px; width: 16px; border-radius: 8px; left: -69px;"></div>
			<span class="text-gray text-sm absolute top-1/2 mt-0" style="left: -160px">Dec 2023</span>
			<Card.Root class="w-50">
				<Card.Header class="p-0" style="border-radius: 12px 12px 0 0;">
					<img alt="Article" src="/assets/desk.png" style="border-radius: 12px 12px 0 0;" />
				</Card.Header>
				<Card.Footer>
					<p class="text-sm text-black mt-4">
						Startup Lesson I am reflecting. Don't build for the "average person".
					</p>
				</Card.Footer>
			</Card.Root>
			<Card.Root class="w-50">
				<Card.Header class="p-0" style="border-radius: 12px 12px 0 0;">
					<img alt="Article" src="/assets/map.png" style="border-radius: 12px 12px 0 0;" />
				</Card.Header>
				<Card.Footer>
					<p class="text-sm text-black mt-4" style="max-height: 36px; overflow: hidden; text-overflow: ellipsis;">
						Your biggest regrets at 80 will be acts of omission.
					</p>
				</Card.Footer>
			</Card.Root>
		</div>


		<div class="w-full relative">
			<img alt="Arrow Up" class="absolute top-0" src="/assets/arrow-up.svg" style="left: -69px" />
			<div class="border-8 border-primary bg-white absolute"
					 style="height:28px; width: 28px; border-radius: 14px; left: -75px; top: 40%;"></div>
			<div class="flex flex-col items-end gap-0 absolute h-full justify-center" style="left: -240px">
				<img alt="Duggup Logo" src="/assets/oneup.png" style="height: 48px; width:48px;" />
				<span class="text-black font-bold">Betterup</span>
				<span class="text-gray text-sm">San Francisco Bay Area</span>
				<span class="text-gray text-sm">Joined</span>
				<span class="text-gray text-sm">Nov 2023</span>
			</div>
			<Card.Root class="w-full">
				<Card.Header class="pb-0">
					<h2 class="font-bold text-xl">VP Engineering</h2>
				</Card.Header>
				<Card.Footer class="pt-0 mt-4">
					<span class="text-gray text-sm">Full-time</span>
				</Card.Footer>
			</Card.Root>
		</div>


	</div>
</div>
