/*
 * @Author: liuhaun 
 * @Date: 2018-07-12 20:53:57 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-07-12 21:06:37
 * 工厂方法模式，  把 实际创建工作推迟到子类中。
 * 安全模式类
 *  if(!(this instanceof demo)){
 * return  new Demo();
 * 
 * }
 */

 // 安全模式创建工厂类

 let   Factory  = function(type,content){
     if(this instanceof Factory){
         let s = new this[type](content);
         return s;
     }else{
         return new Factory();
     }
 }
 Factory.prototype={
     JAVA:function(content){

     },
     JAVASCRIPT:function(content){

     }
 }
