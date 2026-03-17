n = int(input())
array = list(map(int, input().split()))
count = 0

for x in array:
    if x > 0:
        count += 1

print(count)