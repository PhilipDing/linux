**whatis命令**是用于查询一个命令执行什么功能，并将查询结果打印到终端上。

whatis命令在用`catman -[w](https://philipding.github.io/linux-command/w "w命令")`命令创建的数据库中查找[command](https://philipding.github.io/linux-command/command "command命令")参数指定的命令、系统调用、库函数或特殊文件名。whatis命令显示手册部分的页眉行。然后可以发出[man](https://philipding.github.io/linux-command/man "man命令")命令以获取附加的信息。whatis命令等同于使用`man -f`命令。

### 语法  

```
whatis
```

### 实例  

```
[root@localhost ~]# whatis [ls](https://philipding.github.io/linux-command/ls "ls命令")
ls                   (1)  - list directory contents
ls                   (1p)  - list directory contents

[root@localhost ~]# whatis [cp](https://philipding.github.io/linux-command/cp "cp命令")
cp                   (1)  - copy files and directories
cp                   (1p)  - copy files

[root@localhost ~]# whatis [chown](https://philipding.github.io/linux-command/chown "chown命令")
chown                (1)  - change [file](https://philipding.github.io/linux-command/file "file命令") owner and group
chown                (1p)  - change the file ownership
chown                (2)  - change ownership of a file
chown                (3p)  - change owner and group of a file

[root@localhost ~]# whatis man
man                  (1)  - format and display the on-line manual pages
man                  (1p)  - display system documentation
man                  (7)  - macros to format man pages
man                 ([rpm](https://philipding.github.io/linux-command/rpm "rpm命令")) - A [set](https://philipding.github.io/linux-command/set "set命令") of documentation tools: man, [apropos](https://philipding.github.io/linux-command/apropos "apropos命令") and whatis.
man-pages           (rpm) - Man (manual) pages from the Linux Documentation Project.
man.config [man]     (5)  - configuration data for man
```