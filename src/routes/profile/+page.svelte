<script>
	import Navbar from '$lib/components/navbar';
	import Profile from '$lib/components/profile';
	import * as Card from '$lib/components/ui/card';

</script>

<div class="w-full h-full px-16 xl:px-20 overflow-x-hidden" style="background: #FCFCFF">
	<Navbar />
	<Profile />
	<div class="flex gap-12 items-center px-12 lg:px-20 xl:px-24 2xl:px-36 max-w-7xl mt-20 pb-20">
		<div class="h-full border-r-2 border-dotted">
			asdkfajsdf
		</div>
		<div class="flex-grow flex flex-col gap-12">
			<div class="flex gap-12">

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

			<Card.Root class="w-full">
				<Card.Header class="pb-0">
					<h2 class="font-bold text-xl">Co-Founder and CEO</h2>
				</Card.Header>
				<Card.Footer class="pt-0 mt-4">
					<span class="text-gray text-sm">Full-time · Remote</span>
				</Card.Footer>
			</Card.Root>

			<div class="flex gap-12">

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