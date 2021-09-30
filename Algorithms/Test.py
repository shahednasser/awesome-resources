a = ["A" , "E" , "I" , "O" , "U" , "Y"]

s = input()
flag = -1
counter = -1
if(len(s)==9):
      for i in a:
            if i in s:
                  flag = 1

      if( ((int(s[0]) + int(s[1]))%2==0) and ((int(s[3]) + int(s[4]))%2==0) and ((int(s[4]) + int(s[5]))%2==0) and ((int(s[7]) + int(s[8]))%2==0)):
            counter = 1

if flag==1 and counter==1:
      print("Valid")
else:
      print("invalid")


