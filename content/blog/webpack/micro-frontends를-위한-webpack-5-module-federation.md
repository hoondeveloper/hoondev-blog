---
title: Micro-Frontends를 위한 Webpack 5 Module Federation
date: 2021-06-18 15:06:83
category: webpack
thumbnail: { thumbnailSrc }
draft: false
---

서비스의 규모가 커질 수록 한 앱에 들어가는 피쳐들이 많아지고, 그로 인해 각각의 피쳐들 사이의 의존성(dependency)가 생기기 마련이다.

이러한 의존성을 제거하기 위해 공통적으로 사용할 것들(작게는 컴포넌트 단위, 크게는 서비스 단위)을 context independent하게 구현해놓고 앱에서 불러와 사용하곤 한다.

분리된 각각의 컴포넌트, 서비스 단위로 따로 개발하여 적용할 수 있지만 수정사항을 반영하려면 앱을 다시 **빌드하고 배포하는 과정**이 필요하다. 아주 작은 단위의 수정사항이 있더라도 **수십분의 배포 시간**을 거쳐야 하는 것이다.

🔍 만약...

마법같이 각각의 컴포넌트, 서비스 단위가 각각의 빌드를 구성하고 그 빌드를 동적으로 최상단 Host 앱에서 불러와 사용할 수 있다면..? <span class="text-pink-600">**런타임에!?**</span>

Webpack 5의 Module Federation은 그런 마법같은 일을 현실화할 수 있다. 🧙

## Webpack 5란?

Webpack은 모던 자바스크립트 앱을 위한 정적 모듈 번들러이다. 이렇게 말하면 조금 어려운데 그냥 우리가 작성한 자바스크립트 코드들과 여러 웹팩 관련 플러그인, 로더 등을 합쳐주는 역할을 하는 놈이라고 생각하면 된다. 자세한건 구글링~

[2020년 10월](https://webpack.js.org/blog/2020-10-10-webpack-5-release/)에 공식적으로 릴리즈된 Webpack 5는 Webpack 4로부터 성능 개선 뿐만 아니라 다양한 새로운 기능들이 추가되었다.
Module Federation은 Webpack 5에서 추가된 코어 기능 중 지금 현재 가장 많은 관심을 받고 있다. 

## Module Federation이란?

여러 분리된 빌드들이 하나의 앱을 구성할 수 있는 Webpack 5의 새로운 기능이다. 하나의 앱이 **다른 빌드에 있는 코드**를 **동적으로 실행**시킬 수 있는 기술이다.

요즘 프론트엔드계에서 핫한 **Micro-Frontends**의 근간이 되는 기술이기도 하다.

### 작동 방식

특정 빌드가 **Host**가 되고, 그 앱에서 **다른 빌드**들을 동적으로 불러와 사용할 수 있다. Host는 꼭 특정한 하나의 빌드만 될 수 있는 것은 아니다. Federated된 모든 빌드들이 Host가 될 수 있다.

즉, **양방향(Bidirectional)**으로 Module Federation이 가능하다. 예를 들면, A 빌드에서 B 빌드에 있는 코드를 실행시킬 수 있고, B 빌드에서도 A 빌드에 있는 코드를 실행시킬 수 있다는 것이다.

이론적으로는 전방향(Omnidirectional)으로도 가능하다고 한다.

## Best Practices

고맙게도 Webpack에서 수많은 [Module Federation Examples](https://github.com/module-federation/module-federation-examples)를 만들어주었다. 여기서 [typescript](<https://github.com/module-federation/module-federation-examples/tree/master/typescript>) 예시를 이용하여 Module Federation을 체험해볼 것이다.

- 추가 작성 예정

## 참고

- https://webpack.js.org/concepts/module-federation/
- https://indepth.dev/posts/1173/webpack-5-module-federation-a-game-changer-in-javascript-architecture
- https://betterprogramming.pub/micro-frontends-using-webpack-5-module-federation-3b97ffb22a0d