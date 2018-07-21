/*
 * @Author: liuhuan
 * @Date: 2018-07-12 23:22:12 
 * @Last Modified by: liuhuan
 * @Last Modified time: 2018-07-13 09:35:14
 * 语言之魂   原型模式     原型实例只想创建对象的类，使用于创建新的对象的类共享原型对象的属性以及方法。
 */
//  实例 轮播图

let loopImages = (imageArr, container) => {
    this.imagesArray = imageArr;   //轮播图片数组
    this.container = container;    //轮播图片容器
    this.createImg = function () { }  //创建轮播图片
    this.changeImg = function () { }  //切换下一张图片
}

//上下滑动切换类
let SlideLooping = function (imageArr, container) {
    //构造函数继承图片轮播类
    loopImages.call(this, imageArr, container);
    //重写继承的切换下一张图片方法
    this.changeImg = function () {

    }
}

//渐隐切换类
let FadeLoopImg = (imageArr, container) => {
    loopImages.call(this, imageArr, container);
    //切换箭头私有变量
    this.arrow = arrow;
    this.changeImg = function () {

    }
}

//实例化一个人渐隐切换类
let fadeImg = new FadeLoopImg(['1.jpg', '2.jpg', '3.jpg', '4.jpg'], 'slide', ['left.jpg', 'right.jpg']);

fadeImg.changeImg(); //FadeLoopImg changeImage function




//最优的解决方案


//图片轮播类
let loopImages = function (imageArr, container) {
    this.imageArray = imgArr;   //轮播图片数组
    this.container = container;   //轮播图片容器
}
loopImages.prototype = {
    //创建轮播图片
    createImg: function () { },
    //切换下一张图片
    changeImage: function () {

    }
}

//上下滑动切换类
let SlideLoopImg = (imgArr, container) => {
    //构造函数  继承轮播类
    loopImages.call(this, imgArr, container);
}
SlideLoopImg.prototype = new loopImages();
//重写继承的切换下一张图片方法
SlideLoopImg.prototype.changeImage = function () {

}
//渐隐切换类

let FadeLoopImg = function (imgArr, container, arrow) {
    loopImages.call(this, imgArr, container);
    //切换箭头私有变量
    this.arrow = arrow;
}
FadeLoopImg.prototype = new loopImages();
FadeLoopImg.prototype.changeImage = function () {

}

//
//测试用例

console.log(fadeImg.container); slide
fadeImg.changeImage();     //FadeLoopImg changeImage function

//原型拓展

//对于原型对象。不论是父类的实例对象或者是子类的继承，都是对它的一个指向的引用，
//所以原型对象才会被共享。既然被共享，不论子类或者父类的实例对象都会继承下来
loopImages.prototype.getImageLength = () => {
    return this.imageArr.length;
}
FadeLoopImg.prototype.getContainer = () => {
    return this.container;
}

console.log(fadeImg.getImageLength);
console.log(fadeImg.getContainer);




/*******************原型继承****************************/
function prototypeExtend() {
    let F = function () { }, //缓存类，为实例化返回对象临时创建
        args = arguments,    //模板对象参数序列
        i = 0,               
        len = args.length;
        //遍历每个模板对象中的属性
        for(;i<len;i++){
            for(let j in args[i]){
                F.prototype[j] = args[i][j];
            }
        }
        return new F();
}

let penguin = prototypeExtend({
    speed:20,
    swim:function(){
        console.log('游泳速度'+this.speed);
    }
},{
    run:function(){}
},{
    jump:function(){}
})

penguin.swim();
penguin.run(10);
penguin.jump();






