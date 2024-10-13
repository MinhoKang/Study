from collections import deque

# 큐 선언
q = deque()

# 맨 뒤에 원소 삽입
q.append(10)
q.append(20)
q.append(30)

# 큐 출력
print("큐:", q)
print()

# 맨 앞의 원소 삭제
removed_element = q.popleft()
print("삭제된 원소:", removed_element)
print("삭제 후 큐:", q)
print()

# 맨 앞의 원소 확인
front_element = q[0]
print("맨 앞의 원소:", front_element)
print("현재 큐:", q)
print()

# 큐의 크기 확인
print("큐의 크기:", len(q))
print()

# 특정 값의 존재 여부 확인
print(10 in q)
print(20 in q)
print()

# 큐 순회
while q:
    print(q.popleft(), end=' ')