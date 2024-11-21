<script setup>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const { newsData, isLoading, getNews } = useHome();

onMounted(() => {
	getNews();
});
</script>

<template>
	<div class="container">
		<h1>最新消息</h1>

		<NewsCard
			v-for="item in newsData"
			:key="item._id"
			:title="item.title"
			:image="item.image"
			:description="item.description"
			:createdAt="item.createdAt"
			:updatedAt="item.updatedAt"
		/>

		<ClientOnly>
			<Loading v-model:active="isLoading" />
		</ClientOnly>
	</div>
</template>

<style scoped>
.container {
	max-width: 1000px;
	margin: 0 auto;
}
</style>

