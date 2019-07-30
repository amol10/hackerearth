import sys

n, k = list(map(int, input().split()))
a = list(map(int, input().split()))

d = {}
for i in a:
    if d.get(i, None) is None:
        d[i] = 1
    else:
        d[i] += 1

for i in a:
    if i <= k:
        diff = k - i
        if d.get(diff, None) is not None:
            if (diff == i and d[diff] > 1) or (diff != i):
                print("YES")
                sys.exit()

print("NO")