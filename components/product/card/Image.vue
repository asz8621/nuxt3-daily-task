<script setup>
defineProps({
	src: String,
	alt: String,
});
</script>

<template>
	<div>
		<img :src="src" :alt="alt" class="img-fluid" />
	</div>
</template>

<style scoped></style>

