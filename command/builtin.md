**builtin命令**用于执行指定的shell内部命令，并返回内部命令的返回值。builtin命令在使用时，将不能够再使用Linux中的外部命令。当系统中定义了与shell内部命令相同的函数时，使用builtin显式地执行shell内部命令，从而忽略定义的shell函数。

### 语法  

```
builtin(参数)
```

### 参数  

shell内部命令：指定需要执行的shell内部命令。

### 实例  

使用builtin命令执行shell内部命[alias](https://philipding.github.io/linux-command/alias "alias命令")显示命令别名，输入如下命令：

```
builtin alias                 #执行shell内部指令
alias [cp](https://philipding.github.io/linux-command/cp "cp命令")='cp -i'
alias l.='[ls](https://philipding.github.io/linux-command/ls "ls命令") -d .* --color=tty'
alias ll='ls -l --color=tty'
alias ls='ls --color=tty'
alias [mv](https://philipding.github.io/linux-command/mv "mv命令")='mv -i'
alias [rm](https://philipding.github.io/linux-command/rm "rm命令")='rm -i'
alias [which](https://philipding.github.io/linux-command/which "which命令")='alias | /usr/bin/which --tty-only --[read](https://philipding.github.io/linux-command/read "read命令")-alias --show-dot --show-tilde'
```

上面的命令执行后，将输出当前系统下的命令别名。