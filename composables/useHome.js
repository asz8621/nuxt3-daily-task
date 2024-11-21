// API 路徑 : https://nuxr3.zeabur.app/api/v1/home/news/
// 使用 ES6 fetch() 或是 axios.get() 串接 API
// 切換 isLoading 狀態

export const useHome = () => {
	const newsData = ref([]);
	const isLoading = ref(true);

	const getNews = async () => {
		try {
			const res = await fetch('https://nuxr3.zeabur.app/api/v1/home/news');
			if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
			const data = await res.json();
			newsData.value = data.result;
			console.log(newsData.value);
		} catch (err) {
			console.error(err);
		} finally {
			isLoading.value = false;
		}
	};

	return { newsData, isLoading, getNews };
};

