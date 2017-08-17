**locate命令**和**slocate命令**都用来查找文件或目录。

locate命令其实是`[find](https://philipding.github.io/linux-command/find "find命令") -name`的另一种写法，但是要比后者快得多，原因在于它不搜索具体目录，而是搜索一个数据库`/var/lib/locatedb`，这个数据库中含有本地所有文件信息。Linux系统自动创建这个数据库，并且每天自动更新一次，所以使用locate命令查不到最新变动过的文件。为了避免这种情况，可以在使用locate之前，先使用[updatedb](https://philipding.github.io/linux-command/updatedb "updatedb命令")命令，手动更新数据库。

### 语法  

```
locate/slocate(选项)(参数)
```

### 选项  

```
-d<目录>或--database=<目录>：指定数据库所在的目录；
-u：更新slocate数据库；
--[help](https://philipding.github.io/linux-command/help "help命令")：显示帮助；
--version：显示版本信息。
```

### 参数  

查找字符串：要查找的文件名中含有的字符串。

### 实例  

搜索etc目录下所有以sh开头的文件：

```
locate /etc/sh
```

搜索用户主目录下，所有以m开头的文件：

```
locate ~/m
```

搜索用户主目录下，所有以m开头的文件，并且忽略大小写：

```
locate -i ~/m
```