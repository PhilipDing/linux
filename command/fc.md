**fc命令**自动掉用[vi](https://philipding.github.io/linux-command/vi "vi命令")编辑器修改已有历史命令，当保存时立即执行修改后的命令，也可以用来显示历史命令。fc命令编辑历史命令时，会自动调用vi编辑器。fc保存文件后，会自动执行所编辑过的命令。

### 语法  

```
fc(选项)(参数)
```

### 选项  

```
-l：显示历史命令；
-n：显示历史命令时，不显示编号；
-r：反序显示历史命令。
```

### 参数  

*   起始指令编号：指定要编辑的起始指令编号；
*   结尾指令编号：指定要编辑的结尾指令编号。

### 实例  

使用该指令显示最近使用的10条历史命令，输入如下命令：

```
[root@localhost ~]# fc -l -10     #显示10条历史命令
1039     [type](https://philipding.github.io/linux-command/type "type命令") -a [grep](https://philipding.github.io/linux-command/grep "grep命令")
1040     [export](https://philipding.github.io/linux-command/export "export命令")
1041     [history](https://philipding.github.io/linux-command/history "history命令") 10
1042     [ulimit](https://philipding.github.io/linux-command/ulimit "ulimit命令") -a
1043     [shopt](https://philipding.github.io/linux-command/shopt "shopt命令")
1044     [help](https://philipding.github.io/linux-command/help "help命令") [ls](https://philipding.github.io/linux-command/ls "ls命令")
1045     help [env](https://philipding.github.io/linux-command/env "env命令")
1046     help short
1047     help shopt
1048     showkey -a
```

第一列信息是历史命令的编号，第二列信息是历史命令的具体格式。若用户需要编辑第1040条历史命令时，则输入如下命令：

```
fc 1040                    #编辑第1040条历史命令
```

命令执行成功后，将自动调用vi编辑器编辑指定的命令，编辑完成后保存，会自动执行修改后的命令。当用户在vi编辑器中修改指令并保存后，被修改的命令会被自动调用并执行。