(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [12], {
        "5+mB": function(e, t, n) {
            var r, o, i;
            o = [n("VDtp")], void 0 === (i = "function" === typeof(r = function(e) {
                "use strict";
                var t = e.Reader,
                    n = e.Writer,
                    r = e.util,
                    o = e.roots["./main/index"] || (e.roots["./main/index"] = {});
                return o.api = function() {
                    var i = {};
                    return i.Command = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        var a;
                        return i.prototype.channel = 0, i.prototype.session = 0, i.prototype.openChan = null, i.prototype.openChanRes = null, i.prototype.closeChan = null, i.prototype.closeChanRes = null, i.prototype.containerState = null, i.prototype.portOpen = null, i.prototype.toast = null, i.prototype.protocolError = null, i.prototype.redirect = null, i.prototype.alwaysOn = null, i.prototype.runMain = null, i.prototype.clear = null, i.prototype.eval = null, i.prototype.result = null, i.prototype.input = null, i.prototype.output = null, i.prototype.error = null, i.prototype.stderr = null, i.prototype.log = null, i.prototype.saneTerm = null, i.prototype.resizeTerm = null, i.prototype.state = null, i.prototype.ok = null, i.prototype.persist = null, i.prototype.persistMirror = null, i.prototype.write = null, i.prototype.remove = null, i.prototype.move = null, i.prototype.tryRemove = null, i.prototype.mkdir = null, i.prototype.stat = null, i.prototype.statRes = null, i.prototype.transferStart = null, i.prototype.transferChunk = null, i.prototype.transferComplete = null, i.prototype.transferCancel = null, i.prototype.transfer = null, i.prototype.read = null, i.prototype.readdir = null, i.prototype.files = null, i.prototype.file = null, i.prototype.checkChanges = null, i.prototype.changedFiles = null, i.prototype.lintResults = null, i.prototype.runContainedTest = null, i.prototype.testResult = null, i.prototype.debuggerStart = null, i.prototype.debuggerStep = null, i.prototype.debuggerStatus = null, i.prototype.ensurePackages = null, i.prototype.ping = null, i.prototype.pong = null, i.prototype.hello = null, i.prototype.goodbye = null, i.prototype.hint = null, i.prototype.connect = null, i.prototype.send = null, i.prototype.recv = null, i.prototype.disconnect = null, i.prototype.fileAuthReq = null, i.prototype.fileAuthRes = null, i.prototype.mutliFileAuthRes = null, i.prototype.listObjects = null, i.prototype.listObjectsResp = null, i.prototype.ot = null, i.prototype.otstatus = null, i.prototype.otLinkFile = null, i.prototype.otLinkFileResponse = null, i.prototype.otNewCursor = null, i.prototype.otDeleteCursor = null, i.prototype.otFetchRequest = null, i.prototype.otFetchResponse = null, i.prototype.otTransformSelectionRequest = null, i.prototype.otTransformSelectionResponse = null, i.prototype.flush = null, i.prototype.debug = null, i.prototype.startVCR = null, i.prototype.readVCR = null, i.prototype.VCRLog = null, i.prototype.auth = null, i.prototype.execInfo = null, i.prototype.subscribeFile = null, i.prototype.fileEvent = null, i.prototype.roster = null, i.prototype.join = null, i.prototype.part = null, i.prototype.openFile = null, i.prototype.fileOpened = null, i.prototype.followUser = null, i.prototype.unfollowUser = null, i.prototype.updateSessionTimestamp = null, i.prototype.sessionTimestampUpdated = null, i.prototype.exec = null, i.prototype.packageSearch = null, i.prototype.packageSearchResp = null, i.prototype.packageInfo = null, i.prototype.packageInfoResp = null, i.prototype.packageAdd = null, i.prototype.packageRemove = null, i.prototype.packageInstall = null, i.prototype.packageListSpecfile = null, i.prototype.packageListSpecfileResp = null, i.prototype.packageCacheSave = null, i.prototype.chatMessage = null, i.prototype.chatTyping = null, i.prototype.chatScrollback = null, i.prototype.fsSnapshot = null, i.prototype.fsTakeLock = null, i.prototype.fsReleaseLock = null, i.prototype.hasCap = null, i.prototype.pid1Config = null, i.prototype.metrics = null, i.prototype.bootStatus = null, i.prototype.readMetaRequest = null, i.prototype.readMetaResponse = null, i.prototype.writeMetaRequest = null, i.prototype.writeMetaResponse = null, i.prototype.appendMetaRequest = null, i.prototype.appendMetaResponse = null, i.prototype.audio = null, i.prototype.pprofRequest = null, i.prototype.pprofResponse = null, i.prototype.audio2 = null, i.prototype.PTYConfig = null, i.prototype.debugMain = null, i.prototype.debugState = null, i.prototype.debugMainReply = null, i.prototype.debugInput = null, i.prototype.debugOutput = null, i.prototype.debugStop = null, i.prototype.debugLeave = null, i.prototype.debugSessions = null, i.prototype.debugAddBreakpointRequest = null, i.prototype.debugUpdateBreakpointRequest = null, i.prototype.debugRemoveBreakpointRequest = null, i.prototype.debugBreakpointEvent = null, i.prototype.dotReplitGetRequest = null, i.prototype.dotReplitGetResponse = null, i.prototype.startLSP = null, i.prototype.ref = "", Object.defineProperty(i.prototype, "body", {
                            get: r.oneOfGetter(a = ["openChan", "openChanRes", "closeChan", "closeChanRes", "containerState", "portOpen", "toast", "protocolError", "redirect", "alwaysOn", "runMain", "clear", "eval", "result", "input", "output", "error", "stderr", "log", "saneTerm", "resizeTerm", "state", "ok", "persist", "persistMirror", "write", "remove", "move", "tryRemove", "mkdir", "stat", "statRes", "transferStart", "transferChunk", "transferComplete", "transferCancel", "transfer", "read", "readdir", "files", "file", "checkChanges", "changedFiles", "lintResults", "runContainedTest", "testResult", "debuggerStart", "debuggerStep", "debuggerStatus", "ensurePackages", "ping", "pong", "hello", "goodbye", "hint", "connect", "send", "recv", "disconnect", "fileAuthReq", "fileAuthRes", "mutliFileAuthRes", "listObjects", "listObjectsResp", "ot", "otstatus", "otLinkFile", "otLinkFileResponse", "otNewCursor", "otDeleteCursor", "otFetchRequest", "otFetchResponse", "otTransformSelectionRequest", "otTransformSelectionResponse", "flush", "debug", "startVCR", "readVCR", "VCRLog", "auth", "execInfo", "subscribeFile", "fileEvent", "roster", "join", "part", "openFile", "fileOpened", "followUser", "unfollowUser", "updateSessionTimestamp", "sessionTimestampUpdated", "exec", "packageSearch", "packageSearchResp", "packageInfo", "packageInfoResp", "packageAdd", "packageRemove", "packageInstall", "packageListSpecfile", "packageListSpecfileResp", "packageCacheSave", "chatMessage", "chatTyping", "chatScrollback", "fsSnapshot", "fsTakeLock", "fsReleaseLock", "hasCap", "pid1Config", "metrics", "bootStatus", "readMetaRequest", "readMetaResponse", "writeMetaRequest", "writeMetaResponse", "appendMetaRequest", "appendMetaResponse", "audio", "pprofRequest", "pprofResponse", "audio2", "PTYConfig", "debugMain", "debugState", "debugMainReply", "debugInput", "debugOutput", "debugStop", "debugLeave", "debugSessions", "debugAddBreakpointRequest", "debugUpdateBreakpointRequest", "debugRemoveBreakpointRequest", "debugBreakpointEvent", "dotReplitGetRequest", "dotReplitGetResponse", "startLSP"]),
                            set: r.oneOfSetter(a)
                        }), i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.channel && Object.hasOwnProperty.call(e, "channel") && t.uint32(8).int32(e.channel), null != e.session && Object.hasOwnProperty.call(e, "session") && t.uint32(16).int32(e.session), null != e.openChan && Object.hasOwnProperty.call(e, "openChan") && o.api.OpenChannel.encode(e.openChan, t.uint32(26).fork()).ldelim(), null != e.openChanRes && Object.hasOwnProperty.call(e, "openChanRes") && o.api.OpenChannelRes.encode(e.openChanRes, t.uint32(34).fork()).ldelim(), null != e.closeChan && Object.hasOwnProperty.call(e, "closeChan") && o.api.CloseChannel.encode(e.closeChan, t.uint32(42).fork()).ldelim(), null != e.closeChanRes && Object.hasOwnProperty.call(e, "closeChanRes") && o.api.CloseChannelRes.encode(e.closeChanRes, t.uint32(50).fork()).ldelim(), null != e.containerState && Object.hasOwnProperty.call(e, "containerState") && o.api.ContainerState.encode(e.containerState, t.uint32(74).fork()).ldelim(), null != e.portOpen && Object.hasOwnProperty.call(e, "portOpen") && o.api.PortOpen.encode(e.portOpen, t.uint32(82).fork()).ldelim(), null != e.toast && Object.hasOwnProperty.call(e, "toast") && o.api.Toast.encode(e.toast, t.uint32(90).fork()).ldelim(), null != e.redirect && Object.hasOwnProperty.call(e, "redirect") && o.api.Redirect.encode(e.redirect, t.uint32(98).fork()).ldelim(), null != e.alwaysOn && Object.hasOwnProperty.call(e, "alwaysOn") && o.api.AlwaysOn.encode(e.alwaysOn, t.uint32(106).fork()).ldelim(), null != e.runMain && Object.hasOwnProperty.call(e, "runMain") && o.api.RunMain.encode(e.runMain, t.uint32(130).fork()).ldelim(), null != e.clear && Object.hasOwnProperty.call(e, "clear") && o.api.Clear.encode(e.clear, t.uint32(138).fork()).ldelim(), null != e.eval && Object.hasOwnProperty.call(e, "eval") && t.uint32(162).string(e.eval), null != e.result && Object.hasOwnProperty.call(e, "result") && t.uint32(170).string(e.result), null != e.input && Object.hasOwnProperty.call(e, "input") && t.uint32(178).string(e.input), null != e.output && Object.hasOwnProperty.call(e, "output") && t.uint32(186).string(e.output), null != e.error && Object.hasOwnProperty.call(e, "error") && t.uint32(194).string(e.error), null != e.saneTerm && Object.hasOwnProperty.call(e, "saneTerm") && o.api.SaneTerm.encode(e.saneTerm, t.uint32(210).fork()).ldelim(), null != e.resizeTerm && Object.hasOwnProperty.call(e, "resizeTerm") && o.api.ResizeTerm.encode(e.resizeTerm, t.uint32(218).fork()).ldelim(), null != e.state && Object.hasOwnProperty.call(e, "state") && t.uint32(224).int32(e.state), null != e.ok && Object.hasOwnProperty.call(e, "ok") && o.api.OK.encode(e.ok, t.uint32(242).fork()).ldelim(), null != e.persist && Object.hasOwnProperty.call(e, "persist") && o.api.File.encode(e.persist, t.uint32(250).fork()).ldelim(), null != e.write && Object.hasOwnProperty.call(e, "write") && o.api.File.encode(e.write, t.uint32(258).fork()).ldelim(), null != e.remove && Object.hasOwnProperty.call(e, "remove") && o.api.File.encode(e.remove, t.uint32(266).fork()).ldelim(), null != e.move && Object.hasOwnProperty.call(e, "move") && o.api.Move.encode(e.move, t.uint32(274).fork()).ldelim(), null != e.read && Object.hasOwnProperty.call(e, "read") && o.api.File.encode(e.read, t.uint32(282).fork()).ldelim(), null != e.tryRemove && Object.hasOwnProperty.call(e, "tryRemove") && o.api.File.encode(e.tryRemove, t.uint32(290).fork()).ldelim(), null != e.readdir && Object.hasOwnProperty.call(e, "readdir") && o.api.File.encode(e.readdir, t.uint32(298).fork()).ldelim(), null != e.files && Object.hasOwnProperty.call(e, "files") && o.api.Files.encode(e.files, t.uint32(306).fork()).ldelim(), null != e.mkdir && Object.hasOwnProperty.call(e, "mkdir") && o.api.File.encode(e.mkdir, t.uint32(314).fork()).ldelim(), null != e.file && Object.hasOwnProperty.call(e, "file") && o.api.File.encode(e.file, t.uint32(322).fork()).ldelim(), null != e.persistMirror && Object.hasOwnProperty.call(e, "persistMirror") && o.api.File.encode(e.persistMirror, t.uint32(330).fork()).ldelim(), null != e.checkChanges && Object.hasOwnProperty.call(e, "checkChanges") && o.api.CheckChanges.encode(e.checkChanges, t.uint32(338).fork()).ldelim(), null != e.changedFiles && Object.hasOwnProperty.call(e, "changedFiles") && o.api.Files.encode(e.changedFiles, t.uint32(346).fork()).ldelim(), null != e.lintResults && Object.hasOwnProperty.call(e, "lintResults") && o.api.LintResults.encode(e.lintResults, t.uint32(354).fork()).ldelim(), null != e.protocolError && Object.hasOwnProperty.call(e, "protocolError") && o.api.ProtocolError.encode(e.protocolError, t.uint32(362).fork()).ldelim(), null != e.stderr && Object.hasOwnProperty.call(e, "stderr") && t.uint32(370).string(e.stderr), null != e.log && Object.hasOwnProperty.call(e, "log") && t.uint32(378).string(e.log), null != e.runContainedTest && Object.hasOwnProperty.call(e, "runContainedTest") && o.api.ContainedTest.encode(e.runContainedTest, t.uint32(562).fork()).ldelim(), null != e.testResult && Object.hasOwnProperty.call(e, "testResult") && o.api.TestResult.encode(e.testResult, t.uint32(570).fork()).ldelim(), null != e.debuggerStart && Object.hasOwnProperty.call(e, "debuggerStart") && t.uint32(722).string(e.debuggerStart), null != e.debuggerStep && Object.hasOwnProperty.call(e, "debuggerStep") && o.api.RunMain.encode(e.debuggerStep, t.uint32(730).fork()).ldelim(), null != e.debuggerStatus && Object.hasOwnProperty.call(e, "debuggerStatus") && o.api.DebugStatus.encode(e.debuggerStatus, t.uint32(738).fork()).ldelim(), null != e.ensurePackages && Object.hasOwnProperty.call(e, "ensurePackages") && o.api.EnsurePackages.encode(e.ensurePackages, t.uint32(802).fork()).ldelim(), null != e.ping && Object.hasOwnProperty.call(e, "ping") && o.api.Ping.encode(e.ping, t.uint32(962).fork()).ldelim(), null != e.pong && Object.hasOwnProperty.call(e, "pong") && o.api.Pong.encode(e.pong, t.uint32(970).fork()).ldelim(), null != e.hello && Object.hasOwnProperty.call(e, "hello") && o.api.Hello.encode(e.hello, t.uint32(978).fork()).ldelim(), null != e.goodbye && Object.hasOwnProperty.call(e, "goodbye") && o.api.Goodbye.encode(e.goodbye, t.uint32(986).fork()).ldelim(), null != e.hint && Object.hasOwnProperty.call(e, "hint") && o.api.Hint.encode(e.hint, t.uint32(1042).fork()).ldelim(), null != e.connect && Object.hasOwnProperty.call(e, "connect") && o.api.Connect.encode(e.connect, t.uint32(1202).fork()).ldelim(), null != e.send && Object.hasOwnProperty.call(e, "send") && o.api.Send.encode(e.send, t.uint32(1210).fork()).ldelim(), null != e.recv && Object.hasOwnProperty.call(e, "recv") && o.api.Recv.encode(e.recv, t.uint32(1218).fork()).ldelim(), null != e.disconnect && Object.hasOwnProperty.call(e, "disconnect") && o.api.Disconnect.encode(e.disconnect, t.uint32(1226).fork()).ldelim(), null != e.fileAuthReq && Object.hasOwnProperty.call(e, "fileAuthReq") && o.api.FileAuthReq.encode(e.fileAuthReq, t.uint32(1602).fork()).ldelim(), null != e.fileAuthRes && Object.hasOwnProperty.call(e, "fileAuthRes") && o.api.FileAuthRes.encode(e.fileAuthRes, t.uint32(1610).fork()).ldelim(), null != e.mutliFileAuthRes && Object.hasOwnProperty.call(e, "mutliFileAuthRes") && o.api.MultiFileAuthRes.encode(e.mutliFileAuthRes, t.uint32(1618).fork()).ldelim(), null != e.listObjects && Object.hasOwnProperty.call(e, "listObjects") && o.api.ListObjects.encode(e.listObjects, t.uint32(1642).fork()).ldelim(), null != e.listObjectsResp && Object.hasOwnProperty.call(e, "listObjectsResp") && o.api.ListObjectsResp.encode(e.listObjectsResp, t.uint32(1650).fork()).ldelim(), null != e.ot && Object.hasOwnProperty.call(e, "ot") && o.api.OTPacket.encode(e.ot, t.uint32(1762).fork()).ldelim(), null != e.otstatus && Object.hasOwnProperty.call(e, "otstatus") && o.api.OTStatus.encode(e.otstatus, t.uint32(1770).fork()).ldelim(), null != e.otLinkFile && Object.hasOwnProperty.call(e, "otLinkFile") && o.api.OTLinkFile.encode(e.otLinkFile, t.uint32(1778).fork()).ldelim(), null != e.otNewCursor && Object.hasOwnProperty.call(e, "otNewCursor") && o.api.OTCursor.encode(e.otNewCursor, t.uint32(1786).fork()).ldelim(), null != e.otDeleteCursor && Object.hasOwnProperty.call(e, "otDeleteCursor") && o.api.OTCursor.encode(e.otDeleteCursor, t.uint32(1794).fork()).ldelim(), null != e.otFetchRequest && Object.hasOwnProperty.call(e, "otFetchRequest") && o.api.OTFetchRequest.encode(e.otFetchRequest, t.uint32(1802).fork()).ldelim(), null != e.otFetchResponse && Object.hasOwnProperty.call(e, "otFetchResponse") && o.api.OTFetchResponse.encode(e.otFetchResponse, t.uint32(1810).fork()).ldelim(), null != e.otTransformSelectionRequest && Object.hasOwnProperty.call(e, "otTransformSelectionRequest") && o.api.OTTransformSelectionRequest.encode(e.otTransformSelectionRequest, t.uint32(1818).fork()).ldelim(), null != e.otTransformSelectionResponse && Object.hasOwnProperty.call(e, "otTransformSelectionResponse") && o.api.OTTransformSelectionResponse.encode(e.otTransformSelectionResponse, t.uint32(1826).fork()).ldelim(), null != e.otLinkFileResponse && Object.hasOwnProperty.call(e, "otLinkFileResponse") && o.api.OTLinkFileResponse.encode(e.otLinkFileResponse, t.uint32(1834).fork()).ldelim(), null != e.debug && Object.hasOwnProperty.call(e, "debug") && o.api.Debug.encode(e.debug, t.uint32(1842).fork()).ldelim(), null != e.startVCR && Object.hasOwnProperty.call(e, "startVCR") && o.api.StartVCR.encode(e.startVCR, t.uint32(1850).fork()).ldelim(), null != e.readVCR && Object.hasOwnProperty.call(e, "readVCR") && o.api.ReadVCR.encode(e.readVCR, t.uint32(1858).fork()).ldelim(), null != e.VCRLog && Object.hasOwnProperty.call(e, "VCRLog") && o.api.VCRLog.encode(e.VCRLog, t.uint32(1866).fork()).ldelim(), null != e.auth && Object.hasOwnProperty.call(e, "auth") && o.api.Auth.encode(e.auth, t.uint32(1882).fork()).ldelim(), null != e.execInfo && Object.hasOwnProperty.call(e, "execInfo") && o.api.ExecInfo.encode(e.execInfo, t.uint32(1922).fork()).ldelim(), null != e.flush && Object.hasOwnProperty.call(e, "flush") && o.api.Flush.encode(e.flush, t.uint32(2010).fork()).ldelim(), null != e.subscribeFile && Object.hasOwnProperty.call(e, "subscribeFile") && o.api.SubscribeFile.encode(e.subscribeFile, t.uint32(2050).fork()).ldelim(), null != e.fileEvent && Object.hasOwnProperty.call(e, "fileEvent") && o.api.FileEvent.encode(e.fileEvent, t.uint32(2058).fork()).ldelim(), null != e.roster && Object.hasOwnProperty.call(e, "roster") && o.api.Roster.encode(e.roster, t.uint32(2082).fork()).ldelim(), null != e.join && Object.hasOwnProperty.call(e, "join") && o.api.User.encode(e.join, t.uint32(2090).fork()).ldelim(), null != e.part && Object.hasOwnProperty.call(e, "part") && o.api.User.encode(e.part, t.uint32(2098).fork()).ldelim(), null != e.openFile && Object.hasOwnProperty.call(e, "openFile") && o.api.OpenFile.encode(e.openFile, t.uint32(2106).fork()).ldelim(), null != e.fileOpened && Object.hasOwnProperty.call(e, "fileOpened") && o.api.FileOpened.encode(e.fileOpened, t.uint32(2114).fork()).ldelim(), null != e.followUser && Object.hasOwnProperty.call(e, "followUser") && o.api.FollowUser.encode(e.followUser, t.uint32(2122).fork()).ldelim(), null != e.updateSessionTimestamp && Object.hasOwnProperty.call(e, "updateSessionTimestamp") && o.api.UpdateSessionTimestamp.encode(e.updateSessionTimestamp, t.uint32(2130).fork()).ldelim(), null != e.sessionTimestampUpdated && Object.hasOwnProperty.call(e, "sessionTimestampUpdated") && o.api.SessionTimestampUpdated.encode(e.sessionTimestampUpdated, t.uint32(2138).fork()).ldelim(), null != e.unfollowUser && Object.hasOwnProperty.call(e, "unfollowUser") && o.api.UnfollowUser.encode(e.unfollowUser, t.uint32(2146).fork()).ldelim(), null != e.exec && Object.hasOwnProperty.call(e, "exec") && o.api.Exec.encode(e.exec, t.uint32(2162).fork()).ldelim(), null != e.packageSearch && Object.hasOwnProperty.call(e, "packageSearch") && o.api.PackageSearch.encode(e.packageSearch, t.uint32(2242).fork()).ldelim(), null != e.packageSearchResp && Object.hasOwnProperty.call(e, "packageSearchResp") && o.api.PackageSearchResp.encode(e.packageSearchResp, t.uint32(2250).fork()).ldelim(), null != e.packageInfo && Object.hasOwnProperty.call(e, "packageInfo") && o.api.PackageInfo.encode(e.packageInfo, t.uint32(2258).fork()).ldelim(), null != e.packageInfoResp && Object.hasOwnProperty.call(e, "packageInfoResp") && o.api.PackageInfoResp.encode(e.packageInfoResp, t.uint32(2266).fork()).ldelim(), null != e.packageAdd && Object.hasOwnProperty.call(e, "packageAdd") && o.api.PackageAdd.encode(e.packageAdd, t.uint32(2274).fork()).ldelim(), null != e.packageRemove && Object.hasOwnProperty.call(e, "packageRemove") && o.api.PackageRemove.encode(e.packageRemove, t.uint32(2282).fork()).ldelim(), null != e.packageInstall && Object.hasOwnProperty.call(e, "packageInstall") && o.api.PackageInstall.encode(e.packageInstall, t.uint32(2290).fork()).ldelim(), null != e.packageListSpecfile && Object.hasOwnProperty.call(e, "packageListSpecfile") && o.api.PackageListSpecfile.encode(e.packageListSpecfile, t.uint32(2298).fork()).ldelim(), null != e.packageListSpecfileResp && Object.hasOwnProperty.call(e, "packageListSpecfileResp") && o.api.PackageListSpecfileResp.encode(e.packageListSpecfileResp, t.uint32(2306).fork()).ldelim(), null != e.packageCacheSave && Object.hasOwnProperty.call(e, "packageCacheSave") && o.api.PackageCacheSave.encode(e.packageCacheSave, t.uint32(2314).fork()).ldelim(), null != e.chatMessage && Object.hasOwnProperty.call(e, "chatMessage") && o.api.ChatMessage.encode(e.chatMessage, t.uint32(2482).fork()).ldelim(), null != e.chatTyping && Object.hasOwnProperty.call(e, "chatTyping") && o.api.ChatTyping.encode(e.chatTyping, t.uint32(2490).fork()).ldelim(), null != e.chatScrollback && Object.hasOwnProperty.call(e, "chatScrollback") && o.api.ChatScrollback.encode(e.chatScrollback, t.uint32(2498).fork()).ldelim(), null != e.transferStart && Object.hasOwnProperty.call(e, "transferStart") && o.api.TransferStart.encode(e.transferStart, t.uint32(2562).fork()).ldelim(), null != e.transferChunk && Object.hasOwnProperty.call(e, "transferChunk") && o.api.TransferChunk.encode(e.transferChunk, t.uint32(2570).fork()).ldelim(), null != e.transferComplete && Object.hasOwnProperty.call(e, "transferComplete") && o.api.TransferComplete.encode(e.transferComplete, t.uint32(2578).fork()).ldelim(), null != e.transferCancel && Object.hasOwnProperty.call(e, "transferCancel") && o.api.Transfer.encode(e.transferCancel, t.uint32(2586).fork()).ldelim(), null != e.transfer && Object.hasOwnProperty.call(e, "transfer") && o.api.Transfer.encode(e.transfer, t.uint32(2594).fork()).ldelim(), null != e.fsSnapshot && Object.hasOwnProperty.call(e, "fsSnapshot") && o.api.FSSnapshot.encode(e.fsSnapshot, t.uint32(2642).fork()).ldelim(), null != e.fsTakeLock && Object.hasOwnProperty.call(e, "fsTakeLock") && o.api.FSLock.encode(e.fsTakeLock, t.uint32(2650).fork()).ldelim(), null != e.fsReleaseLock && Object.hasOwnProperty.call(e, "fsReleaseLock") && o.api.FSLock.encode(e.fsReleaseLock, t.uint32(2658).fork()).ldelim(), null != e.hasCap && Object.hasOwnProperty.call(e, "hasCap") && t.uint32(2680).bool(e.hasCap), null != e.pid1Config && Object.hasOwnProperty.call(e, "pid1Config") && o.api.Pid1Config.encode(e.pid1Config, t.uint32(2722).fork()).ldelim(), null != e.startLSP && Object.hasOwnProperty.call(e, "startLSP") && o.api.StartLSP.encode(e.startLSP, t.uint32(2762).fork()).ldelim(), null != e.metrics && Object.hasOwnProperty.call(e, "metrics") && o.api.Metrics.encode(e.metrics, t.uint32(2802).fork()).ldelim(), null != e.bootStatus && Object.hasOwnProperty.call(e, "bootStatus") && o.api.BootStatus.encode(e.bootStatus, t.uint32(2810).fork()).ldelim(), null != e.readMetaRequest && Object.hasOwnProperty.call(e, "readMetaRequest") && o.api.ReadMetaRequest.encode(e.readMetaRequest, t.uint32(2882).fork()).ldelim(), null != e.writeMetaRequest && Object.hasOwnProperty.call(e, "writeMetaRequest") && o.api.WriteMetaRequest.encode(e.writeMetaRequest, t.uint32(2890).fork()).ldelim(), null != e.appendMetaRequest && Object.hasOwnProperty.call(e, "appendMetaRequest") && o.api.AppendMetaRequest.encode(e.appendMetaRequest, t.uint32(2898).fork()).ldelim(), null != e.audio && Object.hasOwnProperty.call(e, "audio") && o.api.Audio.encode(e.audio, t.uint32(2906).fork()).ldelim(), null != e.pprofRequest && Object.hasOwnProperty.call(e, "pprofRequest") && o.api.PprofRequest.encode(e.pprofRequest, t.uint32(2914).fork()).ldelim(), null != e.pprofResponse && Object.hasOwnProperty.call(e, "pprofResponse") && o.api.PprofResponse.encode(e.pprofResponse, t.uint32(2922).fork()).ldelim(), null != e.audio2 && Object.hasOwnProperty.call(e, "audio2") && o.api.Audio2.encode(e.audio2, t.uint32(2930).fork()).ldelim(), null != e.PTYConfig && Object.hasOwnProperty.call(e, "PTYConfig") && o.api.PTYConfig.encode(e.PTYConfig, t.uint32(2938).fork()).ldelim(), null != e.stat && Object.hasOwnProperty.call(e, "stat") && o.api.File.encode(e.stat, t.uint32(2946).fork()).ldelim(), null != e.statRes && Object.hasOwnProperty.call(e, "statRes") && o.api.StatResult.encode(e.statRes, t.uint32(2954).fork()).ldelim(), null != e.debugMain && Object.hasOwnProperty.call(e, "debugMain") && o.api.DebugMain.encode(e.debugMain, t.uint32(2962).fork()).ldelim(), null != e.debugState && Object.hasOwnProperty.call(e, "debugState") && o.api.DebugState.encode(e.debugState, t.uint32(2970).fork()).ldelim(), null != e.debugMainReply && Object.hasOwnProperty.call(e, "debugMainReply") && o.api.DebugMainReply.encode(e.debugMainReply, t.uint32(2978).fork()).ldelim(), null != e.debugInput && Object.hasOwnProperty.call(e, "debugInput") && o.api.DebugInput.encode(e.debugInput, t.uint32(2986).fork()).ldelim(), null != e.debugOutput && Object.hasOwnProperty.call(e, "debugOutput") && o.api.DebugOutput.encode(e.debugOutput, t.uint32(2994).fork()).ldelim(), null != e.debugStop && Object.hasOwnProperty.call(e, "debugStop") && o.api.DebugStop.encode(e.debugStop, t.uint32(3002).fork()).ldelim(), null != e.debugLeave && Object.hasOwnProperty.call(e, "debugLeave") && o.api.DebugLeave.encode(e.debugLeave, t.uint32(3010).fork()).ldelim(), null != e.debugSessions && Object.hasOwnProperty.call(e, "debugSessions") && o.api.DebugSessions.encode(e.debugSessions, t.uint32(3018).fork()).ldelim(), null != e.dotReplitGetRequest && Object.hasOwnProperty.call(e, "dotReplitGetRequest") && o.api.DotReplitGetRequest.encode(e.dotReplitGetRequest, t.uint32(3026).fork()).ldelim(), null != e.dotReplitGetResponse && Object.hasOwnProperty.call(e, "dotReplitGetResponse") && o.api.DotReplitGetResponse.encode(e.dotReplitGetResponse, t.uint32(3034).fork()).ldelim(), null != e.debugAddBreakpointRequest && Object.hasOwnProperty.call(e, "debugAddBreakpointRequest") && o.api.DebugAddBreakpointRequest.encode(e.debugAddBreakpointRequest, t.uint32(3042).fork()).ldelim(), null != e.debugRemoveBreakpointRequest && Object.hasOwnProperty.call(e, "debugRemoveBreakpointRequest") && o.api.DebugRemoveBreakpointRequest.encode(e.debugRemoveBreakpointRequest, t.uint32(3050).fork()).ldelim(), null != e.debugBreakpointEvent && Object.hasOwnProperty.call(e, "debugBreakpointEvent") && o.api.DebugBreakpointEvent.encode(e.debugBreakpointEvent, t.uint32(3066).fork()).ldelim(), null != e.readMetaResponse && Object.hasOwnProperty.call(e, "readMetaResponse") && o.api.ReadMetaResponse.encode(e.readMetaResponse, t.uint32(3074).fork()).ldelim(), null != e.writeMetaResponse && Object.hasOwnProperty.call(e, "writeMetaResponse") && o.api.WriteMetaResponse.encode(e.writeMetaResponse, t.uint32(3082).fork()).ldelim(), null != e.appendMetaResponse && Object.hasOwnProperty.call(e, "appendMetaResponse") && o.api.AppendMetaResponse.encode(e.appendMetaResponse, t.uint32(3090).fork()).ldelim(), null != e.debugUpdateBreakpointRequest && Object.hasOwnProperty.call(e, "debugUpdateBreakpointRequest") && o.api.DebugUpdateBreakpointRequest.encode(e.debugUpdateBreakpointRequest, t.uint32(3098).fork()).ldelim(), null != e.ref && Object.hasOwnProperty.call(e, "ref") && t.uint32(8002).string(e.ref), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Command; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.channel = e.int32();
                                        break;
                                    case 2:
                                        i.session = e.int32();
                                        break;
                                    case 3:
                                        i.openChan = o.api.OpenChannel.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        i.openChanRes = o.api.OpenChannelRes.decode(e, e.uint32());
                                        break;
                                    case 5:
                                        i.closeChan = o.api.CloseChannel.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        i.closeChanRes = o.api.CloseChannelRes.decode(e, e.uint32());
                                        break;
                                    case 9:
                                        i.containerState = o.api.ContainerState.decode(e, e.uint32());
                                        break;
                                    case 10:
                                        i.portOpen = o.api.PortOpen.decode(e, e.uint32());
                                        break;
                                    case 11:
                                        i.toast = o.api.Toast.decode(e, e.uint32());
                                        break;
                                    case 45:
                                        i.protocolError = o.api.ProtocolError.decode(e, e.uint32());
                                        break;
                                    case 12:
                                        i.redirect = o.api.Redirect.decode(e, e.uint32());
                                        break;
                                    case 13:
                                        i.alwaysOn = o.api.AlwaysOn.decode(e, e.uint32());
                                        break;
                                    case 16:
                                        i.runMain = o.api.RunMain.decode(e, e.uint32());
                                        break;
                                    case 17:
                                        i.clear = o.api.Clear.decode(e, e.uint32());
                                        break;
                                    case 20:
                                        i.eval = e.string();
                                        break;
                                    case 21:
                                        i.result = e.string();
                                        break;
                                    case 22:
                                        i.input = e.string();
                                        break;
                                    case 23:
                                        i.output = e.string();
                                        break;
                                    case 24:
                                        i.error = e.string();
                                        break;
                                    case 46:
                                        i.stderr = e.string();
                                        break;
                                    case 47:
                                        i.log = e.string();
                                        break;
                                    case 26:
                                        i.saneTerm = o.api.SaneTerm.decode(e, e.uint32());
                                        break;
                                    case 27:
                                        i.resizeTerm = o.api.ResizeTerm.decode(e, e.uint32());
                                        break;
                                    case 28:
                                        i.state = e.int32();
                                        break;
                                    case 30:
                                        i.ok = o.api.OK.decode(e, e.uint32());
                                        break;
                                    case 31:
                                        i.persist = o.api.File.decode(e, e.uint32());
                                        break;
                                    case 41:
                                        i.persistMirror = o.api.File.decode(e, e.uint32());
                                        break;
                                    case 32:
                                        i.write = o.api.File.decode(e, e.uint32());
                                        break;
                                    case 33:
                                        i.remove = o.api.File.decode(e, e.uint32());
                                        break;
                                    case 34:
                                        i.move = o.api.Move.decode(e, e.uint32());
                                        break;
                                    case 36:
                                        i.tryRemove = o.api.File.decode(e, e.uint32());
                                        break;
                                    case 39:
                                        i.mkdir = o.api.File.decode(e, e.uint32());
                                        break;
                                    case 368:
                                        i.stat = o.api.File.decode(e, e.uint32());
                                        break;
                                    case 369:
                                        i.statRes = o.api.StatResult.decode(e, e.uint32());
                                        break;
                                    case 320:
                                        i.transferStart = o.api.TransferStart.decode(e, e.uint32());
                                        break;
                                    case 321:
                                        i.transferChunk = o.api.TransferChunk.decode(e, e.uint32());
                                        break;
                                    case 322:
                                        i.transferComplete = o.api.TransferComplete.decode(e, e.uint32());
                                        break;
                                    case 323:
                                        i.transferCancel = o.api.Transfer.decode(e, e.uint32());
                                        break;
                                    case 324:
                                        i.transfer = o.api.Transfer.decode(e, e.uint32());
                                        break;
                                    case 35:
                                        i.read = o.api.File.decode(e, e.uint32());
                                        break;
                                    case 37:
                                        i.readdir = o.api.File.decode(e, e.uint32());
                                        break;
                                    case 38:
                                        i.files = o.api.Files.decode(e, e.uint32());
                                        break;
                                    case 40:
                                        i.file = o.api.File.decode(e, e.uint32());
                                        break;
                                    case 42:
                                        i.checkChanges = o.api.CheckChanges.decode(e, e.uint32());
                                        break;
                                    case 43:
                                        i.changedFiles = o.api.Files.decode(e, e.uint32());
                                        break;
                                    case 44:
                                        i.lintResults = o.api.LintResults.decode(e, e.uint32());
                                        break;
                                    case 70:
                                        i.runContainedTest = o.api.ContainedTest.decode(e, e.uint32());
                                        break;
                                    case 71:
                                        i.testResult = o.api.TestResult.decode(e, e.uint32());
                                        break;
                                    case 90:
                                        i.debuggerStart = e.string();
                                        break;
                                    case 91:
                                        i.debuggerStep = o.api.RunMain.decode(e, e.uint32());
                                        break;
                                    case 92:
                                        i.debuggerStatus = o.api.DebugStatus.decode(e, e.uint32());
                                        break;
                                    case 100:
                                        i.ensurePackages = o.api.EnsurePackages.decode(e, e.uint32());
                                        break;
                                    case 120:
                                        i.ping = o.api.Ping.decode(e, e.uint32());
                                        break;
                                    case 121:
                                        i.pong = o.api.Pong.decode(e, e.uint32());
                                        break;
                                    case 122:
                                        i.hello = o.api.Hello.decode(e, e.uint32());
                                        break;
                                    case 123:
                                        i.goodbye = o.api.Goodbye.decode(e, e.uint32());
                                        break;
                                    case 130:
                                        i.hint = o.api.Hint.decode(e, e.uint32());
                                        break;
                                    case 150:
                                        i.connect = o.api.Connect.decode(e, e.uint32());
                                        break;
                                    case 151:
                                        i.send = o.api.Send.decode(e, e.uint32());
                                        break;
                                    case 152:
                                        i.recv = o.api.Recv.decode(e, e.uint32());
                                        break;
                                    case 153:
                                        i.disconnect = o.api.Disconnect.decode(e, e.uint32());
                                        break;
                                    case 200:
                                        i.fileAuthReq = o.api.FileAuthReq.decode(e, e.uint32());
                                        break;
                                    case 201:
                                        i.fileAuthRes = o.api.FileAuthRes.decode(e, e.uint32());
                                        break;
                                    case 202:
                                        i.mutliFileAuthRes = o.api.MultiFileAuthRes.decode(e, e.uint32());
                                        break;
                                    case 205:
                                        i.listObjects = o.api.ListObjects.decode(e, e.uint32());
                                        break;
                                    case 206:
                                        i.listObjectsResp = o.api.ListObjectsResp.decode(e, e.uint32());
                                        break;
                                    case 220:
                                        i.ot = o.api.OTPacket.decode(e, e.uint32());
                                        break;
                                    case 221:
                                        i.otstatus = o.api.OTStatus.decode(e, e.uint32());
                                        break;
                                    case 222:
                                        i.otLinkFile = o.api.OTLinkFile.decode(e, e.uint32());
                                        break;
                                    case 229:
                                        i.otLinkFileResponse = o.api.OTLinkFileResponse.decode(e, e.uint32());
                                        break;
                                    case 223:
                                        i.otNewCursor = o.api.OTCursor.decode(e, e.uint32());
                                        break;
                                    case 224:
                                        i.otDeleteCursor = o.api.OTCursor.decode(e, e.uint32());
                                        break;
                                    case 225:
                                        i.otFetchRequest = o.api.OTFetchRequest.decode(e, e.uint32());
                                        break;
                                    case 226:
                                        i.otFetchResponse = o.api.OTFetchResponse.decode(e, e.uint32());
                                        break;
                                    case 227:
                                        i.otTransformSelectionRequest = o.api.OTTransformSelectionRequest.decode(e, e.uint32());
                                        break;
                                    case 228:
                                        i.otTransformSelectionResponse = o.api.OTTransformSelectionResponse.decode(e, e.uint32());
                                        break;
                                    case 251:
                                        i.flush = o.api.Flush.decode(e, e.uint32());
                                        break;
                                    case 230:
                                        i.debug = o.api.Debug.decode(e, e.uint32());
                                        break;
                                    case 231:
                                        i.startVCR = o.api.StartVCR.decode(e, e.uint32());
                                        break;
                                    case 232:
                                        i.readVCR = o.api.ReadVCR.decode(e, e.uint32());
                                        break;
                                    case 233:
                                        i.VCRLog = o.api.VCRLog.decode(e, e.uint32());
                                        break;
                                    case 235:
                                        i.auth = o.api.Auth.decode(e, e.uint32());
                                        break;
                                    case 240:
                                        i.execInfo = o.api.ExecInfo.decode(e, e.uint32());
                                        break;
                                    case 256:
                                        i.subscribeFile = o.api.SubscribeFile.decode(e, e.uint32());
                                        break;
                                    case 257:
                                        i.fileEvent = o.api.FileEvent.decode(e, e.uint32());
                                        break;
                                    case 260:
                                        i.roster = o.api.Roster.decode(e, e.uint32());
                                        break;
                                    case 261:
                                        i.join = o.api.User.decode(e, e.uint32());
                                        break;
                                    case 262:
                                        i.part = o.api.User.decode(e, e.uint32());
                                        break;
                                    case 263:
                                        i.openFile = o.api.OpenFile.decode(e, e.uint32());
                                        break;
                                    case 264:
                                        i.fileOpened = o.api.FileOpened.decode(e, e.uint32());
                                        break;
                                    case 265:
                                        i.followUser = o.api.FollowUser.decode(e, e.uint32());
                                        break;
                                    case 268:
                                        i.unfollowUser = o.api.UnfollowUser.decode(e, e.uint32());
                                        break;
                                    case 266:
                                        i.updateSessionTimestamp = o.api.UpdateSessionTimestamp.decode(e, e.uint32());
                                        break;
                                    case 267:
                                        i.sessionTimestampUpdated = o.api.SessionTimestampUpdated.decode(e, e.uint32());
                                        break;
                                    case 270:
                                        i.exec = o.api.Exec.decode(e, e.uint32());
                                        break;
                                    case 280:
                                        i.packageSearch = o.api.PackageSearch.decode(e, e.uint32());
                                        break;
                                    case 281:
                                        i.packageSearchResp = o.api.PackageSearchResp.decode(e, e.uint32());
                                        break;
                                    case 282:
                                        i.packageInfo = o.api.PackageInfo.decode(e, e.uint32());
                                        break;
                                    case 283:
                                        i.packageInfoResp = o.api.PackageInfoResp.decode(e, e.uint32());
                                        break;
                                    case 284:
                                        i.packageAdd = o.api.PackageAdd.decode(e, e.uint32());
                                        break;
                                    case 285:
                                        i.packageRemove = o.api.PackageRemove.decode(e, e.uint32());
                                        break;
                                    case 286:
                                        i.packageInstall = o.api.PackageInstall.decode(e, e.uint32());
                                        break;
                                    case 287:
                                        i.packageListSpecfile = o.api.PackageListSpecfile.decode(e, e.uint32());
                                        break;
                                    case 288:
                                        i.packageListSpecfileResp = o.api.PackageListSpecfileResp.decode(e, e.uint32());
                                        break;
                                    case 289:
                                        i.packageCacheSave = o.api.PackageCacheSave.decode(e, e.uint32());
                                        break;
                                    case 310:
                                        i.chatMessage = o.api.ChatMessage.decode(e, e.uint32());
                                        break;
                                    case 311:
                                        i.chatTyping = o.api.ChatTyping.decode(e, e.uint32());
                                        break;
                                    case 312:
                                        i.chatScrollback = o.api.ChatScrollback.decode(e, e.uint32());
                                        break;
                                    case 330:
                                        i.fsSnapshot = o.api.FSSnapshot.decode(e, e.uint32());
                                        break;
                                    case 331:
                                        i.fsTakeLock = o.api.FSLock.decode(e, e.uint32());
                                        break;
                                    case 332:
                                        i.fsReleaseLock = o.api.FSLock.decode(e, e.uint32());
                                        break;
                                    case 335:
                                        i.hasCap = e.bool();
                                        break;
                                    case 340:
                                        i.pid1Config = o.api.Pid1Config.decode(e, e.uint32());
                                        break;
                                    case 350:
                                        i.metrics = o.api.Metrics.decode(e, e.uint32());
                                        break;
                                    case 351:
                                        i.bootStatus = o.api.BootStatus.decode(e, e.uint32());
                                        break;
                                    case 360:
                                        i.readMetaRequest = o.api.ReadMetaRequest.decode(e, e.uint32());
                                        break;
                                    case 384:
                                        i.readMetaResponse = o.api.ReadMetaResponse.decode(e, e.uint32());
                                        break;
                                    case 361:
                                        i.writeMetaRequest = o.api.WriteMetaRequest.decode(e, e.uint32());
                                        break;
                                    case 385:
                                        i.writeMetaResponse = o.api.WriteMetaResponse.decode(e, e.uint32());
                                        break;
                                    case 362:
                                        i.appendMetaRequest = o.api.AppendMetaRequest.decode(e, e.uint32());
                                        break;
                                    case 386:
                                        i.appendMetaResponse = o.api.AppendMetaResponse.decode(e, e.uint32());
                                        break;
                                    case 363:
                                        i.audio = o.api.Audio.decode(e, e.uint32());
                                        break;
                                    case 364:
                                        i.pprofRequest = o.api.PprofRequest.decode(e, e.uint32());
                                        break;
                                    case 365:
                                        i.pprofResponse = o.api.PprofResponse.decode(e, e.uint32());
                                        break;
                                    case 366:
                                        i.audio2 = o.api.Audio2.decode(e, e.uint32());
                                        break;
                                    case 367:
                                        i.PTYConfig = o.api.PTYConfig.decode(e, e.uint32());
                                        break;
                                    case 370:
                                        i.debugMain = o.api.DebugMain.decode(e, e.uint32());
                                        break;
                                    case 371:
                                        i.debugState = o.api.DebugState.decode(e, e.uint32());
                                        break;
                                    case 372:
                                        i.debugMainReply = o.api.DebugMainReply.decode(e, e.uint32());
                                        break;
                                    case 373:
                                        i.debugInput = o.api.DebugInput.decode(e, e.uint32());
                                        break;
                                    case 374:
                                        i.debugOutput = o.api.DebugOutput.decode(e, e.uint32());
                                        break;
                                    case 375:
                                        i.debugStop = o.api.DebugStop.decode(e, e.uint32());
                                        break;
                                    case 376:
                                        i.debugLeave = o.api.DebugLeave.decode(e, e.uint32());
                                        break;
                                    case 377:
                                        i.debugSessions = o.api.DebugSessions.decode(e, e.uint32());
                                        break;
                                    case 380:
                                        i.debugAddBreakpointRequest = o.api.DebugAddBreakpointRequest.decode(e, e.uint32());
                                        break;
                                    case 387:
                                        i.debugUpdateBreakpointRequest = o.api.DebugUpdateBreakpointRequest.decode(e, e.uint32());
                                        break;
                                    case 381:
                                        i.debugRemoveBreakpointRequest = o.api.DebugRemoveBreakpointRequest.decode(e, e.uint32());
                                        break;
                                    case 383:
                                        i.debugBreakpointEvent = o.api.DebugBreakpointEvent.decode(e, e.uint32());
                                        break;
                                    case 378:
                                        i.dotReplitGetRequest = o.api.DotReplitGetRequest.decode(e, e.uint32());
                                        break;
                                    case 379:
                                        i.dotReplitGetResponse = o.api.DotReplitGetResponse.decode(e, e.uint32());
                                        break;
                                    case 345:
                                        i.startLSP = o.api.StartLSP.decode(e, e.uint32());
                                        break;
                                    case 1e3:
                                        i.ref = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            var t = {};
                            if (null != e.channel && e.hasOwnProperty("channel") && !r.isInteger(e.channel)) return "channel: integer expected";
                            if (null != e.session && e.hasOwnProperty("session") && !r.isInteger(e.session)) return "session: integer expected";
                            if (null != e.openChan && e.hasOwnProperty("openChan") && (t.body = 1, n = o.api.OpenChannel.verify(e.openChan))) return "openChan." + n;
                            if (null != e.openChanRes && e.hasOwnProperty("openChanRes")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.OpenChannelRes.verify(e.openChanRes)) return "openChanRes." + n
                            }
                            if (null != e.closeChan && e.hasOwnProperty("closeChan")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.CloseChannel.verify(e.closeChan)) return "closeChan." + n
                            }
                            if (null != e.closeChanRes && e.hasOwnProperty("closeChanRes")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.CloseChannelRes.verify(e.closeChanRes)) return "closeChanRes." + n
                            }
                            if (null != e.containerState && e.hasOwnProperty("containerState")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.ContainerState.verify(e.containerState)) return "containerState." + n
                            }
                            if (null != e.portOpen && e.hasOwnProperty("portOpen")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.PortOpen.verify(e.portOpen)) return "portOpen." + n
                            }
                            if (null != e.toast && e.hasOwnProperty("toast")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Toast.verify(e.toast)) return "toast." + n
                            }
                            if (null != e.protocolError && e.hasOwnProperty("protocolError")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.ProtocolError.verify(e.protocolError)) return "protocolError." + n
                            }
                            if (null != e.redirect && e.hasOwnProperty("redirect")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Redirect.verify(e.redirect)) return "redirect." + n
                            }
                            if (null != e.alwaysOn && e.hasOwnProperty("alwaysOn")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.AlwaysOn.verify(e.alwaysOn)) return "alwaysOn." + n
                            }
                            if (null != e.runMain && e.hasOwnProperty("runMain")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.RunMain.verify(e.runMain)) return "runMain." + n
                            }
                            if (null != e.clear && e.hasOwnProperty("clear")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Clear.verify(e.clear)) return "clear." + n
                            }
                            if (null != e.eval && e.hasOwnProperty("eval")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, !r.isString(e.eval)) return "eval: string expected"
                            }
                            if (null != e.result && e.hasOwnProperty("result")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, !r.isString(e.result)) return "result: string expected"
                            }
                            if (null != e.input && e.hasOwnProperty("input")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, !r.isString(e.input)) return "input: string expected"
                            }
                            if (null != e.output && e.hasOwnProperty("output")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, !r.isString(e.output)) return "output: string expected"
                            }
                            if (null != e.error && e.hasOwnProperty("error")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, !r.isString(e.error)) return "error: string expected"
                            }
                            if (null != e.stderr && e.hasOwnProperty("stderr")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, !r.isString(e.stderr)) return "stderr: string expected"
                            }
                            if (null != e.log && e.hasOwnProperty("log")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, !r.isString(e.log)) return "log: string expected"
                            }
                            if (null != e.saneTerm && e.hasOwnProperty("saneTerm")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.SaneTerm.verify(e.saneTerm)) return "saneTerm." + n
                            }
                            if (null != e.resizeTerm && e.hasOwnProperty("resizeTerm")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.ResizeTerm.verify(e.resizeTerm)) return "resizeTerm." + n
                            }
                            if (null != e.state && e.hasOwnProperty("state")) {
                                if (1 === t.body) return "body: multiple values";
                                switch (t.body = 1, e.state) {
                                    default: return "state: enum value expected";
                                    case 0:
                                            case 1:
                                }
                            }
                            if (null != e.ok && e.hasOwnProperty("ok")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.OK.verify(e.ok)) return "ok." + n
                            }
                            if (null != e.persist && e.hasOwnProperty("persist")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.File.verify(e.persist)) return "persist." + n
                            }
                            if (null != e.persistMirror && e.hasOwnProperty("persistMirror")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.File.verify(e.persistMirror)) return "persistMirror." + n
                            }
                            if (null != e.write && e.hasOwnProperty("write")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.File.verify(e.write)) return "write." + n
                            }
                            if (null != e.remove && e.hasOwnProperty("remove")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.File.verify(e.remove)) return "remove." + n
                            }
                            if (null != e.move && e.hasOwnProperty("move")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Move.verify(e.move)) return "move." + n
                            }
                            if (null != e.tryRemove && e.hasOwnProperty("tryRemove")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.File.verify(e.tryRemove)) return "tryRemove." + n
                            }
                            if (null != e.mkdir && e.hasOwnProperty("mkdir")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.File.verify(e.mkdir)) return "mkdir." + n
                            }
                            if (null != e.stat && e.hasOwnProperty("stat")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.File.verify(e.stat)) return "stat." + n
                            }
                            if (null != e.statRes && e.hasOwnProperty("statRes")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.StatResult.verify(e.statRes)) return "statRes." + n
                            }
                            if (null != e.transferStart && e.hasOwnProperty("transferStart")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.TransferStart.verify(e.transferStart)) return "transferStart." + n
                            }
                            if (null != e.transferChunk && e.hasOwnProperty("transferChunk")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.TransferChunk.verify(e.transferChunk)) return "transferChunk." + n
                            }
                            if (null != e.transferComplete && e.hasOwnProperty("transferComplete")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.TransferComplete.verify(e.transferComplete)) return "transferComplete." + n
                            }
                            if (null != e.transferCancel && e.hasOwnProperty("transferCancel")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Transfer.verify(e.transferCancel)) return "transferCancel." + n
                            }
                            if (null != e.transfer && e.hasOwnProperty("transfer")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Transfer.verify(e.transfer)) return "transfer." + n
                            }
                            if (null != e.read && e.hasOwnProperty("read")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.File.verify(e.read)) return "read." + n
                            }
                            if (null != e.readdir && e.hasOwnProperty("readdir")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.File.verify(e.readdir)) return "readdir." + n
                            }
                            if (null != e.files && e.hasOwnProperty("files")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Files.verify(e.files)) return "files." + n
                            }
                            if (null != e.file && e.hasOwnProperty("file")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.File.verify(e.file)) return "file." + n
                            }
                            if (null != e.checkChanges && e.hasOwnProperty("checkChanges")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.CheckChanges.verify(e.checkChanges)) return "checkChanges." + n
                            }
                            if (null != e.changedFiles && e.hasOwnProperty("changedFiles")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Files.verify(e.changedFiles)) return "changedFiles." + n
                            }
                            if (null != e.lintResults && e.hasOwnProperty("lintResults")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.LintResults.verify(e.lintResults)) return "lintResults." + n
                            }
                            if (null != e.runContainedTest && e.hasOwnProperty("runContainedTest")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.ContainedTest.verify(e.runContainedTest)) return "runContainedTest." + n
                            }
                            if (null != e.testResult && e.hasOwnProperty("testResult")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.TestResult.verify(e.testResult)) return "testResult." + n
                            }
                            if (null != e.debuggerStart && e.hasOwnProperty("debuggerStart")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, !r.isString(e.debuggerStart)) return "debuggerStart: string expected"
                            }
                            if (null != e.debuggerStep && e.hasOwnProperty("debuggerStep")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.RunMain.verify(e.debuggerStep)) return "debuggerStep." + n
                            }
                            if (null != e.debuggerStatus && e.hasOwnProperty("debuggerStatus")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.DebugStatus.verify(e.debuggerStatus)) return "debuggerStatus." + n
                            }
                            if (null != e.ensurePackages && e.hasOwnProperty("ensurePackages")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.EnsurePackages.verify(e.ensurePackages)) return "ensurePackages." + n
                            }
                            if (null != e.ping && e.hasOwnProperty("ping")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Ping.verify(e.ping)) return "ping." + n
                            }
                            if (null != e.pong && e.hasOwnProperty("pong")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Pong.verify(e.pong)) return "pong." + n
                            }
                            if (null != e.hello && e.hasOwnProperty("hello")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Hello.verify(e.hello)) return "hello." + n
                            }
                            if (null != e.goodbye && e.hasOwnProperty("goodbye")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Goodbye.verify(e.goodbye)) return "goodbye." + n
                            }
                            if (null != e.hint && e.hasOwnProperty("hint")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Hint.verify(e.hint)) return "hint." + n
                            }
                            if (null != e.connect && e.hasOwnProperty("connect")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Connect.verify(e.connect)) return "connect." + n
                            }
                            if (null != e.send && e.hasOwnProperty("send")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Send.verify(e.send)) return "send." + n
                            }
                            if (null != e.recv && e.hasOwnProperty("recv")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Recv.verify(e.recv)) return "recv." + n
                            }
                            if (null != e.disconnect && e.hasOwnProperty("disconnect")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Disconnect.verify(e.disconnect)) return "disconnect." + n
                            }
                            if (null != e.fileAuthReq && e.hasOwnProperty("fileAuthReq")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.FileAuthReq.verify(e.fileAuthReq)) return "fileAuthReq." + n
                            }
                            if (null != e.fileAuthRes && e.hasOwnProperty("fileAuthRes")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.FileAuthRes.verify(e.fileAuthRes)) return "fileAuthRes." + n
                            }
                            if (null != e.mutliFileAuthRes && e.hasOwnProperty("mutliFileAuthRes")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.MultiFileAuthRes.verify(e.mutliFileAuthRes)) return "mutliFileAuthRes." + n
                            }
                            if (null != e.listObjects && e.hasOwnProperty("listObjects")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.ListObjects.verify(e.listObjects)) return "listObjects." + n
                            }
                            if (null != e.listObjectsResp && e.hasOwnProperty("listObjectsResp")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.ListObjectsResp.verify(e.listObjectsResp)) return "listObjectsResp." + n
                            }
                            if (null != e.ot && e.hasOwnProperty("ot")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.OTPacket.verify(e.ot)) return "ot." + n
                            }
                            if (null != e.otstatus && e.hasOwnProperty("otstatus")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.OTStatus.verify(e.otstatus)) return "otstatus." + n
                            }
                            if (null != e.otLinkFile && e.hasOwnProperty("otLinkFile")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.OTLinkFile.verify(e.otLinkFile)) return "otLinkFile." + n
                            }
                            if (null != e.otLinkFileResponse && e.hasOwnProperty("otLinkFileResponse")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.OTLinkFileResponse.verify(e.otLinkFileResponse)) return "otLinkFileResponse." + n
                            }
                            if (null != e.otNewCursor && e.hasOwnProperty("otNewCursor")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.OTCursor.verify(e.otNewCursor)) return "otNewCursor." + n
                            }
                            if (null != e.otDeleteCursor && e.hasOwnProperty("otDeleteCursor")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.OTCursor.verify(e.otDeleteCursor)) return "otDeleteCursor." + n
                            }
                            if (null != e.otFetchRequest && e.hasOwnProperty("otFetchRequest")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.OTFetchRequest.verify(e.otFetchRequest)) return "otFetchRequest." + n
                            }
                            if (null != e.otFetchResponse && e.hasOwnProperty("otFetchResponse")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.OTFetchResponse.verify(e.otFetchResponse)) return "otFetchResponse." + n
                            }
                            if (null != e.otTransformSelectionRequest && e.hasOwnProperty("otTransformSelectionRequest")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.OTTransformSelectionRequest.verify(e.otTransformSelectionRequest)) return "otTransformSelectionRequest." + n
                            }
                            if (null != e.otTransformSelectionResponse && e.hasOwnProperty("otTransformSelectionResponse")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.OTTransformSelectionResponse.verify(e.otTransformSelectionResponse)) return "otTransformSelectionResponse." + n
                            }
                            if (null != e.flush && e.hasOwnProperty("flush")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Flush.verify(e.flush)) return "flush." + n
                            }
                            if (null != e.debug && e.hasOwnProperty("debug")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Debug.verify(e.debug)) return "debug." + n
                            }
                            if (null != e.startVCR && e.hasOwnProperty("startVCR")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.StartVCR.verify(e.startVCR)) return "startVCR." + n
                            }
                            if (null != e.readVCR && e.hasOwnProperty("readVCR")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.ReadVCR.verify(e.readVCR)) return "readVCR." + n
                            }
                            if (null != e.VCRLog && e.hasOwnProperty("VCRLog")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.VCRLog.verify(e.VCRLog)) return "VCRLog." + n
                            }
                            if (null != e.auth && e.hasOwnProperty("auth")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Auth.verify(e.auth)) return "auth." + n
                            }
                            if (null != e.execInfo && e.hasOwnProperty("execInfo")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.ExecInfo.verify(e.execInfo)) return "execInfo." + n
                            }
                            if (null != e.subscribeFile && e.hasOwnProperty("subscribeFile")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.SubscribeFile.verify(e.subscribeFile)) return "subscribeFile." + n
                            }
                            if (null != e.fileEvent && e.hasOwnProperty("fileEvent")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.FileEvent.verify(e.fileEvent)) return "fileEvent." + n
                            }
                            if (null != e.roster && e.hasOwnProperty("roster")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Roster.verify(e.roster)) return "roster." + n
                            }
                            if (null != e.join && e.hasOwnProperty("join")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.User.verify(e.join)) return "join." + n
                            }
                            if (null != e.part && e.hasOwnProperty("part")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.User.verify(e.part)) return "part." + n
                            }
                            if (null != e.openFile && e.hasOwnProperty("openFile")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.OpenFile.verify(e.openFile)) return "openFile." + n
                            }
                            if (null != e.fileOpened && e.hasOwnProperty("fileOpened")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.FileOpened.verify(e.fileOpened)) return "fileOpened." + n
                            }
                            if (null != e.followUser && e.hasOwnProperty("followUser")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.FollowUser.verify(e.followUser)) return "followUser." + n
                            }
                            if (null != e.unfollowUser && e.hasOwnProperty("unfollowUser")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.UnfollowUser.verify(e.unfollowUser)) return "unfollowUser." + n
                            }
                            if (null != e.updateSessionTimestamp && e.hasOwnProperty("updateSessionTimestamp")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.UpdateSessionTimestamp.verify(e.updateSessionTimestamp)) return "updateSessionTimestamp." + n
                            }
                            if (null != e.sessionTimestampUpdated && e.hasOwnProperty("sessionTimestampUpdated")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.SessionTimestampUpdated.verify(e.sessionTimestampUpdated)) return "sessionTimestampUpdated." + n
                            }
                            if (null != e.exec && e.hasOwnProperty("exec")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Exec.verify(e.exec)) return "exec." + n
                            }
                            if (null != e.packageSearch && e.hasOwnProperty("packageSearch")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.PackageSearch.verify(e.packageSearch)) return "packageSearch." + n
                            }
                            if (null != e.packageSearchResp && e.hasOwnProperty("packageSearchResp")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.PackageSearchResp.verify(e.packageSearchResp)) return "packageSearchResp." + n
                            }
                            if (null != e.packageInfo && e.hasOwnProperty("packageInfo")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.PackageInfo.verify(e.packageInfo)) return "packageInfo." + n
                            }
                            if (null != e.packageInfoResp && e.hasOwnProperty("packageInfoResp")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.PackageInfoResp.verify(e.packageInfoResp)) return "packageInfoResp." + n
                            }
                            if (null != e.packageAdd && e.hasOwnProperty("packageAdd")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.PackageAdd.verify(e.packageAdd)) return "packageAdd." + n
                            }
                            if (null != e.packageRemove && e.hasOwnProperty("packageRemove")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.PackageRemove.verify(e.packageRemove)) return "packageRemove." + n
                            }
                            if (null != e.packageInstall && e.hasOwnProperty("packageInstall")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.PackageInstall.verify(e.packageInstall)) return "packageInstall." + n
                            }
                            if (null != e.packageListSpecfile && e.hasOwnProperty("packageListSpecfile")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.PackageListSpecfile.verify(e.packageListSpecfile)) return "packageListSpecfile." + n
                            }
                            if (null != e.packageListSpecfileResp && e.hasOwnProperty("packageListSpecfileResp")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.PackageListSpecfileResp.verify(e.packageListSpecfileResp)) return "packageListSpecfileResp." + n
                            }
                            if (null != e.packageCacheSave && e.hasOwnProperty("packageCacheSave")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.PackageCacheSave.verify(e.packageCacheSave)) return "packageCacheSave." + n
                            }
                            if (null != e.chatMessage && e.hasOwnProperty("chatMessage")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.ChatMessage.verify(e.chatMessage)) return "chatMessage." + n
                            }
                            if (null != e.chatTyping && e.hasOwnProperty("chatTyping")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.ChatTyping.verify(e.chatTyping)) return "chatTyping." + n
                            }
                            if (null != e.chatScrollback && e.hasOwnProperty("chatScrollback")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.ChatScrollback.verify(e.chatScrollback)) return "chatScrollback." + n
                            }
                            if (null != e.fsSnapshot && e.hasOwnProperty("fsSnapshot")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.FSSnapshot.verify(e.fsSnapshot)) return "fsSnapshot." + n
                            }
                            if (null != e.fsTakeLock && e.hasOwnProperty("fsTakeLock")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.FSLock.verify(e.fsTakeLock)) return "fsTakeLock." + n
                            }
                            if (null != e.fsReleaseLock && e.hasOwnProperty("fsReleaseLock")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.FSLock.verify(e.fsReleaseLock)) return "fsReleaseLock." + n
                            }
                            if (null != e.hasCap && e.hasOwnProperty("hasCap")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, "boolean" !== typeof e.hasCap) return "hasCap: boolean expected"
                            }
                            if (null != e.pid1Config && e.hasOwnProperty("pid1Config")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Pid1Config.verify(e.pid1Config)) return "pid1Config." + n
                            }
                            if (null != e.metrics && e.hasOwnProperty("metrics")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Metrics.verify(e.metrics)) return "metrics." + n
                            }
                            if (null != e.bootStatus && e.hasOwnProperty("bootStatus")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.BootStatus.verify(e.bootStatus)) return "bootStatus." + n
                            }
                            if (null != e.readMetaRequest && e.hasOwnProperty("readMetaRequest")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.ReadMetaRequest.verify(e.readMetaRequest)) return "readMetaRequest." + n
                            }
                            if (null != e.readMetaResponse && e.hasOwnProperty("readMetaResponse")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.ReadMetaResponse.verify(e.readMetaResponse)) return "readMetaResponse." + n
                            }
                            if (null != e.writeMetaRequest && e.hasOwnProperty("writeMetaRequest")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.WriteMetaRequest.verify(e.writeMetaRequest)) return "writeMetaRequest." + n
                            }
                            if (null != e.writeMetaResponse && e.hasOwnProperty("writeMetaResponse")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.WriteMetaResponse.verify(e.writeMetaResponse)) return "writeMetaResponse." + n
                            }
                            if (null != e.appendMetaRequest && e.hasOwnProperty("appendMetaRequest")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.AppendMetaRequest.verify(e.appendMetaRequest)) return "appendMetaRequest." + n
                            }
                            if (null != e.appendMetaResponse && e.hasOwnProperty("appendMetaResponse")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.AppendMetaResponse.verify(e.appendMetaResponse)) return "appendMetaResponse." + n
                            }
                            if (null != e.audio && e.hasOwnProperty("audio")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Audio.verify(e.audio)) return "audio." + n
                            }
                            if (null != e.pprofRequest && e.hasOwnProperty("pprofRequest")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.PprofRequest.verify(e.pprofRequest)) return "pprofRequest." + n
                            }
                            if (null != e.pprofResponse && e.hasOwnProperty("pprofResponse")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.PprofResponse.verify(e.pprofResponse)) return "pprofResponse." + n
                            }
                            if (null != e.audio2 && e.hasOwnProperty("audio2")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.Audio2.verify(e.audio2)) return "audio2." + n
                            }
                            if (null != e.PTYConfig && e.hasOwnProperty("PTYConfig")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.PTYConfig.verify(e.PTYConfig)) return "PTYConfig." + n
                            }
                            if (null != e.debugMain && e.hasOwnProperty("debugMain")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.DebugMain.verify(e.debugMain)) return "debugMain." + n
                            }
                            if (null != e.debugState && e.hasOwnProperty("debugState")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.DebugState.verify(e.debugState)) return "debugState." + n
                            }
                            if (null != e.debugMainReply && e.hasOwnProperty("debugMainReply")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.DebugMainReply.verify(e.debugMainReply)) return "debugMainReply." + n
                            }
                            if (null != e.debugInput && e.hasOwnProperty("debugInput")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.DebugInput.verify(e.debugInput)) return "debugInput." + n
                            }
                            if (null != e.debugOutput && e.hasOwnProperty("debugOutput")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.DebugOutput.verify(e.debugOutput)) return "debugOutput." + n
                            }
                            if (null != e.debugStop && e.hasOwnProperty("debugStop")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.DebugStop.verify(e.debugStop)) return "debugStop." + n
                            }
                            if (null != e.debugLeave && e.hasOwnProperty("debugLeave")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.DebugLeave.verify(e.debugLeave)) return "debugLeave." + n
                            }
                            if (null != e.debugSessions && e.hasOwnProperty("debugSessions")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.DebugSessions.verify(e.debugSessions)) return "debugSessions." + n
                            }
                            if (null != e.debugAddBreakpointRequest && e.hasOwnProperty("debugAddBreakpointRequest")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.DebugAddBreakpointRequest.verify(e.debugAddBreakpointRequest)) return "debugAddBreakpointRequest." + n
                            }
                            if (null != e.debugUpdateBreakpointRequest && e.hasOwnProperty("debugUpdateBreakpointRequest")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.DebugUpdateBreakpointRequest.verify(e.debugUpdateBreakpointRequest)) return "debugUpdateBreakpointRequest." + n
                            }
                            if (null != e.debugRemoveBreakpointRequest && e.hasOwnProperty("debugRemoveBreakpointRequest")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.DebugRemoveBreakpointRequest.verify(e.debugRemoveBreakpointRequest)) return "debugRemoveBreakpointRequest." + n
                            }
                            if (null != e.debugBreakpointEvent && e.hasOwnProperty("debugBreakpointEvent")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.DebugBreakpointEvent.verify(e.debugBreakpointEvent)) return "debugBreakpointEvent." + n
                            }
                            if (null != e.dotReplitGetRequest && e.hasOwnProperty("dotReplitGetRequest")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.DotReplitGetRequest.verify(e.dotReplitGetRequest)) return "dotReplitGetRequest." + n
                            }
                            if (null != e.dotReplitGetResponse && e.hasOwnProperty("dotReplitGetResponse")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.DotReplitGetResponse.verify(e.dotReplitGetResponse)) return "dotReplitGetResponse." + n
                            }
                            if (null != e.startLSP && e.hasOwnProperty("startLSP")) {
                                if (1 === t.body) return "body: multiple values";
                                var n;
                                if (t.body = 1, n = o.api.StartLSP.verify(e.startLSP)) return "startLSP." + n
                            }
                            return null != e.ref && e.hasOwnProperty("ref") && !r.isString(e.ref) ? "ref: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Command) return e;
                            var t = new o.api.Command;
                            if (null != e.channel && (t.channel = 0 | e.channel), null != e.session && (t.session = 0 | e.session), null != e.openChan) {
                                if ("object" !== typeof e.openChan) throw TypeError(".api.Command.openChan: object expected");
                                t.openChan = o.api.OpenChannel.fromObject(e.openChan)
                            }
                            if (null != e.openChanRes) {
                                if ("object" !== typeof e.openChanRes) throw TypeError(".api.Command.openChanRes: object expected");
                                t.openChanRes = o.api.OpenChannelRes.fromObject(e.openChanRes)
                            }
                            if (null != e.closeChan) {
                                if ("object" !== typeof e.closeChan) throw TypeError(".api.Command.closeChan: object expected");
                                t.closeChan = o.api.CloseChannel.fromObject(e.closeChan)
                            }
                            if (null != e.closeChanRes) {
                                if ("object" !== typeof e.closeChanRes) throw TypeError(".api.Command.closeChanRes: object expected");
                                t.closeChanRes = o.api.CloseChannelRes.fromObject(e.closeChanRes)
                            }
                            if (null != e.containerState) {
                                if ("object" !== typeof e.containerState) throw TypeError(".api.Command.containerState: object expected");
                                t.containerState = o.api.ContainerState.fromObject(e.containerState)
                            }
                            if (null != e.portOpen) {
                                if ("object" !== typeof e.portOpen) throw TypeError(".api.Command.portOpen: object expected");
                                t.portOpen = o.api.PortOpen.fromObject(e.portOpen)
                            }
                            if (null != e.toast) {
                                if ("object" !== typeof e.toast) throw TypeError(".api.Command.toast: object expected");
                                t.toast = o.api.Toast.fromObject(e.toast)
                            }
                            if (null != e.protocolError) {
                                if ("object" !== typeof e.protocolError) throw TypeError(".api.Command.protocolError: object expected");
                                t.protocolError = o.api.ProtocolError.fromObject(e.protocolError)
                            }
                            if (null != e.redirect) {
                                if ("object" !== typeof e.redirect) throw TypeError(".api.Command.redirect: object expected");
                                t.redirect = o.api.Redirect.fromObject(e.redirect)
                            }
                            if (null != e.alwaysOn) {
                                if ("object" !== typeof e.alwaysOn) throw TypeError(".api.Command.alwaysOn: object expected");
                                t.alwaysOn = o.api.AlwaysOn.fromObject(e.alwaysOn)
                            }
                            if (null != e.runMain) {
                                if ("object" !== typeof e.runMain) throw TypeError(".api.Command.runMain: object expected");
                                t.runMain = o.api.RunMain.fromObject(e.runMain)
                            }
                            if (null != e.clear) {
                                if ("object" !== typeof e.clear) throw TypeError(".api.Command.clear: object expected");
                                t.clear = o.api.Clear.fromObject(e.clear)
                            }
                            if (null != e.eval && (t.eval = String(e.eval)), null != e.result && (t.result = String(e.result)), null != e.input && (t.input = String(e.input)), null != e.output && (t.output = String(e.output)), null != e.error && (t.error = String(e.error)), null != e.stderr && (t.stderr = String(e.stderr)), null != e.log && (t.log = String(e.log)), null != e.saneTerm) {
                                if ("object" !== typeof e.saneTerm) throw TypeError(".api.Command.saneTerm: object expected");
                                t.saneTerm = o.api.SaneTerm.fromObject(e.saneTerm)
                            }
                            if (null != e.resizeTerm) {
                                if ("object" !== typeof e.resizeTerm) throw TypeError(".api.Command.resizeTerm: object expected");
                                t.resizeTerm = o.api.ResizeTerm.fromObject(e.resizeTerm)
                            }
                            switch (e.state) {
                                case "Stopped":
                                case 0:
                                    t.state = 0;
                                    break;
                                case "Running":
                                case 1:
                                    t.state = 1
                            }
                            if (null != e.ok) {
                                if ("object" !== typeof e.ok) throw TypeError(".api.Command.ok: object expected");
                                t.ok = o.api.OK.fromObject(e.ok)
                            }
                            if (null != e.persist) {
                                if ("object" !== typeof e.persist) throw TypeError(".api.Command.persist: object expected");
                                t.persist = o.api.File.fromObject(e.persist)
                            }
                            if (null != e.persistMirror) {
                                if ("object" !== typeof e.persistMirror) throw TypeError(".api.Command.persistMirror: object expected");
                                t.persistMirror = o.api.File.fromObject(e.persistMirror)
                            }
                            if (null != e.write) {
                                if ("object" !== typeof e.write) throw TypeError(".api.Command.write: object expected");
                                t.write = o.api.File.fromObject(e.write)
                            }
                            if (null != e.remove) {
                                if ("object" !== typeof e.remove) throw TypeError(".api.Command.remove: object expected");
                                t.remove = o.api.File.fromObject(e.remove)
                            }
                            if (null != e.move) {
                                if ("object" !== typeof e.move) throw TypeError(".api.Command.move: object expected");
                                t.move = o.api.Move.fromObject(e.move)
                            }
                            if (null != e.tryRemove) {
                                if ("object" !== typeof e.tryRemove) throw TypeError(".api.Command.tryRemove: object expected");
                                t.tryRemove = o.api.File.fromObject(e.tryRemove)
                            }
                            if (null != e.mkdir) {
                                if ("object" !== typeof e.mkdir) throw TypeError(".api.Command.mkdir: object expected");
                                t.mkdir = o.api.File.fromObject(e.mkdir)
                            }
                            if (null != e.stat) {
                                if ("object" !== typeof e.stat) throw TypeError(".api.Command.stat: object expected");
                                t.stat = o.api.File.fromObject(e.stat)
                            }
                            if (null != e.statRes) {
                                if ("object" !== typeof e.statRes) throw TypeError(".api.Command.statRes: object expected");
                                t.statRes = o.api.StatResult.fromObject(e.statRes)
                            }
                            if (null != e.transferStart) {
                                if ("object" !== typeof e.transferStart) throw TypeError(".api.Command.transferStart: object expected");
                                t.transferStart = o.api.TransferStart.fromObject(e.transferStart)
                            }
                            if (null != e.transferChunk) {
                                if ("object" !== typeof e.transferChunk) throw TypeError(".api.Command.transferChunk: object expected");
                                t.transferChunk = o.api.TransferChunk.fromObject(e.transferChunk)
                            }
                            if (null != e.transferComplete) {
                                if ("object" !== typeof e.transferComplete) throw TypeError(".api.Command.transferComplete: object expected");
                                t.transferComplete = o.api.TransferComplete.fromObject(e.transferComplete)
                            }
                            if (null != e.transferCancel) {
                                if ("object" !== typeof e.transferCancel) throw TypeError(".api.Command.transferCancel: object expected");
                                t.transferCancel = o.api.Transfer.fromObject(e.transferCancel)
                            }
                            if (null != e.transfer) {
                                if ("object" !== typeof e.transfer) throw TypeError(".api.Command.transfer: object expected");
                                t.transfer = o.api.Transfer.fromObject(e.transfer)
                            }
                            if (null != e.read) {
                                if ("object" !== typeof e.read) throw TypeError(".api.Command.read: object expected");
                                t.read = o.api.File.fromObject(e.read)
                            }
                            if (null != e.readdir) {
                                if ("object" !== typeof e.readdir) throw TypeError(".api.Command.readdir: object expected");
                                t.readdir = o.api.File.fromObject(e.readdir)
                            }
                            if (null != e.files) {
                                if ("object" !== typeof e.files) throw TypeError(".api.Command.files: object expected");
                                t.files = o.api.Files.fromObject(e.files)
                            }
                            if (null != e.file) {
                                if ("object" !== typeof e.file) throw TypeError(".api.Command.file: object expected");
                                t.file = o.api.File.fromObject(e.file)
                            }
                            if (null != e.checkChanges) {
                                if ("object" !== typeof e.checkChanges) throw TypeError(".api.Command.checkChanges: object expected");
                                t.checkChanges = o.api.CheckChanges.fromObject(e.checkChanges)
                            }
                            if (null != e.changedFiles) {
                                if ("object" !== typeof e.changedFiles) throw TypeError(".api.Command.changedFiles: object expected");
                                t.changedFiles = o.api.Files.fromObject(e.changedFiles)
                            }
                            if (null != e.lintResults) {
                                if ("object" !== typeof e.lintResults) throw TypeError(".api.Command.lintResults: object expected");
                                t.lintResults = o.api.LintResults.fromObject(e.lintResults)
                            }
                            if (null != e.runContainedTest) {
                                if ("object" !== typeof e.runContainedTest) throw TypeError(".api.Command.runContainedTest: object expected");
                                t.runContainedTest = o.api.ContainedTest.fromObject(e.runContainedTest)
                            }
                            if (null != e.testResult) {
                                if ("object" !== typeof e.testResult) throw TypeError(".api.Command.testResult: object expected");
                                t.testResult = o.api.TestResult.fromObject(e.testResult)
                            }
                            if (null != e.debuggerStart && (t.debuggerStart = String(e.debuggerStart)), null != e.debuggerStep) {
                                if ("object" !== typeof e.debuggerStep) throw TypeError(".api.Command.debuggerStep: object expected");
                                t.debuggerStep = o.api.RunMain.fromObject(e.debuggerStep)
                            }
                            if (null != e.debuggerStatus) {
                                if ("object" !== typeof e.debuggerStatus) throw TypeError(".api.Command.debuggerStatus: object expected");
                                t.debuggerStatus = o.api.DebugStatus.fromObject(e.debuggerStatus)
                            }
                            if (null != e.ensurePackages) {
                                if ("object" !== typeof e.ensurePackages) throw TypeError(".api.Command.ensurePackages: object expected");
                                t.ensurePackages = o.api.EnsurePackages.fromObject(e.ensurePackages)
                            }
                            if (null != e.ping) {
                                if ("object" !== typeof e.ping) throw TypeError(".api.Command.ping: object expected");
                                t.ping = o.api.Ping.fromObject(e.ping)
                            }
                            if (null != e.pong) {
                                if ("object" !== typeof e.pong) throw TypeError(".api.Command.pong: object expected");
                                t.pong = o.api.Pong.fromObject(e.pong)
                            }
                            if (null != e.hello) {
                                if ("object" !== typeof e.hello) throw TypeError(".api.Command.hello: object expected");
                                t.hello = o.api.Hello.fromObject(e.hello)
                            }
                            if (null != e.goodbye) {
                                if ("object" !== typeof e.goodbye) throw TypeError(".api.Command.goodbye: object expected");
                                t.goodbye = o.api.Goodbye.fromObject(e.goodbye)
                            }
                            if (null != e.hint) {
                                if ("object" !== typeof e.hint) throw TypeError(".api.Command.hint: object expected");
                                t.hint = o.api.Hint.fromObject(e.hint)
                            }
                            if (null != e.connect) {
                                if ("object" !== typeof e.connect) throw TypeError(".api.Command.connect: object expected");
                                t.connect = o.api.Connect.fromObject(e.connect)
                            }
                            if (null != e.send) {
                                if ("object" !== typeof e.send) throw TypeError(".api.Command.send: object expected");
                                t.send = o.api.Send.fromObject(e.send)
                            }
                            if (null != e.recv) {
                                if ("object" !== typeof e.recv) throw TypeError(".api.Command.recv: object expected");
                                t.recv = o.api.Recv.fromObject(e.recv)
                            }
                            if (null != e.disconnect) {
                                if ("object" !== typeof e.disconnect) throw TypeError(".api.Command.disconnect: object expected");
                                t.disconnect = o.api.Disconnect.fromObject(e.disconnect)
                            }
                            if (null != e.fileAuthReq) {
                                if ("object" !== typeof e.fileAuthReq) throw TypeError(".api.Command.fileAuthReq: object expected");
                                t.fileAuthReq = o.api.FileAuthReq.fromObject(e.fileAuthReq)
                            }
                            if (null != e.fileAuthRes) {
                                if ("object" !== typeof e.fileAuthRes) throw TypeError(".api.Command.fileAuthRes: object expected");
                                t.fileAuthRes = o.api.FileAuthRes.fromObject(e.fileAuthRes)
                            }
                            if (null != e.mutliFileAuthRes) {
                                if ("object" !== typeof e.mutliFileAuthRes) throw TypeError(".api.Command.mutliFileAuthRes: object expected");
                                t.mutliFileAuthRes = o.api.MultiFileAuthRes.fromObject(e.mutliFileAuthRes)
                            }
                            if (null != e.listObjects) {
                                if ("object" !== typeof e.listObjects) throw TypeError(".api.Command.listObjects: object expected");
                                t.listObjects = o.api.ListObjects.fromObject(e.listObjects)
                            }
                            if (null != e.listObjectsResp) {
                                if ("object" !== typeof e.listObjectsResp) throw TypeError(".api.Command.listObjectsResp: object expected");
                                t.listObjectsResp = o.api.ListObjectsResp.fromObject(e.listObjectsResp)
                            }
                            if (null != e.ot) {
                                if ("object" !== typeof e.ot) throw TypeError(".api.Command.ot: object expected");
                                t.ot = o.api.OTPacket.fromObject(e.ot)
                            }
                            if (null != e.otstatus) {
                                if ("object" !== typeof e.otstatus) throw TypeError(".api.Command.otstatus: object expected");
                                t.otstatus = o.api.OTStatus.fromObject(e.otstatus)
                            }
                            if (null != e.otLinkFile) {
                                if ("object" !== typeof e.otLinkFile) throw TypeError(".api.Command.otLinkFile: object expected");
                                t.otLinkFile = o.api.OTLinkFile.fromObject(e.otLinkFile)
                            }
                            if (null != e.otLinkFileResponse) {
                                if ("object" !== typeof e.otLinkFileResponse) throw TypeError(".api.Command.otLinkFileResponse: object expected");
                                t.otLinkFileResponse = o.api.OTLinkFileResponse.fromObject(e.otLinkFileResponse)
                            }
                            if (null != e.otNewCursor) {
                                if ("object" !== typeof e.otNewCursor) throw TypeError(".api.Command.otNewCursor: object expected");
                                t.otNewCursor = o.api.OTCursor.fromObject(e.otNewCursor)
                            }
                            if (null != e.otDeleteCursor) {
                                if ("object" !== typeof e.otDeleteCursor) throw TypeError(".api.Command.otDeleteCursor: object expected");
                                t.otDeleteCursor = o.api.OTCursor.fromObject(e.otDeleteCursor)
                            }
                            if (null != e.otFetchRequest) {
                                if ("object" !== typeof e.otFetchRequest) throw TypeError(".api.Command.otFetchRequest: object expected");
                                t.otFetchRequest = o.api.OTFetchRequest.fromObject(e.otFetchRequest)
                            }
                            if (null != e.otFetchResponse) {
                                if ("object" !== typeof e.otFetchResponse) throw TypeError(".api.Command.otFetchResponse: object expected");
                                t.otFetchResponse = o.api.OTFetchResponse.fromObject(e.otFetchResponse)
                            }
                            if (null != e.otTransformSelectionRequest) {
                                if ("object" !== typeof e.otTransformSelectionRequest) throw TypeError(".api.Command.otTransformSelectionRequest: object expected");
                                t.otTransformSelectionRequest = o.api.OTTransformSelectionRequest.fromObject(e.otTransformSelectionRequest)
                            }
                            if (null != e.otTransformSelectionResponse) {
                                if ("object" !== typeof e.otTransformSelectionResponse) throw TypeError(".api.Command.otTransformSelectionResponse: object expected");
                                t.otTransformSelectionResponse = o.api.OTTransformSelectionResponse.fromObject(e.otTransformSelectionResponse)
                            }
                            if (null != e.flush) {
                                if ("object" !== typeof e.flush) throw TypeError(".api.Command.flush: object expected");
                                t.flush = o.api.Flush.fromObject(e.flush)
                            }
                            if (null != e.debug) {
                                if ("object" !== typeof e.debug) throw TypeError(".api.Command.debug: object expected");
                                t.debug = o.api.Debug.fromObject(e.debug)
                            }
                            if (null != e.startVCR) {
                                if ("object" !== typeof e.startVCR) throw TypeError(".api.Command.startVCR: object expected");
                                t.startVCR = o.api.StartVCR.fromObject(e.startVCR)
                            }
                            if (null != e.readVCR) {
                                if ("object" !== typeof e.readVCR) throw TypeError(".api.Command.readVCR: object expected");
                                t.readVCR = o.api.ReadVCR.fromObject(e.readVCR)
                            }
                            if (null != e.VCRLog) {
                                if ("object" !== typeof e.VCRLog) throw TypeError(".api.Command.VCRLog: object expected");
                                t.VCRLog = o.api.VCRLog.fromObject(e.VCRLog)
                            }
                            if (null != e.auth) {
                                if ("object" !== typeof e.auth) throw TypeError(".api.Command.auth: object expected");
                                t.auth = o.api.Auth.fromObject(e.auth)
                            }
                            if (null != e.execInfo) {
                                if ("object" !== typeof e.execInfo) throw TypeError(".api.Command.execInfo: object expected");
                                t.execInfo = o.api.ExecInfo.fromObject(e.execInfo)
                            }
                            if (null != e.subscribeFile) {
                                if ("object" !== typeof e.subscribeFile) throw TypeError(".api.Command.subscribeFile: object expected");
                                t.subscribeFile = o.api.SubscribeFile.fromObject(e.subscribeFile)
                            }
                            if (null != e.fileEvent) {
                                if ("object" !== typeof e.fileEvent) throw TypeError(".api.Command.fileEvent: object expected");
                                t.fileEvent = o.api.FileEvent.fromObject(e.fileEvent)
                            }
                            if (null != e.roster) {
                                if ("object" !== typeof e.roster) throw TypeError(".api.Command.roster: object expected");
                                t.roster = o.api.Roster.fromObject(e.roster)
                            }
                            if (null != e.join) {
                                if ("object" !== typeof e.join) throw TypeError(".api.Command.join: object expected");
                                t.join = o.api.User.fromObject(e.join)
                            }
                            if (null != e.part) {
                                if ("object" !== typeof e.part) throw TypeError(".api.Command.part: object expected");
                                t.part = o.api.User.fromObject(e.part)
                            }
                            if (null != e.openFile) {
                                if ("object" !== typeof e.openFile) throw TypeError(".api.Command.openFile: object expected");
                                t.openFile = o.api.OpenFile.fromObject(e.openFile)
                            }
                            if (null != e.fileOpened) {
                                if ("object" !== typeof e.fileOpened) throw TypeError(".api.Command.fileOpened: object expected");
                                t.fileOpened = o.api.FileOpened.fromObject(e.fileOpened)
                            }
                            if (null != e.followUser) {
                                if ("object" !== typeof e.followUser) throw TypeError(".api.Command.followUser: object expected");
                                t.followUser = o.api.FollowUser.fromObject(e.followUser)
                            }
                            if (null != e.unfollowUser) {
                                if ("object" !== typeof e.unfollowUser) throw TypeError(".api.Command.unfollowUser: object expected");
                                t.unfollowUser = o.api.UnfollowUser.fromObject(e.unfollowUser)
                            }
                            if (null != e.updateSessionTimestamp) {
                                if ("object" !== typeof e.updateSessionTimestamp) throw TypeError(".api.Command.updateSessionTimestamp: object expected");
                                t.updateSessionTimestamp = o.api.UpdateSessionTimestamp.fromObject(e.updateSessionTimestamp)
                            }
                            if (null != e.sessionTimestampUpdated) {
                                if ("object" !== typeof e.sessionTimestampUpdated) throw TypeError(".api.Command.sessionTimestampUpdated: object expected");
                                t.sessionTimestampUpdated = o.api.SessionTimestampUpdated.fromObject(e.sessionTimestampUpdated)
                            }
                            if (null != e.exec) {
                                if ("object" !== typeof e.exec) throw TypeError(".api.Command.exec: object expected");
                                t.exec = o.api.Exec.fromObject(e.exec)
                            }
                            if (null != e.packageSearch) {
                                if ("object" !== typeof e.packageSearch) throw TypeError(".api.Command.packageSearch: object expected");
                                t.packageSearch = o.api.PackageSearch.fromObject(e.packageSearch)
                            }
                            if (null != e.packageSearchResp) {
                                if ("object" !== typeof e.packageSearchResp) throw TypeError(".api.Command.packageSearchResp: object expected");
                                t.packageSearchResp = o.api.PackageSearchResp.fromObject(e.packageSearchResp)
                            }
                            if (null != e.packageInfo) {
                                if ("object" !== typeof e.packageInfo) throw TypeError(".api.Command.packageInfo: object expected");
                                t.packageInfo = o.api.PackageInfo.fromObject(e.packageInfo)
                            }
                            if (null != e.packageInfoResp) {
                                if ("object" !== typeof e.packageInfoResp) throw TypeError(".api.Command.packageInfoResp: object expected");
                                t.packageInfoResp = o.api.PackageInfoResp.fromObject(e.packageInfoResp)
                            }
                            if (null != e.packageAdd) {
                                if ("object" !== typeof e.packageAdd) throw TypeError(".api.Command.packageAdd: object expected");
                                t.packageAdd = o.api.PackageAdd.fromObject(e.packageAdd)
                            }
                            if (null != e.packageRemove) {
                                if ("object" !== typeof e.packageRemove) throw TypeError(".api.Command.packageRemove: object expected");
                                t.packageRemove = o.api.PackageRemove.fromObject(e.packageRemove)
                            }
                            if (null != e.packageInstall) {
                                if ("object" !== typeof e.packageInstall) throw TypeError(".api.Command.packageInstall: object expected");
                                t.packageInstall = o.api.PackageInstall.fromObject(e.packageInstall)
                            }
                            if (null != e.packageListSpecfile) {
                                if ("object" !== typeof e.packageListSpecfile) throw TypeError(".api.Command.packageListSpecfile: object expected");
                                t.packageListSpecfile = o.api.PackageListSpecfile.fromObject(e.packageListSpecfile)
                            }
                            if (null != e.packageListSpecfileResp) {
                                if ("object" !== typeof e.packageListSpecfileResp) throw TypeError(".api.Command.packageListSpecfileResp: object expected");
                                t.packageListSpecfileResp = o.api.PackageListSpecfileResp.fromObject(e.packageListSpecfileResp)
                            }
                            if (null != e.packageCacheSave) {
                                if ("object" !== typeof e.packageCacheSave) throw TypeError(".api.Command.packageCacheSave: object expected");
                                t.packageCacheSave = o.api.PackageCacheSave.fromObject(e.packageCacheSave)
                            }
                            if (null != e.chatMessage) {
                                if ("object" !== typeof e.chatMessage) throw TypeError(".api.Command.chatMessage: object expected");
                                t.chatMessage = o.api.ChatMessage.fromObject(e.chatMessage)
                            }
                            if (null != e.chatTyping) {
                                if ("object" !== typeof e.chatTyping) throw TypeError(".api.Command.chatTyping: object expected");
                                t.chatTyping = o.api.ChatTyping.fromObject(e.chatTyping)
                            }
                            if (null != e.chatScrollback) {
                                if ("object" !== typeof e.chatScrollback) throw TypeError(".api.Command.chatScrollback: object expected");
                                t.chatScrollback = o.api.ChatScrollback.fromObject(e.chatScrollback)
                            }
                            if (null != e.fsSnapshot) {
                                if ("object" !== typeof e.fsSnapshot) throw TypeError(".api.Command.fsSnapshot: object expected");
                                t.fsSnapshot = o.api.FSSnapshot.fromObject(e.fsSnapshot)
                            }
                            if (null != e.fsTakeLock) {
                                if ("object" !== typeof e.fsTakeLock) throw TypeError(".api.Command.fsTakeLock: object expected");
                                t.fsTakeLock = o.api.FSLock.fromObject(e.fsTakeLock)
                            }
                            if (null != e.fsReleaseLock) {
                                if ("object" !== typeof e.fsReleaseLock) throw TypeError(".api.Command.fsReleaseLock: object expected");
                                t.fsReleaseLock = o.api.FSLock.fromObject(e.fsReleaseLock)
                            }
                            if (null != e.hasCap && (t.hasCap = Boolean(e.hasCap)), null != e.pid1Config) {
                                if ("object" !== typeof e.pid1Config) throw TypeError(".api.Command.pid1Config: object expected");
                                t.pid1Config = o.api.Pid1Config.fromObject(e.pid1Config)
                            }
                            if (null != e.metrics) {
                                if ("object" !== typeof e.metrics) throw TypeError(".api.Command.metrics: object expected");
                                t.metrics = o.api.Metrics.fromObject(e.metrics)
                            }
                            if (null != e.bootStatus) {
                                if ("object" !== typeof e.bootStatus) throw TypeError(".api.Command.bootStatus: object expected");
                                t.bootStatus = o.api.BootStatus.fromObject(e.bootStatus)
                            }
                            if (null != e.readMetaRequest) {
                                if ("object" !== typeof e.readMetaRequest) throw TypeError(".api.Command.readMetaRequest: object expected");
                                t.readMetaRequest = o.api.ReadMetaRequest.fromObject(e.readMetaRequest)
                            }
                            if (null != e.readMetaResponse) {
                                if ("object" !== typeof e.readMetaResponse) throw TypeError(".api.Command.readMetaResponse: object expected");
                                t.readMetaResponse = o.api.ReadMetaResponse.fromObject(e.readMetaResponse)
                            }
                            if (null != e.writeMetaRequest) {
                                if ("object" !== typeof e.writeMetaRequest) throw TypeError(".api.Command.writeMetaRequest: object expected");
                                t.writeMetaRequest = o.api.WriteMetaRequest.fromObject(e.writeMetaRequest)
                            }
                            if (null != e.writeMetaResponse) {
                                if ("object" !== typeof e.writeMetaResponse) throw TypeError(".api.Command.writeMetaResponse: object expected");
                                t.writeMetaResponse = o.api.WriteMetaResponse.fromObject(e.writeMetaResponse)
                            }
                            if (null != e.appendMetaRequest) {
                                if ("object" !== typeof e.appendMetaRequest) throw TypeError(".api.Command.appendMetaRequest: object expected");
                                t.appendMetaRequest = o.api.AppendMetaRequest.fromObject(e.appendMetaRequest)
                            }
                            if (null != e.appendMetaResponse) {
                                if ("object" !== typeof e.appendMetaResponse) throw TypeError(".api.Command.appendMetaResponse: object expected");
                                t.appendMetaResponse = o.api.AppendMetaResponse.fromObject(e.appendMetaResponse)
                            }
                            if (null != e.audio) {
                                if ("object" !== typeof e.audio) throw TypeError(".api.Command.audio: object expected");
                                t.audio = o.api.Audio.fromObject(e.audio)
                            }
                            if (null != e.pprofRequest) {
                                if ("object" !== typeof e.pprofRequest) throw TypeError(".api.Command.pprofRequest: object expected");
                                t.pprofRequest = o.api.PprofRequest.fromObject(e.pprofRequest)
                            }
                            if (null != e.pprofResponse) {
                                if ("object" !== typeof e.pprofResponse) throw TypeError(".api.Command.pprofResponse: object expected");
                                t.pprofResponse = o.api.PprofResponse.fromObject(e.pprofResponse)
                            }
                            if (null != e.audio2) {
                                if ("object" !== typeof e.audio2) throw TypeError(".api.Command.audio2: object expected");
                                t.audio2 = o.api.Audio2.fromObject(e.audio2)
                            }
                            if (null != e.PTYConfig) {
                                if ("object" !== typeof e.PTYConfig) throw TypeError(".api.Command.PTYConfig: object expected");
                                t.PTYConfig = o.api.PTYConfig.fromObject(e.PTYConfig)
                            }
                            if (null != e.debugMain) {
                                if ("object" !== typeof e.debugMain) throw TypeError(".api.Command.debugMain: object expected");
                                t.debugMain = o.api.DebugMain.fromObject(e.debugMain)
                            }
                            if (null != e.debugState) {
                                if ("object" !== typeof e.debugState) throw TypeError(".api.Command.debugState: object expected");
                                t.debugState = o.api.DebugState.fromObject(e.debugState)
                            }
                            if (null != e.debugMainReply) {
                                if ("object" !== typeof e.debugMainReply) throw TypeError(".api.Command.debugMainReply: object expected");
                                t.debugMainReply = o.api.DebugMainReply.fromObject(e.debugMainReply)
                            }
                            if (null != e.debugInput) {
                                if ("object" !== typeof e.debugInput) throw TypeError(".api.Command.debugInput: object expected");
                                t.debugInput = o.api.DebugInput.fromObject(e.debugInput)
                            }
                            if (null != e.debugOutput) {
                                if ("object" !== typeof e.debugOutput) throw TypeError(".api.Command.debugOutput: object expected");
                                t.debugOutput = o.api.DebugOutput.fromObject(e.debugOutput)
                            }
                            if (null != e.debugStop) {
                                if ("object" !== typeof e.debugStop) throw TypeError(".api.Command.debugStop: object expected");
                                t.debugStop = o.api.DebugStop.fromObject(e.debugStop)
                            }
                            if (null != e.debugLeave) {
                                if ("object" !== typeof e.debugLeave) throw TypeError(".api.Command.debugLeave: object expected");
                                t.debugLeave = o.api.DebugLeave.fromObject(e.debugLeave)
                            }
                            if (null != e.debugSessions) {
                                if ("object" !== typeof e.debugSessions) throw TypeError(".api.Command.debugSessions: object expected");
                                t.debugSessions = o.api.DebugSessions.fromObject(e.debugSessions)
                            }
                            if (null != e.debugAddBreakpointRequest) {
                                if ("object" !== typeof e.debugAddBreakpointRequest) throw TypeError(".api.Command.debugAddBreakpointRequest: object expected");
                                t.debugAddBreakpointRequest = o.api.DebugAddBreakpointRequest.fromObject(e.debugAddBreakpointRequest)
                            }
                            if (null != e.debugUpdateBreakpointRequest) {
                                if ("object" !== typeof e.debugUpdateBreakpointRequest) throw TypeError(".api.Command.debugUpdateBreakpointRequest: object expected");
                                t.debugUpdateBreakpointRequest = o.api.DebugUpdateBreakpointRequest.fromObject(e.debugUpdateBreakpointRequest)
                            }
                            if (null != e.debugRemoveBreakpointRequest) {
                                if ("object" !== typeof e.debugRemoveBreakpointRequest) throw TypeError(".api.Command.debugRemoveBreakpointRequest: object expected");
                                t.debugRemoveBreakpointRequest = o.api.DebugRemoveBreakpointRequest.fromObject(e.debugRemoveBreakpointRequest)
                            }
                            if (null != e.debugBreakpointEvent) {
                                if ("object" !== typeof e.debugBreakpointEvent) throw TypeError(".api.Command.debugBreakpointEvent: object expected");
                                t.debugBreakpointEvent = o.api.DebugBreakpointEvent.fromObject(e.debugBreakpointEvent)
                            }
                            if (null != e.dotReplitGetRequest) {
                                if ("object" !== typeof e.dotReplitGetRequest) throw TypeError(".api.Command.dotReplitGetRequest: object expected");
                                t.dotReplitGetRequest = o.api.DotReplitGetRequest.fromObject(e.dotReplitGetRequest)
                            }
                            if (null != e.dotReplitGetResponse) {
                                if ("object" !== typeof e.dotReplitGetResponse) throw TypeError(".api.Command.dotReplitGetResponse: object expected");
                                t.dotReplitGetResponse = o.api.DotReplitGetResponse.fromObject(e.dotReplitGetResponse)
                            }
                            if (null != e.startLSP) {
                                if ("object" !== typeof e.startLSP) throw TypeError(".api.Command.startLSP: object expected");
                                t.startLSP = o.api.StartLSP.fromObject(e.startLSP)
                            }
                            return null != e.ref && (t.ref = String(e.ref)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.channel = 0, n.session = 0, n.ref = ""), null != e.channel && e.hasOwnProperty("channel") && (n.channel = e.channel), null != e.session && e.hasOwnProperty("session") && (n.session = e.session), null != e.openChan && e.hasOwnProperty("openChan") && (n.openChan = o.api.OpenChannel.toObject(e.openChan, t), t.oneofs && (n.body = "openChan")), null != e.openChanRes && e.hasOwnProperty("openChanRes") && (n.openChanRes = o.api.OpenChannelRes.toObject(e.openChanRes, t), t.oneofs && (n.body = "openChanRes")), null != e.closeChan && e.hasOwnProperty("closeChan") && (n.closeChan = o.api.CloseChannel.toObject(e.closeChan, t), t.oneofs && (n.body = "closeChan")), null != e.closeChanRes && e.hasOwnProperty("closeChanRes") && (n.closeChanRes = o.api.CloseChannelRes.toObject(e.closeChanRes, t), t.oneofs && (n.body = "closeChanRes")), null != e.containerState && e.hasOwnProperty("containerState") && (n.containerState = o.api.ContainerState.toObject(e.containerState, t), t.oneofs && (n.body = "containerState")), null != e.portOpen && e.hasOwnProperty("portOpen") && (n.portOpen = o.api.PortOpen.toObject(e.portOpen, t), t.oneofs && (n.body = "portOpen")), null != e.toast && e.hasOwnProperty("toast") && (n.toast = o.api.Toast.toObject(e.toast, t), t.oneofs && (n.body = "toast")), null != e.redirect && e.hasOwnProperty("redirect") && (n.redirect = o.api.Redirect.toObject(e.redirect, t), t.oneofs && (n.body = "redirect")), null != e.alwaysOn && e.hasOwnProperty("alwaysOn") && (n.alwaysOn = o.api.AlwaysOn.toObject(e.alwaysOn, t), t.oneofs && (n.body = "alwaysOn")), null != e.runMain && e.hasOwnProperty("runMain") && (n.runMain = o.api.RunMain.toObject(e.runMain, t), t.oneofs && (n.body = "runMain")), null != e.clear && e.hasOwnProperty("clear") && (n.clear = o.api.Clear.toObject(e.clear, t), t.oneofs && (n.body = "clear")), null != e.eval && e.hasOwnProperty("eval") && (n.eval = e.eval, t.oneofs && (n.body = "eval")), null != e.result && e.hasOwnProperty("result") && (n.result = e.result, t.oneofs && (n.body = "result")), null != e.input && e.hasOwnProperty("input") && (n.input = e.input, t.oneofs && (n.body = "input")), null != e.output && e.hasOwnProperty("output") && (n.output = e.output, t.oneofs && (n.body = "output")), null != e.error && e.hasOwnProperty("error") && (n.error = e.error, t.oneofs && (n.body = "error")), null != e.saneTerm && e.hasOwnProperty("saneTerm") && (n.saneTerm = o.api.SaneTerm.toObject(e.saneTerm, t), t.oneofs && (n.body = "saneTerm")), null != e.resizeTerm && e.hasOwnProperty("resizeTerm") && (n.resizeTerm = o.api.ResizeTerm.toObject(e.resizeTerm, t), t.oneofs && (n.body = "resizeTerm")), null != e.state && e.hasOwnProperty("state") && (n.state = t.enums === String ? o.api.State[e.state] : e.state, t.oneofs && (n.body = "state")), null != e.ok && e.hasOwnProperty("ok") && (n.ok = o.api.OK.toObject(e.ok, t), t.oneofs && (n.body = "ok")), null != e.persist && e.hasOwnProperty("persist") && (n.persist = o.api.File.toObject(e.persist, t), t.oneofs && (n.body = "persist")), null != e.write && e.hasOwnProperty("write") && (n.write = o.api.File.toObject(e.write, t), t.oneofs && (n.body = "write")), null != e.remove && e.hasOwnProperty("remove") && (n.remove = o.api.File.toObject(e.remove, t), t.oneofs && (n.body = "remove")), null != e.move && e.hasOwnProperty("move") && (n.move = o.api.Move.toObject(e.move, t), t.oneofs && (n.body = "move")), null != e.read && e.hasOwnProperty("read") && (n.read = o.api.File.toObject(e.read, t), t.oneofs && (n.body = "read")), null != e.tryRemove && e.hasOwnProperty("tryRemove") && (n.tryRemove = o.api.File.toObject(e.tryRemove, t), t.oneofs && (n.body = "tryRemove")), null != e.readdir && e.hasOwnProperty("readdir") && (n.readdir = o.api.File.toObject(e.readdir, t), t.oneofs && (n.body = "readdir")), null != e.files && e.hasOwnProperty("files") && (n.files = o.api.Files.toObject(e.files, t), t.oneofs && (n.body = "files")), null != e.mkdir && e.hasOwnProperty("mkdir") && (n.mkdir = o.api.File.toObject(e.mkdir, t), t.oneofs && (n.body = "mkdir")), null != e.file && e.hasOwnProperty("file") && (n.file = o.api.File.toObject(e.file, t), t.oneofs && (n.body = "file")), null != e.persistMirror && e.hasOwnProperty("persistMirror") && (n.persistMirror = o.api.File.toObject(e.persistMirror, t), t.oneofs && (n.body = "persistMirror")), null != e.checkChanges && e.hasOwnProperty("checkChanges") && (n.checkChanges = o.api.CheckChanges.toObject(e.checkChanges, t), t.oneofs && (n.body = "checkChanges")), null != e.changedFiles && e.hasOwnProperty("changedFiles") && (n.changedFiles = o.api.Files.toObject(e.changedFiles, t), t.oneofs && (n.body = "changedFiles")), null != e.lintResults && e.hasOwnProperty("lintResults") && (n.lintResults = o.api.LintResults.toObject(e.lintResults, t), t.oneofs && (n.body = "lintResults")), null != e.protocolError && e.hasOwnProperty("protocolError") && (n.protocolError = o.api.ProtocolError.toObject(e.protocolError, t), t.oneofs && (n.body = "protocolError")), null != e.stderr && e.hasOwnProperty("stderr") && (n.stderr = e.stderr, t.oneofs && (n.body = "stderr")), null != e.log && e.hasOwnProperty("log") && (n.log = e.log, t.oneofs && (n.body = "log")), null != e.runContainedTest && e.hasOwnProperty("runContainedTest") && (n.runContainedTest = o.api.ContainedTest.toObject(e.runContainedTest, t), t.oneofs && (n.body = "runContainedTest")), null != e.testResult && e.hasOwnProperty("testResult") && (n.testResult = o.api.TestResult.toObject(e.testResult, t), t.oneofs && (n.body = "testResult")), null != e.debuggerStart && e.hasOwnProperty("debuggerStart") && (n.debuggerStart = e.debuggerStart, t.oneofs && (n.body = "debuggerStart")), null != e.debuggerStep && e.hasOwnProperty("debuggerStep") && (n.debuggerStep = o.api.RunMain.toObject(e.debuggerStep, t), t.oneofs && (n.body = "debuggerStep")), null != e.debuggerStatus && e.hasOwnProperty("debuggerStatus") && (n.debuggerStatus = o.api.DebugStatus.toObject(e.debuggerStatus, t), t.oneofs && (n.body = "debuggerStatus")), null != e.ensurePackages && e.hasOwnProperty("ensurePackages") && (n.ensurePackages = o.api.EnsurePackages.toObject(e.ensurePackages, t), t.oneofs && (n.body = "ensurePackages")), null != e.ping && e.hasOwnProperty("ping") && (n.ping = o.api.Ping.toObject(e.ping, t), t.oneofs && (n.body = "ping")), null != e.pong && e.hasOwnProperty("pong") && (n.pong = o.api.Pong.toObject(e.pong, t), t.oneofs && (n.body = "pong")), null != e.hello && e.hasOwnProperty("hello") && (n.hello = o.api.Hello.toObject(e.hello, t), t.oneofs && (n.body = "hello")), null != e.goodbye && e.hasOwnProperty("goodbye") && (n.goodbye = o.api.Goodbye.toObject(e.goodbye, t), t.oneofs && (n.body = "goodbye")), null != e.hint && e.hasOwnProperty("hint") && (n.hint = o.api.Hint.toObject(e.hint, t), t.oneofs && (n.body = "hint")), null != e.connect && e.hasOwnProperty("connect") && (n.connect = o.api.Connect.toObject(e.connect, t), t.oneofs && (n.body = "connect")), null != e.send && e.hasOwnProperty("send") && (n.send = o.api.Send.toObject(e.send, t), t.oneofs && (n.body = "send")), null != e.recv && e.hasOwnProperty("recv") && (n.recv = o.api.Recv.toObject(e.recv, t), t.oneofs && (n.body = "recv")), null != e.disconnect && e.hasOwnProperty("disconnect") && (n.disconnect = o.api.Disconnect.toObject(e.disconnect, t), t.oneofs && (n.body = "disconnect")), null != e.fileAuthReq && e.hasOwnProperty("fileAuthReq") && (n.fileAuthReq = o.api.FileAuthReq.toObject(e.fileAuthReq, t), t.oneofs && (n.body = "fileAuthReq")), null != e.fileAuthRes && e.hasOwnProperty("fileAuthRes") && (n.fileAuthRes = o.api.FileAuthRes.toObject(e.fileAuthRes, t), t.oneofs && (n.body = "fileAuthRes")), null != e.mutliFileAuthRes && e.hasOwnProperty("mutliFileAuthRes") && (n.mutliFileAuthRes = o.api.MultiFileAuthRes.toObject(e.mutliFileAuthRes, t), t.oneofs && (n.body = "mutliFileAuthRes")), null != e.listObjects && e.hasOwnProperty("listObjects") && (n.listObjects = o.api.ListObjects.toObject(e.listObjects, t), t.oneofs && (n.body = "listObjects")), null != e.listObjectsResp && e.hasOwnProperty("listObjectsResp") && (n.listObjectsResp = o.api.ListObjectsResp.toObject(e.listObjectsResp, t), t.oneofs && (n.body = "listObjectsResp")), null != e.ot && e.hasOwnProperty("ot") && (n.ot = o.api.OTPacket.toObject(e.ot, t), t.oneofs && (n.body = "ot")), null != e.otstatus && e.hasOwnProperty("otstatus") && (n.otstatus = o.api.OTStatus.toObject(e.otstatus, t), t.oneofs && (n.body = "otstatus")), null != e.otLinkFile && e.hasOwnProperty("otLinkFile") && (n.otLinkFile = o.api.OTLinkFile.toObject(e.otLinkFile, t), t.oneofs && (n.body = "otLinkFile")), null != e.otNewCursor && e.hasOwnProperty("otNewCursor") && (n.otNewCursor = o.api.OTCursor.toObject(e.otNewCursor, t), t.oneofs && (n.body = "otNewCursor")), null != e.otDeleteCursor && e.hasOwnProperty("otDeleteCursor") && (n.otDeleteCursor = o.api.OTCursor.toObject(e.otDeleteCursor, t), t.oneofs && (n.body = "otDeleteCursor")), null != e.otFetchRequest && e.hasOwnProperty("otFetchRequest") && (n.otFetchRequest = o.api.OTFetchRequest.toObject(e.otFetchRequest, t), t.oneofs && (n.body = "otFetchRequest")), null != e.otFetchResponse && e.hasOwnProperty("otFetchResponse") && (n.otFetchResponse = o.api.OTFetchResponse.toObject(e.otFetchResponse, t), t.oneofs && (n.body = "otFetchResponse")), null != e.otTransformSelectionRequest && e.hasOwnProperty("otTransformSelectionRequest") && (n.otTransformSelectionRequest = o.api.OTTransformSelectionRequest.toObject(e.otTransformSelectionRequest, t), t.oneofs && (n.body = "otTransformSelectionRequest")), null != e.otTransformSelectionResponse && e.hasOwnProperty("otTransformSelectionResponse") && (n.otTransformSelectionResponse = o.api.OTTransformSelectionResponse.toObject(e.otTransformSelectionResponse, t), t.oneofs && (n.body = "otTransformSelectionResponse")), null != e.otLinkFileResponse && e.hasOwnProperty("otLinkFileResponse") && (n.otLinkFileResponse = o.api.OTLinkFileResponse.toObject(e.otLinkFileResponse, t), t.oneofs && (n.body = "otLinkFileResponse")), null != e.debug && e.hasOwnProperty("debug") && (n.debug = o.api.Debug.toObject(e.debug, t), t.oneofs && (n.body = "debug")), null != e.startVCR && e.hasOwnProperty("startVCR") && (n.startVCR = o.api.StartVCR.toObject(e.startVCR, t), t.oneofs && (n.body = "startVCR")), null != e.readVCR && e.hasOwnProperty("readVCR") && (n.readVCR = o.api.ReadVCR.toObject(e.readVCR, t), t.oneofs && (n.body = "readVCR")), null != e.VCRLog && e.hasOwnProperty("VCRLog") && (n.VCRLog = o.api.VCRLog.toObject(e.VCRLog, t), t.oneofs && (n.body = "VCRLog")), null != e.auth && e.hasOwnProperty("auth") && (n.auth = o.api.Auth.toObject(e.auth, t), t.oneofs && (n.body = "auth")), null != e.execInfo && e.hasOwnProperty("execInfo") && (n.execInfo = o.api.ExecInfo.toObject(e.execInfo, t), t.oneofs && (n.body = "execInfo")), null != e.flush && e.hasOwnProperty("flush") && (n.flush = o.api.Flush.toObject(e.flush, t), t.oneofs && (n.body = "flush")), null != e.subscribeFile && e.hasOwnProperty("subscribeFile") && (n.subscribeFile = o.api.SubscribeFile.toObject(e.subscribeFile, t), t.oneofs && (n.body = "subscribeFile")), null != e.fileEvent && e.hasOwnProperty("fileEvent") && (n.fileEvent = o.api.FileEvent.toObject(e.fileEvent, t), t.oneofs && (n.body = "fileEvent")), null != e.roster && e.hasOwnProperty("roster") && (n.roster = o.api.Roster.toObject(e.roster, t), t.oneofs && (n.body = "roster")), null != e.join && e.hasOwnProperty("join") && (n.join = o.api.User.toObject(e.join, t), t.oneofs && (n.body = "join")), null != e.part && e.hasOwnProperty("part") && (n.part = o.api.User.toObject(e.part, t), t.oneofs && (n.body = "part")), null != e.openFile && e.hasOwnProperty("openFile") && (n.openFile = o.api.OpenFile.toObject(e.openFile, t), t.oneofs && (n.body = "openFile")), null != e.fileOpened && e.hasOwnProperty("fileOpened") && (n.fileOpened = o.api.FileOpened.toObject(e.fileOpened, t), t.oneofs && (n.body = "fileOpened")), null != e.followUser && e.hasOwnProperty("followUser") && (n.followUser = o.api.FollowUser.toObject(e.followUser, t), t.oneofs && (n.body = "followUser")), null != e.updateSessionTimestamp && e.hasOwnProperty("updateSessionTimestamp") && (n.updateSessionTimestamp = o.api.UpdateSessionTimestamp.toObject(e.updateSessionTimestamp, t), t.oneofs && (n.body = "updateSessionTimestamp")), null != e.sessionTimestampUpdated && e.hasOwnProperty("sessionTimestampUpdated") && (n.sessionTimestampUpdated = o.api.SessionTimestampUpdated.toObject(e.sessionTimestampUpdated, t), t.oneofs && (n.body = "sessionTimestampUpdated")), null != e.unfollowUser && e.hasOwnProperty("unfollowUser") && (n.unfollowUser = o.api.UnfollowUser.toObject(e.unfollowUser, t), t.oneofs && (n.body = "unfollowUser")), null != e.exec && e.hasOwnProperty("exec") && (n.exec = o.api.Exec.toObject(e.exec, t), t.oneofs && (n.body = "exec")), null != e.packageSearch && e.hasOwnProperty("packageSearch") && (n.packageSearch = o.api.PackageSearch.toObject(e.packageSearch, t), t.oneofs && (n.body = "packageSearch")), null != e.packageSearchResp && e.hasOwnProperty("packageSearchResp") && (n.packageSearchResp = o.api.PackageSearchResp.toObject(e.packageSearchResp, t), t.oneofs && (n.body = "packageSearchResp")), null != e.packageInfo && e.hasOwnProperty("packageInfo") && (n.packageInfo = o.api.PackageInfo.toObject(e.packageInfo, t), t.oneofs && (n.body = "packageInfo")), null != e.packageInfoResp && e.hasOwnProperty("packageInfoResp") && (n.packageInfoResp = o.api.PackageInfoResp.toObject(e.packageInfoResp, t), t.oneofs && (n.body = "packageInfoResp")), null != e.packageAdd && e.hasOwnProperty("packageAdd") && (n.packageAdd = o.api.PackageAdd.toObject(e.packageAdd, t), t.oneofs && (n.body = "packageAdd")), null != e.packageRemove && e.hasOwnProperty("packageRemove") && (n.packageRemove = o.api.PackageRemove.toObject(e.packageRemove, t), t.oneofs && (n.body = "packageRemove")), null != e.packageInstall && e.hasOwnProperty("packageInstall") && (n.packageInstall = o.api.PackageInstall.toObject(e.packageInstall, t), t.oneofs && (n.body = "packageInstall")), null != e.packageListSpecfile && e.hasOwnProperty("packageListSpecfile") && (n.packageListSpecfile = o.api.PackageListSpecfile.toObject(e.packageListSpecfile, t), t.oneofs && (n.body = "packageListSpecfile")), null != e.packageListSpecfileResp && e.hasOwnProperty("packageListSpecfileResp") && (n.packageListSpecfileResp = o.api.PackageListSpecfileResp.toObject(e.packageListSpecfileResp, t), t.oneofs && (n.body = "packageListSpecfileResp")), null != e.packageCacheSave && e.hasOwnProperty("packageCacheSave") && (n.packageCacheSave = o.api.PackageCacheSave.toObject(e.packageCacheSave, t), t.oneofs && (n.body = "packageCacheSave")), null != e.chatMessage && e.hasOwnProperty("chatMessage") && (n.chatMessage = o.api.ChatMessage.toObject(e.chatMessage, t), t.oneofs && (n.body = "chatMessage")), null != e.chatTyping && e.hasOwnProperty("chatTyping") && (n.chatTyping = o.api.ChatTyping.toObject(e.chatTyping, t), t.oneofs && (n.body = "chatTyping")), null != e.chatScrollback && e.hasOwnProperty("chatScrollback") && (n.chatScrollback = o.api.ChatScrollback.toObject(e.chatScrollback, t), t.oneofs && (n.body = "chatScrollback")), null != e.transferStart && e.hasOwnProperty("transferStart") && (n.transferStart = o.api.TransferStart.toObject(e.transferStart, t), t.oneofs && (n.body = "transferStart")), null != e.transferChunk && e.hasOwnProperty("transferChunk") && (n.transferChunk = o.api.TransferChunk.toObject(e.transferChunk, t), t.oneofs && (n.body = "transferChunk")), null != e.transferComplete && e.hasOwnProperty("transferComplete") && (n.transferComplete = o.api.TransferComplete.toObject(e.transferComplete, t), t.oneofs && (n.body = "transferComplete")), null != e.transferCancel && e.hasOwnProperty("transferCancel") && (n.transferCancel = o.api.Transfer.toObject(e.transferCancel, t), t.oneofs && (n.body = "transferCancel")), null != e.transfer && e.hasOwnProperty("transfer") && (n.transfer = o.api.Transfer.toObject(e.transfer, t), t.oneofs && (n.body = "transfer")), null != e.fsSnapshot && e.hasOwnProperty("fsSnapshot") && (n.fsSnapshot = o.api.FSSnapshot.toObject(e.fsSnapshot, t), t.oneofs && (n.body = "fsSnapshot")), null != e.fsTakeLock && e.hasOwnProperty("fsTakeLock") && (n.fsTakeLock = o.api.FSLock.toObject(e.fsTakeLock, t), t.oneofs && (n.body = "fsTakeLock")), null != e.fsReleaseLock && e.hasOwnProperty("fsReleaseLock") && (n.fsReleaseLock = o.api.FSLock.toObject(e.fsReleaseLock, t), t.oneofs && (n.body = "fsReleaseLock")), null != e.hasCap && e.hasOwnProperty("hasCap") && (n.hasCap = e.hasCap, t.oneofs && (n.body = "hasCap")), null != e.pid1Config && e.hasOwnProperty("pid1Config") && (n.pid1Config = o.api.Pid1Config.toObject(e.pid1Config, t), t.oneofs && (n.body = "pid1Config")), null != e.startLSP && e.hasOwnProperty("startLSP") && (n.startLSP = o.api.StartLSP.toObject(e.startLSP, t), t.oneofs && (n.body = "startLSP")), null != e.metrics && e.hasOwnProperty("metrics") && (n.metrics = o.api.Metrics.toObject(e.metrics, t), t.oneofs && (n.body = "metrics")), null != e.bootStatus && e.hasOwnProperty("bootStatus") && (n.bootStatus = o.api.BootStatus.toObject(e.bootStatus, t), t.oneofs && (n.body = "bootStatus")), null != e.readMetaRequest && e.hasOwnProperty("readMetaRequest") && (n.readMetaRequest = o.api.ReadMetaRequest.toObject(e.readMetaRequest, t), t.oneofs && (n.body = "readMetaRequest")), null != e.writeMetaRequest && e.hasOwnProperty("writeMetaRequest") && (n.writeMetaRequest = o.api.WriteMetaRequest.toObject(e.writeMetaRequest, t), t.oneofs && (n.body = "writeMetaRequest")), null != e.appendMetaRequest && e.hasOwnProperty("appendMetaRequest") && (n.appendMetaRequest = o.api.AppendMetaRequest.toObject(e.appendMetaRequest, t), t.oneofs && (n.body = "appendMetaRequest")), null != e.audio && e.hasOwnProperty("audio") && (n.audio = o.api.Audio.toObject(e.audio, t), t.oneofs && (n.body = "audio")), null != e.pprofRequest && e.hasOwnProperty("pprofRequest") && (n.pprofRequest = o.api.PprofRequest.toObject(e.pprofRequest, t), t.oneofs && (n.body = "pprofRequest")), null != e.pprofResponse && e.hasOwnProperty("pprofResponse") && (n.pprofResponse = o.api.PprofResponse.toObject(e.pprofResponse, t), t.oneofs && (n.body = "pprofResponse")), null != e.audio2 && e.hasOwnProperty("audio2") && (n.audio2 = o.api.Audio2.toObject(e.audio2, t), t.oneofs && (n.body = "audio2")), null != e.PTYConfig && e.hasOwnProperty("PTYConfig") && (n.PTYConfig = o.api.PTYConfig.toObject(e.PTYConfig, t), t.oneofs && (n.body = "PTYConfig")), null != e.stat && e.hasOwnProperty("stat") && (n.stat = o.api.File.toObject(e.stat, t), t.oneofs && (n.body = "stat")), null != e.statRes && e.hasOwnProperty("statRes") && (n.statRes = o.api.StatResult.toObject(e.statRes, t), t.oneofs && (n.body = "statRes")), null != e.debugMain && e.hasOwnProperty("debugMain") && (n.debugMain = o.api.DebugMain.toObject(e.debugMain, t), t.oneofs && (n.body = "debugMain")), null != e.debugState && e.hasOwnProperty("debugState") && (n.debugState = o.api.DebugState.toObject(e.debugState, t), t.oneofs && (n.body = "debugState")), null != e.debugMainReply && e.hasOwnProperty("debugMainReply") && (n.debugMainReply = o.api.DebugMainReply.toObject(e.debugMainReply, t), t.oneofs && (n.body = "debugMainReply")), null != e.debugInput && e.hasOwnProperty("debugInput") && (n.debugInput = o.api.DebugInput.toObject(e.debugInput, t), t.oneofs && (n.body = "debugInput")), null != e.debugOutput && e.hasOwnProperty("debugOutput") && (n.debugOutput = o.api.DebugOutput.toObject(e.debugOutput, t), t.oneofs && (n.body = "debugOutput")), null != e.debugStop && e.hasOwnProperty("debugStop") && (n.debugStop = o.api.DebugStop.toObject(e.debugStop, t), t.oneofs && (n.body = "debugStop")), null != e.debugLeave && e.hasOwnProperty("debugLeave") && (n.debugLeave = o.api.DebugLeave.toObject(e.debugLeave, t), t.oneofs && (n.body = "debugLeave")), null != e.debugSessions && e.hasOwnProperty("debugSessions") && (n.debugSessions = o.api.DebugSessions.toObject(e.debugSessions, t), t.oneofs && (n.body = "debugSessions")), null != e.dotReplitGetRequest && e.hasOwnProperty("dotReplitGetRequest") && (n.dotReplitGetRequest = o.api.DotReplitGetRequest.toObject(e.dotReplitGetRequest, t), t.oneofs && (n.body = "dotReplitGetRequest")), null != e.dotReplitGetResponse && e.hasOwnProperty("dotReplitGetResponse") && (n.dotReplitGetResponse = o.api.DotReplitGetResponse.toObject(e.dotReplitGetResponse, t), t.oneofs && (n.body = "dotReplitGetResponse")), null != e.debugAddBreakpointRequest && e.hasOwnProperty("debugAddBreakpointRequest") && (n.debugAddBreakpointRequest = o.api.DebugAddBreakpointRequest.toObject(e.debugAddBreakpointRequest, t), t.oneofs && (n.body = "debugAddBreakpointRequest")), null != e.debugRemoveBreakpointRequest && e.hasOwnProperty("debugRemoveBreakpointRequest") && (n.debugRemoveBreakpointRequest = o.api.DebugRemoveBreakpointRequest.toObject(e.debugRemoveBreakpointRequest, t), t.oneofs && (n.body = "debugRemoveBreakpointRequest")), null != e.debugBreakpointEvent && e.hasOwnProperty("debugBreakpointEvent") && (n.debugBreakpointEvent = o.api.DebugBreakpointEvent.toObject(e.debugBreakpointEvent, t), t.oneofs && (n.body = "debugBreakpointEvent")), null != e.readMetaResponse && e.hasOwnProperty("readMetaResponse") && (n.readMetaResponse = o.api.ReadMetaResponse.toObject(e.readMetaResponse, t), t.oneofs && (n.body = "readMetaResponse")), null != e.writeMetaResponse && e.hasOwnProperty("writeMetaResponse") && (n.writeMetaResponse = o.api.WriteMetaResponse.toObject(e.writeMetaResponse, t), t.oneofs && (n.body = "writeMetaResponse")), null != e.appendMetaResponse && e.hasOwnProperty("appendMetaResponse") && (n.appendMetaResponse = o.api.AppendMetaResponse.toObject(e.appendMetaResponse, t), t.oneofs && (n.body = "appendMetaResponse")), null != e.debugUpdateBreakpointRequest && e.hasOwnProperty("debugUpdateBreakpointRequest") && (n.debugUpdateBreakpointRequest = o.api.DebugUpdateBreakpointRequest.toObject(e.debugUpdateBreakpointRequest, t), t.oneofs && (n.body = "debugUpdateBreakpointRequest")), null != e.ref && e.hasOwnProperty("ref") && (n.ref = e.ref), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.StartLSP = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.language = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.language && Object.hasOwnProperty.call(e, "language") && t.uint32(10).string(e.language), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.StartLSP; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.language = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.language && e.hasOwnProperty("language") && !r.isString(e.language) ? "language: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.StartLSP) return e;
                            var t = new o.api.StartLSP;
                            return null != e.language && (t.language = String(e.language)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.language = ""), null != e.language && e.hasOwnProperty("language") && (n.language = e.language), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.Audio = function() {
                        function i(e) {
                            if (this.data = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.data = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.data && e.data.length) {
                                t.uint32(10).fork();
                                for (var r = 0; r < e.data.length; ++r) t.int32(e.data[r]);
                                t.ldelim()
                            }
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Audio; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        if (i.data && i.data.length || (i.data = []), 2 === (7 & a))
                                            for (var s = e.uint32() + e.pos; e.pos < s;) i.data.push(e.int32());
                                        else i.data.push(e.int32());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.data && e.hasOwnProperty("data")) {
                                if (!Array.isArray(e.data)) return "data: array expected";
                                for (var t = 0; t < e.data.length; ++t)
                                    if (!r.isInteger(e.data[t])) return "data: integer[] expected"
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Audio) return e;
                            var t = new o.api.Audio;
                            if (e.data) {
                                if (!Array.isArray(e.data)) throw TypeError(".api.Audio.data: array expected");
                                t.data = [];
                                for (var n = 0; n < e.data.length; ++n) t.data[n] = 0 | e.data[n]
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.data = []), e.data && e.data.length) {
                                n.data = [];
                                for (var r = 0; r < e.data.length; ++r) n.data[r] = e.data[r]
                            }
                            return n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.Audio2 = function() {
                        function i(e) {
                            if (this.data = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.data = r.emptyArray, i.prototype.samples = r.Long ? r.Long.fromBits(0, 0, !1) : 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.data && e.data.length) {
                                t.uint32(10).fork();
                                for (var r = 0; r < e.data.length; ++r) t.sint32(e.data[r]);
                                t.ldelim()
                            }
                            return null != e.samples && Object.hasOwnProperty.call(e, "samples") && t.uint32(16).int64(e.samples), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Audio2; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        if (i.data && i.data.length || (i.data = []), 2 === (7 & a))
                                            for (var s = e.uint32() + e.pos; e.pos < s;) i.data.push(e.sint32());
                                        else i.data.push(e.sint32());
                                        break;
                                    case 2:
                                        i.samples = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.data && e.hasOwnProperty("data")) {
                                if (!Array.isArray(e.data)) return "data: array expected";
                                for (var t = 0; t < e.data.length; ++t)
                                    if (!r.isInteger(e.data[t])) return "data: integer[] expected"
                            }
                            return null == e.samples || !e.hasOwnProperty("samples") || r.isInteger(e.samples) || e.samples && r.isInteger(e.samples.low) && r.isInteger(e.samples.high) ? null : "samples: integer|Long expected"
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Audio2) return e;
                            var t = new o.api.Audio2;
                            if (e.data) {
                                if (!Array.isArray(e.data)) throw TypeError(".api.Audio2.data: array expected");
                                t.data = [];
                                for (var n = 0; n < e.data.length; ++n) t.data[n] = 0 | e.data[n]
                            }
                            return null != e.samples && (r.Long ? (t.samples = r.Long.fromValue(e.samples)).unsigned = !1 : "string" === typeof e.samples ? t.samples = parseInt(e.samples, 10) : "number" === typeof e.samples ? t.samples = e.samples : "object" === typeof e.samples && (t.samples = new r.LongBits(e.samples.low >>> 0, e.samples.high >>> 0).toNumber())), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.data = []), t.defaults)
                                if (r.Long) {
                                    var o = new r.Long(0, 0, !1);
                                    n.samples = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                                } else n.samples = t.longs === String ? "0" : 0;
                            if (e.data && e.data.length) {
                                n.data = [];
                                for (var i = 0; i < e.data.length; ++i) n.data[i] = e.data[i]
                            }
                            return null != e.samples && e.hasOwnProperty("samples") && ("number" === typeof e.samples ? n.samples = t.longs === String ? String(e.samples) : e.samples : n.samples = t.longs === String ? r.Long.prototype.toString.call(e.samples) : t.longs === Number ? new r.LongBits(e.samples.low >>> 0, e.samples.high >>> 0).toNumber() : e.samples), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.Preconditions = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.generation = r.Long ? r.Long.fromBits(0, 0, !1) : 0, i.prototype.metageneration = r.Long ? r.Long.fromBits(0, 0, !1) : 0, i.prototype.doesNotExist = !1, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.generation && Object.hasOwnProperty.call(e, "generation") && t.uint32(8).int64(e.generation), null != e.metageneration && Object.hasOwnProperty.call(e, "metageneration") && t.uint32(16).int64(e.metageneration), null != e.doesNotExist && Object.hasOwnProperty.call(e, "doesNotExist") && t.uint32(24).bool(e.doesNotExist), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Preconditions; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.generation = e.int64();
                                        break;
                                    case 2:
                                        i.metageneration = e.int64();
                                        break;
                                    case 3:
                                        i.doesNotExist = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null == e.generation || !e.hasOwnProperty("generation") || r.isInteger(e.generation) || e.generation && r.isInteger(e.generation.low) && r.isInteger(e.generation.high) ? null == e.metageneration || !e.hasOwnProperty("metageneration") || r.isInteger(e.metageneration) || e.metageneration && r.isInteger(e.metageneration.low) && r.isInteger(e.metageneration.high) ? null != e.doesNotExist && e.hasOwnProperty("doesNotExist") && "boolean" !== typeof e.doesNotExist ? "doesNotExist: boolean expected" : null : "metageneration: integer|Long expected" : "generation: integer|Long expected"
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Preconditions) return e;
                            var t = new o.api.Preconditions;
                            return null != e.generation && (r.Long ? (t.generation = r.Long.fromValue(e.generation)).unsigned = !1 : "string" === typeof e.generation ? t.generation = parseInt(e.generation, 10) : "number" === typeof e.generation ? t.generation = e.generation : "object" === typeof e.generation && (t.generation = new r.LongBits(e.generation.low >>> 0, e.generation.high >>> 0).toNumber())), null != e.metageneration && (r.Long ? (t.metageneration = r.Long.fromValue(e.metageneration)).unsigned = !1 : "string" === typeof e.metageneration ? t.metageneration = parseInt(e.metageneration, 10) : "number" === typeof e.metageneration ? t.metageneration = e.metageneration : "object" === typeof e.metageneration && (t.metageneration = new r.LongBits(e.metageneration.low >>> 0, e.metageneration.high >>> 0).toNumber())), null != e.doesNotExist && (t.doesNotExist = Boolean(e.doesNotExist)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if (t.defaults) {
                                if (r.Long) {
                                    var o = new r.Long(0, 0, !1);
                                    n.generation = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                                } else n.generation = t.longs === String ? "0" : 0;
                                r.Long ? (o = new r.Long(0, 0, !1), n.metageneration = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : n.metageneration = t.longs === String ? "0" : 0, n.doesNotExist = !1
                            }
                            return null != e.generation && e.hasOwnProperty("generation") && ("number" === typeof e.generation ? n.generation = t.longs === String ? String(e.generation) : e.generation : n.generation = t.longs === String ? r.Long.prototype.toString.call(e.generation) : t.longs === Number ? new r.LongBits(e.generation.low >>> 0, e.generation.high >>> 0).toNumber() : e.generation), null != e.metageneration && e.hasOwnProperty("metageneration") && ("number" === typeof e.metageneration ? n.metageneration = t.longs === String ? String(e.metageneration) : e.metageneration : n.metageneration = t.longs === String ? r.Long.prototype.toString.call(e.metageneration) : t.longs === Number ? new r.LongBits(e.metageneration.low >>> 0, e.metageneration.high >>> 0).toNumber() : e.metageneration), null != e.doesNotExist && e.hasOwnProperty("doesNotExist") && (n.doesNotExist = e.doesNotExist), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.ReadMetaRequest = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.key = "", i.prototype.exists = !1, i.prototype.data = r.newBuffer([]), i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.key && Object.hasOwnProperty.call(e, "key") && t.uint32(10).string(e.key), null != e.exists && Object.hasOwnProperty.call(e, "exists") && t.uint32(16).bool(e.exists), null != e.data && Object.hasOwnProperty.call(e, "data") && t.uint32(26).bytes(e.data), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.ReadMetaRequest; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.key = e.string();
                                        break;
                                    case 2:
                                        i.exists = e.bool();
                                        break;
                                    case 3:
                                        i.data = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.key && e.hasOwnProperty("key") && !r.isString(e.key) ? "key: string expected" : null != e.exists && e.hasOwnProperty("exists") && "boolean" !== typeof e.exists ? "exists: boolean expected" : null != e.data && e.hasOwnProperty("data") && !(e.data && "number" === typeof e.data.length || r.isString(e.data)) ? "data: buffer expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.ReadMetaRequest) return e;
                            var t = new o.api.ReadMetaRequest;
                            return null != e.key && (t.key = String(e.key)), null != e.exists && (t.exists = Boolean(e.exists)), null != e.data && ("string" === typeof e.data ? r.base64.decode(e.data, t.data = r.newBuffer(r.base64.length(e.data)), 0) : e.data.length && (t.data = e.data)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.key = "", n.exists = !1, t.bytes === String ? n.data = "" : (n.data = [], t.bytes !== Array && (n.data = r.newBuffer(n.data)))), null != e.key && e.hasOwnProperty("key") && (n.key = e.key), null != e.exists && e.hasOwnProperty("exists") && (n.exists = e.exists), null != e.data && e.hasOwnProperty("data") && (n.data = t.bytes === String ? r.base64.encode(e.data, 0, e.data.length) : t.bytes === Array ? Array.prototype.slice.call(e.data) : e.data), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.ReadMetaResponse = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.key = "", i.prototype.exists = !1, i.prototype.data = r.newBuffer([]), i.prototype.generation = r.Long ? r.Long.fromBits(0, 0, !1) : 0, i.prototype.metageneration = r.Long ? r.Long.fromBits(0, 0, !1) : 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.key && Object.hasOwnProperty.call(e, "key") && t.uint32(10).string(e.key), null != e.exists && Object.hasOwnProperty.call(e, "exists") && t.uint32(16).bool(e.exists), null != e.data && Object.hasOwnProperty.call(e, "data") && t.uint32(26).bytes(e.data), null != e.generation && Object.hasOwnProperty.call(e, "generation") && t.uint32(32).int64(e.generation), null != e.metageneration && Object.hasOwnProperty.call(e, "metageneration") && t.uint32(40).int64(e.metageneration), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.ReadMetaResponse; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.key = e.string();
                                        break;
                                    case 2:
                                        i.exists = e.bool();
                                        break;
                                    case 3:
                                        i.data = e.bytes();
                                        break;
                                    case 4:
                                        i.generation = e.int64();
                                        break;
                                    case 5:
                                        i.metageneration = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.key && e.hasOwnProperty("key") && !r.isString(e.key) ? "key: string expected" : null != e.exists && e.hasOwnProperty("exists") && "boolean" !== typeof e.exists ? "exists: boolean expected" : null != e.data && e.hasOwnProperty("data") && !(e.data && "number" === typeof e.data.length || r.isString(e.data)) ? "data: buffer expected" : null == e.generation || !e.hasOwnProperty("generation") || r.isInteger(e.generation) || e.generation && r.isInteger(e.generation.low) && r.isInteger(e.generation.high) ? null == e.metageneration || !e.hasOwnProperty("metageneration") || r.isInteger(e.metageneration) || e.metageneration && r.isInteger(e.metageneration.low) && r.isInteger(e.metageneration.high) ? null : "metageneration: integer|Long expected" : "generation: integer|Long expected"
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.ReadMetaResponse) return e;
                            var t = new o.api.ReadMetaResponse;
                            return null != e.key && (t.key = String(e.key)), null != e.exists && (t.exists = Boolean(e.exists)), null != e.data && ("string" === typeof e.data ? r.base64.decode(e.data, t.data = r.newBuffer(r.base64.length(e.data)), 0) : e.data.length && (t.data = e.data)), null != e.generation && (r.Long ? (t.generation = r.Long.fromValue(e.generation)).unsigned = !1 : "string" === typeof e.generation ? t.generation = parseInt(e.generation, 10) : "number" === typeof e.generation ? t.generation = e.generation : "object" === typeof e.generation && (t.generation = new r.LongBits(e.generation.low >>> 0, e.generation.high >>> 0).toNumber())), null != e.metageneration && (r.Long ? (t.metageneration = r.Long.fromValue(e.metageneration)).unsigned = !1 : "string" === typeof e.metageneration ? t.metageneration = parseInt(e.metageneration, 10) : "number" === typeof e.metageneration ? t.metageneration = e.metageneration : "object" === typeof e.metageneration && (t.metageneration = new r.LongBits(e.metageneration.low >>> 0, e.metageneration.high >>> 0).toNumber())), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if (t.defaults) {
                                if (n.key = "", n.exists = !1, t.bytes === String ? n.data = "" : (n.data = [], t.bytes !== Array && (n.data = r.newBuffer(n.data))), r.Long) {
                                    var o = new r.Long(0, 0, !1);
                                    n.generation = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                                } else n.generation = t.longs === String ? "0" : 0;
                                r.Long ? (o = new r.Long(0, 0, !1), n.metageneration = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : n.metageneration = t.longs === String ? "0" : 0
                            }
                            return null != e.key && e.hasOwnProperty("key") && (n.key = e.key), null != e.exists && e.hasOwnProperty("exists") && (n.exists = e.exists), null != e.data && e.hasOwnProperty("data") && (n.data = t.bytes === String ? r.base64.encode(e.data, 0, e.data.length) : t.bytes === Array ? Array.prototype.slice.call(e.data) : e.data), null != e.generation && e.hasOwnProperty("generation") && ("number" === typeof e.generation ? n.generation = t.longs === String ? String(e.generation) : e.generation : n.generation = t.longs === String ? r.Long.prototype.toString.call(e.generation) : t.longs === Number ? new r.LongBits(e.generation.low >>> 0, e.generation.high >>> 0).toNumber() : e.generation), null != e.metageneration && e.hasOwnProperty("metageneration") && ("number" === typeof e.metageneration ? n.metageneration = t.longs === String ? String(e.metageneration) : e.metageneration : n.metageneration = t.longs === String ? r.Long.prototype.toString.call(e.metageneration) : t.longs === Number ? new r.LongBits(e.metageneration.low >>> 0, e.metageneration.high >>> 0).toNumber() : e.metageneration), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.WriteMetaRequest = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.key = "", i.prototype.data = r.newBuffer([]), i.prototype.preconditions = null, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.key && Object.hasOwnProperty.call(e, "key") && t.uint32(10).string(e.key), null != e.data && Object.hasOwnProperty.call(e, "data") && t.uint32(18).bytes(e.data), null != e.preconditions && Object.hasOwnProperty.call(e, "preconditions") && o.api.Preconditions.encode(e.preconditions, t.uint32(42).fork()).ldelim(), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.WriteMetaRequest; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.key = e.string();
                                        break;
                                    case 2:
                                        i.data = e.bytes();
                                        break;
                                    case 5:
                                        i.preconditions = o.api.Preconditions.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.key && e.hasOwnProperty("key") && !r.isString(e.key)) return "key: string expected";
                            if (null != e.data && e.hasOwnProperty("data") && !(e.data && "number" === typeof e.data.length || r.isString(e.data))) return "data: buffer expected";
                            if (null != e.preconditions && e.hasOwnProperty("preconditions")) {
                                var t = o.api.Preconditions.verify(e.preconditions);
                                if (t) return "preconditions." + t
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.WriteMetaRequest) return e;
                            var t = new o.api.WriteMetaRequest;
                            if (null != e.key && (t.key = String(e.key)), null != e.data && ("string" === typeof e.data ? r.base64.decode(e.data, t.data = r.newBuffer(r.base64.length(e.data)), 0) : e.data.length && (t.data = e.data)), null != e.preconditions) {
                                if ("object" !== typeof e.preconditions) throw TypeError(".api.WriteMetaRequest.preconditions: object expected");
                                t.preconditions = o.api.Preconditions.fromObject(e.preconditions)
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.key = "", t.bytes === String ? n.data = "" : (n.data = [], t.bytes !== Array && (n.data = r.newBuffer(n.data))), n.preconditions = null), null != e.key && e.hasOwnProperty("key") && (n.key = e.key), null != e.data && e.hasOwnProperty("data") && (n.data = t.bytes === String ? r.base64.encode(e.data, 0, e.data.length) : t.bytes === Array ? Array.prototype.slice.call(e.data) : e.data), null != e.preconditions && e.hasOwnProperty("preconditions") && (n.preconditions = o.api.Preconditions.toObject(e.preconditions, t)), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.WriteMetaResponse = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.generation = r.Long ? r.Long.fromBits(0, 0, !1) : 0, i.prototype.metageneration = r.Long ? r.Long.fromBits(0, 0, !1) : 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.generation && Object.hasOwnProperty.call(e, "generation") && t.uint32(8).int64(e.generation), null != e.metageneration && Object.hasOwnProperty.call(e, "metageneration") && t.uint32(16).int64(e.metageneration), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.WriteMetaResponse; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.generation = e.int64();
                                        break;
                                    case 2:
                                        i.metageneration = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null == e.generation || !e.hasOwnProperty("generation") || r.isInteger(e.generation) || e.generation && r.isInteger(e.generation.low) && r.isInteger(e.generation.high) ? null == e.metageneration || !e.hasOwnProperty("metageneration") || r.isInteger(e.metageneration) || e.metageneration && r.isInteger(e.metageneration.low) && r.isInteger(e.metageneration.high) ? null : "metageneration: integer|Long expected" : "generation: integer|Long expected"
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.WriteMetaResponse) return e;
                            var t = new o.api.WriteMetaResponse;
                            return null != e.generation && (r.Long ? (t.generation = r.Long.fromValue(e.generation)).unsigned = !1 : "string" === typeof e.generation ? t.generation = parseInt(e.generation, 10) : "number" === typeof e.generation ? t.generation = e.generation : "object" === typeof e.generation && (t.generation = new r.LongBits(e.generation.low >>> 0, e.generation.high >>> 0).toNumber())), null != e.metageneration && (r.Long ? (t.metageneration = r.Long.fromValue(e.metageneration)).unsigned = !1 : "string" === typeof e.metageneration ? t.metageneration = parseInt(e.metageneration, 10) : "number" === typeof e.metageneration ? t.metageneration = e.metageneration : "object" === typeof e.metageneration && (t.metageneration = new r.LongBits(e.metageneration.low >>> 0, e.metageneration.high >>> 0).toNumber())), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if (t.defaults) {
                                if (r.Long) {
                                    var o = new r.Long(0, 0, !1);
                                    n.generation = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                                } else n.generation = t.longs === String ? "0" : 0;
                                r.Long ? (o = new r.Long(0, 0, !1), n.metageneration = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : n.metageneration = t.longs === String ? "0" : 0
                            }
                            return null != e.generation && e.hasOwnProperty("generation") && ("number" === typeof e.generation ? n.generation = t.longs === String ? String(e.generation) : e.generation : n.generation = t.longs === String ? r.Long.prototype.toString.call(e.generation) : t.longs === Number ? new r.LongBits(e.generation.low >>> 0, e.generation.high >>> 0).toNumber() : e.generation), null != e.metageneration && e.hasOwnProperty("metageneration") && ("number" === typeof e.metageneration ? n.metageneration = t.longs === String ? String(e.metageneration) : e.metageneration : n.metageneration = t.longs === String ? r.Long.prototype.toString.call(e.metageneration) : t.longs === Number ? new r.LongBits(e.metageneration.low >>> 0, e.metageneration.high >>> 0).toNumber() : e.metageneration), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.AppendMetaRequest = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.key = "", i.prototype.data = r.newBuffer([]), i.prototype.preconditions = null, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.key && Object.hasOwnProperty.call(e, "key") && t.uint32(10).string(e.key), null != e.data && Object.hasOwnProperty.call(e, "data") && t.uint32(18).bytes(e.data), null != e.preconditions && Object.hasOwnProperty.call(e, "preconditions") && o.api.Preconditions.encode(e.preconditions, t.uint32(42).fork()).ldelim(), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.AppendMetaRequest; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.key = e.string();
                                        break;
                                    case 2:
                                        i.data = e.bytes();
                                        break;
                                    case 5:
                                        i.preconditions = o.api.Preconditions.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.key && e.hasOwnProperty("key") && !r.isString(e.key)) return "key: string expected";
                            if (null != e.data && e.hasOwnProperty("data") && !(e.data && "number" === typeof e.data.length || r.isString(e.data))) return "data: buffer expected";
                            if (null != e.preconditions && e.hasOwnProperty("preconditions")) {
                                var t = o.api.Preconditions.verify(e.preconditions);
                                if (t) return "preconditions." + t
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.AppendMetaRequest) return e;
                            var t = new o.api.AppendMetaRequest;
                            if (null != e.key && (t.key = String(e.key)), null != e.data && ("string" === typeof e.data ? r.base64.decode(e.data, t.data = r.newBuffer(r.base64.length(e.data)), 0) : e.data.length && (t.data = e.data)), null != e.preconditions) {
                                if ("object" !== typeof e.preconditions) throw TypeError(".api.AppendMetaRequest.preconditions: object expected");
                                t.preconditions = o.api.Preconditions.fromObject(e.preconditions)
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.key = "", t.bytes === String ? n.data = "" : (n.data = [], t.bytes !== Array && (n.data = r.newBuffer(n.data))), n.preconditions = null), null != e.key && e.hasOwnProperty("key") && (n.key = e.key), null != e.data && e.hasOwnProperty("data") && (n.data = t.bytes === String ? r.base64.encode(e.data, 0, e.data.length) : t.bytes === Array ? Array.prototype.slice.call(e.data) : e.data), null != e.preconditions && e.hasOwnProperty("preconditions") && (n.preconditions = o.api.Preconditions.toObject(e.preconditions, t)), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.AppendMetaResponse = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.generation = r.Long ? r.Long.fromBits(0, 0, !1) : 0, i.prototype.metageneration = r.Long ? r.Long.fromBits(0, 0, !1) : 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.generation && Object.hasOwnProperty.call(e, "generation") && t.uint32(8).int64(e.generation), null != e.metageneration && Object.hasOwnProperty.call(e, "metageneration") && t.uint32(16).int64(e.metageneration), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.AppendMetaResponse; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.generation = e.int64();
                                        break;
                                    case 2:
                                        i.metageneration = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null == e.generation || !e.hasOwnProperty("generation") || r.isInteger(e.generation) || e.generation && r.isInteger(e.generation.low) && r.isInteger(e.generation.high) ? null == e.metageneration || !e.hasOwnProperty("metageneration") || r.isInteger(e.metageneration) || e.metageneration && r.isInteger(e.metageneration.low) && r.isInteger(e.metageneration.high) ? null : "metageneration: integer|Long expected" : "generation: integer|Long expected"
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.AppendMetaResponse) return e;
                            var t = new o.api.AppendMetaResponse;
                            return null != e.generation && (r.Long ? (t.generation = r.Long.fromValue(e.generation)).unsigned = !1 : "string" === typeof e.generation ? t.generation = parseInt(e.generation, 10) : "number" === typeof e.generation ? t.generation = e.generation : "object" === typeof e.generation && (t.generation = new r.LongBits(e.generation.low >>> 0, e.generation.high >>> 0).toNumber())), null != e.metageneration && (r.Long ? (t.metageneration = r.Long.fromValue(e.metageneration)).unsigned = !1 : "string" === typeof e.metageneration ? t.metageneration = parseInt(e.metageneration, 10) : "number" === typeof e.metageneration ? t.metageneration = e.metageneration : "object" === typeof e.metageneration && (t.metageneration = new r.LongBits(e.metageneration.low >>> 0, e.metageneration.high >>> 0).toNumber())), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if (t.defaults) {
                                if (r.Long) {
                                    var o = new r.Long(0, 0, !1);
                                    n.generation = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                                } else n.generation = t.longs === String ? "0" : 0;
                                r.Long ? (o = new r.Long(0, 0, !1), n.metageneration = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : n.metageneration = t.longs === String ? "0" : 0
                            }
                            return null != e.generation && e.hasOwnProperty("generation") && ("number" === typeof e.generation ? n.generation = t.longs === String ? String(e.generation) : e.generation : n.generation = t.longs === String ? r.Long.prototype.toString.call(e.generation) : t.longs === Number ? new r.LongBits(e.generation.low >>> 0, e.generation.high >>> 0).toNumber() : e.generation), null != e.metageneration && e.hasOwnProperty("metageneration") && ("number" === typeof e.metageneration ? n.metageneration = t.longs === String ? String(e.metageneration) : e.metageneration : n.metageneration = t.longs === String ? r.Long.prototype.toString.call(e.metageneration) : t.longs === Number ? new r.LongBits(e.metageneration.low >>> 0, e.metageneration.high >>> 0).toNumber() : e.metageneration), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.BootStatus = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.stage = 0, i.prototype.progress = 0, i.prototype.total = 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.stage && Object.hasOwnProperty.call(e, "stage") && t.uint32(8).int32(e.stage), null != e.progress && Object.hasOwnProperty.call(e, "progress") && t.uint32(16).uint32(e.progress), null != e.total && Object.hasOwnProperty.call(e, "total") && t.uint32(24).uint32(e.total), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.BootStatus; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.stage = e.int32();
                                        break;
                                    case 2:
                                        i.progress = e.uint32();
                                        break;
                                    case 3:
                                        i.total = e.uint32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.stage && e.hasOwnProperty("stage")) switch (e.stage) {
                                default: return "stage: enum value expected";
                                case 0:
                                        case 3:
                                        case 4:
                                        case 5:
                                        case 6:
                                        case 7:
                                        case 8:
                            }
                            return null != e.progress && e.hasOwnProperty("progress") && !r.isInteger(e.progress) ? "progress: integer expected" : null != e.total && e.hasOwnProperty("total") && !r.isInteger(e.total) ? "total: integer expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.BootStatus) return e;
                            var t = new o.api.BootStatus;
                            switch (e.stage) {
                                case "HANDSHAKE":
                                case 0:
                                    t.stage = 0;
                                    break;
                                case "ACQUIRING":
                                case 3:
                                    t.stage = 3;
                                    break;
                                case "COMPLETE":
                                case 4:
                                    t.stage = 4;
                                    break;
                                case "PROXY":
                                case 5:
                                    t.stage = 5;
                                    break;
                                case "PULL_FILES":
                                case 6:
                                    t.stage = 6;
                                    break;
                                case "LOAD_BLOCK":
                                case 7:
                                    t.stage = 7;
                                    break;
                                case "RETRY":
                                case 8:
                                    t.stage = 8
                            }
                            return null != e.progress && (t.progress = e.progress >>> 0), null != e.total && (t.total = e.total >>> 0), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.stage = t.enums === String ? "HANDSHAKE" : 0, n.progress = 0, n.total = 0), null != e.stage && e.hasOwnProperty("stage") && (n.stage = t.enums === String ? o.api.BootStatus.Stage[e.stage] : e.stage), null != e.progress && e.hasOwnProperty("progress") && (n.progress = e.progress), null != e.total && e.hasOwnProperty("total") && (n.total = e.total), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i.Stage = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "HANDSHAKE"] = 0, t[e[3] = "ACQUIRING"] = 3, t[e[4] = "COMPLETE"] = 4, t[e[5] = "PROXY"] = 5, t[e[6] = "PULL_FILES"] = 6, t[e[7] = "LOAD_BLOCK"] = 7, t[e[8] = "RETRY"] = 8, t
                        }(), i
                    }(), i.Pid1Config = function() {
                        function i(e) {
                            if (this.env = {}, e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.cwd = "", i.prototype.language = "", i.prototype.env = r.emptyObject, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.cwd && Object.hasOwnProperty.call(e, "cwd") && t.uint32(10).string(e.cwd), null != e.language && Object.hasOwnProperty.call(e, "language") && t.uint32(18).string(e.language), null != e.env && Object.hasOwnProperty.call(e, "env"))
                                for (var r = Object.keys(e.env), o = 0; o < r.length; ++o) t.uint32(26).fork().uint32(10).string(r[o]).uint32(18).string(e.env[r[o]]).ldelim();
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var i, a, s = void 0 === n ? e.len : e.pos + n, l = new o.api.Pid1Config; e.pos < s;) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                    case 1:
                                        l.cwd = e.string();
                                        break;
                                    case 2:
                                        l.language = e.string();
                                        break;
                                    case 3:
                                        l.env === r.emptyObject && (l.env = {});
                                        var c = e.uint32() + e.pos;
                                        for (i = "", a = ""; e.pos < c;) {
                                            var p = e.uint32();
                                            switch (p >>> 3) {
                                                case 1:
                                                    i = e.string();
                                                    break;
                                                case 2:
                                                    a = e.string();
                                                    break;
                                                default:
                                                    e.skipType(7 & p)
                                            }
                                        }
                                        l.env[i] = a;
                                        break;
                                    default:
                                        e.skipType(7 & u)
                                }
                            }
                            return l
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.cwd && e.hasOwnProperty("cwd") && !r.isString(e.cwd)) return "cwd: string expected";
                            if (null != e.language && e.hasOwnProperty("language") && !r.isString(e.language)) return "language: string expected";
                            if (null != e.env && e.hasOwnProperty("env")) {
                                if (!r.isObject(e.env)) return "env: object expected";
                                for (var t = Object.keys(e.env), n = 0; n < t.length; ++n)
                                    if (!r.isString(e.env[t[n]])) return "env: string{k:string} expected"
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Pid1Config) return e;
                            var t = new o.api.Pid1Config;
                            if (null != e.cwd && (t.cwd = String(e.cwd)), null != e.language && (t.language = String(e.language)), e.env) {
                                if ("object" !== typeof e.env) throw TypeError(".api.Pid1Config.env: object expected");
                                t.env = {};
                                for (var n = Object.keys(e.env), r = 0; r < n.length; ++r) t.env[n[r]] = String(e.env[n[r]])
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n, r = {};
                            if ((t.objects || t.defaults) && (r.env = {}), t.defaults && (r.cwd = "", r.language = ""), null != e.cwd && e.hasOwnProperty("cwd") && (r.cwd = e.cwd), null != e.language && e.hasOwnProperty("language") && (r.language = e.language), e.env && (n = Object.keys(e.env)).length) {
                                r.env = {};
                                for (var o = 0; o < n.length; ++o) r.env[n[o]] = e.env[n[o]]
                            }
                            return r
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.FSLock = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.name = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(10).string(e.name), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.FSLock; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.name = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.name && e.hasOwnProperty("name") && !r.isString(e.name) ? "name: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.FSLock) return e;
                            var t = new o.api.FSLock;
                            return null != e.name && (t.name = String(e.name)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.name = ""), null != e.name && e.hasOwnProperty("name") && (n.name = e.name), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.FSSnapshot = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.FSSnapshot; e.pos < r;) {
                                var a = e.uint32();
                                e.skipType(7 & a)
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null
                        }, r.fromObject = function(e) {
                            return e instanceof o.api.FSSnapshot ? e : new o.api.FSSnapshot
                        }, r.toObject = function() {
                            return {}
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.SubscribeFile = function() {
                        function i(e) {
                            if (this.files = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.files = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.files && e.files.length)
                                for (var r = 0; r < e.files.length; ++r) o.api.File.encode(e.files[r], t.uint32(10).fork()).ldelim();
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.SubscribeFile; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.files && i.files.length || (i.files = []), i.files.push(o.api.File.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.files && e.hasOwnProperty("files")) {
                                if (!Array.isArray(e.files)) return "files: array expected";
                                for (var t = 0; t < e.files.length; ++t) {
                                    var n = o.api.File.verify(e.files[t]);
                                    if (n) return "files." + n
                                }
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.SubscribeFile) return e;
                            var t = new o.api.SubscribeFile;
                            if (e.files) {
                                if (!Array.isArray(e.files)) throw TypeError(".api.SubscribeFile.files: array expected");
                                t.files = [];
                                for (var n = 0; n < e.files.length; ++n) {
                                    if ("object" !== typeof e.files[n]) throw TypeError(".api.SubscribeFile.files: object expected");
                                    t.files[n] = o.api.File.fromObject(e.files[n])
                                }
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.files = []), e.files && e.files.length) {
                                n.files = [];
                                for (var r = 0; r < e.files.length; ++r) n.files[r] = o.api.File.toObject(e.files[r], t)
                            }
                            return n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.FileEvent = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.file = null, r.prototype.dest = null, r.prototype.op = 0, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.file && Object.hasOwnProperty.call(e, "file") && o.api.File.encode(e.file, t.uint32(10).fork()).ldelim(), null != e.op && Object.hasOwnProperty.call(e, "op") && t.uint32(16).int32(e.op), null != e.dest && Object.hasOwnProperty.call(e, "dest") && o.api.File.encode(e.dest, t.uint32(26).fork()).ldelim(), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.FileEvent; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.file = o.api.File.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        i.dest = o.api.File.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        i.op = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            var t;
                            if (null != e.file && e.hasOwnProperty("file") && (t = o.api.File.verify(e.file))) return "file." + t;
                            if (null != e.dest && e.hasOwnProperty("dest") && (t = o.api.File.verify(e.dest))) return "dest." + t;
                            if (null != e.op && e.hasOwnProperty("op")) switch (e.op) {
                                default: return "op: enum value expected";
                                case 0:
                                        case 1:
                                        case 2:
                                        case 3:
                            }
                            return null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.FileEvent) return e;
                            var t = new o.api.FileEvent;
                            if (null != e.file) {
                                if ("object" !== typeof e.file) throw TypeError(".api.FileEvent.file: object expected");
                                t.file = o.api.File.fromObject(e.file)
                            }
                            if (null != e.dest) {
                                if ("object" !== typeof e.dest) throw TypeError(".api.FileEvent.dest: object expected");
                                t.dest = o.api.File.fromObject(e.dest)
                            }
                            switch (e.op) {
                                case "Create":
                                case 0:
                                    t.op = 0;
                                    break;
                                case "Move":
                                case 1:
                                    t.op = 1;
                                    break;
                                case "Remove":
                                case 2:
                                    t.op = 2;
                                    break;
                                case "Modify":
                                case 3:
                                    t.op = 3
                            }
                            return t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.file = null, n.op = t.enums === String ? "Create" : 0, n.dest = null), null != e.file && e.hasOwnProperty("file") && (n.file = o.api.File.toObject(e.file, t)), null != e.op && e.hasOwnProperty("op") && (n.op = t.enums === String ? o.api.FileEvent.Op[e.op] : e.op), null != e.dest && e.hasOwnProperty("dest") && (n.dest = o.api.File.toObject(e.dest, t)), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r.Op = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "Create"] = 0, t[e[1] = "Move"] = 1, t[e[2] = "Remove"] = 2, t[e[3] = "Modify"] = 3, t
                        }(), r
                    }(), i.Flush = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Flush; e.pos < r;) {
                                var a = e.uint32();
                                e.skipType(7 & a)
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null
                        }, r.fromObject = function(e) {
                            return e instanceof o.api.Flush ? e : new o.api.Flush
                        }, r.toObject = function() {
                            return {}
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.OTLinkFile = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.file = null, r.prototype.highConsistency = !1, r.prototype.OBSOLETEUseModTime = !1, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.file && Object.hasOwnProperty.call(e, "file") && o.api.File.encode(e.file, t.uint32(10).fork()).ldelim(), null != e.highConsistency && Object.hasOwnProperty.call(e, "highConsistency") && t.uint32(16).bool(e.highConsistency), null != e.OBSOLETEUseModTime && Object.hasOwnProperty.call(e, "OBSOLETEUseModTime") && t.uint32(24).bool(e.OBSOLETEUseModTime), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.OTLinkFile; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.file = o.api.File.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        i.highConsistency = e.bool();
                                        break;
                                    case 3:
                                        i.OBSOLETEUseModTime = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.file && e.hasOwnProperty("file")) {
                                var t = o.api.File.verify(e.file);
                                if (t) return "file." + t
                            }
                            return null != e.highConsistency && e.hasOwnProperty("highConsistency") && "boolean" !== typeof e.highConsistency ? "highConsistency: boolean expected" : null != e.OBSOLETEUseModTime && e.hasOwnProperty("OBSOLETEUseModTime") && "boolean" !== typeof e.OBSOLETEUseModTime ? "OBSOLETEUseModTime: boolean expected" : null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.OTLinkFile) return e;
                            var t = new o.api.OTLinkFile;
                            if (null != e.file) {
                                if ("object" !== typeof e.file) throw TypeError(".api.OTLinkFile.file: object expected");
                                t.file = o.api.File.fromObject(e.file)
                            }
                            return null != e.highConsistency && (t.highConsistency = Boolean(e.highConsistency)), null != e.OBSOLETEUseModTime && (t.OBSOLETEUseModTime = Boolean(e.OBSOLETEUseModTime)), t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.file = null, n.highConsistency = !1, n.OBSOLETEUseModTime = !1), null != e.file && e.hasOwnProperty("file") && (n.file = o.api.File.toObject(e.file, t)), null != e.highConsistency && e.hasOwnProperty("highConsistency") && (n.highConsistency = e.highConsistency), null != e.OBSOLETEUseModTime && e.hasOwnProperty("OBSOLETEUseModTime") && (n.OBSOLETEUseModTime = e.OBSOLETEUseModTime), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.OTLinkFileResponse = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.version = 0, i.prototype.linkedFile = null, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.version && Object.hasOwnProperty.call(e, "version") && t.uint32(8).uint32(e.version), null != e.linkedFile && Object.hasOwnProperty.call(e, "linkedFile") && o.api.File.encode(e.linkedFile, t.uint32(18).fork()).ldelim(), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.OTLinkFileResponse; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.version = e.uint32();
                                        break;
                                    case 2:
                                        i.linkedFile = o.api.File.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.version && e.hasOwnProperty("version") && !r.isInteger(e.version)) return "version: integer expected";
                            if (null != e.linkedFile && e.hasOwnProperty("linkedFile")) {
                                var t = o.api.File.verify(e.linkedFile);
                                if (t) return "linkedFile." + t
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.OTLinkFileResponse) return e;
                            var t = new o.api.OTLinkFileResponse;
                            if (null != e.version && (t.version = e.version >>> 0), null != e.linkedFile) {
                                if ("object" !== typeof e.linkedFile) throw TypeError(".api.OTLinkFileResponse.linkedFile: object expected");
                                t.linkedFile = o.api.File.fromObject(e.linkedFile)
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.version = 0, n.linkedFile = null), null != e.version && e.hasOwnProperty("version") && (n.version = e.version), null != e.linkedFile && e.hasOwnProperty("linkedFile") && (n.linkedFile = o.api.File.toObject(e.linkedFile, t)), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.Auth = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.token = "", i.prototype.containerID = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(10).string(e.token), null != e.containerID && Object.hasOwnProperty.call(e, "containerID") && t.uint32(18).string(e.containerID), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Auth; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.token = e.string();
                                        break;
                                    case 2:
                                        i.containerID = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.token && e.hasOwnProperty("token") && !r.isString(e.token) ? "token: string expected" : null != e.containerID && e.hasOwnProperty("containerID") && !r.isString(e.containerID) ? "containerID: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Auth) return e;
                            var t = new o.api.Auth;
                            return null != e.token && (t.token = String(e.token)), null != e.containerID && (t.containerID = String(e.containerID)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.token = "", n.containerID = ""), null != e.token && e.hasOwnProperty("token") && (n.token = e.token), null != e.containerID && e.hasOwnProperty("containerID") && (n.containerID = e.containerID), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.VCREntry = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.timestamp = r.Long ? r.Long.fromBits(0, 0, !0) : 0, i.prototype.direction = 0, i.prototype.command = null, i.prototype.uid = "", i.prototype.replid = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.timestamp && Object.hasOwnProperty.call(e, "timestamp") && t.uint32(8).uint64(e.timestamp), null != e.direction && Object.hasOwnProperty.call(e, "direction") && t.uint32(16).int32(e.direction), null != e.command && Object.hasOwnProperty.call(e, "command") && o.api.Command.encode(e.command, t.uint32(26).fork()).ldelim(), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(34).string(e.uid), null != e.replid && Object.hasOwnProperty.call(e, "replid") && t.uint32(42).string(e.replid), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.VCREntry; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.timestamp = e.uint64();
                                        break;
                                    case 2:
                                        i.direction = e.int32();
                                        break;
                                    case 3:
                                        i.command = o.api.Command.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        i.uid = e.string();
                                        break;
                                    case 5:
                                        i.replid = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.timestamp && e.hasOwnProperty("timestamp") && !r.isInteger(e.timestamp) && !(e.timestamp && r.isInteger(e.timestamp.low) && r.isInteger(e.timestamp.high))) return "timestamp: integer|Long expected";
                            if (null != e.direction && e.hasOwnProperty("direction")) switch (e.direction) {
                                default: return "direction: enum value expected";
                                case 0:
                                        case 1:
                            }
                            if (null != e.command && e.hasOwnProperty("command")) {
                                var t = o.api.Command.verify(e.command);
                                if (t) return "command." + t
                            }
                            return null != e.uid && e.hasOwnProperty("uid") && !r.isString(e.uid) ? "uid: string expected" : null != e.replid && e.hasOwnProperty("replid") && !r.isString(e.replid) ? "replid: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.VCREntry) return e;
                            var t = new o.api.VCREntry;
                            switch (null != e.timestamp && (r.Long ? (t.timestamp = r.Long.fromValue(e.timestamp)).unsigned = !0 : "string" === typeof e.timestamp ? t.timestamp = parseInt(e.timestamp, 10) : "number" === typeof e.timestamp ? t.timestamp = e.timestamp : "object" === typeof e.timestamp && (t.timestamp = new r.LongBits(e.timestamp.low >>> 0, e.timestamp.high >>> 0).toNumber(!0))), e.direction) {
                                case "IN":
                                case 0:
                                    t.direction = 0;
                                    break;
                                case "OUT":
                                case 1:
                                    t.direction = 1
                            }
                            if (null != e.command) {
                                if ("object" !== typeof e.command) throw TypeError(".api.VCREntry.command: object expected");
                                t.command = o.api.Command.fromObject(e.command)
                            }
                            return null != e.uid && (t.uid = String(e.uid)), null != e.replid && (t.replid = String(e.replid)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if (t.defaults) {
                                if (r.Long) {
                                    var i = new r.Long(0, 0, !0);
                                    n.timestamp = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i
                                } else n.timestamp = t.longs === String ? "0" : 0;
                                n.direction = t.enums === String ? "IN" : 0, n.command = null, n.uid = "", n.replid = ""
                            }
                            return null != e.timestamp && e.hasOwnProperty("timestamp") && ("number" === typeof e.timestamp ? n.timestamp = t.longs === String ? String(e.timestamp) : e.timestamp : n.timestamp = t.longs === String ? r.Long.prototype.toString.call(e.timestamp) : t.longs === Number ? new r.LongBits(e.timestamp.low >>> 0, e.timestamp.high >>> 0).toNumber(!0) : e.timestamp), null != e.direction && e.hasOwnProperty("direction") && (n.direction = t.enums === String ? o.api.VCREntry.Direction[e.direction] : e.direction), null != e.command && e.hasOwnProperty("command") && (n.command = o.api.Command.toObject(e.command, t)), null != e.uid && e.hasOwnProperty("uid") && (n.uid = e.uid), null != e.replid && e.hasOwnProperty("replid") && (n.replid = e.replid), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i.Direction = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "IN"] = 0, t[e[1] = "OUT"] = 1, t
                        }(), i
                    }(), i.StartVCR = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.StartVCR; e.pos < r;) {
                                var a = e.uint32();
                                e.skipType(7 & a)
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null
                        }, r.fromObject = function(e) {
                            return e instanceof o.api.StartVCR ? e : new o.api.StartVCR
                        }, r.toObject = function() {
                            return {}
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.ReadVCR = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.ReadVCR; e.pos < r;) {
                                var a = e.uint32();
                                e.skipType(7 & a)
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null
                        }, r.fromObject = function(e) {
                            return e instanceof o.api.ReadVCR ? e : new o.api.ReadVCR
                        }, r.toObject = function() {
                            return {}
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.VCRLog = function() {
                        function i(e) {
                            if (this.log = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.log = r.emptyArray, i.prototype.logfile = null, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.log && e.log.length)
                                for (var r = 0; r < e.log.length; ++r) o.api.VCREntry.encode(e.log[r], t.uint32(10).fork()).ldelim();
                            return null != e.logfile && Object.hasOwnProperty.call(e, "logfile") && o.api.File.encode(e.logfile, t.uint32(18).fork()).ldelim(), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.VCRLog; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.log && i.log.length || (i.log = []), i.log.push(o.api.VCREntry.decode(e, e.uint32()));
                                        break;
                                    case 2:
                                        i.logfile = o.api.File.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.log && e.hasOwnProperty("log")) {
                                if (!Array.isArray(e.log)) return "log: array expected";
                                for (var t = 0; t < e.log.length; ++t)
                                    if (n = o.api.VCREntry.verify(e.log[t])) return "log." + n
                            }
                            var n;
                            return null != e.logfile && e.hasOwnProperty("logfile") && (n = o.api.File.verify(e.logfile)) ? "logfile." + n : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.VCRLog) return e;
                            var t = new o.api.VCRLog;
                            if (e.log) {
                                if (!Array.isArray(e.log)) throw TypeError(".api.VCRLog.log: array expected");
                                t.log = [];
                                for (var n = 0; n < e.log.length; ++n) {
                                    if ("object" !== typeof e.log[n]) throw TypeError(".api.VCRLog.log: object expected");
                                    t.log[n] = o.api.VCREntry.fromObject(e.log[n])
                                }
                            }
                            if (null != e.logfile) {
                                if ("object" !== typeof e.logfile) throw TypeError(".api.VCRLog.logfile: object expected");
                                t.logfile = o.api.File.fromObject(e.logfile)
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.log = []), t.defaults && (n.logfile = null), e.log && e.log.length) {
                                n.log = [];
                                for (var r = 0; r < e.log.length; ++r) n.log[r] = o.api.VCREntry.toObject(e.log[r], t)
                            }
                            return null != e.logfile && e.hasOwnProperty("logfile") && (n.logfile = o.api.File.toObject(e.logfile, t)), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.ExecInfo = function() {
                        function i(e) {
                            if (this.command = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.command = r.emptyArray, i.prototype.reason = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.command && e.command.length)
                                for (var r = 0; r < e.command.length; ++r) t.uint32(10).string(e.command[r]);
                            return null != e.reason && Object.hasOwnProperty.call(e, "reason") && t.uint32(18).string(e.reason), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.ExecInfo; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.command && i.command.length || (i.command = []), i.command.push(e.string());
                                        break;
                                    case 2:
                                        i.reason = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.command && e.hasOwnProperty("command")) {
                                if (!Array.isArray(e.command)) return "command: array expected";
                                for (var t = 0; t < e.command.length; ++t)
                                    if (!r.isString(e.command[t])) return "command: string[] expected"
                            }
                            return null != e.reason && e.hasOwnProperty("reason") && !r.isString(e.reason) ? "reason: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.ExecInfo) return e;
                            var t = new o.api.ExecInfo;
                            if (e.command) {
                                if (!Array.isArray(e.command)) throw TypeError(".api.ExecInfo.command: array expected");
                                t.command = [];
                                for (var n = 0; n < e.command.length; ++n) t.command[n] = String(e.command[n])
                            }
                            return null != e.reason && (t.reason = String(e.reason)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.command = []), t.defaults && (n.reason = ""), e.command && e.command.length) {
                                n.command = [];
                                for (var r = 0; r < e.command.length; ++r) n.command[r] = e.command[r]
                            }
                            return null != e.reason && e.hasOwnProperty("reason") && (n.reason = e.reason), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.Debug = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.text = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.text && Object.hasOwnProperty.call(e, "text") && t.uint32(10).string(e.text), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Debug; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.text = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.text && e.hasOwnProperty("text") && !r.isString(e.text) ? "text: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Debug) return e;
                            var t = new o.api.Debug;
                            return null != e.text && (t.text = String(e.text)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.text = ""), null != e.text && e.hasOwnProperty("text") && (n.text = e.text), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.FileAuthMethod = function() {
                        var e = {},
                            t = Object.create(e);
                        return t[e[0] = "GET"] = 0, t[e[1] = "HEAD"] = 1, t[e[2] = "PUT"] = 2, t[e[3] = "DELETE"] = 3, t
                    }(), i.FileAuthReq = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.file = null, r.prototype.method = 0, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.file && Object.hasOwnProperty.call(e, "file") && o.api.File.encode(e.file, t.uint32(10).fork()).ldelim(), null != e.method && Object.hasOwnProperty.call(e, "method") && t.uint32(16).int32(e.method), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.FileAuthReq; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.file = o.api.File.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        i.method = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.file && e.hasOwnProperty("file")) {
                                var t = o.api.File.verify(e.file);
                                if (t) return "file." + t
                            }
                            if (null != e.method && e.hasOwnProperty("method")) switch (e.method) {
                                default: return "method: enum value expected";
                                case 0:
                                        case 1:
                                        case 2:
                                        case 3:
                            }
                            return null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.FileAuthReq) return e;
                            var t = new o.api.FileAuthReq;
                            if (null != e.file) {
                                if ("object" !== typeof e.file) throw TypeError(".api.FileAuthReq.file: object expected");
                                t.file = o.api.File.fromObject(e.file)
                            }
                            switch (e.method) {
                                case "GET":
                                case 0:
                                    t.method = 0;
                                    break;
                                case "HEAD":
                                case 1:
                                    t.method = 1;
                                    break;
                                case "PUT":
                                case 2:
                                    t.method = 2;
                                    break;
                                case "DELETE":
                                case 3:
                                    t.method = 3
                            }
                            return t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.file = null, n.method = t.enums === String ? "GET" : 0), null != e.file && e.hasOwnProperty("file") && (n.file = o.api.File.toObject(e.file, t)), null != e.method && e.hasOwnProperty("method") && (n.method = t.enums === String ? o.api.FileAuthMethod[e.method] : e.method), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.MultiFileAuthRes = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.put = null, r.prototype.del = null, r.prototype.get = null, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.put && Object.hasOwnProperty.call(e, "put") && o.api.FileAuthRes.encode(e.put, t.uint32(10).fork()).ldelim(), null != e.del && Object.hasOwnProperty.call(e, "del") && o.api.FileAuthRes.encode(e.del, t.uint32(18).fork()).ldelim(), null != e.get && Object.hasOwnProperty.call(e, "get") && o.api.FileAuthRes.encode(e.get, t.uint32(26).fork()).ldelim(), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.MultiFileAuthRes; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.put = o.api.FileAuthRes.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        i.del = o.api.FileAuthRes.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        i.get = o.api.FileAuthRes.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.put && e.hasOwnProperty("put") && (t = o.api.FileAuthRes.verify(e.put)) ? "put." + t : null != e.del && e.hasOwnProperty("del") && (t = o.api.FileAuthRes.verify(e.del)) ? "del." + t : null != e.get && e.hasOwnProperty("get") && (t = o.api.FileAuthRes.verify(e.get)) ? "get." + t : null;
                            var t
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.MultiFileAuthRes) return e;
                            var t = new o.api.MultiFileAuthRes;
                            if (null != e.put) {
                                if ("object" !== typeof e.put) throw TypeError(".api.MultiFileAuthRes.put: object expected");
                                t.put = o.api.FileAuthRes.fromObject(e.put)
                            }
                            if (null != e.del) {
                                if ("object" !== typeof e.del) throw TypeError(".api.MultiFileAuthRes.del: object expected");
                                t.del = o.api.FileAuthRes.fromObject(e.del)
                            }
                            if (null != e.get) {
                                if ("object" !== typeof e.get) throw TypeError(".api.MultiFileAuthRes.get: object expected");
                                t.get = o.api.FileAuthRes.fromObject(e.get)
                            }
                            return t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.put = null, n.del = null, n.get = null), null != e.put && e.hasOwnProperty("put") && (n.put = o.api.FileAuthRes.toObject(e.put, t)), null != e.del && e.hasOwnProperty("del") && (n.del = o.api.FileAuthRes.toObject(e.del, t)), null != e.get && e.hasOwnProperty("get") && (n.get = o.api.FileAuthRes.toObject(e.get, t)), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.FileAuthRes = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.file = null, i.prototype.url = "", i.prototype.method = 0, i.prototype.expire = r.Long ? r.Long.fromBits(0, 0, !1) : 0, i.prototype.error = "", i.prototype.replError = !1, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.file && Object.hasOwnProperty.call(e, "file") && o.api.File.encode(e.file, t.uint32(10).fork()).ldelim(), null != e.url && Object.hasOwnProperty.call(e, "url") && t.uint32(18).string(e.url), null != e.method && Object.hasOwnProperty.call(e, "method") && t.uint32(24).int32(e.method), null != e.expire && Object.hasOwnProperty.call(e, "expire") && t.uint32(32).int64(e.expire), null != e.error && Object.hasOwnProperty.call(e, "error") && t.uint32(42).string(e.error), null != e.replError && Object.hasOwnProperty.call(e, "replError") && t.uint32(56).bool(e.replError), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.FileAuthRes; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.file = o.api.File.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        i.url = e.string();
                                        break;
                                    case 3:
                                        i.method = e.int32();
                                        break;
                                    case 4:
                                        i.expire = e.int64();
                                        break;
                                    case 5:
                                        i.error = e.string();
                                        break;
                                    case 7:
                                        i.replError = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.file && e.hasOwnProperty("file")) {
                                var t = o.api.File.verify(e.file);
                                if (t) return "file." + t
                            }
                            if (null != e.url && e.hasOwnProperty("url") && !r.isString(e.url)) return "url: string expected";
                            if (null != e.method && e.hasOwnProperty("method")) switch (e.method) {
                                default: return "method: enum value expected";
                                case 0:
                                        case 1:
                                        case 2:
                                        case 3:
                            }
                            return null == e.expire || !e.hasOwnProperty("expire") || r.isInteger(e.expire) || e.expire && r.isInteger(e.expire.low) && r.isInteger(e.expire.high) ? null != e.error && e.hasOwnProperty("error") && !r.isString(e.error) ? "error: string expected" : null != e.replError && e.hasOwnProperty("replError") && "boolean" !== typeof e.replError ? "replError: boolean expected" : null : "expire: integer|Long expected"
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.FileAuthRes) return e;
                            var t = new o.api.FileAuthRes;
                            if (null != e.file) {
                                if ("object" !== typeof e.file) throw TypeError(".api.FileAuthRes.file: object expected");
                                t.file = o.api.File.fromObject(e.file)
                            }
                            switch (null != e.url && (t.url = String(e.url)), e.method) {
                                case "GET":
                                case 0:
                                    t.method = 0;
                                    break;
                                case "HEAD":
                                case 1:
                                    t.method = 1;
                                    break;
                                case "PUT":
                                case 2:
                                    t.method = 2;
                                    break;
                                case "DELETE":
                                case 3:
                                    t.method = 3
                            }
                            return null != e.expire && (r.Long ? (t.expire = r.Long.fromValue(e.expire)).unsigned = !1 : "string" === typeof e.expire ? t.expire = parseInt(e.expire, 10) : "number" === typeof e.expire ? t.expire = e.expire : "object" === typeof e.expire && (t.expire = new r.LongBits(e.expire.low >>> 0, e.expire.high >>> 0).toNumber())), null != e.error && (t.error = String(e.error)), null != e.replError && (t.replError = Boolean(e.replError)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if (t.defaults) {
                                if (n.file = null, n.url = "", n.method = t.enums === String ? "GET" : 0, r.Long) {
                                    var i = new r.Long(0, 0, !1);
                                    n.expire = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i
                                } else n.expire = t.longs === String ? "0" : 0;
                                n.error = "", n.replError = !1
                            }
                            return null != e.file && e.hasOwnProperty("file") && (n.file = o.api.File.toObject(e.file, t)), null != e.url && e.hasOwnProperty("url") && (n.url = e.url), null != e.method && e.hasOwnProperty("method") && (n.method = t.enums === String ? o.api.FileAuthMethod[e.method] : e.method), null != e.expire && e.hasOwnProperty("expire") && ("number" === typeof e.expire ? n.expire = t.longs === String ? String(e.expire) : e.expire : n.expire = t.longs === String ? r.Long.prototype.toString.call(e.expire) : t.longs === Number ? new r.LongBits(e.expire.low >>> 0, e.expire.high >>> 0).toNumber() : e.expire), null != e.error && e.hasOwnProperty("error") && (n.error = e.error), null != e.replError && e.hasOwnProperty("replError") && (n.replError = e.replError), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.ListObjects = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.prefix = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.prefix && Object.hasOwnProperty.call(e, "prefix") && t.uint32(10).string(e.prefix), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.ListObjects; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.prefix = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.prefix && e.hasOwnProperty("prefix") && !r.isString(e.prefix) ? "prefix: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.ListObjects) return e;
                            var t = new o.api.ListObjects;
                            return null != e.prefix && (t.prefix = String(e.prefix)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.prefix = ""), null != e.prefix && e.hasOwnProperty("prefix") && (n.prefix = e.prefix), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.ListObjectsResp = function() {
                        function i(e) {
                            if (this.objects = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.objects = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.objects && e.objects.length)
                                for (var r = 0; r < e.objects.length; ++r) t.uint32(10).string(e.objects[r]);
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.ListObjectsResp; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.objects && i.objects.length || (i.objects = []), i.objects.push(e.string());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.objects && e.hasOwnProperty("objects")) {
                                if (!Array.isArray(e.objects)) return "objects: array expected";
                                for (var t = 0; t < e.objects.length; ++t)
                                    if (!r.isString(e.objects[t])) return "objects: string[] expected"
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.ListObjectsResp) return e;
                            var t = new o.api.ListObjectsResp;
                            if (e.objects) {
                                if (!Array.isArray(e.objects)) throw TypeError(".api.ListObjectsResp.objects: array expected");
                                t.objects = [];
                                for (var n = 0; n < e.objects.length; ++n) t.objects[n] = String(e.objects[n])
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.objects = []), e.objects && e.objects.length) {
                                n.objects = [];
                                for (var r = 0; r < e.objects.length; ++r) n.objects[r] = e.objects[r]
                            }
                            return n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.Disconnect = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.error = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.error && Object.hasOwnProperty.call(e, "error") && t.uint32(10).string(e.error), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Disconnect; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.error = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.error && e.hasOwnProperty("error") && !r.isString(e.error) ? "error: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Disconnect) return e;
                            var t = new o.api.Disconnect;
                            return null != e.error && (t.error = String(e.error)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.error = ""), null != e.error && e.hasOwnProperty("error") && (n.error = e.error), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.Send = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.buff = r.newBuffer([]), i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.buff && Object.hasOwnProperty.call(e, "buff") && t.uint32(10).bytes(e.buff), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Send; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.buff = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.buff && e.hasOwnProperty("buff") && !(e.buff && "number" === typeof e.buff.length || r.isString(e.buff)) ? "buff: buffer expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Send) return e;
                            var t = new o.api.Send;
                            return null != e.buff && ("string" === typeof e.buff ? r.base64.decode(e.buff, t.buff = r.newBuffer(r.base64.length(e.buff)), 0) : e.buff.length && (t.buff = e.buff)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (t.bytes === String ? n.buff = "" : (n.buff = [], t.bytes !== Array && (n.buff = r.newBuffer(n.buff)))), null != e.buff && e.hasOwnProperty("buff") && (n.buff = t.bytes === String ? r.base64.encode(e.buff, 0, e.buff.length) : t.bytes === Array ? Array.prototype.slice.call(e.buff) : e.buff), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.Recv = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.buff = r.newBuffer([]), i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.buff && Object.hasOwnProperty.call(e, "buff") && t.uint32(10).bytes(e.buff), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Recv; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.buff = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.buff && e.hasOwnProperty("buff") && !(e.buff && "number" === typeof e.buff.length || r.isString(e.buff)) ? "buff: buffer expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Recv) return e;
                            var t = new o.api.Recv;
                            return null != e.buff && ("string" === typeof e.buff ? r.base64.decode(e.buff, t.buff = r.newBuffer(r.base64.length(e.buff)), 0) : e.buff.length && (t.buff = e.buff)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (t.bytes === String ? n.buff = "" : (n.buff = [], t.bytes !== Array && (n.buff = r.newBuffer(n.buff)))), null != e.buff && e.hasOwnProperty("buff") && (n.buff = t.bytes === String ? r.base64.encode(e.buff, 0, e.buff.length) : t.bytes === Array ? Array.prototype.slice.call(e.buff) : e.buff), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.Connect = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.proto = "", i.prototype.addr = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.proto && Object.hasOwnProperty.call(e, "proto") && t.uint32(10).string(e.proto), null != e.addr && Object.hasOwnProperty.call(e, "addr") && t.uint32(18).string(e.addr), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Connect; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.proto = e.string();
                                        break;
                                    case 2:
                                        i.addr = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.proto && e.hasOwnProperty("proto") && !r.isString(e.proto) ? "proto: string expected" : null != e.addr && e.hasOwnProperty("addr") && !r.isString(e.addr) ? "addr: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Connect) return e;
                            var t = new o.api.Connect;
                            return null != e.proto && (t.proto = String(e.proto)), null != e.addr && (t.addr = String(e.addr)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.proto = "", n.addr = ""), null != e.proto && e.hasOwnProperty("proto") && (n.proto = e.proto), null != e.addr && e.hasOwnProperty("addr") && (n.addr = e.addr), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.Hint = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.text = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.text && Object.hasOwnProperty.call(e, "text") && t.uint32(10).string(e.text), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Hint; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.text = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.text && e.hasOwnProperty("text") && !r.isString(e.text) ? "text: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Hint) return e;
                            var t = new o.api.Hint;
                            return null != e.text && (t.text = String(e.text)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.text = ""), null != e.text && e.hasOwnProperty("text") && (n.text = e.text), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.Ping = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Ping; e.pos < r;) {
                                var a = e.uint32();
                                e.skipType(7 & a)
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null
                        }, r.fromObject = function(e) {
                            return e instanceof o.api.Ping ? e : new o.api.Ping
                        }, r.toObject = function() {
                            return {}
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.Pong = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Pong; e.pos < r;) {
                                var a = e.uint32();
                                e.skipType(7 & a)
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null
                        }, r.fromObject = function(e) {
                            return e instanceof o.api.Pong ? e : new o.api.Pong
                        }, r.toObject = function() {
                            return {}
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.Hello = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.userid = 0, i.prototype.username = "", i.prototype.token = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.userid && Object.hasOwnProperty.call(e, "userid") && t.uint32(8).uint32(e.userid), null != e.username && Object.hasOwnProperty.call(e, "username") && t.uint32(18).string(e.username), null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(26).string(e.token), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Hello; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.userid = e.uint32();
                                        break;
                                    case 2:
                                        i.username = e.string();
                                        break;
                                    case 3:
                                        i.token = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.userid && e.hasOwnProperty("userid") && !r.isInteger(e.userid) ? "userid: integer expected" : null != e.username && e.hasOwnProperty("username") && !r.isString(e.username) ? "username: string expected" : null != e.token && e.hasOwnProperty("token") && !r.isString(e.token) ? "token: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Hello) return e;
                            var t = new o.api.Hello;
                            return null != e.userid && (t.userid = e.userid >>> 0), null != e.username && (t.username = String(e.username)), null != e.token && (t.token = String(e.token)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.userid = 0, n.username = "", n.token = ""), null != e.userid && e.hasOwnProperty("userid") && (n.userid = e.userid), null != e.username && e.hasOwnProperty("username") && (n.username = e.username), null != e.token && e.hasOwnProperty("token") && (n.token = e.token), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.Goodbye = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Goodbye; e.pos < r;) {
                                var a = e.uint32();
                                e.skipType(7 & a)
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null
                        }, r.fromObject = function(e) {
                            return e instanceof o.api.Goodbye ? e : new o.api.Goodbye
                        }, r.toObject = function() {
                            return {}
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.State = function() {
                        var e = {},
                            t = Object.create(e);
                        return t[e[0] = "Stopped"] = 0, t[e[1] = "Running"] = 1, t
                    }(), i.CheckChanges = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.CheckChanges; e.pos < r;) {
                                var a = e.uint32();
                                e.skipType(7 & a)
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null
                        }, r.fromObject = function(e) {
                            return e instanceof o.api.CheckChanges ? e : new o.api.CheckChanges
                        }, r.toObject = function() {
                            return {}
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.EnsurePackages = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.install = !1, r.prototype.file = null, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.install && Object.hasOwnProperty.call(e, "install") && t.uint32(8).bool(e.install), null != e.file && Object.hasOwnProperty.call(e, "file") && o.api.File.encode(e.file, t.uint32(18).fork()).ldelim(), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.EnsurePackages; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.install = e.bool();
                                        break;
                                    case 2:
                                        i.file = o.api.File.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.install && e.hasOwnProperty("install") && "boolean" !== typeof e.install) return "install: boolean expected";
                            if (null != e.file && e.hasOwnProperty("file")) {
                                var t = o.api.File.verify(e.file);
                                if (t) return "file." + t
                            }
                            return null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.EnsurePackages) return e;
                            var t = new o.api.EnsurePackages;
                            if (null != e.install && (t.install = Boolean(e.install)), null != e.file) {
                                if ("object" !== typeof e.file) throw TypeError(".api.EnsurePackages.file: object expected");
                                t.file = o.api.File.fromObject(e.file)
                            }
                            return t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.install = !1, n.file = null), null != e.install && e.hasOwnProperty("install") && (n.install = e.install), null != e.file && e.hasOwnProperty("file") && (n.file = o.api.File.toObject(e.file, t)), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.Start = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Start; e.pos < r;) {
                                var a = e.uint32();
                                e.skipType(7 & a)
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null
                        }, r.fromObject = function(e) {
                            return e instanceof o.api.Start ? e : new o.api.Start
                        }, r.toObject = function() {
                            return {}
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.DebugStatus = function() {
                        function i(e) {
                            if (this.stack = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.done = !1, i.prototype.stack = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.done && Object.hasOwnProperty.call(e, "done") && t.uint32(8).bool(e.done), null != e.stack && e.stack.length)
                                for (var r = 0; r < e.stack.length; ++r) o.api.StackFrame.encode(e.stack[r], t.uint32(18).fork()).ldelim();
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.DebugStatus; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.done = e.bool();
                                        break;
                                    case 2:
                                        i.stack && i.stack.length || (i.stack = []), i.stack.push(o.api.StackFrame.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.done && e.hasOwnProperty("done") && "boolean" !== typeof e.done) return "done: boolean expected";
                            if (null != e.stack && e.hasOwnProperty("stack")) {
                                if (!Array.isArray(e.stack)) return "stack: array expected";
                                for (var t = 0; t < e.stack.length; ++t) {
                                    var n = o.api.StackFrame.verify(e.stack[t]);
                                    if (n) return "stack." + n
                                }
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.DebugStatus) return e;
                            var t = new o.api.DebugStatus;
                            if (null != e.done && (t.done = Boolean(e.done)), e.stack) {
                                if (!Array.isArray(e.stack)) throw TypeError(".api.DebugStatus.stack: array expected");
                                t.stack = [];
                                for (var n = 0; n < e.stack.length; ++n) {
                                    if ("object" !== typeof e.stack[n]) throw TypeError(".api.DebugStatus.stack: object expected");
                                    t.stack[n] = o.api.StackFrame.fromObject(e.stack[n])
                                }
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.stack = []), t.defaults && (n.done = !1), null != e.done && e.hasOwnProperty("done") && (n.done = e.done), e.stack && e.stack.length) {
                                n.stack = [];
                                for (var r = 0; r < e.stack.length; ++r) n.stack[r] = o.api.StackFrame.toObject(e.stack[r], t)
                            }
                            return n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.StackFrame = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.function = "", i.prototype.line = 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.function && Object.hasOwnProperty.call(e, "function") && t.uint32(10).string(e.function), null != e.line && Object.hasOwnProperty.call(e, "line") && t.uint32(16).uint32(e.line), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.StackFrame; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.function = e.string();
                                        break;
                                    case 2:
                                        i.line = e.uint32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.function && e.hasOwnProperty("function") && !r.isString(e.function) ? "function: string expected" : null != e.line && e.hasOwnProperty("line") && !r.isInteger(e.line) ? "line: integer expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.StackFrame) return e;
                            var t = new o.api.StackFrame;
                            return null != e.function && (t.function = String(e.function)), null != e.line && (t.line = e.line >>> 0), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.function = "", n.line = 0), null != e.function && e.hasOwnProperty("function") && (n.function = e.function), null != e.line && e.hasOwnProperty("line") && (n.line = e.line), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.ContainedTest = function() {
                        function i(e) {
                            if (this.project = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.suite = null, i.prototype.project = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.suite && Object.hasOwnProperty.call(e, "suite") && o.api.File.encode(e.suite, t.uint32(10).fork()).ldelim(), null != e.project && e.project.length)
                                for (var r = 0; r < e.project.length; ++r) o.api.File.encode(e.project[r], t.uint32(18).fork()).ldelim();
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.ContainedTest; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.suite = o.api.File.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        i.project && i.project.length || (i.project = []), i.project.push(o.api.File.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.suite && e.hasOwnProperty("suite") && (n = o.api.File.verify(e.suite))) return "suite." + n;
                            if (null != e.project && e.hasOwnProperty("project")) {
                                if (!Array.isArray(e.project)) return "project: array expected";
                                for (var t = 0; t < e.project.length; ++t) {
                                    var n;
                                    if (n = o.api.File.verify(e.project[t])) return "project." + n
                                }
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.ContainedTest) return e;
                            var t = new o.api.ContainedTest;
                            if (null != e.suite) {
                                if ("object" !== typeof e.suite) throw TypeError(".api.ContainedTest.suite: object expected");
                                t.suite = o.api.File.fromObject(e.suite)
                            }
                            if (e.project) {
                                if (!Array.isArray(e.project)) throw TypeError(".api.ContainedTest.project: array expected");
                                t.project = [];
                                for (var n = 0; n < e.project.length; ++n) {
                                    if ("object" !== typeof e.project[n]) throw TypeError(".api.ContainedTest.project: object expected");
                                    t.project[n] = o.api.File.fromObject(e.project[n])
                                }
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.project = []), t.defaults && (n.suite = null), null != e.suite && e.hasOwnProperty("suite") && (n.suite = o.api.File.toObject(e.suite, t)), e.project && e.project.length) {
                                n.project = [];
                                for (var r = 0; r < e.project.length; ++r) n.project[r] = o.api.File.toObject(e.project[r], t)
                            }
                            return n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.TestResult = function() {
                        function i(e) {
                            if (this.fails = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.passed = !1, i.prototype.stderr = "", i.prototype.fails = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.passed && Object.hasOwnProperty.call(e, "passed") && t.uint32(8).bool(e.passed), null != e.stderr && Object.hasOwnProperty.call(e, "stderr") && t.uint32(18).string(e.stderr), null != e.fails && e.fails.length)
                                for (var r = 0; r < e.fails.length; ++r) o.api.TestFailure.encode(e.fails[r], t.uint32(26).fork()).ldelim();
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.TestResult; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.passed = e.bool();
                                        break;
                                    case 2:
                                        i.stderr = e.string();
                                        break;
                                    case 3:
                                        i.fails && i.fails.length || (i.fails = []), i.fails.push(o.api.TestFailure.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.passed && e.hasOwnProperty("passed") && "boolean" !== typeof e.passed) return "passed: boolean expected";
                            if (null != e.stderr && e.hasOwnProperty("stderr") && !r.isString(e.stderr)) return "stderr: string expected";
                            if (null != e.fails && e.hasOwnProperty("fails")) {
                                if (!Array.isArray(e.fails)) return "fails: array expected";
                                for (var t = 0; t < e.fails.length; ++t) {
                                    var n = o.api.TestFailure.verify(e.fails[t]);
                                    if (n) return "fails." + n
                                }
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.TestResult) return e;
                            var t = new o.api.TestResult;
                            if (null != e.passed && (t.passed = Boolean(e.passed)), null != e.stderr && (t.stderr = String(e.stderr)), e.fails) {
                                if (!Array.isArray(e.fails)) throw TypeError(".api.TestResult.fails: array expected");
                                t.fails = [];
                                for (var n = 0; n < e.fails.length; ++n) {
                                    if ("object" !== typeof e.fails[n]) throw TypeError(".api.TestResult.fails: object expected");
                                    t.fails[n] = o.api.TestFailure.fromObject(e.fails[n])
                                }
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.fails = []), t.defaults && (n.passed = !1, n.stderr = ""), null != e.passed && e.hasOwnProperty("passed") && (n.passed = e.passed), null != e.stderr && e.hasOwnProperty("stderr") && (n.stderr = e.stderr), e.fails && e.fails.length) {
                                n.fails = [];
                                for (var r = 0; r < e.fails.length; ++r) n.fails[r] = o.api.TestFailure.toObject(e.fails[r], t)
                            }
                            return n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.TestFailure = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.name = "", i.prototype.trace = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(10).string(e.name), null != e.trace && Object.hasOwnProperty.call(e, "trace") && t.uint32(18).string(e.trace), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.TestFailure; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.name = e.string();
                                        break;
                                    case 2:
                                        i.trace = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.name && e.hasOwnProperty("name") && !r.isString(e.name) ? "name: string expected" : null != e.trace && e.hasOwnProperty("trace") && !r.isString(e.trace) ? "trace: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.TestFailure) return e;
                            var t = new o.api.TestFailure;
                            return null != e.name && (t.name = String(e.name)), null != e.trace && (t.trace = String(e.trace)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.name = "", n.trace = ""), null != e.name && e.hasOwnProperty("name") && (n.name = e.name), null != e.trace && e.hasOwnProperty("trace") && (n.trace = e.trace), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.ResizeTerm = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.rows = 0, i.prototype.cols = 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.rows && Object.hasOwnProperty.call(e, "rows") && t.uint32(8).uint32(e.rows), null != e.cols && Object.hasOwnProperty.call(e, "cols") && t.uint32(16).uint32(e.cols), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.ResizeTerm; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.rows = e.uint32();
                                        break;
                                    case 2:
                                        i.cols = e.uint32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.rows && e.hasOwnProperty("rows") && !r.isInteger(e.rows) ? "rows: integer expected" : null != e.cols && e.hasOwnProperty("cols") && !r.isInteger(e.cols) ? "cols: integer expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.ResizeTerm) return e;
                            var t = new o.api.ResizeTerm;
                            return null != e.rows && (t.rows = e.rows >>> 0), null != e.cols && (t.cols = e.cols >>> 0), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.rows = 0, n.cols = 0), null != e.rows && e.hasOwnProperty("rows") && (n.rows = e.rows), null != e.cols && e.hasOwnProperty("cols") && (n.cols = e.cols), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.SaneTerm = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.SaneTerm; e.pos < r;) {
                                var a = e.uint32();
                                e.skipType(7 & a)
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null
                        }, r.fromObject = function(e) {
                            return e instanceof o.api.SaneTerm ? e : new o.api.SaneTerm
                        }, r.toObject = function() {
                            return {}
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.LintResults = function() {
                        function i(e) {
                            if (this.results = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.results = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.results && e.results.length)
                                for (var r = 0; r < e.results.length; ++r) o.api.LintResult.encode(e.results[r], t.uint32(10).fork()).ldelim();
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.LintResults; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.results && i.results.length || (i.results = []), i.results.push(o.api.LintResult.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.results && e.hasOwnProperty("results")) {
                                if (!Array.isArray(e.results)) return "results: array expected";
                                for (var t = 0; t < e.results.length; ++t) {
                                    var n = o.api.LintResult.verify(e.results[t]);
                                    if (n) return "results." + n
                                }
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.LintResults) return e;
                            var t = new o.api.LintResults;
                            if (e.results) {
                                if (!Array.isArray(e.results)) throw TypeError(".api.LintResults.results: array expected");
                                t.results = [];
                                for (var n = 0; n < e.results.length; ++n) {
                                    if ("object" !== typeof e.results[n]) throw TypeError(".api.LintResults.results: object expected");
                                    t.results[n] = o.api.LintResult.fromObject(e.results[n])
                                }
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.results = []), e.results && e.results.length) {
                                n.results = [];
                                for (var r = 0; r < e.results.length; ++r) n.results[r] = o.api.LintResult.toObject(e.results[r], t)
                            }
                            return n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.LintResult = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.text = "", i.prototype.row = 0, i.prototype.column = 0, i.prototype.type = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.text && Object.hasOwnProperty.call(e, "text") && t.uint32(10).string(e.text), null != e.row && Object.hasOwnProperty.call(e, "row") && t.uint32(16).int32(e.row), null != e.column && Object.hasOwnProperty.call(e, "column") && t.uint32(24).int32(e.column), null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(34).string(e.type), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.LintResult; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.text = e.string();
                                        break;
                                    case 2:
                                        i.row = e.int32();
                                        break;
                                    case 3:
                                        i.column = e.int32();
                                        break;
                                    case 4:
                                        i.type = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.text && e.hasOwnProperty("text") && !r.isString(e.text) ? "text: string expected" : null != e.row && e.hasOwnProperty("row") && !r.isInteger(e.row) ? "row: integer expected" : null != e.column && e.hasOwnProperty("column") && !r.isInteger(e.column) ? "column: integer expected" : null != e.type && e.hasOwnProperty("type") && !r.isString(e.type) ? "type: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.LintResult) return e;
                            var t = new o.api.LintResult;
                            return null != e.text && (t.text = String(e.text)), null != e.row && (t.row = 0 | e.row), null != e.column && (t.column = 0 | e.column), null != e.type && (t.type = String(e.type)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.text = "", n.row = 0, n.column = 0, n.type = ""), null != e.text && e.hasOwnProperty("text") && (n.text = e.text), null != e.row && e.hasOwnProperty("row") && (n.row = e.row), null != e.column && e.hasOwnProperty("column") && (n.column = e.column), null != e.type && e.hasOwnProperty("type") && (n.type = e.type), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.OK = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.OK; e.pos < r;) {
                                var a = e.uint32();
                                e.skipType(7 & a)
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null
                        }, r.fromObject = function(e) {
                            return e instanceof o.api.OK ? e : new o.api.OK
                        }, r.toObject = function() {
                            return {}
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.Move = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.oldPath = "", i.prototype.newPath = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.oldPath && Object.hasOwnProperty.call(e, "oldPath") && t.uint32(10).string(e.oldPath), null != e.newPath && Object.hasOwnProperty.call(e, "newPath") && t.uint32(18).string(e.newPath), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Move; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.oldPath = e.string();
                                        break;
                                    case 2:
                                        i.newPath = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.oldPath && e.hasOwnProperty("oldPath") && !r.isString(e.oldPath) ? "oldPath: string expected" : null != e.newPath && e.hasOwnProperty("newPath") && !r.isString(e.newPath) ? "newPath: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Move) return e;
                            var t = new o.api.Move;
                            return null != e.oldPath && (t.oldPath = String(e.oldPath)), null != e.newPath && (t.newPath = String(e.newPath)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.oldPath = "", n.newPath = ""), null != e.oldPath && e.hasOwnProperty("oldPath") && (n.oldPath = e.oldPath), null != e.newPath && e.hasOwnProperty("newPath") && (n.newPath = e.newPath), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.Files = function() {
                        function i(e) {
                            if (this.files = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.files = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.files && e.files.length)
                                for (var r = 0; r < e.files.length; ++r) o.api.File.encode(e.files[r], t.uint32(10).fork()).ldelim();
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Files; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.files && i.files.length || (i.files = []), i.files.push(o.api.File.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.files && e.hasOwnProperty("files")) {
                                if (!Array.isArray(e.files)) return "files: array expected";
                                for (var t = 0; t < e.files.length; ++t) {
                                    var n = o.api.File.verify(e.files[t]);
                                    if (n) return "files." + n
                                }
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Files) return e;
                            var t = new o.api.Files;
                            if (e.files) {
                                if (!Array.isArray(e.files)) throw TypeError(".api.Files.files: array expected");
                                t.files = [];
                                for (var n = 0; n < e.files.length; ++n) {
                                    if ("object" !== typeof e.files[n]) throw TypeError(".api.Files.files: object expected");
                                    t.files[n] = o.api.File.fromObject(e.files[n])
                                }
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.files = []), e.files && e.files.length) {
                                n.files = [];
                                for (var r = 0; r < e.files.length; ++r) n.files[r] = o.api.File.toObject(e.files[r], t)
                            }
                            return n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.StatResult = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.exists = !1, i.prototype.type = 0, i.prototype.size = r.Long ? r.Long.fromBits(0, 0, !1) : 0, i.prototype.fileMode = "", i.prototype.modTime = r.Long ? r.Long.fromBits(0, 0, !1) : 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.exists && Object.hasOwnProperty.call(e, "exists") && t.uint32(8).bool(e.exists), null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(16).int32(e.type), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(24).int64(e.size), null != e.fileMode && Object.hasOwnProperty.call(e, "fileMode") && t.uint32(34).string(e.fileMode), null != e.modTime && Object.hasOwnProperty.call(e, "modTime") && t.uint32(40).int64(e.modTime), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.StatResult; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.exists = e.bool();
                                        break;
                                    case 2:
                                        i.type = e.int32();
                                        break;
                                    case 3:
                                        i.size = e.int64();
                                        break;
                                    case 4:
                                        i.fileMode = e.string();
                                        break;
                                    case 5:
                                        i.modTime = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.exists && e.hasOwnProperty("exists") && "boolean" !== typeof e.exists) return "exists: boolean expected";
                            if (null != e.type && e.hasOwnProperty("type")) switch (e.type) {
                                default: return "type: enum value expected";
                                case 0:
                                        case 1:
                            }
                            return null == e.size || !e.hasOwnProperty("size") || r.isInteger(e.size) || e.size && r.isInteger(e.size.low) && r.isInteger(e.size.high) ? null != e.fileMode && e.hasOwnProperty("fileMode") && !r.isString(e.fileMode) ? "fileMode: string expected" : null == e.modTime || !e.hasOwnProperty("modTime") || r.isInteger(e.modTime) || e.modTime && r.isInteger(e.modTime.low) && r.isInteger(e.modTime.high) ? null : "modTime: integer|Long expected" : "size: integer|Long expected"
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.StatResult) return e;
                            var t = new o.api.StatResult;
                            switch (null != e.exists && (t.exists = Boolean(e.exists)), e.type) {
                                case "REGULAR":
                                case 0:
                                    t.type = 0;
                                    break;
                                case "DIRECTORY":
                                case 1:
                                    t.type = 1
                            }
                            return null != e.size && (r.Long ? (t.size = r.Long.fromValue(e.size)).unsigned = !1 : "string" === typeof e.size ? t.size = parseInt(e.size, 10) : "number" === typeof e.size ? t.size = e.size : "object" === typeof e.size && (t.size = new r.LongBits(e.size.low >>> 0, e.size.high >>> 0).toNumber())), null != e.fileMode && (t.fileMode = String(e.fileMode)), null != e.modTime && (r.Long ? (t.modTime = r.Long.fromValue(e.modTime)).unsigned = !1 : "string" === typeof e.modTime ? t.modTime = parseInt(e.modTime, 10) : "number" === typeof e.modTime ? t.modTime = e.modTime : "object" === typeof e.modTime && (t.modTime = new r.LongBits(e.modTime.low >>> 0, e.modTime.high >>> 0).toNumber())), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if (t.defaults) {
                                if (n.exists = !1, n.type = t.enums === String ? "REGULAR" : 0, r.Long) {
                                    var i = new r.Long(0, 0, !1);
                                    n.size = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i
                                } else n.size = t.longs === String ? "0" : 0;
                                n.fileMode = "", r.Long ? (i = new r.Long(0, 0, !1), n.modTime = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i) : n.modTime = t.longs === String ? "0" : 0
                            }
                            return null != e.exists && e.hasOwnProperty("exists") && (n.exists = e.exists), null != e.type && e.hasOwnProperty("type") && (n.type = t.enums === String ? o.api.File.Type[e.type] : e.type), null != e.size && e.hasOwnProperty("size") && ("number" === typeof e.size ? n.size = t.longs === String ? String(e.size) : e.size : n.size = t.longs === String ? r.Long.prototype.toString.call(e.size) : t.longs === Number ? new r.LongBits(e.size.low >>> 0, e.size.high >>> 0).toNumber() : e.size), null != e.fileMode && e.hasOwnProperty("fileMode") && (n.fileMode = e.fileMode), null != e.modTime && e.hasOwnProperty("modTime") && ("number" === typeof e.modTime ? n.modTime = t.longs === String ? String(e.modTime) : e.modTime : n.modTime = t.longs === String ? r.Long.prototype.toString.call(e.modTime) : t.longs === Number ? new r.LongBits(e.modTime.low >>> 0, e.modTime.high >>> 0).toNumber() : e.modTime), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.File = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.path = "", i.prototype.type = 0, i.prototype.content = r.newBuffer([]), i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.path && Object.hasOwnProperty.call(e, "path") && t.uint32(10).string(e.path), null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(16).int32(e.type), null != e.content && Object.hasOwnProperty.call(e, "content") && t.uint32(26).bytes(e.content), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.File; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.path = e.string();
                                        break;
                                    case 2:
                                        i.type = e.int32();
                                        break;
                                    case 3:
                                        i.content = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.path && e.hasOwnProperty("path") && !r.isString(e.path)) return "path: string expected";
                            if (null != e.type && e.hasOwnProperty("type")) switch (e.type) {
                                default: return "type: enum value expected";
                                case 0:
                                        case 1:
                            }
                            return null != e.content && e.hasOwnProperty("content") && !(e.content && "number" === typeof e.content.length || r.isString(e.content)) ? "content: buffer expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.File) return e;
                            var t = new o.api.File;
                            switch (null != e.path && (t.path = String(e.path)), e.type) {
                                case "REGULAR":
                                case 0:
                                    t.type = 0;
                                    break;
                                case "DIRECTORY":
                                case 1:
                                    t.type = 1
                            }
                            return null != e.content && ("string" === typeof e.content ? r.base64.decode(e.content, t.content = r.newBuffer(r.base64.length(e.content)), 0) : e.content.length && (t.content = e.content)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.path = "", n.type = t.enums === String ? "REGULAR" : 0, t.bytes === String ? n.content = "" : (n.content = [], t.bytes !== Array && (n.content = r.newBuffer(n.content)))), null != e.path && e.hasOwnProperty("path") && (n.path = e.path), null != e.type && e.hasOwnProperty("type") && (n.type = t.enums === String ? o.api.File.Type[e.type] : e.type), null != e.content && e.hasOwnProperty("content") && (n.content = t.bytes === String ? r.base64.encode(e.content, 0, e.content.length) : t.bytes === Array ? Array.prototype.slice.call(e.content) : e.content), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i.Type = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "REGULAR"] = 0, t[e[1] = "DIRECTORY"] = 1, t
                        }(), i
                    }(), i.Transfer = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.id = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(10).string(e.id), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Transfer; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.id = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.id && e.hasOwnProperty("id") && !r.isString(e.id) ? "id: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Transfer) return e;
                            var t = new o.api.Transfer;
                            return null != e.id && (t.id = String(e.id)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.id = ""), null != e.id && e.hasOwnProperty("id") && (n.id = e.id), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.TransferStart = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.path = "", i.prototype.size = r.Long ? r.Long.fromBits(0, 0, !1) : 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.path && Object.hasOwnProperty.call(e, "path") && t.uint32(10).string(e.path), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(16).int64(e.size), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.TransferStart; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.path = e.string();
                                        break;
                                    case 2:
                                        i.size = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.path && e.hasOwnProperty("path") && !r.isString(e.path) ? "path: string expected" : null == e.size || !e.hasOwnProperty("size") || r.isInteger(e.size) || e.size && r.isInteger(e.size.low) && r.isInteger(e.size.high) ? null : "size: integer|Long expected"
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.TransferStart) return e;
                            var t = new o.api.TransferStart;
                            return null != e.path && (t.path = String(e.path)), null != e.size && (r.Long ? (t.size = r.Long.fromValue(e.size)).unsigned = !1 : "string" === typeof e.size ? t.size = parseInt(e.size, 10) : "number" === typeof e.size ? t.size = e.size : "object" === typeof e.size && (t.size = new r.LongBits(e.size.low >>> 0, e.size.high >>> 0).toNumber())), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if (t.defaults)
                                if (n.path = "", r.Long) {
                                    var o = new r.Long(0, 0, !1);
                                    n.size = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                                } else n.size = t.longs === String ? "0" : 0;
                            return null != e.path && e.hasOwnProperty("path") && (n.path = e.path), null != e.size && e.hasOwnProperty("size") && ("number" === typeof e.size ? n.size = t.longs === String ? String(e.size) : e.size : n.size = t.longs === String ? r.Long.prototype.toString.call(e.size) : t.longs === Number ? new r.LongBits(e.size.low >>> 0, e.size.high >>> 0).toNumber() : e.size), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.TransferChunk = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.id = "", i.prototype.content = r.newBuffer([]), i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(10).string(e.id), null != e.content && Object.hasOwnProperty.call(e, "content") && t.uint32(18).bytes(e.content), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.TransferChunk; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.id = e.string();
                                        break;
                                    case 2:
                                        i.content = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.id && e.hasOwnProperty("id") && !r.isString(e.id) ? "id: string expected" : null != e.content && e.hasOwnProperty("content") && !(e.content && "number" === typeof e.content.length || r.isString(e.content)) ? "content: buffer expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.TransferChunk) return e;
                            var t = new o.api.TransferChunk;
                            return null != e.id && (t.id = String(e.id)), null != e.content && ("string" === typeof e.content ? r.base64.decode(e.content, t.content = r.newBuffer(r.base64.length(e.content)), 0) : e.content.length && (t.content = e.content)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.id = "", t.bytes === String ? n.content = "" : (n.content = [], t.bytes !== Array && (n.content = r.newBuffer(n.content)))), null != e.id && e.hasOwnProperty("id") && (n.id = e.id), null != e.content && e.hasOwnProperty("content") && (n.content = t.bytes === String ? r.base64.encode(e.content, 0, e.content.length) : t.bytes === Array ? Array.prototype.slice.call(e.content) : e.content), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.TransferComplete = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.id = "", i.prototype.crc32 = 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(10).string(e.id), null != e.crc32 && Object.hasOwnProperty.call(e, "crc32") && t.uint32(16).uint32(e.crc32), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.TransferComplete; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.id = e.string();
                                        break;
                                    case 2:
                                        i.crc32 = e.uint32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.id && e.hasOwnProperty("id") && !r.isString(e.id) ? "id: string expected" : null != e.crc32 && e.hasOwnProperty("crc32") && !r.isInteger(e.crc32) ? "crc32: integer expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.TransferComplete) return e;
                            var t = new o.api.TransferComplete;
                            return null != e.id && (t.id = String(e.id)), null != e.crc32 && (t.crc32 = e.crc32 >>> 0), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.id = "", n.crc32 = 0), null != e.id && e.hasOwnProperty("id") && (n.id = e.id), null != e.crc32 && e.hasOwnProperty("crc32") && (n.crc32 = e.crc32), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.Clear = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Clear; e.pos < r;) {
                                var a = e.uint32();
                                e.skipType(7 & a)
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null
                        }, r.fromObject = function(e) {
                            return e instanceof o.api.Clear ? e : new o.api.Clear
                        }, r.toObject = function() {
                            return {}
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.Toast = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.text = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.text && Object.hasOwnProperty.call(e, "text") && t.uint32(10).string(e.text), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Toast; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.text = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.text && e.hasOwnProperty("text") && !r.isString(e.text) ? "text: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Toast) return e;
                            var t = new o.api.Toast;
                            return null != e.text && (t.text = String(e.text)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.text = ""), null != e.text && e.hasOwnProperty("text") && (n.text = e.text), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.ProtocolError = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.text = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.text && Object.hasOwnProperty.call(e, "text") && t.uint32(10).string(e.text), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.ProtocolError; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.text = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.text && e.hasOwnProperty("text") && !r.isString(e.text) ? "text: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.ProtocolError) return e;
                            var t = new o.api.ProtocolError;
                            return null != e.text && (t.text = String(e.text)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.text = ""), null != e.text && e.hasOwnProperty("text") && (n.text = e.text), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.Redirect = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.url = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.url && Object.hasOwnProperty.call(e, "url") && t.uint32(10).string(e.url), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Redirect; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.url = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.url && e.hasOwnProperty("url") && !r.isString(e.url) ? "url: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Redirect) return e;
                            var t = new o.api.Redirect;
                            return null != e.url && (t.url = String(e.url)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.url = ""), null != e.url && e.hasOwnProperty("url") && (n.url = e.url), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.AlwaysOn = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.enable = !1, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.enable && Object.hasOwnProperty.call(e, "enable") && t.uint32(8).bool(e.enable), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.AlwaysOn; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.enable = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.enable && e.hasOwnProperty("enable") && "boolean" !== typeof e.enable ? "enable: boolean expected" : null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.AlwaysOn) return e;
                            var t = new o.api.AlwaysOn;
                            return null != e.enable && (t.enable = Boolean(e.enable)), t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.enable = !1), null != e.enable && e.hasOwnProperty("enable") && (n.enable = e.enable), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.RunMain = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.runMode = 0, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.runMode && Object.hasOwnProperty.call(e, "runMode") && t.uint32(8).int32(e.runMode), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.RunMain; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.runMode = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.runMode && e.hasOwnProperty("runMode")) switch (e.runMode) {
                                default: return "runMode: enum value expected";
                                case 0:
                                        case 1:
                            }
                            return null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.RunMain) return e;
                            var t = new o.api.RunMain;
                            switch (e.runMode) {
                                case "RUN":
                                case 0:
                                    t.runMode = 0;
                                    break;
                                case "RECORD":
                                case 1:
                                    t.runMode = 1
                            }
                            return t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.runMode = t.enums === String ? "RUN" : 0), null != e.runMode && e.hasOwnProperty("runMode") && (n.runMode = t.enums === String ? o.api.RunMain.RunMode[e.runMode] : e.runMode), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r.RunMode = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "RUN"] = 0, t[e[1] = "RECORD"] = 1, t
                        }(), r
                    }(), i.OpenChannel = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.service = "", i.prototype.name = "", i.prototype.action = 0, i.prototype.id = 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.service && Object.hasOwnProperty.call(e, "service") && t.uint32(10).string(e.service), null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(18).string(e.name), null != e.action && Object.hasOwnProperty.call(e, "action") && t.uint32(24).int32(e.action), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(32).int32(e.id), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.OpenChannel; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.service = e.string();
                                        break;
                                    case 2:
                                        i.name = e.string();
                                        break;
                                    case 3:
                                        i.action = e.int32();
                                        break;
                                    case 4:
                                        i.id = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.service && e.hasOwnProperty("service") && !r.isString(e.service)) return "service: string expected";
                            if (null != e.name && e.hasOwnProperty("name") && !r.isString(e.name)) return "name: string expected";
                            if (null != e.action && e.hasOwnProperty("action")) switch (e.action) {
                                default: return "action: enum value expected";
                                case 0:
                                        case 1:
                                        case 2:
                            }
                            return null != e.id && e.hasOwnProperty("id") && !r.isInteger(e.id) ? "id: integer expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.OpenChannel) return e;
                            var t = new o.api.OpenChannel;
                            switch (null != e.service && (t.service = String(e.service)), null != e.name && (t.name = String(e.name)), e.action) {
                                case "CREATE":
                                case 0:
                                    t.action = 0;
                                    break;
                                case "ATTACH":
                                case 1:
                                    t.action = 1;
                                    break;
                                case "ATTACH_OR_CREATE":
                                case 2:
                                    t.action = 2
                            }
                            return null != e.id && (t.id = 0 | e.id), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.service = "", n.name = "", n.action = t.enums === String ? "CREATE" : 0, n.id = 0), null != e.service && e.hasOwnProperty("service") && (n.service = e.service), null != e.name && e.hasOwnProperty("name") && (n.name = e.name), null != e.action && e.hasOwnProperty("action") && (n.action = t.enums === String ? o.api.OpenChannel.Action[e.action] : e.action), null != e.id && e.hasOwnProperty("id") && (n.id = e.id), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i.Action = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "CREATE"] = 0, t[e[1] = "ATTACH"] = 1, t[e[2] = "ATTACH_OR_CREATE"] = 2, t
                        }(), i
                    }(), i.OpenChannelRes = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.id = 0, i.prototype.state = 0, i.prototype.error = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(8).int32(e.id), null != e.state && Object.hasOwnProperty.call(e, "state") && t.uint32(16).int32(e.state), null != e.error && Object.hasOwnProperty.call(e, "error") && t.uint32(26).string(e.error), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.OpenChannelRes; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.id = e.int32();
                                        break;
                                    case 2:
                                        i.state = e.int32();
                                        break;
                                    case 3:
                                        i.error = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.id && e.hasOwnProperty("id") && !r.isInteger(e.id)) return "id: integer expected";
                            if (null != e.state && e.hasOwnProperty("state")) switch (e.state) {
                                default: return "state: enum value expected";
                                case 0:
                                        case 1:
                                        case 2:
                            }
                            return null != e.error && e.hasOwnProperty("error") && !r.isString(e.error) ? "error: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.OpenChannelRes) return e;
                            var t = new o.api.OpenChannelRes;
                            switch (null != e.id && (t.id = 0 | e.id), e.state) {
                                case "CREATED":
                                case 0:
                                    t.state = 0;
                                    break;
                                case "ATTACHED":
                                case 1:
                                    t.state = 1;
                                    break;
                                case "ERROR":
                                case 2:
                                    t.state = 2
                            }
                            return null != e.error && (t.error = String(e.error)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.id = 0, n.state = t.enums === String ? "CREATED" : 0, n.error = ""), null != e.id && e.hasOwnProperty("id") && (n.id = e.id), null != e.state && e.hasOwnProperty("state") && (n.state = t.enums === String ? o.api.OpenChannelRes.State[e.state] : e.state), null != e.error && e.hasOwnProperty("error") && (n.error = e.error), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i.State = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "CREATED"] = 0, t[e[1] = "ATTACHED"] = 1, t[e[2] = "ERROR"] = 2, t
                        }(), i
                    }(), i.CloseChannel = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.id = 0, i.prototype.action = 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(8).int32(e.id), null != e.action && Object.hasOwnProperty.call(e, "action") && t.uint32(16).int32(e.action), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.CloseChannel; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.id = e.int32();
                                        break;
                                    case 2:
                                        i.action = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.id && e.hasOwnProperty("id") && !r.isInteger(e.id)) return "id: integer expected";
                            if (null != e.action && e.hasOwnProperty("action")) switch (e.action) {
                                default: return "action: enum value expected";
                                case 0:
                                        case 1:
                                        case 2:
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.CloseChannel) return e;
                            var t = new o.api.CloseChannel;
                            switch (null != e.id && (t.id = 0 | e.id), e.action) {
                                case "DISCONNECT":
                                case 0:
                                    t.action = 0;
                                    break;
                                case "TRY_CLOSE":
                                case 1:
                                    t.action = 1;
                                    break;
                                case "CLOSE":
                                case 2:
                                    t.action = 2
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.id = 0, n.action = t.enums === String ? "DISCONNECT" : 0), null != e.id && e.hasOwnProperty("id") && (n.id = e.id), null != e.action && e.hasOwnProperty("action") && (n.action = t.enums === String ? o.api.CloseChannel.Action[e.action] : e.action), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i.Action = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "DISCONNECT"] = 0, t[e[1] = "TRY_CLOSE"] = 1, t[e[2] = "CLOSE"] = 2, t
                        }(), i
                    }(), i.CloseChannelRes = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.id = 0, i.prototype.status = 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(8).int32(e.id), null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(16).int32(e.status), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.CloseChannelRes; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.id = e.int32();
                                        break;
                                    case 2:
                                        i.status = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.id && e.hasOwnProperty("id") && !r.isInteger(e.id)) return "id: integer expected";
                            if (null != e.status && e.hasOwnProperty("status")) switch (e.status) {
                                default: return "status: enum value expected";
                                case 0:
                                        case 1:
                                        case 2:
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.CloseChannelRes) return e;
                            var t = new o.api.CloseChannelRes;
                            switch (null != e.id && (t.id = 0 | e.id), e.status) {
                                case "DISCONNECT":
                                case 0:
                                    t.status = 0;
                                    break;
                                case "CLOSE":
                                case 1:
                                    t.status = 1;
                                    break;
                                case "NOTHING":
                                case 2:
                                    t.status = 2
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.id = 0, n.status = t.enums === String ? "DISCONNECT" : 0), null != e.id && e.hasOwnProperty("id") && (n.id = e.id), null != e.status && e.hasOwnProperty("status") && (n.status = t.enums === String ? o.api.CloseChannelRes.Status[e.status] : e.status), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i.Status = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "DISCONNECT"] = 0, t[e[1] = "CLOSE"] = 1, t[e[2] = "NOTHING"] = 2, t
                        }(), i
                    }(), i.ContainerState = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.state = 0, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.state && Object.hasOwnProperty.call(e, "state") && t.uint32(8).int32(e.state), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.ContainerState; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.state = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.state && e.hasOwnProperty("state")) switch (e.state) {
                                default: return "state: enum value expected";
                                case 0:
                                        case 1:
                            }
                            return null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.ContainerState) return e;
                            var t = new o.api.ContainerState;
                            switch (e.state) {
                                case "SLEEP":
                                case 0:
                                    t.state = 0;
                                    break;
                                case "READY":
                                case 1:
                                    t.state = 1
                            }
                            return t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.state = t.enums === String ? "SLEEP" : 0), null != e.state && e.hasOwnProperty("state") && (n.state = t.enums === String ? o.api.ContainerState.State[e.state] : e.state), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r.State = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "SLEEP"] = 0, t[e[1] = "READY"] = 1, t
                        }(), r
                    }(), i.PortOpen = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.forwarded = !1, i.prototype.port = 0, i.prototype.address = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.forwarded && Object.hasOwnProperty.call(e, "forwarded") && t.uint32(8).bool(e.forwarded), null != e.port && Object.hasOwnProperty.call(e, "port") && t.uint32(16).uint32(e.port), null != e.address && Object.hasOwnProperty.call(e, "address") && t.uint32(26).string(e.address), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.PortOpen; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.forwarded = e.bool();
                                        break;
                                    case 2:
                                        i.port = e.uint32();
                                        break;
                                    case 3:
                                        i.address = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.forwarded && e.hasOwnProperty("forwarded") && "boolean" !== typeof e.forwarded ? "forwarded: boolean expected" : null != e.port && e.hasOwnProperty("port") && !r.isInteger(e.port) ? "port: integer expected" : null != e.address && e.hasOwnProperty("address") && !r.isString(e.address) ? "address: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.PortOpen) return e;
                            var t = new o.api.PortOpen;
                            return null != e.forwarded && (t.forwarded = Boolean(e.forwarded)), null != e.port && (t.port = e.port >>> 0), null != e.address && (t.address = String(e.address)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.forwarded = !1, n.port = 0, n.address = ""), null != e.forwarded && e.hasOwnProperty("forwarded") && (n.forwarded = e.forwarded), null != e.port && e.hasOwnProperty("port") && (n.port = e.port), null != e.address && e.hasOwnProperty("address") && (n.address = e.address), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.OTFetchRequest = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.versionFrom = 0, i.prototype.versionTo = 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.versionFrom && Object.hasOwnProperty.call(e, "versionFrom") && t.uint32(8).uint32(e.versionFrom), null != e.versionTo && Object.hasOwnProperty.call(e, "versionTo") && t.uint32(16).uint32(e.versionTo), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.OTFetchRequest; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.versionFrom = e.uint32();
                                        break;
                                    case 2:
                                        i.versionTo = e.uint32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.versionFrom && e.hasOwnProperty("versionFrom") && !r.isInteger(e.versionFrom) ? "versionFrom: integer expected" : null != e.versionTo && e.hasOwnProperty("versionTo") && !r.isInteger(e.versionTo) ? "versionTo: integer expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.OTFetchRequest) return e;
                            var t = new o.api.OTFetchRequest;
                            return null != e.versionFrom && (t.versionFrom = e.versionFrom >>> 0), null != e.versionTo && (t.versionTo = e.versionTo >>> 0), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.versionFrom = 0, n.versionTo = 0), null != e.versionFrom && e.hasOwnProperty("versionFrom") && (n.versionFrom = e.versionFrom), null != e.versionTo && e.hasOwnProperty("versionTo") && (n.versionTo = e.versionTo), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.OTFetchResponse = function() {
                        function i(e) {
                            if (this.packets = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.packets = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.packets && e.packets.length)
                                for (var r = 0; r < e.packets.length; ++r) o.api.OTPacket.encode(e.packets[r], t.uint32(10).fork()).ldelim();
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.OTFetchResponse; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.packets && i.packets.length || (i.packets = []), i.packets.push(o.api.OTPacket.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.packets && e.hasOwnProperty("packets")) {
                                if (!Array.isArray(e.packets)) return "packets: array expected";
                                for (var t = 0; t < e.packets.length; ++t) {
                                    var n = o.api.OTPacket.verify(e.packets[t]);
                                    if (n) return "packets." + n
                                }
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.OTFetchResponse) return e;
                            var t = new o.api.OTFetchResponse;
                            if (e.packets) {
                                if (!Array.isArray(e.packets)) throw TypeError(".api.OTFetchResponse.packets: array expected");
                                t.packets = [];
                                for (var n = 0; n < e.packets.length; ++n) {
                                    if ("object" !== typeof e.packets[n]) throw TypeError(".api.OTFetchResponse.packets: object expected");
                                    t.packets[n] = o.api.OTPacket.fromObject(e.packets[n])
                                }
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.packets = []), e.packets && e.packets.length) {
                                n.packets = [];
                                for (var r = 0; r < e.packets.length; ++r) n.packets[r] = o.api.OTPacket.toObject(e.packets[r], t)
                            }
                            return n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.OTTransformSelectionRequest = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.indexStart = 0, i.prototype.indexEnd = 0, i.prototype.versionFrom = 0, i.prototype.versionTo = 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.indexStart && Object.hasOwnProperty.call(e, "indexStart") && t.uint32(8).uint32(e.indexStart), null != e.indexEnd && Object.hasOwnProperty.call(e, "indexEnd") && t.uint32(16).uint32(e.indexEnd), null != e.versionFrom && Object.hasOwnProperty.call(e, "versionFrom") && t.uint32(24).uint32(e.versionFrom), null != e.versionTo && Object.hasOwnProperty.call(e, "versionTo") && t.uint32(32).uint32(e.versionTo), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.OTTransformSelectionRequest; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.indexStart = e.uint32();
                                        break;
                                    case 2:
                                        i.indexEnd = e.uint32();
                                        break;
                                    case 3:
                                        i.versionFrom = e.uint32();
                                        break;
                                    case 4:
                                        i.versionTo = e.uint32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.indexStart && e.hasOwnProperty("indexStart") && !r.isInteger(e.indexStart) ? "indexStart: integer expected" : null != e.indexEnd && e.hasOwnProperty("indexEnd") && !r.isInteger(e.indexEnd) ? "indexEnd: integer expected" : null != e.versionFrom && e.hasOwnProperty("versionFrom") && !r.isInteger(e.versionFrom) ? "versionFrom: integer expected" : null != e.versionTo && e.hasOwnProperty("versionTo") && !r.isInteger(e.versionTo) ? "versionTo: integer expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.OTTransformSelectionRequest) return e;
                            var t = new o.api.OTTransformSelectionRequest;
                            return null != e.indexStart && (t.indexStart = e.indexStart >>> 0), null != e.indexEnd && (t.indexEnd = e.indexEnd >>> 0), null != e.versionFrom && (t.versionFrom = e.versionFrom >>> 0), null != e.versionTo && (t.versionTo = e.versionTo >>> 0), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.indexStart = 0, n.indexEnd = 0, n.versionFrom = 0, n.versionTo = 0), null != e.indexStart && e.hasOwnProperty("indexStart") && (n.indexStart = e.indexStart), null != e.indexEnd && e.hasOwnProperty("indexEnd") && (n.indexEnd = e.indexEnd), null != e.versionFrom && e.hasOwnProperty("versionFrom") && (n.versionFrom = e.versionFrom), null != e.versionTo && e.hasOwnProperty("versionTo") && (n.versionTo = e.versionTo), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.OTTransformSelectionResponse = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.indexStart = 0, i.prototype.indexEnd = 0, i.prototype.version = 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.indexStart && Object.hasOwnProperty.call(e, "indexStart") && t.uint32(8).uint32(e.indexStart), null != e.indexEnd && Object.hasOwnProperty.call(e, "indexEnd") && t.uint32(16).uint32(e.indexEnd), null != e.version && Object.hasOwnProperty.call(e, "version") && t.uint32(24).uint32(e.version), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.OTTransformSelectionResponse; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.indexStart = e.uint32();
                                        break;
                                    case 2:
                                        i.indexEnd = e.uint32();
                                        break;
                                    case 3:
                                        i.version = e.uint32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.indexStart && e.hasOwnProperty("indexStart") && !r.isInteger(e.indexStart) ? "indexStart: integer expected" : null != e.indexEnd && e.hasOwnProperty("indexEnd") && !r.isInteger(e.indexEnd) ? "indexEnd: integer expected" : null != e.version && e.hasOwnProperty("version") && !r.isInteger(e.version) ? "version: integer expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.OTTransformSelectionResponse) return e;
                            var t = new o.api.OTTransformSelectionResponse;
                            return null != e.indexStart && (t.indexStart = e.indexStart >>> 0), null != e.indexEnd && (t.indexEnd = e.indexEnd >>> 0), null != e.version && (t.version = e.version >>> 0), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.indexStart = 0, n.indexEnd = 0, n.version = 0), null != e.indexStart && e.hasOwnProperty("indexStart") && (n.indexStart = e.indexStart), null != e.indexEnd && e.hasOwnProperty("indexEnd") && (n.indexEnd = e.indexEnd), null != e.version && e.hasOwnProperty("version") && (n.version = e.version), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.OTPacket = function() {
                        function i(e) {
                            if (this.ops = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.spookyVersion = 0, i.prototype.version = 0, i.prototype.ops = r.emptyArray, i.prototype.crc32 = 0, i.prototype.committed = null, i.prototype.nonce = 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.spookyVersion && Object.hasOwnProperty.call(e, "spookyVersion") && t.uint32(8).uint32(e.spookyVersion), null != e.ops && e.ops.length)
                                for (var r = 0; r < e.ops.length; ++r) o.api.OTRuneTransformOp.encode(e.ops[r], t.uint32(18).fork()).ldelim();
                            return null != e.crc32 && Object.hasOwnProperty.call(e, "crc32") && t.uint32(24).uint32(e.crc32), null != e.committed && Object.hasOwnProperty.call(e, "committed") && o.google.protobuf.Timestamp.encode(e.committed, t.uint32(34).fork()).ldelim(), null != e.version && Object.hasOwnProperty.call(e, "version") && t.uint32(40).uint32(e.version), null != e.nonce && Object.hasOwnProperty.call(e, "nonce") && t.uint32(48).uint32(e.nonce), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.OTPacket; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.spookyVersion = e.uint32();
                                        break;
                                    case 5:
                                        i.version = e.uint32();
                                        break;
                                    case 2:
                                        i.ops && i.ops.length || (i.ops = []), i.ops.push(o.api.OTRuneTransformOp.decode(e, e.uint32()));
                                        break;
                                    case 3:
                                        i.crc32 = e.uint32();
                                        break;
                                    case 4:
                                        i.committed = o.google.protobuf.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        i.nonce = e.uint32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.spookyVersion && e.hasOwnProperty("spookyVersion") && !r.isInteger(e.spookyVersion)) return "spookyVersion: integer expected";
                            if (null != e.version && e.hasOwnProperty("version") && !r.isInteger(e.version)) return "version: integer expected";
                            if (null != e.ops && e.hasOwnProperty("ops")) {
                                if (!Array.isArray(e.ops)) return "ops: array expected";
                                for (var t = 0; t < e.ops.length; ++t)
                                    if (n = o.api.OTRuneTransformOp.verify(e.ops[t])) return "ops." + n
                            }
                            return null != e.crc32 && e.hasOwnProperty("crc32") && !r.isInteger(e.crc32) ? "crc32: integer expected" : null != e.committed && e.hasOwnProperty("committed") && (n = o.google.protobuf.Timestamp.verify(e.committed)) ? "committed." + n : null != e.nonce && e.hasOwnProperty("nonce") && !r.isInteger(e.nonce) ? "nonce: integer expected" : null;
                            var n
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.OTPacket) return e;
                            var t = new o.api.OTPacket;
                            if (null != e.spookyVersion && (t.spookyVersion = e.spookyVersion >>> 0), null != e.version && (t.version = e.version >>> 0), e.ops) {
                                if (!Array.isArray(e.ops)) throw TypeError(".api.OTPacket.ops: array expected");
                                t.ops = [];
                                for (var n = 0; n < e.ops.length; ++n) {
                                    if ("object" !== typeof e.ops[n]) throw TypeError(".api.OTPacket.ops: object expected");
                                    t.ops[n] = o.api.OTRuneTransformOp.fromObject(e.ops[n])
                                }
                            }
                            if (null != e.crc32 && (t.crc32 = e.crc32 >>> 0), null != e.committed) {
                                if ("object" !== typeof e.committed) throw TypeError(".api.OTPacket.committed: object expected");
                                t.committed = o.google.protobuf.Timestamp.fromObject(e.committed)
                            }
                            return null != e.nonce && (t.nonce = e.nonce >>> 0), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.ops = []), t.defaults && (n.spookyVersion = 0, n.crc32 = 0, n.committed = null, n.version = 0, n.nonce = 0), null != e.spookyVersion && e.hasOwnProperty("spookyVersion") && (n.spookyVersion = e.spookyVersion), e.ops && e.ops.length) {
                                n.ops = [];
                                for (var r = 0; r < e.ops.length; ++r) n.ops[r] = o.api.OTRuneTransformOp.toObject(e.ops[r], t)
                            }
                            return null != e.crc32 && e.hasOwnProperty("crc32") && (n.crc32 = e.crc32), null != e.committed && e.hasOwnProperty("committed") && (n.committed = o.google.protobuf.Timestamp.toObject(e.committed, t)), null != e.version && e.hasOwnProperty("version") && (n.version = e.version), null != e.nonce && e.hasOwnProperty("nonce") && (n.nonce = e.nonce), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.OTRuneTransformOp = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        var a;
                        return i.prototype.skip = null, i.prototype.delete = null, i.prototype.insert = null, Object.defineProperty(i.prototype, "op", {
                            get: r.oneOfGetter(a = ["skip", "delete", "insert"]),
                            set: r.oneOfSetter(a)
                        }), i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.skip && Object.hasOwnProperty.call(e, "skip") && t.uint32(8).uint32(e.skip), null != e.delete && Object.hasOwnProperty.call(e, "delete") && t.uint32(16).uint32(e.delete), null != e.insert && Object.hasOwnProperty.call(e, "insert") && t.uint32(26).string(e.insert), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.OTRuneTransformOp; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.skip = e.uint32();
                                        break;
                                    case 2:
                                        i.delete = e.uint32();
                                        break;
                                    case 3:
                                        i.insert = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            var t = {};
                            if (null != e.skip && e.hasOwnProperty("skip") && (t.op = 1, !r.isInteger(e.skip))) return "skip: integer expected";
                            if (null != e.delete && e.hasOwnProperty("delete")) {
                                if (1 === t.op) return "op: multiple values";
                                if (t.op = 1, !r.isInteger(e.delete)) return "delete: integer expected"
                            }
                            if (null != e.insert && e.hasOwnProperty("insert")) {
                                if (1 === t.op) return "op: multiple values";
                                if (t.op = 1, !r.isString(e.insert)) return "insert: string expected"
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.OTRuneTransformOp) return e;
                            var t = new o.api.OTRuneTransformOp;
                            return null != e.skip && (t.skip = e.skip >>> 0), null != e.delete && (t.delete = e.delete >>> 0), null != e.insert && (t.insert = String(e.insert)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return null != e.skip && e.hasOwnProperty("skip") && (n.skip = e.skip, t.oneofs && (n.op = "skip")), null != e.delete && e.hasOwnProperty("delete") && (n.delete = e.delete, t.oneofs && (n.op = "delete")), null != e.insert && e.hasOwnProperty("insert") && (n.insert = e.insert, t.oneofs && (n.op = "insert")), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.OTStatus = function() {
                        function i(e) {
                            if (this.cursors = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.contents = "", i.prototype.version = 0, i.prototype.linkedFile = null, i.prototype.cursors = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.contents && Object.hasOwnProperty.call(e, "contents") && t.uint32(10).string(e.contents), null != e.version && Object.hasOwnProperty.call(e, "version") && t.uint32(16).uint32(e.version), null != e.linkedFile && Object.hasOwnProperty.call(e, "linkedFile") && o.api.File.encode(e.linkedFile, t.uint32(26).fork()).ldelim(), null != e.cursors && e.cursors.length)
                                for (var r = 0; r < e.cursors.length; ++r) o.api.OTCursor.encode(e.cursors[r], t.uint32(34).fork()).ldelim();
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.OTStatus; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.contents = e.string();
                                        break;
                                    case 2:
                                        i.version = e.uint32();
                                        break;
                                    case 3:
                                        i.linkedFile = o.api.File.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        i.cursors && i.cursors.length || (i.cursors = []), i.cursors.push(o.api.OTCursor.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.contents && e.hasOwnProperty("contents") && !r.isString(e.contents)) return "contents: string expected";
                            if (null != e.version && e.hasOwnProperty("version") && !r.isInteger(e.version)) return "version: integer expected";
                            if (null != e.linkedFile && e.hasOwnProperty("linkedFile") && (n = o.api.File.verify(e.linkedFile))) return "linkedFile." + n;
                            if (null != e.cursors && e.hasOwnProperty("cursors")) {
                                if (!Array.isArray(e.cursors)) return "cursors: array expected";
                                for (var t = 0; t < e.cursors.length; ++t) {
                                    var n;
                                    if (n = o.api.OTCursor.verify(e.cursors[t])) return "cursors." + n
                                }
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.OTStatus) return e;
                            var t = new o.api.OTStatus;
                            if (null != e.contents && (t.contents = String(e.contents)), null != e.version && (t.version = e.version >>> 0), null != e.linkedFile) {
                                if ("object" !== typeof e.linkedFile) throw TypeError(".api.OTStatus.linkedFile: object expected");
                                t.linkedFile = o.api.File.fromObject(e.linkedFile)
                            }
                            if (e.cursors) {
                                if (!Array.isArray(e.cursors)) throw TypeError(".api.OTStatus.cursors: array expected");
                                t.cursors = [];
                                for (var n = 0; n < e.cursors.length; ++n) {
                                    if ("object" !== typeof e.cursors[n]) throw TypeError(".api.OTStatus.cursors: object expected");
                                    t.cursors[n] = o.api.OTCursor.fromObject(e.cursors[n])
                                }
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.cursors = []), t.defaults && (n.contents = "", n.version = 0, n.linkedFile = null), null != e.contents && e.hasOwnProperty("contents") && (n.contents = e.contents), null != e.version && e.hasOwnProperty("version") && (n.version = e.version), null != e.linkedFile && e.hasOwnProperty("linkedFile") && (n.linkedFile = o.api.File.toObject(e.linkedFile, t)), e.cursors && e.cursors.length) {
                                n.cursors = [];
                                for (var r = 0; r < e.cursors.length; ++r) n.cursors[r] = o.api.OTCursor.toObject(e.cursors[r], t)
                            }
                            return n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.OTCursor = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.position = 0, i.prototype.selectionStart = 0, i.prototype.selectionEnd = 0, i.prototype.user = null, i.prototype.id = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.position && Object.hasOwnProperty.call(e, "position") && t.uint32(8).uint32(e.position), null != e.selectionStart && Object.hasOwnProperty.call(e, "selectionStart") && t.uint32(16).uint32(e.selectionStart), null != e.selectionEnd && Object.hasOwnProperty.call(e, "selectionEnd") && t.uint32(24).uint32(e.selectionEnd), null != e.user && Object.hasOwnProperty.call(e, "user") && o.api.User.encode(e.user, t.uint32(34).fork()).ldelim(), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(42).string(e.id), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.OTCursor; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.position = e.uint32();
                                        break;
                                    case 2:
                                        i.selectionStart = e.uint32();
                                        break;
                                    case 3:
                                        i.selectionEnd = e.uint32();
                                        break;
                                    case 4:
                                        i.user = o.api.User.decode(e, e.uint32());
                                        break;
                                    case 5:
                                        i.id = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.position && e.hasOwnProperty("position") && !r.isInteger(e.position)) return "position: integer expected";
                            if (null != e.selectionStart && e.hasOwnProperty("selectionStart") && !r.isInteger(e.selectionStart)) return "selectionStart: integer expected";
                            if (null != e.selectionEnd && e.hasOwnProperty("selectionEnd") && !r.isInteger(e.selectionEnd)) return "selectionEnd: integer expected";
                            if (null != e.user && e.hasOwnProperty("user")) {
                                var t = o.api.User.verify(e.user);
                                if (t) return "user." + t
                            }
                            return null != e.id && e.hasOwnProperty("id") && !r.isString(e.id) ? "id: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.OTCursor) return e;
                            var t = new o.api.OTCursor;
                            if (null != e.position && (t.position = e.position >>> 0), null != e.selectionStart && (t.selectionStart = e.selectionStart >>> 0), null != e.selectionEnd && (t.selectionEnd = e.selectionEnd >>> 0), null != e.user) {
                                if ("object" !== typeof e.user) throw TypeError(".api.OTCursor.user: object expected");
                                t.user = o.api.User.fromObject(e.user)
                            }
                            return null != e.id && (t.id = String(e.id)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.position = 0, n.selectionStart = 0, n.selectionEnd = 0, n.user = null, n.id = ""), null != e.position && e.hasOwnProperty("position") && (n.position = e.position), null != e.selectionStart && e.hasOwnProperty("selectionStart") && (n.selectionStart = e.selectionStart), null != e.selectionEnd && e.hasOwnProperty("selectionEnd") && (n.selectionEnd = e.selectionEnd), null != e.user && e.hasOwnProperty("user") && (n.user = o.api.User.toObject(e.user, t)), null != e.id && e.hasOwnProperty("id") && (n.id = e.id), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.ChatMessage = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.username = "", i.prototype.text = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.username && Object.hasOwnProperty.call(e, "username") && t.uint32(10).string(e.username), null != e.text && Object.hasOwnProperty.call(e, "text") && t.uint32(18).string(e.text), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.ChatMessage; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.username = e.string();
                                        break;
                                    case 2:
                                        i.text = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.username && e.hasOwnProperty("username") && !r.isString(e.username) ? "username: string expected" : null != e.text && e.hasOwnProperty("text") && !r.isString(e.text) ? "text: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.ChatMessage) return e;
                            var t = new o.api.ChatMessage;
                            return null != e.username && (t.username = String(e.username)), null != e.text && (t.text = String(e.text)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.username = "", n.text = ""), null != e.username && e.hasOwnProperty("username") && (n.username = e.username), null != e.text && e.hasOwnProperty("text") && (n.text = e.text), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.ChatTyping = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.username = "", i.prototype.typing = !1, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.username && Object.hasOwnProperty.call(e, "username") && t.uint32(10).string(e.username), null != e.typing && Object.hasOwnProperty.call(e, "typing") && t.uint32(16).bool(e.typing), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.ChatTyping; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.username = e.string();
                                        break;
                                    case 2:
                                        i.typing = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.username && e.hasOwnProperty("username") && !r.isString(e.username) ? "username: string expected" : null != e.typing && e.hasOwnProperty("typing") && "boolean" !== typeof e.typing ? "typing: boolean expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.ChatTyping) return e;
                            var t = new o.api.ChatTyping;
                            return null != e.username && (t.username = String(e.username)), null != e.typing && (t.typing = Boolean(e.typing)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.username = "", n.typing = !1), null != e.username && e.hasOwnProperty("username") && (n.username = e.username), null != e.typing && e.hasOwnProperty("typing") && (n.typing = e.typing), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.User = function() {
                        function i(e) {
                            if (this.roles = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.id = 0, i.prototype.name = "", i.prototype.roles = r.emptyArray, i.prototype.session = 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(8).uint32(e.id), null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(18).string(e.name), null != e.roles && e.roles.length)
                                for (var r = 0; r < e.roles.length; ++r) t.uint32(26).string(e.roles[r]);
                            return null != e.session && Object.hasOwnProperty.call(e, "session") && t.uint32(32).int32(e.session), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.User; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.id = e.uint32();
                                        break;
                                    case 2:
                                        i.name = e.string();
                                        break;
                                    case 3:
                                        i.roles && i.roles.length || (i.roles = []), i.roles.push(e.string());
                                        break;
                                    case 4:
                                        i.session = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.id && e.hasOwnProperty("id") && !r.isInteger(e.id)) return "id: integer expected";
                            if (null != e.name && e.hasOwnProperty("name") && !r.isString(e.name)) return "name: string expected";
                            if (null != e.roles && e.hasOwnProperty("roles")) {
                                if (!Array.isArray(e.roles)) return "roles: array expected";
                                for (var t = 0; t < e.roles.length; ++t)
                                    if (!r.isString(e.roles[t])) return "roles: string[] expected"
                            }
                            return null != e.session && e.hasOwnProperty("session") && !r.isInteger(e.session) ? "session: integer expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.User) return e;
                            var t = new o.api.User;
                            if (null != e.id && (t.id = e.id >>> 0), null != e.name && (t.name = String(e.name)), e.roles) {
                                if (!Array.isArray(e.roles)) throw TypeError(".api.User.roles: array expected");
                                t.roles = [];
                                for (var n = 0; n < e.roles.length; ++n) t.roles[n] = String(e.roles[n])
                            }
                            return null != e.session && (t.session = 0 | e.session), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.roles = []), t.defaults && (n.id = 0, n.name = "", n.session = 0), null != e.id && e.hasOwnProperty("id") && (n.id = e.id), null != e.name && e.hasOwnProperty("name") && (n.name = e.name), e.roles && e.roles.length) {
                                n.roles = [];
                                for (var r = 0; r < e.roles.length; ++r) n.roles[r] = e.roles[r]
                            }
                            return null != e.session && e.hasOwnProperty("session") && (n.session = e.session), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.Roster = function() {
                        function i(e) {
                            if (this.user = [], this.files = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.user = r.emptyArray, i.prototype.files = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.user && e.user.length)
                                for (var r = 0; r < e.user.length; ++r) o.api.User.encode(e.user[r], t.uint32(10).fork()).ldelim();
                            if (null != e.files && e.files.length)
                                for (r = 0; r < e.files.length; ++r) o.api.FileOpened.encode(e.files[r], t.uint32(18).fork()).ldelim();
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Roster; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.user && i.user.length || (i.user = []), i.user.push(o.api.User.decode(e, e.uint32()));
                                        break;
                                    case 2:
                                        i.files && i.files.length || (i.files = []), i.files.push(o.api.FileOpened.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.user && e.hasOwnProperty("user")) {
                                if (!Array.isArray(e.user)) return "user: array expected";
                                for (var t = 0; t < e.user.length; ++t)
                                    if (n = o.api.User.verify(e.user[t])) return "user." + n
                            }
                            if (null != e.files && e.hasOwnProperty("files")) {
                                if (!Array.isArray(e.files)) return "files: array expected";
                                for (t = 0; t < e.files.length; ++t) {
                                    var n;
                                    if (n = o.api.FileOpened.verify(e.files[t])) return "files." + n
                                }
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Roster) return e;
                            var t = new o.api.Roster;
                            if (e.user) {
                                if (!Array.isArray(e.user)) throw TypeError(".api.Roster.user: array expected");
                                t.user = [];
                                for (var n = 0; n < e.user.length; ++n) {
                                    if ("object" !== typeof e.user[n]) throw TypeError(".api.Roster.user: object expected");
                                    t.user[n] = o.api.User.fromObject(e.user[n])
                                }
                            }
                            if (e.files) {
                                if (!Array.isArray(e.files)) throw TypeError(".api.Roster.files: array expected");
                                for (t.files = [], n = 0; n < e.files.length; ++n) {
                                    if ("object" !== typeof e.files[n]) throw TypeError(".api.Roster.files: object expected");
                                    t.files[n] = o.api.FileOpened.fromObject(e.files[n])
                                }
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.user = [], n.files = []), e.user && e.user.length) {
                                n.user = [];
                                for (var r = 0; r < e.user.length; ++r) n.user[r] = o.api.User.toObject(e.user[r], t)
                            }
                            if (e.files && e.files.length)
                                for (n.files = [], r = 0; r < e.files.length; ++r) n.files[r] = o.api.FileOpened.toObject(e.files[r], t);
                            return n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.OpenFile = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.file = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.file && Object.hasOwnProperty.call(e, "file") && t.uint32(10).string(e.file), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.OpenFile; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.file = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.file && e.hasOwnProperty("file") && !r.isString(e.file) ? "file: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.OpenFile) return e;
                            var t = new o.api.OpenFile;
                            return null != e.file && (t.file = String(e.file)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.file = ""), null != e.file && e.hasOwnProperty("file") && (n.file = e.file), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.FileOpened = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.userId = 0, i.prototype.file = "", i.prototype.session = 0, i.prototype.timestamp = null, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(8).uint32(e.userId), null != e.file && Object.hasOwnProperty.call(e, "file") && t.uint32(18).string(e.file), null != e.session && Object.hasOwnProperty.call(e, "session") && t.uint32(24).int32(e.session), null != e.timestamp && Object.hasOwnProperty.call(e, "timestamp") && o.google.protobuf.Timestamp.encode(e.timestamp, t.uint32(34).fork()).ldelim(), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.FileOpened; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.userId = e.uint32();
                                        break;
                                    case 2:
                                        i.file = e.string();
                                        break;
                                    case 3:
                                        i.session = e.int32();
                                        break;
                                    case 4:
                                        i.timestamp = o.google.protobuf.Timestamp.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.userId && e.hasOwnProperty("userId") && !r.isInteger(e.userId)) return "userId: integer expected";
                            if (null != e.file && e.hasOwnProperty("file") && !r.isString(e.file)) return "file: string expected";
                            if (null != e.session && e.hasOwnProperty("session") && !r.isInteger(e.session)) return "session: integer expected";
                            if (null != e.timestamp && e.hasOwnProperty("timestamp")) {
                                var t = o.google.protobuf.Timestamp.verify(e.timestamp);
                                if (t) return "timestamp." + t
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.FileOpened) return e;
                            var t = new o.api.FileOpened;
                            if (null != e.userId && (t.userId = e.userId >>> 0), null != e.file && (t.file = String(e.file)), null != e.session && (t.session = 0 | e.session), null != e.timestamp) {
                                if ("object" !== typeof e.timestamp) throw TypeError(".api.FileOpened.timestamp: object expected");
                                t.timestamp = o.google.protobuf.Timestamp.fromObject(e.timestamp)
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.userId = 0, n.file = "", n.session = 0, n.timestamp = null), null != e.userId && e.hasOwnProperty("userId") && (n.userId = e.userId), null != e.file && e.hasOwnProperty("file") && (n.file = e.file), null != e.session && e.hasOwnProperty("session") && (n.session = e.session), null != e.timestamp && e.hasOwnProperty("timestamp") && (n.timestamp = o.google.protobuf.Timestamp.toObject(e.timestamp, t)), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.UpdateSessionTimestamp = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.UpdateSessionTimestamp; e.pos < r;) {
                                var a = e.uint32();
                                e.skipType(7 & a)
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null
                        }, r.fromObject = function(e) {
                            return e instanceof o.api.UpdateSessionTimestamp ? e : new o.api.UpdateSessionTimestamp
                        }, r.toObject = function() {
                            return {}
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.SessionTimestampUpdated = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.session = 0, i.prototype.timestamp = null, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.session && Object.hasOwnProperty.call(e, "session") && t.uint32(8).int32(e.session), null != e.timestamp && Object.hasOwnProperty.call(e, "timestamp") && o.google.protobuf.Timestamp.encode(e.timestamp, t.uint32(18).fork()).ldelim(), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.SessionTimestampUpdated; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.session = e.int32();
                                        break;
                                    case 2:
                                        i.timestamp = o.google.protobuf.Timestamp.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.session && e.hasOwnProperty("session") && !r.isInteger(e.session)) return "session: integer expected";
                            if (null != e.timestamp && e.hasOwnProperty("timestamp")) {
                                var t = o.google.protobuf.Timestamp.verify(e.timestamp);
                                if (t) return "timestamp." + t
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.SessionTimestampUpdated) return e;
                            var t = new o.api.SessionTimestampUpdated;
                            if (null != e.session && (t.session = 0 | e.session), null != e.timestamp) {
                                if ("object" !== typeof e.timestamp) throw TypeError(".api.SessionTimestampUpdated.timestamp: object expected");
                                t.timestamp = o.google.protobuf.Timestamp.fromObject(e.timestamp)
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.session = 0, n.timestamp = null), null != e.session && e.hasOwnProperty("session") && (n.session = e.session), null != e.timestamp && e.hasOwnProperty("timestamp") && (n.timestamp = o.google.protobuf.Timestamp.toObject(e.timestamp, t)), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.FollowUser = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.session = 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.session && Object.hasOwnProperty.call(e, "session") && t.uint32(8).int32(e.session), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.FollowUser; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.session = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.session && e.hasOwnProperty("session") && !r.isInteger(e.session) ? "session: integer expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.FollowUser) return e;
                            var t = new o.api.FollowUser;
                            return null != e.session && (t.session = 0 | e.session), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.session = 0), null != e.session && e.hasOwnProperty("session") && (n.session = e.session), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.UnfollowUser = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.session = 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.session && Object.hasOwnProperty.call(e, "session") && t.uint32(8).int32(e.session), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.UnfollowUser; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.session = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.session && e.hasOwnProperty("session") && !r.isInteger(e.session) ? "session: integer expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.UnfollowUser) return e;
                            var t = new o.api.UnfollowUser;
                            return null != e.session && (t.session = 0 | e.session), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.session = 0), null != e.session && e.hasOwnProperty("session") && (n.session = e.session), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.Exec = function() {
                        function i(e) {
                            if (this.args = [], this.env = {}, e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.args = r.emptyArray, i.prototype.env = r.emptyObject, i.prototype.blocking = !1, i.prototype.lifecycle = 0, i.prototype.splitStderr = !1, i.prototype.splitLogs = !1, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.args && e.args.length)
                                for (var r = 0; r < e.args.length; ++r) t.uint32(10).string(e.args[r]);
                            if (null != e.env && Object.hasOwnProperty.call(e, "env")) {
                                var o = Object.keys(e.env);
                                for (r = 0; r < o.length; ++r) t.uint32(18).fork().uint32(10).string(o[r]).uint32(18).string(e.env[o[r]]).ldelim()
                            }
                            return null != e.blocking && Object.hasOwnProperty.call(e, "blocking") && t.uint32(24).bool(e.blocking), null != e.splitStderr && Object.hasOwnProperty.call(e, "splitStderr") && t.uint32(32).bool(e.splitStderr), null != e.splitLogs && Object.hasOwnProperty.call(e, "splitLogs") && t.uint32(40).bool(e.splitLogs), null != e.lifecycle && Object.hasOwnProperty.call(e, "lifecycle") && t.uint32(48).int32(e.lifecycle), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var i, a, s = void 0 === n ? e.len : e.pos + n, l = new o.api.Exec; e.pos < s;) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                    case 1:
                                        l.args && l.args.length || (l.args = []), l.args.push(e.string());
                                        break;
                                    case 2:
                                        l.env === r.emptyObject && (l.env = {});
                                        var c = e.uint32() + e.pos;
                                        for (i = "", a = ""; e.pos < c;) {
                                            var p = e.uint32();
                                            switch (p >>> 3) {
                                                case 1:
                                                    i = e.string();
                                                    break;
                                                case 2:
                                                    a = e.string();
                                                    break;
                                                default:
                                                    e.skipType(7 & p)
                                            }
                                        }
                                        l.env[i] = a;
                                        break;
                                    case 3:
                                        l.blocking = e.bool();
                                        break;
                                    case 6:
                                        l.lifecycle = e.int32();
                                        break;
                                    case 4:
                                        l.splitStderr = e.bool();
                                        break;
                                    case 5:
                                        l.splitLogs = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & u)
                                }
                            }
                            return l
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.args && e.hasOwnProperty("args")) {
                                if (!Array.isArray(e.args)) return "args: array expected";
                                for (var t = 0; t < e.args.length; ++t)
                                    if (!r.isString(e.args[t])) return "args: string[] expected"
                            }
                            if (null != e.env && e.hasOwnProperty("env")) {
                                if (!r.isObject(e.env)) return "env: object expected";
                                var n = Object.keys(e.env);
                                for (t = 0; t < n.length; ++t)
                                    if (!r.isString(e.env[n[t]])) return "env: string{k:string} expected"
                            }
                            if (null != e.blocking && e.hasOwnProperty("blocking") && "boolean" !== typeof e.blocking) return "blocking: boolean expected";
                            if (null != e.lifecycle && e.hasOwnProperty("lifecycle")) switch (e.lifecycle) {
                                default: return "lifecycle: enum value expected";
                                case 0:
                                        case 1:
                                        case 2:
                            }
                            return null != e.splitStderr && e.hasOwnProperty("splitStderr") && "boolean" !== typeof e.splitStderr ? "splitStderr: boolean expected" : null != e.splitLogs && e.hasOwnProperty("splitLogs") && "boolean" !== typeof e.splitLogs ? "splitLogs: boolean expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Exec) return e;
                            var t = new o.api.Exec;
                            if (e.args) {
                                if (!Array.isArray(e.args)) throw TypeError(".api.Exec.args: array expected");
                                t.args = [];
                                for (var n = 0; n < e.args.length; ++n) t.args[n] = String(e.args[n])
                            }
                            if (e.env) {
                                if ("object" !== typeof e.env) throw TypeError(".api.Exec.env: object expected");
                                t.env = {};
                                var r = Object.keys(e.env);
                                for (n = 0; n < r.length; ++n) t.env[r[n]] = String(e.env[r[n]])
                            }
                            switch (null != e.blocking && (t.blocking = Boolean(e.blocking)), e.lifecycle) {
                                case "NON_BLOCKING":
                                case 0:
                                    t.lifecycle = 0;
                                    break;
                                case "BLOCKING":
                                case 1:
                                    t.lifecycle = 1;
                                    break;
                                case "STDIN":
                                case 2:
                                    t.lifecycle = 2
                            }
                            return null != e.splitStderr && (t.splitStderr = Boolean(e.splitStderr)), null != e.splitLogs && (t.splitLogs = Boolean(e.splitLogs)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n, r = {};
                            if ((t.arrays || t.defaults) && (r.args = []), (t.objects || t.defaults) && (r.env = {}), t.defaults && (r.blocking = !1, r.splitStderr = !1, r.splitLogs = !1, r.lifecycle = t.enums === String ? "NON_BLOCKING" : 0), e.args && e.args.length) {
                                r.args = [];
                                for (var i = 0; i < e.args.length; ++i) r.args[i] = e.args[i]
                            }
                            if (e.env && (n = Object.keys(e.env)).length)
                                for (r.env = {}, i = 0; i < n.length; ++i) r.env[n[i]] = e.env[n[i]];
                            return null != e.blocking && e.hasOwnProperty("blocking") && (r.blocking = e.blocking), null != e.splitStderr && e.hasOwnProperty("splitStderr") && (r.splitStderr = e.splitStderr), null != e.splitLogs && e.hasOwnProperty("splitLogs") && (r.splitLogs = e.splitLogs), null != e.lifecycle && e.hasOwnProperty("lifecycle") && (r.lifecycle = t.enums === String ? o.api.Exec.Lifecycle[e.lifecycle] : e.lifecycle), r
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i.Lifecycle = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "NON_BLOCKING"] = 0, t[e[1] = "BLOCKING"] = 1, t[e[2] = "STDIN"] = 2, t
                        }(), i
                    }(), i.Package = function() {
                        function i(e) {
                            if (this.dependencies = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.name = "", i.prototype.spec = "", i.prototype.description = "", i.prototype.version = "", i.prototype.homepageURL = "", i.prototype.documentationURL = "", i.prototype.sourceCodeURL = "", i.prototype.bugTrackerURL = "", i.prototype.author = "", i.prototype.license = "", i.prototype.dependencies = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(10).string(e.name), null != e.spec && Object.hasOwnProperty.call(e, "spec") && t.uint32(18).string(e.spec), null != e.description && Object.hasOwnProperty.call(e, "description") && t.uint32(82).string(e.description), null != e.version && Object.hasOwnProperty.call(e, "version") && t.uint32(90).string(e.version), null != e.homepageURL && Object.hasOwnProperty.call(e, "homepageURL") && t.uint32(98).string(e.homepageURL), null != e.documentationURL && Object.hasOwnProperty.call(e, "documentationURL") && t.uint32(106).string(e.documentationURL), null != e.sourceCodeURL && Object.hasOwnProperty.call(e, "sourceCodeURL") && t.uint32(114).string(e.sourceCodeURL), null != e.bugTrackerURL && Object.hasOwnProperty.call(e, "bugTrackerURL") && t.uint32(122).string(e.bugTrackerURL), null != e.author && Object.hasOwnProperty.call(e, "author") && t.uint32(130).string(e.author), null != e.license && Object.hasOwnProperty.call(e, "license") && t.uint32(138).string(e.license), null != e.dependencies && e.dependencies.length)
                                for (var r = 0; r < e.dependencies.length; ++r) o.api.Package.encode(e.dependencies[r], t.uint32(146).fork()).ldelim();
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Package; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.name = e.string();
                                        break;
                                    case 2:
                                        i.spec = e.string();
                                        break;
                                    case 10:
                                        i.description = e.string();
                                        break;
                                    case 11:
                                        i.version = e.string();
                                        break;
                                    case 12:
                                        i.homepageURL = e.string();
                                        break;
                                    case 13:
                                        i.documentationURL = e.string();
                                        break;
                                    case 14:
                                        i.sourceCodeURL = e.string();
                                        break;
                                    case 15:
                                        i.bugTrackerURL = e.string();
                                        break;
                                    case 16:
                                        i.author = e.string();
                                        break;
                                    case 17:
                                        i.license = e.string();
                                        break;
                                    case 18:
                                        i.dependencies && i.dependencies.length || (i.dependencies = []), i.dependencies.push(o.api.Package.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.name && e.hasOwnProperty("name") && !r.isString(e.name)) return "name: string expected";
                            if (null != e.spec && e.hasOwnProperty("spec") && !r.isString(e.spec)) return "spec: string expected";
                            if (null != e.description && e.hasOwnProperty("description") && !r.isString(e.description)) return "description: string expected";
                            if (null != e.version && e.hasOwnProperty("version") && !r.isString(e.version)) return "version: string expected";
                            if (null != e.homepageURL && e.hasOwnProperty("homepageURL") && !r.isString(e.homepageURL)) return "homepageURL: string expected";
                            if (null != e.documentationURL && e.hasOwnProperty("documentationURL") && !r.isString(e.documentationURL)) return "documentationURL: string expected";
                            if (null != e.sourceCodeURL && e.hasOwnProperty("sourceCodeURL") && !r.isString(e.sourceCodeURL)) return "sourceCodeURL: string expected";
                            if (null != e.bugTrackerURL && e.hasOwnProperty("bugTrackerURL") && !r.isString(e.bugTrackerURL)) return "bugTrackerURL: string expected";
                            if (null != e.author && e.hasOwnProperty("author") && !r.isString(e.author)) return "author: string expected";
                            if (null != e.license && e.hasOwnProperty("license") && !r.isString(e.license)) return "license: string expected";
                            if (null != e.dependencies && e.hasOwnProperty("dependencies")) {
                                if (!Array.isArray(e.dependencies)) return "dependencies: array expected";
                                for (var t = 0; t < e.dependencies.length; ++t) {
                                    var n = o.api.Package.verify(e.dependencies[t]);
                                    if (n) return "dependencies." + n
                                }
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Package) return e;
                            var t = new o.api.Package;
                            if (null != e.name && (t.name = String(e.name)), null != e.spec && (t.spec = String(e.spec)), null != e.description && (t.description = String(e.description)), null != e.version && (t.version = String(e.version)), null != e.homepageURL && (t.homepageURL = String(e.homepageURL)), null != e.documentationURL && (t.documentationURL = String(e.documentationURL)), null != e.sourceCodeURL && (t.sourceCodeURL = String(e.sourceCodeURL)), null != e.bugTrackerURL && (t.bugTrackerURL = String(e.bugTrackerURL)), null != e.author && (t.author = String(e.author)), null != e.license && (t.license = String(e.license)), e.dependencies) {
                                if (!Array.isArray(e.dependencies)) throw TypeError(".api.Package.dependencies: array expected");
                                t.dependencies = [];
                                for (var n = 0; n < e.dependencies.length; ++n) {
                                    if ("object" !== typeof e.dependencies[n]) throw TypeError(".api.Package.dependencies: object expected");
                                    t.dependencies[n] = o.api.Package.fromObject(e.dependencies[n])
                                }
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.dependencies = []), t.defaults && (n.name = "", n.spec = "", n.description = "", n.version = "", n.homepageURL = "", n.documentationURL = "", n.sourceCodeURL = "", n.bugTrackerURL = "", n.author = "", n.license = ""), null != e.name && e.hasOwnProperty("name") && (n.name = e.name), null != e.spec && e.hasOwnProperty("spec") && (n.spec = e.spec), null != e.description && e.hasOwnProperty("description") && (n.description = e.description), null != e.version && e.hasOwnProperty("version") && (n.version = e.version), null != e.homepageURL && e.hasOwnProperty("homepageURL") && (n.homepageURL = e.homepageURL), null != e.documentationURL && e.hasOwnProperty("documentationURL") && (n.documentationURL = e.documentationURL), null != e.sourceCodeURL && e.hasOwnProperty("sourceCodeURL") && (n.sourceCodeURL = e.sourceCodeURL), null != e.bugTrackerURL && e.hasOwnProperty("bugTrackerURL") && (n.bugTrackerURL = e.bugTrackerURL), null != e.author && e.hasOwnProperty("author") && (n.author = e.author), null != e.license && e.hasOwnProperty("license") && (n.license = e.license), e.dependencies && e.dependencies.length) {
                                n.dependencies = [];
                                for (var r = 0; r < e.dependencies.length; ++r) n.dependencies[r] = o.api.Package.toObject(e.dependencies[r], t)
                            }
                            return n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.PackageSearch = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.query = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.query && Object.hasOwnProperty.call(e, "query") && t.uint32(10).string(e.query), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.PackageSearch; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.query = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.query && e.hasOwnProperty("query") && !r.isString(e.query) ? "query: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.PackageSearch) return e;
                            var t = new o.api.PackageSearch;
                            return null != e.query && (t.query = String(e.query)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.query = ""), null != e.query && e.hasOwnProperty("query") && (n.query = e.query), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.PackageSearchResp = function() {
                        function i(e) {
                            if (this.results = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.results = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.results && e.results.length)
                                for (var r = 0; r < e.results.length; ++r) o.api.Package.encode(e.results[r], t.uint32(10).fork()).ldelim();
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.PackageSearchResp; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.results && i.results.length || (i.results = []), i.results.push(o.api.Package.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.results && e.hasOwnProperty("results")) {
                                if (!Array.isArray(e.results)) return "results: array expected";
                                for (var t = 0; t < e.results.length; ++t) {
                                    var n = o.api.Package.verify(e.results[t]);
                                    if (n) return "results." + n
                                }
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.PackageSearchResp) return e;
                            var t = new o.api.PackageSearchResp;
                            if (e.results) {
                                if (!Array.isArray(e.results)) throw TypeError(".api.PackageSearchResp.results: array expected");
                                t.results = [];
                                for (var n = 0; n < e.results.length; ++n) {
                                    if ("object" !== typeof e.results[n]) throw TypeError(".api.PackageSearchResp.results: object expected");
                                    t.results[n] = o.api.Package.fromObject(e.results[n])
                                }
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.results = []), e.results && e.results.length) {
                                n.results = [];
                                for (var r = 0; r < e.results.length; ++r) n.results[r] = o.api.Package.toObject(e.results[r], t)
                            }
                            return n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.PackageInfo = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.pkg = null, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.pkg && Object.hasOwnProperty.call(e, "pkg") && o.api.Package.encode(e.pkg, t.uint32(10).fork()).ldelim(), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.PackageInfo; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.pkg = o.api.Package.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.pkg && e.hasOwnProperty("pkg")) {
                                var t = o.api.Package.verify(e.pkg);
                                if (t) return "pkg." + t
                            }
                            return null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.PackageInfo) return e;
                            var t = new o.api.PackageInfo;
                            if (null != e.pkg) {
                                if ("object" !== typeof e.pkg) throw TypeError(".api.PackageInfo.pkg: object expected");
                                t.pkg = o.api.Package.fromObject(e.pkg)
                            }
                            return t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.pkg = null), null != e.pkg && e.hasOwnProperty("pkg") && (n.pkg = o.api.Package.toObject(e.pkg, t)), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.PackageInfoResp = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.pkg = null, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.pkg && Object.hasOwnProperty.call(e, "pkg") && o.api.Package.encode(e.pkg, t.uint32(10).fork()).ldelim(), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.PackageInfoResp; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.pkg = o.api.Package.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.pkg && e.hasOwnProperty("pkg")) {
                                var t = o.api.Package.verify(e.pkg);
                                if (t) return "pkg." + t
                            }
                            return null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.PackageInfoResp) return e;
                            var t = new o.api.PackageInfoResp;
                            if (null != e.pkg) {
                                if ("object" !== typeof e.pkg) throw TypeError(".api.PackageInfoResp.pkg: object expected");
                                t.pkg = o.api.Package.fromObject(e.pkg)
                            }
                            return t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.pkg = null), null != e.pkg && e.hasOwnProperty("pkg") && (n.pkg = o.api.Package.toObject(e.pkg, t)), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.PackageAdd = function() {
                        function i(e) {
                            if (this.pkgs = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.pkgs = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.pkgs && e.pkgs.length)
                                for (var r = 0; r < e.pkgs.length; ++r) o.api.Package.encode(e.pkgs[r], t.uint32(10).fork()).ldelim();
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.PackageAdd; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.pkgs && i.pkgs.length || (i.pkgs = []), i.pkgs.push(o.api.Package.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.pkgs && e.hasOwnProperty("pkgs")) {
                                if (!Array.isArray(e.pkgs)) return "pkgs: array expected";
                                for (var t = 0; t < e.pkgs.length; ++t) {
                                    var n = o.api.Package.verify(e.pkgs[t]);
                                    if (n) return "pkgs." + n
                                }
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.PackageAdd) return e;
                            var t = new o.api.PackageAdd;
                            if (e.pkgs) {
                                if (!Array.isArray(e.pkgs)) throw TypeError(".api.PackageAdd.pkgs: array expected");
                                t.pkgs = [];
                                for (var n = 0; n < e.pkgs.length; ++n) {
                                    if ("object" !== typeof e.pkgs[n]) throw TypeError(".api.PackageAdd.pkgs: object expected");
                                    t.pkgs[n] = o.api.Package.fromObject(e.pkgs[n])
                                }
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.pkgs = []), e.pkgs && e.pkgs.length) {
                                n.pkgs = [];
                                for (var r = 0; r < e.pkgs.length; ++r) n.pkgs[r] = o.api.Package.toObject(e.pkgs[r], t)
                            }
                            return n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.PackageRemove = function() {
                        function i(e) {
                            if (this.pkgs = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.pkgs = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.pkgs && e.pkgs.length)
                                for (var r = 0; r < e.pkgs.length; ++r) o.api.Package.encode(e.pkgs[r], t.uint32(10).fork()).ldelim();
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.PackageRemove; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.pkgs && i.pkgs.length || (i.pkgs = []), i.pkgs.push(o.api.Package.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.pkgs && e.hasOwnProperty("pkgs")) {
                                if (!Array.isArray(e.pkgs)) return "pkgs: array expected";
                                for (var t = 0; t < e.pkgs.length; ++t) {
                                    var n = o.api.Package.verify(e.pkgs[t]);
                                    if (n) return "pkgs." + n
                                }
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.PackageRemove) return e;
                            var t = new o.api.PackageRemove;
                            if (e.pkgs) {
                                if (!Array.isArray(e.pkgs)) throw TypeError(".api.PackageRemove.pkgs: array expected");
                                t.pkgs = [];
                                for (var n = 0; n < e.pkgs.length; ++n) {
                                    if ("object" !== typeof e.pkgs[n]) throw TypeError(".api.PackageRemove.pkgs: object expected");
                                    t.pkgs[n] = o.api.Package.fromObject(e.pkgs[n])
                                }
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.pkgs = []), e.pkgs && e.pkgs.length) {
                                n.pkgs = [];
                                for (var r = 0; r < e.pkgs.length; ++r) n.pkgs[r] = o.api.Package.toObject(e.pkgs[r], t)
                            }
                            return n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.PackageInstall = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.PackageInstall; e.pos < r;) {
                                var a = e.uint32();
                                e.skipType(7 & a)
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null
                        }, r.fromObject = function(e) {
                            return e instanceof o.api.PackageInstall ? e : new o.api.PackageInstall
                        }, r.toObject = function() {
                            return {}
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.PackageListSpecfile = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.PackageListSpecfile; e.pos < r;) {
                                var a = e.uint32();
                                e.skipType(7 & a)
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null
                        }, r.fromObject = function(e) {
                            return e instanceof o.api.PackageListSpecfile ? e : new o.api.PackageListSpecfile
                        }, r.toObject = function() {
                            return {}
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.PackageListSpecfileResp = function() {
                        function i(e) {
                            if (this.pkgs = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.pkgs = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.pkgs && e.pkgs.length)
                                for (var r = 0; r < e.pkgs.length; ++r) o.api.Package.encode(e.pkgs[r], t.uint32(10).fork()).ldelim();
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.PackageListSpecfileResp; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.pkgs && i.pkgs.length || (i.pkgs = []), i.pkgs.push(o.api.Package.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.pkgs && e.hasOwnProperty("pkgs")) {
                                if (!Array.isArray(e.pkgs)) return "pkgs: array expected";
                                for (var t = 0; t < e.pkgs.length; ++t) {
                                    var n = o.api.Package.verify(e.pkgs[t]);
                                    if (n) return "pkgs." + n
                                }
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.PackageListSpecfileResp) return e;
                            var t = new o.api.PackageListSpecfileResp;
                            if (e.pkgs) {
                                if (!Array.isArray(e.pkgs)) throw TypeError(".api.PackageListSpecfileResp.pkgs: array expected");
                                t.pkgs = [];
                                for (var n = 0; n < e.pkgs.length; ++n) {
                                    if ("object" !== typeof e.pkgs[n]) throw TypeError(".api.PackageListSpecfileResp.pkgs: object expected");
                                    t.pkgs[n] = o.api.Package.fromObject(e.pkgs[n])
                                }
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.pkgs = []), e.pkgs && e.pkgs.length) {
                                n.pkgs = [];
                                for (var r = 0; r < e.pkgs.length; ++r) n.pkgs[r] = o.api.Package.toObject(e.pkgs[r], t)
                            }
                            return n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.PackageCacheSave = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.PackageCacheSave; e.pos < r;) {
                                var a = e.uint32();
                                e.skipType(7 & a)
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null
                        }, r.fromObject = function(e) {
                            return e instanceof o.api.PackageCacheSave ? e : new o.api.PackageCacheSave
                        }, r.toObject = function() {
                            return {}
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.ChatScrollback = function() {
                        function i(e) {
                            if (this.scrollback = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.scrollback = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.scrollback && e.scrollback.length)
                                for (var r = 0; r < e.scrollback.length; ++r) o.api.ChatMessage.encode(e.scrollback[r], t.uint32(10).fork()).ldelim();
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.ChatScrollback; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.scrollback && i.scrollback.length || (i.scrollback = []), i.scrollback.push(o.api.ChatMessage.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.scrollback && e.hasOwnProperty("scrollback")) {
                                if (!Array.isArray(e.scrollback)) return "scrollback: array expected";
                                for (var t = 0; t < e.scrollback.length; ++t) {
                                    var n = o.api.ChatMessage.verify(e.scrollback[t]);
                                    if (n) return "scrollback." + n
                                }
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.ChatScrollback) return e;
                            var t = new o.api.ChatScrollback;
                            if (e.scrollback) {
                                if (!Array.isArray(e.scrollback)) throw TypeError(".api.ChatScrollback.scrollback: array expected");
                                t.scrollback = [];
                                for (var n = 0; n < e.scrollback.length; ++n) {
                                    if ("object" !== typeof e.scrollback[n]) throw TypeError(".api.ChatScrollback.scrollback: object expected");
                                    t.scrollback[n] = o.api.ChatMessage.fromObject(e.scrollback[n])
                                }
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.scrollback = []), e.scrollback && e.scrollback.length) {
                                n.scrollback = [];
                                for (var r = 0; r < e.scrollback.length; ++r) n.scrollback[r] = o.api.ChatMessage.toObject(e.scrollback[r], t)
                            }
                            return n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.Metrics = function() {
                        function i(e) {
                            if (this.prometheusMetricFamilies = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.prometheusMetricFamilies = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.prometheusMetricFamilies && e.prometheusMetricFamilies.length)
                                for (var r = 0; r < e.prometheusMetricFamilies.length; ++r) t.uint32(10).bytes(e.prometheusMetricFamilies[r]);
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Metrics; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.prometheusMetricFamilies && i.prometheusMetricFamilies.length || (i.prometheusMetricFamilies = []), i.prometheusMetricFamilies.push(e.bytes());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.prometheusMetricFamilies && e.hasOwnProperty("prometheusMetricFamilies")) {
                                if (!Array.isArray(e.prometheusMetricFamilies)) return "prometheusMetricFamilies: array expected";
                                for (var t = 0; t < e.prometheusMetricFamilies.length; ++t)
                                    if (!(e.prometheusMetricFamilies[t] && "number" === typeof e.prometheusMetricFamilies[t].length || r.isString(e.prometheusMetricFamilies[t]))) return "prometheusMetricFamilies: buffer[] expected"
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Metrics) return e;
                            var t = new o.api.Metrics;
                            if (e.prometheusMetricFamilies) {
                                if (!Array.isArray(e.prometheusMetricFamilies)) throw TypeError(".api.Metrics.prometheusMetricFamilies: array expected");
                                t.prometheusMetricFamilies = [];
                                for (var n = 0; n < e.prometheusMetricFamilies.length; ++n) "string" === typeof e.prometheusMetricFamilies[n] ? r.base64.decode(e.prometheusMetricFamilies[n], t.prometheusMetricFamilies[n] = r.newBuffer(r.base64.length(e.prometheusMetricFamilies[n])), 0) : e.prometheusMetricFamilies[n].length && (t.prometheusMetricFamilies[n] = e.prometheusMetricFamilies[n])
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.prometheusMetricFamilies = []), e.prometheusMetricFamilies && e.prometheusMetricFamilies.length) {
                                n.prometheusMetricFamilies = [];
                                for (var o = 0; o < e.prometheusMetricFamilies.length; ++o) n.prometheusMetricFamilies[o] = t.bytes === String ? r.base64.encode(e.prometheusMetricFamilies[o], 0, e.prometheusMetricFamilies[o].length) : t.bytes === Array ? Array.prototype.slice.call(e.prometheusMetricFamilies[o]) : e.prometheusMetricFamilies[o]
                            }
                            return n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.PprofRequest = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        var a;
                        return i.prototype.id = "", i.prototype.pprofCpuProfileRequest = null, i.prototype.pprofHeapProfileRequest = null, i.prototype.pprofAllocsProfileRequest = null, i.prototype.pprofBlockProfileRequest = null, i.prototype.pprofMutexProfileRequest = null, Object.defineProperty(i.prototype, "body", {
                            get: r.oneOfGetter(a = ["pprofCpuProfileRequest", "pprofHeapProfileRequest", "pprofAllocsProfileRequest", "pprofBlockProfileRequest", "pprofMutexProfileRequest"]),
                            set: r.oneOfSetter(a)
                        }), i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(10).string(e.id), null != e.pprofCpuProfileRequest && Object.hasOwnProperty.call(e, "pprofCpuProfileRequest") && o.api.PprofCpuProfileRequest.encode(e.pprofCpuProfileRequest, t.uint32(18).fork()).ldelim(), null != e.pprofHeapProfileRequest && Object.hasOwnProperty.call(e, "pprofHeapProfileRequest") && o.api.PprofHeapProfileRequest.encode(e.pprofHeapProfileRequest, t.uint32(26).fork()).ldelim(), null != e.pprofAllocsProfileRequest && Object.hasOwnProperty.call(e, "pprofAllocsProfileRequest") && o.api.PprofAllocsProfileRequest.encode(e.pprofAllocsProfileRequest, t.uint32(34).fork()).ldelim(), null != e.pprofBlockProfileRequest && Object.hasOwnProperty.call(e, "pprofBlockProfileRequest") && o.api.PprofBlockProfileRequest.encode(e.pprofBlockProfileRequest, t.uint32(42).fork()).ldelim(), null != e.pprofMutexProfileRequest && Object.hasOwnProperty.call(e, "pprofMutexProfileRequest") && o.api.PprofMutexProfileRequest.encode(e.pprofMutexProfileRequest, t.uint32(50).fork()).ldelim(), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.PprofRequest; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.id = e.string();
                                        break;
                                    case 2:
                                        i.pprofCpuProfileRequest = o.api.PprofCpuProfileRequest.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        i.pprofHeapProfileRequest = o.api.PprofHeapProfileRequest.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        i.pprofAllocsProfileRequest = o.api.PprofAllocsProfileRequest.decode(e, e.uint32());
                                        break;
                                    case 5:
                                        i.pprofBlockProfileRequest = o.api.PprofBlockProfileRequest.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        i.pprofMutexProfileRequest = o.api.PprofMutexProfileRequest.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            var t = {};
                            if (null != e.id && e.hasOwnProperty("id") && !r.isString(e.id)) return "id: string expected";
                            if (null != e.pprofCpuProfileRequest && e.hasOwnProperty("pprofCpuProfileRequest") && (t.body = 1, n = o.api.PprofCpuProfileRequest.verify(e.pprofCpuProfileRequest))) return "pprofCpuProfileRequest." + n;
                            if (null != e.pprofHeapProfileRequest && e.hasOwnProperty("pprofHeapProfileRequest")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.PprofHeapProfileRequest.verify(e.pprofHeapProfileRequest)) return "pprofHeapProfileRequest." + n
                            }
                            if (null != e.pprofAllocsProfileRequest && e.hasOwnProperty("pprofAllocsProfileRequest")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.PprofAllocsProfileRequest.verify(e.pprofAllocsProfileRequest)) return "pprofAllocsProfileRequest." + n
                            }
                            if (null != e.pprofBlockProfileRequest && e.hasOwnProperty("pprofBlockProfileRequest")) {
                                if (1 === t.body) return "body: multiple values";
                                if (t.body = 1, n = o.api.PprofBlockProfileRequest.verify(e.pprofBlockProfileRequest)) return "pprofBlockProfileRequest." + n
                            }
                            if (null != e.pprofMutexProfileRequest && e.hasOwnProperty("pprofMutexProfileRequest")) {
                                if (1 === t.body) return "body: multiple values";
                                var n;
                                if (t.body = 1, n = o.api.PprofMutexProfileRequest.verify(e.pprofMutexProfileRequest)) return "pprofMutexProfileRequest." + n
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.PprofRequest) return e;
                            var t = new o.api.PprofRequest;
                            if (null != e.id && (t.id = String(e.id)), null != e.pprofCpuProfileRequest) {
                                if ("object" !== typeof e.pprofCpuProfileRequest) throw TypeError(".api.PprofRequest.pprofCpuProfileRequest: object expected");
                                t.pprofCpuProfileRequest = o.api.PprofCpuProfileRequest.fromObject(e.pprofCpuProfileRequest)
                            }
                            if (null != e.pprofHeapProfileRequest) {
                                if ("object" !== typeof e.pprofHeapProfileRequest) throw TypeError(".api.PprofRequest.pprofHeapProfileRequest: object expected");
                                t.pprofHeapProfileRequest = o.api.PprofHeapProfileRequest.fromObject(e.pprofHeapProfileRequest)
                            }
                            if (null != e.pprofAllocsProfileRequest) {
                                if ("object" !== typeof e.pprofAllocsProfileRequest) throw TypeError(".api.PprofRequest.pprofAllocsProfileRequest: object expected");
                                t.pprofAllocsProfileRequest = o.api.PprofAllocsProfileRequest.fromObject(e.pprofAllocsProfileRequest)
                            }
                            if (null != e.pprofBlockProfileRequest) {
                                if ("object" !== typeof e.pprofBlockProfileRequest) throw TypeError(".api.PprofRequest.pprofBlockProfileRequest: object expected");
                                t.pprofBlockProfileRequest = o.api.PprofBlockProfileRequest.fromObject(e.pprofBlockProfileRequest)
                            }
                            if (null != e.pprofMutexProfileRequest) {
                                if ("object" !== typeof e.pprofMutexProfileRequest) throw TypeError(".api.PprofRequest.pprofMutexProfileRequest: object expected");
                                t.pprofMutexProfileRequest = o.api.PprofMutexProfileRequest.fromObject(e.pprofMutexProfileRequest)
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.id = ""), null != e.id && e.hasOwnProperty("id") && (n.id = e.id), null != e.pprofCpuProfileRequest && e.hasOwnProperty("pprofCpuProfileRequest") && (n.pprofCpuProfileRequest = o.api.PprofCpuProfileRequest.toObject(e.pprofCpuProfileRequest, t), t.oneofs && (n.body = "pprofCpuProfileRequest")), null != e.pprofHeapProfileRequest && e.hasOwnProperty("pprofHeapProfileRequest") && (n.pprofHeapProfileRequest = o.api.PprofHeapProfileRequest.toObject(e.pprofHeapProfileRequest, t), t.oneofs && (n.body = "pprofHeapProfileRequest")), null != e.pprofAllocsProfileRequest && e.hasOwnProperty("pprofAllocsProfileRequest") && (n.pprofAllocsProfileRequest = o.api.PprofAllocsProfileRequest.toObject(e.pprofAllocsProfileRequest, t), t.oneofs && (n.body = "pprofAllocsProfileRequest")), null != e.pprofBlockProfileRequest && e.hasOwnProperty("pprofBlockProfileRequest") && (n.pprofBlockProfileRequest = o.api.PprofBlockProfileRequest.toObject(e.pprofBlockProfileRequest, t), t.oneofs && (n.body = "pprofBlockProfileRequest")), null != e.pprofMutexProfileRequest && e.hasOwnProperty("pprofMutexProfileRequest") && (n.pprofMutexProfileRequest = o.api.PprofMutexProfileRequest.toObject(e.pprofMutexProfileRequest, t), t.oneofs && (n.body = "pprofMutexProfileRequest")), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.PprofAllocsProfileRequest = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.debug = !1, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.debug && Object.hasOwnProperty.call(e, "debug") && t.uint32(8).bool(e.debug), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.PprofAllocsProfileRequest; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.debug = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.debug && e.hasOwnProperty("debug") && "boolean" !== typeof e.debug ? "debug: boolean expected" : null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.PprofAllocsProfileRequest) return e;
                            var t = new o.api.PprofAllocsProfileRequest;
                            return null != e.debug && (t.debug = Boolean(e.debug)), t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.debug = !1), null != e.debug && e.hasOwnProperty("debug") && (n.debug = e.debug), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.PprofBlockProfileRequest = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.debug = !1, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.debug && Object.hasOwnProperty.call(e, "debug") && t.uint32(8).bool(e.debug), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.PprofBlockProfileRequest; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.debug = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.debug && e.hasOwnProperty("debug") && "boolean" !== typeof e.debug ? "debug: boolean expected" : null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.PprofBlockProfileRequest) return e;
                            var t = new o.api.PprofBlockProfileRequest;
                            return null != e.debug && (t.debug = Boolean(e.debug)), t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.debug = !1), null != e.debug && e.hasOwnProperty("debug") && (n.debug = e.debug), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.PprofCpuProfileRequest = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.seconds = r.Long ? r.Long.fromBits(0, 0, !1) : 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.seconds && Object.hasOwnProperty.call(e, "seconds") && t.uint32(8).int64(e.seconds), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.PprofCpuProfileRequest; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.seconds = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null == e.seconds || !e.hasOwnProperty("seconds") || r.isInteger(e.seconds) || e.seconds && r.isInteger(e.seconds.low) && r.isInteger(e.seconds.high) ? null : "seconds: integer|Long expected"
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.PprofCpuProfileRequest) return e;
                            var t = new o.api.PprofCpuProfileRequest;
                            return null != e.seconds && (r.Long ? (t.seconds = r.Long.fromValue(e.seconds)).unsigned = !1 : "string" === typeof e.seconds ? t.seconds = parseInt(e.seconds, 10) : "number" === typeof e.seconds ? t.seconds = e.seconds : "object" === typeof e.seconds && (t.seconds = new r.LongBits(e.seconds.low >>> 0, e.seconds.high >>> 0).toNumber())), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if (t.defaults)
                                if (r.Long) {
                                    var o = new r.Long(0, 0, !1);
                                    n.seconds = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                                } else n.seconds = t.longs === String ? "0" : 0;
                            return null != e.seconds && e.hasOwnProperty("seconds") && ("number" === typeof e.seconds ? n.seconds = t.longs === String ? String(e.seconds) : e.seconds : n.seconds = t.longs === String ? r.Long.prototype.toString.call(e.seconds) : t.longs === Number ? new r.LongBits(e.seconds.low >>> 0, e.seconds.high >>> 0).toNumber() : e.seconds), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.PprofHeapProfileRequest = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.gc = !1, r.prototype.debug = !1, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.gc && Object.hasOwnProperty.call(e, "gc") && t.uint32(8).bool(e.gc), null != e.debug && Object.hasOwnProperty.call(e, "debug") && t.uint32(16).bool(e.debug), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.PprofHeapProfileRequest; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.gc = e.bool();
                                        break;
                                    case 2:
                                        i.debug = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.gc && e.hasOwnProperty("gc") && "boolean" !== typeof e.gc ? "gc: boolean expected" : null != e.debug && e.hasOwnProperty("debug") && "boolean" !== typeof e.debug ? "debug: boolean expected" : null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.PprofHeapProfileRequest) return e;
                            var t = new o.api.PprofHeapProfileRequest;
                            return null != e.gc && (t.gc = Boolean(e.gc)), null != e.debug && (t.debug = Boolean(e.debug)), t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.gc = !1, n.debug = !1), null != e.gc && e.hasOwnProperty("gc") && (n.gc = e.gc), null != e.debug && e.hasOwnProperty("debug") && (n.debug = e.debug), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.PprofMutexProfileRequest = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.debug = !1, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.debug && Object.hasOwnProperty.call(e, "debug") && t.uint32(8).bool(e.debug), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.PprofMutexProfileRequest; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.debug = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.debug && e.hasOwnProperty("debug") && "boolean" !== typeof e.debug ? "debug: boolean expected" : null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.PprofMutexProfileRequest) return e;
                            var t = new o.api.PprofMutexProfileRequest;
                            return null != e.debug && (t.debug = Boolean(e.debug)), t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.debug = !1), null != e.debug && e.hasOwnProperty("debug") && (n.debug = e.debug), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.PprofResponse = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.id = "", i.prototype.profile = r.newBuffer([]), i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(10).string(e.id), null != e.profile && Object.hasOwnProperty.call(e, "profile") && t.uint32(18).bytes(e.profile), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.PprofResponse; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.id = e.string();
                                        break;
                                    case 2:
                                        i.profile = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.id && e.hasOwnProperty("id") && !r.isString(e.id) ? "id: string expected" : null != e.profile && e.hasOwnProperty("profile") && !(e.profile && "number" === typeof e.profile.length || r.isString(e.profile)) ? "profile: buffer expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.PprofResponse) return e;
                            var t = new o.api.PprofResponse;
                            return null != e.id && (t.id = String(e.id)), null != e.profile && ("string" === typeof e.profile ? r.base64.decode(e.profile, t.profile = r.newBuffer(r.base64.length(e.profile)), 0) : e.profile.length && (t.profile = e.profile)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.id = "", t.bytes === String ? n.profile = "" : (n.profile = [], t.bytes !== Array && (n.profile = r.newBuffer(n.profile)))), null != e.id && e.hasOwnProperty("id") && (n.id = e.id), null != e.profile && e.hasOwnProperty("profile") && (n.profile = t.bytes === String ? r.base64.encode(e.profile, 0, e.profile.length) : t.bytes === Array ? Array.prototype.slice.call(e.profile) : e.profile), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.PTYConfig = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.pipeMode = !1, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.pipeMode && Object.hasOwnProperty.call(e, "pipeMode") && t.uint32(8).bool(e.pipeMode), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.PTYConfig; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.pipeMode = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.pipeMode && e.hasOwnProperty("pipeMode") && "boolean" !== typeof e.pipeMode ? "pipeMode: boolean expected" : null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.PTYConfig) return e;
                            var t = new o.api.PTYConfig;
                            return null != e.pipeMode && (t.pipeMode = Boolean(e.pipeMode)), t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.pipeMode = !1), null != e.pipeMode && e.hasOwnProperty("pipeMode") && (n.pipeMode = e.pipeMode), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.DebugMain = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.session = "", i.prototype.readOnly = !1, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.session && Object.hasOwnProperty.call(e, "session") && t.uint32(10).string(e.session), null != e.readOnly && Object.hasOwnProperty.call(e, "readOnly") && t.uint32(16).bool(e.readOnly), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.DebugMain; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.session = e.string();
                                        break;
                                    case 2:
                                        i.readOnly = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.session && e.hasOwnProperty("session") && !r.isString(e.session) ? "session: string expected" : null != e.readOnly && e.hasOwnProperty("readOnly") && "boolean" !== typeof e.readOnly ? "readOnly: boolean expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.DebugMain) return e;
                            var t = new o.api.DebugMain;
                            return null != e.session && (t.session = String(e.session)), null != e.readOnly && (t.readOnly = Boolean(e.readOnly)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.session = "", n.readOnly = !1), null != e.session && e.hasOwnProperty("session") && (n.session = e.session), null != e.readOnly && e.hasOwnProperty("readOnly") && (n.readOnly = e.readOnly), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.DebugMainReply = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.joined = !1, r.prototype.protocol = 0, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.joined && Object.hasOwnProperty.call(e, "joined") && t.uint32(8).bool(e.joined), null != e.protocol && Object.hasOwnProperty.call(e, "protocol") && t.uint32(16).int32(e.protocol), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.DebugMainReply; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.joined = e.bool();
                                        break;
                                    case 2:
                                        i.protocol = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.joined && e.hasOwnProperty("joined") && "boolean" !== typeof e.joined) return "joined: boolean expected";
                            if (null != e.protocol && e.hasOwnProperty("protocol")) switch (e.protocol) {
                                default: return "protocol: enum value expected";
                                case 0:
                            }
                            return null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.DebugMainReply) return e;
                            var t = new o.api.DebugMainReply;
                            switch (null != e.joined && (t.joined = Boolean(e.joined)), e.protocol) {
                                case "DAP":
                                case 0:
                                    t.protocol = 0
                            }
                            return t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.joined = !1, n.protocol = t.enums === String ? "DAP" : 0), null != e.joined && e.hasOwnProperty("joined") && (n.joined = e.joined), null != e.protocol && e.hasOwnProperty("protocol") && (n.protocol = t.enums === String ? o.api.DebugMainReply.Protocol[e.protocol] : e.protocol), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r.Protocol = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "DAP"] = 0, t
                        }(), r
                    }(), i.DebugState = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.session = "", i.prototype.state = 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.session && Object.hasOwnProperty.call(e, "session") && t.uint32(10).string(e.session), null != e.state && Object.hasOwnProperty.call(e, "state") && t.uint32(16).int32(e.state), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.DebugState; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.session = e.string();
                                        break;
                                    case 2:
                                        i.state = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.session && e.hasOwnProperty("session") && !r.isString(e.session)) return "session: string expected";
                            if (null != e.state && e.hasOwnProperty("state")) switch (e.state) {
                                default: return "state: enum value expected";
                                case 0:
                                        case 1:
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.DebugState) return e;
                            var t = new o.api.DebugState;
                            switch (null != e.session && (t.session = String(e.session)), e.state) {
                                case "Stopped":
                                case 0:
                                    t.state = 0;
                                    break;
                                case "Running":
                                case 1:
                                    t.state = 1
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.session = "", n.state = t.enums === String ? "Stopped" : 0), null != e.session && e.hasOwnProperty("session") && (n.session = e.session), null != e.state && e.hasOwnProperty("state") && (n.state = t.enums === String ? o.api.State[e.state] : e.state), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.DebugInput = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        var a;
                        return i.prototype.session = "", i.prototype.input = null, i.prototype.adapterInput = null, Object.defineProperty(i.prototype, "stream", {
                            get: r.oneOfGetter(a = ["input", "adapterInput"]),
                            set: r.oneOfSetter(a)
                        }), i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.session && Object.hasOwnProperty.call(e, "session") && t.uint32(10).string(e.session), null != e.input && Object.hasOwnProperty.call(e, "input") && t.uint32(18).string(e.input), null != e.adapterInput && Object.hasOwnProperty.call(e, "adapterInput") && t.uint32(26).string(e.adapterInput), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.DebugInput; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.session = e.string();
                                        break;
                                    case 2:
                                        i.input = e.string();
                                        break;
                                    case 3:
                                        i.adapterInput = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            var t = {};
                            if (null != e.session && e.hasOwnProperty("session") && !r.isString(e.session)) return "session: string expected";
                            if (null != e.input && e.hasOwnProperty("input") && (t.stream = 1, !r.isString(e.input))) return "input: string expected";
                            if (null != e.adapterInput && e.hasOwnProperty("adapterInput")) {
                                if (1 === t.stream) return "stream: multiple values";
                                if (t.stream = 1, !r.isString(e.adapterInput)) return "adapterInput: string expected"
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.DebugInput) return e;
                            var t = new o.api.DebugInput;
                            return null != e.session && (t.session = String(e.session)), null != e.input && (t.input = String(e.input)), null != e.adapterInput && (t.adapterInput = String(e.adapterInput)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.session = ""), null != e.session && e.hasOwnProperty("session") && (n.session = e.session), null != e.input && e.hasOwnProperty("input") && (n.input = e.input, t.oneofs && (n.stream = "input")), null != e.adapterInput && e.hasOwnProperty("adapterInput") && (n.adapterInput = e.adapterInput, t.oneofs && (n.stream = "adapterInput")), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.DebugOutput = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        var a;
                        return i.prototype.session = "", i.prototype.output = null, i.prototype.adapterOutput = null, Object.defineProperty(i.prototype, "stream", {
                            get: r.oneOfGetter(a = ["output", "adapterOutput"]),
                            set: r.oneOfSetter(a)
                        }), i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.session && Object.hasOwnProperty.call(e, "session") && t.uint32(10).string(e.session), null != e.output && Object.hasOwnProperty.call(e, "output") && t.uint32(18).string(e.output), null != e.adapterOutput && Object.hasOwnProperty.call(e, "adapterOutput") && t.uint32(26).string(e.adapterOutput), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.DebugOutput; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.session = e.string();
                                        break;
                                    case 2:
                                        i.output = e.string();
                                        break;
                                    case 3:
                                        i.adapterOutput = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            var t = {};
                            if (null != e.session && e.hasOwnProperty("session") && !r.isString(e.session)) return "session: string expected";
                            if (null != e.output && e.hasOwnProperty("output") && (t.stream = 1, !r.isString(e.output))) return "output: string expected";
                            if (null != e.adapterOutput && e.hasOwnProperty("adapterOutput")) {
                                if (1 === t.stream) return "stream: multiple values";
                                if (t.stream = 1, !r.isString(e.adapterOutput)) return "adapterOutput: string expected"
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.DebugOutput) return e;
                            var t = new o.api.DebugOutput;
                            return null != e.session && (t.session = String(e.session)), null != e.output && (t.output = String(e.output)), null != e.adapterOutput && (t.adapterOutput = String(e.adapterOutput)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.session = ""), null != e.session && e.hasOwnProperty("session") && (n.session = e.session), null != e.output && e.hasOwnProperty("output") && (n.output = e.output, t.oneofs && (n.stream = "output")), null != e.adapterOutput && e.hasOwnProperty("adapterOutput") && (n.adapterOutput = e.adapterOutput, t.oneofs && (n.stream = "adapterOutput")), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.DebugStop = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.session = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.session && Object.hasOwnProperty.call(e, "session") && t.uint32(10).string(e.session), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.DebugStop; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.session = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.session && e.hasOwnProperty("session") && !r.isString(e.session) ? "session: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.DebugStop) return e;
                            var t = new o.api.DebugStop;
                            return null != e.session && (t.session = String(e.session)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.session = ""), null != e.session && e.hasOwnProperty("session") && (n.session = e.session), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.DebugLeave = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.session = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.session && Object.hasOwnProperty.call(e, "session") && t.uint32(10).string(e.session), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.DebugLeave; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.session = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.session && e.hasOwnProperty("session") && !r.isString(e.session) ? "session: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.DebugLeave) return e;
                            var t = new o.api.DebugLeave;
                            return null != e.session && (t.session = String(e.session)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.session = ""), null != e.session && e.hasOwnProperty("session") && (n.session = e.session), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.DebugSessions = function() {
                        function i(e) {
                            if (this.sessions = {}, e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.sessions = r.emptyObject, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.sessions && Object.hasOwnProperty.call(e, "sessions"))
                                for (var r = Object.keys(e.sessions), o = 0; o < r.length; ++o) t.uint32(10).fork().uint32(10).string(r[o]).uint32(16).int32(e.sessions[r[o]]).ldelim();
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var i, a, s = void 0 === n ? e.len : e.pos + n, l = new o.api.DebugSessions; e.pos < s;) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                    case 1:
                                        l.sessions === r.emptyObject && (l.sessions = {});
                                        var c = e.uint32() + e.pos;
                                        for (i = "", a = 0; e.pos < c;) {
                                            var p = e.uint32();
                                            switch (p >>> 3) {
                                                case 1:
                                                    i = e.string();
                                                    break;
                                                case 2:
                                                    a = e.int32();
                                                    break;
                                                default:
                                                    e.skipType(7 & p)
                                            }
                                        }
                                        l.sessions[i] = a;
                                        break;
                                    default:
                                        e.skipType(7 & u)
                                }
                            }
                            return l
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.sessions && e.hasOwnProperty("sessions")) {
                                if (!r.isObject(e.sessions)) return "sessions: object expected";
                                for (var t = Object.keys(e.sessions), n = 0; n < t.length; ++n) switch (e.sessions[t[n]]) {
                                    default: return "sessions: enum value{k:string} expected";
                                    case 0:
                                            case 1:
                                }
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.DebugSessions) return e;
                            var t = new o.api.DebugSessions;
                            if (e.sessions) {
                                if ("object" !== typeof e.sessions) throw TypeError(".api.DebugSessions.sessions: object expected");
                                t.sessions = {};
                                for (var n = Object.keys(e.sessions), r = 0; r < n.length; ++r) switch (e.sessions[n[r]]) {
                                    case "Stopped":
                                    case 0:
                                        t.sessions[n[r]] = 0;
                                        break;
                                    case "Running":
                                    case 1:
                                        t.sessions[n[r]] = 1
                                }
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n, r = {};
                            if ((t.objects || t.defaults) && (r.sessions = {}), e.sessions && (n = Object.keys(e.sessions)).length) {
                                r.sessions = {};
                                for (var i = 0; i < n.length; ++i) r.sessions[n[i]] = t.enums === String ? o.api.State[e.sessions[n[i]]] : e.sessions[n[i]]
                            }
                            return r
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.DotReplitGetRequest = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.DotReplitGetRequest; e.pos < r;) {
                                var a = e.uint32();
                                e.skipType(7 & a)
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null
                        }, r.fromObject = function(e) {
                            return e instanceof o.api.DotReplitGetRequest ? e : new o.api.DotReplitGetRequest
                        }, r.toObject = function() {
                            return {}
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.DotReplitGetResponse = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.dotReplit = null, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.dotReplit && Object.hasOwnProperty.call(e, "dotReplit") && o.api.DotReplit.encode(e.dotReplit, t.uint32(10).fork()).ldelim(), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.DotReplitGetResponse; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.dotReplit = o.api.DotReplit.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.dotReplit && e.hasOwnProperty("dotReplit")) {
                                var t = o.api.DotReplit.verify(e.dotReplit);
                                if (t) return "dotReplit." + t
                            }
                            return null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.DotReplitGetResponse) return e;
                            var t = new o.api.DotReplitGetResponse;
                            if (null != e.dotReplit) {
                                if ("object" !== typeof e.dotReplit) throw TypeError(".api.DotReplitGetResponse.dotReplit: object expected");
                                t.dotReplit = o.api.DotReplit.fromObject(e.dotReplit)
                            }
                            return t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.dotReplit = null), null != e.dotReplit && e.hasOwnProperty("dotReplit") && (n.dotReplit = o.api.DotReplit.toObject(e.dotReplit, t)), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.DebugAddBreakpointRequest = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.path = "", i.prototype.otVersion = 0, i.prototype.otIndex = 0, i.prototype.sessionLocal = !1, i.prototype.line = 0, i.prototype.logMessage = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.path && Object.hasOwnProperty.call(e, "path") && t.uint32(10).string(e.path), null != e.otVersion && Object.hasOwnProperty.call(e, "otVersion") && t.uint32(16).uint32(e.otVersion), null != e.otIndex && Object.hasOwnProperty.call(e, "otIndex") && t.uint32(24).uint32(e.otIndex), null != e.line && Object.hasOwnProperty.call(e, "line") && t.uint32(32).int32(e.line), null != e.logMessage && Object.hasOwnProperty.call(e, "logMessage") && t.uint32(42).string(e.logMessage), null != e.sessionLocal && Object.hasOwnProperty.call(e, "sessionLocal") && t.uint32(48).bool(e.sessionLocal), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.DebugAddBreakpointRequest; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.path = e.string();
                                        break;
                                    case 2:
                                        i.otVersion = e.uint32();
                                        break;
                                    case 3:
                                        i.otIndex = e.uint32();
                                        break;
                                    case 6:
                                        i.sessionLocal = e.bool();
                                        break;
                                    case 4:
                                        i.line = e.int32();
                                        break;
                                    case 5:
                                        i.logMessage = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.path && e.hasOwnProperty("path") && !r.isString(e.path) ? "path: string expected" : null != e.otVersion && e.hasOwnProperty("otVersion") && !r.isInteger(e.otVersion) ? "otVersion: integer expected" : null != e.otIndex && e.hasOwnProperty("otIndex") && !r.isInteger(e.otIndex) ? "otIndex: integer expected" : null != e.sessionLocal && e.hasOwnProperty("sessionLocal") && "boolean" !== typeof e.sessionLocal ? "sessionLocal: boolean expected" : null != e.line && e.hasOwnProperty("line") && !r.isInteger(e.line) ? "line: integer expected" : null != e.logMessage && e.hasOwnProperty("logMessage") && !r.isString(e.logMessage) ? "logMessage: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.DebugAddBreakpointRequest) return e;
                            var t = new o.api.DebugAddBreakpointRequest;
                            return null != e.path && (t.path = String(e.path)), null != e.otVersion && (t.otVersion = e.otVersion >>> 0), null != e.otIndex && (t.otIndex = e.otIndex >>> 0), null != e.sessionLocal && (t.sessionLocal = Boolean(e.sessionLocal)), null != e.line && (t.line = 0 | e.line), null != e.logMessage && (t.logMessage = String(e.logMessage)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.path = "", n.otVersion = 0, n.otIndex = 0, n.line = 0, n.logMessage = "", n.sessionLocal = !1), null != e.path && e.hasOwnProperty("path") && (n.path = e.path), null != e.otVersion && e.hasOwnProperty("otVersion") && (n.otVersion = e.otVersion), null != e.otIndex && e.hasOwnProperty("otIndex") && (n.otIndex = e.otIndex), null != e.line && e.hasOwnProperty("line") && (n.line = e.line), null != e.logMessage && e.hasOwnProperty("logMessage") && (n.logMessage = e.logMessage), null != e.sessionLocal && e.hasOwnProperty("sessionLocal") && (n.sessionLocal = e.sessionLocal), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.DebugUpdateBreakpointRequest = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.breakpointId = "", i.prototype.logMessage = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.breakpointId && Object.hasOwnProperty.call(e, "breakpointId") && t.uint32(10).string(e.breakpointId), null != e.logMessage && Object.hasOwnProperty.call(e, "logMessage") && t.uint32(18).string(e.logMessage), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.DebugUpdateBreakpointRequest; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.breakpointId = e.string();
                                        break;
                                    case 2:
                                        i.logMessage = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.breakpointId && e.hasOwnProperty("breakpointId") && !r.isString(e.breakpointId) ? "breakpointId: string expected" : null != e.logMessage && e.hasOwnProperty("logMessage") && !r.isString(e.logMessage) ? "logMessage: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.DebugUpdateBreakpointRequest) return e;
                            var t = new o.api.DebugUpdateBreakpointRequest;
                            return null != e.breakpointId && (t.breakpointId = String(e.breakpointId)), null != e.logMessage && (t.logMessage = String(e.logMessage)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.breakpointId = "", n.logMessage = ""), null != e.breakpointId && e.hasOwnProperty("breakpointId") && (n.breakpointId = e.breakpointId), null != e.logMessage && e.hasOwnProperty("logMessage") && (n.logMessage = e.logMessage), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.DebugRemoveBreakpointRequest = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.breakpointId = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.breakpointId && Object.hasOwnProperty.call(e, "breakpointId") && t.uint32(18).string(e.breakpointId), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.DebugRemoveBreakpointRequest; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 2:
                                        i.breakpointId = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.breakpointId && e.hasOwnProperty("breakpointId") && !r.isString(e.breakpointId) ? "breakpointId: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.DebugRemoveBreakpointRequest) return e;
                            var t = new o.api.DebugRemoveBreakpointRequest;
                            return null != e.breakpointId && (t.breakpointId = String(e.breakpointId)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.breakpointId = ""), null != e.breakpointId && e.hasOwnProperty("breakpointId") && (n.breakpointId = e.breakpointId), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.DebugBreakpointEvent = function() {
                        function i(e) {
                            if (this.breakpoints = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.path = "", i.prototype.absolutePath = "", i.prototype.breakpoints = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.path && Object.hasOwnProperty.call(e, "path") && t.uint32(10).string(e.path), null != e.breakpoints && e.breakpoints.length)
                                for (var r = 0; r < e.breakpoints.length; ++r) o.api.DebugBreakpoint.encode(e.breakpoints[r], t.uint32(18).fork()).ldelim();
                            return null != e.absolutePath && Object.hasOwnProperty.call(e, "absolutePath") && t.uint32(26).string(e.absolutePath), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.DebugBreakpointEvent; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.path = e.string();
                                        break;
                                    case 3:
                                        i.absolutePath = e.string();
                                        break;
                                    case 2:
                                        i.breakpoints && i.breakpoints.length || (i.breakpoints = []), i.breakpoints.push(o.api.DebugBreakpoint.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.path && e.hasOwnProperty("path") && !r.isString(e.path)) return "path: string expected";
                            if (null != e.absolutePath && e.hasOwnProperty("absolutePath") && !r.isString(e.absolutePath)) return "absolutePath: string expected";
                            if (null != e.breakpoints && e.hasOwnProperty("breakpoints")) {
                                if (!Array.isArray(e.breakpoints)) return "breakpoints: array expected";
                                for (var t = 0; t < e.breakpoints.length; ++t) {
                                    var n = o.api.DebugBreakpoint.verify(e.breakpoints[t]);
                                    if (n) return "breakpoints." + n
                                }
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.DebugBreakpointEvent) return e;
                            var t = new o.api.DebugBreakpointEvent;
                            if (null != e.path && (t.path = String(e.path)), null != e.absolutePath && (t.absolutePath = String(e.absolutePath)), e.breakpoints) {
                                if (!Array.isArray(e.breakpoints)) throw TypeError(".api.DebugBreakpointEvent.breakpoints: array expected");
                                t.breakpoints = [];
                                for (var n = 0; n < e.breakpoints.length; ++n) {
                                    if ("object" !== typeof e.breakpoints[n]) throw TypeError(".api.DebugBreakpointEvent.breakpoints: object expected");
                                    t.breakpoints[n] = o.api.DebugBreakpoint.fromObject(e.breakpoints[n])
                                }
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.breakpoints = []), t.defaults && (n.path = "", n.absolutePath = ""), null != e.path && e.hasOwnProperty("path") && (n.path = e.path), e.breakpoints && e.breakpoints.length) {
                                n.breakpoints = [];
                                for (var r = 0; r < e.breakpoints.length; ++r) n.breakpoints[r] = o.api.DebugBreakpoint.toObject(e.breakpoints[r], t)
                            }
                            return null != e.absolutePath && e.hasOwnProperty("absolutePath") && (n.absolutePath = e.absolutePath), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.DebugBreakpoint = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.breakpointId = "", i.prototype.line = 0, i.prototype.otVersion = 0, i.prototype.otIndex = 0, i.prototype.sessionLocal = !1, i.prototype.logMessage = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.breakpointId && Object.hasOwnProperty.call(e, "breakpointId") && t.uint32(10).string(e.breakpointId), null != e.line && Object.hasOwnProperty.call(e, "line") && t.uint32(16).int32(e.line), null != e.otVersion && Object.hasOwnProperty.call(e, "otVersion") && t.uint32(24).uint32(e.otVersion), null != e.otIndex && Object.hasOwnProperty.call(e, "otIndex") && t.uint32(32).uint32(e.otIndex), null != e.logMessage && Object.hasOwnProperty.call(e, "logMessage") && t.uint32(42).string(e.logMessage), null != e.sessionLocal && Object.hasOwnProperty.call(e, "sessionLocal") && t.uint32(48).bool(e.sessionLocal), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.DebugBreakpoint; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.breakpointId = e.string();
                                        break;
                                    case 2:
                                        i.line = e.int32();
                                        break;
                                    case 3:
                                        i.otVersion = e.uint32();
                                        break;
                                    case 4:
                                        i.otIndex = e.uint32();
                                        break;
                                    case 6:
                                        i.sessionLocal = e.bool();
                                        break;
                                    case 5:
                                        i.logMessage = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.breakpointId && e.hasOwnProperty("breakpointId") && !r.isString(e.breakpointId) ? "breakpointId: string expected" : null != e.line && e.hasOwnProperty("line") && !r.isInteger(e.line) ? "line: integer expected" : null != e.otVersion && e.hasOwnProperty("otVersion") && !r.isInteger(e.otVersion) ? "otVersion: integer expected" : null != e.otIndex && e.hasOwnProperty("otIndex") && !r.isInteger(e.otIndex) ? "otIndex: integer expected" : null != e.sessionLocal && e.hasOwnProperty("sessionLocal") && "boolean" !== typeof e.sessionLocal ? "sessionLocal: boolean expected" : null != e.logMessage && e.hasOwnProperty("logMessage") && !r.isString(e.logMessage) ? "logMessage: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.DebugBreakpoint) return e;
                            var t = new o.api.DebugBreakpoint;
                            return null != e.breakpointId && (t.breakpointId = String(e.breakpointId)), null != e.line && (t.line = 0 | e.line), null != e.otVersion && (t.otVersion = e.otVersion >>> 0), null != e.otIndex && (t.otIndex = e.otIndex >>> 0), null != e.sessionLocal && (t.sessionLocal = Boolean(e.sessionLocal)), null != e.logMessage && (t.logMessage = String(e.logMessage)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.breakpointId = "", n.line = 0, n.otVersion = 0, n.otIndex = 0, n.logMessage = "", n.sessionLocal = !1), null != e.breakpointId && e.hasOwnProperty("breakpointId") && (n.breakpointId = e.breakpointId), null != e.line && e.hasOwnProperty("line") && (n.line = e.line), null != e.otVersion && e.hasOwnProperty("otVersion") && (n.otVersion = e.otVersion), null != e.otIndex && e.hasOwnProperty("otIndex") && (n.otIndex = e.otIndex), null != e.logMessage && e.hasOwnProperty("logMessage") && (n.logMessage = e.logMessage), null != e.sessionLocal && e.hasOwnProperty("sessionLocal") && (n.sessionLocal = e.sessionLocal), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.DotReplit = function() {
                        function i(e) {
                            if (this.languages = {}, e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.run = null, i.prototype.compile = null, i.prototype.debugger = null, i.prototype.language = "", i.prototype.onBoot = null, i.prototype.packager = null, i.prototype.interpreter = null, i.prototype.entrypoint = "", i.prototype.languages = r.emptyObject, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.run && Object.hasOwnProperty.call(e, "run") && o.api.Exec.encode(e.run, t.uint32(10).fork()).ldelim(), null != e.compile && Object.hasOwnProperty.call(e, "compile") && o.api.Exec.encode(e.compile, t.uint32(18).fork()).ldelim(), null != e.debugger && Object.hasOwnProperty.call(e, "debugger") && o.api.DebuggerConfig.encode(e.debugger, t.uint32(26).fork()).ldelim(), null != e.language && Object.hasOwnProperty.call(e, "language") && t.uint32(34).string(e.language), null != e.onBoot && Object.hasOwnProperty.call(e, "onBoot") && o.api.Exec.encode(e.onBoot, t.uint32(42).fork()).ldelim(), null != e.packager && Object.hasOwnProperty.call(e, "packager") && o.api.DotReplitPackager.encode(e.packager, t.uint32(50).fork()).ldelim(), null != e.interpreter && Object.hasOwnProperty.call(e, "interpreter") && o.api.DotReplitInterp.encode(e.interpreter, t.uint32(58).fork()).ldelim(), null != e.entrypoint && Object.hasOwnProperty.call(e, "entrypoint") && t.uint32(66).string(e.entrypoint), null != e.languages && Object.hasOwnProperty.call(e, "languages"))
                                for (var r = Object.keys(e.languages), i = 0; i < r.length; ++i) t.uint32(74).fork().uint32(10).string(r[i]), o.api.DotReplitLanguage.encode(e.languages[r[i]], t.uint32(18).fork()).ldelim().ldelim();
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var i, a, s = void 0 === n ? e.len : e.pos + n, l = new o.api.DotReplit; e.pos < s;) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                    case 1:
                                        l.run = o.api.Exec.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        l.compile = o.api.Exec.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        l.debugger = o.api.DebuggerConfig.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        l.language = e.string();
                                        break;
                                    case 5:
                                        l.onBoot = o.api.Exec.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        l.packager = o.api.DotReplitPackager.decode(e, e.uint32());
                                        break;
                                    case 7:
                                        l.interpreter = o.api.DotReplitInterp.decode(e, e.uint32());
                                        break;
                                    case 8:
                                        l.entrypoint = e.string();
                                        break;
                                    case 9:
                                        l.languages === r.emptyObject && (l.languages = {});
                                        var c = e.uint32() + e.pos;
                                        for (i = "", a = null; e.pos < c;) {
                                            var p = e.uint32();
                                            switch (p >>> 3) {
                                                case 1:
                                                    i = e.string();
                                                    break;
                                                case 2:
                                                    a = o.api.DotReplitLanguage.decode(e, e.uint32());
                                                    break;
                                                default:
                                                    e.skipType(7 & p)
                                            }
                                        }
                                        l.languages[i] = a;
                                        break;
                                    default:
                                        e.skipType(7 & u)
                                }
                            }
                            return l
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.run && e.hasOwnProperty("run") && (i = o.api.Exec.verify(e.run))) return "run." + i;
                            if (null != e.compile && e.hasOwnProperty("compile") && (i = o.api.Exec.verify(e.compile))) return "compile." + i;
                            if (null != e.debugger && e.hasOwnProperty("debugger") && (i = o.api.DebuggerConfig.verify(e.debugger))) return "debugger." + i;
                            if (null != e.language && e.hasOwnProperty("language") && !r.isString(e.language)) return "language: string expected";
                            if (null != e.onBoot && e.hasOwnProperty("onBoot") && (i = o.api.Exec.verify(e.onBoot))) return "onBoot." + i;
                            if (null != e.packager && e.hasOwnProperty("packager") && (i = o.api.DotReplitPackager.verify(e.packager))) return "packager." + i;
                            if (null != e.interpreter && e.hasOwnProperty("interpreter") && (i = o.api.DotReplitInterp.verify(e.interpreter))) return "interpreter." + i;
                            if (null != e.entrypoint && e.hasOwnProperty("entrypoint") && !r.isString(e.entrypoint)) return "entrypoint: string expected";
                            if (null != e.languages && e.hasOwnProperty("languages")) {
                                if (!r.isObject(e.languages)) return "languages: object expected";
                                for (var t = Object.keys(e.languages), n = 0; n < t.length; ++n) {
                                    var i;
                                    if (i = o.api.DotReplitLanguage.verify(e.languages[t[n]])) return "languages." + i
                                }
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.DotReplit) return e;
                            var t = new o.api.DotReplit;
                            if (null != e.run) {
                                if ("object" !== typeof e.run) throw TypeError(".api.DotReplit.run: object expected");
                                t.run = o.api.Exec.fromObject(e.run)
                            }
                            if (null != e.compile) {
                                if ("object" !== typeof e.compile) throw TypeError(".api.DotReplit.compile: object expected");
                                t.compile = o.api.Exec.fromObject(e.compile)
                            }
                            if (null != e.debugger) {
                                if ("object" !== typeof e.debugger) throw TypeError(".api.DotReplit.debugger: object expected");
                                t.debugger = o.api.DebuggerConfig.fromObject(e.debugger)
                            }
                            if (null != e.language && (t.language = String(e.language)), null != e.onBoot) {
                                if ("object" !== typeof e.onBoot) throw TypeError(".api.DotReplit.onBoot: object expected");
                                t.onBoot = o.api.Exec.fromObject(e.onBoot)
                            }
                            if (null != e.packager) {
                                if ("object" !== typeof e.packager) throw TypeError(".api.DotReplit.packager: object expected");
                                t.packager = o.api.DotReplitPackager.fromObject(e.packager)
                            }
                            if (null != e.interpreter) {
                                if ("object" !== typeof e.interpreter) throw TypeError(".api.DotReplit.interpreter: object expected");
                                t.interpreter = o.api.DotReplitInterp.fromObject(e.interpreter)
                            }
                            if (null != e.entrypoint && (t.entrypoint = String(e.entrypoint)), e.languages) {
                                if ("object" !== typeof e.languages) throw TypeError(".api.DotReplit.languages: object expected");
                                t.languages = {};
                                for (var n = Object.keys(e.languages), r = 0; r < n.length; ++r) {
                                    if ("object" !== typeof e.languages[n[r]]) throw TypeError(".api.DotReplit.languages: object expected");
                                    t.languages[n[r]] = o.api.DotReplitLanguage.fromObject(e.languages[n[r]])
                                }
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n, r = {};
                            if ((t.objects || t.defaults) && (r.languages = {}), t.defaults && (r.run = null, r.compile = null, r.debugger = null, r.language = "", r.onBoot = null, r.packager = null, r.interpreter = null, r.entrypoint = ""), null != e.run && e.hasOwnProperty("run") && (r.run = o.api.Exec.toObject(e.run, t)), null != e.compile && e.hasOwnProperty("compile") && (r.compile = o.api.Exec.toObject(e.compile, t)), null != e.debugger && e.hasOwnProperty("debugger") && (r.debugger = o.api.DebuggerConfig.toObject(e.debugger, t)), null != e.language && e.hasOwnProperty("language") && (r.language = e.language), null != e.onBoot && e.hasOwnProperty("onBoot") && (r.onBoot = o.api.Exec.toObject(e.onBoot, t)), null != e.packager && e.hasOwnProperty("packager") && (r.packager = o.api.DotReplitPackager.toObject(e.packager, t)), null != e.interpreter && e.hasOwnProperty("interpreter") && (r.interpreter = o.api.DotReplitInterp.toObject(e.interpreter, t)), null != e.entrypoint && e.hasOwnProperty("entrypoint") && (r.entrypoint = e.entrypoint), e.languages && (n = Object.keys(e.languages)).length) {
                                r.languages = {};
                                for (var i = 0; i < n.length; ++i) r.languages[n[i]] = o.api.DotReplitLanguage.toObject(e.languages[n[i]], t)
                            }
                            return r
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.DotReplitInterp = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.command = null, i.prototype.prompt = r.newBuffer([]), i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.command && Object.hasOwnProperty.call(e, "command") && o.api.Exec.encode(e.command, t.uint32(10).fork()).ldelim(), null != e.prompt && Object.hasOwnProperty.call(e, "prompt") && t.uint32(18).bytes(e.prompt), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.DotReplitInterp; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.command = o.api.Exec.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        i.prompt = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.command && e.hasOwnProperty("command")) {
                                var t = o.api.Exec.verify(e.command);
                                if (t) return "command." + t
                            }
                            return null != e.prompt && e.hasOwnProperty("prompt") && !(e.prompt && "number" === typeof e.prompt.length || r.isString(e.prompt)) ? "prompt: buffer expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.DotReplitInterp) return e;
                            var t = new o.api.DotReplitInterp;
                            if (null != e.command) {
                                if ("object" !== typeof e.command) throw TypeError(".api.DotReplitInterp.command: object expected");
                                t.command = o.api.Exec.fromObject(e.command)
                            }
                            return null != e.prompt && ("string" === typeof e.prompt ? r.base64.decode(e.prompt, t.prompt = r.newBuffer(r.base64.length(e.prompt)), 0) : e.prompt.length && (t.prompt = e.prompt)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.command = null, t.bytes === String ? n.prompt = "" : (n.prompt = [], t.bytes !== Array && (n.prompt = r.newBuffer(n.prompt)))), null != e.command && e.hasOwnProperty("command") && (n.command = o.api.Exec.toObject(e.command, t)), null != e.prompt && e.hasOwnProperty("prompt") && (n.prompt = t.bytes === String ? r.base64.encode(e.prompt, 0, e.prompt.length) : t.bytes === Array ? Array.prototype.slice.call(e.prompt) : e.prompt), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.DotReplitLanguage = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.pattern = "", i.prototype.syntax = "", i.prototype.languageServer = null, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.pattern && Object.hasOwnProperty.call(e, "pattern") && t.uint32(10).string(e.pattern), null != e.syntax && Object.hasOwnProperty.call(e, "syntax") && t.uint32(18).string(e.syntax), null != e.languageServer && Object.hasOwnProperty.call(e, "languageServer") && o.api.LanguageServerConfig.encode(e.languageServer, t.uint32(26).fork()).ldelim(), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.DotReplitLanguage; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.pattern = e.string();
                                        break;
                                    case 2:
                                        i.syntax = e.string();
                                        break;
                                    case 3:
                                        i.languageServer = o.api.LanguageServerConfig.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.pattern && e.hasOwnProperty("pattern") && !r.isString(e.pattern)) return "pattern: string expected";
                            if (null != e.syntax && e.hasOwnProperty("syntax") && !r.isString(e.syntax)) return "syntax: string expected";
                            if (null != e.languageServer && e.hasOwnProperty("languageServer")) {
                                var t = o.api.LanguageServerConfig.verify(e.languageServer);
                                if (t) return "languageServer." + t
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.DotReplitLanguage) return e;
                            var t = new o.api.DotReplitLanguage;
                            if (null != e.pattern && (t.pattern = String(e.pattern)), null != e.syntax && (t.syntax = String(e.syntax)), null != e.languageServer) {
                                if ("object" !== typeof e.languageServer) throw TypeError(".api.DotReplitLanguage.languageServer: object expected");
                                t.languageServer = o.api.LanguageServerConfig.fromObject(e.languageServer)
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.pattern = "", n.syntax = "", n.languageServer = null), null != e.pattern && e.hasOwnProperty("pattern") && (n.pattern = e.pattern), null != e.syntax && e.hasOwnProperty("syntax") && (n.syntax = e.syntax), null != e.languageServer && e.hasOwnProperty("languageServer") && (n.languageServer = o.api.LanguageServerConfig.toObject(e.languageServer, t)), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.LanguageServerConfig = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.startCommand = null, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.startCommand && Object.hasOwnProperty.call(e, "startCommand") && o.api.Exec.encode(e.startCommand, t.uint32(10).fork()).ldelim(), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.LanguageServerConfig; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.startCommand = o.api.Exec.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.startCommand && e.hasOwnProperty("startCommand")) {
                                var t = o.api.Exec.verify(e.startCommand);
                                if (t) return "startCommand." + t
                            }
                            return null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.LanguageServerConfig) return e;
                            var t = new o.api.LanguageServerConfig;
                            if (null != e.startCommand) {
                                if ("object" !== typeof e.startCommand) throw TypeError(".api.LanguageServerConfig.startCommand: object expected");
                                t.startCommand = o.api.Exec.fromObject(e.startCommand)
                            }
                            return t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.startCommand = null), null != e.startCommand && e.hasOwnProperty("startCommand") && (n.startCommand = o.api.Exec.toObject(e.startCommand, t)), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.DotReplitPackager = function() {
                        function i(e) {
                            if (this.env = {}, this.ignoredPaths = [], this.ignoredPackages = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.afterInstall = null, i.prototype.language = "", i.prototype.features = null, i.prototype.env = r.emptyObject, i.prototype.ignoredPaths = r.emptyArray, i.prototype.ignoredPackages = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.afterInstall && Object.hasOwnProperty.call(e, "afterInstall") && o.api.Exec.encode(e.afterInstall, t.uint32(10).fork()).ldelim(), null != e.ignoredPaths && e.ignoredPaths.length)
                                for (var r = 0; r < e.ignoredPaths.length; ++r) t.uint32(18).string(e.ignoredPaths[r]);
                            if (null != e.ignoredPackages && e.ignoredPackages.length)
                                for (r = 0; r < e.ignoredPackages.length; ++r) t.uint32(26).string(e.ignoredPackages[r]);
                            if (null != e.language && Object.hasOwnProperty.call(e, "language") && t.uint32(34).string(e.language), null != e.features && Object.hasOwnProperty.call(e, "features") && o.api.DotReplitPackagerFeatures.encode(e.features, t.uint32(42).fork()).ldelim(), null != e.env && Object.hasOwnProperty.call(e, "env")) {
                                var i = Object.keys(e.env);
                                for (r = 0; r < i.length; ++r) t.uint32(50).fork().uint32(10).string(i[r]).uint32(18).string(e.env[i[r]]).ldelim()
                            }
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var i, a, s = void 0 === n ? e.len : e.pos + n, l = new o.api.DotReplitPackager; e.pos < s;) {
                                var u = e.uint32();
                                switch (u >>> 3) {
                                    case 1:
                                        l.afterInstall = o.api.Exec.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        l.language = e.string();
                                        break;
                                    case 5:
                                        l.features = o.api.DotReplitPackagerFeatures.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        l.env === r.emptyObject && (l.env = {});
                                        var c = e.uint32() + e.pos;
                                        for (i = "", a = ""; e.pos < c;) {
                                            var p = e.uint32();
                                            switch (p >>> 3) {
                                                case 1:
                                                    i = e.string();
                                                    break;
                                                case 2:
                                                    a = e.string();
                                                    break;
                                                default:
                                                    e.skipType(7 & p)
                                            }
                                        }
                                        l.env[i] = a;
                                        break;
                                    case 2:
                                        l.ignoredPaths && l.ignoredPaths.length || (l.ignoredPaths = []), l.ignoredPaths.push(e.string());
                                        break;
                                    case 3:
                                        l.ignoredPackages && l.ignoredPackages.length || (l.ignoredPackages = []), l.ignoredPackages.push(e.string());
                                        break;
                                    default:
                                        e.skipType(7 & u)
                                }
                            }
                            return l
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            var t;
                            if (null != e.afterInstall && e.hasOwnProperty("afterInstall") && (t = o.api.Exec.verify(e.afterInstall))) return "afterInstall." + t;
                            if (null != e.language && e.hasOwnProperty("language") && !r.isString(e.language)) return "language: string expected";
                            if (null != e.features && e.hasOwnProperty("features") && (t = o.api.DotReplitPackagerFeatures.verify(e.features))) return "features." + t;
                            if (null != e.env && e.hasOwnProperty("env")) {
                                if (!r.isObject(e.env)) return "env: object expected";
                                for (var n = Object.keys(e.env), i = 0; i < n.length; ++i)
                                    if (!r.isString(e.env[n[i]])) return "env: string{k:string} expected"
                            }
                            if (null != e.ignoredPaths && e.hasOwnProperty("ignoredPaths")) {
                                if (!Array.isArray(e.ignoredPaths)) return "ignoredPaths: array expected";
                                for (i = 0; i < e.ignoredPaths.length; ++i)
                                    if (!r.isString(e.ignoredPaths[i])) return "ignoredPaths: string[] expected"
                            }
                            if (null != e.ignoredPackages && e.hasOwnProperty("ignoredPackages")) {
                                if (!Array.isArray(e.ignoredPackages)) return "ignoredPackages: array expected";
                                for (i = 0; i < e.ignoredPackages.length; ++i)
                                    if (!r.isString(e.ignoredPackages[i])) return "ignoredPackages: string[] expected"
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.DotReplitPackager) return e;
                            var t = new o.api.DotReplitPackager;
                            if (null != e.afterInstall) {
                                if ("object" !== typeof e.afterInstall) throw TypeError(".api.DotReplitPackager.afterInstall: object expected");
                                t.afterInstall = o.api.Exec.fromObject(e.afterInstall)
                            }
                            if (null != e.language && (t.language = String(e.language)), null != e.features) {
                                if ("object" !== typeof e.features) throw TypeError(".api.DotReplitPackager.features: object expected");
                                t.features = o.api.DotReplitPackagerFeatures.fromObject(e.features)
                            }
                            if (e.env) {
                                if ("object" !== typeof e.env) throw TypeError(".api.DotReplitPackager.env: object expected");
                                t.env = {};
                                for (var n = Object.keys(e.env), r = 0; r < n.length; ++r) t.env[n[r]] = String(e.env[n[r]])
                            }
                            if (e.ignoredPaths) {
                                if (!Array.isArray(e.ignoredPaths)) throw TypeError(".api.DotReplitPackager.ignoredPaths: array expected");
                                for (t.ignoredPaths = [], r = 0; r < e.ignoredPaths.length; ++r) t.ignoredPaths[r] = String(e.ignoredPaths[r])
                            }
                            if (e.ignoredPackages) {
                                if (!Array.isArray(e.ignoredPackages)) throw TypeError(".api.DotReplitPackager.ignoredPackages: array expected");
                                for (t.ignoredPackages = [], r = 0; r < e.ignoredPackages.length; ++r) t.ignoredPackages[r] = String(e.ignoredPackages[r])
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n, r = {};
                            if ((t.arrays || t.defaults) && (r.ignoredPaths = [], r.ignoredPackages = []), (t.objects || t.defaults) && (r.env = {}), t.defaults && (r.afterInstall = null, r.language = "", r.features = null), null != e.afterInstall && e.hasOwnProperty("afterInstall") && (r.afterInstall = o.api.Exec.toObject(e.afterInstall, t)), e.ignoredPaths && e.ignoredPaths.length) {
                                r.ignoredPaths = [];
                                for (var i = 0; i < e.ignoredPaths.length; ++i) r.ignoredPaths[i] = e.ignoredPaths[i]
                            }
                            if (e.ignoredPackages && e.ignoredPackages.length)
                                for (r.ignoredPackages = [], i = 0; i < e.ignoredPackages.length; ++i) r.ignoredPackages[i] = e.ignoredPackages[i];
                            if (null != e.language && e.hasOwnProperty("language") && (r.language = e.language), null != e.features && e.hasOwnProperty("features") && (r.features = o.api.DotReplitPackagerFeatures.toObject(e.features, t)), e.env && (n = Object.keys(e.env)).length)
                                for (r.env = {}, i = 0; i < n.length; ++i) r.env[n[i]] = e.env[n[i]];
                            return r
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.DotReplitPackagerFeatures = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.packageSearch = !1, r.prototype.guessImports = !1, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.packageSearch && Object.hasOwnProperty.call(e, "packageSearch") && t.uint32(8).bool(e.packageSearch), null != e.guessImports && Object.hasOwnProperty.call(e, "guessImports") && t.uint32(16).bool(e.guessImports), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.DotReplitPackagerFeatures; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.packageSearch = e.bool();
                                        break;
                                    case 2:
                                        i.guessImports = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.packageSearch && e.hasOwnProperty("packageSearch") && "boolean" !== typeof e.packageSearch ? "packageSearch: boolean expected" : null != e.guessImports && e.hasOwnProperty("guessImports") && "boolean" !== typeof e.guessImports ? "guessImports: boolean expected" : null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.DotReplitPackagerFeatures) return e;
                            var t = new o.api.DotReplitPackagerFeatures;
                            return null != e.packageSearch && (t.packageSearch = Boolean(e.packageSearch)), null != e.guessImports && (t.guessImports = Boolean(e.guessImports)), t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.packageSearch = !1, n.guessImports = !1), null != e.packageSearch && e.hasOwnProperty("packageSearch") && (n.packageSearch = e.packageSearch), null != e.guessImports && e.hasOwnProperty("guessImports") && (n.guessImports = e.guessImports), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.DebuggerConfig = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.support = !1, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.support && Object.hasOwnProperty.call(e, "support") && t.uint32(8).bool(e.support), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.DebuggerConfig; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.support = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.support && e.hasOwnProperty("support") && "boolean" !== typeof e.support ? "support: boolean expected" : null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.DebuggerConfig) return e;
                            var t = new o.api.DebuggerConfig;
                            return null != e.support && (t.support = Boolean(e.support)), t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.support = !1), null != e.support && e.hasOwnProperty("support") && (n.support = e.support), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.Repl = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.id = "", i.prototype.language = "", i.prototype.bucket = "", i.prototype.slug = "", i.prototype.user = "", i.prototype.sourceRepl = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(10).string(e.id), null != e.language && Object.hasOwnProperty.call(e, "language") && t.uint32(18).string(e.language), null != e.bucket && Object.hasOwnProperty.call(e, "bucket") && t.uint32(26).string(e.bucket), null != e.slug && Object.hasOwnProperty.call(e, "slug") && t.uint32(34).string(e.slug), null != e.user && Object.hasOwnProperty.call(e, "user") && t.uint32(42).string(e.user), null != e.sourceRepl && Object.hasOwnProperty.call(e, "sourceRepl") && t.uint32(50).string(e.sourceRepl), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Repl; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.id = e.string();
                                        break;
                                    case 2:
                                        i.language = e.string();
                                        break;
                                    case 3:
                                        i.bucket = e.string();
                                        break;
                                    case 4:
                                        i.slug = e.string();
                                        break;
                                    case 5:
                                        i.user = e.string();
                                        break;
                                    case 6:
                                        i.sourceRepl = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.id && e.hasOwnProperty("id") && !r.isString(e.id) ? "id: string expected" : null != e.language && e.hasOwnProperty("language") && !r.isString(e.language) ? "language: string expected" : null != e.bucket && e.hasOwnProperty("bucket") && !r.isString(e.bucket) ? "bucket: string expected" : null != e.slug && e.hasOwnProperty("slug") && !r.isString(e.slug) ? "slug: string expected" : null != e.user && e.hasOwnProperty("user") && !r.isString(e.user) ? "user: string expected" : null != e.sourceRepl && e.hasOwnProperty("sourceRepl") && !r.isString(e.sourceRepl) ? "sourceRepl: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.Repl) return e;
                            var t = new o.api.Repl;
                            return null != e.id && (t.id = String(e.id)), null != e.language && (t.language = String(e.language)), null != e.bucket && (t.bucket = String(e.bucket)), null != e.slug && (t.slug = String(e.slug)), null != e.user && (t.user = String(e.user)), null != e.sourceRepl && (t.sourceRepl = String(e.sourceRepl)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.id = "", n.language = "", n.bucket = "", n.slug = "", n.user = "", n.sourceRepl = ""), null != e.id && e.hasOwnProperty("id") && (n.id = e.id), null != e.language && e.hasOwnProperty("language") && (n.language = e.language), null != e.bucket && e.hasOwnProperty("bucket") && (n.bucket = e.bucket), null != e.slug && e.hasOwnProperty("slug") && (n.slug = e.slug), null != e.user && e.hasOwnProperty("user") && (n.user = e.user), null != e.sourceRepl && e.hasOwnProperty("sourceRepl") && (n.sourceRepl = e.sourceRepl), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.ResourceLimits = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.net = !1, i.prototype.memory = r.Long ? r.Long.fromBits(0, 0, !1) : 0, i.prototype.threads = 0, i.prototype.shares = 0, i.prototype.disk = r.Long ? r.Long.fromBits(0, 0, !1) : 0, i.prototype.cache = 0, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.net && Object.hasOwnProperty.call(e, "net") && t.uint32(8).bool(e.net), null != e.memory && Object.hasOwnProperty.call(e, "memory") && t.uint32(16).int64(e.memory), null != e.threads && Object.hasOwnProperty.call(e, "threads") && t.uint32(25).double(e.threads), null != e.shares && Object.hasOwnProperty.call(e, "shares") && t.uint32(33).double(e.shares), null != e.disk && Object.hasOwnProperty.call(e, "disk") && t.uint32(40).int64(e.disk), null != e.cache && Object.hasOwnProperty.call(e, "cache") && t.uint32(48).int32(e.cache), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.ResourceLimits; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.net = e.bool();
                                        break;
                                    case 2:
                                        i.memory = e.int64();
                                        break;
                                    case 3:
                                        i.threads = e.double();
                                        break;
                                    case 4:
                                        i.shares = e.double();
                                        break;
                                    case 5:
                                        i.disk = e.int64();
                                        break;
                                    case 6:
                                        i.cache = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.net && e.hasOwnProperty("net") && "boolean" !== typeof e.net) return "net: boolean expected";
                            if (null != e.memory && e.hasOwnProperty("memory") && !r.isInteger(e.memory) && !(e.memory && r.isInteger(e.memory.low) && r.isInteger(e.memory.high))) return "memory: integer|Long expected";
                            if (null != e.threads && e.hasOwnProperty("threads") && "number" !== typeof e.threads) return "threads: number expected";
                            if (null != e.shares && e.hasOwnProperty("shares") && "number" !== typeof e.shares) return "shares: number expected";
                            if (null != e.disk && e.hasOwnProperty("disk") && !r.isInteger(e.disk) && !(e.disk && r.isInteger(e.disk.low) && r.isInteger(e.disk.high))) return "disk: integer|Long expected";
                            if (null != e.cache && e.hasOwnProperty("cache")) switch (e.cache) {
                                default: return "cache: enum value expected";
                                case 0:
                                        case 1:
                                        case 2:
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.ResourceLimits) return e;
                            var t = new o.api.ResourceLimits;
                            switch (null != e.net && (t.net = Boolean(e.net)), null != e.memory && (r.Long ? (t.memory = r.Long.fromValue(e.memory)).unsigned = !1 : "string" === typeof e.memory ? t.memory = parseInt(e.memory, 10) : "number" === typeof e.memory ? t.memory = e.memory : "object" === typeof e.memory && (t.memory = new r.LongBits(e.memory.low >>> 0, e.memory.high >>> 0).toNumber())), null != e.threads && (t.threads = Number(e.threads)), null != e.shares && (t.shares = Number(e.shares)), null != e.disk && (r.Long ? (t.disk = r.Long.fromValue(e.disk)).unsigned = !1 : "string" === typeof e.disk ? t.disk = parseInt(e.disk, 10) : "number" === typeof e.disk ? t.disk = e.disk : "object" === typeof e.disk && (t.disk = new r.LongBits(e.disk.low >>> 0, e.disk.high >>> 0).toNumber())), e.cache) {
                                case "NONE":
                                case 0:
                                    t.cache = 0;
                                    break;
                                case "USER":
                                case 1:
                                    t.cache = 1;
                                    break;
                                case "REPL":
                                case 2:
                                    t.cache = 2
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if (t.defaults) {
                                if (n.net = !1, r.Long) {
                                    var i = new r.Long(0, 0, !1);
                                    n.memory = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i
                                } else n.memory = t.longs === String ? "0" : 0;
                                n.threads = 0, n.shares = 0, r.Long ? (i = new r.Long(0, 0, !1), n.disk = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i) : n.disk = t.longs === String ? "0" : 0, n.cache = t.enums === String ? "NONE" : 0
                            }
                            return null != e.net && e.hasOwnProperty("net") && (n.net = e.net), null != e.memory && e.hasOwnProperty("memory") && ("number" === typeof e.memory ? n.memory = t.longs === String ? String(e.memory) : e.memory : n.memory = t.longs === String ? r.Long.prototype.toString.call(e.memory) : t.longs === Number ? new r.LongBits(e.memory.low >>> 0, e.memory.high >>> 0).toNumber() : e.memory), null != e.threads && e.hasOwnProperty("threads") && (n.threads = t.json && !isFinite(e.threads) ? String(e.threads) : e.threads), null != e.shares && e.hasOwnProperty("shares") && (n.shares = t.json && !isFinite(e.shares) ? String(e.shares) : e.shares), null != e.disk && e.hasOwnProperty("disk") && ("number" === typeof e.disk ? n.disk = t.longs === String ? String(e.disk) : e.disk : n.disk = t.longs === String ? r.Long.prototype.toString.call(e.disk) : t.longs === Number ? new r.LongBits(e.disk.low >>> 0, e.disk.high >>> 0).toNumber() : e.disk), null != e.cache && e.hasOwnProperty("cache") && (n.cache = t.enums === String ? o.api.ResourceLimits.Cachability[e.cache] : e.cache), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i.Cachability = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "NONE"] = 0, t[e[1] = "USER"] = 1, t[e[2] = "REPL"] = 2, t
                        }(), i
                    }(), i.Permissions = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.toggleAlwaysOn = !1, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.toggleAlwaysOn && Object.hasOwnProperty.call(e, "toggleAlwaysOn") && t.uint32(8).bool(e.toggleAlwaysOn), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.Permissions; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.toggleAlwaysOn = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.toggleAlwaysOn && e.hasOwnProperty("toggleAlwaysOn") && "boolean" !== typeof e.toggleAlwaysOn ? "toggleAlwaysOn: boolean expected" : null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.Permissions) return e;
                            var t = new o.api.Permissions;
                            return null != e.toggleAlwaysOn && (t.toggleAlwaysOn = Boolean(e.toggleAlwaysOn)), t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.toggleAlwaysOn = !1), null != e.toggleAlwaysOn && e.hasOwnProperty("toggleAlwaysOn") && (n.toggleAlwaysOn = e.toggleAlwaysOn), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.ReplToken = function() {
                        function i(e) {
                            if (this.flags = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        var a;
                        return i.prototype.iat = null, i.prototype.exp = null, i.prototype.salt = "", i.prototype.cluster = "", i.prototype.persistence = 0, i.prototype.repl = null, i.prototype.id = null, i.prototype.classroom = null, i.prototype.resourceLimits = null, i.prototype.format = 0, i.prototype.presenced = null, i.prototype.flags = r.emptyArray, i.prototype.permissions = null, Object.defineProperty(i.prototype, "metadata", {
                            get: r.oneOfGetter(a = ["repl", "id", "classroom"]),
                            set: r.oneOfSetter(a)
                        }), i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.iat && Object.hasOwnProperty.call(e, "iat") && o.google.protobuf.Timestamp.encode(e.iat, t.uint32(10).fork()).ldelim(), null != e.exp && Object.hasOwnProperty.call(e, "exp") && o.google.protobuf.Timestamp.encode(e.exp, t.uint32(18).fork()).ldelim(), null != e.salt && Object.hasOwnProperty.call(e, "salt") && t.uint32(26).string(e.salt), null != e.cluster && Object.hasOwnProperty.call(e, "cluster") && t.uint32(34).string(e.cluster), null != e.persistence && Object.hasOwnProperty.call(e, "persistence") && t.uint32(48).int32(e.persistence), null != e.repl && Object.hasOwnProperty.call(e, "repl") && o.api.Repl.encode(e.repl, t.uint32(58).fork()).ldelim(), null != e.id && Object.hasOwnProperty.call(e, "id") && o.api.ReplToken.ReplID.encode(e.id, t.uint32(66).fork()).ldelim(), null != e.classroom && Object.hasOwnProperty.call(e, "classroom") && o.api.ReplToken.ClassroomMetadata.encode(e.classroom, t.uint32(74).fork()).ldelim(), null != e.resourceLimits && Object.hasOwnProperty.call(e, "resourceLimits") && o.api.ResourceLimits.encode(e.resourceLimits, t.uint32(82).fork()).ldelim(), null != e.format && Object.hasOwnProperty.call(e, "format") && t.uint32(96).int32(e.format), null != e.presenced && Object.hasOwnProperty.call(e, "presenced") && o.api.ReplToken.Presenced.encode(e.presenced, t.uint32(106).fork()).ldelim(), null != e.flags && e.flags.length)
                                for (var r = 0; r < e.flags.length; ++r) t.uint32(114).string(e.flags[r]);
                            return null != e.permissions && Object.hasOwnProperty.call(e, "permissions") && o.api.Permissions.encode(e.permissions, t.uint32(122).fork()).ldelim(), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.ReplToken; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.iat = o.google.protobuf.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        i.exp = o.google.protobuf.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        i.salt = e.string();
                                        break;
                                    case 4:
                                        i.cluster = e.string();
                                        break;
                                    case 6:
                                        i.persistence = e.int32();
                                        break;
                                    case 7:
                                        i.repl = o.api.Repl.decode(e, e.uint32());
                                        break;
                                    case 8:
                                        i.id = o.api.ReplToken.ReplID.decode(e, e.uint32());
                                        break;
                                    case 9:
                                        i.classroom = o.api.ReplToken.ClassroomMetadata.decode(e, e.uint32());
                                        break;
                                    case 10:
                                        i.resourceLimits = o.api.ResourceLimits.decode(e, e.uint32());
                                        break;
                                    case 12:
                                        i.format = e.int32();
                                        break;
                                    case 13:
                                        i.presenced = o.api.ReplToken.Presenced.decode(e, e.uint32());
                                        break;
                                    case 14:
                                        i.flags && i.flags.length || (i.flags = []), i.flags.push(e.string());
                                        break;
                                    case 15:
                                        i.permissions = o.api.Permissions.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            var t = {};
                            if (null != e.iat && e.hasOwnProperty("iat") && (n = o.google.protobuf.Timestamp.verify(e.iat))) return "iat." + n;
                            if (null != e.exp && e.hasOwnProperty("exp") && (n = o.google.protobuf.Timestamp.verify(e.exp))) return "exp." + n;
                            if (null != e.salt && e.hasOwnProperty("salt") && !r.isString(e.salt)) return "salt: string expected";
                            if (null != e.cluster && e.hasOwnProperty("cluster") && !r.isString(e.cluster)) return "cluster: string expected";
                            if (null != e.persistence && e.hasOwnProperty("persistence")) switch (e.persistence) {
                                default: return "persistence: enum value expected";
                                case 0:
                                        case 1:
                                        case 2:
                            }
                            if (null != e.repl && e.hasOwnProperty("repl") && (t.metadata = 1, n = o.api.Repl.verify(e.repl))) return "repl." + n;
                            if (null != e.id && e.hasOwnProperty("id")) {
                                if (1 === t.metadata) return "metadata: multiple values";
                                if (t.metadata = 1, n = o.api.ReplToken.ReplID.verify(e.id)) return "id." + n
                            }
                            if (null != e.classroom && e.hasOwnProperty("classroom")) {
                                if (1 === t.metadata) return "metadata: multiple values";
                                var n;
                                if (t.metadata = 1, n = o.api.ReplToken.ClassroomMetadata.verify(e.classroom)) return "classroom." + n
                            }
                            if (null != e.resourceLimits && e.hasOwnProperty("resourceLimits") && (n = o.api.ResourceLimits.verify(e.resourceLimits))) return "resourceLimits." + n;
                            if (null != e.format && e.hasOwnProperty("format")) switch (e.format) {
                                default: return "format: enum value expected";
                                case 0:
                                        case 1:
                            }
                            if (null != e.presenced && e.hasOwnProperty("presenced") && (n = o.api.ReplToken.Presenced.verify(e.presenced))) return "presenced." + n;
                            if (null != e.flags && e.hasOwnProperty("flags")) {
                                if (!Array.isArray(e.flags)) return "flags: array expected";
                                for (var i = 0; i < e.flags.length; ++i)
                                    if (!r.isString(e.flags[i])) return "flags: string[] expected"
                            }
                            return null != e.permissions && e.hasOwnProperty("permissions") && (n = o.api.Permissions.verify(e.permissions)) ? "permissions." + n : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.ReplToken) return e;
                            var t = new o.api.ReplToken;
                            if (null != e.iat) {
                                if ("object" !== typeof e.iat) throw TypeError(".api.ReplToken.iat: object expected");
                                t.iat = o.google.protobuf.Timestamp.fromObject(e.iat)
                            }
                            if (null != e.exp) {
                                if ("object" !== typeof e.exp) throw TypeError(".api.ReplToken.exp: object expected");
                                t.exp = o.google.protobuf.Timestamp.fromObject(e.exp)
                            }
                            switch (null != e.salt && (t.salt = String(e.salt)), null != e.cluster && (t.cluster = String(e.cluster)), e.persistence) {
                                case "PERSISTENT":
                                case 0:
                                    t.persistence = 0;
                                    break;
                                case "EPHEMERAL":
                                case 1:
                                    t.persistence = 1;
                                    break;
                                case "NONE":
                                case 2:
                                    t.persistence = 2
                            }
                            if (null != e.repl) {
                                if ("object" !== typeof e.repl) throw TypeError(".api.ReplToken.repl: object expected");
                                t.repl = o.api.Repl.fromObject(e.repl)
                            }
                            if (null != e.id) {
                                if ("object" !== typeof e.id) throw TypeError(".api.ReplToken.id: object expected");
                                t.id = o.api.ReplToken.ReplID.fromObject(e.id)
                            }
                            if (null != e.classroom) {
                                if ("object" !== typeof e.classroom) throw TypeError(".api.ReplToken.classroom: object expected");
                                t.classroom = o.api.ReplToken.ClassroomMetadata.fromObject(e.classroom)
                            }
                            if (null != e.resourceLimits) {
                                if ("object" !== typeof e.resourceLimits) throw TypeError(".api.ReplToken.resourceLimits: object expected");
                                t.resourceLimits = o.api.ResourceLimits.fromObject(e.resourceLimits)
                            }
                            switch (e.format) {
                                case "PROTOBUF":
                                case 0:
                                    t.format = 0;
                                    break;
                                case "JSON":
                                case 1:
                                    t.format = 1
                            }
                            if (null != e.presenced) {
                                if ("object" !== typeof e.presenced) throw TypeError(".api.ReplToken.presenced: object expected");
                                t.presenced = o.api.ReplToken.Presenced.fromObject(e.presenced)
                            }
                            if (e.flags) {
                                if (!Array.isArray(e.flags)) throw TypeError(".api.ReplToken.flags: array expected");
                                t.flags = [];
                                for (var n = 0; n < e.flags.length; ++n) t.flags[n] = String(e.flags[n])
                            }
                            if (null != e.permissions) {
                                if ("object" !== typeof e.permissions) throw TypeError(".api.ReplToken.permissions: object expected");
                                t.permissions = o.api.Permissions.fromObject(e.permissions)
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.flags = []), t.defaults && (n.iat = null, n.exp = null, n.salt = "", n.cluster = "", n.persistence = t.enums === String ? "PERSISTENT" : 0, n.resourceLimits = null, n.format = t.enums === String ? "PROTOBUF" : 0, n.presenced = null, n.permissions = null), null != e.iat && e.hasOwnProperty("iat") && (n.iat = o.google.protobuf.Timestamp.toObject(e.iat, t)), null != e.exp && e.hasOwnProperty("exp") && (n.exp = o.google.protobuf.Timestamp.toObject(e.exp, t)), null != e.salt && e.hasOwnProperty("salt") && (n.salt = e.salt), null != e.cluster && e.hasOwnProperty("cluster") && (n.cluster = e.cluster), null != e.persistence && e.hasOwnProperty("persistence") && (n.persistence = t.enums === String ? o.api.ReplToken.Persistence[e.persistence] : e.persistence), null != e.repl && e.hasOwnProperty("repl") && (n.repl = o.api.Repl.toObject(e.repl, t), t.oneofs && (n.metadata = "repl")), null != e.id && e.hasOwnProperty("id") && (n.id = o.api.ReplToken.ReplID.toObject(e.id, t), t.oneofs && (n.metadata = "id")), null != e.classroom && e.hasOwnProperty("classroom") && (n.classroom = o.api.ReplToken.ClassroomMetadata.toObject(e.classroom, t), t.oneofs && (n.metadata = "classroom")), null != e.resourceLimits && e.hasOwnProperty("resourceLimits") && (n.resourceLimits = o.api.ResourceLimits.toObject(e.resourceLimits, t)), null != e.format && e.hasOwnProperty("format") && (n.format = t.enums === String ? o.api.ReplToken.WireFormat[e.format] : e.format), null != e.presenced && e.hasOwnProperty("presenced") && (n.presenced = o.api.ReplToken.Presenced.toObject(e.presenced, t)), e.flags && e.flags.length) {
                                n.flags = [];
                                for (var r = 0; r < e.flags.length; ++r) n.flags[r] = e.flags[r]
                            }
                            return null != e.permissions && e.hasOwnProperty("permissions") && (n.permissions = o.api.Permissions.toObject(e.permissions, t)), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i.Persistence = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "PERSISTENT"] = 0, t[e[1] = "EPHEMERAL"] = 1, t[e[2] = "NONE"] = 2, t
                        }(), i.ClassroomMetadata = function() {
                            function i(e) {
                                if (e)
                                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                            }
                            return i.prototype.id = "", i.prototype.language = "", i.create = function(e) {
                                return i.fromObject(e)
                            }, i.encode = function(e, t) {
                                return t || (t = n.create()), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(10).string(e.id), null != e.language && Object.hasOwnProperty.call(e, "language") && t.uint32(18).string(e.language), t
                            }, i.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, i.decode = function(e, n) {
                                e instanceof t || (e = t.create(e));
                                for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.ReplToken.ClassroomMetadata; e.pos < r;) {
                                    var a = e.uint32();
                                    switch (a >>> 3) {
                                        case 1:
                                            i.id = e.string();
                                            break;
                                        case 2:
                                            i.language = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & a)
                                    }
                                }
                                return i
                            }, i.decodeDelimited = function(e) {
                                return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                            }, i.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.id && e.hasOwnProperty("id") && !r.isString(e.id) ? "id: string expected" : null != e.language && e.hasOwnProperty("language") && !r.isString(e.language) ? "language: string expected" : null
                            }, i.fromObject = function(e) {
                                if (e instanceof o.api.ReplToken.ClassroomMetadata) return e;
                                var t = new o.api.ReplToken.ClassroomMetadata;
                                return null != e.id && (t.id = String(e.id)), null != e.language && (t.language = String(e.language)), t
                            }, i.toObject = function(e, t) {
                                t || (t = {});
                                var n = {};
                                return t.defaults && (n.id = "", n.language = ""), null != e.id && e.hasOwnProperty("id") && (n.id = e.id), null != e.language && e.hasOwnProperty("language") && (n.language = e.language), n
                            }, i.prototype.toJSON = function() {
                                return this.constructor.toObject(this, e.util.toJSONOptions)
                            }, i
                        }(), i.ReplID = function() {
                            function i(e) {
                                if (e)
                                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                            }
                            return i.prototype.id = "", i.prototype.sourceRepl = "", i.create = function(e) {
                                return i.fromObject(e)
                            }, i.encode = function(e, t) {
                                return t || (t = n.create()), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(10).string(e.id), null != e.sourceRepl && Object.hasOwnProperty.call(e, "sourceRepl") && t.uint32(18).string(e.sourceRepl), t
                            }, i.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, i.decode = function(e, n) {
                                e instanceof t || (e = t.create(e));
                                for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.ReplToken.ReplID; e.pos < r;) {
                                    var a = e.uint32();
                                    switch (a >>> 3) {
                                        case 1:
                                            i.id = e.string();
                                            break;
                                        case 2:
                                            i.sourceRepl = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & a)
                                    }
                                }
                                return i
                            }, i.decodeDelimited = function(e) {
                                return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                            }, i.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.id && e.hasOwnProperty("id") && !r.isString(e.id) ? "id: string expected" : null != e.sourceRepl && e.hasOwnProperty("sourceRepl") && !r.isString(e.sourceRepl) ? "sourceRepl: string expected" : null
                            }, i.fromObject = function(e) {
                                if (e instanceof o.api.ReplToken.ReplID) return e;
                                var t = new o.api.ReplToken.ReplID;
                                return null != e.id && (t.id = String(e.id)), null != e.sourceRepl && (t.sourceRepl = String(e.sourceRepl)), t
                            }, i.toObject = function(e, t) {
                                t || (t = {});
                                var n = {};
                                return t.defaults && (n.id = "", n.sourceRepl = ""), null != e.id && e.hasOwnProperty("id") && (n.id = e.id), null != e.sourceRepl && e.hasOwnProperty("sourceRepl") && (n.sourceRepl = e.sourceRepl), n
                            }, i.prototype.toJSON = function() {
                                return this.constructor.toObject(this, e.util.toJSONOptions)
                            }, i
                        }(), i.WireFormat = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "PROTOBUF"] = 0, t[e[1] = "JSON"] = 1, t
                        }(), i.Presenced = function() {
                            function i(e) {
                                if (e)
                                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                            }
                            return i.prototype.bearerID = 0, i.prototype.bearerName = "", i.create = function(e) {
                                return i.fromObject(e)
                            }, i.encode = function(e, t) {
                                return t || (t = n.create()), null != e.bearerID && Object.hasOwnProperty.call(e, "bearerID") && t.uint32(8).uint32(e.bearerID), null != e.bearerName && Object.hasOwnProperty.call(e, "bearerName") && t.uint32(18).string(e.bearerName), t
                            }, i.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, i.decode = function(e, n) {
                                e instanceof t || (e = t.create(e));
                                for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.ReplToken.Presenced; e.pos < r;) {
                                    var a = e.uint32();
                                    switch (a >>> 3) {
                                        case 1:
                                            i.bearerID = e.uint32();
                                            break;
                                        case 2:
                                            i.bearerName = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & a)
                                    }
                                }
                                return i
                            }, i.decodeDelimited = function(e) {
                                return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                            }, i.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.bearerID && e.hasOwnProperty("bearerID") && !r.isInteger(e.bearerID) ? "bearerID: integer expected" : null != e.bearerName && e.hasOwnProperty("bearerName") && !r.isString(e.bearerName) ? "bearerName: string expected" : null
                            }, i.fromObject = function(e) {
                                if (e instanceof o.api.ReplToken.Presenced) return e;
                                var t = new o.api.ReplToken.Presenced;
                                return null != e.bearerID && (t.bearerID = e.bearerID >>> 0), null != e.bearerName && (t.bearerName = String(e.bearerName)), t
                            }, i.toObject = function(e, t) {
                                t || (t = {});
                                var n = {};
                                return t.defaults && (n.bearerID = 0, n.bearerName = ""), null != e.bearerID && e.hasOwnProperty("bearerID") && (n.bearerID = e.bearerID), null != e.bearerName && e.hasOwnProperty("bearerName") && (n.bearerName = e.bearerName), n
                            }, i.prototype.toJSON = function() {
                                return this.constructor.toObject(this, e.util.toJSONOptions)
                            }, i
                        }(), i
                    }(), i.TLSCertificate = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.domain = "", i.prototype.cert = r.newBuffer([]), i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.domain && Object.hasOwnProperty.call(e, "domain") && t.uint32(10).string(e.domain), null != e.cert && Object.hasOwnProperty.call(e, "cert") && t.uint32(18).bytes(e.cert), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.TLSCertificate; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.domain = e.string();
                                        break;
                                    case 2:
                                        i.cert = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.domain && e.hasOwnProperty("domain") && !r.isString(e.domain) ? "domain: string expected" : null != e.cert && e.hasOwnProperty("cert") && !(e.cert && "number" === typeof e.cert.length || r.isString(e.cert)) ? "cert: buffer expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.TLSCertificate) return e;
                            var t = new o.api.TLSCertificate;
                            return null != e.domain && (t.domain = String(e.domain)), null != e.cert && ("string" === typeof e.cert ? r.base64.decode(e.cert, t.cert = r.newBuffer(r.base64.length(e.cert)), 0) : e.cert.length && (t.cert = e.cert)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.domain = "", t.bytes === String ? n.cert = "" : (n.cert = [], t.bytes !== Array && (n.cert = r.newBuffer(n.cert)))), null != e.domain && e.hasOwnProperty("domain") && (n.domain = e.domain), null != e.cert && e.hasOwnProperty("cert") && (n.cert = t.bytes === String ? r.base64.encode(e.cert, 0, e.cert.length) : t.bytes === Array ? Array.prototype.slice.call(e.cert) : e.cert), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.ReplTransfer = function() {
                        function i(e) {
                            if (this.customDomains = [], this.certificates = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.repl = null, i.prototype.replLimits = null, i.prototype.userLimits = null, i.prototype.customDomains = r.emptyArray, i.prototype.certificates = r.emptyArray, i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.repl && Object.hasOwnProperty.call(e, "repl") && o.api.Repl.encode(e.repl, t.uint32(10).fork()).ldelim(), null != e.replLimits && Object.hasOwnProperty.call(e, "replLimits") && o.api.ResourceLimits.encode(e.replLimits, t.uint32(18).fork()).ldelim(), null != e.userLimits && Object.hasOwnProperty.call(e, "userLimits") && o.api.ResourceLimits.encode(e.userLimits, t.uint32(26).fork()).ldelim(), null != e.customDomains && e.customDomains.length)
                                for (var r = 0; r < e.customDomains.length; ++r) t.uint32(34).string(e.customDomains[r]);
                            if (null != e.certificates && e.certificates.length)
                                for (r = 0; r < e.certificates.length; ++r) o.api.TLSCertificate.encode(e.certificates[r], t.uint32(42).fork()).ldelim();
                            return t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.ReplTransfer; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.repl = o.api.Repl.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        i.replLimits = o.api.ResourceLimits.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        i.userLimits = o.api.ResourceLimits.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        i.customDomains && i.customDomains.length || (i.customDomains = []), i.customDomains.push(e.string());
                                        break;
                                    case 5:
                                        i.certificates && i.certificates.length || (i.certificates = []), i.certificates.push(o.api.TLSCertificate.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.repl && e.hasOwnProperty("repl") && (n = o.api.Repl.verify(e.repl))) return "repl." + n;
                            if (null != e.replLimits && e.hasOwnProperty("replLimits") && (n = o.api.ResourceLimits.verify(e.replLimits))) return "replLimits." + n;
                            if (null != e.userLimits && e.hasOwnProperty("userLimits") && (n = o.api.ResourceLimits.verify(e.userLimits))) return "userLimits." + n;
                            if (null != e.customDomains && e.hasOwnProperty("customDomains")) {
                                if (!Array.isArray(e.customDomains)) return "customDomains: array expected";
                                for (var t = 0; t < e.customDomains.length; ++t)
                                    if (!r.isString(e.customDomains[t])) return "customDomains: string[] expected"
                            }
                            if (null != e.certificates && e.hasOwnProperty("certificates")) {
                                if (!Array.isArray(e.certificates)) return "certificates: array expected";
                                for (t = 0; t < e.certificates.length; ++t) {
                                    var n;
                                    if (n = o.api.TLSCertificate.verify(e.certificates[t])) return "certificates." + n
                                }
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.ReplTransfer) return e;
                            var t = new o.api.ReplTransfer;
                            if (null != e.repl) {
                                if ("object" !== typeof e.repl) throw TypeError(".api.ReplTransfer.repl: object expected");
                                t.repl = o.api.Repl.fromObject(e.repl)
                            }
                            if (null != e.replLimits) {
                                if ("object" !== typeof e.replLimits) throw TypeError(".api.ReplTransfer.replLimits: object expected");
                                t.replLimits = o.api.ResourceLimits.fromObject(e.replLimits)
                            }
                            if (null != e.userLimits) {
                                if ("object" !== typeof e.userLimits) throw TypeError(".api.ReplTransfer.userLimits: object expected");
                                t.userLimits = o.api.ResourceLimits.fromObject(e.userLimits)
                            }
                            if (e.customDomains) {
                                if (!Array.isArray(e.customDomains)) throw TypeError(".api.ReplTransfer.customDomains: array expected");
                                t.customDomains = [];
                                for (var n = 0; n < e.customDomains.length; ++n) t.customDomains[n] = String(e.customDomains[n])
                            }
                            if (e.certificates) {
                                if (!Array.isArray(e.certificates)) throw TypeError(".api.ReplTransfer.certificates: array expected");
                                for (t.certificates = [], n = 0; n < e.certificates.length; ++n) {
                                    if ("object" !== typeof e.certificates[n]) throw TypeError(".api.ReplTransfer.certificates: object expected");
                                    t.certificates[n] = o.api.TLSCertificate.fromObject(e.certificates[n])
                                }
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.customDomains = [], n.certificates = []), t.defaults && (n.repl = null, n.replLimits = null, n.userLimits = null), null != e.repl && e.hasOwnProperty("repl") && (n.repl = o.api.Repl.toObject(e.repl, t)), null != e.replLimits && e.hasOwnProperty("replLimits") && (n.replLimits = o.api.ResourceLimits.toObject(e.replLimits, t)), null != e.userLimits && e.hasOwnProperty("userLimits") && (n.userLimits = o.api.ResourceLimits.toObject(e.userLimits, t)), e.customDomains && e.customDomains.length) {
                                n.customDomains = [];
                                for (var r = 0; r < e.customDomains.length; ++r) n.customDomains[r] = e.customDomains[r]
                            }
                            if (e.certificates && e.certificates.length)
                                for (n.certificates = [], r = 0; r < e.certificates.length; ++r) n.certificates[r] = o.api.TLSCertificate.toObject(e.certificates[r], t);
                            return n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.AllowReplRequest = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.replTransfer = null, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.replTransfer && Object.hasOwnProperty.call(e, "replTransfer") && o.api.ReplTransfer.encode(e.replTransfer, t.uint32(10).fork()).ldelim(), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.AllowReplRequest; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.replTransfer = o.api.ReplTransfer.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.replTransfer && e.hasOwnProperty("replTransfer")) {
                                var t = o.api.ReplTransfer.verify(e.replTransfer);
                                if (t) return "replTransfer." + t
                            }
                            return null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.AllowReplRequest) return e;
                            var t = new o.api.AllowReplRequest;
                            if (null != e.replTransfer) {
                                if ("object" !== typeof e.replTransfer) throw TypeError(".api.AllowReplRequest.replTransfer: object expected");
                                t.replTransfer = o.api.ReplTransfer.fromObject(e.replTransfer)
                            }
                            return t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.replTransfer = null), null != e.replTransfer && e.hasOwnProperty("replTransfer") && (n.replTransfer = o.api.ReplTransfer.toObject(e.replTransfer, t)), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.ClusterMetadata = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.id = "", i.prototype.conmanURL = "", i.prototype.gurl = "", i.prototype.proxyHost = "", i.prototype.proxy = "", i.prototype.proxyIP = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(10).string(e.id), null != e.conmanURL && Object.hasOwnProperty.call(e, "conmanURL") && t.uint32(18).string(e.conmanURL), null != e.gurl && Object.hasOwnProperty.call(e, "gurl") && t.uint32(26).string(e.gurl), null != e.proxyHost && Object.hasOwnProperty.call(e, "proxyHost") && t.uint32(34).string(e.proxyHost), null != e.proxy && Object.hasOwnProperty.call(e, "proxy") && t.uint32(42).string(e.proxy), null != e.proxyIP && Object.hasOwnProperty.call(e, "proxyIP") && t.uint32(50).string(e.proxyIP), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.ClusterMetadata; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.id = e.string();
                                        break;
                                    case 2:
                                        i.conmanURL = e.string();
                                        break;
                                    case 3:
                                        i.gurl = e.string();
                                        break;
                                    case 4:
                                        i.proxyHost = e.string();
                                        break;
                                    case 5:
                                        i.proxy = e.string();
                                        break;
                                    case 6:
                                        i.proxyIP = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            return "object" !== typeof e || null === e ? "object expected" : null != e.id && e.hasOwnProperty("id") && !r.isString(e.id) ? "id: string expected" : null != e.conmanURL && e.hasOwnProperty("conmanURL") && !r.isString(e.conmanURL) ? "conmanURL: string expected" : null != e.gurl && e.hasOwnProperty("gurl") && !r.isString(e.gurl) ? "gurl: string expected" : null != e.proxyHost && e.hasOwnProperty("proxyHost") && !r.isString(e.proxyHost) ? "proxyHost: string expected" : null != e.proxy && e.hasOwnProperty("proxy") && !r.isString(e.proxy) ? "proxy: string expected" : null != e.proxyIP && e.hasOwnProperty("proxyIP") && !r.isString(e.proxyIP) ? "proxyIP: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.ClusterMetadata) return e;
                            var t = new o.api.ClusterMetadata;
                            return null != e.id && (t.id = String(e.id)), null != e.conmanURL && (t.conmanURL = String(e.conmanURL)), null != e.gurl && (t.gurl = String(e.gurl)), null != e.proxyHost && (t.proxyHost = String(e.proxyHost)), null != e.proxy && (t.proxy = String(e.proxy)), null != e.proxyIP && (t.proxyIP = String(e.proxyIP)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.id = "", n.conmanURL = "", n.gurl = "", n.proxyHost = "", n.proxy = "", n.proxyIP = ""), null != e.id && e.hasOwnProperty("id") && (n.id = e.id), null != e.conmanURL && e.hasOwnProperty("conmanURL") && (n.conmanURL = e.conmanURL), null != e.gurl && e.hasOwnProperty("gurl") && (n.gurl = e.gurl), null != e.proxyHost && e.hasOwnProperty("proxyHost") && (n.proxyHost = e.proxyHost), null != e.proxy && e.hasOwnProperty("proxy") && (n.proxy = e.proxy), null != e.proxyIP && e.hasOwnProperty("proxyIP") && (n.proxyIP = e.proxyIP), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.EvictReplRequest = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.clusterMetadata = null, i.prototype.token = "", i.prototype.user = "", i.prototype.slug = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.clusterMetadata && Object.hasOwnProperty.call(e, "clusterMetadata") && o.api.ClusterMetadata.encode(e.clusterMetadata, t.uint32(10).fork()).ldelim(), null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(18).string(e.token), null != e.user && Object.hasOwnProperty.call(e, "user") && t.uint32(26).string(e.user), null != e.slug && Object.hasOwnProperty.call(e, "slug") && t.uint32(34).string(e.slug), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.EvictReplRequest; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.clusterMetadata = o.api.ClusterMetadata.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        i.token = e.string();
                                        break;
                                    case 3:
                                        i.user = e.string();
                                        break;
                                    case 4:
                                        i.slug = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.clusterMetadata && e.hasOwnProperty("clusterMetadata")) {
                                var t = o.api.ClusterMetadata.verify(e.clusterMetadata);
                                if (t) return "clusterMetadata." + t
                            }
                            return null != e.token && e.hasOwnProperty("token") && !r.isString(e.token) ? "token: string expected" : null != e.user && e.hasOwnProperty("user") && !r.isString(e.user) ? "user: string expected" : null != e.slug && e.hasOwnProperty("slug") && !r.isString(e.slug) ? "slug: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.EvictReplRequest) return e;
                            var t = new o.api.EvictReplRequest;
                            if (null != e.clusterMetadata) {
                                if ("object" !== typeof e.clusterMetadata) throw TypeError(".api.EvictReplRequest.clusterMetadata: object expected");
                                t.clusterMetadata = o.api.ClusterMetadata.fromObject(e.clusterMetadata)
                            }
                            return null != e.token && (t.token = String(e.token)), null != e.user && (t.user = String(e.user)), null != e.slug && (t.slug = String(e.slug)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.clusterMetadata = null, n.token = "", n.user = "", n.slug = ""), null != e.clusterMetadata && e.hasOwnProperty("clusterMetadata") && (n.clusterMetadata = o.api.ClusterMetadata.toObject(e.clusterMetadata, t)), null != e.token && e.hasOwnProperty("token") && (n.token = e.token), null != e.user && e.hasOwnProperty("user") && (n.user = e.user), null != e.slug && e.hasOwnProperty("slug") && (n.slug = e.slug), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.EvictReplResponse = function() {
                        function r(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return r.prototype.replTransfer = null, r.create = function(e) {
                            return r.fromObject(e)
                        }, r.encode = function(e, t) {
                            return t || (t = n.create()), null != e.replTransfer && Object.hasOwnProperty.call(e, "replTransfer") && o.api.ReplTransfer.encode(e.replTransfer, t.uint32(10).fork()).ldelim(), t
                        }, r.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, r.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.EvictReplResponse; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.replTransfer = o.api.ReplTransfer.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, r.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, r.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.replTransfer && e.hasOwnProperty("replTransfer")) {
                                var t = o.api.ReplTransfer.verify(e.replTransfer);
                                if (t) return "replTransfer." + t
                            }
                            return null
                        }, r.fromObject = function(e) {
                            if (e instanceof o.api.EvictReplResponse) return e;
                            var t = new o.api.EvictReplResponse;
                            if (null != e.replTransfer) {
                                if ("object" !== typeof e.replTransfer) throw TypeError(".api.EvictReplResponse.replTransfer: object expected");
                                t.replTransfer = o.api.ReplTransfer.fromObject(e.replTransfer)
                            }
                            return t
                        }, r.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.replTransfer = null), null != e.replTransfer && e.hasOwnProperty("replTransfer") && (n.replTransfer = o.api.ReplTransfer.toObject(e.replTransfer, t)), n
                        }, r.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, r
                    }(), i.TokenVersion = function() {
                        var e = {},
                            t = Object.create(e);
                        return t[e[0] = "BARE_REPL_TOKEN"] = 0, t[e[1] = "TYPE_AWARE_TOKEN"] = 1, t
                    }(), i.GovalSigningAuthority = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        var a;
                        return i.prototype.keyId = null, i.prototype.signedCert = null, i.prototype.version = 0, Object.defineProperty(i.prototype, "cert", {
                            get: r.oneOfGetter(a = ["keyId", "signedCert"]),
                            set: r.oneOfSetter(a)
                        }), i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.keyId && Object.hasOwnProperty.call(e, "keyId") && t.uint32(10).string(e.keyId), null != e.signedCert && Object.hasOwnProperty.call(e, "signedCert") && t.uint32(18).string(e.signedCert), null != e.version && Object.hasOwnProperty.call(e, "version") && t.uint32(24).int32(e.version), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.GovalSigningAuthority; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.keyId = e.string();
                                        break;
                                    case 2:
                                        i.signedCert = e.string();
                                        break;
                                    case 3:
                                        i.version = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            var t = {};
                            if (null != e.keyId && e.hasOwnProperty("keyId") && (t.cert = 1, !r.isString(e.keyId))) return "keyId: string expected";
                            if (null != e.signedCert && e.hasOwnProperty("signedCert")) {
                                if (1 === t.cert) return "cert: multiple values";
                                if (t.cert = 1, !r.isString(e.signedCert)) return "signedCert: string expected"
                            }
                            if (null != e.version && e.hasOwnProperty("version")) switch (e.version) {
                                default: return "version: enum value expected";
                                case 0:
                                        case 1:
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.GovalSigningAuthority) return e;
                            var t = new o.api.GovalSigningAuthority;
                            switch (null != e.keyId && (t.keyId = String(e.keyId)), null != e.signedCert && (t.signedCert = String(e.signedCert)), e.version) {
                                case "BARE_REPL_TOKEN":
                                case 0:
                                    t.version = 0;
                                    break;
                                case "TYPE_AWARE_TOKEN":
                                case 1:
                                    t.version = 1
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.version = t.enums === String ? "BARE_REPL_TOKEN" : 0), null != e.keyId && e.hasOwnProperty("keyId") && (n.keyId = e.keyId, t.oneofs && (n.cert = "keyId")), null != e.signedCert && e.hasOwnProperty("signedCert") && (n.signedCert = e.signedCert, t.oneofs && (n.cert = "signedCert")), null != e.version && e.hasOwnProperty("version") && (n.version = t.enums === String ? o.api.TokenVersion[e.version] : e.version), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.FlagClaim = function() {
                        var e = {},
                            t = Object.create(e);
                        return t[e[0] = "MINT_GOVAL_TOKEN"] = 0, t[e[1] = "SIGN_INTERMEDIATE_CERT"] = 1, t
                    }(), i.CertificateClaim = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        var a;
                        return i.prototype.replid = null, i.prototype.user = null, i.prototype.flag = null, Object.defineProperty(i.prototype, "claim", {
                            get: r.oneOfGetter(a = ["replid", "user", "flag"]),
                            set: r.oneOfSetter(a)
                        }), i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.replid && Object.hasOwnProperty.call(e, "replid") && t.uint32(10).string(e.replid), null != e.user && Object.hasOwnProperty.call(e, "user") && t.uint32(18).string(e.user), null != e.flag && Object.hasOwnProperty.call(e, "flag") && t.uint32(24).int32(e.flag), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.CertificateClaim; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.replid = e.string();
                                        break;
                                    case 2:
                                        i.user = e.string();
                                        break;
                                    case 3:
                                        i.flag = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            var t = {};
                            if (null != e.replid && e.hasOwnProperty("replid") && (t.claim = 1, !r.isString(e.replid))) return "replid: string expected";
                            if (null != e.user && e.hasOwnProperty("user")) {
                                if (1 === t.claim) return "claim: multiple values";
                                if (t.claim = 1, !r.isString(e.user)) return "user: string expected"
                            }
                            if (null != e.flag && e.hasOwnProperty("flag")) {
                                if (1 === t.claim) return "claim: multiple values";
                                switch (t.claim = 1, e.flag) {
                                    default: return "flag: enum value expected";
                                    case 0:
                                            case 1:
                                }
                            }
                            return null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.CertificateClaim) return e;
                            var t = new o.api.CertificateClaim;
                            switch (null != e.replid && (t.replid = String(e.replid)), null != e.user && (t.user = String(e.user)), e.flag) {
                                case "MINT_GOVAL_TOKEN":
                                case 0:
                                    t.flag = 0;
                                    break;
                                case "SIGN_INTERMEDIATE_CERT":
                                case 1:
                                    t.flag = 1
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return null != e.replid && e.hasOwnProperty("replid") && (n.replid = e.replid, t.oneofs && (n.claim = "replid")), null != e.user && e.hasOwnProperty("user") && (n.user = e.user, t.oneofs && (n.claim = "user")), null != e.flag && e.hasOwnProperty("flag") && (n.flag = t.enums === String ? o.api.FlagClaim[e.flag] : e.flag, t.oneofs && (n.claim = "flag")), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.GovalCert = function() {
                        function i(e) {
                            if (this.claims = [], e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return i.prototype.iat = null, i.prototype.exp = null, i.prototype.claims = r.emptyArray, i.prototype.publicKey = "", i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            if (t || (t = n.create()), null != e.iat && Object.hasOwnProperty.call(e, "iat") && o.google.protobuf.Timestamp.encode(e.iat, t.uint32(10).fork()).ldelim(), null != e.exp && Object.hasOwnProperty.call(e, "exp") && o.google.protobuf.Timestamp.encode(e.exp, t.uint32(18).fork()).ldelim(), null != e.claims && e.claims.length)
                                for (var r = 0; r < e.claims.length; ++r) o.api.CertificateClaim.encode(e.claims[r], t.uint32(26).fork()).ldelim();
                            return null != e.publicKey && Object.hasOwnProperty.call(e, "publicKey") && t.uint32(34).string(e.publicKey), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.GovalCert; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.iat = o.google.protobuf.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        i.exp = o.google.protobuf.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        i.claims && i.claims.length || (i.claims = []), i.claims.push(o.api.CertificateClaim.decode(e, e.uint32()));
                                        break;
                                    case 4:
                                        i.publicKey = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            if (null != e.iat && e.hasOwnProperty("iat") && (n = o.google.protobuf.Timestamp.verify(e.iat))) return "iat." + n;
                            if (null != e.exp && e.hasOwnProperty("exp") && (n = o.google.protobuf.Timestamp.verify(e.exp))) return "exp." + n;
                            if (null != e.claims && e.hasOwnProperty("claims")) {
                                if (!Array.isArray(e.claims)) return "claims: array expected";
                                for (var t = 0; t < e.claims.length; ++t) {
                                    var n;
                                    if (n = o.api.CertificateClaim.verify(e.claims[t])) return "claims." + n
                                }
                            }
                            return null != e.publicKey && e.hasOwnProperty("publicKey") && !r.isString(e.publicKey) ? "publicKey: string expected" : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.GovalCert) return e;
                            var t = new o.api.GovalCert;
                            if (null != e.iat) {
                                if ("object" !== typeof e.iat) throw TypeError(".api.GovalCert.iat: object expected");
                                t.iat = o.google.protobuf.Timestamp.fromObject(e.iat)
                            }
                            if (null != e.exp) {
                                if ("object" !== typeof e.exp) throw TypeError(".api.GovalCert.exp: object expected");
                                t.exp = o.google.protobuf.Timestamp.fromObject(e.exp)
                            }
                            if (e.claims) {
                                if (!Array.isArray(e.claims)) throw TypeError(".api.GovalCert.claims: array expected");
                                t.claims = [];
                                for (var n = 0; n < e.claims.length; ++n) {
                                    if ("object" !== typeof e.claims[n]) throw TypeError(".api.GovalCert.claims: object expected");
                                    t.claims[n] = o.api.CertificateClaim.fromObject(e.claims[n])
                                }
                            }
                            return null != e.publicKey && (t.publicKey = String(e.publicKey)), t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.claims = []), t.defaults && (n.iat = null, n.exp = null, n.publicKey = ""), null != e.iat && e.hasOwnProperty("iat") && (n.iat = o.google.protobuf.Timestamp.toObject(e.iat, t)), null != e.exp && e.hasOwnProperty("exp") && (n.exp = o.google.protobuf.Timestamp.toObject(e.exp, t)), e.claims && e.claims.length) {
                                n.claims = [];
                                for (var r = 0; r < e.claims.length; ++r) n.claims[r] = o.api.CertificateClaim.toObject(e.claims[r], t)
                            }
                            return null != e.publicKey && e.hasOwnProperty("publicKey") && (n.publicKey = e.publicKey), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i.GovalToken = function() {
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        var a;
                        return i.prototype.iat = null, i.prototype.exp = null, i.prototype.replid = "", i.prototype.replToken = null, Object.defineProperty(i.prototype, "Token", {
                            get: r.oneOfGetter(a = ["replToken"]),
                            set: r.oneOfSetter(a)
                        }), i.create = function(e) {
                            return i.fromObject(e)
                        }, i.encode = function(e, t) {
                            return t || (t = n.create()), null != e.iat && Object.hasOwnProperty.call(e, "iat") && o.google.protobuf.Timestamp.encode(e.iat, t.uint32(10).fork()).ldelim(), null != e.exp && Object.hasOwnProperty.call(e, "exp") && o.google.protobuf.Timestamp.encode(e.exp, t.uint32(18).fork()).ldelim(), null != e.replid && Object.hasOwnProperty.call(e, "replid") && t.uint32(26).string(e.replid), null != e.replToken && Object.hasOwnProperty.call(e, "replToken") && o.api.ReplToken.encode(e.replToken, t.uint32(34).fork()).ldelim(), t
                        }, i.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, i.decode = function(e, n) {
                            e instanceof t || (e = t.create(e));
                            for (var r = void 0 === n ? e.len : e.pos + n, i = new o.api.GovalToken; e.pos < r;) {
                                var a = e.uint32();
                                switch (a >>> 3) {
                                    case 1:
                                        i.iat = o.google.protobuf.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        i.exp = o.google.protobuf.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        i.replid = e.string();
                                        break;
                                    case 4:
                                        i.replToken = o.api.ReplToken.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & a)
                                }
                            }
                            return i
                        }, i.decodeDelimited = function(e) {
                            return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                        }, i.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            var t, n = {};
                            return null != e.iat && e.hasOwnProperty("iat") && (t = o.google.protobuf.Timestamp.verify(e.iat)) ? "iat." + t : null != e.exp && e.hasOwnProperty("exp") && (t = o.google.protobuf.Timestamp.verify(e.exp)) ? "exp." + t : null != e.replid && e.hasOwnProperty("replid") && !r.isString(e.replid) ? "replid: string expected" : null != e.replToken && e.hasOwnProperty("replToken") && (n.Token = 1, t = o.api.ReplToken.verify(e.replToken)) ? "replToken." + t : null
                        }, i.fromObject = function(e) {
                            if (e instanceof o.api.GovalToken) return e;
                            var t = new o.api.GovalToken;
                            if (null != e.iat) {
                                if ("object" !== typeof e.iat) throw TypeError(".api.GovalToken.iat: object expected");
                                t.iat = o.google.protobuf.Timestamp.fromObject(e.iat)
                            }
                            if (null != e.exp) {
                                if ("object" !== typeof e.exp) throw TypeError(".api.GovalToken.exp: object expected");
                                t.exp = o.google.protobuf.Timestamp.fromObject(e.exp)
                            }
                            if (null != e.replid && (t.replid = String(e.replid)), null != e.replToken) {
                                if ("object" !== typeof e.replToken) throw TypeError(".api.GovalToken.replToken: object expected");
                                t.replToken = o.api.ReplToken.fromObject(e.replToken)
                            }
                            return t
                        }, i.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.iat = null, n.exp = null, n.replid = ""), null != e.iat && e.hasOwnProperty("iat") && (n.iat = o.google.protobuf.Timestamp.toObject(e.iat, t)), null != e.exp && e.hasOwnProperty("exp") && (n.exp = o.google.protobuf.Timestamp.toObject(e.exp, t)), null != e.replid && e.hasOwnProperty("replid") && (n.replid = e.replid), null != e.replToken && e.hasOwnProperty("replToken") && (n.replToken = o.api.ReplToken.toObject(e.replToken, t), t.oneofs && (n.Token = "replToken")), n
                        }, i.prototype.toJSON = function() {
                            return this.constructor.toObject(this, e.util.toJSONOptions)
                        }, i
                    }(), i
                }(), o.google = function() {
                    var i = {};
                    return i.protobuf = function() {
                        var i = {};
                        return i.Timestamp = function() {
                            function i(e) {
                                if (e)
                                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                            }
                            return i.prototype.seconds = r.Long ? r.Long.fromBits(0, 0, !1) : 0, i.prototype.nanos = 0, i.create = function(e) {
                                return i.fromObject(e)
                            }, i.encode = function(e, t) {
                                return t || (t = n.create()), null != e.seconds && Object.hasOwnProperty.call(e, "seconds") && t.uint32(8).int64(e.seconds), null != e.nanos && Object.hasOwnProperty.call(e, "nanos") && t.uint32(16).int32(e.nanos), t
                            }, i.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, i.decode = function(e, n) {
                                e instanceof t || (e = t.create(e));
                                for (var r = void 0 === n ? e.len : e.pos + n, i = new o.google.protobuf.Timestamp; e.pos < r;) {
                                    var a = e.uint32();
                                    switch (a >>> 3) {
                                        case 1:
                                            i.seconds = e.int64();
                                            break;
                                        case 2:
                                            i.nanos = e.int32();
                                            break;
                                        default:
                                            e.skipType(7 & a)
                                    }
                                }
                                return i
                            }, i.decodeDelimited = function(e) {
                                return e instanceof t || (e = new t(e)), this.decode(e, e.uint32())
                            }, i.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null == e.seconds || !e.hasOwnProperty("seconds") || r.isInteger(e.seconds) || e.seconds && r.isInteger(e.seconds.low) && r.isInteger(e.seconds.high) ? null != e.nanos && e.hasOwnProperty("nanos") && !r.isInteger(e.nanos) ? "nanos: integer expected" : null : "seconds: integer|Long expected"
                            }, i.fromObject = function(e) {
                                if (e instanceof o.google.protobuf.Timestamp) return e;
                                var t = new o.google.protobuf.Timestamp;
                                return null != e.seconds && (r.Long ? (t.seconds = r.Long.fromValue(e.seconds)).unsigned = !1 : "string" === typeof e.seconds ? t.seconds = parseInt(e.seconds, 10) : "number" === typeof e.seconds ? t.seconds = e.seconds : "object" === typeof e.seconds && (t.seconds = new r.LongBits(e.seconds.low >>> 0, e.seconds.high >>> 0).toNumber())), null != e.nanos && (t.nanos = 0 | e.nanos), t
                            }, i.toObject = function(e, t) {
                                t || (t = {});
                                var n = {};
                                if (t.defaults) {
                                    if (r.Long) {
                                        var o = new r.Long(0, 0, !1);
                                        n.seconds = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                                    } else n.seconds = t.longs === String ? "0" : 0;
                                    n.nanos = 0
                                }
                                return null != e.seconds && e.hasOwnProperty("seconds") && ("number" === typeof e.seconds ? n.seconds = t.longs === String ? String(e.seconds) : e.seconds : n.seconds = t.longs === String ? r.Long.prototype.toString.call(e.seconds) : t.longs === Number ? new r.LongBits(e.seconds.low >>> 0, e.seconds.high >>> 0).toNumber() : e.seconds), null != e.nanos && e.hasOwnProperty("nanos") && (n.nanos = e.nanos), n
                            }, i.prototype.toJSON = function() {
                                return this.constructor.toObject(this, e.util.toJSONOptions)
                            }, i
                        }(), i
                    }(), i
                }(), o
            }) ? r.apply(t, o) : r) || (e.exports = i)
        }
    }
]);
//# sourceMappingURL=478a99c2.5d626225889e17f993b6.js.map