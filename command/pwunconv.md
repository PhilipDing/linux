**pwunconv命令**与[pwconv](#/pwconv "pwconv命令")功能相反，用来关闭用户的投影密码。它会把密码从shadow文件内，重回存到[passwd](#/passwd "passwd命令")文件里。

### 语法  

```
pwunconv
```

### 实例  

```
pwunconv     //关闭影子密码
[cat](#/cat "cat命令") /etc/passwd | [grep](#/grep "grep命令") [test](#/test "test命令")     //发现密码已经在passwd文件中了
test:$6$nYOEWamm$bz07nlv/.RgJufb3FAqJJeULfwybzgxmrWqbk7O4vI0KsT6N.ujrh6dDIUcAJdfjksyuyAFDPIngZeD3cgcf.0:3001:3001::/home/test:/bin/sh

[ls](#/ls "ls命令") /etc/shadow     //查看影子文件，提示没有这个文件或目录
ls: cannot access /etc/shadow: No such [file](#/file "file命令") or directory
```