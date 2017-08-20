**lastlog命令**用于显示系统中所有用户最近一次登录信息。

lastlog文件在每次有用户登录时被查询。可以使用lastlog命令检查某特定用户上次登录的时间，并格式化输出上次登录日志`/var/log/lastlog`的内容。它根据UID排序显示登录名、端口号（tty）和上次登录时间。如果一个用户从未登录过，lastlog显示`**Never logged**`。注意需要以root身份运行该命令。

### 语法  

```
lastlog(选项)
```

### 选项  

```
-b<天数>：显示指定天数前的登录信息；
-h：显示召集令的帮助信息；
-t<天数>：显示指定天数以来的登录信息；
-u<用户名>：显示指定用户的最近登录信息。
```

### 实例  

```
lastlog
Username         Port     From             Latest
root             pts/0    221.6.45.34      Tue Dec 17 09:40:48 +0800 2013
bin                                        **Never logged in**
daemon                                     **Never logged in**
adm                                        **Never logged in**
[lp](#/lp "lp命令")                                         **Never logged in**
[sync](#/sync "sync命令")                                       **Never logged in**
[shutdown](#/shutdown "shutdown命令")                                   **Never logged in**
[halt](#/halt "halt命令")                                       **Never logged in**
[mail](#/mail "mail命令")                                       **Never logged in**
news                                       **Never logged in**
uucp                                       **Never logged in**
operator                                   **Never logged in**
games                                      **Never logged in**
gopher                                     **Never logged in**
[ftp](#/ftp "ftp命令")                                        **Never logged in**
nobody                                     **Never logged in**
vcsa                                       **Never logged in**
ntp                                        **Never logged in**
[sshd](#/sshd "sshd命令")                                       **Never logged in**
nscd                                       **Never logged in**
ldap                                       **Never logged in**
postfix                                    **Never logged in**
www                                        **Never logged in**
[mysql](#/mysql "mysql命令")                                      **Never logged in**
```