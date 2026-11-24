import random
import datetime
import os 


arr = ["apple", "orange", "Pineapple", "Tomato"]

randomFruit = random.choice(arr)

today = datetime.date.today()
print(today)
print(randomFruit)

curr_dir = os.getcwd()

print(curr_dir)