**resize2fs命令**被用来增大或者收缩未加载的“ext2/ext3”文件系统的大小。如果文件系统是处于[mount](https://philipding.github.io/linux-command/mount "mount命令")状态下，那么它只能做到扩容，前提条件是内核支持在线resize。，linux kernel 2.6支持在mount状态下扩容但仅限于ext3文件系统。

### 语法  

```
resize2fs(选项)(参数)
```

### 选项  

```
-d：打开调试特性；
-p：打印已完成的百分比进度条；
-f：强制执行调整大小操作，覆盖掉安全检查操作；
-F：开始执行调整大小前，刷新文件系统设备的缓冲区。
```

### 参数  

*   设备文件名：增大要调整大小的文件系统所对应的设备文件名；
*   大小：文件系统的新大小。

### 实例  

LV分区重设大小

```
resize2fs /dev/vbirdvg/vbirdlv
resize2fs 1.39 (29-May-2006)
Filesystem [at](https://philipding.github.io/linux-command/at "at命令") /dev/vbirdvg/vbirdlv is mounted on /mnt/lvm; on-line resizing 
Performing an on-line resize of /dev/vbirdvg/vbirdlv to 2191360 (4k) blocks.
The filesystem on /dev/vbirdvg/vbirdlv is now 2191360 blocks long.
```