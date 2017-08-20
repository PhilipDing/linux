**systemctl命令**是系统服务管理器指令，它实际上将 [service](#/service "service命令") 和 [chkconfig](#/chkconfig "chkconfig命令") 这两个命令组合到一起。

<table>

<tbody>

<tr>

<td>任务</td>

<td>旧指令</td>

<td>新指令</td>

</tr>

<tr>

<td>使某服务自动启动</td>

<td>chkconfig --level 3 [httpd](#/httpd "httpd命令") on</td>

<td>systemctl [enable](#/enable "enable命令") httpd.service</td>

</tr>

<tr>

<td>使某服务不自动启动</td>

<td>chkconfig --level 3 httpd off</td>

<td>systemctl disable httpd.service</td>

</tr>

<tr>

<td>检查服务状态</td>

<td>service httpd status</td>

<td>systemctl status httpd.service （服务详细信息） systemctl is-active httpd.service （仅显示是否 Active)</td>

</tr>

<tr>

<td>显示所有已启动的服务</td>

<td>chkconfig --list</td>

<td>systemctl list-units --[type](#/type "type命令")=service</td>

</tr>

<tr>

<td>启动某服务</td>

<td>service httpd start</td>

<td>systemctl start httpd.service</td>

</tr>

<tr>

<td>停止某服务</td>

<td>service httpd stop</td>

<td>systemctl stop httpd.service</td>

</tr>

<tr>

<td>重启某服务</td>

<td>service httpd restart</td>

<td>systemctl restart httpd.service</td>

</tr>

</tbody>

</table>

### 实例  

1.启动nfs服务

```
systemctl start nfs-server.service
```

2.设置开机自启动

```
systemctl enable nfs-server.service
```

3.停止开机自启动

```
systemctl disable nfs-server.service
```

4.查看服务当前状态

```
systemctl status nfs-server.service
```

5.重新启动某服务

```
systemctl restart nfs-server.service
```

6.查看所有已启动的服务

```
systemctl list -units --type=service
```

开启防火墙22端口

```
[iptables](#/iptables "iptables命令") -I INPUT -p tcp --dport 22 -j [accept](#/accept "accept命令")
```

如果仍然有问题，就可能是SELinux导致的

关闭SElinux：

修改`/etc/selinux/config`文件中的`SELINUX=””`为disabled，然后重启。

彻底关闭防火墙：

```
[sudo](#/sudo "sudo命令") systemctl status firewalld.service
sudo systemctl stop firewalld.service          
sudo systemctl disable firewalld.service
```