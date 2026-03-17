def count_evens(nums):
    count = 0
    for n in nums:
        if n % 2 == 0:
            count += 1
    return count

def big_diff(nums):
    return max(nums) - min(nums)

def centered_average(nums):
    nums.sort()
    return sum(nums[1:-1]) // (len(nums) - 2)

def sum13(nums):
    s = 0
    i = 0
    while i < len(nums):
        if nums[i] == 13:
            i += 2
            continue
        s += nums[i]
        i += 1
    return s

def sum67(nums):
    s = 0
    skip = False
    for n in nums:
        if n == 6:
            skip = True
            continue
        if n == 7 and skip:
            skip = False
            continue
        if not skip:
            s += n
    return s

def has22(nums):
    for i in range(len(nums) - 1):
        if nums[i:i+2] == [2, 2]:
            return True
    return False