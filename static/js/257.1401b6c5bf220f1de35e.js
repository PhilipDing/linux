webpackJsonp([257],{1259:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("p",[n("strong",[e._v("mkfs命令")]),e._v("用于在设备上（通常为硬盘）创建Linux文件系统。mkfs本身并不执行建立文件系统的工作，而是去调用相关的程序来执行。")]),e._v(" "),n("h3",[e._v("语法")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("mkfs(选项)(参数)\n")])]),e._v(" "),n("h3",[e._v("选项")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("fs：指定建立文件系统时的参数；\n-t<文件系统类型>：指定要建立何种文件系统；\n-v：显示版本信息与详细的使用方法；\n-V：显示简要的使用方法；\n-c：在制做档案系统前，检查该partition是否有坏轨。\n")])]),e._v(" "),n("h3",[e._v("参数")]),e._v(" "),n("ul",[n("li",[e._v("文件系统：指定要创建的文件系统对应的设备文件名；")]),e._v(" "),n("li",[e._v("块数：指定文件系统的磁盘块数。")])]),e._v(" "),n("h3",[e._v("实例")]),e._v(" "),n("p",[e._v("在"),n("code",{pre:!0},[e._v("/dev/hda5")]),e._v("上建一个msdos的档案系统，同时检查是否有坏轨存在，并且将过程详细列出来：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("mkfs -V -t msdos -c /dev/hda5\n\nmkfs -t ext3 /dev/sda6     //将sda6分区格式化为ext3格式\nmkfs -t ext2 /dev/sda7     //将sda7分区格式化为ext2格式\n")])])])}]}},295:function(e,t,n){e.exports=n(884)},884:function(e,t,n){var v=n(5)(null,n(1259),null,null,null);e.exports=v.exports}});
//# sourceMappingURL=257.1401b6c5bf220f1de35e.js.map