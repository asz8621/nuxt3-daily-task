<script setup></script>

<template>
	<div>
		<h1>Page: index</h1>

		<button type="button" class="btn btn-primary">Primary</button>
		<button type="button" class="btn btn-secondary">Secondary</button>
		<button type="button" class="btn btn-success">Success</button>
		<button type="button" class="btn btn-danger">Danger</button>
		<button type="button" class="btn btn-warning">Warning</button>
		<button type="button" class="btn btn-info">Info</button>
		<button type="button" class="btn btn-light">Light</button>
		<button type="button" class="btn btn-dark">Dark</button>
		<button type="button" class="btn btn-link">Link</button>
	</div>
</template>

<style scoped lang="scss">
$primary: #0f6df2;
h1 {
	color: $primary;
	margin-bottom: 20px;
	font-size: $fs-xl;
}
</style>

