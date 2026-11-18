


def chr_pattern(n):

    for i in range(n):
        for j in range(n - 1 - i, n):
            print(chr(65+j), end = "")
        print()


chr_pattern(4)


def chr_pattern2(n):

    chars= [chr(65+i) for i in range(n)]
    # print(chars)

    for i in range(n):
        print(" ".join(chars[n - 1 - i:]))


chr_pattern2(4)