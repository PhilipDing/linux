**enable命令**用于临时关闭或者激活指定的shell内部命令。若要执行的文件名称与shell内建命令相同，可用`enable -n`来关闭shell内建命令。若不加`-n`选项，enable可重新启动关闭的命令。

linux shell命令执行时，shell总是先在自己的shell [builtin](https://philipding.github.io/linux-command/builtin "builtin命令")中查找该命令，如果找到则执行该命令；如果找不到该命令，则会从环境变量$PATH指定的路径中依次去查找待执行的命令。因为了解了这一点，所以看起来好像没有办法编写用户自己的命令来替代shell builtin命令。幸运的是，有了enable命令我们就能做到了。

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
enable [alias](https://philipding.github.io/linux-command/alias "alias命令")
enable [bg](https://philipding.github.io/linux-command/bg "bg命令")
enable [bind](https://philipding.github.io/linux-command/bind "bind命令")
enable break
enable builtin
enable caller
enable [cd](https://philipding.github.io/linux-command/cd "cd命令")
enable [command](https://philipding.github.io/linux-command/command "command命令")
enable compgen
enable complete
enable continue
enable [declare](https://philipding.github.io/linux-command/declare "declare命令")
enable [dirs](https://philipding.github.io/linux-command/dirs "dirs命令")
enable disown
enable [echo](https://philipding.github.io/linux-command/echo "echo命令")
enable enable
enable eval
enable [exec](https://philipding.github.io/linux-command/exec "exec命令")
enable [exit](https://philipding.github.io/linux-command/exit "exit命令")
enable [export](https://philipding.github.io/linux-command/export "export命令")
enable false
enable [fc](https://philipding.github.io/linux-command/fc "fc命令")
enable [fg](https://philipding.github.io/linux-command/fg "fg命令")
enable getopts
enable hash
enable [help](https://philipding.github.io/linux-command/help "help命令")
enable [history](https://philipding.github.io/linux-command/history "history命令")
enable [jobs](https://philipding.github.io/linux-command/jobs "jobs命令")
enable [kill](https://philipding.github.io/linux-command/kill "kill命令")
enable [let](https://philipding.github.io/linux-command/let "let命令")
enable local
enable [logout](https://philipding.github.io/linux-command/logout "logout命令")
enable [popd](https://philipding.github.io/linux-command/popd "popd命令")
enable [printf](https://philipding.github.io/linux-command/printf "printf命令")
enable [pushd](https://philipding.github.io/linux-command/pushd "pushd命令")
enable [pwd](https://philipding.github.io/linux-command/pwd "pwd命令")
enable [read](https://philipding.github.io/linux-command/read "read命令")
enable [readonly](https://philipding.github.io/linux-command/readonly "readonly命令")
enable return
enable [set](https://philipding.github.io/linux-command/set "set命令")
enable shift
enable [shopt](https://philipding.github.io/linux-command/shopt "shopt命令")
enable source
enable suspend
enable [test](https://philipding.github.io/linux-command/test "test命令")
enable times
enable [trap](https://philipding.github.io/linux-command/trap "trap命令")
enable true
enable [type](https://philipding.github.io/linux-command/type "type命令")
enable typeset
enable [ulimit](https://philipding.github.io/linux-command/ulimit "ulimit命令")
enable [umask](https://philipding.github.io/linux-command/umask "umask命令")
enable [unalias](https://philipding.github.io/linux-command/unalias "unalias命令")
enable [unset](https://philipding.github.io/linux-command/unset "unset命令")
enable [wait](https://philipding.github.io/linux-command/wait "wait命令")
```