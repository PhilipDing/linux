**nc命令**是**netcat命令**的简称，都是用来设置路由器。

### 语法  

```
nc/netcat(选项)(参数)
```

### 选项  

```
-g<网关>：设置路由器跃程通信网关，最多设置8个；
-G<指向器数目>：设置来源路由指向器，其数值为4的倍数；
-h：在线帮助；
-i<延迟秒数>：设置时间间隔，以便传送信息及扫描通信端口；
-l：使用监听模式，监控传入的资料；
-n：直接使用[ip](#/ip "ip命令")地址，而不通过域名服务器；
-o<输出文件>：指定文件名称，把往来传输的数据以16进制字码倾倒成该文件保存；
-p<通信端口>：设置本地主机使用的通信端口；
-r：指定源端口和目的端口都进行随机的选择；
-s<来源位址>：设置本地主机送出数据包的IP地址；
-u：使用UDP传输协议；
-v：显示指令执行过程；
-[w](#/w "w命令")<超时秒数>：设置等待连线的时间；
-z：使用0输入/输出模式，只在扫描通信端口时使用。
```

### 参数  

*   主机：指定主机的IP地址或主机名称；
*   端口号：可以是单个整数或者是一个范围。

### 实例  

**远程拷贝文件**

从server1拷贝文件到server2上。需要先在server2上，用nc激活监听。

server2上运行：

```
[root@localhost2 tmp]# nc -[lp](#/lp "lp命令") 1234 > [install](#/install "install命令").log
```

server1上运行：

```
[root@localhost1 ~]# ll install.log
-rw-r–r–   1 root root 39693 12月 20   2007 install.log

[root@localhost1 ~]# nc -w 1 192.168.228.222 1234 < install.log
```

**克隆硬盘或分区**

操作与上面的拷贝是雷同的，只需要由[dd](#/dd "dd命令")获得硬盘或分区的数据，然后传输即可。克隆硬盘或分区的操作，不应在已经[mount](#/mount "mount命令")的的系统上进行。所以，需要使用安装光盘引导后，进入拯救模式（或使用Knoppix工 具光盘）启动系统后，在server2上进行类似的监听动作：

```
nc -l -p 1234 | dd of=/dev/sda
```

server1上执行传输，即可完成从server1克隆sda硬盘到server2的任务：

```
dd if=/dev/sda | nc 192.168.228.222 1234
```

完成上述工作的前提，是需要落实光盘的拯救模式支持服务器上的网卡，并正确配置IP。

**端口扫描**

```
nc -v -w 1 192.168.228.222 -z 1-1000
localhost2 [192.168.228.222] 22 ([ssh](#/ssh "ssh命令")) open
```

**保存Web页面**

```
while true; do
    nc -l -p 80 -q 1 < somepage.html;
done
```

**聊天**

nc还可以作为简单的字符下聊天工具使用，同样的，server2上需要启动监听：

```
[root@localhost2 tmp]# nc -lp 1234
```

server1上传输：

```
[root@localhost1 ~]# nc 192.168.228.222 1234
```

这样，双方就可以相互交流了。使用Ctrl+D正常退出。

**传输目录**

从server1拷贝nginx-0.6.34目录内容到server2上。需要先在server2上，用nc激活监听，server2上运行：

```
[root@localhost2 tmp]# nc -l 1234 | [tar](#/tar "tar命令") xzvf -
```

server1上运行：

```
[root@localhost1 ~]# ll -d nginx-0.6.34
drwxr-xr-x 8 1000 1000 4096 12-23 17:25 nginx-0.6.34

[root@localhost1 ~]# tar czvf – nginx-0.6.34 | nc 192.168.228.222 1234
```