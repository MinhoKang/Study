// 로그인, 투두, 홈
// 홈에서 로그인을 누르면 로그인 가능한 창으로 이동
// 로그인을 하면 투두로 이동

import { Component } from "./core/component.js";

const $app = document.querySelector("#app");

export const component = new Component($app);

class App () {
  constructor() {
    // 역할: 라우터의 역할, routres배열을 참조하여 현재 주소값과 같은 클래스 인스턴스의 render() 메서드를 호출하여 화면을 업데이트한다. 
    this.component = new Component($app);
  }
  

}


// 1. export 와 EXPORT DEFAULT 의 차이점 알기. 
// 원래 CommonJS  = node , module 
// 2. 클래스의 인스턴스 생성에 대해 이해하기. (.life cycle)
// 3. 객체를 정의하는게 아닌 어디서 그 인스턴스가 생성되는지 이해하기
// 4. 어떠한 목적(비즈니스 로직 ex)  로그인을 하면 홈으로 이동한다.) 
// 그걸 달성하기 위한 task를 세우고 로직을 짜고 구현
// 단일 책임 (하나의 클래스가 하나의 역할을 해야한다.) 