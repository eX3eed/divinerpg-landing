<script>
	import 'virtual:windi.css';
	import Header from './_lib/header/header.svelte';
</script>

<div class="flex flex-col min-w-1366px">
	<Header />
	<div class="h-80px" />
	<slot />
</div>

<style>
	@font-face {
		font-family: 'Inter';
		src: url('/fonts/Inter/Inter-Regular.ttf');
		font-weight: 400;
		text-rendering: optimizeLegibility;
	}

	@font-face {
		font-family: 'Raleway';
		src: url('/fonts/Raleway/Raleway-Regular.ttf');
		font-weight: 400;
		text-rendering: optimizeLegibility;
		font-feature-settings: 'pnum' on, 'lnum' on;
	}

	@font-face {
		font-family: 'Raleway';
		src: url('/fonts/Raleway/Raleway-Medium.ttf');
		font-weight: 500;
		text-rendering: optimizeLegibility;
		font-feature-settings: 'pnum' on, 'lnum' on;
	}

	@font-face {
		font-family: 'Raleway';
		src: url('/fonts/Raleway/Raleway-Bold.ttf');
		font-weight: 700;
		text-rendering: optimizeLegibility;
		font-feature-settings: 'pnum' on, 'lnum' on;
	}

	@font-face {
		font-family: 'Raleway';
		src: url('/fonts/Raleway/Raleway-ExtraBold.ttf');
		font-weight: 800;
		text-rendering: optimizeLegibility;
		font-feature-settings: 'pnum' on, 'lnum' on;
	}
</style>
