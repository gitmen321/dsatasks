

def find_iteration():
    stepsGoal = 100
    step = 0
    iteration = 0

    while step < stepsGoal:

        iteration += 1

        step += 3
        
        if step >= stepsGoal:
            break
        step -= 2

    return iteration

print("Iteration:",find_iteration())
