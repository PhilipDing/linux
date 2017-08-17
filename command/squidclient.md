**squidclient命令**使用[squid](https://philipding.github.io/linux-command/squid "squid命令")服务器的客户端管理工具，它可以查看squid服务器的详细运行信息和管理squid服务器。

### 语法  

```
squidclient(选项)(参数)
```

### 选项  

```
-a：不包含“[accept](https://philipding.github.io/linux-command/accept "accept命令"):header”；
-r：强制缓存重新加载URL；
-s：安静模式，不输出信息到标准输出设备；
-h：从指定主机获取url
-l：指定一个本地[ip](https://philipding.github.io/linux-command/ip "ip命令")地址进行绑定；
-p：端口号，默认为3128；
-m：指定发送请求的方法；
-u：代理认证用户名。
```

### 参数  

URL：指定操作缓存中的URL。