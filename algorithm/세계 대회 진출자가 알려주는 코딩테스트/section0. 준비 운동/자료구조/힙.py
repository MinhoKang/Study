# 최소 힙
from queue import PriorityQueue

# 우선순위 큐 선언
pq = PriorityQueue()

# 원소 삽입
pq.put(40)
pq.put(30)
pq.put(10)
pq.put(20)

# 우선순위 큐 출력
print("우선순위 큐:", pq.queue)
print(pq.queue)
print()

# 최상위 원소 삭제 (우선순위가 가장 높은 원소를 삭제)
removed_element = pq.get()
print("삭제된 원소:", removed_element)
print("삭제 후 우선순위 큐:", pq.queue)
print()

# (삭제하지 않고) 최상위 원소 확인
top_element = pq.queue[0]
print("최상위 원소:", top_element)
print("현재 우선순위 큐:", pq.queue)
print()

# 우선순위 큐의 크기 확인
print("우선순위 큐의 크기:", len(pq.queue))
print()

# 우선순위 큐가 비어 있는지 확인
print("우선순위 큐가 비어 있는지 확인:", pq.empty())
print()

# 우선순위 큐 그냥 순회
for u in pq.queue:
    print(u, end=' ')
print()
print()

# 우선순위 큐 순회 (우선순위 대로 순회)
while pq.queue:  # not pq.empty()
    print(pq.get(), end=' ')


#최대 힙
from queue import PriorityQueue

# 우선순위 큐 선언
pq = PriorityQueue()

# 원소 삽입
pq.put([-40, 40])  # (우선 순위, 값)을 의미
pq.put([-30, 30])
pq.put([-20, 20])
pq.put([-10, 10])

# 우선순위 큐 출력
print("우선순위 큐:", pq.queue)
print(pq.queue)
print()

# 최상위 원소 삭제 (우선순위가 가장 높은 원소를 삭제)
removed_element = pq.get()
print("삭제된 원소:", removed_element)
print("실제 쓸 값:", removed_element[1])
print("삭제 후 우선순위 큐:", pq.queue)
print()

# (삭제하지 않고) 최상위 원소 확인
top_element = pq.queue[0]
print("최상위 원소:", top_element)
print("현재 우선순위 큐:", pq.queue)
print()

# 우선순위 큐의 크기 확인
print("우선순위 큐의 크기:", len(pq.queue))
print()

# 우선순위 큐가 비어 있는지 확인
print("우선순위 큐가 비어 있는지 확인:", pq.empty())
print()

# 우선순위 큐 그냥 순회
for u in pq.queue:
    print(u, end=' ')
print()
print()

# 우선순위 큐 순회 (우선순위 대로 순회)
while pq.queue:  # not pq.empty()
    print(pq.get(), end=' ')