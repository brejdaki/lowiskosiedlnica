<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/main'
import { NavbarMenuItems } from '@/composables/NavbarMenuItems';
import { Hash } from '@/composables/enum/hash'

const store = useMainStore()
const router = useRouter()
const user = useStrapiUser()

const { 
  isMenuLayerOverflowVisible
} = storeToRefs(useMainStore()) 

function handleAccountMenu (): void {
	store.setMenuOverflowLayerVisible(!isMenuLayerOverflowVisible.value)
}

function handleMenuItem (): void {
  store.setMobileMenuVisible(false)
}

async function handleLogin (): Promise<void> {
	await router.push({ hash: Hash.login })
  store.setModalVisible(true)
}

// async function handleAccount (): Promise<void> {
// 	await router.push('/account')
//   store.setModalVisible(false)
// }

function handlePhoneCall (): void {
	document.location.href = 'tel:+48888660314'
}
</script>

<template>
<div
	class="menu-slide"
>
	<button
		v-if="!user"
		class="menu-slide__user"
		@click="handleLogin"
	>
		Zaloguj się
	</button>
	
	<button
		v-else
		class="menu-slide__user"
		@click="handleAccountMenu"
	>
		<div>
			Cześć {{ user.name }}
			<small>Moje konto</small>
		</div>

		<NuxtImg 
			:class="[
				'menu-slide__user-icon',
				{ 'menu-slide__user-icon--active' : isMenuLayerOverflowVisible }
			]"
			src="/icons/chevron.svg"
			width="24"
			height="24"
		/>
	</button>

	<Transition name="slide">
		<AccountMenu 
			v-if="user && isMenuLayerOverflowVisible"
		/>
	</Transition>

	<Transition name="fade">
		<LayerOverflowMenu
			v-if="user && isMenuLayerOverflowVisible"
		/>
	</Transition>

	<div
		class="menu-slide__top"
	>
		<h3
			class="menu-slide__title"
		>
			Menu
		</h3>

		<ul 
			class="menu-slide__list"
		>
			<li
				v-for="(item, index) in NavbarMenuItems"
				:key="index"
				class="menu-slide__list-item font-sans"
			>
				<NuxtLink
					no-rel
					@click="handleMenuItem"
					class="text-color--secondary"
					:to="item.link"
				>
					{{ item.label }}
				</NuxtLink>
			</li>
		</ul>
	</div>

	<div
		class="menu-slide__bottom"
	>
		<LinkFacebook 
			class="menu-slide__facebook"
		/>

		<button
			class="menu-slide__call text-color--white"
			@click="handlePhoneCall"
		>
			<div
				class="menu-slide__call-icon"
			>
				<NuxtImg 
					src="/icons/phone.svg"
					loading="lazy"
					width="36"
					height="36"
					alt="Ikona telefonu"
				/>
			</div>

			<div
				class="menu-slide__call-desc"
			>
				Zadzwoń do gospodarza
			</div>
			<div
				class="menu-slide__call-number"
			>
				+48 888 660 314
			</div>
		</button>
	</div>
</div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/components/MenuSlide';
</style>
