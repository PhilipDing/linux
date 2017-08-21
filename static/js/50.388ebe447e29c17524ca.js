webpackJsonp([50],{1094:function(v,e,r){var n=r(5)(null,r(1148),null,null,null);v.exports=n.exports},1148:function(v,e){v.exports={render:function(){var v=this,e=v.$createElement;v._self._c;return v._m(0)},staticRenderFns:[function(){var v=this,e=v.$createElement,r=v._self._c||e;return r("section",[r("p",[r("strong",[v._v("vgconvert命令")]),v._v("用于转换指定LVM卷组的元数据格式，通常将“LVM1”格式的卷组转换为“LVM2”格式。转换卷组元数据前必须保证卷组处于非活动状态，否则无法完成转换操作。")]),v._v(" "),r("h3",[v._v("语法")]),v._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[v._v("vgconvert(选项)(参数)\n")])]),v._v(" "),r("h3",[v._v("选项")]),v._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[v._v("-M：要转换的卷组格式。\n")])]),v._v(" "),r("h3",[v._v("参数")]),v._v(" "),r("p",[v._v("卷组：指定要转换格式的卷组。")]),v._v(" "),r("h3",[v._v("实例")]),v._v(" "),r("p",[v._v("转换卷组元数据格式前，使用"),r("a",{attrs:{href:"#/vgchange",title:"vgchange命令"}},[v._v("vgchange")]),v._v("命令将卷组设置为非活动状态。在命令行中输入下面的命令：")]),v._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[v._v('[root@localhost lvm]# vgchange -an vg1000    #设置卷组状态为非活动状态\n0 logical volume(s) in volume group "vg1000" now active \n\n')])]),v._v(" "),r("p",[v._v('使用vgconvert命令将卷组"vg1000"从"LVM1"格式转换为"LVM2"格式。在命令行中输入下面的命令：')]),v._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[v._v('[root@localhost lvm]# vgconvert -M2 vg1000    #转换卷组为"LVM2"格式\nVolume group vg1000 successfully converted\n')])]),v._v(" "),r("p",[v._v("使用vgchange命令将卷组设置为活动状态。在命令行中输入下面的命令：")]),v._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[v._v('[root@localhost lvm]# vgchange -ay vg1000     #设置卷组状态为活动状态\n0 logical volume(s) in volume group "vg1000" now active\n')])])])}]}},506:function(v,e,r){v.exports=r(1094)}});
//# sourceMappingURL=50.388ebe447e29c17524ca.js.map