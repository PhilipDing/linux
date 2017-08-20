**quotastats命令**用于显示Linux系统当前的磁盘配额运行状态信息。

### 语法  

```
quotastats
```

### 实例  

显示磁盘配额限制状态

```
[root@localhost ~]# quotastats
Kernel [quota](#/quota "quota命令") version: 6.5.1
Number of dquot lookups: 0
Number of dquot drops: 0
Number of dquot reads: 0
Number of dquot writes: 0
Number of quotafile syncs: 21
Number of dquot cache hits: 0
Number of allocated dquots: 0
Number of [free](#/free "free命令") dquots: 0
Number of in use dquot entries (user/group): 0
```