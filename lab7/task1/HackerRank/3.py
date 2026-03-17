if __name__ == '__main__':
    n = int(input())
    res = []
    for _ in range(n):
        cmd = input().split()
        if cmd[0] == "insert":
            res.insert(int(cmd[1]), int(cmd[2]))
        elif cmd[0] == "print":
            print(res)
        elif cmd[0] == "remove":
            res.remove(int(cmd[1]))
        elif cmd[0] == "append":
            res.append(int(cmd[1]))
        elif cmd[0] == "sort":
            res.sort()
        elif cmd[0] == "pop":
            res.pop()
        elif cmd[0] == "reverse":
            res.reverse()