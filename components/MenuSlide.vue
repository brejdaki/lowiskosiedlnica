<script lang="ts" setup>
import { MenuItem } from '@/composables/InterfaceMenuItem';

const menuItem: MenuItem[] = [
	{
		label: 'Aktualności',
		link: ''
	}, {
		label: 'Kalendarz',
		link: ''
	},{
		label: 'Cennik',
		link: ''
	}, {
		label: 'Regulamin',
		link: ''
	}, {
		label: 'Oferta',
		link: ''
	}, {
		label: 'Kontakt',
		link: ''
	},
]

function handlePhoneCall (): void {
	document.location.href = 'tel:+48888660314'
}
</script>

<template>
	<div
		class="menu-slide"
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
				v-for="(item, index) in menuItem"
				:key="index"
				class="menu-slide__list-item font-sans text-size--largest"
			>
				<NuxtLink
					class="text-color--secondary"
					:to="item.link"
				>
					{{ item.label }}
				</NuxtLink>
			</li>
		</ul>

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
				<img 
					src="icons/phone.svg"
					loading="lazy"
					width="48"
					height="48"
				/>
			</div>

			<div
				class="menu-slide__call-desc text-size--basic"
			>
				Zadzwoń do właściciela
			</div>
			<div
				class="menu-slide__call-number text-size--large"
			>
				+48 888 660 314
			</div>
		</button>
	</div>
</template>

<style lang="scss" scoped>
.menu-slide {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 4rem;
	padding: 1rem 1.5rem;
	background-color: var(--c-white);
	z-index: var(--z-fixed);
	box-shadow: var(--b-shadow-menu) 0 0 1.5rem 0.25rem;

	&__title {
		color: var(--c-black-alpha);
	}

	&__list {
		margin-bottom: 2rem;

		&-item {
			&:not(:last-child) {
				margin-bottom: 1rem;

				@media screen and (height: 30rem) {
					margin-bottom: .75rem;
				}
			}

			a {
				@include hover-underline(var(--c-secondary))
			}

			@media screen and (height: 30rem) {
				font-size: 1.25rem;
			}
		}
	}

	&__facebook {
		position: absolute;
		bottom: 6.75rem;

		@media screen and (height: 30rem) {
			padding: 0 1rem 0 0;

			:deep(img) {
				transform: scale(.9)
			}
		}
	}

	&__call {
		@include reset-button;
		position: absolute;
		display: grid;
		grid-template-columns: 48px 1fr;
		grid-template-areas: 
			"icon description"
			"icon number";
		grid-column-gap: 1rem;
		grid-row-gap: 0;
		right: 0;
		bottom: 0;
		left: 0;
		padding: 1rem;
		background-color: var(--c-black-alpha);

		&-icon {
			grid-area: icon;

			img {
				top: .125rem;
    		position: relative;

				@media screen and (height: 30rem) {
					transform: scale(.9);
					top: 0;
				}

				@media screen and (height: 41.125rem) and (width: 20rem) {
					transform: scale(.9);
					top: 0;
				}
			}
		}

		&-desc {
			grid-area: description;

			@media screen and (height: 30rem) {
				font-size: 0.85rem;
			}

			@media screen and (height: 41.125rem) and (width: 20rem) {
				font-size: 0.85rem;
			}
		}

		&-number {
			grid-area: number;

			@media screen and (height: 30rem) {
				font-size: 1.25rem;
			}

			@media screen and (height: 41.125rem) and (width: 20rem) {
				font-size: 1.25rem;
			}
		}

		&-desc,
		&-number {
			text-align: left;
		}
	}
}
</style>