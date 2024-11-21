<script setup>
defineProps({
	src: String,
	alt: String,
	title: String,
	price: String,
	text: String,
});
</script>

<template>
	<div class="productCard overflow-hidden border rounded">
		<ProductCardImage :src="src" :alt="alt" />
		<ProductCardTitle :title="title" />
		<ProductCardPrice :price="price" />
		<ProductCardButton :text="text" />
	</div>
</template>

<style lang="scss" scoped>
.productCard {
	max-width: 300px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease;
	&:hover {
		transform: translateY(-5px);
	}
}
</style>

