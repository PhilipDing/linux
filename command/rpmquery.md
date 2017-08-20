**rpmquery命令**使用多种依据从[rpm](#/rpm "rpm命令")数据库中查询软件包信息。

### 语法  

```
rpmquery(选项)
```

### 选项  

```
-qf：查询指定的文件所属的软件包；
-q：查询指定的软件包是否被安装；
-qc：查询软件包中的配置文件；
-qd：查询软件包中的文档文件；
-qi：查询软件包的基本信息。
```

### 实例  

使用rpmquery命令查询指定文件所属的软件包：

```
[root@localhost ~]# rpmquery -qf /usr/bin/[htpasswd](#/htpasswd "htpasswd命令")
[httpd](#/httpd "httpd命令")-2.2.3-81.el5.centos
```