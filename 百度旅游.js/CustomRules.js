import System;
import System.Windows.Forms;
import Fiddler;

// INTRODUCTION
//
// Well, hello there!
//
// Don't be scared! :-)
//
// This is the FiddlerScript Rules file, which creates some of the menu commands and
// other features of Fiddler. You can edit this file to modify or add new commands.
//
// The original version of this file is named SampleRules.js and it is in the
// \Program Files\Fiddler\ folder. When Fiddler first runs, it creates a copy named
// CustomRules.js inside your \Documents\Fiddler2\Scripts folder. If you make a
// mistake in editing this file, simply delete the CustomRules.js file and restart
// Fiddler. A fresh copy of the default rules will be created from the original
// sample rules file.

// The best way to edit this file is to install the FiddlerScript Editor, part of
// the free SyntaxEditing addons. Get it here: http://fiddler2.com/r/?SYNTAXVIEWINSTALL

// GLOBALIZATION NOTE: Save this file using UTF-8 Encoding.

// JScript.NET Reference
// http://fiddler2.com/r/?msdnjsnet
//
// FiddlerScript Reference
// http://fiddler2.com/r/?fiddlerscriptcookbook

class Handlers
{
    // *****************
    //
    // This is the Handlers class. Pretty much everything you ever add to FiddlerScript
    // belongs right inside here, or inside one of the already-existing functions below.
    //
    // *****************

    // The following snippet demonstrates a custom-bound column for the Web Sessions list.
    // See http://fiddler2.com/r/?fiddlercolumns for more info
    /*
      public static BindUIColumn("Method", 60)
      function FillMethodColumn(oS: Session): String {
         return oS.RequestMethod;
      }
    */

    // The following snippet demonstrates how to create a custom tab that shows simple text
    /*
       public BindUITab("Flags")
       static function FlagsReport(arrSess: Session[]):String {
        var oSB: System.Text.StringBuilder = new System.Text.StringBuilder();
        for (var i:int = 0; i<arrSess.Length; i++)
        {
            oSB.AppendLine("SESSION FLAGS");
            oSB.AppendFormat("{0}: {1}\n", arrSess[i].id, arrSess[i].fullUrl);
            for(var sFlag in arrSess[i].oFlags)
            {
                oSB.AppendFormat("\t{0}:\t\t{1}\n", sFlag.Key, sFlag.Value);
            }
        }
        return oSB.ToString();
    }
    */

    // You can create a custom menu like so:
    /*
    QuickLinkMenu("&Links")
    QuickLinkItem("IE GeoLoc TestDrive", "http://ie.microsoft.com/testdrive/HTML5/Geolocation/Default.html")
    QuickLinkItem("FiddlerCore", "http://fiddler2.com/fiddlercore")
    public static function DoLinksMenu(sText: String, sAction: String)
    {
        Utilities.LaunchHyperlink(sAction);
    }
    */

    public static RulesOption("Hide 304s")
    BindPref("fiddlerscript.rules.Hide304s")
    var m_Hide304s: boolean = false;

    // Cause Fiddler to override the Accept-Language header with one of the defined values
    public static RulesOption("Request &Japanese Content")
    var m_Japanese: boolean = false;

    // Automatic Authentication
    public static RulesOption("&Automatically Authenticate")
    BindPref("fiddlerscript.rules.AutoAuth")
    var m_AutoAuth: boolean = false;

    // Cause Fiddler to override the User-Agent header with one of the defined values
    // The page http://browserscope2.org/browse?category=selectors&ua=Mobile%20Safari is a good place to find updated versions of these
    RulesString("&User-Agents", true)
    BindPref("fiddlerscript.ephemeral.UserAgentString")
    RulesStringValue(0,"Netscape &3", "Mozilla/3.0 (Win95; I)")
    RulesStringValue(1,"WinPhone8.1", "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 520) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537")
    RulesStringValue(2,"&Safari5 (Win7)", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1")
    RulesStringValue(3,"Safari9 (Mac)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11) AppleWebKit/601.1.56 (KHTML, like Gecko) Version/9.0 Safari/601.1.56")
    RulesStringValue(4,"iPad", "Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F5027d Safari/600.1.4")
    RulesStringValue(5,"iPhone6", "Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4")
    RulesStringValue(6,"IE &6 (XPSP2)", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)")
    RulesStringValue(7,"IE &7 (Vista)", "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1)")
    RulesStringValue(8,"IE 8 (Win2k3 x64)", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; WOW64; Trident/4.0)")
    RulesStringValue(9,"IE &8 (Win7)", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)")
    RulesStringValue(10,"IE 9 (Win7)", "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)")
    RulesStringValue(11,"IE 10 (Win8)", "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)")
    RulesStringValue(12,"IE 11 (Surface2)", "Mozilla/5.0 (Windows NT 6.3; ARM; Trident/7.0; Touch; rv:11.0) like Gecko")
    RulesStringValue(13,"IE 11 (Win8.1)", "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko")
    RulesStringValue(14,"Edge (Win10)", "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.11082")
    RulesStringValue(15,"&Opera", "Opera/9.80 (Windows NT 6.2; WOW64) Presto/2.12.388 Version/12.17")
    RulesStringValue(16,"&Firefox 3.6", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.7) Gecko/20100625 Firefox/3.6.7")
    RulesStringValue(17,"&Firefox 43", "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0")
    RulesStringValue(18,"&Firefox Phone", "Mozilla/5.0 (Mobile; rv:18.0) Gecko/18.0 Firefox/18.0")
    RulesStringValue(19,"&Firefox (Mac)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0")
    RulesStringValue(20,"Chrome (Win)", "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.48 Safari/537.36")
    RulesStringValue(21,"Chrome (Android)", "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36")
    RulesStringValue(22,"ChromeBook", "Mozilla/5.0 (X11; CrOS x86_64 6680.52.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.74 Safari/537.36")
    RulesStringValue(23,"GoogleBot Crawler", "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)")
    RulesStringValue(24,"Kindle Fire (Silk)", "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.22.79_10013310) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true")
    RulesStringValue(25,"&Custom...", "%CUSTOM%")
    public static var sUA: String = null;

    // Cause Fiddler to delay HTTP traffic to simulate typical 56k modem conditions
    public static RulesOption("Simulate &Modem Speeds", "Per&formance")
    var m_SimulateModem: boolean = false;

    // Removes HTTP-caching related headers and specifies "no-cache" on requests and responses
    public static RulesOption("&Disable Caching", "Per&formance")
    var m_DisableCaching: boolean = false;

    public static RulesOption("Cache Always &Fresh", "Per&formance")
    var m_AlwaysFresh: boolean = false;

    // Force a manual reload of the script file.  Resets all
    // RulesOption variables to their defaults.
    public static ToolsAction("Reset Script")
    function DoManualReload() {
        FiddlerObject.ReloadScript();
    }

    public static ContextAction("Decode Selected Sessions")
    function DoRemoveEncoding(oSessions: Session[]) {
        for (var x:int = 0; x < oSessions.Length; x++){
            oSessions[x].utilDecodeRequest();
            oSessions[x].utilDecodeResponse();
        }
        UI.actUpdateInspector(true,true);
    }


	//作者：nmask
	//链接：https://zhuanlan.zhihu.com/p/26676712
	//来源：知乎
	//著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

	//static function OnBeforeRequest(oSession: Session) {

		// oSession.oRequest.headers.Remove("Cookie");   //移除请求包的cookies
		// oSession.oRequest.headers.Add("Cookie", "username=admin;");  //新建cookies
		// oSession.oRequest["Referer"]="http://www.baidu.com"; //设置referer为baidu

		// if (oSession.HTTPMethodIs("POST")){   //POST修改为GET
		//     oSession.RequestMethod="GET";
		// }

		// var strBody=oSession.GetRequestBodyAsString();   //获取请求包中的body内容，修改其内容。
		// // // strBody=strBody.replace("111","222");   //替换字符串
		// strBody="11111111111111111111111111111111111"+strBody;  //在发送的数据包前面加上垃圾数据
		// // // strBody=strBody.ToUpper(); //全部转化为大写
		// // // strBody=strBody.ToLower(); //全部转化为小写
		// oSession.utilSetRequestBody(strBody);
	//}

	//保存文件的代码
	//if(oSession.host == 'question.hortor.net'){
	//oSession.utilDecodeResponse();   //Decoding HTTP request in case it's gzip
	//Saving full request object (Including HTTP headers)
	//oSession.SaveResponse('C:\\Users\\XXXX\\Desktop\\data\\response.txt',true);
	//Saving just body
//	oSession.SaveResponseBody('C:\\Users\\XXXX\\Desktop\\data\\responsebody.txt');
//}



// 例如http请求中，对域名为p.21kunpeng.com的URI的http请求内容作修改：

// if (oSession.host.indexOf("p.21kunpeng.com") > -1) {
//  // 修改session中的显示样式
//  oSession["ui-color"] = "orange";
//  // 移除http头部中的MQB-X5-Referer字段
//  oSession.oRequest.headers.Remove("MQB-X5-Referer");
//  // 修改http头部中的Cache-Control字段
//  oSession.oRequest["Cache-Control"] = "no-cache";
//  // 修改host
//  oSession.host = "kyfw.12306.cn";
//  // 修改Origin字段
//  oSession.oRequest["Origin"] = "https://kyfw.12306.cn";
//  // 删除所有的cookie
//  oSession.oRequest.headers.Remove("Cookie");
//  // 新建cookie
//  oSession.oRequest.headers.Add("Cookie", "username=yulesyu;");
//  // 修改Referer字段
//  oSession.oRequest["Referer"] = "https://kyfw.12306.cn/otsweb/loginAction.do";

//  // 获取Request中的body字符串
//  var strBody=oSession.GetRequestBodyAsString();
//  // 用正则表达式或者replace方法去修改string
//  strBody=strBody.replace("1111","2222");
//  // 弹个对话框检查下修改后的body
//  FiddlerObject.alert(strBody);
//  // 将修改后的body，重新写回Request中
//  oSession.utilSetRequestBody(strBody);
// }
// 例如http应答中，如果含有location并且location中含有字段initQueryUserInfo，则修改为http://p.21kunpeng.com

// var location = oSession.oResponse.headers["Location"];
//  if(oSession.PathAndQuery.indexOf("initQueryUserInfo") != -1)
//  {
//     oSession.oResponse.headers["Location"] = "http://p.21kunpeng.com";
//  }



// 1.2.2 修改URI
// 将请求URI中http协议替换成https协议，例如：

// oSession.fullUrl = "https" + oSession.fullUrl.Substring(oSession.fullUrl.IndexOf(':'));

// 1.2.3 定制菜单
// 定制rule菜单的子菜单

// 例如在rule菜单下定义一个修改http头部中的Q-UA字段的子菜单：

// / 定义名为Q-UA的子菜单
// RulesString("&Q-UA", true);
// // 生成Q-UA子菜单的radio选项
// RulesStringValue(0,"x5_4.3", "ADRQBX43_GA/420411&X5MTT_3/024200&ADR&346014& U9200 &0&9065&Android4.0.3 &V3")
// RulesStringValue(1,"x5_5.0", "ADRQBX50_B1/500620&X5MTT_3/025001&ADR&346014& U9200 &21013&9255&Android4.2.2 &V3")
// RulesStringValue(2,"ios4.1", "IQB41_GA/370015&IMTT_3/370015&IPH&406040&iPodTouch4G&50003&8917&V3")
// RulesStringValue(3,"ios5.0", "IQB50_GA/500028&IMTT_3/500028&IPH&406040&iPhone4&50001&9219&iOS7.0.4&V3")
// RulesStringValue(4,"&Custom...", "%CUSTOM%")
// public static var sQUA: String = null;
// 还需要在OnBeforeRequest函数中加入：

//  // Q-UA Overrides
//  if (null != sQUA) {
//      oSession.oRequest["Q-UA"] = sQUA;
//  }
// 定制tool菜单的子菜单

// // tool menu
//  public static ToolsAction("tool menu")
//  function DoManualYules(){
//      FiddlerObject.alert("tool menu"); // 根据需要定制
//  }
// 定制右键子菜单

//  // tool menu
//  public static ContextAction("context menu")
//  function DoOpenInIE(oSessions: Fiddler.Session[]){
//      FiddlerObject.alert("context menu"); // 根据需要定制
//  }


// 如何在Fiddler Script中修改Cookie
// cookie其实就是request 中的一个header.

// // 删除所有的cookie

// oSession.oRequest.headers.Remove("Cookie");

// // 新建cookie
// oSession.oRequest.headers.Add("Cookie", "username=testname;testpassword=P@ssword1");

// 注意: Fiddler script不能直接删除或者编辑单独的一个cookie， 你需要用replace方法或者正则表达式的方法去操作cookie的string



// static function OnBeforeRequest(oSession: Session)
// {
//    if (oSession.HostnameIs('www.example.com') &&
//           oSession.uriContains('pagewithCookie') &&
// oSession.oRequest.headers.Contains("Cookie"))
//    {

//    var sCookie = oSession.oRequest["Cookie"];

//    //用replace方法或者正则表达式的方法去操作cookie的string
//    sCookie = sCookie.Replace("cookieName=", "ignoreme=");

//    oSession.oRequest["Cookie"] = sCookie;
//     }





    static function OnBeforeRequest(oSession: Session) {
        // Sample Rule: Color ASPX requests in RED
        // if (oSession.uriContains(".aspx")) {	oSession["ui-color"] = "red";	}

        // Sample Rule: Flag POSTs to fiddler2.com in italics
        // if (oSession.HostnameIs("www.fiddler2.com") && oSession.HTTPMethodIs("POST")) {	oSession["ui-italic"] = "yup";	}

        // Sample Rule: Break requests for URLs containing "/sandbox/"
        // if (oSession.uriContains("/sandbox/")) {
        //     oSession.oFlags["x-breakrequest"] = "yup";	// Existence of the x-breakrequest flag creates a breakpoint; the "yup" value is unimportant.
        // }

        // var startTime : Date = new Date();
        // var name : String = Console.ReadLine();
        // var endTime : Date = new Date();

        // var elapsed : Number =
        //     (endTime.getTime() - startTime.getTime()) / 1000;


        if (oSession.host.indexOf("ilvyou.baidu.com") > -1) {
          var nowDate : Date = new Date();
          var nowtimestamp : Number = nowDate.getTime()
          var nowSecond = Math.floor(nowtimestamp/1000)
          // oSession.oRequest.headers.Add("Cookie","username=testname;testpassword=P@ssword1");
          // 删除所有的cookie
          oSession.oRequest.headers.Remove("Cookie");
          // 新建cookie
          oSession.oRequest.headers.Add("Cookie", "TERMINAL=android_AD2AB44255DC86698C9DD691FC0B80D5%7C0;APP_VERSION=android_0.2.2;CHANNEL=syw;DEVICE=android;APP_TIME="+nowSecond+";"+"REQUEST_ID="+nowtimestamp+";TOKEN=TDYvqzdQ7t58rZXXsuVGJVoVJUUXecA1;BDUSS=VFzVTd6fjRPOG1tWjNtTlduSlBSWk9HNDZ4TjJQZ2pVWWtrbVVremJzTDFoNWRiQUFBQUFBJCQAAAAAAAAAAAEAAADidHSSbWFvZnZ1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPX6b1v1-m9bZ");
          // 弹个对话框检查下修改后的body
          // FiddlerObject.alert(oSession.oRequest.headers);
         }
















        if ((null != gs_ReplaceToken) && (oSession.url.indexOf(gs_ReplaceToken)>-1)) {   // Case sensitive
            oSession.url = oSession.url.Replace(gs_ReplaceToken, gs_ReplaceTokenWith);
        }
        if ((null != gs_OverridenHost) && (oSession.host.toLowerCase() == gs_OverridenHost)) {
            oSession["x-overridehost"] = gs_OverrideHostWith;
        }

        if ((null!=bpRequestURI) && oSession.uriContains(bpRequestURI)) {
            oSession["x-breakrequest"]="uri";
        }

        if ((null!=bpMethod) && (oSession.HTTPMethodIs(bpMethod))) {
            oSession["x-breakrequest"]="method";
        }

        if ((null!=uiBoldURI) && oSession.uriContains(uiBoldURI)) {
            oSession["ui-bold"]="QuickExec";
        }

        if (m_SimulateModem) {
            // Delay sends by 300ms per KB uploaded.
            oSession["request-trickle-delay"] = "300";
            // Delay receives by 150ms per KB downloaded.
            oSession["response-trickle-delay"] = "150";
        }

        if (m_DisableCaching) {
            oSession.oRequest.headers.Remove("If-None-Match");
            oSession.oRequest.headers.Remove("If-Modified-Since");
            oSession.oRequest["Pragma"] = "no-cache";
        }

        // User-Agent Overrides
        if (null != sUA) {
            oSession.oRequest["User-Agent"] = sUA;
        }

        if (m_Japanese) {
            oSession.oRequest["Accept-Language"] = "ja";
        }

        if (m_AutoAuth) {
            // Automatically respond to any authentication challenges using the
            // current Fiddler user's credentials. You can change (default)
            // to a domain\\username:password string if preferred.
            //
            // WARNING: This setting poses a security risk if remote
            // connections are permitted!
            oSession["X-AutoAuth"] = "(default)";
        }

        if (m_AlwaysFresh && (oSession.oRequest.headers.Exists("If-Modified-Since") || oSession.oRequest.headers.Exists("If-None-Match")))
        {
            oSession.utilCreateResponseAndBypassServer();
            oSession.responseCode = 304;
            oSession["ui-backcolor"] = "Lavender";
        }
    }

    // This function is called immediately after a set of request headers has
    // been read from the client. This is typically too early to do much useful
    // work, since the body hasn't yet been read, but sometimes it may be useful.
    //
    // For instance, see
    // http://blogs.msdn.com/b/fiddler/archive/2011/11/05/http-expect-continue-delays-transmitting-post-bodies-by-up-to-350-milliseconds.aspx
    // for one useful thing you can do with this handler.
    //
    // Note: oSession.requestBodyBytes is not available within this function!
/*
    static function OnPeekAtRequestHeaders(oSession: Session) {
        var sProc = ("" + oSession["x-ProcessInfo"]).ToLower();
        if (!sProc.StartsWith("mylowercaseappname")) oSession["ui-hide"] = "NotMyApp";
    }
*/

    //
    // If a given session has response streaming enabled, then the OnBeforeResponse function
    // is actually called AFTER the response was returned to the client.
    //
    // In contrast, this OnPeekAtResponseHeaders function is called before the response headers are
    // sent to the client (and before the body is read from the server).  Hence this is an opportune time
    // to disable streaming (oSession.bBufferResponse = true) if there is something in the response headers
    // which suggests that tampering with the response body is necessary.
    //
    // Note: oSession.responseBodyBytes is not available within this function!
    //
    static function OnPeekAtResponseHeaders(oSession: Session) {
        //FiddlerApplication.Log.LogFormat("Session {0}: Response header peek shows status is {1}", oSession.id, oSession.responseCode);
        if (m_DisableCaching) {
            oSession.oResponse.headers.Remove("Expires");
            oSession.oResponse["Cache-Control"] = "no-cache";
        }

        if ((bpStatus>0) && (oSession.responseCode == bpStatus)) {
            oSession["x-breakresponse"]="status";
            oSession.bBufferResponse = true;
        }

        if ((null!=bpResponseURI) && oSession.uriContains(bpResponseURI)) {
            oSession["x-breakresponse"]="uri";
            oSession.bBufferResponse = true;
        }

    }

    static function OnBeforeResponse(oSession: Session) {
        if (m_Hide304s && oSession.responseCode == 304) {
            oSession["ui-hide"] = "true";
        }
		if (oSession.oRequest["User-Agent"].indexOf("Android") > -1 && oSession.HTTPMethodIs("CONNECT")) {
			oSession.oResponse.headers["Connection"] = "Keep-Alive";
    }

    //保存图片
//     if ((oSession.responseCode == 200) &&
//     oSession.oResponse.headers.ExistsAndContains("Content-Type", "image/png"))
//  {
//    SaveResponseBody("C:\\temp\\" + oSession.SuggestedFilename);
//  }
// oSession.responseBodyBytes.Length

// 请务必在OnBeforeResponse（oSession：Session）{...}函数中添加您的代码

// 以下代码将保存包含“procedimentoservice”的任何url的请求和响应正文以及与OK（200）不同的响应代码。
// if (oSession.PathAndQuery.ToLower().Contains("procedimentoservice"))
//         {
//             if(oSession.responseCode != 200)
//             {
//                 var directory2 = "C:\\log\\NEXT\\";
//                 var filename2 = oSession.oRequest.headers['SOAPAction'].ToString().Replace('"','') + "_" + Guid.NewGuid();
//                 var path2: String = System.IO.Path.Combine(directory2, filename2);

//                 oSession.SaveRequestBody(path2 + "_request.txt");
//                 oSession.SaveResponseBody(path2 + "_response.txt");
//             }
//         }
// 文件名将采用以下格式：
// "C:\Users\Administrator\Desktop\data\response.txt"
// "C:/Users/Administrator/Desktop/data/response.txt"
// c:\log\NEXT\CriarEvento_fa15709e-b2a8-402d-a623-e4f01e6e8ae1_request.txt
// c:\log\NEXT\CriarEvento_fa15709e-b2a8-402d-a623-e4f01e6e8ae1_response.txt
// c:\log\NEXT\CriarEvento_ff650cf8-8fe6-47a2-8552-a4d8bce246f3_request.txt
// c:\log\NEXT\CriarEvento_ff650cf8-8fe6-47a2-8552-a4d8bce246f3_response.txt


	//保存文件的代码
	if((oSession.responseCode == 200) && oSession.host == 'ilvyou.baidu.com'){
    // oSession.utilDecodeResponse();   //Decoding HTTP request in case it's gzip




    oSession.SaveRequestBody('C:\\Users\\Administrator\\Desktop\\data\\request.txt');
    oSession.SaveResponseBody('C:\\Users\\Administrator\\Desktop\\data\\response.txt');
  }

  // C:\Users\Administrator\Desktop\data

    }

/*
    // This function executes just before Fiddler returns an error that it has
    // itself generated (e.g. "DNS Lookup failure") to the client application.
    // These responses will not run through the OnBeforeResponse function above.
    static function OnReturningError(oSession: Session) {
    }
*/
/*
    // This function executes after Fiddler finishes processing a Session, regardless
    // of whether it succeeded or failed. Note that this typically runs AFTER the last
    // update of the Web Sessions UI listitem, so you must manually refresh the Session's
    // UI if you intend to change it.
    static function OnDone(oSession: Session) {
    }
*/

    /*
    static function OnBoot() {
        MessageBox.Show("Fiddler has finished booting");
        System.Diagnostics.Process.Start("iexplore.exe");

        UI.ActivateRequestInspector("HEADERS");
        UI.ActivateResponseInspector("HEADERS");
    }
    */

    /*
    static function OnBeforeShutdown(): Boolean {
        // Return false to cancel shutdown.
        return ((0 == FiddlerApplication.UI.lvSessions.TotalItemCount()) ||
                (DialogResult.Yes == MessageBox.Show("Allow Fiddler to exit?", "Go Bye-bye?",
                 MessageBoxButtons.YesNo, MessageBoxIcon.Question, MessageBoxDefaultButton.Button2)));
    }
    */

    /*
    static function OnShutdown() {
            MessageBox.Show("Fiddler has shutdown");
    }
    */

    /*
    static function OnAttach() {
        MessageBox.Show("Fiddler is now the system proxy");
    }
    */

    /*
    static function OnDetach() {
        MessageBox.Show("Fiddler is no longer the system proxy");
    }
    */

    // The Main() function runs everytime your FiddlerScript compiles
    static function Main() {
        var today: Date = new Date();
        FiddlerObject.StatusText = " CustomRules.js was loaded at: " + today;

        // Uncomment to add a "Server" column containing the response "Server" header, if present
        // UI.lvSessions.AddBoundColumn("Server", 50, "@response.server");

        // Uncomment to add a global hotkey (Win+G) that invokes the ExecAction method below...
        // UI.RegisterCustomHotkey(HotkeyModifiers.Windows, Keys.G, "screenshot");
    }

    // These static variables are used for simple breakpointing & other QuickExec rules
    BindPref("fiddlerscript.ephemeral.bpRequestURI")
    public static var bpRequestURI:String = null;

    BindPref("fiddlerscript.ephemeral.bpResponseURI")
    public static var bpResponseURI:String = null;

    BindPref("fiddlerscript.ephemeral.bpMethod")
    public static var bpMethod: String = null;

    static var bpStatus:int = -1;
    static var uiBoldURI: String = null;
    static var gs_ReplaceToken: String = null;
    static var gs_ReplaceTokenWith: String = null;
    static var gs_OverridenHost: String = null;
    static var gs_OverrideHostWith: String = null;

    // The OnExecAction function is called by either the QuickExec box in the Fiddler window,
    // or by the ExecAction.exe command line utility.
    static function OnExecAction(sParams: String[]): Boolean {

        FiddlerObject.StatusText = "ExecAction: " + sParams[0];

        var sAction = sParams[0].toLowerCase();
        switch (sAction) {
        case "bold":
            if (sParams.Length<2) {uiBoldURI=null; FiddlerObject.StatusText="Bolding cleared"; return false;}
            uiBoldURI = sParams[1]; FiddlerObject.StatusText="Bolding requests for " + uiBoldURI;
            return true;
        case "bp":
            FiddlerObject.alert("bpu = breakpoint request for uri\nbpm = breakpoint request method\nbps=breakpoint response status\nbpafter = breakpoint response for URI");
            return true;
        case "bps":
            if (sParams.Length<2) {bpStatus=-1; FiddlerObject.StatusText="Response Status breakpoint cleared"; return false;}
            bpStatus = parseInt(sParams[1]); FiddlerObject.StatusText="Response status breakpoint for " + sParams[1];
            return true;
        case "bpv":
        case "bpm":
            if (sParams.Length<2) {bpMethod=null; FiddlerObject.StatusText="Request Method breakpoint cleared"; return false;}
            bpMethod = sParams[1].toUpperCase(); FiddlerObject.StatusText="Request Method breakpoint for " + bpMethod;
            return true;
        case "bpu":
            if (sParams.Length<2) {bpRequestURI=null; FiddlerObject.StatusText="RequestURI breakpoint cleared"; return false;}
            bpRequestURI = sParams[1];
            FiddlerObject.StatusText="RequestURI breakpoint for "+sParams[1];
            return true;
        case "bpa":
        case "bpafter":
            if (sParams.Length<2) {bpResponseURI=null; FiddlerObject.StatusText="ResponseURI breakpoint cleared"; return false;}
            bpResponseURI = sParams[1];
            FiddlerObject.StatusText="ResponseURI breakpoint for "+sParams[1];
            return true;
        case "overridehost":
            if (sParams.Length<3) {gs_OverridenHost=null; FiddlerObject.StatusText="Host Override cleared"; return false;}
            gs_OverridenHost = sParams[1].toLowerCase();
            gs_OverrideHostWith = sParams[2];
            FiddlerObject.StatusText="Connecting to [" + gs_OverrideHostWith + "] for requests to [" + gs_OverridenHost + "]";
            return true;
        case "urlreplace":
            if (sParams.Length<3) {gs_ReplaceToken=null; FiddlerObject.StatusText="URL Replacement cleared"; return false;}
            gs_ReplaceToken = sParams[1];
            gs_ReplaceTokenWith = sParams[2].Replace(" ", "%20");  // Simple helper
            FiddlerObject.StatusText="Replacing [" + gs_ReplaceToken + "] in URIs with [" + gs_ReplaceTokenWith + "]";
            return true;
        case "allbut":
        case "keeponly":
            if (sParams.Length<2) { FiddlerObject.StatusText="Please specify Content-Type to retain during wipe."; return false;}
            UI.actSelectSessionsWithResponseHeaderValue("Content-Type", sParams[1]);
            UI.actRemoveUnselectedSessions();
            UI.lvSessions.SelectedItems.Clear();
            FiddlerObject.StatusText="Removed all but Content-Type: " + sParams[1];
            return true;
        case "stop":
            UI.actDetachProxy();
            return true;
        case "start":
            UI.actAttachProxy();
            return true;
        case "cls":
        case "clear":
            UI.actRemoveAllSessions();
            return true;
        case "g":
        case "go":
            UI.actResumeAllSessions();
            return true;
        case "goto":
            if (sParams.Length != 2) return false;
            Utilities.LaunchHyperlink("http://www.google.com/search?hl=en&btnI=I%27m+Feeling+Lucky&q=" + Utilities.UrlEncode(sParams[1]));
            return true;
        case "help":
            Utilities.LaunchHyperlink("http://fiddler2.com/r/?quickexec");
            return true;
        case "hide":
            UI.actMinimizeToTray();
            return true;
        case "log":
            FiddlerApplication.Log.LogString((sParams.Length<2) ? "User couldn't think of anything to say..." : sParams[1]);
            return true;
        case "nuke":
            UI.actClearWinINETCache();
            UI.actClearWinINETCookies();
            return true;
        case "screenshot":
            UI.actCaptureScreenshot(false);
            return true;
        case "show":
            UI.actRestoreWindow();
            return true;
        case "tail":
            if (sParams.Length<2) { FiddlerObject.StatusText="Please specify # of sessions to trim the session list to."; return false;}
            UI.TrimSessionList(int.Parse(sParams[1]));
            return true;
        case "quit":
            UI.actExit();
            return true;
        case "dump":
            UI.actSelectAll();
            UI.actSaveSessionsToZip(CONFIG.GetPath("Captures") + "dump.saz");
            UI.actRemoveAllSessions();
            FiddlerObject.StatusText = "Dumped all sessions to " + CONFIG.GetPath("Captures") + "dump.saz";
            return true;

        default:
            if (sAction.StartsWith("http") || sAction.StartsWith("www.")) {
                System.Diagnostics.Process.Start(sParams[0]);
                return true;
            }
            else
            {
                FiddlerObject.StatusText = "Requested ExecAction: '" + sAction + "' not found. Type HELP to learn more.";
                return false;
            }
        }
    }
}

