webpackJsonp([486],{1395:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,r=e.$createElement,v=e._self._c||r;return v("section",[v("p",[v("strong",[e._v("cdrecord命令")]),e._v("用于Linux系统下光盘刻录，它支持"),v("a",{attrs:{href:"#/cd",title:"cd命令"}},[e._v("cd")]),e._v("和DVD格式。linux下一般都带有cdrecord软件。")]),e._v(" "),v("h3",[e._v("语法")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("cdrecord(选项)(参数)\n")])]),e._v(" "),v("h3",[e._v("选项")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("-v：显示刻录光盘的详细过程；\n-eject：刻录完成后弹出光盘；\nspeed=<刻录倍速>：指定光盘刻录的倍速；\ndev=<刻录机设备号>：指定使用“-scanbus”参数扫描到的刻录机的设备号；\n-scanbus：扫描系统中可用的刻录机。\n")])]),e._v(" "),v("h3",[e._v("参数")]),e._v(" "),v("p",[e._v("ISO文件：指定刻录光盘使用的ISO映像文件。")]),e._v(" "),v("h3",[e._v("实例")]),e._v(" "),v("p",[e._v("查看系统所有 CD-R("),v("a",{attrs:{href:"#/w",title:"w命令"}},[e._v("w")]),e._v(") 设备：")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("cdrecord -scanbus\nscsibus0:\n  0,0,0     0) *\n  0,1,0     1) *\n  0,2,0     2) *\n  0,3,0     3) 'HP      ' 'CD-Writer+ 9200 ' '1.0c' Removable CD-ROM\n")])]),e._v(" "),v("p",[e._v("用iso文件刻录一张光盘：")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("cdrecord -v -eject speed=4 dev=0,3,0 backup.iso\n")])]),e._v(" "),v("p",[e._v("参数解释")]),e._v(" "),v("ul",[v("li",[e._v("-v：显示刻录光盘的详细过程")]),e._v(" "),v("li",[e._v("-eject：刻完自动弹出光盘")]),e._v(" "),v("li",[e._v("speed=4 dev=0,3,0：四速刻录到HP CD-writer设备上。")])]),e._v(" "),v("p",[e._v("擦写光驱：")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("cdrecord --dev=0,3,0 --blank=fast\n")])])])}]}},63:function(e,r,v){e.exports=v(652)},652:function(e,r,v){var t=v(5)(null,v(1395),null,null,null);e.exports=t.exports}});
//# sourceMappingURL=486.d85d6eb4cc658e4ee913.js.map