webpackJsonp([276],{1606:function(e,v){e.exports={render:function(){var e=this,v=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,r=e._self._c||v;return r("section",[r("p",[r("strong",[e._v("lvcreate命令")]),e._v('用于创建LVM的逻辑卷。逻辑卷是创建在卷组之上的。逻辑卷对应的设备文件保存在卷组目录下，例如：在卷组"vg1000"上创建一个逻辑卷"lvol0"，则此逻辑卷对应的设备文件为"/dev/vg1000/lvol0"。')]),e._v(" "),r("h3",[e._v("语法")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("lvcreate(选项)(参数)\n")])]),e._v(" "),r("h3",[e._v("选项")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("-L：指定逻辑卷的大小，单位为“kKmMgGtT”字节；\n-l：指定逻辑卷的大小（LE数）。\n")])]),e._v(" "),r("h3",[e._v("参数")]),e._v(" "),r("p",[e._v("逻辑卷：指定要创建的逻辑卷名称。")]),e._v(" "),r("h3",[e._v("实例")]),e._v(" "),r("p",[e._v('使用lvcreate命令在卷组"vg1000"上创建一个200MB的逻辑卷。在命令行中输入下面的命令：')]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("[root@localhost ~]# lvcreate -L 200M vg1000    #创建大小为200M的逻辑卷\n")])]),e._v(" "),r("p",[e._v("输出信息如下：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('Logical volume "lvol0" created\n')])]),e._v(" "),r("p",[e._v('说明：创建成功后，新的逻辑卷"lvol0"，将通过设备文件'),r("code",{pre:!0},[e._v("/dev/vg1000/lvol0")]),e._v("进行访问。")])])}]}},276:function(e,v,r){e.exports=r(865)},865:function(e,v,r){var t=r(5)(null,r(1606),null,null,null);e.exports=t.exports}});
//# sourceMappingURL=276.c470d3c8f1595098bbb9.js.map