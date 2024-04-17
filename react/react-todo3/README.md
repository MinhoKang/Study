# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

```
react-todo3
├─ .eslintrc.cjs
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ apis
│  │  ├─ api.ts
│  │  ├─ login.ts
│  │  ├─ signUp.ts
│  │  └─ todo
│  │     ├─ addTodo.ts
│  │     ├─ deleteTodo.ts
│  │     ├─ editTodo.ts
│  │     └─ getTodo.ts
│  ├─ App.tsx
│  ├─ components
│  │  ├─ button
│  │  │  └─ Button.tsx
│  │  ├─ container
│  │  │  └─ Container.tsx
│  │  ├─ form
│  │  │  └─ Form.tsx
│  │  ├─ index.ts
│  │  ├─ input
│  │  │  └─ Input.tsx
│  │  └─ title
│  │     └─ H1.tsx
│  ├─ constants
│  │  ├─ index.ts
│  │  ├─ loginPage
│  │  │  ├─ loginButton.ts
│  │  │  └─ loginInput.ts
│  │  ├─ signUpPage
│  │  │  ├─ signUpButton.ts
│  │  │  └─ signUpInput.ts
│  │  └─ todoPage
│  │     ├─ addButton.ts
│  │     ├─ todoButton.ts
│  │     └─ todoForm.ts
│  ├─ context
│  │  ├─ AuthContext.ts
│  │  └─ TodoContext.ts
│  ├─ features
│  │  ├─ loginPage
│  │  │  └─ LoginButton.tsx
│  │  └─ todoPage
│  │     ├─ TodoForm.tsx
│  │     ├─ todoItem
│  │     │  ├─ DeleteModal.tsx
│  │     │  ├─ EditTodo.tsx
│  │     │  ├─ Todo.tsx
│  │     │  ├─ TodoButtons.tsx
│  │     │  └─ TodoItem.tsx
│  │     └─ TodoList.tsx
│  ├─ hooks
│  │  ├─ index.ts
│  │  ├─ mutaions.ts
│  │  ├─ queries.ts
│  │  ├─ queryKeys.ts
│  │  ├─ useAuth.ts
│  │  ├─ useEditTodo.ts
│  │  ├─ useLogin.ts
│  │  ├─ useProvideAuth.tsx
│  │  ├─ useSignUp.ts
│  │  ├─ useTodo.ts
│  │  └─ useTodoState.ts
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ errorPage
│  │  │  └─ ErrorPage.tsx
│  │  ├─ loginPage
│  │  │  └─ LoginPage.tsx
│  │  ├─ signUpPage
│  │  │  └─ SignUpPage.tsx
│  │  └─ todoPage
│  │     └─ TodoPage.tsx
│  ├─ routers
│  │  ├─ LoginRouter.tsx
│  │  ├─ LogoutRouter.tsx
│  │  └─ ProtectedRouter.tsx
│  ├─ styles
│  │  ├─ app.module.css
│  │  ├─ features
│  │  │  └─ todoPage
│  │  │     ├─ deleteModal.module.css
│  │  │     ├─ todoForm.module.css
│  │  │     ├─ todoItem.module.css
│  │  │     └─ todoList.module.css
│  │  ├─ index.module.css
│  │  ├─ loginPage
│  │  │  └─ loginPage.module.css
│  │  ├─ signUpPage
│  │  │  └─ signUpPage.module.css
│  │  └─ todoPage
│  │     └─ todoPage.module.css
│  ├─ types
│  │  ├─ button.ts
│  │  ├─ form.ts
│  │  ├─ index.ts
│  │  ├─ input.ts
│  │  ├─ query.ts
│  │  ├─ title.ts
│  │  ├─ todo.ts
│  │  └─ useTodo.ts
│  ├─ utils
│  │  ├─ index.ts
│  │  └─ regex.ts
│  └─ vite-env.d.ts
├─ tsconfig.json
└─ tsconfig.node.json

```