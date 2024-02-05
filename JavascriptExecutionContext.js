/*
how .js runs
in 2 phases

1st code makes Global EC and it refers to this variable

On Browser this value comes as window Object

It all executes at thread & Javascript is single threading language

3 types of Execution Context
a Global Execution Context
b Functional Execution Context
c Eval Execution Context - not imp

{javascript code} - runs in 2 diff phases
1st phase - memory or memory creation phase(only memory gets allocated)

2nd phase - Execution phase (all logic gets executed in this phase)

1st phase (memory phase) ->
all variables by default values stored or empty are allocated primarily undefined
& functions are filled with it's defination

2nd phase (Execution phase)
values declred will get stored from undefined to values
addNum(num1, num2) while call a function it creates a new Execution Context - {
    New Variable Environment + Execution Thread
}
New Executional Context is created as many times Funtion is called

after funtion's role over then NEC created for that function it also gets deleted
*/

// Call Stack