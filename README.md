# ๐ ๋ด์ผ์ ์ง

- ์ค๋์ ์ง ํด๋ก  ์ฝ๋ฉ. (๊ฐ์ข)
- ์ฌ์ฉํ ๊ธฐ์  : html, scss, vanilla javascript

## ๐๋ฐฐ์ด ๊ฒ๋ค

- scss ์ ๊ธฐ๋ณธ ์ฌ์ฉ๋ฒ ๋ฐ ๋ฌธ๋ฒ
- ์ปดํฌ๋ํธ๋ณ๋ก ์์ํ๊ธฐ
- figma ๋ณด๊ณ  ๊ทธ๋๋ก ์์ํ๊ธฐ
- Semantic Markup
- ์๋ฏธ์๋ commit
- tiny-slider.js
- javascript - scroll event
- stylelint

<br/>

## ๐๊ฒฐ๊ณผ๋ฌผ

- Mobile

<img src="./assets/images/mobile-cap.gif"></img>

- Desktop

<img src="./assets/images/desktop-cap.gif"></img>

- URL: **https://daehwan2.github.io/tomorrow-house/**

<br/>
<br/>
<br/>

## ๐์ด์ฉ์์์ด ๋งํฌ์์ ๋ฐ๋ก ํ ๊ฒฝ์ฐ ์ ๋ฆฌ

<br/>

### 1.GNB

- ๋ก๊ทธ์ธ์ ํ์ง ์์ ๊ฒฝ์ฐ

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="๊ฒ์์ฐฝ ์ด๊ธฐ ๋ฒํผ"
  >
    <i class="ic-search"></i>
  </button>
  <a
    class="gnb-icon-button is-cart"
    href="/"
    aria-label="์ฅ๋ฐ๊ตฌ๋ ํ์ด์ง๋ก ์ด๋"
  >
    <i class="ic-cart"></i>
    <strong class="badge">5</strong>
  </a>
  <div class="gnb-auth sm-hidden">
    <a href="">๋ก๊ทธ์ธ</a>
    <a href="">ํ์๊ฐ์</a>
  </div>
</div>
```

- ๋ก๊ทธ์ธ์ ํ์ ๊ฒฝ์ฐ

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="๊ฒ์์ฐฝ ์ด๊ธฐ ๋ฒํผ"
  >
    <i class="ic-search"></i>
  </button>
  <a
    href="/"
    class="gnb-icon-button sm-hidden"
    aria-label="์คํฌ๋ฉ๋ถ ํ์ด์ง์ผ๋ก ์ด๋"
  >
    <i class="ic-bookmark"></i>
  </a>

  <a
    href="/"
    class="gnb-icon-button sm-hidden"
    aria-label="๋ด์์ ํ์ด์ง์ผ๋ก ์ด๋"
  >
    <i class="ic-bell"></i>
  </a>

  <a
    class="gnb-icon-button is-cart"
    href="/"
    aria-label="์ฅ๋ฐ๊ตฌ๋ ํ์ด์ง๋ก ์ด๋"
  >
    <i class="ic-cart"></i>
    <strong class="badge">5</strong>
  </a>

  <button
    class="gnb-avatar-button sm-hidden"
    type="button"
    aria-label="๋ง์ด๋ฉ๋ด ๋ฒํผ"
  >
    <div class="avatar-32">
      <img src="./assets/images/img-user-01.jpg" alt="์ฌ๋ฌ๋ผ ์์ ์จ" />
    </div>
  </button>
</div>
```

### 2. Sidebar

- ๋ก๊ทธ์ธ์ ํ์ง ์์ ๊ฒฝ์ฐ

```html
<div class="sidebar-auth">
  <a class="btn-outlined btn-40" href="/">๋ก๊ทธ์ธ</a>
  <a class="btn-primary btn-40" href="/">ํ์๊ฐ์</a>
</div>
```

- ๋ก๊ทธ์ธ์ ํ์ ๊ฒฝ์ฐ

```html
<div class="sidebar-user">
  <a href="/">
    <div class="avatar-24">
      <img src="./assets/images/img-user-01.jpg" alt="์ฌ๋ฌ๋ผ ์์ ์จ" />
    </div>
    <strong class="username">์ฌ๋ฌ๋ผ</strong>
  </a>
</div>
```

### 3. Product-Review

- ๋ฆฌ๋ทฐ๊ฐ 0๊ฐ์ผ ๊ฒฝ์ฐ

```html
<section
  class="product-section product-review"
  id="product-review"
  role="tabpanel"
>
  <header class="product-section-header">
    <div>
      <h1 class="title">๋ฆฌ๋ทฐ</h1>
      <strong class="badge" aria-label="0๊ฐ">0</strong>
    </div>
    <a class="text-button" href="/">๋ฆฌ๋ทฐ์ฐ๊ธฐ</a>
  </header>

  <div class="product-section-content">
    <p class="review-empty">
      ์ฒซ ๋ฆฌ๋ทฐ๋ฅผ ๋จ๊ฒจ์ฃผ์ธ์!<br />
      ์ต๋ <strong>500P</strong>๋ฅผ ๋๋ฆฝ๋๋ค.
    </p>
  </div>
</section>
<div class="product-section-divider sm-only" aria-hidden></div>
```

### 4. Product-inquiry

- ๋ฌธ์๊ฐ 0๊ฐ์ผ ๊ฒฝ์ฐ

```html
<section
  class="product-section product-inquiry is-open"
  id="product-inquiry"
  role="tabpanel"
>
  <header class="product-section-header">
    <div>
      <h1 class="title">๋ฌธ์</h1>
      <strong class="badge" aria-label="0๊ฐ">0</strong>
    </div>
    <a class="text-button" href="/">๋ฌธ์ํ๊ธฐ</a>
    <button class="icon-button sm-only" type="button" aria-label="๋๋ณด๊ธฐ">
      <i class="ic-chevron" aria-hidden></i>
    </button>
  </header>

  <div class="product-section-content">
    <p class="inquiry-empty">๋ฌธ์ ๋ด์ญ์ด ์์ต๋๋ค.</p>
  </div>
</section>
<div class="product-section-divider sm-only" aria-hidden></div>
```

### 5. Bookmark-Toast

- ๋ถ๋งํฌ์ ์ถ๊ฐํ์๋

```html
<aside class="bookmark-toast">
  <h1 class="bookmark-title">์คํฌ๋ฉํ์ต๋๋ค</h1>

  <button class="close-button" type="button" aria-label="๋ซ๊ธฐ">
    <i class="ic-close" aria-hidden></i>
  </button>

  <div class="button-group">
    <a class="btn-32 btn-outlined" href="/">์คํฌ๋ฉ๋ถ ๋ณด๊ธฐ</a>
    <button class="btn-32 btn-primary" type="button">ํด๋์ ๋ด๊ธฐ</button>
  </div>
</aside>
```

- ๋ถ๋งํฌ์์ ์ญ์ ํ์๋

```html
<aside class="bookmark-toast">
  <h1 class="bookmark-title">์คํฌ๋ฉ์์ ์ญ์ ํ์ต๋๋ค</h1>

  <button class="close-button" type="button" aria-label="๋ซ๊ธฐ">
    <i class="ic-close" aria-hidden></i>
  </button>
</aside>
```
