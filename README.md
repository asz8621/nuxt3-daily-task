# Day 6 - NuxtLink 與 路由基礎配置 題目

![image](https://hackmd.io/_uploads/r1uXtDnb1l.png)

請 fork 這一份 [模板](https://github.com/jasonlu0525/nuxt3-live-question/tree/day6-router)，完成以下條件 :

- 建立前台首頁 ( `index.vue` )  以及房型頁面  (`room.vue`) 。前台首頁對應的路由路徑為 `/`  ，房型頁面的路由路徑為`/room`。
- 頁面上只需呈現純文字。前台首頁顯示 "首頁頁面" ，房型頁面 顯示"房型頁面"

```html
<!-- 前台首頁 -->
<template>
 <h1>首頁頁面</h1>
</template>

<!-- /room 房型頁面 -->
<template>
  <h1>房型頁面</h1>
</template>
```

- 將 app.vue 預設的 `<NuxtWelcome />` 歡迎改成可以顯示頁面的內容 。
- 在 `layouts/default.vue` 的 Layout 中已有載入 Bootstrap5 SCSS 及 Navbar 元件。需在 `layouts/default.vue` 的 Navbar 加入 `<NuxtLink>` 元件，實現切換頁面的功能。
- 修改路由預設的 `linkActiveClass` 和 `linkExactActiveClass` ，使 `<NuxtLink>` 匹配到路由的時候可以套用 Bootstrap5 的 `.active` class 。

---

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
