**wc命令**用来计算数字。利用wc指令我们可以计算文件的Byte数、字数或是列数，若不指定文件名称，或是所给予的文件名为“-”，则wc指令会从标准输入设备读取数据。

### 语法  

```
wc(选项)(参数)
```

### 选项  

```
-c或--bytes或——chars：只显示Bytes数；
-l或——lines：只显示列数；
-[w](https://philipding.github.io/linux-command/w "w命令")或——words：只显示字数。
```

### 参数  

文件：需要统计的文件列表。