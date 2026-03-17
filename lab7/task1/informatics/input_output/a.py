from math import sqrt
a = float(input())
b = float(input())

def hyp(a,b):
    return sqrt(a**2 + b**2)

print(hyp(a,b))