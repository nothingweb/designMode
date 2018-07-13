/*
 * @Author: liuhuan
 * @Date: 2018-07-12 21:11:20 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-07-12 22:20:12
 * 
 * 抽象工厂模式
 *   作用：定义一个产品簇，并声明一些必备的方法，如果子类没有重写，就会抛出错误。 
 * 
 * 一般用来作为父类创建子类 
 * 
 */


 //抽象工厂方法
 let VehicleFactory = function(subType,superType){
     //判断该抽象工厂中是否有该抽象类
     if(typeof VehicleFactory[superType] === 'function'){
         //缓存类
         function F(){};
         //继承父类属性和方法
         F.prototype = new VehicleFactory[superType]();
        //将子类的constructor指向 子类
        subType.constructor = new F();
     }else{
         //不存在该抽象类抛出错误
         throw new error('未创建该抽象类');
     }
 }

//小汽车抽象类  
VehicleFactory.car = function(){
    this.type ='car';
}

VehicleFactory.car.prototype = {
    getPrice:function(){
        return new Error('抽象方法不能调用');
    },
    getSpeed:function(){
        return new Error('抽象方法不能调用');
    }
}

//公交车抽象类

VehicleFactory.Bus = function(){
    this.type ='bus';
}

VehicleFactory.Bus.prototype = {
    getPrice:function(){
        return new Error('抽象方法不能调用');
    },
    getSpeed:function(){
        return new Error('抽象方法不能调用');
    }
}

//货车类
VehicleFactory.Truck = function(){
    this.type ='bus';
}

VehicleFactory.Truck.prototype = {
    getPrice:function(){
        return new Error('抽象方法不能调用');
    },
    getSpeed:function(){
        return new Error('抽象方法不能调用');
    }
}

//抽象与实现
//需要一些产品子类，让子类继承相应的产品簇抽象类
//宝马汽车子类
let BMW = function(price,speed){
    this.price = price;
    this.speed = speed;
}
//抽象工厂实现对Car抽象类的继承
VehicleFactory(BMW,'car');
BMW.prototype.getPrice = function(){
    return this.price;
}
BMW.prototype.getSpeed = function(){
    return this.speed;
}
