<script lang="ts" setup>
import { menuItem } from '@/composables/MenuItem';

function handlePhoneCall (): void {
	document.location.href = 'tel:+48888660314'
}
</script>

<template>
<div
	class="menu-slide"
>
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
				v-for="(item, index) in menuItem"
				:key="index"
				class="menu-slide__list-item font-sans"
			>
				<NuxtLink
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
				<img 
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
.menu-slide {
	position: fixed;
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	top: 0;
	left: 0;
	bottom: 0;
	padding: 1rem 1.5rem 0;
	background-color: var(--c-white);
	z-index: var(--z-fixed);
	box-shadow: var(--b-shadow-menu) 0 0 1.5rem 0.25rem;
	overflow-y: auto;

	&__title {
		color: var(--c-black-alpha);
	}

	&__list {
		margin-bottom: 3rem;

		&-item {
			font-size: 1.75rem;

			@media screen and (height: 30rem) {
				font-size: 1.25rem;
			}

			@media screen and (min-height: 48.75rem) {
				font-size: 2rem;
			}

			&:not(:last-child) {
				margin-bottom: 1rem;

				@media screen and (height: 30rem) {
					margin-bottom: .75rem;
				}

				@media screen and (min-height: 48.75rem) {
					margin-bottom: 1.5rem;
				}
			}

			a {
				@include hover-underline(var(--c-secondary))
			}
		}
	}

	&__facebook {
		margin-bottom: 1.5rem;

		@media screen and (height: 30rem) {
			padding: 0 1rem 0 0;

			:deep(img) {
				transform: scale(.9)
			}
		}
	}

	&__call {
		@include reset-button;
		display: grid;
		grid-template-columns: 2.25rem 1fr;
		grid-template-areas: 
			"icon description"
			"icon number";
		grid-column-gap: 1rem;
		grid-row-gap: 0;
		width: calc(100% + 3rem);
		align-items: center;
		margin: 0 -1.5rem;
		padding: 1rem 1.5rem;
		background-color: var(--c-black-alpha);

		&-icon {
			grid-area: icon;

			img {
    		position: relative;
			}
		}

		&-desc {
			grid-area: description;

			@media screen and (height: 30rem) {
				font-size: 0.85rem;
			}

			@media screen and (height: 40rem) and (width: 20rem) {
				font-size: 0.85rem;
			}
		}

		&-number {
			grid-area: number;
			font-size: 1.5rem;

			@media screen and (height: 30rem) {
				font-size: 1.25rem;
			}

			@media screen and (height: 40rem) and (width: 20rem) {
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
