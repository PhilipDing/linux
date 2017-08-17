**dumpe2fs命令**用于打印“ext2/ext3”文件系统的超级块和快组信息。

### 语法  

```
dumpe2fs(选项)(参数)
```

### 选项  

```
-b：打印文件系统中预留的块信息；
-ob<超级块>：指定检查文件系统时使用的超级块；
-OB<块大小>：检查文件系统时使用的指定的块大小；
-h：仅显示超级块信息；
-i：从指定的文件系统映像文件中读取文件系统信息；
-x：以16进制格式打印信息块成员。
```

### 参数  

文件系统：指定要查看信息的文件系统。

### 实例  

```
dumpe2fs /dev/hda1
dumpe2fs 1.39 (29-May-2006)
Filesystem volume name:   /
[last](https://philipding.github.io/linux-command/last "last命令") mounted on:          <not available>
Filesystem UUID:          845ccd40-1f3b-4729-a63d-cb80f51b082a
Filesystem magic number:  0xEF53
Filesystem revision #:    1 (dynamic)
Filesystem features:      has_journal ext_attr resize_inode dir_index filetype needs_recovery sparse_super large_file
Default [mount](https://philipding.github.io/linux-command/mount "mount命令") options:    user_xattr acl
Filesystem state:         clean
Errors behavior:          Continue
Filesystem OS [type](https://philipding.github.io/linux-command/type "type命令"):       Linux
Inode count:              5242880
Block count:              5241817
Reserved block count:     262090
[free](https://philipding.github.io/linux-command/free "free命令") blocks:              4434157
Free inodes:              5170836
First block:              0
Block size:               4096
Fragment size:            4096
Reserved GDT blocks:      1022
Blocks per group:         32768
Fragments per group:      32768
Inodes per group:         32768
Inode blocks per group:   1024
Filesystem created:       Sun Mar 24 02:09:14 2013
Last mount [time](https://philipding.github.io/linux-command/time "time命令"):          Thu Aug  1 16:42:07 2013
Last [write](https://philipding.github.io/linux-command/write "write命令") time:          Thu Aug  1 16:42:07 2013
Mount count:              10
Maximum mount count:      -1
Last checked:             Sun Mar 24 02:09:14 2013
Check interval:           0 (<none>)
Reserved blocks uid:      0 (user root)
Reserved blocks gid:      0 (group root)
First inode:              11
Inode size:               128
Journal inode:            8
First orphan inode:       3735559
Default directory hash:   tea
Directory Hash Seed:      e3f7162e-1194-4161-805d-763db89dbc69
Journal backup:           inode blocks
Journal size:             128M

Group 0: (Blocks 0-32767)
  Primary superblock [at](https://philipding.github.io/linux-command/at "at命令") 0, Group descriptors at 1-2
  Reserved GDT blocks at 3-1024
  Block bitmap at 1025 (+1025), Inode bitmap at 1026 (+1026)
  Inode table at 1027-2050 (+1027)
  0 free blocks, 32757 free inodes, 2 directories
  Free blocks:
  Free inodes: 12-32768

...
```