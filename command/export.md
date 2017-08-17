**export命令**用于将shell变量输出为环境变量，或者将shell函数输出为环境变量。

一个变量创建时，它不会自动地为在它之后创建的shell进程所知。而命令export可以向后面的shell传递变量的值。当一个shell脚本调用并执 行时，它不会自动得到原为脚本（调用者）里定义的变量的访问权，除非这些变量已经被显式地设置为可用。export命令可以用于传递一个或多个变量的值到任何后继脚本。

### 语法  

```
export(选项)(参数)
```

### 选项  

```
-f：代表[变量名称]中为函数名称；
-n：删除指定的变量。变量实际上并未删除，只是不会输出到后续指令的执行环境中；
-p：列出所有的shell赋予程序的环境变量。
```

### 参数  

变量：指定要输出或者删除的环境变量。

### 实例  

一般来说，配置交叉编译工具链的时候需要指定编译工具的路径，此时就需要设置环境变量。查看已经存在的环境变量：

```
[root@localhost ~]# export
[declare](https://philipding.github.io/linux-command/declare "declare命令") -x G_BROKEN_FILENAMES="1"
declare -x HISTSIZE="1000"
declare -x HOME="/root"
declare -x [hostname](https://philipding.github.io/linux-command/hostname "hostname命令")="localhost"
declare -x INPUTRC="/etc/inputrc"
declare -x LANG="zh_CN.UTF-8"
declare -x LESSOPEN="|/usr/bin/lesspipe.sh %s"
declare -x [logname](https://philipding.github.io/linux-command/logname "logname命令")="root"
declare -x LS_COLORS="no=00:fi=00:di=01;34:[ln](https://philipding.github.io/linux-command/ln "ln命令")=01;36:pi=40;33:so=01;35:bd=40;33;01:[cd](https://philipding.github.io/linux-command/cd "cd命令")=40;33;01:or=01;05;37;41:mi=01;05;37;41:[ex](https://philipding.github.io/linux-command/ex "ex命令")=01;32:*.cmd=01;32:*.exe=01;32:*.com=01;32:*.btm=01;32:*.bat=01;32:*.sh=01;32:*.csh=01;32:*.[tar](https://philipding.github.io/linux-command/tar "tar命令")=01;31:*.tgz=01;31:*.[arj](https://philipding.github.io/linux-command/arj "arj命令")=01;31:*.taz=01;31:*.lzh=01;31:*.[zip](https://philipding.github.io/linux-command/zip "zip命令")=01;31:*.z=01;31:*.Z=01;31:*.gz=01;31:*.bz2=01;31:*.bz=01;31:*.tz=01;31:*.[rpm](https://philipding.github.io/linux-command/rpm "rpm命令")=01;31:*.[cpio](https://philipding.github.io/linux-command/cpio "cpio命令")=01;31:*.jpg=01;35:*.gif=01;35:*.bmp=01;35:*.xbm=01;35:*.xpm=01;35:*.png=01;35:*.tif=01;35:"
declare -x [mail](https://philipding.github.io/linux-command/mail "mail命令")="/var/spool/mail/root"
declare -x OLDPWD
declare -x PATH="/usr/kerberos/sbin:/usr/kerberos/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin"
declare -x [pwd](https://philipding.github.io/linux-command/pwd "pwd命令")="/root"
declare -x SHELL="/bin/bash"
declare -x SHLVL="1"
declare -x SSH_CLIENT="192.168.2.111 2705 22"
declare -x SSH_CONNECTION="192.168.2.111 2705 192.168.2.2 22"
declare -x SSH_TTY="/dev/pts/0"
declare -x TERM="linux"
declare -x USER="root"
```