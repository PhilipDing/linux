**enable命令**用于临时关闭或者激活指定的shell内部命令。若要执行的文件名称与shell内建命令相同，可用`enable -n`来关闭shell内建命令。若不加`-n`选项，enable可重新启动关闭的命令。

linux shell命令执行时，shell总是先在自己的shell [builtin](#/builtin "builtin命令")中查找该命令，如果找到则执行该命令；如果找不到该命令，则会从环境变量$PATH指定的路径中依次去查找待执行的命令。因为了解了这一点，所以看起来好像没有办法编写用户自己的命令来替代shell builtin命令。幸运的是，有了enable命令我们就能做到了。

### 语法  

```
enable(选项)(参数)
```

### 选项  

```
-n：关闭指定的内部命令；
-a：显示所有激活的内部命令；
-f：从指定文件中读取内部命令。
```

### 参数  

内部命令：指定要关闭或激活的内部命令。

### 实例  

使用enable命令显示所有激活的内部命令：

```
[root@localhost ~]# enable -a
enable .
enable :
enable [
enable [alias](#/alias "alias命令")
enable [bg](#/bg "bg命令")
enable [bind](#/bind "bind命令")
enable break
enable builtin
enable caller
enable [cd](#/cd "cd命令")
enable [command](#/command "command命令")
enable compgen
enable complete
enable continue
enable [declare](#/declare "declare命令")
enable [dirs](#/dirs "dirs命令")
enable disown
enable [echo](#/echo "echo命令")
enable enable
enable eval
enable [exec](#/exec "exec命令")
enable [exit](#/exit "exit命令")
enable [export](#/export "export命令")
enable false
enable [fc](#/fc "fc命令")
enable [fg](#/fg "fg命令")
enable getopts
enable hash
enable [help](#/help "help命令")
enable [history](#/history "history命令")
enable [jobs](#/jobs "jobs命令")
enable [kill](#/kill "kill命令")
enable [let](#/let "let命令")
enable local
enable [logout](#/logout "logout命令")
enable [popd](#/popd "popd命令")
enable [printf](#/printf "printf命令")
enable [pushd](#/pushd "pushd命令")
enable [pwd](#/pwd "pwd命令")
enable [read](#/read "read命令")
enable [readonly](#/readonly "readonly命令")
enable return
enable [set](#/set "set命令")
enable shift
enable [shopt](#/shopt "shopt命令")
enable source
enable suspend
enable [test](#/test "test命令")
enable times
enable [trap](#/trap "trap命令")
enable true
enable [type](#/type "type命令")
enable typeset
enable [ulimit](#/ulimit "ulimit命令")
enable [umask](#/umask "umask命令")
enable [unalias](#/unalias "unalias命令")
enable [unset](#/unset "unset命令")
enable [wait](#/wait "wait命令")
```