**nstat命令**和**rtacct命令**是一个简单的监视内核的SNMP计数器和网络接口状态的实用工具。

### 语法  

```
nstat/rtacct(选项)
```

### 选项  

```
-h：显示帮助信息；
-V：显示指令版本信息；
-z：显示0计数器；
-r：清零历史统计；
-n：不显示任何内容，仅更新历史；
-a：显示计数器的绝对值；
-s：不更新历史；
-d：以守护进程的方式运行本指令。
```

实例

```
[root@localhost ~]# nstat
#kernel
IpInReceives                    15766482           0.0
IpInDelivers                    15538384           0.0
IpOutRequests                   9746938            0.0
IpReasmReqds                    8                  0.0
IpReasmOKs                      4                  0.0
IcmpInErrors                    28701              0.0
IcmpInDestUnreachs              405                0.0
IcmpInTimeExcds                 1812               0.0
IcmpInParmProbs                 173                0.0
IcmpInEchoReps                  26613              0.0
IcmpInTimestamps                100                0.0
IcmpOutErrors                   27065              0.0
IcmpOutTimeExcds                331                0.0
IcmpOutEchoReps                 121                0.0
IcmpOutTimestamps               26613              0.0
IcmpMsgInType0                  100                0.0
IcmpMsgInType3                  1812               0.0
IcmpMsgInType8                  26613              0.0
IcmpMsgInType11                 173                0.0
IcmpMsgOutType0                 26613              0.0
IcmpMsgOutType3                 331                0.0
IcmpMsgOutType8                 121                0.0
TcpActiveOpens                  24760              0.0
TcpPassiveOpens                 573863             0.0
TcpAttemptFails                 18347              0.0
TcpEstabResets                  67353              0.0
TcpInSegs                       15324047           0.0
TcpOutSegs                      9296351            0.0
TcpRetransSegs                  118479             0.0
TcpInErrs                       560                0.0
TcpOutRsts                      15269              0.0
UdpInDatagrams                  185300             0.0
UdpNoPorts                      331                0.0
UdpOutDatagrams                 305043             0.0
TcpExtSyncookiesFailed          14328              0.0
TcpExtEmbryonicRsts             15116              0.0
TcpExtOutOfWindowIcmps          79                 0.0
TcpExtTW                        158436             0.0
TcpExtDelayedACKs               123597             0.0
TcpExtDelayedACKLocked          1087               0.0
TcpExtDelayedACKLost            55670              0.0
TcpExtTCPPrequeued              288438             0.0
TcpExtTCPDirectCopyFromBacklog  11229302           0.0
TcpExtTCPDirectCopyFromPrequeue 669949             0.0
TcpExtTCPHPHits                 7539804            0.0
TcpExtTCPHPHitsToUser           7700               0.0
TcpExtTCPPureAcks               2743573            0.0
TcpExtTCPHPAcks                 1742135            0.0
TcpExtTCPRenoRecovery           51                 0.0
TcpExtTCPSackRecovery           15556              0.0
TcpExtTCPSACKReneging           13                 0.0
TcpExtTCPFACKReorder            199                0.0
TcpExtTCPSACKReorder            63                 0.0
TcpExtTCPTSReorder              220                0.0
TcpExtTCPFullUndo               213                0.0
TcpExtTCPPartialUndo            868                0.0
TcpExtTCPDSACKUndo              2831               0.0
TcpExtTCPLossUndo               2320               0.0
TcpExtTCPLoss                   22652              0.0
TcpExtTCPLostRetransmit         2                  0.0
TcpExtTCPRenoFailures           26                 0.0
TcpExtTCPSackFailures           4765               0.0
TcpExtTCPLossFailures           2155               0.0
TcpExtTCPFastRetrans            28636              0.0
TcpExtTCPForwardRetrans         3341               0.0
TcpExtTCPSlowStartRetrans       25393              0.0
TcpExtTCPTimeouts               28215              0.0
TcpExtTCPRenoRecoveryFail       26                 0.0
TcpExtTCPSackRecoveryFail       2892               0.0
TcpExtTCPDSACKOldSent           55916              0.0
TcpExtTCPDSACKOfoSent           299                0.0
TcpExtTCPDSACKRecv              11680              0.0
TcpExtTCPDSACKOfoRecv           35                 0.0
TcpExtTCPAbortOnData            1193               0.0
TcpExtTCPAbortOnClose           14                 0.0
TcpExtTCPAbortOnTimeout         3041               0.0
```