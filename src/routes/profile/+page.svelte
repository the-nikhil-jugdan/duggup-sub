<script>
	import Navbar from '$lib/components/navbar';
	import Profile from '$lib/components/profile';
	import History from '$lib/components/history';

	export let data;
</script>

<div class="w-full h-full px-16 xl:px-20 overflow-x-hidden" style="background: #FCFCFF">
	<Navbar profile={data} />
	<Profile profile={data} />
	<History profile={data} />
</div>