def sevens(n):
    """List of all multiples of 7 less than n, assuming n>=0."""
    return filter(lambda x: x%7 == 0, reduce(map(lambda x: x*7, list(range(0, n)))))




print(sevens(25) == [0, 7, 14, 21])
print(sevens(28) == [0, 7, 14, 21])
print(sevens(29) == [0, 7, 14, 21, 28])
# additional
print(list(sevens(1)) == [0])
print(sevens(0) == [])
print(list(sevens(8)) == [0, 7])

print(sevens(0))
