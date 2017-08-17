**mountpoint命令**用来判断指定的目录是否是加载点，**如果是挂载点返回0，如果不是就返回非0。**设备总是挂载在某个指定的目录下，所以就可以使用mountpoint这条命令来确认某个目录是否”临时性“的被文件系统占用。

### 语法  

```
mountpoint(选项)(参数)
```

### 选项  

```
-q：不打印任何信息；
-d：打印文件系统的主设备号和次设备号；
-x：打印块数设备的主设备号和次设备号。
```

### 参数  

目录：指定要判断的目录。

### 实例  

查看`/mnt`目录是不是挂载点：

```
mountpoint /mnt
/mnt is a mountpoint
```

这里，我在`/mnt`目录下面挂载了一些东西。

查看`/usr/local`是不是挂载点： 

```
mountpoint /usr/local
/usr/local is not a mountpoint
```

这里，我没有把任何分区挂载到`/usr/local`目录上面。 

查看挂载的`/mnt`的主/次设备号码： 

```
mountpoint -d /mnt
8:5 
```

看一个设备的主/次设备号：

```
mountpoint -x /dev/sda9
8:9
```