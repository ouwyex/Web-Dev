if __name__ == '__main__':
    s = input()
    for method in ['isalnum', 'isalpha', 'isdigit', 'islower', 'isupper']:
        print(any(getattr(char, method)() for char in s))