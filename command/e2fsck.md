**e2fsck命令**用于检查第二扩展文件系统的完整性，通过适当的选项可以尝试修复出现的错误。

e2fsck执行后的传回值及代表意义如下：

*   0 没有任何错误发生。
*   1 文件系统发生错误，并且已经修正。
*   2 文件系统发生错误，并且已经修正。
*   4 文件系统发生错误，但没有修正。
*   8 运作时发生错误。
*   16 使用的语法发生错误。
*   128 共享的函数库发生错误。

### 语法  

```
e2fsck(选项)(参数)
```

### 选项  

```
-a：不询问使用者意见，便自动修复文件系统；
-b<superblock>：指定superblock，而不使用预设的superblock；
-B<区块大小>：指定区块的大小，单位为字节；
-c：一并执行[badblocks](https://philipding.github.io/linux-command/badblocks "badblocks命令")，以标示损坏的区块；
-C：将检查过程的信息完整记录在[file](https://philipding.github.io/linux-command/file "file命令") descriptor中，使得整个检查过程都能完整监控；
-d：显示排错信息；
-f：即使文件系统没有错误迹象，仍强制地检查正确性；
-F：执行前先清除设备的缓冲区；
-l<文件>：将文件中指定的区块加到损坏区块列表；
-L<文件>：先清除损坏区块列表，再将文件中指定的区块加到损坏区块列表。因此损坏区块列表的区块跟文件中指定的区块是一样的；
-n：以只读模式开启文件系统，并采取非互动方式执行，所有的问题对话均设置以"no"回答；
-p：不询问使用者意见，便自动修复文件系统；
-r：此参数只为了兼容性而存在，并无实际作用；
-s：如果文件系统的字节顺序不适当，就交换字节顺序，否则不做任何动作；
-S：不管文件系统的字节顺序，一律交换字节顺序；
-t：显示时间信息；
-v：执行时显示详细的信息；
-V：显示版本信息；
-y：采取非互动方式执行，所有的问题均设置以"[yes](https://philipding.github.io/linux-command/yes "yes命令")"回答。
```

### 参数  

文件系统或者分区：指定文件系统或者分区所对应的设备文件名。

### 实例  

检查`/dev/sda1`是否有问题，如发现问题便自动修复：

```
e2fsck -a -y /dev/sda1
```

执行e2fsck或[fsck](https://philipding.github.io/linux-command/fsck "fsck命令")前请先[umount](https://philipding.github.io/linux-command/umount "umount命令") partition，否则有机会令档案系统毁损。如果需要对根目录`/`进行检查及修复，便需要进入singal user mode执行。