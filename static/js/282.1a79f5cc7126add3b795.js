webpackJsonp([282],{1302:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("section",[n("p",[n("strong",[s._v("lsblk命令")]),s._v("用于列出所有可用块设备的信息，而且还能显示他们之间的依赖关系，但是它不会列出RAM盘的信息。块设备有硬盘，闪存盘，"),n("a",{attrs:{href:"#/cd",title:"cd命令"}},[s._v("cd")]),s._v("-ROM等等。lsblk命令包含在util-linux-ng包中，现在该包改名为util-linux。这个包带了几个其它工具，如"),n("a",{attrs:{href:"#/dmesg",title:"dmesg命令"}},[s._v("dmesg")]),s._v("。要安装lsblk，请在此处"),n("a",{attrs:{href:"ftp://ftp.kernel.org/pub/linux/utils/util-linux/"}},[s._v("下载util-linux包")]),s._v("。Fedora用户可以通过命令"),n("code",{pre:!0},[s._v('[sudo](#/sudo "sudo命令") [yum](#/yum "yum命令") [install](#/install "install命令") util-linux-ng')]),s._v("来安装该包。")]),s._v(" "),n("h3",[s._v("选项")]),s._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[s._v('-a, --all            显示所有设备。\n-b, --bytes          以bytes方式显示设备大小。\n-d, --nodeps         不显示 slaves 或 holders。\n-D, --discard        print discard capabilities。\n-e, --exclude <list> 排除设备 (default: RAM disks)。\n-f, --fs             显示文件系统信息。\n-h, --[help](#/help "help命令")           显示帮助信息。\n-i, --ascii          use ascii characters only。\n-m, --perms          显示权限信息。\n-l, --list           使用列表格式显示。\n-n, --noheadings     不显示标题。\n-o, --output <list>  输出列。\n-P, --pairs          使用key="value"格式显示。\n-r, --raw            使用原始格式显示。\n-t, --topology       显示拓扑结构信息。\n')])]),s._v(" "),n("h3",[s._v("实例")]),s._v(" "),n("p",[s._v("lsblk命令默认情况下将以树状列出所有块设备。打开终端，并输入以下命令：")]),s._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[s._v('lsblk\n\nNAME   MAJ:MIN [rm](#/rm "rm命令")   SIZE RO [type](#/type "type命令") [mountpoint](#/mountpoint "mountpoint命令")\nsda      8:0    0 232.9G  0 disk \n├─sda1   8:1    0  46.6G  0 part /\n├─sda2   8:2    0     1K  0 part \n├─sda5   8:5    0   190M  0 part /boot\n├─sda6   8:6    0   3.7G  0 part [SWAP]\n├─sda7   8:7    0  93.1G  0 part /data\n└─sda8   8:8    0  89.2G  0 part /personal\nsr0     11:0    1  1024M  0 rom\n')])]),s._v(" "),n("p",[s._v("7个栏目名称如下：")]),s._v(" "),n("ol",[n("li",[n("strong",[s._v("NAME")]),s._v("：这是块设备名。")]),s._v(" "),n("li",[n("strong",[s._v("MAJ:MIN")]),s._v("：本栏显示主要和次要设备号。")]),s._v(" "),n("li",[n("strong",[s._v("RM")]),s._v("：本栏显示设备是否可移动设备。注意，在本例中设备sdb和sr0的RM值等于1，这说明他们是可移动设备。")]),s._v(" "),n("li",[n("strong",[s._v("SIZE")]),s._v("：本栏列出设备的容量大小信息。例如298.1G表明该设备大小为298.1GB，而1K表明该设备大小为1KB。")]),s._v(" "),n("li",[n("strong",[s._v("RO")]),s._v("：该项表明设备是否为只读。在本案例中，所有设备的RO值为0，表明他们不是只读的。")]),s._v(" "),n("li",[n("strong",[s._v("TYPE")]),s._v("：本栏显示块设备是否是磁盘或磁盘上的一个分区。在本例中，sda和sdb是磁盘，而sr0是只读存储（rom）。")]),s._v(" "),n("li",[n("strong",[s._v("MOUNTPOINT")]),s._v("：本栏指出设备挂载的挂载点。")])]),s._v(" "),n("p",[s._v("默认选项不会列出所有空设备。要查看这些空设备，请使用以下命令：")]),s._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[s._v("lsblk -a\n")])]),s._v(" "),n("p",[s._v("lsblk命令也可以用于列出一个特定设备的拥有关系，同时也可以列出组和模式。可以通过以下命令来获取这些信息：")]),s._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[s._v("lsblk -m\n")])]),s._v(" "),n("p",[s._v("该命令也可以只获取指定设备的信息。这可以通过在提供给lsblk命令的选项后指定设备名来实现。例如，你可能对了解以字节显示你的磁盘驱动器大小比较感兴趣，那么你可以通过运行以下命令来实现：")]),s._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[s._v("lsblk -b /dev/sda\n\n等价于\n\nlsblk --bytes /dev/sda\n")])]),s._v(" "),n("p",[s._v("你也可以组合几个选项来获取指定的输出。例如，你也许想要以列表格式列出设备，而不是默认的树状格式。你可能也对移除不同栏目名称的标题感兴趣。可以将两个不同的选项组合，以获得期望的输出，命令如下：")]),s._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[s._v('lsblk -[nl](#/nl "nl命令")\n')])]),s._v(" "),n("p",[s._v("要获取SCSI设备的列表，你只能使用-S选项。该选项是大写字母S，不能和-s选项混淆，该选项是用来以颠倒的顺序打印依赖的。")]),s._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[s._v("lsblk -S\n")])]),s._v(" "),n("p",[s._v("lsblk列出SCSI设备，而-s是逆序选项（将设备和分区的组织关系逆转过来显示），其将给出如下输出。输入命令：")]),s._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[s._v("lsblk -s\n")])])])}]}},270:function(s,t,n){s.exports=n(859)},859:function(s,t,n){var e=n(5)(null,n(1302),null,null,null);s.exports=e.exports}});
//# sourceMappingURL=282.1a79f5cc7126add3b795.js.map