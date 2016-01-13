/**
 * Created by jojoldu@zuminternet.com on 2016-01-13.
 */

/*
객체를 생성하는데 사용하는 함수(즉, 함수역할 #3을 하는데 사용하는 함수)를 생성자라 한다.
자바스크립트에는 객체를 생성하는 방법이 3가지가 있다.

    1) new 와 Object 생성자를 이용 : new Object()
    2) 객체 리터럴 이용 : {}
    3) new와 사용자 정의 생성자 이용 : new Person()
*/

//1) new 와 Object 생성자를 이용 : new Object()
var mySon = new Object();

mySon.name = "달봉이";
mySon.age = 8;
mySon.increaseAge = function(){
    this.age++;
};

mySon.increaseAge();
mySon.increaseAge();

console.log(mySon.age);
