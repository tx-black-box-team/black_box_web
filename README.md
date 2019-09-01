# vue_ts

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### Tips:

  #### 如果一直运行 ==/sockjs-node/info?t===[错误请求]

  <html>
  首先 sockjs-node 是一个JavaScript库，提供跨浏览器JavaScript的API，创建了一个低延迟、全双工的浏览器和web服务器之间通信通道。
  </html>

      * 服务端：sockjs-node（https://github.com/sockjs/sockjs-node）
      * 客户端：sockjs-clien（https://github.com/sockjs/sockjs-client）

  <html>
  如果你的项目没有用到 sockjs，vuecli3 运行 npm run serve 之后 network 里面一直调用一个接口：http://localhost:8080/sockjs-node/info?t=1462183700002

  作为一个有节操的程序猿，实在不能忍受，特意自己研究了下源码，从根源上关闭这个调用
  </html>
    
  ```
    1. 找到/node_modules/sockjs-client/dist/sockjs.js 

    2.找到代码的 1605行  

      try {
      //  self.xhr.send(payload); 把这里注掉
      } catch (e) {
        self.emit('finish', 0, '');
        self._cleanup(false);
      }
    3.刷新，搞定。

  ```

  