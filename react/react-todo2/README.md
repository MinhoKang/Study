1. 선언형 프로그래밍. 명령형 프로그래밍 공부하기
2. 라우팅 관리를 선언형으로 리팩토링 하기.
3. 전역상태관리 리팩토링 (로그인상태)
4. 로그인페이지 리팩토링 (유효성검사, 로그인 로직)
5. 회원가입 페이지
   1. SignUpData 타입 에러 해결 (react-hook-form)
6. 폴더 구조 수정(응집도 고려)
7. 페이지 컴포넌트에는 컴포넌트의 조립이 되도록 구조 리팩토링.
8. 투두 관련된 비즈니스로직을 hook으로 분리(추가,수정,삭제,조회)

투두 삭제

## 페이지 컴포넌트에서는 데이터가 위치하지 않도록(비즈니스 로직, 데이터)

Pages/TodoPage.tsx
Pages/Todos.tsx
Pages/Todo.tsx

Components/Title/index.tsx
Components/Title/Title.module.css
