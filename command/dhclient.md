**dhclient命令**使用动态主机配置协议动态的配置网络接口的网络参数。

### 语法  

```
dhclient(选项)(参数)
```

### 选项  

```
0：指定dhcp客户端监听的端口号；
-d：总是以前台方式运行程序；
-q：安静模式，不打印任何错误的提示信息；
-r：释放[ip](https://philipding.github.io/linux-command/ip "ip命令")地址。
```

### 参数  

网络接口：操作的网络接口。

### 实例  

```
dhclient -r     #释放IP
dhclient        #获取IP
```