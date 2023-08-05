<script>
	let online = '100 ' + 'игроков';
	import SocialsBlock from './_lib/socialsBlock.svelte';
	import Carousel from './_lib/image-carousel/carousel.svelte';
</script>

<!--First Block-->
<div class="w-full relative">
	<img src="./firstBlock/object1.png" alt="object1" class="blur-1px image-render-pixel left-0 absolute select-none" />
	<img src="./firstBlock/object2.png" alt="object2" class="blur-1px image-render-pixel right-0 absolute select-none" />
	<div class="flex flex-row justify-center items-center h-730px bg-gradation-200">
		<div class="flex flex-col w-1040px h-730px bg-gradation-100">
			<img
				src="./firstBlock/object3.png"
				alt="object3"
				class="blur-4px image-render-pixel top-396px right-[68%] absolute select-none"
			/>
			<img
				src="./firstBlock/object4.png"
				alt="object4"
				class="blur-4px image-render-pixel top-423px left-[68%] absolute select-none"
			/>
			<img src="./firstBlock/Cloud.png" alt="cloud" class="top-450px left-0 right-0 w-screen h-360px absolute" />
			<div class="flex flex-col items-center z-1">
				<div class="h-xxl" />
				<div class="desktop-h1 uppercase text-center">
					divine - RPG проект<br />с множеством миров боссов и орудий
				</div>
				<div class="h-s" />
				<div class="desktop-bigtext text-center">Начни играть уже сейчас!</div>
				<div class="h-m" />
				<div class="flex flex-row space-x-16px">
					<button class="btn-secondary w-176px h-56px">
						<a href="https://divine-store.hcs.land/">Личный кабинет</a>
					</button>
					<button class="btn-primary w-223px h-56px flex flex-row items-center justify-center space-x-4px">
						<img src="./firstBlock/buttons/windowIcon.svg" alt="windowIcon" class="w-20px h-20px" />
						<a href="https://download.hcs.land/installer.exe">Установить лаунчер</a>
					</button>
				</div>
			</div>
		</div>
	</div>

	<!--Online block-->
	<div class="flex flex-row bg-gradation-100 justify-around items-center h-236px">
		<div class="desktop-h3 text-gradation-600 uppercase">Онлайн:</div>
		<div class="flex flex-row space-x-16px">
			<div class="btn-primary w-56px h-56px flex items-center justify-center">
				<img src="./onlineBlock/peopleIcon.svg" alt="peopleIcon" class="w-21px h-21px" />
			</div>
			<div class="desktop-h3 text-maincolor-300 uppercase">{online}</div>
		</div>
	</div>

	<!--Image slider block-->
	<div class="bg-gradation-100 px-96px">
		<div class="flex flex-col items-center bg-gradation-200">
			<div class="h-xl" />
			<div class="desktop-h2 text-gradation-600 uppercase">12 уникальных миров</div>
			<div class="h-s" />
			<div class="desktop-bigtext text-gradation-500 px-208px text-center">
				На DIVINE RPG вы сможете посетить 12 уникальных миров, в которых вы столкнетесь с самыми<br /> различными
				испытаниями. В каждом мире вы сможете сразиться с уникальными боссами, найти новые<br /> ресурсы и использовать их
				для создания различного оружия и брони.
			</div>
			<div class="h-m" />
			<Carousel />
			<div class="h-l" />
			<button class="btn-primary w-223px h-56px flex flex-row items-center justify-center space-x-4px">
				<img src="./firstBlock/buttons/windowIcon.svg" alt="windowIcon" class="w-20px h-20px" />
				<a href="https://download.hcs.land/installer.exe">Установить лаунчер</a>
			</button>
			<div class="h-xl" />
		</div>
	</div>

	<!--Promo Block-->
	<div class="h-xxl" />
	<div class="flex flex-row items-center justify-center pl-96px">
		<div class="flex flex-col w-676px h-120px">
			<div class="desktop-h3 text-gradation-600 uppercase">Опробуй уникальную боевую систему</div>
			<div class="h-xs" />
			<div class="desktop-bodytext">
				Для крафта доступно более чем 10 000 единиц снаряжения, многие из которых обладают уникальной механикой и
				позволяют использовать бесконечное множество стратегий при сражении с боссами или с другими игроками.
			</div>
			<div class="h-m" />
		</div>
		<img src="pic1.png" alt="pic1" class="w-520px h-440px" />
	</div>
	<div class="h-xxl" />
	<div class="flex flex-row items-center justify-center pl-96px">
		<img src="pic2.png" alt="pic2" class="w-520px h-440px" />
		<div class="flex flex-col w-676px h-120px">
			<div class="desktop-h3 text-gradation-600 uppercase">Ощутимый прогресс и вознаграждения</div>
			<div class="h-xs" />
			<div class="desktop-bodytext">
				На нашем проекте реализована система прокачки, регулярно поощеряющая полезные действия, ни один моб не умрет без
				предназначения! Вы сможете получать опыт и использовать его для прокачки обмундирования и умений, что позволит
				вам сражаться за более редкие и ценные ресурсы.
			</div>
			<div class="h-m" />
		</div>
	</div>
	<div class="h-xxl" />

	<!--Socials block-->
	<div class="flex flex-col items-center bg-gradation-200">
		<div class="h-xl" />
		<div class="flex flex-row space-x-24px">
			<SocialsBlock logo="/socials/vkLogo.svg" name="вк группа" link="https://social.hcs.land/divinerpg" />
			<SocialsBlock logo="/socials/discordLogo.svg" name="Discord сервер" link="https://social.hcs.land/discord" />
		</div>
		<div class="h-xl" />
	</div>

	<!--SecondPromo Block-->
	<img
		src="promoObject1.png"
		alt="promoObject1"
		class="image-render-pixel z-1 left-0 top-3319px absolute select-none"
	/>
	<img
		src="promoObject2.png"
		alt="promoObject2"
		class="image-render-pixel z-1 right-0 top-3700px absolute select-none"
	/>
	<div class="flex flex-col items-center justify-center bg-gradation-100">
		<div class="h-xxl" />
		<div class="desktop-h2 text-gradation-600 uppercase">Начни свое путешествие!</div>
		<div class="h-xs" />
		<div class="desktop-bodytext text-gradation-400">Доступно на Windows, Linux и MacOS</div>
		<div class="h-m" />
		<button class="btn-primary w-177px h-48px flex flex-row items-center justify-center space-x-4px">
			<img src="./firstBlock/buttons/windowIcon.svg" alt="windowIcon" class="w-20px h-20px" />
			<a href="https://download.hcs.land/installer.exe">Скачать лаунчер</a>
		</button>
		<div class="h-xxl" />
	</div>
	<div class="h-xl" />

	<!--Footer-->
	<div class="flex flex-col bg-gradation-200 w-full h-418px pl-96px pr-96px">
		<div class="h-128px" />
		<div class="flex flex-row justify-center">
			<div class="text-gradation-4">
				<div class="desktop-bodytext text-gradation-400">Мы принимаем к оплате:</div>
				<div class="h-16px" />

				<!--First block-->
				<div class="flex flex-col space-y-8px">
					<div class="flex flex-row space-x-10px">
						<div class="flex w-408px h-48px rounded-4px bg-gradation-100">
							<img src="/footer/paymentIcons/Mir.svg" alt="Mir" class="w-42px h-12px m-auto" />
						</div>

						<div class="flex w-408px h-48px rounded-4px bg-gradation-100">
							<img src="/footer/paymentIcons/visa.svg" alt="Visa" class="w-37px h-12px m-auto" />
						</div>

						<div class="flex w-408px h-48px rounded-4px bg-gradation-100">
							<img src="/footer/paymentIcons/mastercard.svg" alt="Mastercard" class="w-96px h-16px m-auto" />
						</div>
					</div>

					<!--Second block-->
					<div class="flex flex-row space-x-10px">
						<div class="flex w-408px h-48px rounded-4px bg-gradation-100">
							<img src="/footer/paymentIcons/Webmoney.svg" alt="webmoney" class="w-80px h-18px m-auto" />
						</div>

						<div class="flex w-408px h-48px rounded-4px bg-gradation-100">
							<img src="/footer/paymentIcons/Youmoney.svg" alt="youmoney" class="w-62px h-14px m-auto" />
						</div>

						<div class="flex w-408px h-48px rounded-4px bg-gradation-100">
							<img src="/footer/paymentIcons/Union.svg" alt="Unitpay" class="w-48px h-14px m-auto" />
						</div>
					</div>
					<div class="h-40px" />
					<div class="flex flex-row w-full space-x-24px">
						<!--Footer logo's-->
						<div class="flex flex-row space-x-12px">
							<button class="btn-primary w-48px h-48px">
								<a href="https://social.hcs.land/divinerpg">
									<img src="/footer/socials/vk.svg" alt="vkBtn" class="w-18px h-12px m-auto" />
								</a>
							</button>
							<button class="btn-primary w-48px h-48px">
								<a href="https://social.hcs.land/discord">
									<img src="/footer/socials/discord.svg" alt="discordBtn" class="w-18px h-14px m-auto" />
								</a>
							</button>
						</div>

						<!--Save to life text-->
						<div class="flex flex-col justify-center desktop-bodytext not-italic">
							<div class="text-gradation-400">
								При возникновении вопросов обращайтесь в <a href="https://support.hcs.land/" class="text-maincolor-300"
									>поддержку</a
								>
								или на почту <a href="mailto:admin@hcs.land" class="text-maincolor-300">admin@hcs.land</a>
								<br />
							</div>
							<div class="desktop-bodytext text-gradation-400">
								ИП Шатаев Д.Ю. ОГРНИП: 318507400061890, ИНН: 503018579081
							</div>
							<div class="desktop-bodytext text-gradation-400">
								WORLDWIDE: PT PMA WASHLY LOVES YOU, 087776704392, JL. BYPASS NGURAH RAI NO.888 XX, DENPASAR, BALI
							</div>
						</div>
					</div>
					<div class="h-96px" />
				</div>
			</div>
		</div>
	</div>
</div>
