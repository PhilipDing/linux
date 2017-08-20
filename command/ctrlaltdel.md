**ctrlaltdel命令**用来设置组合键“Ctrl+Alt+Del”的功能。

### 语法  

```
ctrlaltdel(参数)
```

### 参数  

*   Hard：当按下组合键“Ctrl+Alt+Del”时，立即执行重新启动操作系统，而不是先调用[sync](#/sync "sync命令")系统调用和其他的关机标准操作。
*   Soft：当按下组合键“Ctrl+Alt+Del”时，首先向[init](#/init "init命令")进程发送SIGINT（interrupt）信号。由init进程处理关机操作。