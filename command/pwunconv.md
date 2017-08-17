**pwunconv命令**与[pwconv](https://philipding.github.io/linux-command/pwconv "pwconv命令")功能相反，用来关闭用户的投影密码。它会把密码从shadow文件内，重回存到[passwd](https://philipding.github.io/linux-command/passwd "passwd命令")文件里。

### 语法  

```
pwunconv
```

### 实例  

```
pwunconv     //关闭影子密码
[cat](https://philipding.github.io/linux-command/cat "cat命令") /etc/passwd | [grep](https://philipding.github.io/linux-command/grep "grep命令") [test](https://philipding.github.io/linux-command/test "test命令")     //发现密码已经在passwd文件中了
test:$6$nYOEWamm$bz07nlv/.RgJufb3FAqJJeULfwybzgxmrWqbk7O4vI0KsT6N.ujrh6dDIUcAJdfjksyuyAFDPIngZeD3cgcf.0:3001:3001::/home/test:/bin/sh

[ls](https://philipding.github.io/linux-command/ls "ls命令") /etc/shadow     //查看影子文件，提示没有这个文件或目录
ls: cannot access /etc/shadow: No such [file](https://philipding.github.io/linux-command/file "file命令") or directory
```