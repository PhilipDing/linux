**type命令**用来显示指定命令的类型，判断给出的指令是内部指令还是外部指令。

命令类型：

*   [alias](#/alias "alias命令")：别名。
*   keyword：关键字，Shell保留字。
*   function：函数，Shell函数。
*   [builtin](#/builtin "builtin命令")：内建命令，Shell内建命令。
*   [file](#/file "file命令")：文件，磁盘文件，外部命令。
*   unfound：没有找到。

### 语法  

```
type(选项)(参数)
```

### 选项  

```
-t：输出“file”、“alias”或者“builtin”，分别表示给定的指令为“外部指令”、“命令别名”或者“内部指令”；
-p：如果给出的指令为外部指令，则显示其绝对路径；
-a：在环境变量“PATH”指定的路径中，显示给定指令的信息，包括命令别名。
```

### 参数  

指令：要显示类型的指令。

### 实例  

```
[root@localhost ~]# type [ls](#/ls "ls命令")
ls is aliased to `ls --color=tty'

[root@localhost ~]# type [cd](#/cd "cd命令")
cd is a shell builtin

[root@localhost ~]# type [date](#/date "date命令")
date is /bin/date

[root@localhost ~]# type [mysql](#/mysql "mysql命令")
mysql is /usr/bin/mysql

[root@localhost ~]# type nginx
-bash: type: nginx: not found

[root@localhost ~]# type if
if is a shell keyword

[root@localhost ~]# type [which](#/which "which命令")
which is aliased to `alias | /usr/bin/which --tty-only --[read](#/read "read命令")-alias --show-dot --show-tilde'

[root@localhost ~]# type -a cd
cd is a shell builtin

[root@localhost ~]# type -a [grep](#/grep "grep命令")
grep is /bin/grep
```