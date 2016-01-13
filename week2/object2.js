/**
 * Created by jojoldu@zuminternet.com on 2016-01-13.
 */
// 2) 객체 리터럴 이용 : {}
var myChild = {
    name : "순봉이",
    age : 7,
    increaseAge : function(){
        this.age++;
    }
};

myChild.increaseAge();
myChild.increaseAge();

console.log(myChild.age);