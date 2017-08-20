**groups命令**在标准输入输出上输出指定用户所在组的组成员，每个用户属于`/etc/[passwd](#/passwd "passwd命令")`中指定的一个组和在`/etc/group`中指定的其他组。

### 语法  

```
groups(选项)(参数)
```

### 选项  

```
-[help](#/help "help命令")：显示命令的帮助信息；
--version：显示命令的版本信息。
```

### 参数  

用户名：指定要打印所属工作组的用户名。

### 实例  

显示linux用户所属的组

```
groups linux
linux : linux adm dialout cdrom plugdev [lpadmin](#/lpadmin "lpadmin命令") admin sambashare
```