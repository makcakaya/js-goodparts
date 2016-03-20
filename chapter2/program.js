document.writeln('Hello, world!');

// If statement
var shouldPrint = true;
if(shouldPrint)
{
    document.writeln('If condition is true.');
}

// switch statement
var letter = 'A';
switch(letter)
{
    case 'a':
        document.writeln('a match.');
        break;;
    case 'b':
        document.writeln('b match.');
        break;
    case 'A':
        document.writeln('A match.');
        break;
    default:
        document.writeln('default match.');
        break;
}

// while statement
var num = 0;
while(num < 10)
{
    document.writeln('while statement ' + num);
    num++;
}

// for statement
for(var i = 0; i < 10; i++)
{
    document.writeln('for statement ' + i);
}

var arr = ["javascript", "the", "good", "parts"];
for(msg in arr)
{
    if(arr.hasOwnProperty(msg))
    {
        document.writeln(arr[msg]);
    }
}

// typeof operator
document.writeln(typeof('hello'));

// ternary operator
var message = true ? "It is true" : "It is false";
document.writeln(message);

// try-catch statement
try{

}catch(exception){

}
