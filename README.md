# generator-pat-marionette [![Build Status](https://secure.travis-ci.org/laogong5i0/generator-pat-marionette.png?branch=master)](https://travis-ci.org/laogong5i0/generator-pat-marionette)

> [Yeoman](http://yeoman.io) generator


## Getting Started

1. 全局安装 yeoman、grunt-cli、bower

```bash
npm install -g yo
npm install -g grunt-cli
npm install -g bower
```
2. 由于当前generator没有注册到gurnt上去，所以你要先把源文件复制到你自己的电脑上。然后cd到generator-pat-marionette里
如generator-pat-marionette放在d:www/generator-pat-marionette

```bash
cd www/generator-pat-marionette
```
然后使用npm link将pat-marionette连接成全局模块。

```bash
npm link
```

完成安装后可以使用yo查看当前所安装generator

```bash
yo
```

3. 使用yo命令创建你的第一个工程

```bash
yo pat-marionette
```
按提示输入Y或者N即可

4. 使用yo命令创建sub app

```bash
yo pat-marionette:subapp [[subapp name]] [[module name]]
```


--------------------------------------------------------------------------------

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-pat-marionette from npm, run:

```bash
npm install -g generator-pat-marionette
```

Finally, initiate the generator:

```bash
yo pat-marionette
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT
