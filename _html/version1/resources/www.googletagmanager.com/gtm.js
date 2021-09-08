// Copyright 2012 Google Inc. All rights reserved.
(function (w, g) {
  w[g] = w[g] || {};
  w[g].e = function (s) {
    return eval(s);
  };
})(window, "google_tag_manager");
(function () {
  var data = {
    resource: {
      version: "37",

      macros: [
        {
          function: "__e",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return!("1"!==window.doNotTrack\u0026\u0026"1"!==window.navigator.doNotTrack\u0026\u0026"1"!==window.navigator.msDoNotTrack)})();',
          ],
        },
        {
          function: "__k",
          convert_true_to: "Signed in",
          convert_false_to: "Not signed in",
          vtp_decodeCookie: true,
          vtp_name: "signedIn",
        },
        {
          function: "__v",
          vtp_name: "gtm.triggers",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
        },
        {
          function: "__gas",
          vtp_cookieDomain: "auto",
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_useDebugVersion: false,
          vtp_useHashAutoLink: false,
          vtp_decorateFormsAutoLink: false,
          vtp_enableLinkId: false,
          vtp_enableEcommerce: false,
          vtp_trackingId: "UA-89432508-1",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableGA4Schema: false,
        },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_name: "gtm.scrollThreshold",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.scrollUnits",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__aev",
          vtp_varType: "TEXT",
        },
        {
          function: "__v",
          vtp_name: "gtm.elementUrl",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "product",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "page-type",
        },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__c",
          vtp_value: "UA-89432508-1",
        },
        {
          function: "__smm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 2],
          vtp_map: [
            "list",
            ["map", "key", "true", "value", "Signedin"],
            ["map", "key", "false", "value", "Not Signedin"],
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 10],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "/dashboard/recent", "value", "Dashboard page"],
            ["map", "key", "/s/new", "value", "New Sandbox page"],
            ["map", "key", "/blog", "value", "Blog page"],
          ],
        },
        {
          function: "__j",
          vtp_name: "clientInformation.appName",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){try{var a=document.getElementsByClassName("sc-jTzLTM elements__PriceInput-sc-1t457yy-1 hImqsg")[0].value}catch(b){a="undefined"}return a})();',
          ],
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__f",
          vtp_component: "URL",
        },
        {
          function: "__e",
        },
        {
          function: "__v",
          vtp_name: "gtm.element",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementId",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementTarget",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.element",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementId",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementTarget",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementUrl",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__aev",
          vtp_varType: "TEXT",
        },
        {
          function: "__v",
          vtp_name: "gtm.errorMessage",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.errorUrl",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.errorLineNumber",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__ctv",
        },
        {
          function: "__dbg",
        },
        {
          function: "__r",
        },
        {
          function: "__cid",
        },
        {
          function: "__hid",
        },
        {
          function: "__v",
          vtp_name: "gtm.videoProvider",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoUrl",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoTitle",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoDuration",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoPercent",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoVisible",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoStatus",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoCurrentTime",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.scrollDirection",
          vtp_dataLayerVersion: 1,
        },
      ],
      tags: [
        {
          function: "__html",
          priority: 99,
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Evar cookieName="visit_sandbox",cookieValue="1",expirationTime=2592E3;expirationTime*=1E3;var date=new Date,dateTimeNow=date.getTime();date.setTime(dateTimeNow+expirationTime);date=date.toUTCString();document.cookie=cookieName+"\\x3d"+cookieValue+"; expires\\x3d"+date+"; path\\x3d/; domain\\x3d."+location.hostname.replace(/^www\\./i,"");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 12,
        },
        {
          function: "__ua",
          metadata: ["map"],
          setup_tags: ["list", ["tag", 26, 0]],
          once_per_event: true,
          vtp_overrideGaSettings: true,
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_useDebugVersion: false,
          vtp_fieldsToSet: [
            "list",
            ["map", "fieldName", "anonymizeIp", "value", "true"],
          ],
          vtp_useHashAutoLink: false,
          vtp_trackType: "TRACK_PAGEVIEW",
          vtp_decorateFormsAutoLink: false,
          vtp_enableLinkId: false,
          vtp_dimension: [
            "list",
            ["map", "index", "1", "dimension", ["macro", 2]],
          ],
          vtp_enableEcommerce: false,
          vtp_trackingId: "UA-89432508-1",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_enableGA4Schema: false,
          tag_id: 1,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_nonInteraction: true,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "User Interaction - scrolled",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 4],
          vtp_eventAction: ["macro", 5],
          vtp_eventLabel: ["template", ["macro", 6], ["macro", 7]],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: false,
          tag_id: 9,
        },
        {
          function: "__paused",
          vtp_originalTagType: "html",
          tag_id: 10,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Engagement",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 4],
          vtp_eventAction: "Link Click",
          vtp_eventLabel: [
            "template",
            "Click Text --- ",
            ["macro", 8],
            " Click URL ---",
            ["macro", 9],
          ],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: false,
          tag_id: 14,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Hyper Engagemed ~ 20 sec onsite",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 4],
          vtp_eventAction: "Engaged",
          vtp_eventLabel: ["macro", 10],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: false,
          tag_id: 15,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Product",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 4],
          vtp_eventAction: ["macro", 11],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: false,
          tag_id: 19,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Page Interaction",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 4],
          vtp_eventAction: "test",
          vtp_eventLabel: ["macro", 12],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: false,
          tag_id: 23,
        },
        {
          function: "__cl",
          tag_id: 67,
        },
        {
          function: "__cl",
          tag_id: 68,
        },
        {
          function: "__cl",
          tag_id: 69,
        },
        {
          function: "__cl",
          tag_id: 70,
        },
        {
          function: "__cl",
          tag_id: 71,
        },
        {
          function: "__sdl",
          vtp_verticalThresholdUnits: "PERCENT",
          vtp_verticalThresholdsPercent: "25,50,75,100",
          vtp_verticalThresholdOn: true,
          vtp_horizontalThresholdOn: false,
          vtp_uniqueTriggerId: "6823302_21",
          vtp_enableTriggerStartOption: true,
          tag_id: 72,
        },
        {
          function: "__sdl",
          vtp_verticalThresholdUnits: "PERCENT",
          vtp_verticalThresholdsPercent: "25,50,75,100",
          vtp_verticalThresholdOn: true,
          vtp_horizontalThresholdOn: false,
          vtp_uniqueTriggerId: "6823302_24",
          vtp_enableTriggerStartOption: true,
          tag_id: 73,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "6823302_48",
          tag_id: 74,
        },
        {
          function: "__cl",
          tag_id: 75,
        },
        {
          function: "__tl",
          vtp_eventName: "Engagement Timer 20 sec",
          vtp_interval: "20000",
          vtp_limit: "1",
          vtp_uniqueTriggerId: "6823302_50",
          tag_id: 76,
        },
        {
          function: "__ytl",
          vtp_progressThresholdsPercent: "10,20,30,40,50",
          vtp_captureComplete: true,
          vtp_captureStart: true,
          vtp_fixMissingApi: false,
          vtp_triggerStartOption: "DOM_READY",
          vtp_radioButtonGroup1: "PERCENTAGE",
          vtp_capturePause: true,
          vtp_captureProgress: true,
          vtp_uniqueTriggerId: "6823302_51",
          vtp_enableTriggerStartOption: true,
          tag_id: 77,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "6823302_54",
          tag_id: 78,
        },
        {
          function: "__evl",
          vtp_useOnScreenDuration: false,
          vtp_useDomChangeListener: false,
          vtp_elementSelector:
            "#___gatsby \u003E div \u003E div \u003E main \u003E div.Patron__Container-sc-1h4ale9-0.jFmjPG \u003E div \u003E div \u003E div \u003E div \u003E div",
          vtp_firingFrequency: "ONCE",
          vtp_selectorType: "CSS",
          vtp_onScreenRatio: "50",
          vtp_uniqueTriggerId: "6823302_61",
          tag_id: 79,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(function(f,c){function k(a,g){a.prototype[g]=function(){this._q.push([g].concat(Array.prototype.slice.call(arguments,0)));return this}}function l(a){function g(m){a[m]=function(){a._q.push([m].concat(Array.prototype.slice.call(arguments,0)))}}for(var h=0;h\u003Cn.length;h++)g(n[h])}var d=f.amplitude||{_q:[],_iq:{}},b=c.createElement("script");b.type="text/javascript";b.integrity="sha384-cukXwabQy+j/QA1+RqiXSzxhgQg5Rrn3zVszlwH3pWj/bXJxlA8Ge7NhcD6vP2Ik";b.crossOrigin="anonymous";b.async=!0;b.src="https://cdn.amplitude.com/libs/amplitude-7.1.0-min.gz.js";\nb.onload=function(){f.amplitude.runQueuedFunctions||console.log("[Amplitude] Error: could not load SDK")};c=c.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c);b=function(){this._q=[];return this};c="add append clearAll prepend set setOnce unset".split(" ");for(var e=0;e\u003Cc.length;e++)k(b,c[e]);d.Identify=b;b=function(){this._q=[];return this};c=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"];for(e=0;e\u003Cc.length;e++)k(b,c[e]);d.Revenue=b;var n="init logEvent logRevenue setUserId setUserProperties setOptOut setVersionName setDomain setDeviceId enableTracking setGlobalUserProperties identify clearUserProperties setGroup logRevenueV2 regenerateDeviceId groupIdentify onInit logEventWithTimestamp logEventWithGroups setSessionId resetSessionId".split(" ");\nl(d);d.getInstance=function(a){a=(a\u0026\u00260!==a.length?a:"$default_instance").toLowerCase();d._iq.hasOwnProperty(a)||(d._iq[a]={_q:[]},l(d._iq[a]));return d._iq[a]};f.amplitude=d})(window,document);var path=location.pathname+location.search;\namplitude.getInstance().init("a205ed9b06a7baf5a594bdd30293aa80",void 0,{logLevel:"ERROR",includeReferrer:!0,includeUtm:!0,apiEndpoint:"stats.codesandbox.io"},function(){var f=!1;try{f=window.location!==window.parent.location}catch(c){}setTimeout(function(){amplitude.logEvent("pageview",{path:path,isInIframe:f})})});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 11,
        },
        {
          function: "__html",
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Ewindow.dataLayer.push({"page-type":"homepage",event:"pagecategory"});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 13,
        },
        {
          function: "__html",
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Ewindow.dataLayer.push({product:"vanilla",event:"productVisit"});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 16,
        },
        {
          function: "__html",
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Ewindow.dataLayer.push({product:"Angular"});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 17,
        },
        {
          function: "__html",
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Ewindow.dataLayer.push({Navigation:"',
            ["escape", ["macro", 8], 7],
            '"});\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 18,
        },
        {
          function: "__opt",
          metadata: ["map"],
          once_per_load: true,
          vtp_overrideGaSettings: false,
          vtp_optimizeContainerId: "GTM-TLB9J48",
          vtp_gaSettings: ["macro", 4],
          tag_id: 66,
        },
      ],
      predicates: [
        {
          function: "_eq",
          arg0: ["macro", 0],
          arg1: "gtm.js",
        },
        {
          function: "_eq",
          arg0: ["macro", 1],
          arg1: "true",
        },
        {
          function: "_re",
          arg0: ["macro", 0],
          arg1: ".*",
        },
        {
          function: "_eq",
          arg0: ["macro", 0],
          arg1: "gtm.scrollDepth",
        },
        {
          function: "_re",
          arg0: ["macro", 3],
          arg1: "(^$|((^|,)6823302_21($|,)))",
        },
        {
          function: "_eq",
          arg0: ["macro", 0],
          arg1: "gtm.linkClick",
        },
        {
          function: "_re",
          arg0: ["macro", 3],
          arg1: "(^$|((^|,)6823302_48($|,)))",
        },
        {
          function: "_eq",
          arg0: ["macro", 0],
          arg1: "Engagement Timer 20 sec",
        },
        {
          function: "_re",
          arg0: ["macro", 3],
          arg1: "(^$|((^|,)6823302_50($|,)))",
        },
        {
          function: "_eq",
          arg0: ["macro", 0],
          arg1: "productVisit",
        },
        {
          function: "_eq",
          arg0: ["macro", 0],
          arg1: "pagecategory",
        },
        {
          function: "_re",
          arg0: ["macro", 5],
          arg1: ".*",
        },
        {
          function: "_eq",
          arg0: ["macro", 0],
          arg1: "gtm.dom",
        },
        {
          function: "_re",
          arg0: ["macro", 5],
          arg1: ".*/s/.*",
        },
        {
          function: "_eq",
          arg0: ["macro", 5],
          arg1: "https://codesandbox.io/",
        },
        {
          function: "_cn",
          arg0: ["macro", 10],
          arg1: "/s/vanilla",
        },
        {
          function: "_cn",
          arg0: ["macro", 10],
          arg1: "/s/angular",
        },
        {
          function: "_cn",
          arg0: ["macro", 13],
          arg1: "sc-EHOje ktvxJB",
        },
        {
          function: "_re",
          arg0: ["macro", 3],
          arg1: "(^$|((^|,)6823302_54($|,)))",
        },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 1, 3, 21, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 20],
        ],
        [
          ["if", 3, 4],
          ["add", 2],
        ],
        [
          ["if", 5, 6],
          ["add", 4],
        ],
        [
          ["if", 7, 8],
          ["add", 5],
        ],
        [
          ["if", 9],
          ["add", 6],
        ],
        [
          ["if", 10],
          ["add", 7],
        ],
        [
          ["if", 0, 11],
          ["add", 17],
        ],
        [
          ["if", 12],
          ["add", 18],
        ],
        [
          ["if", 0, 13],
          ["add", 0],
        ],
        [
          ["if", 0, 14],
          ["add", 22],
        ],
        [
          ["if", 0, 15],
          ["add", 23],
        ],
        [
          ["if", 0, 16],
          ["add", 24],
        ],
        [
          ["if", 5, 17, 18],
          ["add", 25],
        ],
        [
          ["if", 1, 2],
          ["block", 1, 2, 21],
        ],
      ],
    },
    runtime: [],
  };

  /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
  var aa,
    ca = function (a) {
      var b = 0;
      return function () {
        return b < a.length
          ? {
              done: !1,
              value: a[b++],
            }
          : {
              done: !0,
            };
      };
    },
    ea = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b
        ? b.call(a)
        : {
            next: ca(a),
          };
    },
    fa =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ha;
  if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
  else {
    var ia;
    a: {
      var ja = {
          a: !0,
        },
        ka = {};
      try {
        ka.__proto__ = ja;
        ia = ka.a;
        break a;
      } catch (a) {}
      ia = !1;
    }
    ha = ia
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var la = ha,
    na = function (a, b) {
      a.prototype = fa(b.prototype);
      a.prototype.constructor = a;
      if (la) la(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.vj = b.prototype;
    },
    pa = this || self,
    qa = function (a) {
      return a;
    };
  var ra = function () {},
    sa = function (a) {
      return "function" == typeof a;
    },
    h = function (a) {
      return "string" == typeof a;
    },
    ta = function (a) {
      return "number" == typeof a && !isNaN(a);
    },
    ua = Array.isArray,
    wa = function (a, b) {
      if (Array.prototype.indexOf) {
        var c = a.indexOf(b);
        return "number" == typeof c ? c : -1;
      }
      for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
      return -1;
    },
    xa = function (a, b) {
      if (a && ua(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    ya = function (a, b) {
      if (!ta(a) || !ta(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ba = function (a, b) {
      for (var c = new za(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    Da = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Fa = function (a) {
      return (
        !!a &&
        ("[object Arguments]" == Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Ga = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Ia = function (a) {
      return "false" == String(a).toLowerCase() ? !1 : !!a;
    },
    La = function (a) {
      var b = [];
      if (ua(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ma = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Na = function () {
      return new Date(Date.now());
    },
    Oa = function () {
      return Na().getTime();
    },
    za = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  za.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  za.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Pa = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ra = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Sa = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Ua = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Va = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Wa = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Xa = /^\w{1,9}$/,
    Ya = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      Da(a, function (d, e) {
        Xa.test(d) && e && c.push(d);
      });
      return c.join(b);
    };
  var Za,
    $a = function () {
      if (void 0 === Za) {
        var a = null,
          b = pa.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: qa,
              createScript: qa,
              createScriptURL: qa,
            });
          } catch (c) {
            pa.console && pa.console.error(c.message);
          }
          Za = a;
        } else Za = a;
      }
      return Za;
    };
  var cb = function (a, b) {
    this.o = b === ab ? a : "";
  };
  cb.prototype.toString = function () {
    return this.o + "";
  };
  var ab = {};
  var db = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var eb;
  a: {
    var fb = pa.navigator;
    if (fb) {
      var gb = fb.userAgent;
      if (gb) {
        eb = gb;
        break a;
      }
    }
    eb = "";
  }
  var hb = function (a) {
    return -1 != eb.indexOf(a);
  };
  var ib = {},
    lb = function (a, b, c) {
      this.o = c === ib ? a : "";
    };
  lb.prototype.toString = function () {
    return this.o.toString();
  };
  var mb = function (a) {
      return a instanceof lb && a.constructor === lb
        ? a.o
        : "type_error:SafeHtml";
    },
    nb = function (a) {
      var b = $a(),
        c = b ? b.createHTML(a) : a;
      return new lb(c, null, ib);
    },
    ob = new lb((pa.trustedTypes && pa.trustedTypes.emptyHTML) || "", 0, ib);
  var pb = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    qb = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var rb = (function (a) {
      var b = !1,
        c;
      return function () {
        b || ((c = a()), (b = !0));
        return c;
      };
    })(function () {
      var a = document.createElement("div"),
        b = document.createElement("div");
      b.appendChild(document.createElement("div"));
      a.appendChild(b);
      var c = a.firstChild.firstChild;
      a.innerHTML = mb(ob);
      return !c.parentElement;
    }),
    vb = function (a, b) {
      if (rb()) for (; a.lastChild; ) a.removeChild(a.lastChild);
      a.innerHTML = mb(b);
    };
  var m = window,
    B = document,
    wb = navigator,
    xb = B.currentScript && B.currentScript.src,
    yb = function (a, b) {
      var c = m[a];
      m[a] = void 0 === c ? b : c;
      return m[a];
    },
    zb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in
                {
                  loaded: 1,
                  complete: 1,
                } && ((a.onreadystatechange = null), b());
            }));
    },
    Ab = function (a, b, c) {
      var d = B.createElement("script");
      d.type = "text/javascript";
      d.async = !0;
      var e,
        f = $a(),
        g = f ? f.createScriptURL(a) : a;
      e = new cb(g, ab);
      d.src =
        e instanceof cb && e.constructor === cb
          ? e.o
          : "type_error:TrustedResourceUrl";
      var k,
        l,
        n = ((d.ownerDocument && d.ownerDocument.defaultView) || window)
          .document,
        p =
          null === (l = n.querySelector) || void 0 === l
            ? void 0
            : l.call(n, "script[nonce]");
      (k = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        d.setAttribute("nonce", k);
      zb(d, b);
      c && (d.onerror = c);
      var q = B.getElementsByTagName("script")[0] || B.body || B.head;
      q.parentNode.insertBefore(d, q);
      return d;
    },
    Bb = function () {
      if (xb) {
        var a = xb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Cb = function (a, b) {
      var c = B.createElement("iframe");
      c.height = "0";
      c.width = "0";
      c.style.display = "none";
      c.style.visibility = "hidden";
      var d = (B.body && B.body.lastChild) || B.body || B.head;
      d.parentNode.insertBefore(c, d);
      zb(c, b);
      void 0 !== a && (c.src = a);
      return c;
    },
    Db = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
      return d;
    },
    Eb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Fb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    G = function (a) {
      m.setTimeout(a, 0);
    },
    Gb = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Hb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Kb = function (a) {
      var b = B.createElement("div"),
        c = nb("A<div>" + a + "</div>");
      vb(b, c);
      b = b.lastChild;
      for (var d = []; b.firstChild; ) d.push(b.removeChild(b.firstChild));
      return d;
    },
    Lb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Mb = function (a) {
      (wb.sendBeacon && wb.sendBeacon(a)) || Db(a);
    },
    Nb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Ob = function (a) {
      var b = B.featurePolicy;
      return b && sa(b.features) ? -1 !== b.features().indexOf(a) : !1;
    };
  /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Pb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Qb = function (a) {
      if (null == a) return String(a);
      var b = Pb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Rb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Sb = function (a) {
      if (!a || "object" != Qb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Rb(a, "constructor") &&
          !Rb(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Rb(a, b);
    },
    H = function (a, b) {
      var c = b || ("array" == Qb(a) ? [] : {}),
        d;
      for (d in a)
        if (Rb(a, d)) {
          var e = a[d];
          "array" == Qb(e)
            ? ("array" != Qb(c[d]) && (c[d] = []), (c[d] = H(e, c[d])))
            : Sb(e)
            ? (Sb(c[d]) || (c[d] = {}), (c[d] = H(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var Vb = function (a) {
    if (void 0 === a || ua(a) || Sb(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  var Wb = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Mg: a("consent"),
      Ng: a("consent_always_fire"),
      $e: a("convert_case_to"),
      af: a("convert_false_to"),
      bf: a("convert_null_to"),
      cf: a("convert_true_to"),
      df: a("convert_undefined_to"),
      ej: a("debug_mode_metadata"),
      gj: a("event_data_overrides"),
      lb: a("function"),
      Hh: a("instance_name"),
      Jh: a("live_only"),
      Kh: a("malware_disabled"),
      Lh: a("metadata"),
      ij: a("original_activity_id"),
      jj: a("original_vendor_template_id"),
      Nh: a("once_per_event"),
      Gf: a("once_per_load"),
      lj: a("priority_override"),
      mj: a("respected_consent_types"),
      Kf: a("setup_tags"),
      Mf: a("tag_id"),
      Nf: a("teardown_tags"),
    };
  })();
  var Xb = [],
    Yb = {
      "\x00": "&#0;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "<": "&lt;",
      ">": "&gt;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\x0B": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      "-": "&#45;",
      "/": "&#47;",
      "=": "&#61;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;",
    },
    Zb = function (a) {
      return Yb[a];
    },
    $b = /[\x00\x22\x26\x27\x3c\x3e]/g;
  var dc = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
    ec = {
      "\x00": "\\x00",
      "\b": "\\x08",
      "\t": "\\t",
      "\n": "\\n",
      "\x0B": "\\x0b",
      "\f": "\\f",
      "\r": "\\r",
      '"': "\\x22",
      "&": "\\x26",
      "'": "\\x27",
      "/": "\\/",
      "<": "\\x3c",
      "=": "\\x3d",
      ">": "\\x3e",
      "\\": "\\\\",
      "\u0085": "\\x85",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029",
      $: "\\x24",
      "(": "\\x28",
      ")": "\\x29",
      "*": "\\x2a",
      "+": "\\x2b",
      ",": "\\x2c",
      "-": "\\x2d",
      ".": "\\x2e",
      ":": "\\x3a",
      "?": "\\x3f",
      "[": "\\x5b",
      "]": "\\x5d",
      "^": "\\x5e",
      "{": "\\x7b",
      "|": "\\x7c",
      "}": "\\x7d",
    },
    fc = function (a) {
      return ec[a];
    };
  Xb[7] = function (a) {
    return String(a).replace(dc, fc);
  };
  var pc =
      /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    qc = {
      "\x00": "%00",
      "\u0001": "%01",
      "\u0002": "%02",
      "\u0003": "%03",
      "\u0004": "%04",
      "\u0005": "%05",
      "\u0006": "%06",
      "\u0007": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\x0B": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\u000e": "%0E",
      "\u000f": "%0F",
      "\u0010": "%10",
      "\u0011": "%11",
      "\u0012": "%12",
      "\u0013": "%13",
      "\u0014": "%14",
      "\u0015": "%15",
      "\u0016": "%16",
      "\u0017": "%17",
      "\u0018": "%18",
      "\u0019": "%19",
      "\u001a": "%1A",
      "\u001b": "%1B",
      "\u001c": "%1C",
      "\u001d": "%1D",
      "\u001e": "%1E",
      "\u001f": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "<": "%3C",
      ">": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\u007f": "%7F",
      "\u0085": "%C2%85",
      "\u00a0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uff01": "%EF%BC%81",
      "\uff03": "%EF%BC%83",
      "\uff04": "%EF%BC%84",
      "\uff06": "%EF%BC%86",
      "\uff07": "%EF%BC%87",
      "\uff08": "%EF%BC%88",
      "\uff09": "%EF%BC%89",
      "\uff0a": "%EF%BC%8A",
      "\uff0b": "%EF%BC%8B",
      "\uff0c": "%EF%BC%8C",
      "\uff0f": "%EF%BC%8F",
      "\uff1a": "%EF%BC%9A",
      "\uff1b": "%EF%BC%9B",
      "\uff1d": "%EF%BC%9D",
      "\uff1f": "%EF%BC%9F",
      "\uff20": "%EF%BC%A0",
      "\uff3b": "%EF%BC%BB",
      "\uff3d": "%EF%BC%BD",
    },
    rc = function (a) {
      return qc[a];
    };
  var tc;
  var uc = [],
    vc = [],
    wc = [],
    xc = [],
    yc = [],
    Ec = {},
    Fc,
    Gc,
    Hc,
    Ic = function (a, b) {
      var c = a["function"];
      if (!c) throw Error("Error: No function name given for function call.");
      var d = Ec[c],
        e = {},
        f;
      for (f in a)
        if (a.hasOwnProperty(f))
          if (0 === f.indexOf("vtp_"))
            d && b && b.Yf && b.Yf(a[f]),
              (e[void 0 !== d ? f : f.substr(4)] = a[f]);
          else if (f === Wb.Ng.toString() && a[f]) {
          }
      d && b && b.Xf && (e.vtp_gtmCachedValues = b.Xf);
      return void 0 !== d ? d(e) : tc(c, e, b);
    },
    Kc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Jc(a[e], b, c));
      return d;
    },
    Jc = function (a, b, c) {
      if (ua(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Jc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = uc[f];
            if (!g || b.Ge(g)) return;
            c[f] = !0;
            try {
              var k = Kc(g, b, c);
              k.vtp_gtmEventId = b.id;
              d = Ic(k, b);
              Hc && (d = Hc.bi(d, k));
            } catch (z) {
              b.mg && b.mg(z, Number(f)), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var l = 1; l < a.length; l += 2)
              d[Jc(a[l], b, c)] = Jc(a[l + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var n = !1, p = 1; p < a.length; p++) {
              var q = Jc(a[p], b, c);
              Gc && (n = n || q === Gc.Yc);
              d.push(q);
            }
            return Gc && n ? Gc.ei(d) : d.join("");
          case "escape":
            d = Jc(a[1], b, c);
            if (Gc && ua(a[1]) && "macro" === a[1][0] && Gc.yi(a))
              return Gc.Ni(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Xb[a[t]] && (d = Xb[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!xc[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = {
              dg: a[2],
              index: u,
            });
          case "zb":
            var r = {
              arg0: a[2],
              arg1: a[3],
              ignore_case: a[5],
            };
            r["function"] = a[1];
            var v = Lc(r, b, c),
              x = !!a[4];
            return x || 2 !== v ? x !== (1 === v) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Lc = function (a, b, c) {
      try {
        return Fc(Kc(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var Oc = function (a) {
      function b(t) {
        for (var u = 0; u < t.length; u++) d[t[u]] = !0;
      }
      for (var c = [], d = [], e = Mc(a), f = 0; f < vc.length; f++) {
        var g = vc[f],
          k = Nc(g, e);
        if (k) {
          for (var l = g.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
          b(g.block || []);
        } else null === k && b(g.block || []);
      }
      for (var p = [], q = 0; q < xc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Nc = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var k = b(f[g]);
        if (2 === k) return null;
        if (1 === k) return !1;
      }
      return !0;
    },
    Mc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Lc(wc[c], a));
        return b[c];
      };
    };
  var Pc = {
    bi: function (a, b) {
      b[Wb.$e] &&
        "string" === typeof a &&
        (a = 1 == b[Wb.$e] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Wb.bf) && null === a && (a = b[Wb.bf]);
      b.hasOwnProperty(Wb.df) && void 0 === a && (a = b[Wb.df]);
      b.hasOwnProperty(Wb.cf) && !0 === a && (a = b[Wb.cf]);
      b.hasOwnProperty(Wb.af) && !1 === a && (a = b[Wb.af]);
      return a;
    },
  };
  var M = {
    cc: "_ee",
    cd: "_syn_or_mod",
    oj: "_uei",
    ae: "_eu",
    kj: "_pci",
    Cb: "event_callback",
    Oc: "event_timeout",
    Da: "gtag.config",
    La: "gtag.get",
    xa: "purchase",
    Ab: "refund",
    eb: "begin_checkout",
    xb: "add_to_cart",
    yb: "remove_from_cart",
    Wg: "view_cart",
    ff: "add_to_wishlist",
    Ka: "view_item",
    Sb: "view_promotion",
    Jc: "select_promotion",
    Ed: "select_item",
    zb: "view_item_list",
    ef: "add_payment_info",
    Vg: "add_shipping_info",
    Oa: "value_key",
    Va: "value_callback",
    Ea: "allow_ad_personalization_signals",
    Yb: "restricted_data_processing",
    Ub: "allow_google_signals",
    Ha: "cookie_expires",
    Vb: "cookie_update",
    $b: "session_duration",
    Sc: "session_engaged_time",
    Pa: "user_properties",
    oa: "transport_url",
    R: "ads_data_redaction",
    ya: "user_data",
    Wb: "first_party_collection",
    D: "ad_storage",
    I: "analytics_storage",
    Ye: "region",
    Ze: "wait_for_update",
    Ga: "conversion_linker",
    Fa: "conversion_cookie_prefix",
    fa: "value",
    da: "currency",
    Af: "trip_type",
    X: "items",
    tf: "passengers",
    Hd: "allow_custom_scripts",
    ac: "session_id",
    yf: "quantity",
    kb: "transaction_id",
    ib: "language",
    Mc: "country",
    Kc: "allow_enhanced_conversions",
    Md: "aw_merchant_id",
    Kd: "aw_feed_country",
    Ld: "aw_feed_language",
    Jd: "discount",
    ma: "developer_id",
    Tc: "delivery_postal_code",
    Sd: "estimated_delivery_date",
    Qd: "shipping",
    Xd: "new_customer",
    Nd: "customer_lifetime_value",
    Rd: "enhanced_conversions",
    Tb: "page_view",
    na: "linker",
    O: "domains",
    Fb: "decorate_forms",
    qf: "enhanced_conversions_automatic_settings",
    fh: "auto_detection_enabled",
    rf: "ga_temp_client_id",
  };
  M.Df = [
    M.xa,
    M.Ab,
    M.eb,
    M.xb,
    M.yb,
    M.Wg,
    M.ff,
    M.Ka,
    M.Sb,
    M.Jc,
    M.zb,
    M.Ed,
    M.ef,
    M.Vg,
  ];
  M.Cf = [M.Ea, M.Ub, M.Vb];
  M.Ef = [M.Ha, M.Oc, M.$b, M.Sc];
  var rd = {},
    sd = function (a, b) {
      rd[a] = rd[a] || [];
      rd[a][b] = !0;
    },
    td = function (a) {
      for (var b = [], c = rd[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[e] =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
            b[e] || 0
          );
      return b.join("");
    };
  var ud = function (a) {
    sd("GTM", a);
  };
  var vd = new (function (a, b) {
    this.o = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var xd = function () {
    var a = wd;
    if (a.Ee && a.hasOwnProperty("Ee")) return a.Ee;
    var b = new a();
    return (a.Ee = b);
  };
  var wd = function () {
    var a = {};
    this.o = function () {
      var b = vd.o,
        c = vd.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.s = function () {
      a[vd.o] = !0;
    };
  };
  var yd = [];

  function zd() {
    var a = yb("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: Ad,
        update: Bd,
        addListener: Cd,
        notifyListeners: Md,
        active: !1,
        usedDefault: !1,
      });
    return a.ics;
  }

  function Ad(a, b, c, d, e, f) {
    var g = zd();
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var k = g.entries,
        l = k[a] || {},
        n = l.region,
        p = c && h(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === l.update),
          t = {
            region: p,
            initial: "granted" === b,
            update: l.update,
            quiet: q,
          };
        if ("" !== d || !1 !== l.initial) k[a] = t;
        q &&
          m.setTimeout(function () {
            k[a] === t &&
              t.quiet &&
              ((t.quiet = !1), Nd(a), Md(), sd("TAGGING", 2));
          }, f);
      }
    }
  }

  function Bd(a, b) {
    var c = zd();
    c.active = !0;
    if (void 0 != b) {
      var d = Od(a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = Od(a);
      f.quiet ? ((f.quiet = !1), Nd(a)) : g !== d && Nd(a);
    }
  }

  function Cd(a, b) {
    yd.push({
      te: a,
      mi: b,
    });
  }

  function Nd(a) {
    for (var b = 0; b < yd.length; ++b) {
      var c = yd[b];
      ua(c.te) && -1 !== c.te.indexOf(a) && (c.qg = !0);
    }
  }

  function Md(a) {
    for (var b = 0; b < yd.length; ++b) {
      var c = yd[b];
      if (c.qg) {
        c.qg = !1;
        try {
          c.mi({
            ai: a,
          });
        } catch (d) {}
      }
    }
  }
  var Od = function (a) {
      var b = zd().entries[a] || {};
      return void 0 !== b.update ? b.update : b.initial;
    },
    Pd = function (a) {
      return (zd().entries[a] || {}).initial;
    },
    Qd = function (a) {
      return !(zd().entries[a] || {}).quiet;
    },
    Rd = function () {
      return xd().o() ? zd().active : !1;
    },
    Sd = function () {
      return zd().usedDefault;
    },
    Td = function (a, b) {
      zd().addListener(a, b);
    },
    Ud = function (a) {
      zd().notifyListeners(a);
    },
    Vd = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Qd(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Td(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Wd = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var k = d[g];
          !1 === Od(k) || e[k] || (f.push(k), (e[k] = !0));
        }
        return f;
      }
      var d = h(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Td(d, function (f) {
          var g = c();
          0 < g.length && ((f.te = g), a(f));
        });
    };

  function Xd(a) {
    for (var b = [], c = 0; c < Yd.length; c++) {
      var d = a(Yd[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var Yd = [M.D, M.I],
    Zd = function (a) {
      var b = a[M.Ye];
      b && ud(40);
      var c = a[M.Ze];
      c && ud(41);
      for (
        var d = ua(b) ? b : [b],
          e = {
            Ob: 0,
          };
        e.Ob < d.length;
        e = {
          Ob: e.Ob,
        },
          ++e.Ob
      )
        Da(
          a,
          (function (f) {
            return function (g, k) {
              if (g !== M.Ye && g !== M.Ze) {
                var l = d[f.Ob];
                zd().set(g, k, l, "US", "US-NJ", c);
              }
            };
          })(e)
        );
    },
    $d = 0,
    ae = function (a, b) {
      Da(a, function (e, f) {
        zd().update(e, f);
      });
      Ud(b);
      var c = Oa(),
        d = c - $d;
      $d && 0 <= d && 1e3 > d && ud(66);
      $d = c;
    },
    be = function (a) {
      var b = Od(a);
      return void 0 != b ? b : !0;
    },
    ce = function () {
      return "G1" + Xd(Od);
    },
    de = function () {
      return "G1" + Xd(Pd);
    },
    ee = function (a, b) {
      Wd(a, b);
    },
    fe = function (a, b) {
      Vd(a, b);
    };
  var he = function (a) {
      return ge ? B.querySelectorAll(a) : null;
    },
    ie = function (a, b) {
      if (!ge) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!B.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    je = !1;
  if (B.querySelectorAll)
    try {
      var ke = B.querySelectorAll(":root");
      ke && 1 == ke.length && ke[0] == B.documentElement && (je = !0);
    } catch (a) {}
  var ge = je;
  var le,
    me = !1,
    ne = function (a) {
      if (!me) {
        me = !0;
        le = le || {};
      }
      return le[a];
    };
  var oe = function (a) {
    if (B.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle)
      return !0;
    var c = m.getComputedStyle(a, null);
    if ("hidden" === c.visibility) return !0;
    for (var d = a, e = c; d; ) {
      if ("none" === e.display) return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var k = g.indexOf("opacity(");
        0 <= k &&
          ((g = g.substring(k + 8, g.indexOf(")", k))),
          "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
          (f = Math.min(g, f)));
      }
      if (void 0 !== f && 0 >= f) return !0;
      (d = d.parentElement) && (e = m.getComputedStyle(d, null));
    }
    return !1;
  };
  var pe = function () {
      var a = B.body,
        b = B.documentElement || (a && a.parentElement),
        c,
        d;
      if (B.compatMode && "BackCompat" !== B.compatMode)
        (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
      else {
        var e = function (f, g) {
          return f && g ? Math.min(f, g) : Math.max(f, g);
        };
        ud(7);
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
      }
      return {
        width: d,
        height: c,
      };
    },
    qe = function (a) {
      var b = pe(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        g = e.right - e.left;
      return f && g
        ? (1 -
            Math.min(
              (Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g,
              1
            )) *
            (1 -
              Math.min(
                (Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f,
                1
              ))
        : 0;
    };
  var re = [],
    se = !(!m.IntersectionObserver || !m.IntersectionObserverEntry),
    te = function (a, b, c) {
      for (
        var d = new m.IntersectionObserver(a, {
            threshold: c,
          }),
          e = 0;
        e < b.length;
        e++
      )
        d.observe(b[e]);
      for (var f = 0; f < re.length; f++) if (!re[f]) return (re[f] = d), f;
      return re.push(d) - 1;
    },
    ue = function (a, b, c) {
      function d(k, l) {
        var n = {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            width: 0,
            height: 0,
          },
          p = {
            boundingClientRect: k.getBoundingClientRect(),
            intersectionRatio: l,
            intersectionRect: n,
            isIntersecting: 0 < l,
            rootBounds: n,
            target: k,
            time: Oa(),
          };
        G(function () {
          return a(p);
        });
      }
      for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
      c.sort(function (k, l) {
        return k - l;
      });
      return function () {
        for (var k = 0; k < b.length; k++) {
          var l = qe(b[k]);
          if (l > e[k])
            for (; f[k] < c.length - 1 && l >= c[f[k] + 1]; )
              d(b[k], l), f[k]++;
          else if (l < e[k])
            for (; 0 <= f[k] && l <= c[f[k]]; ) d(b[k], l), f[k]--;
          e[k] = l;
        }
      };
    },
    ve = function (a, b, c) {
      for (var d = 0; d < c.length; d++)
        1 < c[d] ? (c[d] = 1) : 0 > c[d] && (c[d] = 0);
      if (se) {
        var e = !1;
        G(function () {
          e || ue(a, b, c)();
        });
        return te(
          function (f) {
            e = !0;
            for (
              var g = {
                Pb: 0,
              };
              g.Pb < f.length;
              g = {
                Pb: g.Pb,
              },
                g.Pb++
            )
              G(
                (function (k) {
                  return function () {
                    return a(f[k.Pb]);
                  };
                })(g)
              );
          },
          b,
          c
        );
      }
      return m.setInterval(ue(a, b, c), 1e3);
    },
    we = function (a) {
      se
        ? 0 <= a &&
          a < re.length &&
          re[a] &&
          (re[a].disconnect(), (re[a] = void 0))
        : m.clearInterval(a);
    };
  var xe = /:[0-9]+$/,
    ye = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var g = f.slice(1).join("=");
          return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
        }
      }
    },
    Be = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = ze(a.protocol) || ze(m.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : m.location.port) ||
              ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || m.location.hostname)
            .replace(xe, "")
            .toLowerCase());
      return Ae(a, b, c, d, e);
    },
    Ae = function (a, b, c, d, e) {
      var f,
        g = ze(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Ce(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(xe, "").toLowerCase();
          if (c) {
            var k = /^www\d*\./.exec(f);
            k && k[0] && (f = f.substr(k[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || sd("TAGGING", 1);
          f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var l = f.split("/");
          0 <= wa(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
          f = l.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = ye(f, e, void 0));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    ze = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Ce = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    De = function (a) {
      var b = B.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || sd("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(xe, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    Ee = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }

      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 != p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = De(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        k = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === k[0] && (k = k.substring(1));
      g = c(g);
      k = c(k);
      "" !== g && (g = "?" + g);
      "" !== k && (k = "#" + k);
      var l = "" + f + g + k;
      "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
      return l;
    };
  var He = {},
    Ie = !0,
    Je = !1;
  He.Kg = "true";
  var Ke = function (a) {
    if ("false" === He.Kg || !Ie) return !1;
    if (Je) return !0;
    var b = ne("AW-" + a);
    return !!b && !!b.preAutoPii;
  };
  var Le = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
    Me = new RegExp(/@(gmail|googlemail)\./i),
    Ne = new RegExp(/support|noreply/i),
    Oe = "SCRIPT STYLE IMG SVG PATH BR".split(" "),
    Pe = ["BR"],
    Qe = {};

  function Re(a) {
    var b;
    if (a === B.body) b = "body";
    else {
      var c;
      if (a.id) c = "#" + a.id;
      else {
        var d;
        if (a.parentElement) {
          var e;
          a: {
            var f = a.parentElement;
            if (f) {
              for (var g = 0; g < f.childElementCount; g++)
                if (f.children[g] === a) {
                  e = g + 1;
                  break a;
                }
              e = -1;
            } else e = 1;
          }
          d = Re(a.parentElement) + ">:nth-child(" + e + ")";
        } else d = "";
        c = d;
      }
      b = c;
    }
    return b;
  }

  function Se(a, b) {
    if (1 >= a.length) return a;
    var c = a.filter(b);
    return 0 == c.length ? a : c;
  }

  function Te(a) {
    if (0 == a.length) return null;
    var b;
    b = Se(a, function (c) {
      return !Ne.test(c.wa);
    });
    b = Se(b, function (c) {
      return "INPUT" === c.element.tagName.toUpperCase();
    });
    b = Se(b, function (c) {
      return !oe(c.element);
    });
    return b[0];
  }
  var Ue = function (a) {
      a = a || {
        Ce: !0,
        De: !0,
      };
      a.ab = a.ab || {
        email: !0,
        phone: !0,
        Vf: !0,
      };
      var b,
        c = a,
        d = !!c.Ce + "." + !!c.De;
      c && c.nd && c.nd.length && (d += "." + c.nd.join("."));
      c && c.ab && (d += "." + c.ab.email + "." + c.ab.phone + "." + c.ab.Vf);
      b = d;
      var e = Qe[b];
      if (e && 200 > Oa() - e.timestamp) return e.result;
      var f;
      var g = [],
        k = B.body;
      if (k) {
        for (
          var l = k.querySelectorAll("*"), n = 0;
          n < l.length && 1e4 > n;
          n++
        ) {
          var p = l[n];
          if (!(0 <= Oe.indexOf(p.tagName.toUpperCase()))) {
            for (var q = !1, t = 0; t < p.childElementCount && 1e4 > t; t++)
              if (!(0 <= Pe.indexOf(p.children[t].tagName.toUpperCase()))) {
                q = !0;
                break;
              }
            q || g.push(p);
          }
        }
        f = {
          elements: g,
          status: 1e4 < l.length ? "2" : "1",
        };
      } else
        f = {
          elements: g,
          status: "4",
        };
      var u = f,
        r = u.status,
        v;
      if (a.ab && a.ab.email) {
        for (var x = u.elements, z = [], w = 0; w < x.length; w++) {
          var y = x[w],
            A = y.textContent;
          y.value && (A = y.value);
          if (A) {
            var C = A.match(Le);
            if (C) {
              var D = C[0],
                F;
              if (m.location) {
                var E = Ae(m.location, "host", !0);
                F = 0 <= D.toLowerCase().indexOf(E);
              } else F = !1;
              F ||
                z.push({
                  element: y,
                  wa: D,
                });
            }
          }
        }
        var O;
        var J = a && a.nd;
        if (J && 0 !== J.length) {
          for (var K = [], V = 0; V < z.length; V++) {
            for (var L = !0, I = 0; I < J.length; I++) {
              var P = J[I];
              if (P && ie(z[V].element, P)) {
                L = !1;
                break;
              }
            }
            L && K.push(z[V]);
          }
          O = K;
        } else O = z;
        v = Te(O);
        10 < z.length && (r = "3");
      }
      var ba = [];
      if (v) {
        var da = v.element,
          Q = {
            wa: v.wa,
            tagName: da.tagName,
            type: 1,
          };
        a.Ce && (Q.querySelector = Re(da));
        a.De && (Q.isVisible = !oe(da));
        ba.push(Q);
      }
      var U = {
        elements: ba,
        status: r,
      };
      Qe[b] = {
        timestamp: Oa(),
        result: U,
      };
      return U;
    },
    Ve = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.wa.length + ":" + Me.test(a.wa)
      );
    };
  var We = function (a) {
      return /^e\d+$/.test(a) || /^[0-9A-Za-z_-]{43}$/.test(a);
    },
    Xe = function (a) {
      return void 0 === a || null === a ? "" : h(a) ? Ma(String(a)) : "e0";
    },
    Ze = function (a) {
      return a.replace(Ye, "");
    },
    af = function (a) {
      return $e(a.replace(/\s/g, ""));
    },
    $e = function (a) {
      return Ma(a.replace(bf, "").toLowerCase());
    },
    df = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return cf.test(a) ? a : "e0";
    },
    ff = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (ef.test(c)) return c;
      }
      return "e0";
    },
    jf = function (a, b, c) {
      window.Promise || c([], []);
      Promise.all(
        a.map(function (d) {
          return d.value && gf(d.name)
            ? hf(d.value).then(function (e) {
                d.value = e;
              })
            : Promise.resolve();
        })
      )
        .then(function () {
          c(a, b);
        })
        .catch(function () {
          c([], []);
        });
    },
    hf = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (m.crypto && m.crypto.subtle)
        try {
          var b = kf(a);
          return m.crypto.subtle
            .digest("SHA-256", b)
            .then(function (c) {
              var d = Array.from(new Uint8Array(c))
                .map(function (e) {
                  return String.fromCharCode(e);
                })
                .join("");
              return m
                .btoa(d)
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=+$/, "");
            })
            .catch(function () {
              return "e2";
            });
        } catch (c) {
          return Promise.resolve("e2");
        }
      else return Promise.resolve("e1");
    },
    kf = function (a) {
      var b;
      if (m.TextEncoder) b = new m.TextEncoder("utf-8").encode(a);
      else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e
            ? c.push(e)
            : 2048 > e
            ? c.push(192 | (e >> 6), 128 | (e & 63))
            : 55296 > e || 57344 <= e
            ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
            : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
              c.push(
                240 | (e >> 18),
                128 | ((e >> 12) & 63),
                128 | ((e >> 6) & 63),
                128 | (e & 63)
              ));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    bf = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    ef = /^\S+@\S+\.\S+$/,
    cf = /^\+\d{11,15}$/,
    Ye = /[.~]/g,
    lf = {},
    mf =
      ((lf.email = "em"),
      (lf.phone_number = "pn"),
      (lf.first_name = "fn"),
      (lf.last_name = "ln"),
      (lf.street = "sa"),
      (lf.city = "ct"),
      (lf.region = "rg"),
      (lf.country = "co"),
      (lf.postal_code = "pc"),
      (lf.error_code = "ec"),
      lf),
    nf = function (a, b, c) {
      function d(r, v, x) {
        var z = r[v];
        ua(z) || (z = [z]);
        for (var w = 0; w < z.length; ++w) {
          var y = Xe(z[w]);
          "" !== y &&
            g.push({
              name: v,
              value: x(y),
              index: void 0,
            });
        }
      }

      function e(r, v, x, z) {
        var w = Xe(r[v]);
        "" !== w &&
          g.push({
            name: v,
            value: x(w),
            index: z,
          });
      }

      function f(r) {
        return function (v) {
          ud(64);
          return r(v);
        };
      }
      var g = [],
        k = [];
      if ("https:" === m.location.protocol) {
        var l = function (r, v) {
          var x = r[v];
          ua(x) || (x = [x]);
          for (var z = 0; z < x.length; ++z) {
            var w = Xe(x[z]);
            if ("" !== w) return w;
          }
          return null;
        };
        d(a, "email", ff);
        var n = l(a, "email");
        if (n)
          for (var p = 0; p < b.length; p++)
            k.push(b[p].wa.toLowerCase() === n.toLowerCase());
        d(a, "phone_number", df);
        d(a, "first_name", f(af));
        d(a, "last_name", f(af));
        var q = a.home_address || {};
        d(q, "street", f($e));
        d(q, "city", f($e));
        d(q, "postal_code", f(Ze));
        d(q, "region", f($e));
        d(q, "country", f(Ze));
        var t = a.address || {};
        ua(t) || (t = [t]);
        for (var u = 0; u < t.length; u++)
          e(t[u], "first_name", af, u),
            e(t[u], "last_name", af, u),
            e(t[u], "street", $e, u),
            e(t[u], "city", $e, u),
            e(t[u], "postal_code", Ze, u),
            e(t[u], "region", $e, u),
            e(t[u], "country", Ze, u);
        jf(g, k, c);
      } else
        g.push({
          name: "error_code",
          value: "e3",
          index: void 0,
        }),
          c(g, k);
    },
    of = function (a, b) {
      nf(a, [], function (c, d) {
        for (var e = ["tv.1"], f = 0; f < c.length; ++f) {
          var g = c[f].name,
            k = c[f].value,
            l = c[f].index,
            n = mf[g];
          n &&
            k &&
            (!gf(g) || We(k)) &&
            (void 0 !== l && (n += l), e.push(n + "." + k));
        }
        b(encodeURIComponent(e.join("~")), d);
      });
    },
    pf = function (a, b) {
      if (m.Promise)
        try {
          return new Promise(function (c) {
            nf(a, b, function (d, e) {
              for (var f = ["tv.1"], g = 0; g < d.length; ++g) {
                var k = d[g].name,
                  l = d[g].value,
                  n = d[g].index,
                  p = mf[k];
                p &&
                  l &&
                  (!gf(k) || We(l)) &&
                  (void 0 !== n && (p += n), f.push(p + "." + l));
              }
              c({
                xc: encodeURIComponent(f.join("~")),
                kc: e,
              });
            });
          });
        } catch (c) {}
    },
    gf = function (a) {
      return (
        -1 !==
        ["email", "phone_number", "first_name", "last_name", "street"].indexOf(
          a
        )
      );
    };
  var qf = function () {
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.remoteConfig = {};
      this.globalConfig = {};
      this.onSuccess = function () {};
      this.onFailure = function () {};
      this.setContainerTypeLoaded = function () {};
      this.getContainerTypeLoaded = function () {};
      this.eventId = void 0;
      this.isGtmEvent = !1;
    },
    rf = function (a) {
      var b = new qf();
      b.eventModel = a;
      return b;
    },
    sf = function (a, b) {
      a.targetConfig = b;
      return a;
    },
    tf = function (a, b) {
      a.containerConfig = b;
      return a;
    },
    uf = function (a, b) {
      a.remoteConfig = b;
      return a;
    },
    vf = function (a, b) {
      a.globalConfig = b;
      return a;
    },
    wf = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    xf = function (a, b) {
      a.setContainerTypeLoaded = b;
      return a;
    },
    yf = function (a, b) {
      a.getContainerTypeLoaded = b;
      return a;
    },
    zf = function (a, b) {
      a.onFailure = b;
      return a;
    };
  qf.prototype.getWithConfig = function (a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
  };
  var Af = function (a) {
      function b(d) {
        for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1;
      }
      var c = {};
      b(a.eventModel);
      b(a.targetConfig);
      b(a.containerConfig);
      b(a.globalConfig);
      return Object.keys(c);
    },
    Bf = function (a, b, c) {
      function d(g) {
        Sb(g) &&
          Da(g, function (k, l) {
            f = !0;
            e[k] = l;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) ||
        (d(a.globalConfig[b]),
        d(a.remoteConfig[b]),
        d(a.containerConfig[b]),
        d(a.targetConfig[b]));
      (c && 2 !== c) || d(a.eventModel[b]);
      return f ? e : void 0;
    };
  var Cf = {},
    N = null,
    Df = Math.random();
  Cf.M = "GTM-T3L6RFK";
  Cf.bd = "910";
  Cf.Pg =
    "ChEI8JvciQYQ59SVwYKq6M6bARIkAPAkTPCfrb6vjByMzG9ldk/husSqGI5eI7Che9OMOwDp5W6eGgLMWA\x3d\x3d";
  var Ef = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    Ff = {
      __paused: !0,
      __tg: !0,
    },
    Gf;
  for (Gf in Ef) Ef.hasOwnProperty(Gf) && (Ff[Gf] = !0);
  var Hf = "www.googletagmanager.com/gtm.js";
  var If = Hf,
    Jf = Ia(""),
    Kf = null,
    Lf = null,
    Mf = "https://www.googletagmanager.com/a?id=" + Cf.M + "&cv=37",
    Nf = {},
    Of = {},
    Pf = function () {
      var a = N.sequence || 1;
      N.sequence = a + 1;
      return a;
    };
  Cf.Og = "";
  var Qf = "";
  Cf.nj = Qf;
  var Rf = {},
    Sf = new za(),
    Tf = {},
    Uf = {},
    Xf = {
      name: "dataLayer",
      set: function (a, b) {
        H(Wa(a, b), Tf);
        Vf();
      },
      get: function (a) {
        return Wf(a, 2);
      },
      reset: function () {
        Sf = new za();
        Tf = {};
        Vf();
      },
    },
    Wf = function (a, b) {
      return 2 != b ? Sf.get(a) : Yf(a);
    },
    Yf = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = Tf, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== wa(b, d)) return;
      }
      return d;
    },
    Zf = function (a, b) {
      Uf.hasOwnProperty(a) || (Sf.set(a, b), H(Wa(a, b), Tf), Vf());
    },
    Vf = function (a) {
      Da(Uf, function (b, c) {
        Sf.set(b, c);
        H(Wa(b, void 0), Tf);
        H(Wa(b, c), Tf);
        a && delete Uf[b];
      });
    },
    ag = function (a, b, c) {
      Rf[a] = Rf[a] || {};
      Rf[a][b] = $f(b, c);
    },
    $f = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Yf(a) : Sf.get(a);
      "array" === Qb(d) || "object" === Qb(d) ? (c = H(d)) : (c = d);
      return c;
    },
    bg = function (a, b) {
      if (Rf[a]) return Rf[a][b];
    },
    cg = function (a, b) {
      Rf[a] && delete Rf[a][b];
    };
  var dg = function (a, b, c) {
      if (c) {
        var d = c.selector_type,
          e = String(c.value),
          f;
        if ("js_variable" === d) {
          e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
          for (var g = e.split(","), k = 0; k < g.length; k++) {
            var l = g[k].trim();
            if (l) {
              if (0 === l.indexOf("dataLayer.")) f = Wf(l.substring(10));
              else {
                var n = l.split(".");
                f = m[n.shift()];
                for (var p = 0; p < n.length; p++) f = f && f[n[p]];
              }
              if (void 0 !== f) break;
            }
          }
        } else if ("css_selector" === d && ge) {
          var q = he(e);
          q && 0 < q.length && (f = Hb(q[0]) || Ma(q[0].value));
        }
        f && (a[b] = f);
      }
    },
    eg = function (a) {
      if (a) {
        var b = {};
        dg(b, "email", a.email);
        dg(b, "phone_number", a.phone);
        b.address = [];
        for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
          var e = {};
          dg(e, "first_name", c[d].first_name);
          dg(e, "last_name", c[d].last_name);
          dg(e, "street", c[d].street);
          dg(e, "city", c[d].city);
          dg(e, "region", c[d].region);
          dg(e, "country", c[d].country);
          dg(e, "postal_code", c[d].postal_code);
          b.address.push(e);
        }
        return b;
      }
    },
    fg = function (a) {
      if (a)
        switch (a.mode) {
          case "selectors":
            return eg(a.selectors);
          case "auto_detect":
            var b;
            var c = a.auto_detect;
            if (c) {
              var d = Ue({
                  Ce: !1,
                  De: !1,
                  nd: c.exclude_element_selectors,
                  ab: {
                    email: !!c.email,
                    phone: !!c.phone,
                    Vf: !!c.address,
                  },
                }).elements,
                e = {};
              if (0 < d.length)
                for (var f = 0; f < d.length; f++) {
                  var g = d[f];
                  if (1 === g.type) {
                    e.email = g.wa;
                    break;
                  }
                }
              b = e;
            } else b = void 0;
            return b;
        }
    },
    gg = function (a) {
      switch (a.enhanced_conversions_mode) {
        case "manual":
          var b = a.enhanced_conversions_manual_var;
          return void 0 !== b ? b : m.enhanced_conversion_data;
        case "automatic":
          return eg(a[M.qf]);
      }
    };
  var hg = {},
    ig = function (a, b) {
      if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a))
        return m._gtmexpgrp[a];
      void 0 === hg[a] && (hg[a] = Math.floor(Math.random() * b));
      return hg[a];
    };

  function jg(a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        k = g[0].replace(/^\s*|\s*$/g, "");
      if (k && k == a) {
        var l = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        l && c && (l = decodeURIComponent(l));
        d.push(l);
      }
    }
    return d;
  }

  function kg(a) {
    return "null" !== a.origin;
  }
  var ng = function (a, b, c, d) {
      return lg(d) ? jg(a, String(b || mg()), c) : [];
    },
    ug = function (a, b, c, d, e) {
      if (lg(e)) {
        var f = og(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = tg(
            f,
            function (g) {
              return g.kd;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = tg(
            f,
            function (g) {
              return g.yc;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };

  function vg(a, b, c, d) {
    var e = mg(),
      f = window;
    kg(f) && (f.document.cookie = a);
    var g = mg();
    return e != g || (void 0 != c && 0 <= ng(b, g, !1, d).indexOf(c));
  }
  var zg = function (a, b, c) {
      function d(u, r, v) {
        if (null == v) return delete g[r], u;
        g[r] = v;
        return u + "; " + r + "=" + v;
      }

      function e(u, r) {
        if (null == r) return delete g[r], u;
        g[r] = !0;
        return u + "; " + r;
      }
      if (!lg(c.Ta)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = wg(b)),
          (f = a + "=" + b));
      var g = {};
      f = d(f, "path", c.path);
      var k;
      c.expires instanceof Date
        ? (k = c.expires.toUTCString())
        : null != c.expires && (k = "" + c.expires);
      f = d(f, "expires", k);
      f = d(f, "max-age", c.sj);
      f = d(f, "samesite", c.tj);
      c.uj && (f = e(f, "secure"));
      var l = c.domain;
      if ("auto" === l) {
        for (var n = xg(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            t = d(f, "domain", q);
          t = e(t, c.flags);
          if (!yg(q, c.path) && vg(t, a, b, c.Ta)) return 0;
        }
        return 1;
      }
      l && "none" !== l && (f = d(f, "domain", l));
      f = e(f, c.flags);
      return yg(l, c.path) ? 1 : vg(f, a, b, c.Ta) ? 0 : 1;
    },
    Ag = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return zg(a, b, c);
    };

  function tg(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        l = b(k);
      l === c
        ? d.push(k)
        : void 0 === f || l < f
        ? ((e = [k]), (f = l))
        : l === f && e.push(k);
    }
    return 0 < d.length ? d : e;
  }

  function og(a, b, c) {
    for (var d = [], e = ng(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || -1 !== b.indexOf(k)) {
        var l = g.shift();
        l &&
          ((l = l.split("-")),
          d.push({
            id: g.join("."),
            kd: 1 * l[0] || 1,
            yc: 1 * l[1] || 1,
          }));
      }
    }
    return d;
  }
  var wg = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Bg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Cg = /(^|\.)doubleclick\.net$/i,
    yg = function (a, b) {
      return (
        Cg.test(window.document.location.hostname) || ("/" === b && Bg.test(a))
      );
    },
    mg = function () {
      return kg(window) ? window.document.cookie : "";
    },
    xg = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Cg.test(e) || Bg.test(e) || a.push("none");
      return a;
    },
    lg = function (a) {
      if (!xd().o() || !a || !Rd()) return !0;
      if (!Qd(a)) return !1;
      var b = Od(a);
      return null == b ? !0 : !!b;
    };
  var Dg = function () {
      return [
        Math.round(2147483647 * Math.random()),
        Math.round(Oa() / 1e3),
      ].join(".");
    },
    Gg = function (a, b, c, d, e) {
      var f = Eg(b);
      return ug(a, f, Fg(c), d, e);
    },
    Hg = function (a, b, c, d) {
      var e = "" + Eg(c),
        f = Fg(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Eg = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Fg = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };

  function Ig(a, b, c) {
    var d,
      e = Number(null != a.pb ? a.pb : void 0);
    0 !== e && (d = new Date((b || Oa()) + 1e3 * (e || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: d,
    };
  }
  var Jg = ["1"],
    Kg = {},
    Og = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Lg(a.prefix);
      if (!Kg[c] && !Mg(c, a.path, a.domain) && b) {
        var d = Lg(a.prefix),
          e = Dg();
        if (0 === Ng(d, e, a)) {
          var f = yb("google_tag_data", {});
          f._gcl_au ? sd("GTM", 57) : (f._gcl_au = e);
        }
        Mg(c, a.path, a.domain);
      }
    };

  function Ng(a, b, c) {
    var d = Hg(b, "1", c.domain, c.path),
      e = Ig(c);
    e.Ta = "ad_storage";
    return Ag(a, d, e);
  }

  function Mg(a, b, c) {
    var d = Gg(a, b, c, Jg, "ad_storage");
    d && (Kg[a] = d);
    return d;
  }

  function Lg(a) {
    return (a || "_gcl") + "_au";
  }
  var Pg = function (a) {
    for (
      var b = [],
        c = B.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Ue: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  };

  function Qg(a, b) {
    var c = Pg(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Ue] || (d[c[e].Ue] = []);
        var g = {
          version: f[0],
          timestamp: 1e3 * Number(f[1]),
          ra: f[2],
        };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Ue].push(g);
      }
    }
    return d;
  }

  function Rg() {
    for (var a = Sg, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }

  function Tg() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Sg, Ug;

  function Vg(a) {
    function b(l) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Ug[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return l;
    }
    Sg = Sg || Tg();
    Ug = Ug || Rg();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (64 === k && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != k && (c += String.fromCharCode(((g << 6) & 192) | k)));
    }
  }
  var Wg;
  var $g = function () {
      var a = Xg,
        b = Yg,
        c = Zg(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Eb(B, "mousedown", d);
        Eb(B, "keyup", d);
        Eb(B, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    ah = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      Zg().decorators.push(f);
    },
    bh = function (a, b, c) {
      for (var d = Zg().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          k;
        if ((k = !c || g.forms))
          a: {
            var l = g.domains,
              n = a,
              p = !!g.sameHost;
            if (l && (p || n !== B.location.hostname))
              for (var q = 0; q < l.length; q++)
                if (l[q] instanceof RegExp) {
                  if (l[q].test(n)) {
                    k = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(l[q]) ||
                  (p && 0 <= l[q].indexOf(n))
                ) {
                  k = !0;
                  break a;
                }
            k = !1;
          }
        if (k) {
          var t = g.placement;
          void 0 == t && (t = g.fragment ? 2 : 1);
          t === b && Sa(e, g.callback());
        }
      }
      return e;
    },
    Zg = function () {
      var a = yb("google_tag_data", {}),
        b = a.gl;
      (b && b.decorators) ||
        ((b = {
          decorators: [],
        }),
        (a.gl = b));
      return b;
    };
  var ch = /(.*?)\*(.*?)\*(.*)/,
    dh = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    eh = /^(?:www\.|m\.|amp\.)+/,
    fh = /([^?#]+)(\?[^#]*)?(#.*)?/;

  function gh(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var ih = function (a) {
      var b = [],
        c;
      for (c in a)
        if (a.hasOwnProperty(c)) {
          var d = a[c];
          if (
            void 0 !== d &&
            d === d &&
            null !== d &&
            "[object Object]" !== d.toString()
          ) {
            b.push(c);
            var e = b,
              f = e.push,
              g,
              k = String(d);
            Sg = Sg || Tg();
            Ug = Ug || Rg();
            for (var l = [], n = 0; n < k.length; n += 3) {
              var p = n + 1 < k.length,
                q = n + 2 < k.length,
                t = k.charCodeAt(n),
                u = p ? k.charCodeAt(n + 1) : 0,
                r = q ? k.charCodeAt(n + 2) : 0,
                v = t >> 2,
                x = ((t & 3) << 4) | (u >> 4),
                z = ((u & 15) << 2) | (r >> 6),
                w = r & 63;
              q || ((w = 64), p || (z = 64));
              l.push(Sg[v], Sg[x], Sg[z], Sg[w]);
            }
            g = l.join("");
            f.call(e, g);
          }
        }
      var y = b.join("*");
      return ["1", hh(y), y].join("*");
    },
    hh = function (a, b) {
      var c = [
          window.navigator.userAgent,
          new Date().getTimezoneOffset(),
          window.navigator.userLanguage || window.navigator.language,
          Math.floor(new Date().getTime() / 60 / 1e3) - (void 0 === b ? 0 : b),
          a,
        ].join("*"),
        d;
      if (!(d = Wg)) {
        for (var e = Array(256), f = 0; 256 > f; f++) {
          for (var g = f, k = 0; 8 > k; k++)
            g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
          e[f] = g;
        }
        d = e;
      }
      Wg = d;
      for (var l = 4294967295, n = 0; n < c.length; n++)
        l = (l >>> 8) ^ Wg[(l ^ c.charCodeAt(n)) & 255];
      return ((l ^ -1) >>> 0).toString(36);
    },
    kh = function () {
      return function (a) {
        var b = De(m.location.href),
          c = b.search.replace("?", ""),
          d = ye(c, "_gl", !0) || "";
        a.query = jh(d) || {};
        var e = Be(b, "fragment").match(gh("_gl"));
        a.fragment = jh((e && e[3]) || "") || {};
      };
    },
    lh = function (a) {
      var b = kh(),
        c = Zg();
      c.data ||
        ((c.data = {
          query: {},
          fragment: {},
        }),
        b(c.data));
      var d = {},
        e = c.data;
      e && (Sa(d, e.query), a && Sa(d, e.fragment));
      return d;
    },
    jh = function (a) {
      var b;
      b = void 0 === b ? 3 : b;
      try {
        if (a) {
          var c;
          a: {
            for (var d = a, e = 0; 3 > e; ++e) {
              var f = ch.exec(d);
              if (f) {
                c = f;
                break a;
              }
              d = decodeURIComponent(d);
            }
            c = void 0;
          }
          var g = c;
          if (g && "1" === g[1]) {
            var k = g[3],
              l;
            a: {
              for (var n = g[2], p = 0; p < b; ++p)
                if (n === hh(k, p)) {
                  l = !0;
                  break a;
                }
              l = !1;
            }
            if (l) {
              for (
                var q = {}, t = k ? k.split("*") : [], u = 0;
                u < t.length;
                u += 2
              )
                q[t[u]] = Vg(t[u + 1]);
              return q;
            }
          }
        }
      } catch (r) {}
    };

  function mh(a, b, c, d) {
    function e(p) {
      var q = p,
        t = gh(a).exec(q),
        u = q;
      if (t) {
        var r = t[2],
          v = t[4];
        u = t[1];
        v && (u = u + r + v);
      }
      p = u;
      var x = p.charAt(p.length - 1);
      p && "&" !== x && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = fh.exec(c);
    if (!f) return "";
    var g = f[1],
      k = f[2] || "",
      l = f[3] || "",
      n = a + "=" + b;
    d ? (l = "#" + e(l.substring(1))) : (k = "?" + e(k.substring(1)));
    return "" + g + k + l;
  }

  function nh(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = bh(b, 1, c),
      e = bh(b, 2, c),
      f = bh(b, 3, c);
    if (Ua(d)) {
      var g = ih(d);
      c ? oh("_gl", g, a) : ph("_gl", g, a, !1);
    }
    if (!c && Ua(e)) {
      var k = ih(e);
      ph("_gl", k, a, !0);
    }
    for (var l in f)
      if (f.hasOwnProperty(l))
        a: {
          var n = l,
            p = f[l],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              ph(n, p, q, void 0);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              oh(n, p, q);
              break a;
            }
          }
          "string" == typeof q && mh(n, p, q, void 0);
        }
  }

  function ph(a, b, c, d) {
    if (c.href) {
      var e = mh(a, b, c.href, void 0 === d ? !1 : d);
      db.test(e) && (c.href = e);
    }
  }

  function oh(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var k = e[g];
          if (k.name === a) {
            k.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var l = B.createElement("input");
          l.setAttribute("type", "hidden");
          l.setAttribute("name", a);
          l.setAttribute("value", b);
          c.appendChild(l);
        }
      } else if ("post" === d) {
        var n = mh(a, b, c.action);
        db.test(n) && (c.action = n);
      }
    }
  }
  var Xg = function (a) {
      try {
        var b;
        a: {
          for (var c = a, d = 100; c && 0 < d; ) {
            if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
              b = c;
              break a;
            }
            c = c.parentNode;
            d--;
          }
          b = null;
        }
        var e = b;
        if (e) {
          var f = e.protocol;
          ("http:" !== f && "https:" !== f) || nh(e, e.hostname);
        }
      } catch (g) {}
    },
    Yg = function (a) {
      try {
        if (a.action) {
          var b = Be(De(a.action), "host");
          nh(a, b);
        }
      } catch (c) {}
    },
    qh = function (a, b, c, d) {
      $g();
      ah(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    rh = function (a, b) {
      $g();
      ah(a, [Ae(m.location, "host", !0)], b, !0, !0);
    },
    sh = function () {
      var a = B.location.hostname,
        b = dh.exec(B.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var k = a.replace(eh, ""),
        l = e.replace(eh, ""),
        n;
      if (!(n = k === l)) {
        var p = "." + l;
        n = k.substring(k.length - p.length, k.length) === p;
      }
      return n;
    },
    th = function (a, b) {
      return !1 === a ? !1 : a || b || sh();
    };
  var uh = {};
  var vh = /^\w+$/,
    wh = /^[\w-]+$/,
    xh = {
      aw: "_aw",
      dc: "_dc",
      gf: "_gf",
      ha: "_ha",
      gp: "_gp",
      gb: "_gb",
    },
    yh = function () {
      if (!xd().o() || !Rd()) return !0;
      var a = Od("ad_storage");
      return null == a ? !0 : !!a;
    },
    zh = function (a, b) {
      Qd("ad_storage")
        ? yh()
          ? a()
          : Wd(a, "ad_storage")
        : b
        ? sd("TAGGING", 3)
        : Vd(
            function () {
              zh(a, !0);
            },
            ["ad_storage"]
          );
    },
    Bh = function (a) {
      return Ah(a).map(function (b) {
        return b.ra;
      });
    },
    Ah = function (a) {
      var b = [];
      if (!kg(m) || !B.cookie) return b;
      var c = ng(a, B.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (
        var d = {}, e = 0;
        e < c.length;
        d = {
          Fc: d.Fc,
        },
          e++
      ) {
        var f = Ch(c[e]);
        if (null != f) {
          var g = f,
            k = g.version;
          d.Fc = g.ra;
          var l = g.timestamp,
            n = g.labels,
            p = xa(
              b,
              (function (q) {
                return function (t) {
                  return t.ra === q.Fc;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, l)),
              (p.labels = Dh(p.labels, n || [])))
            : b.push({
                version: k,
                ra: d.Fc,
                timestamp: l,
                labels: n,
              });
        }
      }
      b.sort(function (q, t) {
        return t.timestamp - q.timestamp;
      });
      return Eh(b);
    };

  function Dh(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }

  function Fh(a) {
    return a && "string" == typeof a && a.match(vh) ? a : "_gcl";
  }
  var Hh = function () {
      var a = De(m.location.href),
        b = Be(a, "query", !1, void 0, "gclid"),
        c = Be(a, "query", !1, void 0, "gclsrc"),
        d = Be(a, "query", !1, void 0, "wbraid"),
        e = Be(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || ye(f, "gclid", void 0);
        c = c || ye(f, "gclsrc", void 0);
        d = d || ye(f, "wbraid", void 0);
      }
      return Gh(b, c, e, d);
    },
    Gh = function (a, b, c, d) {
      var e = {},
        f = function (g, k) {
          e[k] || (e[k] = []);
          e[k].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && wh.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(wh))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    Jh = function (a) {
      var b = Hh();
      zh(function () {
        Ih(b, !1, a);
      });
    };

  function Ih(a, b, c, d, e) {
    function f(x, z) {
      var w = Kh(x, g);
      w && (Ag(w, z, k), (l = !0));
    }
    c = c || {};
    e = e || [];
    var g = Fh(c.prefix);
    d = d || Oa();
    var k = Ig(c, d, !0);
    k.Ta = "ad_storage";
    var l = !1,
      n = Math.round(d / 1e3),
      p = function (x) {
        var z = ["GCL", n, x];
        0 < e.length && z.push(e.join("."));
        return z.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (
      (void 0 == uh.enable_gbraid_cookie_write
        ? 0
        : uh.enable_gbraid_cookie_write) &&
      !l &&
      a.gb
    ) {
      var q = a.gb[0],
        t = Kh("gb", g),
        u = !1;
      if (!b)
        for (var r = Ah(t), v = 0; v < r.length; v++)
          r[v].ra === q && r[v].labels && 0 < r[v].labels.length && (u = !0);
      u || f("gb", p(q));
    }
  }
  var Mh = function (a, b) {
      var c = lh(!0);
      zh(function () {
        for (var d = Fh(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== xh[f]) {
            var g = Kh(f, d),
              k = c[g];
            if (k) {
              var l = Math.min(Lh(k), Oa()),
                n;
              b: {
                var p = l;
                if (kg(m))
                  for (
                    var q = ng(g, B.cookie, void 0, "ad_storage"), t = 0;
                    t < q.length;
                    ++t
                  )
                    if (Lh(q[t]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var u = Ig(b, l, !0);
                u.Ta = "ad_storage";
                Ag(g, k, u);
              }
            }
          }
        }
        Ih(Gh(c.gclid, c.gclsrc), !1, b);
      });
    },
    Kh = function (a, b) {
      var c = xh[a];
      if (void 0 !== c) return b + c;
    },
    Lh = function (a) {
      return 0 !== Nh(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };

  function Ch(a) {
    var b = Nh(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          ra: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }

  function Nh(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !wh.test(a[2])
      ? []
      : a;
  }
  var Oh = function (a, b, c, d, e) {
      if (ua(b) && kg(m)) {
        var f = Fh(e),
          g = function () {
            for (var k = {}, l = 0; l < a.length; ++l) {
              var n = Kh(a[l], f);
              if (n) {
                var p = ng(n, B.cookie, void 0, "ad_storage");
                p.length && (k[n] = p.sort()[p.length - 1]);
              }
            }
            return k;
          };
        zh(function () {
          qh(g, b, c, d);
        });
      }
    },
    Eh = function (a) {
      return a.filter(function (b) {
        return wh.test(b.ra);
      });
    },
    Ph = function (a, b) {
      if (kg(m)) {
        for (var c = Fh(b.prefix), d = {}, e = 0; e < a.length; e++)
          xh[a[e]] && (d[a[e]] = xh[a[e]]);
        zh(function () {
          Da(d, function (f, g) {
            var k = ng(c + g, B.cookie, void 0, "ad_storage");
            k.sort(function (u, r) {
              return Lh(r) - Lh(u);
            });
            if (k.length) {
              var l = k[0],
                n = Lh(l),
                p = 0 !== Nh(l.split(".")).length ? l.split(".").slice(3) : [],
                q = {},
                t;
              t = 0 !== Nh(l.split(".")).length ? l.split(".")[2] : void 0;
              q[f] = [t];
              Ih(q, !0, b, n, p);
            }
          });
        });
      }
    };

  function Qh(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Rh = function (a) {
    function b(e, f, g) {
      g && (e[f] = g);
    }
    if (Rd()) {
      var c = Hh();
      if (Qh(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.gbraid);
        rh(function () {
          return d;
        }, 3);
        rh(function () {
          var e = {};
          return (e._up = "1"), e;
        }, 1);
      }
    }
  };

  function Sh(a, b) {
    var c = Fh(b),
      d = Kh(a, c);
    if (!d) return 0;
    for (var e = Ah(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }

  function Th(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Uh = /^\d+\.fls\.doubleclick\.net$/;

  function Vh(a, b) {
    Qd(M.D)
      ? be(M.D)
        ? a()
        : Wd(a, M.D)
      : b
      ? ud(42)
      : fe(
          function () {
            Vh(a, !0);
          },
          [M.D]
        );
  }

  function Wh(a) {
    var b = De(m.location.href),
      c = Be(b, "host", !1);
    if (c && c.match(Uh)) {
      var d = Be(b, "path").split(a + "=");
      if (1 < d.length) return d[1].split(";")[0].split("?")[0];
    }
  }

  function Xh(a, b, c) {
    if ("aw" === a || "dc" === a || "gb" === a) {
      var d = Wh("gcl" + a);
      if (d) return d.split(".");
    }
    var e = Fh(b);
    if ("_gcl" == e) {
      c = void 0 === c ? !0 : c;
      var f = !be(M.D) && c,
        g;
      g = Hh()[a] || [];
      if (0 < g.length) return f ? ["0"] : g;
    }
    var k = Kh(a, e);
    return k ? Bh(k) : [];
  }
  var Yh = function (a, b) {
      return Xh("aw", a, b);
    },
    Zh = function (a, b) {
      return Xh("dc", a, b);
    };

  function $h(a) {
    var b = [];
    Da(a, function (c, d) {
      d = Eh(d);
      for (var e = [], f = 0; f < d.length; f++) e.push(d[f].ra);
      e.length && b.push(c + ":" + e.join(","));
    });
    return b.join(";");
  }
  var ai = function (a) {
      var b = Wh("gac");
      return b
        ? !be(M.D) && a
          ? "0"
          : decodeURIComponent(b)
        : $h(yh() ? Qg() : {});
    },
    bi = function (a) {
      var b = Wh("gacgb");
      return b
        ? !be(M.D) && a
          ? "0"
          : decodeURIComponent(b)
        : $h(yh() ? Qg("_gac_gb", !0) : {});
    },
    ci = function (a, b) {
      var c = Hh(),
        d = [],
        e = c.gclid,
        f = c.dclid,
        g = c.gclsrc || "aw";
      !e ||
        ("aw.ds" !== g && "aw" !== g && "ds" !== g) ||
        d.push({
          ra: e,
          xe: g,
        });
      f &&
        d.push({
          ra: f,
          xe: "ds",
        });
      Vh(function () {
        Og(b);
        var k = Kg[Lg(b.prefix)],
          l = !1;
        if (k && 0 < d.length)
          for (
            var n = (N.joined_auid = N.joined_auid || {}), p = 0;
            p < d.length;
            p++
          ) {
            var q = d[p],
              t = q.ra,
              u = q.xe,
              r = (b.prefix || "_gcl") + "." + u + "." + t;
            if (!n[r]) {
              var v = "https://adservice.google.com/pagead/regclk";
              v =
                "gb" === u
                  ? v + "?gbraid=" + t + "&auid=" + k
                  : v + "?gclid=" + t + "&auid=" + k + "&gclsrc=" + u;
              Mb(v);
              l = n[r] = !0;
            }
          }
        null == a && (a = l);
        var x = !0;
        x = !1;
        if (x && a && k) {
          var z = Lg(b.prefix),
            w = Kg[z];
          w && Ng(z, w, b);
        }
      });
    },
    di = function (a) {
      var b;
      if (Wh("gclaw") || Wh("gac") || 0 < (Hh().aw || []).length) b = !1;
      else {
        var c;
        if (0 < (Hh().gb || []).length) c = !0;
        else {
          var d = Math.max(Sh("aw", a), Th(yh() ? Qg() : {}));
          c = Math.max(Sh("gb", a), Th(yh() ? Qg("_gac_gb", !0) : {})) > d;
        }
        b = c;
      }
      return b;
    };

  function ei(a) {
    var b = (wb && wb.userAgent) || "";
    if (
      0 > b.indexOf("Safari") ||
      /Chrome|Coast|Opera|Edg|Silk|Android/.test(b)
    )
      return !1;
    var c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || "";
    if ("" === c) return !1;
    for (var d = a.split("."), e = c.split("."), f = 0; f < e.length; f++) {
      if (void 0 === d[f]) return !0;
      if (e[f] != d[f]) return Number(e[f]) > Number(d[f]);
    }
    return e.length >= d.length;
  }
  var fi = /[A-Z]+/,
    gi = /\s/,
    hi = function (a) {
      if (h(a) && ((a = Ma(a)), !gi.test(a))) {
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (fi.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e]) return;
            return {
              id: a,
              prefix: c,
              containerId: c + "-" + d[0],
              N: d,
            };
          }
        }
      }
    },
    ji = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = hi(a[c]);
        d && (b[d.id] = d);
      }
      ii(b);
      var e = [];
      Da(b, function (f, g) {
        e.push(g);
      });
      return e;
    };

  function ii(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.N[1] && b.push(d.containerId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var ki = function () {
    var a = !1;
    return a;
  };
  var mi = function (a, b, c, d) {
      return (2 === li() || d || "http:" != m.location.protocol ? a : b) + c;
    },
    li = function () {
      var a = Bb(),
        b;
      if (1 === a)
        a: {
          var c = If;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              g = B.getElementsByTagName("script"),
              k = 0;
            k < g.length && 100 > k;
            k++
          ) {
            var l = g[k].src;
            if (l) {
              l = l.toLowerCase();
              if (0 === l.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === l.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var yi = function (a, b) {
    var c = a ? gg(a) : m.enhanced_conversion_data,
      d = (a || {}).enhanced_conversions_mode;
    if (m.Promise)
      try {
        return c
          ? pf(c, b).then(function (e) {
              e.qe = d;
              return e;
            })
          : Promise.resolve({
              xc: "",
              kc: [],
              qe: d,
            });
      } catch (e) {}
  };

  function zi(a) {
    if (be(M.D)) return a;
    a = a.replace(/&url=([^&#]+)/, function (b, c) {
      var d = Ee(decodeURIComponent(c));
      return "&url=" + encodeURIComponent(d);
    });
    a = a.replace(/&ref=([^&#]+)/, function (b, c) {
      var d = Ee(decodeURIComponent(c));
      return "&ref=" + encodeURIComponent(d);
    });
    return a;
  }

  function Ai() {
    if (Jf || (!0 !== m._gtmdgs && !ei("11"))) return -1;
    var a = Ga("1");
    return ig(1, 100) < a ? ig(2, 2) : -1;
  }

  function Bi(a) {
    var b;
    if (!a || !a.length) return;
    for (var c = [], d = 0; d < a.length; ++d) {
      var e = a[d];
      e && e.estimated_delivery_date
        ? c.push("" + e.estimated_delivery_date)
        : c.push("");
    }
    b = c.join(",");
    return b;
  }

  function Ci() {
    var a = !1;
    return a;
  }
  var Di = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Ei = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Fi = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Gi =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  var Hi = function () {
      var a = !1;
      return a;
    },
    Ji = function (a) {
      var b = Wf("gtm.allowlist") || Wf("gtm.whitelist");
      b && ud(9);
      Hi() && (b = "google gtagfl lcl zone oid op".split(" "));
      var c = b && Va(La(b), Ei),
        d = Wf("gtm.blocklist") || Wf("gtm.blacklist");
      d || ((d = Wf("tagTypeBlacklist")) && ud(3));
      d ? ud(8) : (d = []);
      Ii() &&
        ((d = La(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= wa(La(d), "google") && ud(2);
      var e = d && Va(La(d), Fi),
        f = {};
      return function (g) {
        var k = g && g[Wb.lb];
        if (!k || "string" != typeof k) return !0;
        k = k.replace(/^_*/, "");
        if (void 0 !== f[k]) return f[k];
        var l = Of[k] || [],
          n = a(k, l);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > wa(c, k))
                if (l && 0 < l.length)
                  for (var q = 0; q < l.length; q++) {
                    if (0 > wa(c, l[q])) {
                      ud(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var t = !1;
        if (d) {
          var u = 0 <= wa(e, k);
          if (u) t = u;
          else {
            var r = Ba(e, l || []);
            r && ud(10);
            t = r;
          }
        }
        var v = !n || t;
        v ||
          !(0 <= wa(l, "sandboxedScripts")) ||
          (c && -1 !== wa(c, "sandboxedScripts")) ||
          (v = Ba(e, Gi));
        return (f[k] = v);
      };
    },
    Ii = function () {
      return Di.test(m.location && m.location.hostname);
    };
  var Ki = !1,
    Li = 0,
    Mi = [];

  function Ni(a) {
    if (!Ki) {
      var b = B.createEventObject,
        c = "complete" == B.readyState,
        d = "interactive" == B.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        Ki = !0;
        for (var e = 0; e < Mi.length; e++) G(Mi[e]);
      }
      Mi.push = function () {
        for (var f = 0; f < arguments.length; f++) G(arguments[f]);
        return 0;
      };
    }
  }

  function Oi() {
    if (!Ki && 140 > Li) {
      Li++;
      try {
        B.documentElement.doScroll("left"), Ni();
      } catch (a) {
        m.setTimeout(Oi, 50);
      }
    }
  }
  var Pi = function (a) {
    Ki ? a() : Mi.push(a);
  };
  var Ri = function (a, b) {
      this.o = !1;
      this.F = [];
      this.P = {
        tags: [],
      };
      this.ba = !1;
      this.s = this.C = 0;
      Qi(this, a, b);
    },
    Si = function (a, b, c, d) {
      if (Ff.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Sb(d) && (e = H(d, e));
      e.id = c;
      e.status = "timeout";
      return a.P.tags.push(e) - 1;
    },
    Ti = function (a, b, c, d) {
      var e = a.P.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Ui = function (a) {
      if (!a.o) {
        for (var b = a.F, c = 0; c < b.length; c++) b[c]();
        a.o = !0;
        a.F.length = 0;
      }
    },
    Qi = function (a, b, c) {
      sa(b) && Vi(a, b);
      c &&
        m.setTimeout(function () {
          return Ui(a);
        }, Number(c));
    },
    Vi = function (a, b) {
      var c = Ra(function () {
        return G(function () {
          b(Cf.M, a.P);
        });
      });
      a.o ? c() : a.F.push(c);
    },
    Wi = function (a) {
      a.C++;
      return Ra(function () {
        a.s++;
        a.ba && a.s >= a.C && Ui(a);
      });
    };
  var Xi = function () {
      function a(d) {
        return !ta(d) || 0 > d ? 0 : d;
      }
      if (!N._li && m.performance && m.performance.timing) {
        var b = m.performance.timing.navigationStart,
          c = ta(Xf.get("gtm.start")) ? Xf.get("gtm.start") : 0;
        N._li = {
          cst: a(c - b),
          cbt: a(Lf - b),
        };
      }
    },
    Yi = function (a) {
      m.performance && m.performance.mark(Cf.M + "_" + a + "_start");
    },
    Zi = function (a) {
      if (m.performance) {
        var b = Cf.M + "_" + a + "_start",
          c = Cf.M + "_" + a + "_duration";
        m.performance.measure(c, b);
        var d = m.performance.getEntriesByName(c)[0];
        m.performance.clearMarks(b);
        m.performance.clearMeasures(c);
        var e = N._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (N._p = e));
        return d.duration;
      }
    },
    $i = function () {
      if (m.performance && m.performance.now) {
        var a = N._p || {};
        a.PAGEVIEW = m.performance.now();
        N._p = a;
      }
    };
  var aj = {},
    ej = function () {
      return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject];
    },
    fj = !1;
  var gj = function (a) {
      m.GoogleAnalyticsObject || (m.GoogleAnalyticsObject = a || "ga");
      var b = m.GoogleAnalyticsObject;
      if (m[b]) m.hasOwnProperty(b) || ud(12);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Na());
        m[b] = c;
      }
      Xi();
      return m[b];
    },
    hj = function (a, b, c, d) {
      b = String(b).replace(/\s+/g, "").split(",");
      var e = ej();
      e(a + "require", "linker");
      e(a + "linker:autoLink", b, c, d);
    },
    ij = function (a) {
      if (!Rd()) return;
      var b = ej();
      b(a + "require", "linker");
      b(a + "linker:passthrough", !0);
    };

  function jj() {
    return m.GoogleAnalyticsObject || "ga";
  }
  var kj = function (a) {},
    lj = function (a, b) {
      return function () {
        var c = ej(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              k = f.get("hitCallback"),
              l = 0 > g.indexOf("&tid=" + b);
            l &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            l &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", k, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var sj = function (a) {},
    wj = function (a) {},
    xj = function () {
      return (
        "&tc=" +
        xc.filter(function (a) {
          return a;
        }).length
      );
    },
    Aj = function () {
      2022 <= yj().length && zj();
    },
    Bj = function (a) {
      return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*";
    },
    Dj = function () {
      Cj || (Cj = m.setTimeout(zj, 500));
    },
    zj = function () {
      Cj && (m.clearTimeout(Cj), (Cj = void 0));
      void 0 === Ej ||
        (Fj[Ej] && !Gj && !Hj) ||
        (Ij[Ej] || Jj.zi() || 0 >= Kj--
          ? (ud(1), (Ij[Ej] = !0))
          : (Jj.Ti(),
            Db(yj(!0)),
            (Fj[Ej] = !0),
            (Lj = Mj = Nj = Hj = Gj = "")));
    },
    yj = function (a) {
      var b = Ej;
      if (void 0 === b) return "";
      var c = td("GTM"),
        d = td("TAGGING");
      return [
        Oj,
        Fj[b] ? "" : "&es=1",
        Pj[b],
        sj(b),
        c ? "&u=" + c : "",
        d ? "&ut=" + d : "",
        xj(),
        Gj,
        Hj,
        Nj,
        Mj,
        wj(a),
        Lj,
        "&z=0",
      ].join("");
    },
    Rj = function () {
      Oj = Qj();
    },
    Qj = function () {
      return [Mf, "&v=3&t=t", "&pid=" + ya(), "&rv=" + Cf.bd].join("");
    },
    vj = ["L", "S", "Y"],
    rj = ["S", "E"],
    Sj = {
      sampleRate: "0.005000",
      Hg: "",
      Gg: Number("5"),
    },
    Tj =
      0 <= B.location.search.indexOf("?gtm_latency=") ||
      0 <= B.location.search.indexOf("&gtm_latency="),
    Uj;
  if (!(Uj = Tj)) {
    var Vj = Math.random(),
      Wj = Sj.sampleRate;
    Uj = Vj < Wj;
  }
  var Xj = Uj,
    Yj = {
      label: Cf.M + " Container",
      children: [
        {
          label: "Initialization",
          children: [],
        },
      ],
    },
    Oj = Qj(),
    Fj = {},
    Gj = "",
    Hj = "",
    Lj = "",
    Mj = "",
    uj = {},
    tj = !1,
    qj = {},
    Zj = {},
    Nj = "",
    Ej = void 0,
    Pj = {},
    Ij = {},
    Cj = void 0,
    ak = 5;
  0 < Sj.Gg && (ak = Sj.Gg);
  var Jj = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        zi: function () {
          return c < a ? !1 : Oa() - d[c % a] < b;
        },
        Ti: function () {
          var f = c++ % a;
          d[f] = Oa();
        },
      };
    })(ak, 1e3),
    Kj = 1e3,
    ck = function (a, b) {
      if (Xj && !Ij[a] && Ej !== a) {
        zj();
        Ej = a;
        Lj = Gj = "";
        Pj[a] = "&e=" + Bj(b) + "&eid=" + a;
        Dj();
      }
    },
    dk = function (a, b, c, d) {
      if (Xj && b) {
        var e,
          f = String(b[Wb.lb] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var g = c + e;
        if (!Ij[a]) {
          a !== Ej && (zj(), (Ej = a));
          Gj = Gj ? Gj + "." + g : "&tr=" + g;
          var k = b["function"];
          if (!k)
            throw Error("Error: No function name given for function call.");
          var l = (Ec[k] ? "1" : "2") + e;
          Lj = Lj ? Lj + "." + l : "&ti=" + l;
          Dj();
          Aj();
        }
      }
    };
  var kk = function (a, b, c) {
      if (Xj && !Ij[a]) {
        a !== Ej && (zj(), (Ej = a));
        var d = c + b;
        Hj = Hj ? Hj + "." + d : "&epr=" + d;
        Dj();
        Aj();
      }
    },
    lk = function (a, b, c) {};
  var mk = {
      active: !0,
      isAllowed: function () {
        return !0;
      },
    },
    nk = function (a) {
      var b = N.zones;
      return b ? b.checkState(Cf.M, a) : mk;
    },
    ok = function (a) {
      var b = N.zones;
      !b && a && (b = N.zones = a());
      return b;
    };

  function pk() {}

  function qk() {}

  function rk(a, b, c, d) {
    var e = xc[a],
      f = sk(a, b, c, d);
    if (!f) return null;
    var g = Jc(e[Wb.Kf], c, []);
    if (g && g.length) {
      var k = g[0];
      f = rk(
        k.index,
        {
          onSuccess: f,
          onFailure: 1 === k.dg ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }

  function sk(a, b, c, d) {
    function e() {
      if (f[Wb.Kh]) k();
      else {
        var x = Kc(f, c, []);
        var z = x[Wb.Mg];
        if (null != z)
          for (var w = 0; w < z.length; w++)
            if (!be(z[w])) {
              k();
              return;
            }
        var y = Si(c.mb, String(f[Wb.lb]), Number(f[Wb.Mf]), x[Wb.Lh]),
          A = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!A) {
            A = !0;
            var F = Oa() - D;
            dk(c.id, xc[a], "5", F);
            Ti(c.mb, y, "success", F);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!A) {
            A = !0;
            var F = Oa() - D;
            dk(c.id, xc[a], "6", F);
            Ti(c.mb, y, "failure", F);
            k();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        dk(c.id, f, "1");
        var C = function () {
          var F = Oa() - D;
          dk(c.id, f, "7", F);
          Ti(c.mb, y, "exception", F);
          A || ((A = !0), k());
        };
        var D = Oa();
        try {
          Ic(x, c);
        } catch (F) {
          C(F);
        }
      }
    }
    var f = xc[a],
      g = b.onSuccess,
      k = b.onFailure,
      l = b.terminate;
    if (c.Ge(f)) return null;
    var n = Jc(f[Wb.Nf], c, []);
    if (n && n.length) {
      var p = n[0],
        q = rk(
          p.index,
          {
            onSuccess: g,
            onFailure: k,
            terminate: l,
          },
          c,
          d
        );
      if (!q) return null;
      g = q;
      k = 2 === p.dg ? l : q;
    }
    if (f[Wb.Gf] || f[Wb.Nh]) {
      var t = f[Wb.Gf] ? yc : c.$i,
        u = g,
        r = k;
      if (!t[a]) {
        e = Ra(e);
        var v = tk(a, t, e);
        g = v.onSuccess;
        k = v.onFailure;
      }
      return function () {
        t[a](u, r);
      };
    }
    return e;
  }

  function tk(a, b, c) {
    var d = [],
      e = [];
    b[a] = uk(d, e, c);
    return {
      onSuccess: function () {
        b[a] = vk;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = wk;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }

  function uk(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }

  function vk(a) {
    a();
  }

  function wk(a, b) {
    b();
  }
  var zk = function (a, b) {
    for (var c = [], d = 0; d < xc.length; d++)
      if (a[d]) {
        var e = xc[d];
        var f = Wi(b.mb);
        try {
          var g = rk(
            d,
            {
              onSuccess: f,
              onFailure: f,
              terminate: f,
            },
            b,
            d
          );
          if (g) {
            var k = c,
              l = k.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = Ec[p];
            l.call(k, {
              Bg: n,
              rg: q ? q.priorityOverride || 0 : 0,
              li: g,
            });
          } else xk(d, b), f();
        } catch (r) {
          f();
        }
      }
    var t = b.mb;
    t.ba = !0;
    t.s >= t.C && Ui(t);
    c.sort(yk);
    for (var u = 0; u < c.length; u++) c[u].li();
    return 0 < c.length;
  };

  function yk(a, b) {
    var c,
      d = b.rg,
      e = a.rg;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Bg,
        k = b.Bg;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }

  function xk(a, b) {
    if (!Xj) return;
    var c = function (d) {
      var e = b.Ge(xc[d]) ? "3" : "4",
        f = Jc(xc[d][Wb.Kf], b, []);
      f && f.length && c(f[0].index);
      dk(b.id, xc[d], e);
      var g = Jc(xc[d][Wb.Nf], b, []);
      g && g.length && c(g[0].index);
    };
    c(a);
  }
  var Ak = !1,
    Gk = function (a) {
      var b = Oa(),
        c = a["gtm.uniqueEventId"],
        d = a.event;
      if ("gtm.js" === d) {
        if (Ak) return !1;
        Ak = !0;
      }
      var g = nk(c),
        k = !1;
      if (!g.active) {
        if ("gtm.js" !== d) return !1;
        k = !0;
        g = nk(Number.MAX_SAFE_INTEGER);
      }
      ck(c, d);
      var l = a.eventCallback,
        n = a.eventTimeout,
        p = l;
      var q = {
        id: c,
        name: d,
        Ge: Ji(g.isAllowed),
        $i: [],
        mg: function () {
          ud(6);
        },
        Yf: Bk(c),
        mb: new Ri(p, n),
      };
      q.Xf = Ck();
      Dk(c, q.mb);
      var t = Oc(q);
      k && (t = Ek(t));
      var u = zk(t, q);
      ("gtm.js" !== d && "gtm.sync" !== d) || kj(Cf.M);
      switch (d) {
        case "gtm.init":
          u && ud(20);
      }
      return Fk(t, u);
    };

  function Bk(a) {
    return function (b) {
      Xj && (Vb(b) || lk(a, "input", b));
    };
  }

  function Dk(a, b) {
    ag(a, "event", 1);
    ag(a, "ecommerce", 1);
    ag(a, "gtm");
    ag(a, "eventModel");
  }

  function Ck() {
    var a = {};
    a.event = $f("event", 1);
    a.ecommerce = $f("ecommerce", 1);
    a.gtm = $f("gtm");
    a.eventModel = $f("eventModel");
    return a;
  }

  function Ek(a) {
    for (var b = [], c = 0; c < a.length; c++)
      a[c] && Ef[String(xc[c][Wb.lb])] && (b[c] = !0);
    return b;
  }

  function Fk(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && xc[c] && !Ff[String(xc[c][Wb.lb])]) return !0;
    return !1;
  }

  function Hk(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return De("" + c + b).href;
    }
  }

  function Ik(a, b) {
    return Jk() ? Hk(a, b) : void 0;
  }

  function Jk() {
    var a = !1;
    return a;
  }
  var Kk;
  if (3 === Cf.bd.length) Kk = "g";
  else {
    var Lk = "G";
    Kk = Lk;
  }
  var Mk = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      HA: "h",
      GTM: Kk,
      OPT: "o",
    },
    Nk = function (a) {
      var b = Cf.M.split("-"),
        c = b[0].toUpperCase(),
        d = Mk[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f;
      if (3 === Cf.bd.length) {
        var g = "w";
        f = "2" + g;
      } else f = "";
      return f + d + Cf.bd + e;
    };

  function Ok(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Pk = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1);
  };
  var Qk = function () {
    return hb("iPhone") && !hb("iPod") && !hb("iPad");
  };
  hb("Opera");
  hb("Trident") || hb("MSIE");
  hb("Edge");
  !hb("Gecko") ||
    (-1 != eb.toLowerCase().indexOf("webkit") && !hb("Edge")) ||
    hb("Trident") ||
    hb("MSIE") ||
    hb("Edge");
  -1 != eb.toLowerCase().indexOf("webkit") && !hb("Edge") && hb("Mobile");
  hb("Macintosh");
  hb("Windows");
  hb("Linux") || hb("CrOS");
  var Rk = pa.navigator || null;
  Rk && (Rk.appVersion || "").indexOf("X11");
  hb("Android");
  Qk();
  hb("iPad");
  hb("iPod");
  Qk() || hb("iPad") || hb("iPod");
  eb.toLowerCase().indexOf("kaios");
  var Sk = function (a, b) {
      for (var c = a, d = 0; 50 > d; ++d) {
        var e;
        try {
          e = !(!c.frames || !c.frames[b]);
        } catch (k) {
          e = !1;
        }
        if (e) return c;
        var f;
        a: {
          try {
            var g = c.parent;
            if (g && g != c) {
              f = g;
              break a;
            }
          } catch (k) {}
          f = null;
        }
        if (!(c = f)) break;
      }
      return null;
    },
    Tk = function (a) {
      var b = B;
      b = void 0 === b ? window.document : b;
      if (!a || !b.head) return null;
      var c = document.createElement("meta");
      b.head.appendChild(c);
      c.httpEquiv = "origin-trial";
      c.content = a;
      return c;
    };
  var Uk = function () {};
  var Vk = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Wk = function (a, b) {
      this.s = a;
      this.o = null;
      this.F = {};
      this.ba = 0;
      this.P = void 0 === b ? 500 : b;
      this.C = null;
    };
  na(Wk, Uk);
  var Yk = function (a) {
    return "function" === typeof a.s.__tcfapi || null != Xk(a);
  };
  Wk.prototype.addEventListener = function (a) {
    var b = {},
      c = qb(function () {
        return a(b);
      }),
      d = 0;
    -1 !== this.P &&
      (d = setTimeout(function () {
        b.tcString = "tcunavailable";
        b.internalErrorState = 1;
        c();
      }, this.P));
    var e = function (f, g) {
      clearTimeout(d);
      f
        ? ((b = f),
          (b.internalErrorState = Vk(b)),
          (g && 0 === b.internalErrorState) ||
            ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3)))
        : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
      a(b);
    };
    try {
      Zk(this, "addEventListener", e);
    } catch (f) {
      (b.tcString = "tcunavailable"),
        (b.internalErrorState = 3),
        d && (clearTimeout(d), (d = 0)),
        c();
    }
  };
  Wk.prototype.removeEventListener = function (a) {
    a && a.listenerId && Zk(this, "removeEventListener", null, a.listenerId);
  };
  var al = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var k = c;
      2 === c
        ? ((k = 0), 2 === g && (k = 1))
        : 3 === c && ((k = 1), 1 === g && (k = 0));
      var l;
      if (0 === k)
        if (a.purpose && a.vendor) {
          var n = $k(a.vendor.consents, void 0 === d ? "755" : d);
          l =
            n &&
            "1" === b &&
            a.purposeOneTreatment &&
            ("DE" === a.publisherCC || "CH" === a.publisherCC)
              ? !0
              : n && $k(a.purpose.consents, b);
        } else l = !0;
      else
        l =
          1 === k
            ? a.purpose && a.vendor
              ? $k(a.purpose.legitimateInterests, b) &&
                $k(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return l;
    },
    $k = function (a, b) {
      return !(!a || !a[b]);
    },
    Zk = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.s.__tcfapi) {
        var e = a.s.__tcfapi;
        e(b, 2, c, d);
      } else if (Xk(a)) {
        bl(a);
        var f = ++a.ba;
        a.F[f] = c;
        if (a.o) {
          var g = {};
          a.o.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    Xk = function (a) {
      if (a.o) return a.o;
      a.o = Sk(a.s, "__tcfapiLocator");
      return a.o;
    },
    bl = function (a) {
      a.C ||
        ((a.C = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.F[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Pk(a.s, a.C));
    };
  var cl = !0;
  cl = !1;
  var dl = {
      1: 0,
      3: 0,
      4: 0,
      7: 3,
      9: 3,
      10: 3,
    },
    el = Ok("", 550),
    fl = Ok("", 500);

  function gl() {
    var a = N.tcf || {};
    return (N.tcf = a);
  }
  var hl = function (a, b) {
      this.C = a;
      this.o = b;
      this.s = Oa();
    },
    il = function (a) {},
    jl = function (a) {},
    pl = function () {
      var a = gl(),
        b = new Wk(m, cl ? 3e3 : -1),
        c = new hl(b, a);
      if (
        (kl()
          ? !0 === m.gtag_enable_tcf_support
          : !1 !== m.gtag_enable_tcf_support) &&
        !a.active &&
        ("function" === typeof m.__tcfapi || Yk(b))
      ) {
        a.active = !0;
        a.Ac = {};
        ll();
        var d = null;
        cl
          ? (d = m.setTimeout(function () {
              ml(a);
              nl(a);
              d = null;
            }, fl))
          : (a.tcString = "tcunavailable");
        try {
          b.addEventListener(function (e) {
            d && (clearTimeout(d), (d = null));
            if (0 !== e.internalErrorState) ml(a), nl(a), il(c);
            else {
              var f;
              a.gdprApplies = e.gdprApplies;
              if (!1 === e.gdprApplies) (f = ol()), b.removeEventListener(e);
              else if (
                "tcloaded" === e.eventStatus ||
                "useractioncomplete" === e.eventStatus ||
                "cmpuishown" === e.eventStatus
              ) {
                var g = {},
                  k;
                for (k in dl)
                  if (dl.hasOwnProperty(k))
                    if ("1" === k) {
                      var l = e,
                        n = !0;
                      n = void 0 === n ? !1 : n;
                      var p;
                      var q = l;
                      !1 === q.gdprApplies
                        ? (p = !0)
                        : (void 0 === q.internalErrorState &&
                            (q.internalErrorState = Vk(q)),
                          (p =
                            "error" === q.cmpStatus ||
                            0 !== q.internalErrorState ||
                            ("loaded" === q.cmpStatus &&
                              ("tcloaded" === q.eventStatus ||
                                "useractioncomplete" === q.eventStatus))
                              ? !0
                              : !1));
                      g["1"] = p
                        ? !1 === l.gdprApplies ||
                          "tcunavailable" === l.tcString ||
                          (void 0 === l.gdprApplies && !n) ||
                          "string" !== typeof l.tcString ||
                          !l.tcString.length
                          ? !0
                          : al(l, "1", 0)
                        : !1;
                    } else g[k] = al(e, k, dl[k]);
                f = g;
              }
              f &&
                ((a.tcString = e.tcString || "tcempty"),
                (a.Ac = f),
                nl(a),
                il(c));
            }
          }),
            jl(c);
        } catch (e) {
          d && (clearTimeout(d), (d = null)), ml(a), nl(a);
        }
      }
    };

  function ml(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    cl && (a.Ac = ol());
  }

  function ll() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = el), a);
    Zd(b);
  }
  var kl = function () {
    var a = !1;
    a = !0;
    return a;
  };

  function ol() {
    var a = {},
      b;
    for (b in dl) dl.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }

  function nl(a) {
    var b = {},
      c = ((b.ad_storage = a.Ac["1"] ? "granted" : "denied"), b);
    ql();
    ae(c, 0);
  }
  var rl = function () {
      var a = gl();
      if (a.active && void 0 !== a.loadTime) return Number(a.loadTime);
    },
    ql = function () {
      var a = gl();
      return a.active ? a.tcString || "" : "";
    },
    sl = function () {
      var a = gl();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    tl = function (a) {
      if (!dl.hasOwnProperty(String(a))) return !0;
      var b = gl();
      return b.active && b.Ac ? !!b.Ac[String(a)] : !0;
    };
  var ul = !1;
  var vl = !1;

  function wl(a) {
    var b = String(m.location).split(/[?#]/)[0],
      c = Cf.Pg || m._CONSENT_MODE_SALT,
      d;
    if (a) {
      var e;
      if (c) {
        var f = b + a + c,
          g = 1,
          k,
          l,
          n;
        if (f)
          for (g = 0, l = f.length - 1; 0 <= l; l--)
            (n = f.charCodeAt(l)),
              (g = ((g << 6) & 268435455) + n + (n << 14)),
              (k = g & 266338304),
              (g = 0 != k ? g ^ (k >> 21) : g);
        e = String(g);
      } else e = "0";
      d = e;
    } else d = "";
    return d;
  }

  function xl(a) {
    function b(r) {
      var v;
      N.reported_gclid || (N.reported_gclid = {});
      v = N.reported_gclid;
      var x;
      x =
        !g || (Rd() && !be(M.D))
          ? l + (r ? "gcu" : "gcs")
          : l + "." + (f.prefix || "_gcl") + (r ? "gcu" : "gcs");
      if (!v[x]) {
        v[x] = !0;
        var z = [],
          w = {},
          y = function (J, K) {
            K && (z.push(J + "=" + encodeURIComponent(K)), (w[J] = !0));
          },
          A = "https://www.google.com";
        if (Rd()) {
          var C = be(M.D);
          y("gcs", ce());
          r && y("gcu", "1");
          Sd() && y("gcd", de());
          N.dedupe_gclid || (N.dedupe_gclid = "" + Dg());
          y("rnd", N.dedupe_gclid);
          if ((!l || (n && "aw.ds" !== n)) && be(M.D)) {
            var D = Bh("_gcl_aw");
            y("gclaw", D.join("."));
          }
          y("url", String(m.location).split(/[?#]/)[0]);
          y("dclid", yl(d, p));
          var F = !1;
          F = !0;
          C || (!d && !F) || (A = "https://pagead2.googlesyndication.com");
        }
        y("gdpr_consent", ql()), y("gdpr", sl());
        "1" === lh(!1)._up && y("gtm_up", "1");
        y("gclid", yl(d, l));
        y("gclsrc", n);
        if (
          !(w.gclid || w.dclid || w.gclaw) &&
          (y("gbraid", yl(d, q)), !w.gbraid && Rd() && be(M.D))
        ) {
          var E = Bh("_gcl_gb");
          y("gclgb", E.join("."));
        }
        y("gtm", Nk(!e));
        g && be(M.D) && (Og(f || {}), y("auid", Kg[Lg(f.prefix)] || ""));
        ul || (a.jd && y("did", a.jd)),
          vl && (a.Lb && y("gdid", a.Lb), a.Kb && y("edid", a.Kb));
        var O = A + "/pagead/landing?" + z.join("&");
        Mb(O);
      }
    }
    var c = !!a.se,
      d = !!a.sa,
      e = a.U,
      f = void 0 === a.gd ? {} : a.gd,
      g = void 0 === a.sd ? !0 : a.sd,
      k = Hh(),
      l = k.gclid || "",
      n = k.gclsrc,
      p = k.dclid || "",
      q = k.gbraid || "",
      t = !c && ((!l || (n && "aw.ds" !== n) ? !1 : !0) || q),
      u = Rd();
    if (t || u)
      u
        ? fe(
            function () {
              b();
              be(M.D) ||
                ee(function (r) {
                  return b(!0, r.ai);
                }, M.D);
            },
            [M.D]
          )
        : b();
  }

  function yl(a, b) {
    var c = a && !be(M.D);
    return b && c ? "0" : b;
  }
  var zl = ["aw", "dc", "gb"];

  function Al(a, b, c, d) {
    var e = a.Fg,
      f = a.callback,
      g = a.ng;
    if ("function" === typeof f)
      if (e === M.Gd && void 0 === g) {
        var k = d(b.prefix, c);
        0 === k.length ? f(void 0) : 1 === k.length ? f(k[0]) : f(k);
      } else e === M.eh ? (ud(65), Og(b, !1), f(Kg[Lg(b.prefix)])) : f(g);
  }

  function Bl(a, b) {
    var c = a.Zf,
      d = a.lg,
      e = a.Dg;
    if (a.Jb) {
      var f = void 0 === c ? !0 : !!c;
      th(d[M.Eb], !!d[M.O]) && Mh(zl, b);
      Jh(b);
      Ph(zl, b);
      ci(f, b);
    }
    d[M.O] && Oh(zl, d[M.O], d[M.Xb], !!d[M.Fb], b.prefix);
    e && Rh(["aw", "dc", "gb"]);
  }
  var Cl = !1;
  var Dl = function () {
      this.o = {};
    },
    El = function (a, b, c) {
      null != c && (a.o[b] = c);
    },
    Fl = function (a) {
      return Object.keys(a.o)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.o[b]);
        })
        .join("&");
    },
    Hl = function (a, b, c, d, e) {};
  var Jl = !1,
    Kl = Number("200");

  function Ll() {
    if (!m.Promise) return !1;
    sa(B.interestCohort) ||
      Jl ||
      ((Jl = !0),
      Tk(
        "A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
      ));
    return sa(B.interestCohort);
  }

  function Ml() {
    var a = N.floc;
    if (a) {
      var b = a.ts,
        c = a.floc;
      if (b && c && 1e3 > Oa() - b) return Promise.resolve(c);
    }
    var d = void 0;
    try {
      d = Promise.race([
        B.interestCohort().then(function (e) {
          N.floc = {
            ts: Oa(),
            floc: e,
          };
          return e;
        }),
        new Promise(function (e) {
          m.setTimeout(function () {
            return e();
          }, Kl);
        }),
      ]).catch(function () {});
    } catch (e) {
      return;
    }
    return d;
  }
  var Km = function () {
      var a = !0;
      (tl(7) && tl(9) && tl(10)) || (a = !1);
      var b = !0;
      b = !1;
      b && !Jm() && (a = !1);
      return a;
    },
    Jm = function () {
      var a = !0;
      (tl(3) && tl(4)) || (a = !1);
      return a;
    };
  var qn = !1;
  var rn = !1;
  rn = !0;

  function sn() {
    var a = N;
    return (a.gcq = a.gcq || new tn());
  }
  var un = function (a, b, c) {
      sn().register(a, b, c);
    },
    vn = function (a, b, c, d) {
      sn().push("event", [b, a], c, d);
    },
    wn = function (a, b) {
      sn().push("config", [a], b);
    },
    xn = function (a, b, c, d) {
      sn().push("get", [a, b], c, d);
    },
    yn = {},
    zn = function () {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.remoteConfig = {};
      this.s = {};
      this.C = null;
      this.o = !1;
    },
    An = function (a, b, c, d, e) {
      this.type = a;
      this.C = b;
      this.U = c || "";
      this.o = d;
      this.s = e;
    },
    tn = function () {
      this.s = {};
      this.C = {};
      this.o = [];
      this.F = {
        AW: !1,
        UA: !1,
      };
      this.enableDeferrableCommandAfterConfig = qn;
    },
    Bn = function (a, b) {
      var c = hi(b);
      return (a.s[c.containerId] = a.s[c.containerId] || new zn());
    },
    Cn = function (a, b, c) {
      if (b) {
        var d = hi(b);
        if (d && 1 === Bn(a, b).status) {
          Bn(a, b).status = 2;
          var e = {};
          Xj &&
            (e.timeoutId = m.setTimeout(function () {
              ud(38);
              Dj();
            }, 3e3));
          a.push("require", [e], d.containerId);
          yn[d.containerId] = Oa();
          if (ki()) {
          } else {
            var g =
                "/gtag/js?id=" +
                encodeURIComponent(d.containerId) +
                "&l=dataLayer&cx=c",
              k =
                ("http:" != m.location.protocol ? "https:" : "http:") +
                ("//www.googletagmanager.com" + g),
              l = Ik(c, g) || k;
            Ab(l);
          }
        }
      }
    },
    Dn = function (a, b, c, d) {
      if (d.U) {
        var e = Bn(a, d.U),
          f = e.C;
        if (f) {
          var g = H(c),
            k = H(e.targetConfig[d.U]),
            l = H(e.containerConfig),
            n = H(e.remoteConfig),
            p = H(a.C),
            q = Wf("gtm.uniqueEventId"),
            t = hi(d.U).prefix,
            u = Ra(function () {
              var v = g[M.Cb];
              v && G(v);
            }),
            r = yf(
              xf(
                zf(
                  wf(vf(uf(tf(sf(rf(g), k), l), n), p), function () {
                    kk(q, t, "2");
                    rn && u();
                  }),
                  function () {
                    kk(q, t, "3");
                    rn && u();
                  }
                ),
                function (v, x) {
                  a.F[v] = x;
                }
              ),
              function (v) {
                return a.F[v];
              }
            );
          try {
            kk(q, t, "1");
            f(d.U, b, d.C, r);
          } catch (v) {
            kk(q, t, "4");
          }
        }
      }
    };
  tn.prototype.register = function (a, b, c) {
    var d = Bn(this, a);
    if (3 !== d.status) {
      d.C = b;
      d.status = 3;
      c && (H(d.remoteConfig, c), (d.remoteConfig = c));
      var e = hi(a),
        f = yn[e.containerId];
      if (void 0 !== f) {
        var g = N[e.containerId].bootstrap,
          k = e.prefix.toUpperCase();
        N[e.containerId]._spx && (k = k.toLowerCase());
        var l = Wf("gtm.uniqueEventId"),
          n = k,
          p = Oa() - g;
        if (Xj && !Ij[l]) {
          l !== Ej && (zj(), (Ej = l));
          var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
          Mj = Mj ? Mj + "," + q : "&cl=" + q;
        }
        delete yn[e.containerId];
      }
      this.flush();
    }
  };
  tn.prototype.push = function (a, b, c, d) {
    var e = Math.floor(Oa() / 1e3);
    Cn(this, c, b[0][M.oa] || this.C[M.oa]);
    qn && c && Bn(this, c).o && (d = !1);
    this.o.push(new An(a, e, c, b, d));
    d || this.flush();
  };
  tn.prototype.insert = function (a, b, c) {
    var d = Math.floor(Oa() / 1e3);
    0 < this.o.length
      ? this.o.splice(1, 0, new An(a, d, c, b, !1))
      : this.o.push(new An(a, d, c, b, !1));
  };
  tn.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.o.length; ) {
      var f = this.o[0];
      if (f.s)
        qn
          ? !f.U || Bn(this, f.U).o
            ? ((f.s = !1), this.o.push(f))
            : c.push(f)
          : ((f.s = !1), this.o.push(f)),
          this.o.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== Bn(this, f.U).status && !a) {
              qn && this.o.push.apply(this.o, c);
              return;
            }
            Xj && m.clearTimeout(f.o[0].timeoutId);
            break;
          case "set":
            Da(f.o[0], function (t, u) {
              H(Wa(t, u), b.C);
            });
            break;
          case "config":
            e.Ja = {};
            Da(
              f.o[0],
              (function (t) {
                return function (u, r) {
                  H(Wa(u, r), t.Ja);
                };
              })(e)
            );
            var g = !!e.Ja[M.Uc];
            delete e.Ja[M.Uc];
            var k = Bn(this, f.U),
              l = hi(f.U),
              n = l.containerId === l.id;
            g || (n ? (k.containerConfig = {}) : (k.targetConfig[f.U] = {}));
            (k.o && g) || Dn(this, M.Da, e.Ja, f);
            k.o = !0;
            delete e.Ja[M.cc];
            n ? H(e.Ja, k.containerConfig) : H(e.Ja, k.targetConfig[f.U]);
            qn && (d = !0);
            break;
          case "event":
            e.Ec = {};
            Da(
              f.o[0],
              (function (t) {
                return function (u, r) {
                  H(Wa(u, r), t.Ec);
                };
              })(e)
            );
            Dn(this, f.o[1], e.Ec, f);
            break;
          case "get":
            var p = {},
              q = ((p[M.Oa] = f.o[0]), (p[M.Va] = f.o[1]), p);
            Dn(this, M.La, q, f);
        }
        this.o.shift();
        En(this, f);
      }
      e = {
        Ja: e.Ja,
        Ec: e.Ec,
      };
    }
    qn && (this.o.push.apply(this.o, c), d && this.flush());
  };
  var En = function (a, b) {
    if ("require" !== b.type)
      if (b.U)
        for (
          var c = a.getCommandListeners(b.U)[b.type] || [], d = 0;
          d < c.length;
          d++
        )
          c[d]();
      else
        for (var e in a.s)
          if (a.s.hasOwnProperty(e)) {
            var f = a.s[e];
            if (f && f.s)
              for (var g = f.s[b.type] || [], k = 0; k < g.length; k++) g[k]();
          }
  };
  tn.prototype.getRemoteConfig = function (a) {
    return Bn(this, a).remoteConfig;
  };
  tn.prototype.getCommandListeners = function (a) {
    return Bn(this, a).s;
  };
  var Fn = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": Nb(a, "className"),
        "gtm.elementId": a["for"] || Gb(a, "id") || "",
        "gtm.elementTarget": a.formTarget || Nb(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        Nb(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    },
    Gn = function (a) {
      N.hasOwnProperty("autoEventsSettings") || (N.autoEventsSettings = {});
      var b = N.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Hn = function (a, b, c) {
      Gn(a)[b] = c;
    },
    In = function (a, b, c, d) {
      var e = Gn(a),
        f = Pa(e, b, d);
      e[b] = c(f);
    },
    Jn = function (a, b, c) {
      var d = Gn(a);
      return Pa(d, b, c);
    };
  var Kn = ["input", "select", "textarea"],
    Ln = ["button", "hidden", "image", "reset", "submit"],
    Mn = function (a) {
      var b = a.tagName.toLowerCase();
      return !xa(Kn, function (c) {
        return c === b;
      }) ||
        ("input" === b &&
          xa(Ln, function (c) {
            return c === a.type.toLowerCase();
          }))
        ? !1
        : !0;
    },
    Nn = function (a) {
      return a.form
        ? a.form.tagName
          ? a.form
          : B.getElementById(a.form)
        : Lb(a, ["form"], 100);
    },
    On = function (a, b, c) {
      if (!a.elements) return 0;
      for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
        var g = a.elements[e];
        if (Mn(g)) {
          if (g.dataset[c] === d) return f;
          f++;
        }
      }
      return 0;
    };
  var Pn = !!m.MutationObserver,
    Qn = void 0,
    Rn = function (a) {
      if (!Qn) {
        var b = function () {
          var c = B.body;
          if (c)
            if (Pn)
              new MutationObserver(function () {
                for (var e = 0; e < Qn.length; e++) G(Qn[e]);
              }).observe(c, {
                childList: !0,
                subtree: !0,
              });
            else {
              var d = !1;
              Eb(c, "DOMNodeInserted", function () {
                d ||
                  ((d = !0),
                  G(function () {
                    d = !1;
                    for (var e = 0; e < Qn.length; e++) G(Qn[e]);
                  }));
              });
            }
        };
        Qn = [];
        B.body ? b() : G(b);
      }
      Qn.push(a);
    };
  var Sn = function (a, b, c) {
    function d() {
      var g = a();
      f += e ? ((Oa() - e) * g.playbackRate) / 1e3 : 0;
      e = Oa();
    }
    var e = 0,
      f = 0;
    return {
      createEvent: function (g, k, l) {
        var n = a(),
          p = n.bg,
          q =
            void 0 !== l
              ? Math.round(l)
              : void 0 !== k
              ? Math.round(n.bg * k)
              : Math.round(n.fi),
          t =
            void 0 !== k
              ? Math.round(100 * k)
              : 0 >= p
              ? 0
              : Math.round((q / p) * 100),
          u = B.hidden ? !1 : 0.5 <= qe(c);
        d();
        var r = void 0;
        void 0 !== b && (r = [b]);
        var v = Fn(c, "gtm.video", r);
        v["gtm.videoProvider"] = "youtube";
        v["gtm.videoStatus"] = g;
        v["gtm.videoUrl"] = n.url;
        v["gtm.videoTitle"] = n.title;
        v["gtm.videoDuration"] = Math.round(p);
        v["gtm.videoCurrentTime"] = Math.round(q);
        v["gtm.videoElapsedTime"] = Math.round(f);
        v["gtm.videoPercent"] = t;
        v["gtm.videoVisible"] = u;
        return v;
      },
      Wi: function () {
        e = Oa();
      },
      oe: function () {
        d();
      },
    };
  };
  var Tn = !1,
    Un = [];

  function Vn() {
    if (!Tn) {
      Tn = !0;
      for (var a = 0; a < Un.length; a++) G(Un[a]);
    }
  }
  var Wn = function (a) {
    Tn ? G(a) : Un.push(a);
  };

  function Xn(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c;
  }
  var Yn = new za();

  function Zn(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = Yn.get(e);
      f || ((f = new RegExp(b, d)), Yn.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }

  function $n(a, b) {
    function c(g) {
      var k = De(g),
        l = Be(k, "protocol"),
        n = Be(k, "host", !0),
        p = Be(k, "port"),
        q = Be(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === l ||
        ("http" == l && "80" == p) ||
        ("https" == l && "443" == p)
      )
        (l = "web"), (p = "default");
      return [l, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }

  function ao(a) {
    return bo(a) ? 1 : 0;
  }

  function bo(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && ua(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = H(a, {});
        H(
          {
            arg1: c[d],
            any_of: void 0,
          },
          e
        );
        if (ao(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b) {
            var g = [
              "matches",
              "webkitMatchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
            ];
            try {
              for (var k = 0; k < g.length; k++)
                if (b[g[k]]) {
                  f = b[g[k]](c);
                  break a;
                }
            } catch (n) {}
          }
          f = !1;
        }
        return f;
      case "_ew":
        return Xn(b, c);
      case "_eq":
        return String(b) == String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        var l;
        l = String(b).split(",");
        return 0 <= wa(l, String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return Zn(b, c, a.ignore_case);
      case "_sw":
        return 0 == String(b).indexOf(String(c));
      case "_um":
        return $n(b, c);
    }
    return !1;
  }
  Object.freeze({
    dl: 1,
    id: 1,
  });
  var ho = "HA GF G UA AW DC".split(" "),
    io = !1;
  io = !0;
  var jo = !1,
    ko = !1;

  function lo(a, b) {
    var c = {
      event: a,
    };
    b &&
      ((c.eventModel = H(b)),
      b[M.Cb] && (c.eventCallback = b[M.Cb]),
      b[M.Oc] && (c.eventTimeout = b[M.Oc]));
    return c;
  }

  function mo(a) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", {
        value: Pf(),
      });
    return a["gtm.uniqueEventId"];
  }

  function no() {
    return jo;
  }
  var oo = {
      config: function (a) {
        var b,
          c = mo(a);
        return b;
      },
      consent: function (a) {
        function b() {
          no() &&
            H(a[2], {
              subcommand: a[1],
            });
        }
        if (3 === a.length) {
          ud(39);
          var c = Pf(),
            d = a[1];
          "default" === d
            ? (b(), Zd(a[2]))
            : "update" === d && (b(), ae(a[2], c));
        }
      },
      event: function (a) {
        var b = a[1];
        if (!(2 > a.length) && h(b)) {
          var c;
          if (2 < a.length) {
            if ((!Sb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            c = a[2];
          }
          var d = lo(b, c),
            e = mo(a);
          d["gtm.uniqueEventId"] = e;
          return d;
        }
      },
      get: function (a) {},
      js: function (a) {
        if (2 == a.length && a[1].getTime) {
          ko = !0;
          no();
          var b = {};
          return (
            (b.event = "gtm.js"),
            (b["gtm.start"] = a[1].getTime()),
            (b["gtm.uniqueEventId"] = mo(a)),
            b
          );
        }
      },
      policy: function () {},
      set: function (a) {
        var b;
        2 == a.length && Sb(a[1])
          ? (b = H(a[1]))
          : 3 == a.length &&
            h(a[1]) &&
            ((b = {}),
            Sb(a[2]) || ua(a[2]) ? (b[a[1]] = H(a[2])) : (b[a[1]] = a[2]));
        if (b) {
          b._clear = !0;
          return b;
        }
      },
    },
    po = {
      policy: !0,
    };
  var qo = function (a, b) {
      var c = a.hide;
      if (c && void 0 !== c[b] && c.end) {
        c[b] = !1;
        var d = !0,
          e;
        for (e in c)
          if (c.hasOwnProperty(e) && !0 === c[e]) {
            d = !1;
            break;
          }
        d && (c.end(), (c.end = null));
      }
    },
    so = function (a) {
      var b = ro(),
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Jo = function (a) {
    if (Io(a)) return a;
    this.o = a;
  };
  Jo.prototype.ui = function () {
    return this.o;
  };
  var Io = function (a) {
    return !a || "object" !== Qb(a) || Sb(a)
      ? !1
      : "getUntrustedUpdateValue" in a;
  };
  Jo.prototype.getUntrustedUpdateValue = Jo.prototype.ui;
  var Ko = [],
    Lo = !1,
    Mo = !1,
    No = function (a) {
      return m["dataLayer"].push(a);
    },
    Oo = function (a) {
      var b = N["dataLayer"],
        c = b ? b.subscribers : 1,
        d = 0,
        e = a;
      return function () {
        ++d === c && (e(), (e = null));
      };
    };

  function Po(a) {
    var b = a._clear;
    Da(a, function (d, e) {
      "_clear" !== d && (b && Zf(d, void 0), Zf(d, e));
    });
    Kf || (Kf = a["gtm.start"]);
    var c = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    c || ((c = Pf()), (a["gtm.uniqueEventId"] = c), Zf("gtm.uniqueEventId", c));
    return Gk(a);
  }

  function Qo() {
    var a = Ko[0];
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Fa(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b) return !0;
    }
    return !1;
  }

  function Ro() {
    for (var a = !1; !Mo && 0 < Ko.length; ) {
      if (!Lo && Qo()) {
        var b = {},
          c = ((b.event = "gtm.init_consent"), b),
          d = {},
          e = ((d.event = "gtm.init"), d);
        Ko.unshift(c, e);
        Lo = !0;
      }
      Mo = !0;
      delete Tf.eventModel;
      Vf();
      var g = Ko.shift();
      if (null != g) {
        var k = Io(g);
        if (k) {
          var l = g;
          g = Io(l) ? l.getUntrustedUpdateValue() : void 0;
          for (
            var n = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              p = 0;
            p < n.length;
            p++
          ) {
            var q = n[p],
              t = Wf(q, 1);
            if (ua(t) || Sb(t)) t = H(t);
            Uf[q] = t;
          }
        }
        try {
          if (sa(g))
            try {
              g.call(Xf);
            } catch (A) {}
          else if (ua(g)) {
            var u = g;
            if (h(u[0])) {
              var r = u[0].split("."),
                v = r.pop(),
                x = u.slice(1),
                z = Wf(r.join("."), 2);
              if (void 0 !== z && null !== z)
                try {
                  z[v].apply(z, x);
                } catch (A) {}
            }
          } else {
            if (Fa(g)) {
              a: {
                var w = g;
                if (w.length && h(w[0])) {
                  var y = oo[w[0]];
                  if (y && (!k || !po[w[0]])) {
                    g = y(w);
                    break a;
                  }
                }
                g = void 0;
              }
              if (!g) {
                Mo = !1;
                continue;
              }
            }
            a = Po(g) || a;
          }
        } finally {
          k && Vf(!0);
        }
      }
      Mo = !1;
    }
    return !a;
  }

  function So() {
    var b = Ro();
    try {
      qo(m["dataLayer"], Cf.M);
    } catch (c) {}
    return b;
  }
  var Uo = function () {
      var a = yb("dataLayer", []),
        b = yb("google_tag_manager", {});
      b = b["dataLayer"] = b["dataLayer"] || {};
      Pi(function () {
        b.gtmDom ||
          ((b.gtmDom = !0),
          a.push({
            event: "gtm.dom",
          }));
      });
      Wn(function () {
        b.gtmLoad ||
          ((b.gtmLoad = !0),
          a.push({
            event: "gtm.load",
          }));
      });
      b.subscribers = (b.subscribers || 0) + 1;
      var c = a.push;
      a.push = function () {
        var e;
        if (0 < N.SANDBOXED_JS_SEMAPHORE) {
          e = [];
          for (var f = 0; f < arguments.length; f++)
            e[f] = new Jo(arguments[f]);
        } else e = [].slice.call(arguments, 0);
        var g = c.apply(a, e);
        Ko.push.apply(Ko, e);
        if (300 < this.length) for (ud(4); 300 < this.length; ) this.shift();
        var k = "boolean" !== typeof g || g;
        return Ro() && k;
      };
      var d = a.slice(0);
      Ko.push.apply(Ko, d);
      if (To()) {
        G(So);
      }
    },
    To = function () {
      var a = !0;
      return a;
    };
  var Vo = {};
  Vo.Yc = new String("undefined");
  var Wo = function (a) {
    this.o = function (b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d] === Vo.Yc ? b : a[d]);
      return c.join("");
    };
  };
  Wo.prototype.toString = function () {
    return this.o("undefined");
  };
  Wo.prototype.valueOf = Wo.prototype.toString;
  Vo.Ph = Wo;
  Vo.me = {};
  Vo.ei = function (a) {
    return new Wo(a);
  };
  var Xo = {};
  Vo.Ui = function (a, b) {
    var c = Pf();
    Xo[c] = [a, b];
    return c;
  };
  Vo.$f = function (a) {
    var b = a ? 0 : 1;
    return function (c) {
      var d = Xo[c];
      if (d && "function" === typeof d[b]) d[b]();
      Xo[c] = void 0;
    };
  };
  Vo.yi = function (a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++)
      (b = b || 8 === a[d]), (c = c || 16 === a[d]);
    return b && c;
  };
  Vo.Ni = function (a) {
    if (a === Vo.Yc) return a;
    var b = Pf();
    Vo.me[b] = a;
    return 'google_tag_manager["' + Cf.M + '"].macro(' + b + ")";
  };
  Vo.Ii = function (a, b, c) {
    a instanceof Vo.Ph && ((a = a.o(Vo.Ui(b, c))), (b = ra));
    return {
      vi: a,
      onSuccess: b,
    };
  };
  var hp = m.clearTimeout,
    ip = m.setTimeout,
    R = function (a, b, c) {
      if (ki()) {
        b && G(b);
      } else return Ab(a, b, c);
    },
    jp = function () {
      return new Date();
    },
    kp = function () {
      return m.location.href;
    },
    lp = function (a) {
      return Be(De(a), "fragment");
    },
    mp = function (a) {
      return Ce(De(a));
    },
    np = function (a, b) {
      return Wf(a, b || 2);
    },
    op = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = No(a)))
        : (d = No(a));
      return d;
    },
    pp = function (a, b) {
      m[a] = b;
    },
    T = function (a, b, c) {
      b && (void 0 === m[a] || (c && !m[a])) && (m[a] = b);
      return m[a];
    },
    qp = function (a, b, c) {
      return ng(a, b, void 0 === c ? !0 : !!c);
    },
    rp = function (a, b, c) {
      return 0 === Ag(a, b, c);
    },
    sp = function (a, b) {
      if (ki()) {
        b && G(b);
      } else Cb(a, b);
    },
    tp = function (a) {
      return !!Jn(a, "init", !1);
    },
    up = function (a) {
      Hn(a, "init", !0);
    },
    vp = function (a) {
      var b = If + "?id=" + encodeURIComponent(a) + "&l=dataLayer";
      R(mi("https://", "http://", b));
    },
    wp = function (a, b, c) {
      Xj && (Vb(a) || lk(c, b, a));
    };
  var xp = Vo.Ii;
  var Up = encodeURI,
    W = encodeURIComponent,
    Vp = Db;
  var Wp = function (a, b) {
    if (!a) return !1;
    var c = Be(De(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
        if (0 <= f && c.indexOf(e, f) == f) return !0;
      }
    }
    return !1;
  };
  var Xp = function (a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  };

  function Er() {
    return (m.gaGlobal = m.gaGlobal || {});
  }
  var Fr = function () {
      var a = Er();
      a.hid = a.hid || ya();
      return a.hid;
    },
    Gr = function (a, b) {
      var c = Er();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var gs = function () {
    if (sa(m.__uspapi)) {
      var a = "";
      try {
        m.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var Fs = window,
    Gs = document,
    Hs = function (a) {
      var b = Fs._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === Fs["ga-disable-" + a]))
        return !0;
      try {
        var c = Fs.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = jg("AMP_TOKEN", String(Gs.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return Gs.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var Is = {};

  function Ls(a) {
    delete a.eventModel[M.cc];
    Ns(a.eventModel);
  }
  var Ns = function (a) {
    Da(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[M.Pa] || {};
    Da(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  };
  var Qs = function (a, b, c) {
      vn(b, c, a);
    },
    Rs = function (a, b, c) {
      vn(b, c, a, !0);
    },
    Vs = function (a, b) {};

  function Ss(a, b) {}
  var X = {
    g: {},
  };
  (X.g.ctv = ["google"]),
    (function () {
      (function (a) {
        X.__ctv = a;
        X.__ctv.h = "ctv";
        X.__ctv.m = !0;
        X.__ctv.priorityOverride = 0;
      })(function () {
        return "37";
      });
    })();
  (X.g.sdl = ["google"]),
    (function () {
      function a() {
        return !!(
          Object.keys(l("horiz.pix")).length ||
          Object.keys(l("horiz.pct")).length ||
          Object.keys(l("vert.pix")).length ||
          Object.keys(l("vert.pct")).length
        );
      }

      function b(w) {
        for (var y = [], A = w.split(","), C = 0; C < A.length; C++) {
          var D = Number(A[C]);
          if (isNaN(D)) return [];
          p.test(A[C]) || y.push(D);
        }
        return y;
      }

      function c() {
        var w = 0,
          y = 0;
        return function () {
          var A = pe(),
            C = A.height;
          w = Math.max(v.scrollLeft + A.width, w);
          y = Math.max(v.scrollTop + C, y);
          return {
            hi: w,
            ii: y,
          };
        };
      }

      function d() {
        u = T("self");
        r = u.document;
        v = r.scrollingElement || (r.body && r.body.parentNode);
        z = c();
      }

      function e(w, y, A, C) {
        var D = l(y),
          F = {},
          E;
        for (E in D) {
          F.vb = E;
          if (D.hasOwnProperty(F.vb)) {
            var O = Number(F.vb);
            w < O ||
              (op({
                event: "gtm.scrollDepth",
                "gtm.scrollThreshold": O,
                "gtm.scrollUnits": A.toLowerCase(),
                "gtm.scrollDirection": C,
                "gtm.triggers": D[F.vb].join(","),
              }),
              In(
                "sdl",
                y,
                (function (J) {
                  return function (K) {
                    delete K[J.vb];
                    return K;
                  };
                })(F),
                {}
              ));
          }
          F = {
            vb: F.vb,
          };
        }
      }

      function f() {
        var w = z(),
          y = w.hi,
          A = w.ii,
          C = (y / v.scrollWidth) * 100,
          D = (A / v.scrollHeight) * 100;
        e(y, "horiz.pix", q.$c, t.Ff);
        e(C, "horiz.pct", q.Zc, t.Ff);
        e(A, "vert.pix", q.$c, t.Qf);
        e(D, "vert.pct", q.Zc, t.Qf);
        Hn("sdl", "pending", !1);
      }

      function g() {
        var w = 250,
          y = !1;
        r.scrollingElement &&
          r.documentElement &&
          u.addEventListener &&
          ((w = 50), (y = !0));
        var A = 0,
          C = !1,
          D = function () {
            C
              ? (A = ip(D, w))
              : ((A = 0),
                f(),
                tp("sdl") &&
                  !a() &&
                  (Fb(u, "scroll", F),
                  Fb(u, "resize", F),
                  Hn("sdl", "init", !1)));
            C = !1;
          },
          F = function () {
            y && z();
            A ? (C = !0) : ((A = ip(D, w)), Hn("sdl", "pending", !0));
          };
        return F;
      }

      function k(w, y, A) {
        if (y) {
          var C = b(String(w));
          In(
            "sdl",
            A,
            function (D) {
              for (var F = 0; F < C.length; F++) {
                var E = String(C[F]);
                D.hasOwnProperty(E) || (D[E] = []);
                D[E].push(y);
              }
              return D;
            },
            {}
          );
        }
      }

      function l(w) {
        return Jn("sdl", w, {});
      }

      function n(w) {
        G(w.vtp_gtmOnSuccess);
        var y = w.vtp_uniqueTriggerId,
          A = w.vtp_horizontalThresholdsPixels,
          C = w.vtp_horizontalThresholdsPercent,
          D = w.vtp_verticalThresholdUnits,
          F = w.vtp_verticalThresholdsPixels,
          E = w.vtp_verticalThresholdsPercent;
        switch (w.vtp_horizontalThresholdUnits) {
          case q.$c:
            k(A, y, "horiz.pix");
            break;
          case q.Zc:
            k(C, y, "horiz.pct");
        }
        switch (D) {
          case q.$c:
            k(F, y, "vert.pix");
            break;
          case q.Zc:
            k(E, y, "vert.pct");
        }
        tp("sdl")
          ? Jn("sdl", "pending") ||
            (x || (d(), (x = !0)),
            G(function () {
              return f();
            }))
          : (d(),
            (x = !0),
            v &&
              (up("sdl"),
              Hn("sdl", "pending", !0),
              G(function () {
                f();
                if (a()) {
                  var O = g();
                  Eb(u, "scroll", O);
                  Eb(u, "resize", O);
                } else Hn("sdl", "init", !1);
              })));
      }
      var p = /^\s*$/,
        q = {
          Zc: "PERCENT",
          $c: "PIXELS",
        },
        t = {
          Qf: "vertical",
          Ff: "horizontal",
        },
        u,
        r,
        v,
        x = !1,
        z;
      (function (w) {
        X.__sdl = w;
        X.__sdl.h = "sdl";
        X.__sdl.m = !0;
        X.__sdl.priorityOverride = 0;
      })(function (w) {
        w.vtp_triggerStartOption
          ? n(w)
          : Wn(function () {
              n(w);
            });
      });
    })();

  (X.g.jsm = ["customScripts"]),
    (function () {
      (function (a) {
        X.__jsm = a;
        X.__jsm.h = "jsm";
        X.__jsm.m = !0;
        X.__jsm.priorityOverride = 0;
      })(function (a) {
        if (void 0 !== a.vtp_javascript) {
          var b = a.vtp_javascript;
          try {
            var c = T("google_tag_manager");
            var d = c && c.e && c.e(b);
            wp(d, "jsm", a.vtp_gtmEventId);
            return d;
          } catch (e) {}
        }
      });
    })();
  (X.g.c = ["google"]),
    (function () {
      (function (a) {
        X.__c = a;
        X.__c.h = "c";
        X.__c.m = !0;
        X.__c.priorityOverride = 0;
      })(function (a) {
        wp(a.vtp_value, "c", a.vtp_gtmEventId);
        return a.vtp_value;
      });
    })();
  (X.g.e = ["google"]),
    (function () {
      (function (a) {
        X.__e = a;
        X.__e.h = "e";
        X.__e.m = !0;
        X.__e.priorityOverride = 0;
      })(function (a) {
        var b = String(bg(a.vtp_gtmEventId, "event"));
        a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
        return b;
      });
    })();
  (X.g.f = ["google"]),
    (function () {
      (function (a) {
        X.__f = a;
        X.__f.h = "f";
        X.__f.m = !0;
        X.__f.priorityOverride = 0;
      })(function (a) {
        var b = np("gtm.referrer", 1) || B.referrer;
        return b
          ? a.vtp_component && "URL" != a.vtp_component
            ? Be(
                De(String(b)),
                a.vtp_component,
                a.vtp_stripWww,
                a.vtp_defaultPages,
                a.vtp_queryKey
              )
            : mp(String(b))
          : String(b);
      });
    })();
  (X.g.cl = ["google"]),
    (function () {
      function a(b) {
        var c = b.target;
        if (c) {
          var d = Fn(c, "gtm.click");
          op(d);
        }
      }
      (function (b) {
        X.__cl = b;
        X.__cl.h = "cl";
        X.__cl.m = !0;
        X.__cl.priorityOverride = 0;
      })(function (b) {
        if (!tp("cl")) {
          var c = T("document");
          Eb(c, "click", a, !0);
          up("cl");
        }
        G(b.vtp_gtmOnSuccess);
      });
    })();
  (X.g.j = ["google"]),
    (function () {
      (function (a) {
        X.__j = a;
        X.__j.h = "j";
        X.__j.m = !0;
        X.__j.priorityOverride = 0;
      })(function (a) {
        for (
          var b = String(a.vtp_name).split("."), c = T(b.shift()), d = 0;
          d < b.length;
          d++
        )
          c = c && c[b[d]];
        wp(c, "j", a.vtp_gtmEventId);
        return c;
      });
    })();
  (X.g.k = ["google"]),
    (function () {
      (function (a) {
        X.__k = a;
        X.__k.h = "k";
        X.__k.m = !0;
        X.__k.priorityOverride = 0;
      })(function (a) {
        return qp(a.vtp_name, np("gtm.cookie", 1), !!a.vtp_decodeCookie)[0];
      });
    })();
  (X.g.r = ["google"]),
    (function () {
      (function (a) {
        X.__r = a;
        X.__r.h = "r";
        X.__r.m = !0;
        X.__r.priorityOverride = 0;
      })(function (a) {
        return ya(a.vtp_min, a.vtp_max);
      });
    })();
  (X.g.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        X.__u = b;
        X.__u.h = "u";
        X.__u.m = !0;
        X.__u.priorityOverride = 0;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : np("gtm.url", 1)) || kp();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return mp(String(c));
        var e = De(String(c)),
          f;
        if ("QUERY" === d)
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              k = b[a("vtp_queryKey").toString()] || "",
              l = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            g
              ? ua(k)
                ? (n = k)
                : (n = String(k).replace(/\s+/g, "").split(","))
              : (n = [String(k)]);
            for (var p = 0; p < n.length; p++) {
              var q = Be(e, "QUERY", void 0, void 0, n[p]);
              if (void 0 != q && (!l || "" !== q)) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Be(
            e,
            d,
            "HOST" == d ? b[a("vtp_stripWww")] : void 0,
            "PATH" == d ? b[a("vtp_defaultPages")] : void 0,
            void 0
          );
        return f;
      });
    })();
  (X.g.v = ["google"]),
    (function () {
      (function (a) {
        X.__v = a;
        X.__v.h = "v";
        X.__v.m = !0;
        X.__v.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = np(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        wp(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();
  (X.g.tl = ["google"]),
    (function () {
      function a(b) {
        return function () {
          if (b.Ie && b.Je >= b.Ie) b.Fe && T("self").clearInterval(b.Fe);
          else {
            b.Je++;
            var c = jp().getTime();
            op({
              event: b.J,
              "gtm.timerId": b.Fe,
              "gtm.timerEventNumber": b.Je,
              "gtm.timerInterval": b.interval,
              "gtm.timerLimit": b.Ie,
              "gtm.timerStartTime": b.Ag,
              "gtm.timerCurrentTime": c,
              "gtm.timerElapsedTime": c - b.Ag,
              "gtm.triggers": b.dj,
            });
          }
        };
      }
      (function (b) {
        X.__tl = b;
        X.__tl.h = "tl";
        X.__tl.m = !0;
        X.__tl.priorityOverride = 0;
      })(function (b) {
        G(b.vtp_gtmOnSuccess);
        if (!isNaN(b.vtp_interval)) {
          var c = {
            J: b.vtp_eventName,
            Je: 0,
            interval: Number(b.vtp_interval),
            Ie: isNaN(b.vtp_limit) ? 0 : Number(b.vtp_limit),
            dj: String(b.vtp_uniqueTriggerId || "0"),
            Ag: jp().getTime(),
          };
          c.Fe = T("self").setInterval(
            a(c),
            0 > Number(b.vtp_interval) ? 0 : Number(b.vtp_interval)
          );
        }
      });
    })();
  (X.g.ua = ["google"]),
    (function () {
      function a(r) {
        return be(r);
      }

      function b(r, v, x) {
        var z = !1;
        if (Rd() && !z && !f[r]) {
          var w = !be(M.I),
            y = function () {
              var A = ej(),
                C = "gtm" + Pf(),
                D = q(v);
              D["&gtm"] = Nk(!0);
              var F = {
                name: C,
              };
              p(D, F, !0);
              var E = void 0,
                O = F._useUp;
              A(function () {
                var J = A.getByName(x);
                J && (E = J.get("clientId"));
              });
              A("create", r, F);
              w &&
                be(M.I) &&
                ((w = !1),
                A(function () {
                  var J = ej().getByName(C);
                  !J ||
                    (J.get("clientId") === E && O) ||
                    ((D["&gcs"] = ce()),
                    (D["&gcu"] = "1"),
                    J.set(D),
                    J.send("pageview"));
                }));
              A(function () {
                A.remove(C);
              });
            };
          Wd(y, M.I);
          Wd(y, M.D);
          f[r] = !0;
        }
      }
      var c = !1;
      var d,
        e = {},
        f = {},
        g = {
          name: !0,
          clientId: !0,
          sampleRate: !0,
          siteSpeedSampleRate: !0,
          alwaysSendReferrer: !0,
          allowAnchor: !0,
          allowLinker: !0,
          cookieName: !0,
          cookieDomain: !0,
          cookieExpires: !0,
          cookiePath: !0,
          cookieUpdate: !0,
          cookieFlags: !0,
          legacyCookieDomain: !0,
          legacyHistoryImport: !0,
          storage: !0,
          useAmpClientId: !0,
          storeGac: !0,
          _cd2l: !0,
          _useUp: !0,
          _cs: !0,
        },
        k = {
          allowAnchor: !0,
          allowLinker: !0,
          alwaysSendReferrer: !0,
          anonymizeIp: !0,
          cookieUpdate: !0,
          exFatal: !0,
          forceSSL: !0,
          javaEnabled: !0,
          legacyHistoryImport: !0,
          nonInteraction: !0,
          useAmpClientId: !0,
          useBeacon: !0,
          storeGac: !0,
          allowAdFeatures: !0,
          allowAdPersonalizationSignals: !0,
          _cd2l: !0,
        },
        l = {
          urlPassthrough: !0,
        };
      var p = function (r, v, x) {
          var z = 0;
          if (r)
            for (var w in r)
              if (
                !l[w] &&
                r.hasOwnProperty(w) &&
                ((x && g[w]) || (!x && void 0 === g[w]))
              ) {
                var y = k[w] ? Ia(r[w]) : r[w];
                "anonymizeIp" != w || y || (y = void 0);
                v[w] = y;
                z++;
              }
          return z;
        },
        q = function (r) {
          var v = {};
          r.vtp_gaSettings &&
            H(Xp(r.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), v);
          H(Xp(r.vtp_fieldsToSet, "fieldName", "value"), v);
          Ia(v.urlPassthrough) && (v._useUp = !0);
          r.vtp_transportUrl && (v._x_19 = r.vtp_transportUrl);
          if (!c) {
            v._x_19 && (v._cd2l = !0);
            be(M.I) || (v.storage = "none");
            be(M.D) || ((v.allowAdFeatures = !1), (v.storeGac = !1));
            Km() || (v.allowAdFeatures = !1);
            Jm() || (v.allowAdPersonalizationSignals = !1);
            if (Ia(v.urlPassthrough)) {
              var x = !1;
              Rd() && !x && (v._cs = a);
            }
          }
          return v;
        },
        t = function (r, v) {},
        u = function (r) {
          function v(oa, Z) {
            void 0 !== r[Z] && K("set", oa, r[Z]);
          }
          var x = {},
            z = {},
            w = {},
            y = {};
          if (r.vtp_gaSettings) {
            var A = r.vtp_gaSettings;
            H(Xp(A.vtp_contentGroup, "index", "group"), z);
            H(Xp(A.vtp_dimension, "index", "dimension"), w);
            H(Xp(A.vtp_metric, "index", "metric"), y);
            var C = H(A);
            C.vtp_fieldsToSet = void 0;
            C.vtp_contentGroup = void 0;
            C.vtp_dimension = void 0;
            C.vtp_metric = void 0;
            r = H(r, C);
          }
          H(Xp(r.vtp_contentGroup, "index", "group"), z);
          H(Xp(r.vtp_dimension, "index", "dimension"), w);
          H(Xp(r.vtp_metric, "index", "metric"), y);
          var D = q(r),
            F = "",
            E = gj(r.vtp_functionName);
          if (sa(E)) {
            var O = "",
              J = "";
            r.vtp_setTrackerName && "string" == typeof r.vtp_trackerName
              ? "" !== r.vtp_trackerName &&
                ((J = r.vtp_trackerName), (O = J + "."))
              : ((J = "gtm" + Pf()), (O = J + "."));
            var K = function (oa) {
                var Z = [].slice.call(arguments, 0);
                Z[0] = O + Z[0];
                E.apply(window, Z);
              },
              V = function (oa, Z) {
                return void 0 === Z ? Z : oa(Z);
              },
              L = function (oa, Z) {
                if (Z)
                  for (var Ja in Z)
                    Z.hasOwnProperty(Ja) &&
                      (c ? (D[oa + Ja] = Z[Ja]) : K("set", oa + Ja, Z[Ja]));
              },
              I = function () {
                return null;
              },
              P = function (oa, Z) {
                return void 0 === r[oa] ? x[Z] : r[oa];
              },
              ba = r.vtp_trackingId || x.trackingId;
            if (!c) {
              var Y = function (oa, Z) {
                  void 0 !== Z && K("set", oa, Z);
                },
                ma = {
                  name: J,
                };
              p(D, ma, !0);
              E("create", ba, ma);
              K("set", "&gtm", Nk(!0));
              L("contentGroup", z);
              L("dimension", w);
              L("metric", y);
              var Aa = !1;
              Rd() && !Aa && (K("set", "&gcs", ce()), b(ba, r, J));
              D._x_19 &&
                D._x_20 &&
                !e[J] &&
                ((e[J] = !0), E(lj(J, String(D._x_20))));
              r.vtp_enableRecaptcha &&
                K("require", "recaptcha", "recaptcha.js");
              v("nonInteraction", "vtp_nonInteraction");
              var Ta = {};
              p(D, Ta, !1) && K("set", Ta);
              r.vtp_enableLinkId && K("require", "linkid", "linkid.js");
              K("set", "hitCallback", function () {
                var oa = D && D.hitCallback;
                sa(oa) && oa();
                r.vtp_gtmOnSuccess();
              });
            }
            var Ca;
            if ("TRACK_EVENT" == r.vtp_trackType) {
              if (!c) {
                r.vtp_enableEcommerce && (K("require", "ec", "ec.js"), I());
                var ad = {
                  hitType: "event",
                  eventCategory: String(P("vtp_eventCategory", "category")),
                  eventAction: String(P("vtp_eventAction", "action")),
                  eventLabel: V(String, P("vtp_eventLabel", "label")),
                  eventValue: V(Ga, P("vtp_eventValue", "value")),
                };
                p(Ca, ad, !1);
                K("send", ad);
              }
            } else if ("TRACK_SOCIAL" == r.vtp_trackType) {
              if (!c) {
              }
            } else if ("TRACK_TRANSACTION" == r.vtp_trackType) {
            } else if ("TRACK_TIMING" == r.vtp_trackType) {
              if (!c) {
              }
            } else if ("DECORATE_LINK" == r.vtp_trackType) {
            } else if ("DECORATE_FORM" == r.vtp_trackType) {
            } else if ("TRACK_DATA" == r.vtp_trackType) {
            } else if (!c) {
              r.vtp_enableEcommerce && (K("require", "ec", "ec.js"), I());
              if (
                r.vtp_doubleClick ||
                "DISPLAY_FEATURES" == r.vtp_advertisingFeaturesType
              ) {
                var Ed =
                  "_dc_gtm_" +
                  String(r.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                K("require", "displayfeatures", void 0, {
                  cookieName: Ed,
                });
              }
              if (
                "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" ==
                r.vtp_advertisingFeaturesType
              ) {
                var bj =
                  "_dc_gtm_" +
                  String(r.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                K("require", "adfeatures", {
                  cookieName: bj,
                });
              }
              Ca ? K("send", "pageview", Ca) : K("send", "pageview");
              t(r, O);
              Ia(D.urlPassthrough) && ij(O);
            }
            if (!d) {
              var jc = r.vtp_useDebugVersion
                ? "u/analytics_debug.js"
                : "analytics.js";
              r.vtp_useInternalVersion &&
                !r.vtp_useDebugVersion &&
                (jc = "internal/" + jc);
              d = !0;
              var Fd = Ik(D._x_19, "/analytics.js"),
                qg = mi(
                  "https:",
                  "http:",
                  "//www.google-analytics.com/" + jc,
                  D && !!D.forceSSL
                );
              R(
                "analytics.js" === jc && Fd ? Fd : qg,
                function () {
                  var oa = ej();
                  (oa && oa.loaded) || r.vtp_gtmOnFailure();
                },
                r.vtp_gtmOnFailure
              );
            }
          } else G(r.vtp_gtmOnFailure);
        };
      (function (r) {
        X.__ua = r;
        X.__ua.h = "ua";
        X.__ua.m = !0;
        X.__ua.priorityOverride = 0;
      })(function (r) {
        fe(
          function () {
            u(r);
          },
          [M.I, M.D]
        );
      });
    })();

  (X.g.ytl = ["google"]),
    (function () {
      function a() {
        var r = Math.round(1e9 * Math.random()) + "";
        return B.getElementById(r) ? a() : r;
      }

      function b(r, v) {
        if (!r) return !1;
        for (var x = 0; x < p.length; x++)
          if (0 <= r.indexOf("//" + p[x] + "/" + v)) return !0;
        return !1;
      }

      function c(r, v) {
        var x = r.getAttribute("src");
        if (b(x, "embed/")) {
          if (0 < x.indexOf("enablejsapi=1")) return !0;
          if (v) {
            var z = r.setAttribute,
              w;
            var y = -1 !== x.indexOf("?") ? "&" : "?";
            if (-1 < x.indexOf("origin=")) w = x + y + "enablejsapi=1";
            else {
              if (!t) {
                var A = T("document");
                t = A.location.protocol + "//" + A.location.hostname;
                A.location.port && (t += ":" + A.location.port);
              }
              w = x + y + "enablejsapi=1&origin=" + encodeURIComponent(t);
            }
            z.call(r, "src", w);
            return !0;
          }
        }
        return !1;
      }

      function d(r, v) {
        if (
          !r.getAttribute("data-gtm-yt-inspected-" + v.Ve) &&
          (r.setAttribute("data-gtm-yt-inspected-" + v.Ve, "true"), c(r, v.fg))
        ) {
          r.id || (r.id = a());
          var x = T("YT"),
            z = x.get(r.id);
          z || (z = new x.Player(r.id));
          var w = f(z, v),
            y = {},
            A;
          for (A in w)
            (y.Rb = A),
              w.hasOwnProperty(y.Rb) &&
                z.addEventListener(
                  y.Rb,
                  (function (C) {
                    return function (D) {
                      return w[C.Rb](D.data);
                    };
                  })(y)
                ),
              (y = {
                Rb: y.Rb,
              });
        }
      }

      function e(r) {
        G(function () {
          function v() {
            for (
              var z = x.getElementsByTagName("iframe"), w = z.length, y = 0;
              y < w;
              y++
            )
              d(z[y], r);
          }
          var x = T("document");
          v();
          Rn(v);
        });
      }

      function f(r, v) {
        var x, z;

        function w() {
          K = Sn(
            function () {
              return {
                url: I,
                title: P,
                bg: L,
                fi: r.getCurrentTime(),
                playbackRate: ba,
              };
            },
            v.Ve,
            r.getIframe()
          );
          L = 0;
          P = I = "";
          ba = 1;
          return y;
        }

        function y(Y) {
          switch (Y) {
            case q.PLAYING:
              L = Math.round(r.getDuration());
              I = r.getVideoUrl();
              if (r.getVideoData) {
                var ma = r.getVideoData();
                P = ma ? ma.title : "";
              }
              ba = r.getPlaybackRate();
              v.$h ? op(K.createEvent("start")) : K.oe();
              V = l(v.Ri, v.Qi, r.getDuration());
              return A(Y);
            default:
              return y;
          }
        }

        function A() {
          da = r.getCurrentTime();
          Q = jp().getTime();
          K.Wi();
          J();
          return C;
        }

        function C(Y) {
          var ma;
          switch (Y) {
            case q.ENDED:
              return F(Y);
            case q.PAUSED:
              ma = "pause";
            case q.BUFFERING:
              var Aa = r.getCurrentTime() - da;
              ma =
                1 < Math.abs(((jp().getTime() - Q) / 1e3) * ba - Aa)
                  ? "seek"
                  : ma || "buffering";
              r.getCurrentTime() && (v.Zh ? op(K.createEvent(ma)) : K.oe());
              O();
              return D;
            case q.UNSTARTED:
              return w(Y);
            default:
              return C;
          }
        }

        function D(Y) {
          switch (Y) {
            case q.ENDED:
              return F(Y);
            case q.PLAYING:
              return A(Y);
            case q.UNSTARTED:
              return w(Y);
            default:
              return D;
          }
        }

        function F() {
          for (; z; ) {
            var Y = x;
            hp(z);
            Y();
          }
          v.Yh && op(K.createEvent("complete", 1));
          return w(q.UNSTARTED);
        }

        function E() {}

        function O() {
          z && (hp(z), (z = 0), (x = E));
        }

        function J() {
          if (V.length && 0 !== ba) {
            var Y = -1,
              ma;
            do {
              ma = V[0];
              if (ma.rb > r.getDuration()) return;
              Y = (ma.rb - r.getCurrentTime()) / ba;
              if (0 > Y && (V.shift(), 0 === V.length)) return;
            } while (0 > Y);
            x = function () {
              z = 0;
              x = E;
              0 < V.length &&
                V[0].rb === ma.rb &&
                (V.shift(), op(K.createEvent("progress", ma.pg, ma.vg)));
              J();
            };
            z = ip(x, 1e3 * Y);
          }
        }
        var K,
          V = [],
          L,
          I,
          P,
          ba,
          da,
          Q,
          U = w(q.UNSTARTED);
        z = 0;
        x = E;
        return {
          onStateChange: function (Y) {
            U = U(Y);
          },
          onPlaybackRateChange: function (Y) {
            da = r.getCurrentTime();
            Q = jp().getTime();
            K.oe();
            ba = Y;
            O();
            J();
          },
        };
      }

      function g(r) {
        for (var v = r.split(","), x = v.length, z = [], w = 0; w < x; w++) {
          var y = parseInt(v[w], 10);
          isNaN(y) || 100 < y || 0 > y || z.push(y / 100);
        }
        z.sort(function (A, C) {
          return A - C;
        });
        return z;
      }

      function k(r) {
        for (var v = r.split(","), x = v.length, z = [], w = 0; w < x; w++) {
          var y = parseInt(v[w], 10);
          isNaN(y) || 0 > y || z.push(y);
        }
        z.sort(function (A, C) {
          return A - C;
        });
        return z;
      }

      function l(r, v, x) {
        var z = r.map(function (A) {
          return {
            rb: A,
            vg: A,
            pg: void 0,
          };
        });
        if (!v.length) return z;
        var w = v.map(function (A) {
          return {
            rb: A * x,
            vg: void 0,
            pg: A,
          };
        });
        if (!z.length) return w;
        var y = z.concat(w);
        y.sort(function (A, C) {
          return A.rb - C.rb;
        });
        return y;
      }

      function n(r) {
        var v = !!r.vtp_captureStart,
          x = !!r.vtp_captureComplete,
          z = !!r.vtp_capturePause,
          w = g(r.vtp_progressThresholdsPercent + ""),
          y = k(r.vtp_progressThresholdsTimeInSeconds + ""),
          A = !!r.vtp_fixMissingApi;
        if (v || x || z || w.length || y.length) {
          var C = {
              $h: v,
              Yh: x,
              Zh: z,
              Qi: w,
              Ri: y,
              fg: A,
              Ve: void 0 === r.vtp_uniqueTriggerId ? "" : r.vtp_uniqueTriggerId,
            },
            D = T("YT"),
            F = function () {
              e(C);
            };
          G(r.vtp_gtmOnSuccess);
          if (D) D.ready && D.ready(F);
          else {
            var E = T("onYouTubeIframeAPIReady");
            pp("onYouTubeIframeAPIReady", function () {
              E && E();
              F();
            });
            G(function () {
              for (
                var O = T("document"),
                  J = O.getElementsByTagName("script"),
                  K = J.length,
                  V = 0;
                V < K;
                V++
              ) {
                var L = J[V].getAttribute("src");
                if (b(L, "iframe_api") || b(L, "player_api")) return;
              }
              for (
                var I = O.getElementsByTagName("iframe"), P = I.length, ba = 0;
                ba < P;
                ba++
              )
                if (!u && c(I[ba], C.fg)) {
                  R("https://www.youtube.com/iframe_api");
                  u = !0;
                  break;
                }
            });
          }
        } else G(r.vtp_gtmOnSuccess);
      }
      var p = ["www.youtube.com", "www.youtube-nocookie.com"],
        q = {
          UNSTARTED: -1,
          ENDED: 0,
          PLAYING: 1,
          PAUSED: 2,
          BUFFERING: 3,
          CUED: 5,
        },
        t,
        u = !1;
      (function (r) {
        X.__ytl = r;
        X.__ytl.h = "ytl";
        X.__ytl.m = !0;
        X.__ytl.priorityOverride = 0;
      })(function (r) {
        r.vtp_triggerStartOption
          ? n(r)
          : Pi(function () {
              n(r);
            });
      });
    })();
  (X.g.opt = ["google"]),
    (function () {
      function a(l) {
        return be(l);
      }
      var b,
        c = {
          name: !0,
          clientId: !0,
          sampleRate: !0,
          siteSpeedSampleRate: !0,
          alwaysSendReferrer: !0,
          allowAnchor: !0,
          allowLinker: !0,
          cookieName: !0,
          cookieDomain: !0,
          cookieExpires: !0,
          cookiePath: !0,
          cookieUpdate: !0,
          cookieFlags: !0,
          legacyCookieDomain: !0,
          legacyHistoryImport: !0,
          storage: !0,
          useAmpClientId: !0,
          storeGac: !0,
          _cd2l: !0,
          _useUp: !0,
          _cs: !0,
        },
        d = {
          allowAnchor: !0,
          allowLinker: !0,
          alwaysSendReferrer: !0,
          anonymizeIp: !0,
          cookieUpdate: !0,
          exFatal: !0,
          forceSSL: !0,
          javaEnabled: !0,
          legacyHistoryImport: !0,
          nonInteraction: !0,
          useAmpClientId: !0,
          useBeacon: !0,
          storeGac: !0,
          allowAdFeatures: !0,
          allowAdPersonalizationSignals: !0,
          _cd2l: !0,
        },
        e = {
          urlPassthrough: !0,
        },
        f = function (l, n, p) {
          var q = 0;
          if (l)
            for (var t in l)
              if (
                !e[t] &&
                l.hasOwnProperty(t) &&
                ((p && c[t]) || (!p && void 0 === c[t]))
              ) {
                var u = d[t] ? Ia(l[t]) : l[t];
                "anonymizeIp" != t || u || (u = void 0);
                n[t] = u;
                q++;
              }
          return q;
        },
        g = function (l) {
          var n = {};
          l.vtp_gaSettings &&
            H(Xp(l.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
          H(Xp(l.vtp_fieldsToSet, "fieldName", "value"), n);
          be(M.I) || (n.storage = "none");
          be(M.D) || ((n.allowAdFeatures = !1), (n.storeGac = !1));
          Km() || (n.allowAdFeatures = !1);
          Jm() || (n.allowAdPersonalizationSignals = !1);
          l.vtp_transportUrl && (n._x_19 = l.vtp_transportUrl);
          n._x_19 && (n._cd2l = !0);
          if (Ia(n.urlPassthrough)) {
            n._useUp = !0;
            var p = !1;
            Rd() && !p && (n._cs = a);
          }
          return n;
        },
        k = function (l) {
          if (l.vtp_gaSettings) {
            var n = H(l.vtp_gaSettings);
            n.vtp_fieldsToSet = void 0;
            l = H(l, n);
          }
          var p = g(l),
            q = gj(l.vtp_functionName);
          if (sa(q)) {
            q.r = !0;
            var t = "",
              u = "";
            l.vtp_setTrackerName && "string" === typeof l.vtp_trackerName
              ? "" !== l.vtp_trackerName &&
                ((u = l.vtp_trackerName), (t = u + "."))
              : ((u = "gtm" + Pf()), (t = u + "."));
            var r = {
              name: u,
            };
            f(p, r, !0);
            var v = {
              "&gtm": Nk(!0),
            };
            f(p, v, !1);
            var x = encodeURI(
              mi(
                "https:",
                "http:",
                "//www.google-analytics.com/" +
                  (l.vtp_useDebugVersion
                    ? "u/analytics_debug.js"
                    : "analytics.js"),
                !!p.forceSSL
              )
            );
            q("create", l.vtp_trackingId, r);
            q(t + "set", v);
            q(t + "require", l.vtp_optimizeContainerId, {
              dataLayer: "dataLayer",
            });
            q(l.vtp_gtmOnSuccess);
            q(t + "require", "render");
            b ||
              ((b = !0),
              R(
                x,
                function () {
                  return ej().loaded || l.vtp_gtmOnFailure();
                },
                l.vtp_gtmOnFailure
              ));
            var z = T("dataLayer"),
              w = z && z.hide;
            w &&
              (w.end || !0 === w["GTM-T3L6RFK"]) &&
              (w[l.vtp_optimizeContainerId] = !0);
          } else G(l.vtp_gtmOnFailure);
        };
      (function (l) {
        X.__opt = l;
        X.__opt.h = "opt";
        X.__opt.m = !0;
        X.__opt.priorityOverride = 0;
      })(function (l) {
        fe(
          function () {
            k(l);
          },
          [M.I, M.D]
        );
      });
    })();
  (X.g.cid = ["google"]),
    (function () {
      (function (a) {
        X.__cid = a;
        X.__cid.h = "cid";
        X.__cid.m = !0;
        X.__cid.priorityOverride = 0;
      })(function () {
        return Cf.M;
      });
    })();

  (X.g.aev = ["google"]),
    (function () {
      function a(u, r, v) {
        var x = u || bg(r, "gtm");
        if (x) return x[v];
      }

      function b(u, r, v, x, z) {
        z || (z = "element");
        var w = r + "." + v,
          y;
        if (p.hasOwnProperty(w)) y = p[w];
        else {
          var A = a(u, r, z);
          if (A && ((y = x(A)), (p[w] = y), q.push(w), 35 < q.length)) {
            var C = q.shift();
            delete p[C];
          }
        }
        return y;
      }

      function c(u, r, v, x) {
        var z = a(u, r, t[v]);
        return void 0 !== z ? z : x;
      }

      function d(u, r) {
        if (!u) return !1;
        var v = e(kp());
        ua(r) ||
          (r = String(r || "")
            .replace(/\s+/g, "")
            .split(","));
        for (var x = [v], z = 0; z < r.length; z++) {
          var w = r[z];
          if (w.hasOwnProperty("is_regex"))
            if (w.is_regex)
              try {
                w = new RegExp(w.domain);
              } catch (A) {
                continue;
              }
            else w = w.domain;
          if (w instanceof RegExp) {
            if (w.test(u)) return !1;
          } else {
            var y = w;
            if (0 != y.length) {
              if (0 <= e(u).indexOf(y)) return !1;
              x.push(e(y));
            }
          }
        }
        return !Wp(u, x);
      }

      function e(u) {
        n.test(u) || (u = "http://" + u);
        return Be(De(u), "HOST", !0);
      }

      function f(u, r, v, x) {
        switch (u) {
          case "SUBMIT_TEXT":
            return b(r, v, "FORM." + u, g, "formSubmitElement") || x;
          case "LENGTH":
            var z = b(r, v, "FORM." + u, k);
            return void 0 === z ? x : z;
          case "INTERACTED_FIELD_ID":
            return l(r, v, "id", x);
          case "INTERACTED_FIELD_NAME":
            return l(r, v, "name", x);
          case "INTERACTED_FIELD_TYPE":
            return l(r, v, "type", x);
          case "INTERACTED_FIELD_POSITION":
            var w = a(r, v, "interactedFormFieldPosition");
            return void 0 === w ? x : w;
          case "INTERACT_SEQUENCE_NUMBER":
            var y = a(r, v, "interactSequenceNumber");
            return void 0 === y ? x : y;
          default:
            return x;
        }
      }

      function g(u) {
        switch (u.tagName.toLowerCase()) {
          case "input":
            return Gb(u, "value");
          case "button":
            return Hb(u);
          default:
            return null;
        }
      }

      function k(u) {
        if ("form" === u.tagName.toLowerCase() && u.elements) {
          for (var r = 0, v = 0; v < u.elements.length; v++)
            Mn(u.elements[v]) && r++;
          return r;
        }
      }

      function l(u, r, v, x) {
        var z = a(u, r, "interactedFormField");
        return (z && Gb(z, v)) || x;
      }
      var n = /^https?:\/\//i,
        p = {},
        q = [],
        t = {
          ATTRIBUTE: "elementAttribute",
          CLASSES: "elementClasses",
          ELEMENT: "element",
          ID: "elementId",
          HISTORY_CHANGE_SOURCE: "historyChangeSource",
          HISTORY_NEW_STATE: "newHistoryState",
          HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
          HISTORY_OLD_STATE: "oldHistoryState",
          HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
          TARGET: "elementTarget",
        };
      (function (u) {
        X.__aev = u;
        X.__aev.h = "aev";
        X.__aev.m = !0;
        X.__aev.priorityOverride = 0;
      })(function (u) {
        var r = u.vtp_gtmEventId,
          v = u.vtp_defaultValue,
          x = u.vtp_varType,
          z;
        u.vtp_gtmCachedValues && (z = u.vtp_gtmCachedValues.gtm);
        switch (x) {
          case "TAG_NAME":
            var w = a(z, r, "element");
            return (w && w.tagName) || v;
          case "TEXT":
            return b(z, r, x, Hb) || v;
          case "URL":
            var y;
            a: {
              var A = String(a(z, r, "elementUrl") || v || ""),
                C = De(A),
                D = String(u.vtp_component || "URL");
              switch (D) {
                case "URL":
                  y = A;
                  break a;
                case "IS_OUTBOUND":
                  y = d(A, u.vtp_affiliatedDomains);
                  break a;
                default:
                  y = Be(
                    C,
                    D,
                    u.vtp_stripWww,
                    u.vtp_defaultPages,
                    u.vtp_queryKey
                  );
              }
            }
            return y;
          case "ATTRIBUTE":
            var F;
            if (void 0 === u.vtp_attribute) F = c(z, r, x, v);
            else {
              var E = u.vtp_attribute,
                O = a(z, r, "element");
              F = (O && Gb(O, E)) || v || "";
            }
            return F;
          case "MD":
            var J = u.vtp_mdValue,
              K = b(z, r, "MD", dp);
            return J && K ? gp(K, J) || v : K || v;
          case "FORM":
            return f(String(u.vtp_component || "SUBMIT_TEXT"), z, r, v);
          default:
            var V = c(z, r, x, v);
            wp(V, "aev", u.vtp_gtmEventId);
            return V;
        }
      });
    })();

  (X.g.gas = ["google"]),
    (function () {
      (function (a) {
        X.__gas = a;
        X.__gas.h = "gas";
        X.__gas.m = !0;
        X.__gas.priorityOverride = 0;
      })(function (a) {
        var b = H(a),
          c = b;
        c[Wb.lb] = null;
        c[Wb.Hh] = null;
        var d = (b = c);
        d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
        var e = d.vtp_cookieDomain;
        void 0 !== e &&
          (d.vtp_fieldsToSet.push({
            fieldName: "cookieDomain",
            value: e,
          }),
          delete d.vtp_cookieDomain);
        return b;
      });
    })();
  (X.g.remm = ["google"]),
    (function () {
      (function (a) {
        X.__remm = a;
        X.__remm.h = "remm";
        X.__remm.m = !0;
        X.__remm.priorityOverride = 0;
      })(function (a) {
        for (
          var b = a.vtp_input,
            c = a.vtp_map || [],
            d = a.vtp_fullMatch,
            e = a.vtp_ignoreCase ? "gi" : "g",
            f = a.vtp_defaultValue,
            g = 0;
          g < c.length;
          g++
        ) {
          var k = c[g].key || "";
          d && (k = "^" + k + "$");
          var l = new RegExp(k, e);
          if (l.test(b)) {
            var n = c[g].value;
            a.vtp_replaceAfterMatch && (n = String(b).replace(l, n));
            f = n;
            break;
          }
        }
        wp(f, "remm", a.vtp_gtmEventId);
        return f;
      });
    })();
  (X.g.smm = ["google"]),
    (function () {
      (function (a) {
        X.__smm = a;
        X.__smm.h = "smm";
        X.__smm.m = !0;
        X.__smm.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_input,
          c = Xp(a.vtp_map, "key", "value") || {},
          d = c.hasOwnProperty(b) ? c[b] : a.vtp_defaultValue;
        wp(d, "smm", a.vtp_gtmEventId);
        return d;
      });
    })();

  (X.g.paused = []),
    (function () {
      (function (a) {
        X.__paused = a;
        X.__paused.h = "paused";
        X.__paused.m = !0;
        X.__paused.priorityOverride = 0;
      })(function (a) {
        G(a.vtp_gtmOnFailure);
      });
    })();
  (X.g.hid = ["google"]),
    (function () {
      (function (a) {
        X.__hid = a;
        X.__hid.h = "hid";
        X.__hid.m = !0;
        X.__hid.priorityOverride = 0;
      })(function () {
        return Vo.Yc;
      });
    })();
  (X.g.html = ["customScripts"]),
    (function () {
      function a(d, e, f, g) {
        return function () {
          try {
            if (0 < e.length) {
              var k = e.shift(),
                l = a(d, e, f, g);
              if (
                "SCRIPT" == String(k.nodeName).toUpperCase() &&
                "text/gtmscript" == k.type
              ) {
                var n = B.createElement("script");
                n.async = !1;
                n.type = "text/javascript";
                n.id = k.id;
                n.text = k.text || k.textContent || k.innerHTML || "";
                k.charset && (n.charset = k.charset);
                var p = k.getAttribute("data-gtmsrc");
                p && ((n.src = p), zb(n, l));
                d.insertBefore(n, null);
                p || l();
              } else if (
                k.innerHTML &&
                0 <= k.innerHTML.toLowerCase().indexOf("<script")
              ) {
                for (var q = []; k.firstChild; )
                  q.push(k.removeChild(k.firstChild));
                d.insertBefore(k, null);
                a(k, q, l, g)();
              } else d.insertBefore(k, null), l();
            } else f();
          } catch (t) {
            G(g);
          }
        };
      }
      var c = function (d) {
        if (B.body) {
          var e = d.vtp_gtmOnFailure,
            f = xp(d.vtp_html, d.vtp_gtmOnSuccess, e),
            g = f.vi,
            k = f.onSuccess;
          if (d.vtp_useIframe) {
          } else
            d.vtp_supportDocumentWrite ? b(g, k, e) : a(B.body, Kb(g), k, e)();
        } else
          ip(function () {
            c(d);
          }, 200);
      };
      X.__html = c;
      X.__html.h = "html";
      X.__html.m = !0;
      X.__html.priorityOverride = 0;
    })();

  (X.g.dbg = ["google"]),
    (function () {
      (function (a) {
        X.__dbg = a;
        X.__dbg.h = "dbg";
        X.__dbg.m = !0;
        X.__dbg.priorityOverride = 0;
      })(function () {
        return !1;
      });
    })();

  (X.g.lcl = []),
    (function () {
      function a() {
        var c = T("document"),
          d = 0,
          e = function (f) {
            var g = f.target;
            if (
              g &&
              3 !== f.which &&
              !(f.xi || (f.timeStamp && f.timeStamp === d))
            ) {
              d = f.timeStamp;
              g = Lb(g, ["a", "area"], 100);
              if (!g) return f.returnValue;
              var k = f.defaultPrevented || !1 === f.returnValue,
                l = Jn("lcl", k ? "nv.mwt" : "mwt", 0),
                n;
              n = k ? Jn("lcl", "nv.ids", []) : Jn("lcl", "ids", []);
              if (n.length) {
                var p = Fn(g, "gtm.linkClick", n);
                if (b(f, g, c) && !k && l && g.href) {
                  var q = !!xa(
                    String(Nb(g, "rel") || "").split(" "),
                    function (r) {
                      return "noreferrer" === r.toLowerCase();
                    }
                  );
                  q && ud(36);
                  var t = T((Nb(g, "target") || "_self").substring(1)),
                    u = !0;
                  if (
                    op(
                      p,
                      Oo(function () {
                        var r;
                        if ((r = u && t)) {
                          var v;
                          a: if (q) {
                            var x;
                            try {
                              x = new MouseEvent(f.type, {
                                bubbles: !0,
                              });
                            } catch (z) {
                              if (!c.createEvent) {
                                v = !1;
                                break a;
                              }
                              x = c.createEvent("MouseEvents");
                              x.initEvent(f.type, !0, !0);
                            }
                            x.xi = !0;
                            f.target.dispatchEvent(x);
                            v = !0;
                          } else v = !1;
                          r = !v;
                        }
                        r && (t.location.href = Nb(g, "href"));
                      }),
                      l
                    )
                  )
                    u = !1;
                  else
                    return (
                      f.preventDefault && f.preventDefault(),
                      (f.returnValue = !1)
                    );
                } else op(p, function () {}, l || 2e3);
                return !0;
              }
            }
          };
        Eb(c, "click", e, !1);
        Eb(c, "auxclick", e, !1);
      }

      function b(c, d, e) {
        if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey)
          return !1;
        var f = Nb(d, "href"),
          g = f.indexOf("#"),
          k = Nb(d, "target");
        if ((k && "_self" !== k && "_parent" !== k && "_top" !== k) || 0 === g)
          return !1;
        if (0 < g) {
          var l = mp(f),
            n = mp(e.location);
          return l !== n;
        }
        return !0;
      }
      (function (c) {
        X.__lcl = c;
        X.__lcl.h = "lcl";
        X.__lcl.m = !0;
        X.__lcl.priorityOverride = 0;
      })(function (c) {
        var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
          e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
          f = Number(c.vtp_waitForTagsTimeout);
        if (!f || 0 >= f) f = 2e3;
        var g = c.vtp_uniqueTriggerId || "0";
        if (d) {
          var k = function (n) {
            return Math.max(f, n);
          };
          In("lcl", "mwt", k, 0);
          e || In("lcl", "nv.mwt", k, 0);
        }
        var l = function (n) {
          n.push(g);
          return n;
        };
        In("lcl", "ids", l, []);
        e || In("lcl", "nv.ids", l, []);
        tp("lcl") || (a(), up("lcl"));
        G(c.vtp_gtmOnSuccess);
      });
    })();
  (X.g.evl = ["google"]),
    (function () {
      function a() {
        var f = Number(np("gtm.start")) || 0;
        return jp().getTime() - f;
      }

      function b(f, g, k, l) {
        function n() {
          if (!oe(f.target)) {
            g.has(d.ad) || g.set(d.ad, "" + a());
            g.has(d.be) || g.set(d.be, "" + a());
            var q = 0;
            g.has(d.dd) && (q = Number(g.get(d.dd)));
            q += 100;
            g.set(d.dd, "" + q);
            if (q >= k) {
              var t = Fn(f.target, "gtm.elementVisibility", [g.o]),
                u = qe(f.target);
              t["gtm.visibleRatio"] = Math.round(1e3 * u) / 10;
              t["gtm.visibleTime"] = k;
              t["gtm.visibleFirstTime"] = Number(g.get(d.be));
              t["gtm.visibleLastTime"] = Number(g.get(d.ad));
              op(t);
              l();
            }
          }
        }
        if (!g.has(d.fc) && (0 == k && n(), !g.has(d.Ib))) {
          var p = T("self").setInterval(n, 100);
          g.set(d.fc, p);
        }
      }

      function c(f) {
        f.has(d.fc) &&
          (T("self").clearInterval(Number(f.get(d.fc))), f.s(d.fc));
      }
      var d = {
          fc: "polling-id-",
          be: "first-on-screen-",
          ad: "recent-on-screen-",
          dd: "total-visible-time-",
          Ib: "has-fired-",
        },
        e = function (f, g) {
          this.element = f;
          this.o = g;
        };
      e.prototype.has = function (f) {
        return !!this.element.getAttribute("data-gtm-vis-" + f + this.o);
      };
      e.prototype.get = function (f) {
        return this.element.getAttribute("data-gtm-vis-" + f + this.o);
      };
      e.prototype.set = function (f, g) {
        this.element.setAttribute("data-gtm-vis-" + f + this.o, g);
      };
      e.prototype.s = function (f) {
        this.element.removeAttribute("data-gtm-vis-" + f + this.o);
      };
      (function (f) {
        X.__evl = f;
        X.__evl.h = "evl";
        X.__evl.m = !0;
        X.__evl.priorityOverride = 0;
      })(function (f) {
        function g() {
          var z = !1,
            w = null;
          if ("CSS" === l) {
            try {
              w = he(n);
            } catch (F) {
              ud(46);
            }
            z = !!w && v.length != w.length;
          } else if ("ID" === l) {
            var y = B.getElementById(n);
            y && ((w = [y]), (z = 1 != v.length || v[0] !== y));
          }
          w || ((w = []), (z = 0 < v.length));
          if (z) {
            for (var A = 0; A < v.length; A++) {
              var C = new e(v[A], u);
              c(C);
            }
            v = [];
            for (var D = 0; D < w.length; D++) v.push(w[D]);
            0 <= x && we(x);
            0 < v.length && (x = ve(k, v, [t]));
          }
        }

        function k(z) {
          var w = new e(z.target, u);
          z.intersectionRatio >= t
            ? w.has(d.Ib) ||
              b(
                z,
                w,
                q,
                "ONCE" === r
                  ? function () {
                      for (var y = 0; y < v.length; y++) {
                        var A = new e(v[y], u);
                        A.set(d.Ib, "1");
                        c(A);
                      }
                      we(x);
                      if (p && Qn)
                        for (var C = 0; C < Qn.length; C++)
                          Qn[C] === g && Qn.splice(C, 1);
                    }
                  : function () {
                      w.set(d.Ib, "1");
                      c(w);
                    }
              )
            : (c(w),
              "MANY_PER_ELEMENT" === r && w.has(d.Ib) && (w.s(d.Ib), w.s(d.dd)),
              w.s(d.ad));
        }
        var l = f.vtp_selectorType,
          n;
        "ID" === l
          ? (n = String(f.vtp_elementId))
          : "CSS" === l && (n = String(f.vtp_elementSelector));
        var p = !!f.vtp_useDomChangeListener,
          q =
            (f.vtp_useOnScreenDuration && Number(f.vtp_onScreenDuration)) || 0,
          t = (Number(f.vtp_onScreenRatio) || 50) / 100,
          u = f.vtp_uniqueTriggerId,
          r = f.vtp_firingFrequency,
          v = [],
          x = -1;
        g();
        p && Rn(g);
        G(f.vtp_gtmOnSuccess);
      });
    })();

  var Ws = {};
  (Ws.macro = function (a) {
    if (Vo.me.hasOwnProperty(a)) return Vo.me[a];
  }),
    (Ws.onHtmlSuccess = Vo.$f(!0)),
    (Ws.onHtmlFailure = Vo.$f(!1));
  Ws.dataLayer = Xf;
  Ws.callback = function (a) {
    Nf.hasOwnProperty(a) && sa(Nf[a]) && Nf[a]();
    delete Nf[a];
  };
  Ws.bootstrap = 0;
  Ws._spx = !1;

  function Xs() {
    N[Cf.M] = Ws;
    Sa(Of, X.g);
    Gc = Gc || Vo;
    Hc = Pc;
  }

  function Ys() {
    var a = !1;
    a && Yi("INIT");
    xd().s();
    N = m.google_tag_manager = m.google_tag_manager || {};
    pl();
    uh.enable_gbraid_cookie_write = !0;
    var b = !!N[Cf.M];
    if (b) {
      var c = N.zones;
      c && c.unregisterChild(Cf.M);
    } else {
      for (
        var d = data.resource || {}, e = d.macros || [], f = 0;
        f < e.length;
        f++
      )
        uc.push(e[f]);
      for (var g = d.tags || [], k = 0; k < g.length; k++) xc.push(g[k]);
      for (var l = d.predicates || [], n = 0; n < l.length; n++) wc.push(l[n]);
      for (var p = d.rules || [], q = 0; q < p.length; q++) {
        for (var t = p[q], u = {}, r = 0; r < t.length; r++)
          u[t[r][0]] = Array.prototype.slice.call(t[r], 1);
        vc.push(u);
      }
      Ec = X;
      Fc = ao;
      Xs();
      Uo();
      Ki = !1;
      Li = 0;
      if (
        ("interactive" == B.readyState && !B.createEventObject) ||
        "complete" == B.readyState
      )
        Ni();
      else {
        Eb(B, "DOMContentLoaded", Ni);
        Eb(B, "readystatechange", Ni);
        if (B.createEventObject && B.documentElement.doScroll) {
          var v = !0;
          try {
            v = !m.frameElement;
          } catch (A) {}
          v && Oi();
        }
        Eb(m, "load", Ni);
      }
      Tn = !1;
      "complete" === B.readyState ? Vn() : Eb(m, "load", Vn);
      Xj && m.setInterval(Rj, 864e5);
      Lf = new Date().getTime();
      if (a) {
        var y = Zi("INIT");
      }
    }
  }
  (function (a) {
    if (!m["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (B.referrer) {
        var c = De(B.referrer);
        b = "cct.google" === Ae(c, "host");
      }
      if (!b) {
        var d = ng("googTaggyReferrer");
        b = d.length && d[0].length;
      }
      b &&
        ((m["__TAGGY_INSTALLED"] = !0),
        Ab("https://cct.google/taggy/agent.js"));
    }
    var f = function () {
        var n = m["google.tagmanager.debugui2.queue"];
        n ||
          ((n = []),
          (m["google.tagmanager.debugui2.queue"] = n),
          Ab("https://www.googletagmanager.com/debug/bootstrap"));
        var p = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: xb,
            containerProduct: "GTM",
            debug: !1,
          },
        };
        p.data.resume = function () {
          a();
        };
        Cf.Og && (p.data.initialPublish = !0);
        n.push(p);
      },
      g = "x" === Be(m.location, "query", !1, void 0, "gtm_debug");
    if (!g && B.referrer) {
      var k = De(B.referrer);
      g = "tagassistant.google.com" === Ae(k, "host");
    }
    if (!g) {
      var l = ng("__TAG_ASSISTANT");
      g = l.length && l[0].length;
    }
    !g && m.__TAG_ASSISTANT_API && (g = !0);
    !g &&
      B.documentElement.hasAttribute("data-tag-assistant-present") &&
      (g = !0);
    g && xb ? f() : a();
  })(Ys);
})();
