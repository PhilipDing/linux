**rpm2cpio命令**用于将[rpm](https://philipding.github.io/linux-command/rpm "rpm命令")软件包转换为[cpio](https://philipding.github.io/linux-command/cpio "cpio命令")格式的文件。

### 语法  

```
rpm2cpio(参数)
```

### 参数  

文件：指定要转换的rpm包的文件名。

### 实例  

```
rpm2cpio ../libstdc++-4.3.0-8.i386.rpm | cpio -idv
```