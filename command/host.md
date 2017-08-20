**host命令**是常用的分析域名查询工具，可以用来测试域名系统工作是否正常。

### 语法  

```
host(选项)(参数)
```

### 选项  

```
-a：显示详细的DNS信息；
-c<类型>：指定查询类型，默认值为“IN“；
-C：查询指定主机的完整的SOA记录；
-r：在查询域名时，不使用递归的查询方式；
-t<类型>：指定查询的域名信息类型；
-v：显示指令执行的详细信息；
-[w](#/w "w命令")：如果域名服务器没有给出应答信息，则总是等待，直到域名服务器给出应答；
-W<时间>：指定域名查询的最长时间，如果在指定时间内域名服务器没有给出应答信息，则退出指令；
-4：使用IPv4；
-6：使用IPv6.
```

### 参数  

主机：指定要查询信息的主机信息。

### 实例  

```
[root@localhost ~]# host www.linuxde.net 
www.linuxde.net is an [alias](#/alias "alias命令") for host.1.linuxde.net.
host.1.linuxde.net has address 100.42.212.8

[root@localhost ~]# host -a www.linuxde.net
Trying "www.linuxde.net"
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, [id](#/id "id命令"): 34671
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;www.linuxde.net.               IN      ANY

;; ANSWER SECTION:
www.linuxde.net.        463     IN      CNAME   host.1.linuxde.net.

Received 54 bytes from 202.96.104.15#53 in 0 ms
```