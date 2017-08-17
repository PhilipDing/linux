**jwhois** searches Whois servers for the object on the [command](https://philipding.github.io/linux-command/command "command命令") line.The [host](https://philipding.github.io/linux-command/host "host命令") to query is taken from a global configuration [file](https://philipding.github.io/linux-command/file "file命令"), a configuration file specified on the command line, or selected directly on the command line.

### 语法  

```
jwhois [选项]
```

### 选项  

```
--version                  display version number and [patch](https://philipding.github.io/linux-command/patch "patch命令") level
--[help](https://philipding.github.io/linux-command/help "help命令")                     display this help
-v, --verbose              verbose debug output
-c FILE, --config=FILE     use FILE [as](https://philipding.github.io/linux-command/as "as命令") configuration file
-h HOST, --host=HOST       explicitly query HOST
-n, --no-redirect          disable content redirection
-s, --no-whoisservers      disable whois-servers.net [service](https://philipding.github.io/linux-command/service "service命令") support
-a, --raw                  disable reformatting of the query
-i, --display-redirections display all redirects instead of hiding them
-p PORT, --port=PORT       use port number PORT (in conjunction with HOST)
-r, --rwhois               force an rwhois query to be made
--rwhois-display=DISPLAY   sets the display option in rwhois queries
--rwhois-limit=LIMIT       sets the maximum number of matches to return
```

> 注：以上英文部分寻求网友协助翻译，翻译结果可发送至 sa([at](https://philipding.github.io/linux-command/at "at命令"))linuxde.net，谢谢！

### 实例  

显示指定用户信息：

```
# jwhois root

//查找root用户信息
```

查询域名信息：

```
[root@localhost ~]# jwhois linuxde.net
[Querying whois.verisign-grs.com]
[Redirected to whois.west263.com]
[Querying whois.west263.com]
[whois.west263.com]
Domain Name: linuxde.net                   
Registry Domain [id](https://philipding.github.io/linux-command/id "id命令"): whois protect
Registrar WHOIS Server: whois.west263.com

...省略部分内容
```