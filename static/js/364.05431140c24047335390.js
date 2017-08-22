webpackJsonp([364],{1649:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("section",[r("p",[r("strong",[e._v("hdparm命令")]),e._v("提供了一个命令行的接口用于读取和设置IDE或SCSI硬盘参数。")]),e._v(" "),r("h3",[e._v("语法")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("hdparm(选项)(参数)\n")])]),e._v(" "),r("h3",[e._v("选项")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('-a<快取分区>：设定读取文件时，预先存入块区的分区数，若不加上<快取分区>选项，则显示目前的设定；\n-A<0或1>：启动或关闭读取文件时的快取功能；\n-c<I/O模式>：设定IDE32位I/O模式；\n-C：检测IDE硬盘的电源管理模式；\n-d<0或1>：设定磁盘的DMA模式；\n-f：将内存缓冲区的数据写入硬盘，并清楚缓冲区；\n-g：显示硬盘的磁轨，磁头，磁区等参数；\n-h：显示帮助；\n-i：显示硬盘的硬件规格信息，这些信息是在开机时由硬盘本身所提供；\n-I：直接读取硬盘所提供的硬件规格信息；\n-k<0或1>：重设硬盘时，保留-dmu参数的设定；\n-K<0或1>：重设硬盘时，保留-APSWXZ参数的设定；\n-m<磁区数>：设定硬盘多重分区存取的分区数；\n-n<0或1>：忽略硬盘写入时所发生的错误；\n-p<PIO模式>：设定硬盘的PIO模式；\n-P<磁区数>：设定硬盘内部快取的分区数；\n-q:在执行后续的参数时，不在屏幕上显示任何信息；\n-r<0或1>:设定硬盘的读写模式；\n-S<时间>:设定硬盘进入省电模式前的等待时间；\n-t;评估硬盘的读取效率；\n-T：平谷硬盘快取的读取效率；\n-u<0或1>：在硬盘存取时，允许其他中断要求同时执行；\n-v：显示硬盘的相关设定；\n-[w](#/w "w命令")<0或1>：设定硬盘的写入快取；\n-X<传输模式>：设定硬盘的传输模式；\n-y：使IDE硬盘进入省电模式；\n-Y：使IDE硬盘进入睡眠模式；\n-Z：关闭某些Seagate硬盘的自动省电功能。\n')])]),e._v(" "),r("h3",[e._v("参数")]),e._v(" "),r("p",[e._v("设备文件：指定"),r("a",{attrs:{href:"#/id",title:"id命令"}},[e._v("id")]),e._v("驱动对应的设备文件名。")]),e._v(" "),r("h3",[e._v("实例")]),e._v(" "),r("p",[e._v("显示硬盘的相关设置：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('hdparm /dev/sda\n/dev/sda:\nIO_support = 0 (default 16-bit)\n[readonly](#/readonly "readonly命令") = 0 (off)\nreadahead = 256 (on)\ngeometry = 19457［柱面数］/255［磁头数］/63［扇区数］, sectors = 312581808［总扇区数］, start = 0［起始扇区数］\n\n')])]),e._v(" "),r("p",[e._v("显示硬盘的柱面、磁头、扇区数：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("hdparm -g /dev/sda\n/dev/sda:\ngeometry = 19457［柱面数］/255［磁头数］/63［扇区数］, sectors = 312581808［总扇区数］, start = 0［起始扇区数］\n")])]),e._v(" "),r("p",[e._v("测试硬盘的读取速度：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("hdparm -T /dev/sda\n/dev/sda:\n Timing cached reads:   4684 MB in  2.00 seconds = 2342.92 MB/sec\n")])]),e._v(" "),r("p",[e._v("测试硬盘缓存的读取速度：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("hdparm -T /dev/xvda\n/dev/xvda:\nTiming cached reads: 11154 MB in 1.98 seconds = 5633.44 MB/sec\n\n")])]),e._v(" "),r("p",[e._v("检测硬盘的电源管理模式：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("hdparm -C /dev/sda\n/dev/sda:\ndrive state is: standby [省电模式]\n")])]),e._v(" "),r("p",[e._v("查询并设置硬盘多重扇区存取的扇区数，以增进硬盘的存取效率：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("hdparm -m /dev/sda\nhdparm -m    #参数值为整数值如8 /dev/sda\n")])]),e._v(" "),r("p",[r("strong",[e._v("附：硬盘坏道修复方法")])]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('检查：smartctl -l selftest /dev/sda\n卸载：[umount](#/umount "umount命令") /dev/sda*\n修复：[badblocks](#/badblocks "badblocks命令") /dev/sda\n')])])])}]}},187:function(e,n,r){e.exports=r(776)},776:function(e,n,r){var v=r(5)(null,r(1649),null,null,null);e.exports=v.exports}});
//# sourceMappingURL=364.05431140c24047335390.js.map