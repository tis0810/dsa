// valina javaScript 엄격한 자바스크립트로 사용할때 맨위에 선언하여 사용한다.
'use strict';

//2. variable(변수)
// let(mutable data type) (added in ES6)

//{}: Block Scope은 {}안에서 선언한 변수는 밖에서 선안해도 선언되지 않는다.
//또한 글로벌 변수는 Block 안이건 밖이건 다 선언되어 사용이 가능하다.
{
    let name ='jeawon';
console.log('name');
name = 'hello';
console.log('name');
}

//var는 사용 하면 안됨
//var hoisting (hoisting은 변수를 어디에서 선언하든 상관없이 항상 제일위로 선언을 끌어올리는것)
// 블록 스콥을 철저히 무시해버린다
{
    age= 4;
    var age;
}
console.log(age);

//3. const(immutable data type) : 값이 잠겨서 선언함과 동시에 값을 변경할수없다.
//-security(보안)
//-thread safety
//-reduce human mistakes (코드를 고칠때 실수를 최소화 시킬수있다)
const daysInWeek = 7;
const maxNumber = 5;

//4. Variable types
//primitive, single item: number, string, boolean, null, undefiedn, symbol
//object, box container
//function, first-class function(지원이 된다는것은 펑션도 다른 데어터타입처럼 변수에 할당이 가능, 함수의 파라미터로 리턴이 가능히다.)

const count = 17; // integer 정수
const size = 17.1; // decimal number 소수
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, 지금 사용 하지 말것)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53)~ 2*53) 숫자 뒤에 n을 붙이면 bingint로 인식되는데 아직 허용되는 웹사이트가 몇개없음
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAC_SAFE_INTEGER;

// string (자바스크립트는 모두 string 타입으로 취급된다)
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
// false : 0,null, underfined, NaN, ''
// true : any ohter value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null (null값은 너는 텅텅 비어있는 값이다 라고 내가 지정해주는것)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol , create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // 두 symbol은 다른값으로 처리된다 만약 같은  symbol 값으로 저장하고 싶다면
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); 
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); //symbol을 .description으로 string 타입으로 변환시킨후 사용해야 에러가 안뜬다.

// object, real-life object, data structure
const park = { name : 'jeawon', age: '24'}; //여기서 object는 park 이고 const로 선언하였기때문에 한번 지정된 park은 변하지 않게된다. 
park.age = 23; // object 안의 값은 변경이 가능하다.

// 5.Dynamic typing: dynamically typed languege (자바스크립트는 런타입에서 타입이 결정된다.)
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // 문자와 숫자를 더하면 문자 취급을 하고
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; // 문자와 문자를 나누게 되면 숫자 취급을 한다.
console.log(`value: ${text}, type: ${typeof text}`);
// 같은 text이지만 런타입에 따라 문자가 되는 경우도 있고 숫자가 되눈 경우가 있다.

