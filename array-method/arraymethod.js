
//indexof
var names = ['arun', 'sudhakar', 'francis', 'gnanasekar','sudhakar', 'venkat'];
console.log(names.indexOf('sudhakar'));
console.log(names.indexOf('sudhakar',2));
console.log(names.indexOf('mani'));

//concat
var number = [1,2,3,4];
var number2 = [5,6,7,8];
// console.log(number.concat(number2));
var number4=number.concat(number2)
console.log(number4);

//toString
var m=[1,2,3,'3a','4b'];
console.log(m.toString());

//unshift
var fruits = ['apple','orange','mango','banana'];
console.log(fruits.unshift('guva'));
console.log(fruits);

//shift
var relatives=['dad', 'mom', 'uncle','brother'];
console.log(relatives.shift());
console.log(relatives);

//reverse
const x=['arun','suthakar','sekar','francis'];
console.log(x.reverse());

//copywithin
var array = [1,2,3,4,5,7,9];
console.log(array.copyWithin(2,4));


//entries
var array1 = ['a','b','c','d'];
var iterator= array1.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

//every
// var result= (currentvalue) => currentvalue <40;
var value = [10,34,23,34,38];
function b1(element) {
    return element >40;
    
}
b4=value.every(b1);
console.log(b4);


//filter
var fruits = ['apple','orange','graps','guva','strawberry'];
var result1= fruits.filter(fruits=>fruits.length>5);
console.log('find word for 5 letter high =',result1);


//find
var a=[3,6,4,13,23,43,54];
var result2=a.find(a=>a>10);
console.log('find first value=',result2);
function search(element) {
    return element >13;
    
}
fd=a.find(search);
console.log(fd);

//findindex
var b=[3,6,4,13,23,43,54];
var result3=b.findIndex(b=>b>10);
console.log('find first intex value',result3);
// function index(element) {
//     return element >10;
    
// }
// id=b.findIndex(index);
// console.log(id);

//flat
var c=[1,2,3,[4,5,6]];
console.log(c.flat());
var c1=[1,2,3,[[[4,5,6]]]];
console.log(c1.flat(2));

//foreach
var d=['a','b','c','d'];
d.forEach(element=> console.log(element));

//includes
var pets=['cat','dog','birds','piegion','duck'];
e=pets.includes('piegion');
console.log(e);

//indexof
var letter=['a','b','c','a','d','c','e'];
f=letter.indexOf('c');
console.log(f);

//lastindexof
var letters=['a','b','c','a','d','h','c','h','e','r','d','w'];
i=letters.lastIndexOf('c',2);
console.log(i);

//join
var g=['gnanasekar','sudhakar','francis'];
console.log(g.join());
console.log(g.join(''));
console.log(g.join('-'));

//pop
var k=['a','b','c','d','e'];
console.log(k.pop());

//push
var l=['gnanasekar','sudhakar','arun','francis'];
var l1=l.push('deepak','vengat');
console.log(l1);
console.log(l);


//reverse
var m=[1,2,3,4,5];
m1=m.reverse();
console.log(m1);

//shift
var n=[1,2,3,4,5];
var n1=n.shift();
console.log(n);
console.log(n1);

//unshift
var o=[1,2,3,4,5,6];
var o1=o.unshift(7,8,9);
console.log(o);
console.log(o1);

//slice
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant','deer'];

console.log(animals.slice(2));
console.log(animals.slice(2,4));
console.log(animals.slice(-2));
console.log(animals.slice(2,-2));
console.log(animals.slice());

//sort
var l=['d','a','g','e','k'];
var ll=l.sort();
console.log(l);



var x12=10+20=="30";
console.log(x12);

