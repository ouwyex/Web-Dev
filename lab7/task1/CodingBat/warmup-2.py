def string_times(str, n):
    return str * n

def front_times(str, n):
    return str[:3] * n

def string_bits(str):
    return str[::2]

def string_splosion(str):
    res = ""
    for i in range(len(str)):
        res += str[:i+1]
    return res

def last2(str):
    if len(str) < 2:
        return 0
    last = str[-2:]
    count = 0
    for i in range(len(str) - 2):
        if str[i:i+2] == last:
            count += 1
    return count

def array_count9(nums):
    return nums.count(9)

def array_front9(nums):
    return 9 in nums[:4]