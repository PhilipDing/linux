webpackJsonp([194],{1281:function(e,v){e.exports={render:function(){var e=this,v=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,n=e._self._c||v;return n("section",[n("p",[n("strong",[e._v("pvchange命令")]),e._v("允许管理员改变物理卷的分配许可。如果物理卷出现故障，可以使用pvchange命令禁止分配物理卷上的PE。")]),e._v(" "),n("h3",[e._v("语法")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("pvchange(选项)(参数)\n")])]),e._v(" "),n("h3",[e._v("选项")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("-u：生成新的UUID；\n-x：是否允许分配PE。\n")])]),e._v(" "),n("h3",[e._v("参数")]),e._v(" "),n("p",[e._v("物理卷：指定要修改属性的物理卷所对应的设备文件。")]),e._v(" "),n("h3",[e._v("实例")]),e._v(" "),n("p",[e._v("使用pvchange命令禁止分配指定物理卷上的PE。在命令行中输入下面的命令：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('pvchange -x n /dev/sdb1     #禁止分配"/dev/sdb1"上的PE\n')])]),e._v(" "),n("p",[e._v("输出信息如下：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('Physical volume "/dev/sdb1" changed  \n1 physical volume changed / 0 physical volumes not changed\n')])])])}]}},360:function(e,v,n){e.exports=n(949)},949:function(e,v,n){var r=n(5)(null,n(1281),null,null,null);e.exports=r.exports}});
//# sourceMappingURL=194.685fdbbc8b36303fa001.js.map