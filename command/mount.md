**mount命令**用于加载文件系统到指定的加载点。此命令的最常用于挂载cdrom，使我们可以访问cdrom中的数据，因为你将光盘插入cdrom中，Linux并不会自动挂载，必须使用Linux mount命令来手动完成挂载。

### 语法  

```
mount(选项)(参数)
```

### 选项  

```
-V：显示程序版本；
-l：显示已加载的文件系统列表；
-h：显示帮助信息并退出；
-v：冗长模式，输出指令执行的详细信息；
-n：加载没有写入文件“/etc/mtab”中的文件系统；
-r：将文件系统加载为只读模式；
-a：加载文件“/etc/fstab”中描述的所有文件系统。
```

### 参数  

*   设备文件名：指定要加载的文件系统对应的设备名；
*   加载点：指定加载点目录。

### 实例  

```
mount -t auto /dev/cdrom /mnt/cdrom
mount: mount point /mnt/cdrom does not exist           /mnt/cdrom目录不存在，需要先创建。

[cd](https://philipding.github.io/linux-command/cd "cd命令") /mnt
-bash: cd: /mnt: No such [file](https://philipding.github.io/linux-command/file "file命令") or directory

[mkdir](https://philipding.github.io/linux-command/mkdir "mkdir命令") -p /mnt/cdrom    创建/mnt/cdrom目录
[ls](https://philipding.github.io/linux-command/ls "ls命令")
bin   dev  home    lib         media  mnt  proc  sbin     srv  tmp  var
boot  etc  initrd  lost+found  misc   opt  root  selinux  sys  usr

mount -t auto /dev/cdrom /mnt/cdrom     挂载cdrom
mount: block device /dev/cdrom is [write](https://philipding.github.io/linux-command/write "write命令")-protected, mounting [read](https://philipding.github.io/linux-command/read "read命令")-only     挂载成功

ll /mnt/cdrom    查看cdrom里面内容
total 859
dr-xr-xr-x  4 root root   2048 Sep  4  2005 CentOS
-r--r--r--  2 root root   8859 Mar 19  2005 centosdocs-[man](https://philipding.github.io/linux-command/man "man命令").css
-r--r--r--  9 root root  18009 Mar  1  2005 GPL
dr-xr-xr-x  2 root root 241664 May  7 02:32 headers
dr-xr-xr-x  4 root root   2048 May  7 02:23 images
dr-xr-xr-x  2 root root   4096 May  7 02:23 isolinux
dr-xr-xr-x  2 root root  18432 May  2 18:50 NOTES
-r--r--r--  2 root root   5443 May  7 01:49 RELEASE-NOTES-en.html
dr-xr-xr-x  2 root root   2048 May  7 02:34 repodata
-r--r--r--  9 root root   1795 Mar  1  2005 [rpm](https://philipding.github.io/linux-command/rpm "rpm命令")-GPG-KEY
-r--r--r--  2 root root   1795 Mar  1  2005 RPM-GPG-KEY-centos4
-r--r--r--  1 root root 571730 May  7 01:39 yumgroups.xml
```