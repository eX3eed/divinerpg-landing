<script lang="ts">
	export let logo: string;
	export let name: string;
	export let text: string = '';
	export let link: string;
</script>

<div class="bg-gradation-100 rounded-8px border-1 border-solid border-gradation-100 w-400px">
	<a href={link} class="flex flex-col px-24px py-24px">
		<div class="flex flex-row items-center justify-between">
			<div class="flex flex-row items-center space-x-16px">
				<img src={logo} alt="vkLogo" class="w-24px h-24px" />
				<div class="desktop-h4 text-gradation-600 uppercase">{name}</div>
			</div>

			<img src="link.svg" alt="link" class="w-18px h-18px" />
		</div>
		{#if text}
			<div class="h-xs" />
			<div class="desktop-tabletext text-gradation-500">
				{text}
			</div>
		{/if}
	</a>
</div>
