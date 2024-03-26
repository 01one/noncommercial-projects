let beginnerExamples = {
  "Hello World": `# Hello world example 
print("Hello")`,



  "While Loop": `x=0
while x!=10:      # !=  not equal to
  print("Hello")
  x+=1            # increase the value of x by completing every loop`,

  "Simple Division": `a=7
b=3
c=a/b
print(c)
print(round(c,2))`,

  "Tuple Example": `# there are some similarity with list
# tuple is immutable
x=(1,2,3)
print(x) #(1,2,3)`,

  "Basic Arithmetic": `x=5
y=7
z=(x-y)
print(z)
print(abs(z))`,


  "Conditional Statements": `x=234
y=423
if x>y:
    print("x is bigger than y")
if x<y:
    print("x is smaller than y")
if x==y:
    print("The value of x and y is equal")`,

  "If-Elif-Else Example": `x=5
y=7
if x==y:
  print("x equal to y")
elif x>y:
  print("x is greater than y")
else:
    print("x is smaller than y")`,

  "String Operations": `x="Hello"
print(x[0]) #print H
print(x[-1])#print o
print(x[:]) #print Hello
print(x[:2])#print He
print(x[2:])#print llo
print(x[0:4:2])#print Hl #from 0 to 4 difference 2
print(x[::-1])#print olleH`,

  "String Repetition and Type Conversion": `x='9' #string
print(x*10)
x=int(x) #convert to integer. Only applicable to numbers.
print(x*10)`,

  "Variable Type Conversion": `x=9
print(x*10)
x=str(x)
print(x*10)`,

  "Division Types": `x=10
y=7
z=x/y   #normal division
a=x//y  #integer division
print(z)
print(a)`,

  "String Manipulation": `x="hello world"
if "world" in x:
    print("Found")`,

  "If-Elif-Else Example (2)": `x=5
y=7
if x==y:
  print("x equal to y")
elif x>y:
  print("x is greater than y")
elif x<y:
  print("x is smaller than y")`,

  "String Methods": `x="Hello"
x=x.lower()
print(x)    #hello
x=x.upper()
print(x)    #HELLO
a = x.count('L')
print(a)    #2
b=x.index('O')
print(b)    #4
x=x.replace('L','l')
print(x)    #HEllO
x=x[:]+" world"
print(x)    #HEllO world
a=len(x)
print(a)  #4`,

  "String Formatting": `print('*'*10)`,

  "Comparison Operators": `x=5
y=7
print(x==y)`,

  "For Loops": `for number in range(5):
	print(number)# result 0,1,2,3,4
	#start from 0 and ends at 4
	
for number in range(1,10):
	print(number) #result 1,2,3,4,5,6,7,8,9
	#start from index 2 
	
for number in range(2,10):
	print(number) #result 2,3,4,5,6,7,8,9
	
for number in range(2,5):
	print(number) #result 2,3,4

for number in range(1,10,3):
	print(number) #result 1,4,7
	#difference 3
	
for number in range(10,1,-1):
	print(number) #result 10,9,7,6,5,4,3,2

for number in range(10):
    print(number) # starts from 0`,

  "User Input Example": `age=20
print("You are ",age, " years old")`,

  "Odd Numbers": `for number in range(1,100,2):
    print(number)`,

  "Modulus Operator": `x=10
y=7
z=x%y   #remainder
print(z)`,

  "Printing Patterns": `print('*'*10)
print('*'+' '*8+'*')
print('*'+' '*8+'*')
print('*'*10)`,

  "Print Statement": `print("Hello")`,

  "String Methods (2)": `x="Hello"
print(x.lower()) #hello
print(x)       #Hello
x=x.lower()
print(x)       #hello`,

  "List Example": `x=[1,2,3,4,5]  #list
print(x)    #[1,2,3,4,5]
print(x[0]) #1
print(x[:]) #[1,2,3,4,5]
x[0]=2
print(x)    #[2,2,3,4,5]
x.pop(4)
print(x)    #[2,2,3,4] #remove item at index 4
x.append(7)
print(x)    #[2,2,3,4,7] #add item at the end of the list
x.insert(3,20)
print(x)    #[2,2,3,20,4,7] #insert item 20 at index 3`,

  "Looping Example": `for i in range(100):
  print(i,end=' ')`,

  "Dictionary Example": `word={"Aurora":"A natural electrical phenomenon characterized by the appearance of streamers of reddish or greenish light in the sky, usually near the northern or southern magnetic pole.",
"Bubbly":"(especially of a woman or girl) Attractively full of energy and enthusiasm",
"Cascade":"A small waterfall",
"Devotion":"Loyalty and love or care for someone or something"}
print(word['Aurora'])`,



  "Arithmetic Expression Evaluation": `a= x**2+5*x+
2*y+30
x=5
y=7
answer=eval(a)
print(answer)`,

  "Greeting User": `name="Alice"
print("Hello ",name)`,

};

