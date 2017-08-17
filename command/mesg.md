**mesg命令**用于设置当前终端的写权限，即是否让其他用户向本终端发信息。将mesg设置y时，其他用户可利用[write](https://philipding.github.io/linux-command/write "write命令")命令将信息直接显示在您的屏幕上。

### 语法  

```
mesg(参数)
```

### 参数  

y/n：y表示运行向当前终端写信息，n表示禁止向当前终端写信息。

### 实例  

```
[root@localhost ~]# mesg y    #允许系统用户将信息直接显示在你的屏幕上。
[root@localhost ~]# mesg n    #不允许系统用户将信息直接显示在你的屏幕上。
```