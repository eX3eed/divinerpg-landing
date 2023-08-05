<script>
	export let images = ['/carousel/example1.png','/carousel/example2.png', '/carousel/example3.png'];
    let index = 0;

    function plus() {
        index++;
    }

    function minus(){
        index--;
    }
</script>

<div class="flex flex-row space-x-40px">
	<div class="flex flex-col space-y-40px items-end">
		<div><img src={images.at((index-1)%images.length)} alt="example1" class="w-328px h-186px" /></div>
		<!--ButtonLeft-->
		<button class="flex items-center justify-center btn-secondary bg-gradation-100 w-56px h-56px rounded-2px" on:click={minus}>
			<img src="/carousel/buttonLeft.svg" alt="buttonLeft" class="w-20px h-20px" />
        </button>
	</div>

    <div class="flex flex-col pt-40px">
	    <div><img src={images.at((index%images.length))} alt="example2" class="w-624px h-353px" /></div>
    </div>

	<div class="flex flex-col space-y-40px">
		<div><img src={images.at((index+1)%images.length)} alt="example3" class="w-328px h-186px" /></div>
		<!--ButtonRight-->
		<button class="flex items-center justify-center btn-secondary bg-gradation-100 w-56px h-56px rounded-2px" on:click={plus}>
			<img src="/carousel/buttonRight.svg" alt="buttonRight" class="w-20px h-20px" />
        </button>
	</div>
</div>
