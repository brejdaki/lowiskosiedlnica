<script lang="ts" setup>
import { useMainStore } from '@/stores/main'
import { Hash } from '@/composables/enum/hash'

const store = useMainStore()
const router = useRouter()

function handleClose(): void {
	router.push({ hash: Hash.empty })
	store.setModalVisible(false)
}
</script>

<template>
  <div class="modal">
		<div class="modal__header">
			<ButtonClose 
				class="modal__close"
				@clicked="handleClose"
			/>
		</div>
		
		<div class="modal__content">
			<slot />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/components/ModalBase';
</style>