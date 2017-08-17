**mysqldump命令**是[mysql](https://philipding.github.io/linux-command/mysql "mysql命令")数据库中备份工具，用于将MySQL服务器中的数据库以标准的sql语言的方式导出，并保存到文件中。

### 语法  

```
mysqldump(选项)
```

### 选项  

```
--add-drop-table：在每个创建数据库表语句前添加删除数据库表的语句；
--add-locks：备份数据库表时锁定数据库表；
--all-databases：备份MySQL服务器上的所有数据库；
--comments：添加注释信息；
--compact：压缩模式，产生更少的输出；
--complete-insert：输出完成的插入语句；
--databases：指定要备份的数据库；
--default-character-[set](https://philipding.github.io/linux-command/set "set命令")：指定默认字符集；
--force：当出现错误时仍然继续备份操作；
--[host](https://philipding.github.io/linux-command/host "host命令")：指定要备份数据库的服务器；
--lock-tables：备份前，锁定所有数据库表；
--no-create-db：禁止生成创建数据库语句；
--no-create-[info](https://philipding.github.io/linux-command/info "info命令")：禁止生成创建数据库库表语句；
--password：连接MySQL服务器的密码；
--port：MySQL服务器的端口号；
--user：连接MySQL服务器的用户名。
```

### 实例  

**导出整个数据库**

```
mysqldump -u 用户名 -p 数据库名 > 导出的文件名
mysqldump -u linuxde -p smgp_apps_linuxde > linuxde.sql
```

**导出一个表**

```
mysqldump -u 用户名 -p 数据库名 表名> 导出的文件名
mysqldump -u linuxde -p smgp_apps_linuxde [users](https://philipding.github.io/linux-command/users "users命令") > linuxde_users.sql
```

**导出一个数据库结构**

```
mysqldump -u linuxde -p -d --add-drop-table smgp_apps_linuxde > linuxde_db.sql
```

`-d`没有数据，`--add-drop-tabl`e每个create语句之前增加一个`drop table`