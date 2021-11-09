"""
Ben Heng (he/him) to Everyone (9:21 AM)
We have two lists of signed integers in ascending order. Write a function that takes these ordered lists as well as an integer argument `limit` that returns a merged list in ascending order with `limit` elements. This is not a trick question or a riddle, but a generic example of the kinds of problems we deal with. 

**We are evaluating how you solve it more than finding any one particular solution.**

- You can use any functions in whatever language you choose 
- Feel free to use the internet to reference documentation.
- You can solve the problem and then go back and improve upon it.

- Coderpad Specific: You'll need to toggle the language where it says `markdown` (above). Optionally, you can enable vim, emacs (bottom right)


Example arguments:
```
  [-3, 0, 2, 4]
  [1, 3, 7, 8, 9]
  limit: 3
  ------
  Expect: [-3, 0, 1]
```
"""


def getMergedList(listOne, listTwo, limit):

    arrOne, andTwo = listOne.copy(), listTwo.copy()
    
    mergedList = []
    totalLen = len(listOne) + len(listTwo)
    if totalLen < limit:
        limit = totalLen

    for _ in range(limit):
        if len(arrOne) == 0:
            mergedList.append(andTwo[0])
            andTwo = andTwo[1:]
        elif len(andTwo) == 0:
            mergedList.append(arrOne[0])
            arrOne.pop(0)
        elif arrOne[0] <= andTwo[0]:
            mergedList.append(arrOne[0])
            arrOne.pop(0)
        elif andTwo[0] < arrOne[0]:
            mergedList.append(andTwo[0])
            andTwo.pop(0)

    print(mergedList)
    return mergedList


x = [-3, 0, 2, 4]
y = [1, 3, 7, 8, 9]
getMergedList(x, y, 3)
getMergedList([-3, 0, 2, 4], [1, 3, 7, 8, 9], 3)
getMergedList([-3, 0, 2, 4], [1, 3, 7, 8, 9], 10)
getMergedList([-3, 0, 2, 4], [1, 3, 7, 8, 9], 8)
getMergedList([-3, 0, 2, 4], [2, 3, 7, 8, 9], 10)

getMergedList([-3, 0, 2, 4], [1], 4)
getMergedList([-3, 0, 2, 4], [], 4)
getMergedList([-3, 0, 2, 4], [], 4)
