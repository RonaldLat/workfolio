def walk(steps):
    if steps == 0:
        return "zero steps"
    else:
        #return steps - walk(steps+1)
        walk(steps-1)
        print(steps)

walk(100)
