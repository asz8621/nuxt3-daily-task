# Day 9 - $fetch 與 ofetch 題目

![題目示意圖](image.png)

請 clone 這一份[模板](https://github.com/jasonlu0525/nuxt3-live-question/tree/day9-nuxt3-fetch)，實作帳號註冊功能 :

- 在 `/pages/register.vue` 使用模板提供的操作介面填寫註冊表單。點擊 “註冊” 按鈕後使用 Nuxt3 提供的方法串接旅館的 [註冊 API](https://todolist-api.hexschool.io/doc/#/%E4%BD%BF%E7%94%A8%E8%80%85/post_users_sign_up) ，將請求送出。
- 需使用 try catch 處理請求成功與失敗的訊息，請求成功與失敗皆使用 [sweetAlert2 套件](https://sweetalert2.github.io/)顯示訊息。sweetAlert2 套件在模板已有安裝與引入，不需再額外設定。

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
