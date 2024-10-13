# 내 풀이

def fibonacci(n):
  if n == 1:
    return 1
  if n ==0:
    return 0
  return fibonacci(n-1) + fibonacci(n-2)

n = int(input())

print(fibonacci(n))

# 위와 같은 풀이는 시간복잡도가 최대 O(n^2)

  # n == 3
  # 0 1 2
  # f3 = f2 + f1
  # = f1 + f0 + f1

  # n == 3
  # f4 = f3 +f2
  # = f1 + f0 + f1 + f1 + f0


# 재귀함수와 메모이제이션을 이용
def fibonacci2(x):
  global arr

  if arr[x] != -1:
    return arr[x]

  arr[x] = fibonacci2(x - 1) + fibonacci2(x-2)
  return arr[x]

n = int(input())

arr = [-1] * (n + 2)
arr[0] = 0
arr[1]= 1

