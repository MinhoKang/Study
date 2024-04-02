사용한 라이브러리

1. react-router-dom -사용 이유: 페이지 이동

2. redux toolkit -로그인 상태, 투두 리스트 등 전역 상태 관리

3. styled-component
   -css

   <Route path="/" element={isLoggedIn ? <Navigate to="/todo" /> : <Navigate to="/login" />} />
   <Route path="/login" element={isLoggedIn ? <Navigate to="/todo" /> : <LoginPage />} />
   <Route path="/signup" element={isLoggedIn ? <Navigate to="/todo" /> : <SignupPage />} />
   <Route path="/todo" element={isLoggedIn ? <TodoPage /> : <Navigate to="/login" />} />
   <Route path="\*" element={<NotFoundPage />} />
