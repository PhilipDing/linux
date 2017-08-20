**fg命令**用于将后台作业（在后台运行的或者在后台挂起的作业）放到前台终端运行。与[bg](https://philipding.github.io/linux-command/bg "bg命令")命令一样，若后台任务中只有一个，则使用该命令时，可以省略任务号。

在Linux系统中执行某些操作时候，有时需要将当前任务暂停调至后台，或有时须将后台暂停的任务重启开启并调至前台，这一序列的操作将会使用到 [jobs](https://philipding.github.io/linux-command/jobs "jobs命令")、bg、和 fg 三个命令以及两个快捷键来完成。

### 语法  

```
fg(参数)
```

### 参数  

作业标识：指定要放到前台的作业标识号。

### 实例  

使用fg命令将任务号为1的任务从后台执行转换到前台执行，输入如下命令：

```
fg 1          #将任务转换到前台执行
```

执行上面的命令后，命令行窗口将显示如下信息：

```
[find](https://philipding.github.io/linux-command/find "find命令") / -name password       #前台执行命令
```