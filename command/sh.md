**sh命令**是shell命令语言解释器，执行命令从标准输入读取或从一个文件中读取。通过用户输入命令，和内核进行沟通！Bourne Again Shell （即bash）是自由软件基金会（GNU）开发的一个Shell，它是Linux系统中一个默认的Shell。Bash不但与Bourne Shell兼容，还继承了C Shell、Korn Shell等优点。

### 语法  

```
bash [options] [[file](https://philipding.github.io/linux-command/file "file命令")]
```

### 选项  

```
-c string：命令从-c后的字符串读取。
-i：实现脚本交互。
-n：进行shell脚本的语法检查。
-x：实现shell脚本逐条语句的跟踪。
```

### 实例  

使用-x选项跟踪脚本调试shell脚本，能打印出所执行的每一行命令以及当前状态：

```
[root@AY1307311912260196fcZ satools]# sh -x check_ssh_login.sh
+ DEFINE=30
+ [cat](https://philipding.github.io/linux-command/cat "cat命令") /var/log/secure
+ [awk](https://philipding.github.io/linux-command/awk "awk命令") '/Failed/ {++[ip](https://philipding.github.io/linux-command/ip "ip命令")[$(NF-3)]} END {for (i in ip) print i"="ip[i]}'
++ cat /root/satools/black.txt
+ for i in '`cat /root/satools/black.txt`'
++ [echo](https://philipding.github.io/linux-command/echo "echo命令") 121.42.0.16=1427
++ awk -F= '{print $1}'
+ IP=121.42.0.16
++ echo 121.42.0.16=1427
++ awk -F= '{print $2}'
+ NUM=1427
+ '[' 1427 -gt 30 ']'
+ [grep](https://philipding.github.io/linux-command/grep "grep命令") 121.42.0.16 /etc/hosts.deny
+ '[' 1 -gt 0 ']'
+ echo [sshd](https://philipding.github.io/linux-command/sshd "sshd命令"):121.42.0.16
+ echo vsftpd:121.42.0.16
+ for i in '`cat /root/satools/black.txt`'
++ echo 121.42.0.72=276
++ awk -F= '{print $1}'
+ IP=121.42.0.72
++ awk -F= '{print $2}'
++ echo 121.42.0.72=276
+ NUM=276
+ '[' 276 -gt 30 ']'
+ grep 121.42.0.72 /etc/hosts.deny
+ '[' 1 -gt 0 ']'
+ echo sshd:121.42.0.72
+ echo vsftpd:121.42.0.72
```