/*
 * @Author: 刘欢 
 * @Date: 2018-07-12 09:45:52 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-07-12 20:57:31
 * @ 简单工厂模式  静态工厂方法
 * 封装函数   创建对象的函数
 */

//篮球基类
let basketball = ()=>{
    this.intro = '篮球盛行于美国';
}

basketball.prototype = {
    getMember:function(){
        console.log('每支队伍5个人');
    },
    getBallSize:function(){
        console.log('7号球');
    }
}

//足球
let football = ()=>{
    this.intro = '足球英国很强';
}
football.prototype = {
    getMember:function(){
        console.log('11个人');
    },
    getBallSize:function(){
        console.log('足球很大')
    }
}

//运动工厂

let sportsFactory = function(name){
    switch(name){
        case 'NBA':
        return new basketball();
        case 'wordCup':
        return new football();
        default:
        return new Object();
    }
}

