webpackJsonp([36],{1110:function(e,t,v){var r=v(5)(null,v(1190),null,null,null);e.exports=r.exports},1190:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("section",[v("p",[v("strong",[e._v("wget命令")]),e._v("用来从指定的URL下载文件。wget非常稳定，它在带宽很窄的情况下和不稳定网络中有很强的适应性，如果是由于网络的原因下载失败，wget会不断的尝试，直到整个文件下载完毕。如果是服务器打断下载过程，它会再次联到服务器上从停止的地方继续下载。这对从那些限定了链接时间的服务器上下载大文件非常有用。")]),e._v(" "),v("h3",[e._v("语法")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("wget(选项)(参数)\n")])]),e._v(" "),v("h3",[e._v("选项")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v('-a<日志文件>：在指定的日志文件中记录资料的执行过程；\n-A<后缀名>：指定要下载文件的后缀名，多个后缀名之间使用逗号进行分隔；\n-b：进行后台的方式运行wget；\n-B<连接地址>：设置参考的连接地址的基地地址；\n-c：继续执行上次终端的任务；\n-C<标志>：设置服务器数据块功能标志on为激活，off为关闭，默认值为on；\n-d：调试模式运行指令；\n-D<域名列表>：设置顺着的域名列表，域名之间用“，”分隔；\n-e<指令>：作为文件“.wgetrc”中的一部分执行指定的指令；\n-h：显示指令帮助信息；\n-i<文件>：从指定文件获取要下载的URL地址；\n-l<目录列表>：设置顺着的目录列表，多个目录用“，”分隔；\n-L：仅顺着关联的连接；\n-r：递归下载方式；\n-[nc](#/nc_netcat "nc命令")：文件存在时，下载文件不覆盖原有文件；\n-nv：下载时只显示更新和出错信息，不显示指令的详细执行过程；\n-q：不显示指令执行过程；\n-nh：不查询主机名称；\n-v：显示详细执行过程；\n-V：显示版本信息；\n--passive-[ftp](#/ftp "ftp命令")：使用被动模式PASV连接FTP服务器；\n--follow-ftp：从HTML文件中下载FTP连接文件。\n')])]),e._v(" "),v("h3",[e._v("参数")]),e._v(" "),v("p",[e._v("URL：下载指定的URL地址。")]),e._v(" "),v("h3",[e._v("实例")]),e._v(" "),v("p",[v("strong",[e._v("使用wget下载单个文件")])]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v('wget http://www.linuxde.net/testfile.[zip](#/zip "zip命令")\n')])]),e._v(" "),v("p",[e._v("以下的例子是从网络下载一个文件并保存在当前目录，在下载的过程中会显示进度条，包含（下载完成百分比，已经下载的字节，当前下载速度，剩余下载时间）。")]),e._v(" "),v("p",[v("strong",[e._v("下载并以不同的文件名保存")])]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v('wget -O wordpress.zip http://www.linuxde.net/download.aspx?[id](#/id "id命令")=1080\n')])]),e._v(" "),v("p",[e._v("wget默认会以最后一个符合"),v("code",{pre:!0},[e._v("/")]),e._v("的后面的字符来命令，对于动态链接的下载通常文件名会不正确。")]),e._v(" "),v("p",[e._v("错误：下面的例子会下载一个文件并以名称"),v("code",{pre:!0},[e._v("download.aspx?id=1080")]),e._v("保存:")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("wget http://www.linuxde.net/download?id=1\n")])]),e._v(" "),v("p",[e._v("即使下载的文件是zip格式，它仍然以"),v("code",{pre:!0},[e._v('download.[php](#/php "php命令")?id=1080')]),e._v("命令。")]),e._v(" "),v("p",[e._v("正确：为了解决这个问题，我们可以使用参数"),v("code",{pre:!0},[e._v("-O")]),e._v("来指定一个文件名：")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("wget -O wordpress.zip http://www.linuxde.net/download.aspx?id=1080\n")])]),e._v(" "),v("p",[v("strong",[e._v("wget限速下载")])]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("wget --limit-rate=300k http://www.linuxde.net/testfile.zip\n")])]),e._v(" "),v("p",[e._v("当你执行wget的时候，它默认会占用全部可能的宽带下载。但是当你准备下载一个大文件，而你还需要下载其它文件时就有必要限速了。")]),e._v(" "),v("p",[v("strong",[e._v("使用wget断点续传")])]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("wget -c http://www.linuxde.net/testfile.zip\n")])]),e._v(" "),v("p",[e._v("使用"),v("code",{pre:!0},[e._v("wget -c")]),e._v("重新启动下载中断的文件，对于我们下载大文件时突然由于网络等原因中断非常有帮助，我们可以继续接着下载而不是重新下载一个文件。需要继续中断的下载时可以使用"),v("code",{pre:!0},[e._v("-c")]),e._v("参数。")]),e._v(" "),v("p",[v("strong",[e._v("使用wget后台下载")])]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("wget -b http://www.linuxde.net/testfile.zip\n\nContinuing in background, pid 1840.\nOutput will be written to `wget-log'.\n")])]),e._v(" "),v("p",[e._v("对于下载非常大的文件的时候，我们可以使用参数"),v("code",{pre:!0},[e._v("-b")]),e._v("进行后台下载，你可以使用以下命令来察看下载进度：")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v('[tail](#/tail "tail命令") -f wget-log\n')])]),e._v(" "),v("p",[v("strong",[e._v("伪装代理名称下载")])]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v('wget --user-agent="Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.204 Safari/534.16" http://www.linuxde.net/testfile.zip\n')])]),e._v(" "),v("p",[e._v("有些网站能通过根据判断代理名称不是浏览器而拒绝你的下载请求。不过你可以通过"),v("code",{pre:!0},[e._v("--user-agent")]),e._v("参数伪装。")]),e._v(" "),v("p",[v("strong",[e._v("测试下载链接")])]),e._v(" "),v("p",[e._v("当你打算进行定时下载，你应该在预定时间测试下载链接是否有效。我们可以增加"),v("code",{pre:!0},[e._v("--spider")]),e._v("参数进行检查。")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("wget --spider URL\n")])]),e._v(" "),v("p",[e._v("如果下载链接正确，将会显示:")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v('Spider mode enabled. Check if remote [file](#/file "file命令") exists.\nHTTP request sent, awaiting response... 200 OK\nLength: unspecified [text/html]\nRemote file exists and could contain further links,\nbut recursion is disabled -- not retrieving.\n')])]),e._v(" "),v("p",[e._v("这保证了下载能在预定的时间进行，但当你给错了一个链接，将会显示如下错误:")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("wget --spider url\nSpider mode enabled. Check if remote file exists.\nHTTP request sent, awaiting response... 404 Not Found\nRemote file does not exist -- broken link!!!\n")])]),e._v(" "),v("p",[e._v("你可以在以下几种情况下使用"),v("code",{pre:!0},[e._v("--spider")]),e._v("参数：")]),e._v(" "),v("ul",[v("li",[e._v("定时下载之前进行检查")]),e._v(" "),v("li",[e._v("间隔检测网站是否可用")]),e._v(" "),v("li",[e._v("检查网站页面的死链接")])]),e._v(" "),v("p",[v("strong",[e._v("增加重试次数")])]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("wget --tries=40 URL\n")])]),e._v(" "),v("p",[e._v("如果网络有问题或下载一个大文件也有可能失败。wget默认重试20次连接下载文件。如果需要，你可以使用"),v("code",{pre:!0},[e._v("--tries")]),e._v("增加重试次数。")]),e._v(" "),v("p",[v("strong",[e._v("下载多个文件")])]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("wget -i filelist.txt\n")])]),e._v(" "),v("p",[e._v("首先，保存一份下载链接文件：")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v('[cat](#/cat "cat命令") > filelist.txt\nurl1\nurl2\nurl3\nurl4\n')])]),e._v(" "),v("p",[e._v("接着使用这个文件和参数"),v("code",{pre:!0},[e._v("-i")]),e._v("下载。")]),e._v(" "),v("p",[v("strong",[e._v("镜像网站")])]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("wget --mirror -p --convert-links -P ./LOCAL URL\n")])]),e._v(" "),v("p",[e._v("下载整个网站到本地。")]),e._v(" "),v("ul",[v("li",[v("code",{pre:!0},[e._v("--miror")]),e._v("开户镜像下载。")]),e._v(" "),v("li",[v("code",{pre:!0},[e._v("-p")]),e._v("下载所有为了html页面显示正常的文件。")]),e._v(" "),v("li",[v("code",{pre:!0},[e._v("--convert-links")]),e._v("下载后，转换成本地的链接。")]),e._v(" "),v("li",[v("code",{pre:!0},[e._v("-P ./LOCAL")]),e._v("保存所有文件和目录到本地指定目录。")])]),e._v(" "),v("p",[v("strong",[e._v("过滤指定格式下载")])]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v('wget --[reject](#/reject "reject命令")=gif ur\n')])]),e._v(" "),v("p",[e._v("下载一个网站，但你不希望下载图片，可以使用这条命令。")]),e._v(" "),v("p",[v("strong",[e._v("把下载信息存入日志文件")])]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("wget -o download.log URL\n")])]),e._v(" "),v("p",[e._v("不希望下载信息直接显示在终端而是在一个日志文件，可以使用。")]),e._v(" "),v("p",[v("strong",[e._v("限制总下载文件大小")])]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("wget -Q5m -i filelist.txt\n")])]),e._v(" "),v("p",[e._v("当你想要下载的文件超过5M而退出下载，你可以使用。注意：这个参数对单个文件下载不起作用，只能递归下载时才有效。")]),e._v(" "),v("p",[v("strong",[e._v("下载指定格式文件")])]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("wget -r -A.pdf url\n")])]),e._v(" "),v("p",[e._v("可以在以下情况使用该功能：")]),e._v(" "),v("ul",[v("li",[e._v("下载一个网站的所有图片。")]),e._v(" "),v("li",[e._v("下载一个网站的所有视频。")]),e._v(" "),v("li",[e._v("下载一个网站的所有PDF文件。")])]),e._v(" "),v("p",[v("strong",[e._v("FTP下载")])]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("wget ftp-url\nwget --ftp-user=USERNAME --ftp-password=PASSWORD url\n")])]),e._v(" "),v("p",[e._v("可以使用wget来完成ftp链接的下载。")]),e._v(" "),v("p",[e._v("使用wget匿名ftp下载：")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("wget ftp-url\n")])]),e._v(" "),v("p",[e._v("使用wget用户名和密码认证的ftp下载：")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("wget --ftp-user=USERNAME --ftp-password=PASSWORD url\n")])])])}]}},521:function(e,t,v){e.exports=v(1110)}});
//# sourceMappingURL=36.938f4c3d5f5b407495e6.js.map