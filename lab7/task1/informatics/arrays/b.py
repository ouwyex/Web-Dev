n = int(input())
array = list(map(int, input().split()))

for x in array:
    if x % 2 == 0:
        print(x, end=' ')