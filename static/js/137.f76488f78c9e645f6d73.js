webpackJsonp([137],{1007:function(r,e,t){var v=t(5)(null,t(1337),null,null,null);r.exports=v.exports},1337:function(r,e){r.exports={render:function(){var r=this,e=r.$createElement;r._self._c;return r._m(0)},staticRenderFns:[function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("section",[t("p",[t("strong",[r._v("setpci命令")]),r._v("是一个查询和配置PCI设备的使用工具。")]),r._v(" "),t("h3",[r._v("语法")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v("setpci(选项)(参数)\n")])]),r._v(" "),t("h3",[r._v("选项")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v("-v：显示指令执行的细节信息；\n-f：当没有任何操作需要完成时，不显示任何信息；\n-D：测试模式，并不真正将配置信息写入寄存器；\n-d：仅显示给定厂商和设备的信息；\n-s：仅显示指定总线、插槽上的设备或设备上的功能块信息。\n")])]),r._v(" "),t("h3",[r._v("参数")]),r._v(" "),t("ul",[t("li",[r._v("PCI设备：指定要配置的PCI设备；")]),r._v(" "),t("li",[r._v("操作：指定要完成的配置操作。")])]),r._v(" "),t("h3",[r._v("实例")]),r._v(" "),t("p",[r._v("Linux下调节笔记本屏幕亮度方法：")]),r._v(" "),t("p",[r._v("首先进入终端输入"),t("a",{attrs:{href:"#/lspci",title:"lspci命令"}},[r._v("lspci")]),r._v("命令，列出各种设备的地址：")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v('lspci\n00:00.0 [host](#/host "host命令") bridge: Intel Corporation Mobile 945GM/PM/GMS, 943/940GML and 945GT Express Memory Controller Hub ([rev](#/rev "rev命令") 03)\n00:02.0 VGA compatible controller: Intel Corporation Mobile 945GM/GMS, 943/940GML Express Integrated Graphics Controller (rev 03)\n00:02.1 Display controller: Intel Corporation Mobile 945GM/GMS/GME, 943/940GML Express Integrated Graphics Controller (rev 03)\n00:1b.0 Audio device: Intel Corporation N10/ICH 7 Family High Definition Audio Controller (rev 02)\n00:1c.0 PCI bridge: Intel Corporation N10/ICH 7 Family PCI Express Port 1 (rev 02)\n00:1c.1 PCI bridge: Intel Corporation N10/ICH 7 Family PCI Express Port 2 (rev 02)\n......\n')])]),r._v(" "),t("p",[r._v("发现00:02.0是VGA设备，于是我们修改它的属性：")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v('[sudo](#/sudo "sudo命令") setpci -s 00:02.0 F4.B=FF\n')])]),r._v(" "),t("p",[r._v("解释一下：")]),r._v(" "),t("ul",[t("li",[t("strong",[r._v("setpci")]),r._v(" 是修改设备属性的命令。")]),r._v(" "),t("li",[t("strong",[r._v("-s")]),r._v(" 表示接下来输入的是设备的地址。")]),r._v(" "),t("li",[t("strong",[r._v("00:02.0")]),r._v(" VGA设备地址（<总线>:<接口>.<功能>）。")]),r._v(" "),t("li",[t("strong",[r._v("F4")]),r._v(" 要修改的属性的地址，这里应该表示“亮度”。")]),r._v(" "),t("li",[t("strong",[r._v(".B")]),r._v(" 修改的长度（B应该是字节（Byte），还有"),t("a",{attrs:{href:"#/w",title:"w命令"}},[r._v("w")]),r._v("（应该是Word，两个字节）、L（应该是Long，4个字节））。")]),r._v(" "),t("li",[t("strong",[r._v("=FF")]),r._v(" 要修改的值（可以改）。")])]),r._v(" "),t("p",[r._v("我这里00是最暗，FF是最亮，不同的电脑可能不一样。比如说我嫌FF太闪眼了，我就可以：")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v("sudo setpci -s 00:02.0 F4.B=CC\n")])])])}]}},418:function(r,e,t){r.exports=t(1007)}});
//# sourceMappingURL=137.f76488f78c9e645f6d73.js.map