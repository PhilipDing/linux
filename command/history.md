**history命令**用于显示指定数目的指令命令，读取历史命令文件中的目录到历史命令缓冲区和将历史命令缓冲区中的目录写入命令文件。

该命令单独使用时，仅显示历史命令，在命令行中，可以使用符号`!`执行指定序号的历史命令。例如，要执行第2个历史命令，则输入`!2`。

历史命令是被保存在内存中的，当退出或者登录shell时，会自动保存或读取。在内存中，历史命令仅能够存储1000条历史命令，该数量是由环境变量`HISTSIZE`进行控制。

### 语法  

```
history(选项)(参数)
```

### 选项  

```
-c：清空当前历史命令；
-a：将历史命令缓冲区中命令写入历史命令文件中；
-r：将历史命令文件中的命令读入当前历史命令缓冲区；
-[w](https://philipding.github.io/linux-command/w "w命令")：将当前历史命令缓冲区命令写入历史命令文件中。
```

### 参数  

n：打印最近的n条历史命令。

### 实例  

使用history命令显示最近使用的10条历史命令，输入如下命令：

```
[root@localhost ~]# history 10
   92  [ls](https://philipding.github.io/linux-command/ls "ls命令")
   93  [cd](https://philipding.github.io/linux-command/cd "cd命令") ..
   94  ls
   95  [exit](https://philipding.github.io/linux-command/exit "exit命令")
   96  ls -a
   97  cd .[ssh](https://philipding.github.io/linux-command/ssh "ssh命令")/
   98  ls
   99  [cat](https://philipding.github.io/linux-command/cat "cat命令") known_hosts
  100  exit
  101  history 10
```