from math import sqrt

def get_divisors(n):
	s = set()
	for i in range(1, int(sqrt(n)) + 1):
		if n % i == 0:
			s.add(i)
			s.add(n // i)
	return s

def is_prime(n):
	return (len(get_divisors(n)) == 2)

print(is_prime(7))
print(is_prime(8))