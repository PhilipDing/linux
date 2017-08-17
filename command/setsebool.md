**setsebool命令**是用来修改SElinux策略内各项规则的布尔值。setsebool命令和[getsebool](https://philipding.github.io/linux-command/getsebool "getsebool命令")命令是SELinux修改和查询布尔值的一套工具组。SELinux的策略与规则管理相关命令：[seinfo](https://philipding.github.io/linux-command/seinfo "seinfo命令")命令、[sesearch](https://philipding.github.io/linux-command/sesearch "sesearch命令")命令、getsebool命令、setsebool命令、[semanage](https://philipding.github.io/linux-command/semanage "semanage命令")命令。

### 语法  

```
setsebool [-P] 布尔值=[0|1]
```

### 选项  

```
-P:直接将设置值写入配置文件，该设置数据将来会生效的。
```

### 实例  

允许vsvtp匿名用户写入权限：

```
setsebool -P allow_ftpd_anon_write=1
```

如果你希望你的[ftp](https://philipding.github.io/linux-command/ftp "ftp命令")用户可以访问自己的家目录的话，需要开启：

```
setsebool -P ftp_home_dir 1
```

如果你希望将vsftpd以daemon的方式运行的话，需要开启：

```
setsebool -P ftpd_is_daemon 1
```

你可以让SElinux停止保护vsftpd的daemon方式动行：

```
setsebool -P ftpd_disable_trans 1 
```

HTTP被设置允许cgi的设置：

```
setsebool -P httpd_enable_cgi 1
```

允许用户HHTP访问其家目录，该设定限仅于用户的家目录主页：

```
setsebool -P httpd_enable_homedirs 1
[chcon](https://philipding.github.io/linux-command/chcon "chcon命令") -R -t httpd_sys_content_t ~user/public_html
```

允许[httpd](https://philipding.github.io/linux-command/httpd "httpd命令")访问终端：

```
setsebool -P httpd_tty_comm 1
```

关闭Selinux的关于httpd进程守护的保护：

```
setsebool -P httpd_disable_trans 1
[service](https://philipding.github.io/linux-command/service "service命令") httpd restart
```

关于named、master更新selinux设定：

```
setsebool -P named_write_master_zones 1
```

关闭named的进程守护保护：

```
setsebool -P named_disable_trans 1
service named restart
```

Selinux将本机的NFS共享设置成只读：

```
setsebool -P nfs_export_all_ro 1
```

SElinux将本机的NFS共享设置成可读可写：

```
setsebool -P nfs_export_all_rw 1
```

如果你想要将远程NFS的家目录共享到本机，需要开启：

```
setsebool -P use_nfs_home_dirs 1
```

如果samba服务器共享目录给多个域，则需要：

```
setsebool -P allow_smbd_anon_write=1
```

samba服务器要共享家目录时：

```
setsebool -P samba_enable_home_dirs 1
```

如果你需在本机上使用远程samba服务器的家目录：

```
setsebool -P use_samba_home_dirs 1
```

关闭selinux关于samba的进程守护的保护：

```
setsebool -P smbd_disable_trans 1
service smb restart
```

允许[rsync](https://philipding.github.io/linux-command/rsync "rsync命令")其他用户写入时：

```
setsebool -P allow_rsync_anon_write=1
```

停止rsync的进程保护

```
setsebool -P rsync_disable_trans 1
```

允许系统使用kerberos：

```
setsebool -P allow_kerberos 1
```

系统工作在nis环境时：

```
setsebool -P allow_ypbind 1
```