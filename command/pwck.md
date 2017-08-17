**pwck命令**用来验证系统认证文件`/etc/[passwd](https://philipding.github.io/linux-command/passwd "passwd命令")`和`/etc/shadow`的内容和格式的完整性。

### 语法  

```
pwck(选项)(参数)
```

### 选项  

```
-q：仅报告错误信息；
-s：以用户[id](https://philipding.github.io/linux-command/id "id命令")排序文件“/etc/passwd”和“/etc/shadow”;
-r：只读方式运行指令。
```

### 参数  

*   密码文件：指定密码文件的路径；
*   影子文件：指定影子文件的路径。

### 实例  

```
pwck /etc/passwd
user '[lp](https://philipding.github.io/linux-command/lp "lp命令")': directory '/var/spool/lpd' does not exist
user 'news': directory '/var/spool/news' does not exist
user 'uucp': directory '/var/spool/uucp' does not exist
user 'www-data': directory '/var/www' does not exist
user 'list': directory '/var/list' does not exist
user 'irc': directory '/var/run/ircd' does not exist
user 'gnats': directory '/var/lib/gnats' does not exist
user 'nobody': directory '/nonexistent' does not exist
user 'syslog': directory '/home/syslog' does not exist
user 'couchdb': directory '/var/lib/couchdb' does not exist
user 'speech-dispatcher': directory '/var/run/speech-dispatcher' does not exist
user 'usbmux': directory '/home/usbmux' does not exist
user 'haldaemon': directory '/var/run/hald' does not exist
user 'pulse': directory '/var/run/pulse' does not exist
user 'saned': directory '/home/saned' does not exist
user 'hplip': directory '/var/run/hplip' does not exist
pwck：无改变
```