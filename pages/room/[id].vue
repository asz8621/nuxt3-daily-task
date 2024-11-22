<script setup>
const route = useRoute();
const router = useRouter();
const goBack = () => {
	router.go(-1);
};
</script>

<template>
	<h2>房型詳細頁面</h2>
	<p>{{ route.fullPath }}</p>
	<button type="button" class="btn btn-primary" @click="goBack">
		回上一頁
	</button>
</template>

<style scoped></style>

