def main(arr):
    tracker = {}
    result = []

    arr.sort(key=lambda a: abs(a))

    for el in arr:
        if el in tracker:
            tracker[el] = tracker[el] + 1
        else:
            tracker[el] = 1

    for el in arr:
        elFreq = tracker[el]
        doubleEl = el * 2

        if elFreq is 0:
            continue
        elif doubleEl in tracker and tracker[doubleEl] > 0:
            result += [el, doubleEl]
            tracker[el] = tracker[el] - 1
            tracker[doubleEl] = tracker[doubleEl] - 1
        else:
            return False

    return True


main([3, 1, 3, 6])
