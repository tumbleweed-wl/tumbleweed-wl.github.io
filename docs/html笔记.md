---
id: lei1
title: HTML
slug: /lei
---
## HTML练习笔记
---
### 头部（不可视）
---
```html
<!DOCTYPE html>
<!--定义了整个页面属于html-->
<html>
    <!--这是头部的内容，定义此html内的信息-->
    <head>
        <!--基本元，让浏览器能够识别这个页面的内容-->
        <meta charset='utf-8'>
        <!--为搜索引擎定义关键词-->
        <meta name="keyword" content="html,css,javascript">
        <!--为网页定义描述内容-->
        <meta name="decscription" content="web & 教程">
        <!--定义网页作者-->
        <meta name ='author' content="佚名">
        <!--每*秒刷新当前页面-->
        <meta http-equiv="refresh" content="60">
        <!--链接标签，rel为样式表，href则为路径指引-->
        <link rel="stylesheet" href="./css/test.css">
        <!--定义这个页面的标签是什么-->
        <title>test</title>
    </head>
```
### 主体（可视）
---
#### 一个登录框
```html
    <body>
        <div>
            <h3>这是一个练习页面</h3>
        <form action="www.baidu.com"><!--提交form表单-->
            <fieldset><!--当前表单外包边框-->
                <legend>包裹框标题</legend>
            练习用户名:<br>
            <input type="user" placeholder="请输入用户名" 
            name="user">
            <br>
            练习密码:<br>
            <input type="password" placeholder="请输入密码" 
            name="password"><br><br>
            <input type="submit" value="完成">
            <input type="reset" value="重置">
            </fieldset>
        </form>
        </div>
```
:::important
1.input表单标签是输入标签，输入类型是由类型属性（type）定义的，常用的一般为文本text,单选radio,复选checkbox,提交submit,重置reset

2.如果在type内输入按钮button，那么可以在value值内自定义按钮名称,可使用form action的表单属性进行页面跳转
:::

### 选项框
---
#### 下拉选项框
```html
            <select name="change"><!--下拉框-->
                <option value="111">111</option>
                <option value="222">222</option>
                <option value="333">333</option>
                <option value="444">444</option>
            </select>
```
#### 复选框
```html
                <input type="checkbox" name="vehicle" value="man">
                男<br>
                <input type="checkbox" name="vehicle" value="woman">
                女<br>
                <button value="yes">已满18岁,继续</button><!--按钮-->
                <button value="no">未满18岁,退出</button>
```
>复选框,name为当前组名,value值需要一致才能完成当前表单下的复选，若value值不一致则无法
无法复选。


#### 单选框
```html
                <input type="radio" name="lei" value="ok">
                okokok
                <br>
                <input type="radio" name="lei" value="no">
                nonono<br>
                <input type="submit"><!--提交按钮-->
```
>单选框,同复选框组名规则一样

### 字体外观设置
```html
        <!--这里是标题-->
        <h1>标题1</h1>
        <h2 >标题2</h2>
        <h3>标题3</h3>
        <h4>标题4</h4>
        <h5>标题5</h5>
        <h6>标题6</h6>
        <strong>加粗</strong>         
        <em>斜体</em>
        <small>缩小</small>
        <sub>向上</sub>
        <sup><del>bushi</del>向下</sup>
        <p>段落</p>
        <code>计算机输出</code>
        <kbd>键盘输入</kbd>
        <textarea>文本框</textarea>
        <samp>计算机代码<ins>样本</ins></samp>
        <var>计算机变量</var>
```

### a标签（链接）
```html
        <!--这里是a标签链接-->
        <a href="https://www.runoob.com/html/html-basic.html">
        <img src="./img/tst.jpg" alt="图片跑丢了" 
        width="150" height="150"></a>
        <!--alt定义图片无法加载后显示的文本-->
        
        <hr><!--这是个下划线，标签名跟人力资源简称一样-->
        <a href="https://www.baidu.com/">这是百度</a>
        <a href="https://www.runoob.com/" target="_blank">
        访问菜鸟教程!</a>
        <!--target="_blank"是让这个链接在一个新窗口打开，
        如不用则在当前页面直接跳转-->
```
:::tip
a标签在未指定href的路径时，可以使用#填充，#是标签内置的一个方法，代表top的作用。所以用这种方法`点击后`网页返回到页面的`最顶端`。
:::
>
URL:统一资源定位符（全称：Uniform Resource Locator，常缩写为URL），有时也被俗称为 网页地址（网址）。
>
（1） .：代表目前所在的目录，相对路径。 如：` <a>文本 </a> 或 <img src="./abc" />`
>
（2） ..：代表上一层目录，相对路径。 如：` <a>文本 </a> 或 <img src="../abc" />`
>
（3） ../../：代表的是上一层目录的上一层目录，相对路径。 如：` <img src="../../abc" />`
>
（4） /：代表根目录，绝对路径。 如：[文本] (/abc) 或 `<img src="/abc" />`

>
href: （全称：Hypertext Reference），指定网络资源的位置，从而在当前元素或者当前文档和由当前属性定义的需要的锚点或资源之间定义一个链接或者关系。
>
href 目的不是为了引用使用资源，而是为了建立与其他之间的联系，让当前标签能够链接到目标地址。
例如链接CSS样式表就需要以这个元素引用路径。

>src:（全称：source），指向外部资源的位置，指向的内容将会应用到文档中当前标签所在位置。
>
>在请求 src 资源时会将其指向的资源下载并应用到文档中，比如 JavaScript 脚本，img 图片;


### 列表
>
有序列表始于 `<ol>` 标签。每个列表项始于` <li>` 标签。
列表项使用数字来标记。
>
无序列表使用粗体圆点进行标记
无序列表使用`<ul>` 标签,列表项内容可以使用`<li>`标签，不限于使用数字。
>
自定义列表以 `<dl> `标签开始。每个自定义列表项标题以` <dt> `开始。
每个自定义列表项的内容以 `<dd> `开始

### 表格
---
:::note
表格从table开始，行从tr开始，表内内容由td开始

border属性用于定义表格的边框
:::

```html
        <h3>表格</h3>
        <caption>表格的标题</caption>
        <table border="1">
        <tr>
             <th colspan="3">用th标签进行定义表格表头，
             内容一般会居中显示，并且有加粗效果</th>
            <td>练习数字1</td>
            <td>练习数字2</td>
        </tr>
        </table>
```

:::note
colspan可让一格内容跨行显示
:::

```html
        <h3>表格</h3>
        <caption>表格的标题</caption>
        <table border="2">
        <tr>
                <th rowspan="3">用th标签进行定义表格表头，
                内容一般会居中显示，并且有加粗效果</th>
        </tr>
        <tr>
            <td>练习数字1</td>
            <td>练习数字2</td>
        </tr>
        
```

:::note
rowspan可让一个内容跨列显示
:::

#### 表中表
```html
<table border="1">
   <td>这里是给表格里面添加了一个表中表
            <table border="1" cellpaddding='10'>
            <!--cellpidding是创建表格与内容之间的间距-->
            <tr>
                <td>练习数字1</td>
                <td>练习数字2</td>       
            </tr>    
        <tr>
            <td>练习数字3</td>
            <td>练习数字4</td>
        </tr>
             </table>
    </td>
</table>
```
#### 表格内插入列表
```html
        <tr>
            <table border="1" cellspacing='10'>
            <td>
            <ul>
                <li>练习数字1</li>
                <li>练习数字2</li>
                <li>练习数字3</li>
            </ul>
          </td>
        </tr>
```
#### 顺序排列表格内容
```html
<table border="1">
       <td>
                <ol start="40"><!--这个strat是表示
                有序列表从哪个数字开始顺序向下排序-->
                    <li>练习数字1</li>
                    <li>练习数字2</li>
                    <li>练习数字3</li>
                </ol>
        </td>
</table>
```
#### 有序列表
```html
        <!--可以使用style样式编辑不同的列表样式，
        比如list-style-type:disc为添加圆点符号-->
        <h4>测试一</h4>
        <ol>
            <li>测试一号</li>
            <li>测试二号</li>
            <li>测试三号</li>
            <li>测试四号</li>
        </ol>
        
          <h4>测试四</h4>
        <ol type="A"><!--不同类的有序列表，
        可以使用type插入不同类型的序号-->
            <li>测试英文排序1</li>
            <li>测试英文排序2</li>
        </ol>
        <h4>测试五</h4>
        <ol type="I">
            <li>测试罗马数字排序1</li>
            <li>测试罗马数字排序2</li>
        </ol>
```
#### 无序列表
```html
        <!--嵌套列表，可以层叠式插入-->
        <h4>测试二</h4>
        <ul>
            <li>测试一号</li>
            <li>测试二号</li>
            <ul>
                <li>测试三号</li>
                <li>测试四号</li>
                <ol>
                    <li>测试重复嵌套一号</li>
                    <li>测试重复嵌套二号</li>
                </ol>
            </ul>
        </ul>
```
#### 自定义列表
```html
        <h4>测试三</h4>
        <dl>
            <dt>测试一号</dt>
            <dd>（这里可以自定义编号）测试九又四分之三号</dd>
            <dt>测试二号</dt>
            <dd>-测试十又四分之三号</dd>
        </dl>
```
### 区块元素
---
>大多数 HTML 元素被定义为`块级元素(div)`或`内联元素(span)`。

* 块级元素在浏览器显示时，通常会以新行来开始（和结束）。
* 实例: `<h1>, <p>, <ul>, <table>`
* 内联元素在显示时通常不会以新行开始。
* 实例:` <b>, <td>, <a>, <img>`

### 布局
---
**这是一个布局的例子**

```html
<div id="container" style="width:500px"><!--最外层框架的设置-->

<div id="header" style="background-color:#FFA500;">
<h1 style="margin-bottom:0;">顶部栏设置，
margin-bottom元素为设置外边距向下对齐
</h1></div>

<div id="menu" style="background-color:#FFD700;height:200px;width:100px;float:left;">
<!--float是设置框体的浮动对齐方式-->
<b>这里是菜单栏</b><br>
HTML<br>
CSS<br>
JavaScript</div>

<div id="content" style="background-color:#EEEEEE;height:200px;width:400px;float:left;">
内容在这里</div>

<div id="footer" style="background-color:#FFA500;clear:both;text-align:center;">
底部内容</div>
 
</div>
```

### 字符实体
---
:::tip

实体名称对大小写敏感！

:::


| 显示结果 | 描述        | 实体名称          | 实体编号 |
| :------- | :---------- | :---------------- | :------- |
|          | 空格        | `&nbsp;`            | &#160;   |
| <        | 小于号      | `&lt;`              | &#60;    |
| >        | 大于号      | `&gt;`              | &#62;    |
| &        | 和号        | `&amp;`             | &#38;    |
| "        | 引号        | `&quot;`            | &#34;    |
| '        | 撇号        |` &apos; (IE不支持)` | &#39;    |
| ￠       | 分          | `&cent;`            | &#162;   |
| £        | 镑          | `&pound;`           | &#163;   |
| ¥        | 人民币/日元 | `&yen;`             | &#165;   |
| €        | 欧元        | `&euro;`            | &#8364;  |
| §        | 小节        | `&sect;`            | &#167;   |
| ©        | 版权        | `&copy;`            | &#169;   |
| ®        | 注册商标    | `&reg;`             | &#174;   |
| ™        | 商标        | `&trade;`           | &#8482;  |
| ×        | 乘号        | `&times;`          | &#215;   |
| ÷        | 除号        | `&divide;`          | &#247;   |
