---
title: Angular에서 Tailwind CSS 사용하기 (deprecated)
date: 2020-07-14 17:43:03
category: angular
thumbnail: { thumbnailSrc }
draft: false
---

> Angular에서 TailwindCSS를 공식적으로 지원하게 되면서 아래의 일련의 과정을 진행할 필요가 없게 되었습니다. TailwindCSS 관련 최신 게시글을 참고하세요.

회사에서 Tailwind CSS를 도입하게 되면서, Tailwind CSS에 대해서 알아보기로 하였다.

## Angular 프로젝트에 Tailwind CSS 도입하기

너무 감사하게도 `ng eject`로 Webpack 설정을 바꾸지 않고, Angular 프로젝트에 Tailwind CSS를 도입할 수 있는 `ng-tailwindcss`라는 좋은 CLI가 있다.

### 설치 방법

1.  `npm i ng-tailwindcss -g` : 글로벌에 Angular 프로젝트에 Tailwind CSS를 도입할 수 있도록 도와주는 `ng-tailwindcss`를 설치한다.

2.  `npm i tailwindcss -D` : 해당 프로젝트에 `tailwindcss` 라이브러리를 추가한다.

3.  `npx tailwind init` : Tailwind CSS를 프로젝트에서 사용할 수 있도록 초기 파일을 생성한다.

4.  `ngtx configure` : `ng-tailwindcss`가 해당 프로젝트의 Tailwind CSS를 관리할 수 있도록 하는 설정 파일을 생성한다.

5.  `touch src/tailwind.scss` : Tailwind CSS는 이 파일에 있는 Utility들을 프로젝트가 실행되는 내내 감시(watch)하며 변동된 사항이 있을 경우 이를 스타일에 반영한다. 그러한 기능을 담당하는 `tailwind.scss`를 생성한다.


### 사용 방법

처음 설치 과정이 끝나면 루트 폴더에 ng-tailwind.js가 생성된다.

```js
module.exports = {
  // Tailwind Paths
  configJS: 'tailwind.config.js',
  sourceCSS: 'src/tailwind.scss',
  outputCSS: 'src/styles.scss',
  // Sass
  sass: false,
  // PurgeCSS Settings
  purge: false,
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: [],
  extensions: [
    '.ts',
    '.html',
    '.js'
  ],
  extractors: [],
  content: []
}
```

처음에는 `sourceCSS`와 `outputCSS`의 확장자가 모두 css로 되어 있을탠데, 우리는 SCSS를 사용하므로, 확장자를 모두 scss로 바꿔주었다.

실제로 `src/tailwind.scss`를 Tailwind가 프로젝트가 실행되는 동안 감시하며 Tailwind에서 정의된 Utility 스타일과 사용자가 정의한 Custom 스타일을 조합 및 생성하여 `src/styles.scss`로 output된다. 이를 이용해 프로그램 전역에 적용하는 것이다.

`src/tailwind.scss`에 아래와 같이 써줘서 Tailwind CSS를 시작한다.

```css
@tailwind base; @tailwind components; @tailwind utilities;
```

## Pre-flight

첫 번째 줄인 `@tailwind base`는 Tailwind CSS에서 `Pre-flight`라고 부른다.

브라우저 간의 스타일 불일치를 줄이고, 브라우저의 제약 조건 내에서 스타일링을 쉽게 해주기 위해 Tailwind CSS에서 제공하는 **기본 스타일 세트**이다.

거의 기본 스타일을 제거하여 커스터마이징을 쉽게 하도록 하는 역할을 하는 것 같다. 어차피 Tailwind CSS에서 제공하는 다양한 스타일링 유틸리티 들을 이용하면 되기 때문이다.

@tailwind base을 적용할 경우 아래와 같은 스타일들이 `style.scss`로 output된다.

### 제목, 인용 부호, 단락 등과 같은 요소에 기본 margin이 제거됩니다.

```css
blockquote, dl, dd, h1, h2, h3, h4, h5, h6, figure, p, pre { margin: 0; }
```

기본 설정된 margin으로 인해 스타일링에 있어서 실수를 줄이기 위함이라고 합니다.

### 제목(h1, h2..) 태그에 스타일이 없습니다.

```css
h1, h2, h3, h4, h5, h6 { font-size: inherit; font-weight: inherit; }
```

-   CSS에서 Type scale 스타일링에 문제가 생기지 않도록 도와준답니다. (무슨 의미인지는 모르겠..)

-   UI 개발에 있어서 종종 제목이 강조되지 않아야 할 때가 있는데, 이를 위해 일단 제거한다고 합니다.


### 리스트 태그에 스타일이 없습니다.

```css
ol, ul { list-style: none; margin: 0; padding: 0; }
```

### 이미지는 block입니다.

```css
img, svg, video, canvas, audio, iframe, embed, object { display: block; vertical-align: middle; }
```

display: inline으로 지정되어 있음으로서 발생하는 다양한 문제들을 사전에 차단합니다.

### 테두리 스타일들을 전역적으로 재설정합니다.

```css
\*, \*::before, \*::after { border-width: 0; border-style: solid; border-color: theme('borderColor.default', currentColor); }
```

테두리 커스터마이징을 쉽게 하기 위함입니다.

> 이보다 더 많은 스타일들이 있지만, 가장 중요한 몇 개만 설명하였습니다. 자세한 내용은 [여기](https://unpkg.com/tailwindcss@1.4.6/dist/base.css)를 클릭하세요.

## 커스터마이징

### Pre-flight Extension

```css
@tailwind base;
h1 { @apply text-2xl; }
h2 { @apply text-xl; }
h3 { @apply text-lg; }
a { @apply text-blue-600 underline; }
@tailwind components;
@tailwind utilities;
```

위와 같이 @tailwind base 아래에 기본 스타일에 대한 커스터마이징을 할 수 있습니다.

### tailwind.config.js

```css
module.exports = { purge: \[\], theme: { extend: {}, }, variants: {}, plugins: \[\], }
```

이는 아직 사용해보지 못하였으므로 추후에 기재하겠습니다. 이 [링크](https://tailwindcss.com/docs/functions-and-directives/#theme)를 클릭하여 자세히 알아볼 수 있습니다.

루트 폴더에 생성된 `tailwind.config.js`에서 다양한 기능들을 사용하고 설정할 수 있다.

## 참고
최근에 알게 된 것인데, ngneat라는 Angular Dependency를 전문으로 만드는 팀에서 @ngneat/tailwind라는 라이브러리를 만들었다.
아직 써보지는 않아서 무엇이 다른지는 모르지만, 믿을만한 팀이니까 한 번 써보는 것도 나쁘지 않은 선택인 것 같다.

## References

-   [https://tailwindcss.com/docs/](https://tailwindcss.com/docs/)

-   [https://dev.to/maurogarcia\_19/setup-your-angular-project-to-work-with-tailwindcss-1p5f](https://dev.to/maurogarcia_19/setup-your-angular-project-to-work-with-tailwindcss-1p5f)