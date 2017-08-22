webpackJsonp([445],{105:function(n,e,t){n.exports=t(694)},1579:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},staticRenderFns:[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",[t("p",[t("strong",[n._v("dircolors命令")]),n._v("设置"),t("a",{attrs:{href:"#/ls",title:"ls命令"}},[n._v("ls")]),n._v("命令在显示目录或文件时所用的色彩。dircolors可根据[色彩配置文件]来设置LS_COLORS环境变量或是显示设置LS_COLORS环境变量的命令。")]),n._v(" "),t("h3",[n._v("语法")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v("dircolors(选项)(参数)\n")])]),n._v(" "),t("h3",[n._v("选项")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v('-b或--sh或--bourne-shell：显示在Boume shell中，将LS_COLORS设为目前预设置的shell指令；\n-c或--csh或--c-shell：显示在C shell中，将LS_COLORS设为目前预设置的shell指令；\n-p或--print-database：显示预设置；\n-[help](#/help "help命令")：显示帮助；\n-version：显示版本信息。\n')])]),n._v(" "),t("h3",[n._v("参数")]),n._v(" "),t("p",[n._v("文件：指定用来设置颜色的文件。")]),n._v(" "),t("h3",[n._v("实例")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v('[root@localhost ~]# dircolors -p\n# Configuration [file](#/file "file命令") for dircolors, a utility to help you [set](#/set "set命令") the\n# LS_COLORS environment variable used by GNU ls with the --color option.\n# The keywords COLOR, OPTIONS, and EIGHTBIT (honored by the\n# slackware version of dircolors) are recognized but ignored.\n# Below, there should be one TERM entry for each termtype that is colorizable\nTERM linux\nTERM linux-c\nTERM mach-color\nTERM console\nTERM con132x25\nTERM con132x30\nTERM con132x43\nTERM con132x60\nTERM con80x25\nTERM con80x28\nTERM con80x30\nTERM con80x43\nTERM con80x50\nTERM con80x60\nTERM cygwin\nTERM dtterm\nTERM putty\nTERM xterm\nTERM xterm-color\nTERM xterm-debian\nTERM rxvt\nTERM screen\nTERM screen-bce\nTERM screen-[w](#/w "w命令")\nTERM vt100\nTERM Eterm\n# Below are the color [init](#/init "init命令") strings for the basic file types. A color init\n# string consists of one or [more](#/more "more命令") of the following numeric codes:\n# Attribute codes:\n# 00=none 01=bold 04=underscore 05=blink 07=reverse 08=concealed\n# Text color codes:\n# 30=black 31=red 32=green 33=yellow 34=blue 35=magenta 36=cyan 37=white\n# Background color codes:\n# 40=black 41=red 42=green 43=yellow 44=blue 45=magenta 46=cyan 47=white\nNORMAL 00 # global default, although everything should be something.\nFILE 00 # normal file\nDIR 01;34 # directory\nLINK 01;36 # symbolic link. (If you set this to \'target\' instead of a\n # numerical value, the color is [as](#/as "as命令") for the file pointed to.)\nFIFO 40;33 # pipe\nSOCK 01;35 # socket\nDOOR 01;35 # door\nBLK 40;33;01 # block device driver\nCHR 40;33;01 # character device driver\nORPHAN 40;31;01 # symlink to nonexistent file\nSETUID 37;41 # file that is setuid (u+s)\nSETGID 30;43 # file that is setgid (g+s)\nSTICKY_OTHER_WRITABLE 30;42 # dir that is sticky and other-writable (+t,o+w)\nOTHER_WRITABLE 34;42 # dir that is other-writable (o+w) and not sticky\nSTICKY 37;44 # dir with the sticky bit set (+t) and not other-writable\n# This is for files with execute permission:\n[exec](#/exec "exec命令") 01;32\n# List any file extensions like \'.gz\' or \'.[tar](#/tar "tar命令")\' that you would like ls\n# to colorize below. Put the extension, a space, and the color init string.\n# (and any comments you want to add after a \'#\')\n# If you use DOS-style suffixes, you may want to uncomment the following:\n#.cmd 01;32 # executables (bright green)\n#.exe 01;32\n#.com 01;32\n#.btm 01;32\n#.bat 01;32\n.tar 01;31 # archives or compressed (bright red)\n.tgz 01;31\n.[arj](#/arj "arj命令") 01;31\n.taz 01;31\n.lzh 01;31\n.[zip](#/zip "zip命令") 01;31\n.z 01;31\n.Z 01;31\n.gz 01;31\n.bz2 01;31\n.deb 01;31\n.[rpm](#/rpm "rpm命令") 01;31\n.jar 01;31\n# image formats\n.jpg 01;35\n.jpeg 01;35\n.gif 01;35\n.bmp 01;35\n.pbm 01;35\n.pgm 01;35\n.ppm 01;35\n.tga 01;35\n.xbm 01;35\n.xpm 01;35\n.tif 01;35\n.tiff 01;35\n.png 01;35\n.mov 01;35\n.mpg 01;35\n.mpeg 01;35\n.avi 01;35\n.fli 01;35\n.gl 01;35\n.dl 01;35\n.xcf 01;35\n.xwd 01;35\n# audio formats\n.flac 01;35\n.mp3 01;35\n.mpc 01;35\n.ogg 01;35\n.wav 01;35\n')])])])}]}},694:function(n,e,t){var o=t(5)(null,t(1579),null,null,null);n.exports=o.exports}});
//# sourceMappingURL=445.2dc379a02e93736cabb9.js.map