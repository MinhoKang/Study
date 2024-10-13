def get_primes(n):
	primes = []
	for i in range(2, n + 1):
		while n % i == 0:
			primes.append(i)
			n //= i
			print('n is: ',n)
	return primes

print(get_primes(60))
print(get_primes(37))