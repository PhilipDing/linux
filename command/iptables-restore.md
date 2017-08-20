**[iptables](#/iptables "iptables命令")-[restore](#/restore "restore命令")命令**用来还原[iptables-save](#/iptables-save "iptables-save命令")命令所备份的iptables配置。

### 语法  

```
iptables-restor(选项)
```

### 选项  

```
-c：指定在还原iptables表时候，还原当前的数据包计数器和字节计数器的值；
-t：指定要还原表的名称。
```

### 实例  

```
iptables-restor < iptables.bak
```

iptables.bak是iptables-save命令所备份的文件。