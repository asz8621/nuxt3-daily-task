<script setup>
const route = useRoute();
const router = useRouter();
const roomsList = ref([]);
const apiUrl = 'https://nuxr3.zeabur.app/api/v1/rooms';

// useAsyncData
const { data: roomsData } = await useAsyncData('rooms', async () => {
	try {
		const data = await $fetch(apiUrl);
		const { result } = data;
		return result;
	} catch (error) {
		console.error('發生錯誤:', error);
	}
});

if (roomsData.value) {
	roomsList.value = roomsData.value;
}

// // useFetch
// const { data: roomsData } = await useFetch('/rooms', {
// 	baseURL: 'https://nuxr3.zeabur.app/api/v1',
// 	transform: (response) => {
// 		const { result } = response;
// 		return result;
// 	},
// 	onResponseError({ response }) {
// 		const { message } = response._data;
// 		console.error('Error:', message);
// 		router.push('/');
// 	},
// });

// if (roomsData.value) {
// 	roomsList.value = roomsData.value;
// }

// // fetch
// fetch(apiUrl)
// 	.then((res) => {
// 		if (!res.ok) {
// 			throw new Error('取得房型資料失敗');
// 		}
// 		return res.json();
// 	})
// 	.then((data) => {
// 		const { result } = data;
// 		roomsList.value = result;
// 	})
// 	.catch((error) => {
// 		console.error('發生錯誤:', error);
// 	});
</script>

<template>
	<div>
		<h2>房型 index {{ route.fullPath }}</h2>
		<div class="container mt-4">
			<div class="row justify-content-center gy-3">
				<div
					v-for="room in roomsList"
					:key="room._id"
					class="col-8 col-md-6 col-lg-3"
				>
					<div
						class="card h-100 shadow-sm"
						@click="router.push(`/room/${room._id}`)"
					>
						<img :src="room.imageUrl" class="card-img-top" alt="Room Image" />
						<div class="card-body d-flex flex-column">
							<h3 class="card-title">{{ room.name }}</h3>
							<p class="card-text flex-grow-1">{{ room.description }}</p>
							<ul class="list-unstyled">
								<li><strong>面積:</strong> {{ room.areaInfo }}</li>
								<li><strong>床型:</strong> {{ room.bedInfo }}</li>
								<li><strong>最大容納人數:</strong> {{ room.maxPeople }}</li>
								<li><strong>價格:</strong> {{ room.price }}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card-img-top {
	object-fit: cover;
	height: 200px;
	max-width: 100%;
}
</style>

