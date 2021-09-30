#First Upper Half
for i in range(1,6):
      for j in (1,9):
            if ((i + j==19)or (i + j==18) or (i + j==17) or (i + j==16) or (i + j==15) or (i + j==14)):
                  print("*" , end="")
            else:
                  print(" " , end="")
      print()

#First Lower Half
for i in range(6 , 1 , -1):
      for j in range(6 , 1 , -1):
            if (i > j):
                  print(" " , end = "")
      for k in range(i*2 , 1 , -1):
            if (i > k):
                  print("*" , end = "")

      print()

