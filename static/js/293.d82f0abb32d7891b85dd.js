webpackJsonp([293],{1244:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,o=e.$createElement,v=e._self._c||o;return v("section",[v("p",[v("strong",[e._v("losetup命令")]),e._v("用来设置循环设备。循环设备可把文件虚拟成块设备，籍此来模拟整个文件系统，让用户得以将其视为硬盘驱动器，光驱或软驱等设备，并挂入当作目录来使用。")]),e._v(" "),v("h3",[e._v("语法")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v('losetup [ -e encryption ] [ -o offset ] loop_device [file](#/file "file命令")\nlosetup [ -d ] loop_device\n')])]),e._v(" "),v("h3",[e._v("选项")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("-a 显示所有循环设备的状态。\n-d 卸除设备。\n-e <加密选项> 启动加密编码 。\n-f 寻找第一个未使用的循环设备。\n-o <偏移量>设置数据偏移量，单位是字节。\n")])]),e._v(" "),v("h3",[e._v("参数")]),e._v(" "),v("ul",[v("li",[e._v("loop_device：循环设备可以是/dev/loop0, /dev/loop1 ... /dev/loop7。")]),e._v(" "),v("li",[e._v("file：要与循环设备相关联的文件名，这个往往是一个磁盘镜象文件，如 *.img")])]),e._v(" "),v("h3",[e._v("loop设备介绍")]),e._v(" "),v("p",[e._v("在类 UNIX 系统里，loop 设备是一种伪设备(pseudo-device)，或者也可以说是仿真设备。它能使我们像块设备一样访问一个文件。在使用之前，一个 loop 设备必须要和一个文件进行连接。这种结合方式给用户提供了一个替代块特殊文件的接口。因此，如果这个文件包含有一个完整的文件系统，那么这个文件就可以像一个磁盘设备一样被 "),v("a",{attrs:{href:"#/mount",title:"mount命令"}},[e._v("mount")]),e._v(" 起来。")]),e._v(" "),v("p",[e._v("上面说的文件格式，我们经常见到的是 "),v("a",{attrs:{href:"#/cd",title:"cd命令"}},[e._v("cd")]),e._v(" 或 DVD 的 ISO 光盘镜像文件或者是软盘(硬盘)的 *.img 镜像文件。通过这种 loop mount (回环mount)的方式，这些镜像文件就可以被 mount 到当前文件系统的一个目录下。")]),e._v(" "),v("p",[e._v("至此，顺便可以再理解一下 loop 之含义：对于第一层文件系统，它直接安装在我们计算机的物理设备之上；而对于这种被 mount 起来的镜像文件(它也包含有文件系统)，它是建立在第一层文件系统之上，这样看来，它就像是在第一层文件系统之上再绕了一圈的文件系统，所以称为 loop。")]),e._v(" "),v("h3",[e._v("实例")]),e._v(" "),v("p",[e._v("创建空的磁盘镜像文件，这里创建一个1.44M的软盘：")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v('[dd](#/dd "dd命令") if=/dev/zero of=floppy.img bs=512 count=2880\n')])]),e._v(" "),v("p",[e._v("使用 losetup将磁盘镜像文件虚拟成快设备：")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("losetup /dev/loop1 floppy.img\n")])]),e._v(" "),v("p",[e._v("挂载块设备：")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("mount /dev/loop0 /tmp\n")])]),e._v(" "),v("p",[e._v("经过上面的三步之后，我们就可以通过/tmp目录，像访问真实快设备一样来访问磁盘镜像文件floppy.img。")]),e._v(" "),v("p",[e._v("卸载loop设备：")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v('[umount](#/umount "umount命令") /tmp\nlosetup -d /dev/loop1\n')])])])}]}},259:function(e,o,v){e.exports=v(848)},848:function(e,o,v){var p=v(5)(null,v(1244),null,null,null);e.exports=p.exports}});
//# sourceMappingURL=293.d82f0abb32d7891b85dd.js.map