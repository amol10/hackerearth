t = int(input())

for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))
    k = int(input())

    d = {}

    for i, v in enumerate(a):
        if d.get(v, None) is None:
            d[v] = [i]
        else:
            d[v].append(i)

    combos = {}
    combos_count = 0

    for i, v in enumerate(a):
        if v <= k:
            diff = k - v
            if d.get(diff, None) is not None:
                for diff_i in d[diff]:
                    if diff_i != i:
                        if (diff_i not in combos.get(i, [])): # and (i not in combos.get(diff_i, [])):
                            print(diff_i, i)
                            if combos.get(i, None) is None:
                                combos[i] = [diff_i]
                            else:
                                combos[i].append(diff_i)
                            if combos.get(diff_i, None) is None:
                                combos[diff_i] = [i]
                            else:
                                combos[diff_i].append(i)
                            combos_count += 1

    print(combos_count)

# this implementation works for the sample input
# however all the acceptance test cases timeout
