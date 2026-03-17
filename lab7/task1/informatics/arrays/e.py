n = int(input())
array = list(map(int, input().split()))
found = False

for i in range(1, n):
    # Произведение двух чисел положительно, если у них одинаковые знаки
    if array[i] * array[i - 1] > 0:
        found = True
        break

if found:
    print("YES")
else:
    print("NO")