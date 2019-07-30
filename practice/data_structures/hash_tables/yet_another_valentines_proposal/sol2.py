n, q = list(map(int, input().split()))
s = input()

d = {}
for c in range(ord('a'), ord('z') + 1):
    d[chr(c)] = 0

def reset_d():
    for k, _ in d.items():
        d[k] = 0

for _ in range(0, q):
    l, r = list(map(int, input().split()))
    for i in range(l, r + 1):
        d[s[i - 1]] += 1

    os = ''
    for v in d.values():
        os += chr(((v % 26) + 1) + ord('a') - 1)
    #print(os)
    #print("len os: ", len(os))

    for j in range(25, -1, -1):
        #print(os[0:j], os[-j:])
        if j == 0:
            print("None")
            break
        if os[0 : j] == os[-j : ]:
            #print("len os: ", len(os[-j : ]))
            print(os[-j : ])
            break

    reset_d()
