# morra
剪刀，石头，布，单人游戏
#### clone
#### npm install
打开index.html

#### 技术：Vue + gulp + bootstrap

使用 vue 控制电脑和玩家出拳，电脑随机出拳，玩家点击界面按钮自定义出拳，可辨别胜负，并记录每局胜负日志，可清空日志。
使用bootstrap对页面布局，实现漂亮的css样式。
使用gulp对css文件和images文件打包。

#### 经验方法，
1. 最初对游戏的设想是页面倒数321，vue触发compchoice方法让电脑随即出拳，玩家点击按钮出拳，但是总会出现玩家抢时间犯规，所以，现在的实现是，页面初始化时完成，玩家就可以点击石头，剪刀，布按钮出拳，并同时触发compuchoice函数让电脑同时也计算出choice。
这样一来，玩家不会出现抢时间的犯规情况，页面也更加简洁，迅速。
2. 使用bootstrap时，配合了自己写的index.css，解决了按钮中提示字不居中的冲突。使用了section标签，将游戏分为三部分：控制part，竞技场part和日志part，控制part采用一个row -> 四个col-md-3，平分12份。竞技场part是两两平分，玩家和电脑分别六份。日志part是ul、li列表组件，采用info标识平局，success标识玩家胜，warning标识电脑胜利。
3. gulp使用：
gulp对es6语法不识别，会报错unable to minify javascript，下载gulp-babel, babel-preset-es2015配合使用，让es6转为es5，下载gulp-util使用其log方法，可以打印出js中哪里出错，便于查找。下载gulp-concat， 可以将多个js文件，按照顺序打包为一个js文件。 ****   压缩图片    ****报错，原因是... gulp unhandled "error" event... enoent.js 在stackoverflow.com上找到前辈们同样地提问，推荐解决方法最多的是删除node-module，重新npm install 一下。再 gulp启动，确实当出现日志表明图片压缩完成，页面渲染成功。但是vue是和html息息相关的，打包后，猜想是gulp对js做了改动，所以页面报错 can't set property "Vue" of undefined, 所以，只是打包较大的images文件和css。
