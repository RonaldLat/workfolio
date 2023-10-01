def arrayConcatenation( nums):
    ans =[]
    for i in range(3):
        for n in nums:
            ans.append(n)
    return ans
ans = arrayConcatenation([1,2,4])
print(ans)
