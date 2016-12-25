#master分支为基本项目骨架，
- 使用前先只需要执行下面一行命令
~~~shell
  npm test
~~~

- 注意package.json里面的配置项

~~~  javascript
  "scripts": {
    "postinstall": "bower install",  //npm执行之后执行的命令
    "prestart": "npm install",     //start命令执行之前执行
    "start": "./node_modules/.bin/hs -a localhost -p 9000 -o",
    "pretest": "npm install", //test命令执行之前执行
    "test": "./node_modules/.bin/browser-sync start --server app --files 'app/index.html' --no-notify"
		// --server    是指启动的服务名
		// --files   是指启动服务器是打开的入口文件
  }
~~~












