webpackJsonp([423],{128:function(e,v,n){e.exports=n(717)},1635:function(e,v){e.exports={render:function(){var e=this,v=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,n=e._self._c||v;return n("section",[n("p",[n("strong",[e._v("e2fsck命令")]),e._v("用于检查第二扩展文件系统的完整性，通过适当的选项可以尝试修复出现的错误。")]),e._v(" "),n("p",[e._v("e2fsck执行后的传回值及代表意义如下：")]),e._v(" "),n("ul",[n("li",[e._v("0 没有任何错误发生。")]),e._v(" "),n("li",[e._v("1 文件系统发生错误，并且已经修正。")]),e._v(" "),n("li",[e._v("2 文件系统发生错误，并且已经修正。")]),e._v(" "),n("li",[e._v("4 文件系统发生错误，但没有修正。")]),e._v(" "),n("li",[e._v("8 运作时发生错误。")]),e._v(" "),n("li",[e._v("16 使用的语法发生错误。")]),e._v(" "),n("li",[e._v("128 共享的函数库发生错误。")])]),e._v(" "),n("h3",[e._v("语法")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("e2fsck(选项)(参数)\n")])]),e._v(" "),n("h3",[e._v("选项")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('-a：不询问使用者意见，便自动修复文件系统；\n-b<superblock>：指定superblock，而不使用预设的superblock；\n-B<区块大小>：指定区块的大小，单位为字节；\n-c：一并执行[badblocks](#/badblocks "badblocks命令")，以标示损坏的区块；\n-C：将检查过程的信息完整记录在[file](#/file "file命令") descriptor中，使得整个检查过程都能完整监控；\n-d：显示排错信息；\n-f：即使文件系统没有错误迹象，仍强制地检查正确性；\n-F：执行前先清除设备的缓冲区；\n-l<文件>：将文件中指定的区块加到损坏区块列表；\n-L<文件>：先清除损坏区块列表，再将文件中指定的区块加到损坏区块列表。因此损坏区块列表的区块跟文件中指定的区块是一样的；\n-n：以只读模式开启文件系统，并采取非互动方式执行，所有的问题对话均设置以"no"回答；\n-p：不询问使用者意见，便自动修复文件系统；\n-r：此参数只为了兼容性而存在，并无实际作用；\n-s：如果文件系统的字节顺序不适当，就交换字节顺序，否则不做任何动作；\n-S：不管文件系统的字节顺序，一律交换字节顺序；\n-t：显示时间信息；\n-v：执行时显示详细的信息；\n-V：显示版本信息；\n-y：采取非互动方式执行，所有的问题均设置以"[yes](#/yes "yes命令")"回答。\n')])]),e._v(" "),n("h3",[e._v("参数")]),e._v(" "),n("p",[e._v("文件系统或者分区：指定文件系统或者分区所对应的设备文件名。")]),e._v(" "),n("h3",[e._v("实例")]),e._v(" "),n("p",[e._v("检查"),n("code",{pre:!0},[e._v("/dev/sda1")]),e._v("是否有问题，如发现问题便自动修复：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("e2fsck -a -y /dev/sda1\n")])]),e._v(" "),n("p",[e._v("执行e2fsck或"),n("a",{attrs:{href:"#/fsck",title:"fsck命令"}},[e._v("fsck")]),e._v("前请先"),n("a",{attrs:{href:"#/umount",title:"umount命令"}},[e._v("umount")]),e._v(" partition，否则有机会令档案系统毁损。如果需要对根目录"),n("code",{pre:!0},[e._v("/")]),e._v("进行检查及修复，便需要进入singal user mode执行。")])])}]}},717:function(e,v,n){var _=n(5)(null,n(1635),null,null,null);e.exports=_.exports}});
//# sourceMappingURL=423.364c99bfaf9a2d745870.js.map