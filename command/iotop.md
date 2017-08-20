**iotop命令**是一个用来监视磁盘I/O使用状况的[top](#/top "top命令")类工具。iotop具有与top相似的UI，其中包括PID、用户、I/O、进程等相关信息。Linux下的IO统计工具如[iostat](#/iostat "iostat命令")，nmon等大多数是只能统计到per设备的读写情况，如果你想知道每个进程是如何使用IO的就比较麻烦，使用iotop命令可以很方便的查看。

iotop使用Python语言编写而成，要求Python2.5（及以上版本）和Linux kernel2.6.20（及以上版本）。iotop提供有源代码及[rpm](#/rpm "rpm命令")包，可从其[官方主页](http://guichaz.free.fr/iotop/)下载。

### 安装  

**Ubuntu**

```
[apt-get](#/apt-get "apt-get命令") [install](#/install "install命令") iotop
```

**CentOS**

```
[yum](#/yum "yum命令") install iotop
```

**编译安装**

```
[wget](#/wget "wget命令") http://guichaz.[free](#/free "free命令").fr/iotop/files/iotop-0.4.4.[tar](#/tar "tar命令").gz    
tar zxf iotop-0.4.4.tar.gz    
python setup.py build    
python setup.py install    

```

### 语法  

```
iotop（选项）
```

### 选项  

```
-o：只显示有io操作的进程
-b：批量显示，无交互，主要用作记录到文件。
-n NUM：显示NUM次，主要用于非交互式模式。
-d SEC：间隔SEC秒显示一次。
-p PID：监控的进程pid。
-u USER：监控的进程用户。
```

**iotop常用快捷键：**

1.  左右箭头：改变排序方式，默认是按IO排序。
2.  r：改变排序顺序。
3.  o：只显示有IO输出的进程。
4.  p：进程/线程的显示方式的切换。
5.  a：显示累积使用量。
6.  q：退出。

### 实例  

直接执行iotop就可以看到效果了：

```
Total DISK [read](#/read "read命令"):       0.00 B/s | Total DISK [write](#/write "write命令"):       0.00 B/s
  TID  PRIO  USER     DISK READ  DISK WRITE  SWAPIN     IO>    [command](#/command "command命令")
    1 be/4 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % [init](#/init "init命令") [3]
    2 be/4 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % [kthreadd]
    3 rt/4 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % [migration/0]
    4 be/4 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % [ksoftirqd/0]
    5 rt/4 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % [watchdog/0]
    6 rt/4 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % [migration/1]
    7 be/4 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % [ksoftirqd/1]
    8 rt/4 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % [watchdog/1]
    9 be/4 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % [events/0]
   10 be/4 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % [events/1]
   11 be/4 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % [khelper]
2572 be/4 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % [bluetooth]
```