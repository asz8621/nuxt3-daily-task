<script setup>
defineProps({
	text: String,
});
</script>

<template>
	<button class="rounded-0 rounded-bottom btn btn-primary w-100">
		{{ text }}
	</button>
</template>

<style scoped></style>

