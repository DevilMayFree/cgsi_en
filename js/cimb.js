var definecountrycode="international";
var defineenvironmentcode="production";

var cimbwebsitezonelanga = "";
var cimbwebsitezonelangb = "";
var cimbwebsitezonelangc = "";
var cimbwebsitezonelangtitlea = "";
var cimbwebsitezonelangtitleb = "";
var cimbwebsitezonelangtitlec = "";

var cimbwebsitelanga = "";
var cimbwebsitelangb = "";
var cimbwebsitelangc = "";
var cimbwebsitelangtitlea = "";
var cimbwebsitelangtitleb = "";
var cimbwebsitelangtitlec = "";

var inlangtitlea = "";
var mylangtitlea = "";
var idlangtitlea = "";
var sglangtitlea = "";
var thlangtitlea = "";
var inlangtitleb = "";
var mylangtitleb = "";
var idlangtitleb = "";
var sglangtitleb = "";
var thlangtitleb = "";
var inlangtitlec = "";
var mylangtitlec = "";
var idlangtitlec = "";
var sglangtitlec = "";
var thlangtitlec = "";

var webdomainintl = "";
var webdomainmy = "";
var webdomainid = "";
var webdomainsg = "";
var webdomainth = "";
var cmsdomain = "";

getPropitiesUrlValue(defineenvironmentcode);

var cmsurlin = cmsdomain + "/cgscimbcms/index.jsp";
var cmsurlmy = cmsdomain + "/cgscimbcmsmy/index.jsp";
var cmsurlid = cmsdomain + "/cgscimbcmsid/index.jsp";
var cmsurlsg = cmsdomain + "/cgscimbcmssg/index.jsp";
var cmsurlth = cmsdomain + "/cgscimbcmsth/index.jsp";

var weburlin = webdomainintl + "/index.jsp";
var weburlmy = webdomainmy + "/index.jsp";
var weburlid = webdomainid + "/index.jsp";
var weburlsg = webdomainsg + "/index.jsp";
var weburlth = webdomainth + "/index.jsp";

var webservice = location.origin + "/";
if (location.origin == "https://cms.cgs-cimb.com") {
    webservice = location.origin + location.pathname.substring(0, location.pathname.indexOf('/', 1)) + "/";
}

if (location.origin == "https://18.136.84.251") {
    webservice = location.origin + location.pathname.substring(0, location.pathname.indexOf('/', 1)) + "/";
}

if (location.origin == "https://localhost:8181") {
    webservice = location.origin + location.pathname.substring(0, location.pathname.indexOf('/', 1)) + "/";
}


if (webdomainintl == "https://103.253.10.206") {
    webservice = location.origin + location.pathname.substring(0, location.pathname.indexOf('/', 1)) + "/";
    weburlin = webdomainintl + "/intl/index.jsp";
    weburlmy = webdomainmy + "/my/index.jsp";
    weburlid = webdomainid + "/id/index.jsp";
    weburlsg = webdomainsg + "/sg/index.jsp";
    weburlth = webdomainth + "/th/index.jsp";
}
//var webservice = location.origin + location.pathname.substring(0, location.pathname.indexOf('/', 1)) + "/";
//var webservice = location.origin + "/" + definecountrycode + location.pathname.substring(0, location.pathname.indexOf('/', 1)) + "/";

getPropitiesValue(definecountrycode);
languageInit();


$(document).ready(function () {
    appendRelationSelector();
    selector();
    productinfoFaqsCreateAnAccount();
    carouselReplaceHTML();
    $(document).on("scroll", onScroll);
    scrollFunction();
    getLanguage();

    $('.searchModal-search-keyword-box').keypress(function (e) {
        if ($("#searchModal").is(":visible"))
            if (e.keyCode == 13)
                searchModal();
    });

    if (getTabParm("about-us") != "") {
        for (var j = 0; j < $(".nav-item>a.awards-tab").length; j++) {
            if ($(".nav-item>a.awards-tab").eq(j).html().toLowerCase() == getTabParm("about-us").toLowerCase()) {
                $(".nav-item>a.awards-tab").eq(j).click();
            }
        }
    }

    jQuery.expr[':'].contains = function (a, i, m) {
        return jQuery(a).text().toUpperCase()
                .indexOf(m[3].toUpperCase()) >= 0;
    };
    if (getParm("tabs") != "") {
        $(".nav-link.awards-tab:contains(" + getParm('tabs') + ")").click();
    }
});

function languageInit() {
    var lang = $("html").attr("lang");

    i18n.init({
        resGetPath: webservice + ((location.pathname.indexOf('itradeweb') == -1) ? '' : 'itradeweb/') + 'locales/' + lang + '/translation.json?v=20240203'
    }, function (t) {
        $("body").i18n();
        $('*').trigger("updatelayout");
    });
}

function getLanguage() {
    var lang = $("html").attr("lang");

    i18n.init({
        resGetPath: webservice + ((location.pathname.indexOf('itradeweb') == -1) ? '' : 'itradeweb/') + 'locales/' + lang + '/translation.json?v=20240203'
    }, function (t) {
        $("body").i18n();
        $('*').trigger("updatelayout");
    });
}

function getPropitiesUrlValue(environmentcode) {
    if (environmentcode == "uat") {
        /* OFFICE UAT */
        webdomainintl = "https://103.253.10.206";
        webdomainmy = "https://103.253.10.206";
        webdomainid = "https://103.253.10.206";
        webdomainsg = "https://103.253.10.206";
        webdomainth = "https://103.253.10.206";
        cmsdomain = "https://103.253.10.206";
    } else if (environmentcode == "production") {
        /* AWS PRODUCTION VPC1+VPC2 */
        webdomainintl = "http://www.cgsi.com";
        webdomainmy = "http://www.cgs-cimb.com.my";
        webdomainid = "http://www.cgs-cimb.co.id";
        webdomainsg = "http://www.cgs-cimb.com.sg";
        webdomainth = "http://www.cgs-cimb.co.th";
        cmsdomain = "http://cms.cgs-cimb.com";
    } else if (environmentcode == "old") {
        /* OLD AWS PRODUCTION VPC */
        webdomainintl = "https://www.cgsi.com";
        webdomainmy = "https://www.cgsi.com";
        webdomainid = "https://www.cgsi.com";
        webdomainsg = "https://www.cgsi.com";
        webdomainth = "https://www.cgsi.com";
        cmsdomain = "https://cms.cgs-cimb.com";
    } else if (environmentcode == "awsuat") {
        /* AWS UAT VPC */
        webdomainintl = "http://uat.cgsi.com";
        webdomainmy = "http://uat.cgsi.com.my";
        webdomainid = "http://uat.cgsi.co.id";
        webdomainsg = "http://uat.cgsi.com.sg";
        webdomainth = "http://uat.cgsi.co.th";
        cmsdomain = "http://uatcms.cgsi.com";
    }
}

function getPropitiesValue(countrycode) {
    if (countrycode == "dev") {
        cimbwebsitezonelanga = "dev";
        cimbwebsitezonelangb = "dev";
        cimbwebsitezonelangc = "dev";
        cimbwebsitezonelangtitlea = "International";
        cimbwebsitezonelangtitleb = "国际";
        cimbwebsitezonelangtitlec = "International";
        cimbwebsitelanga = "en";
        cimbwebsitelangb = "zs";
        cimbwebsitelangc = "my";
        cimbwebsitelangtitlea = "EN";
        cimbwebsitelangtitleb = "&#31616;";
        cimbwebsitelangtitlec = "MY";
        inlangtitlea = "International";
        mylangtitlea = "Malaysia";
        idlangtitlea = "Indonesia";
        sglangtitlea = "Singapore";
        thlangtitlea = "Thailand";
        inlangtitleb = "国际";
        mylangtitleb = "马来西亚";
        idlangtitleb = "印度尼西亚";
        sglangtitleb = "新加坡";
        thlangtitleb = "泰国";
        inlangtitlec = "International";
        mylangtitlec = "Malaysia";
        idlangtitlec = "Indonesia";
        sglangtitlec = "Singapore";
        thlangtitlec = "Thailand";
    } else if (countrycode == "international") {
        cimbwebsitezonelanga = "in";
        cimbwebsitezonelangb = "in";
        cimbwebsitezonelangc = "in";
        cimbwebsitezonelangtitlea = "International";
        cimbwebsitezonelangtitleb = "国际";
        cimbwebsitezonelangtitlec = "International";
        cimbwebsitelanga = "en";
        cimbwebsitelangb = "zs";
        cimbwebsitelangc = "";
        cimbwebsitelangtitlea = "EN";
        cimbwebsitelangtitleb = "&#31616;";
        cimbwebsitelangtitlec = "";
        inlangtitlea = "International";
        mylangtitlea = "Malaysia";
        idlangtitlea = "Indonesia";
        sglangtitlea = "Singapore";
        thlangtitlea = "Thailand";
        inlangtitleb = "国际";
        mylangtitleb = "马来西亚";
        idlangtitleb = "印度尼西亚";
        sglangtitleb = "新加坡";
        thlangtitleb = "泰国";
        inlangtitlec = "";
        mylangtitlec = "";
        idlangtitlec = "";
        sglangtitlec = "";
        thlangtitlec = "";
    } else if (countrycode == "my") {
        cimbwebsitezonelanga = "my";
        cimbwebsitezonelangb = "my";
        cimbwebsitezonelangc = "my";
        cimbwebsitezonelangtitlea = "Malaysia";
        cimbwebsitezonelangtitleb = "马来西亚";
        cimbwebsitezonelangtitlec = "Malaysia";
        cimbwebsitelanga = "en";
        cimbwebsitelangb = "zs";
        cimbwebsitelangc = "my";
        cimbwebsitelangtitlea = "EN";
        cimbwebsitelangtitleb = "&#31616;";
        cimbwebsitelangtitlec = "MY";
        inlangtitlea = "International";
        mylangtitlea = "Malaysia";
        idlangtitlea = "Indonesia";
        sglangtitlea = "Singapore";
        thlangtitlea = "Thailand";
        inlangtitleb = "国际";
        mylangtitleb = "马来西亚";
        idlangtitleb = "印度尼西亚";
        sglangtitleb = "新加坡";
        thlangtitleb = "泰国";
        inlangtitlec = "International";
        mylangtitlec = "Malaysia";
        idlangtitlec = "Indonesia";
        sglangtitlec = "Singapore";
        thlangtitlec = "Thailand";
    } else if (countrycode == "id") {
        cimbwebsitezonelanga = "id";
        cimbwebsitezonelangb = "id";
        cimbwebsitezonelangc = "id";
        cimbwebsitezonelangtitlea = "Indonesia";
        cimbwebsitezonelangtitleb = "Indonesia";
        cimbwebsitezonelangtitlec = "Indonesia";
        cimbwebsitelanga = "en";
        cimbwebsitelangb = "id";
        cimbwebsitelangc = "";
        cimbwebsitelangtitlea = "EN";
        cimbwebsitelangtitleb = "ID";
        cimbwebsitelangtitlec = "";
        inlangtitlea = "International";
        mylangtitlea = "Malaysia";
        idlangtitlea = "Indonesia";
        sglangtitlea = "Singapore";
        thlangtitlea = "Thailand";
        inlangtitleb = "International";
        mylangtitleb = "Malaysia";
        idlangtitleb = "Indonesia";
        sglangtitleb = "Singapore";
        thlangtitleb = "Thailand";
        inlangtitlec = "";
        mylangtitlec = "";
        idlangtitlec = "";
        sglangtitlec = "";
        thlangtitlec = "";
    } else if (countrycode == "sg") {
        cimbwebsitezonelanga = "sg";
        cimbwebsitezonelangb = "sg";
        cimbwebsitezonelangc = "sg";
        cimbwebsitezonelangtitlea = "Singapore";
        cimbwebsitezonelangtitleb = "新加坡";
        cimbwebsitezonelangtitlec = "Singapore";
        cimbwebsitelanga = "en";
        cimbwebsitelangb = "zs";
        cimbwebsitelangc = "";
        cimbwebsitelangtitlea = "EN";
        cimbwebsitelangtitleb = "&#31616;";
        cimbwebsitelangtitlec = "";
        inlangtitlea = "International";
        mylangtitlea = "Malaysia";
        idlangtitlea = "Indonesia";
        sglangtitlea = "Singapore";
        thlangtitlea = "Thailand";
        inlangtitleb = "国际";
        mylangtitleb = "马来西亚";
        idlangtitleb = "印度尼西亚";
        sglangtitleb = "新加坡";
        thlangtitleb = "泰国";
        inlangtitlec = "";
        mylangtitlec = "";
        idlangtitlec = "";
        sglangtitlec = "";
        thlangtitlec = "";
    } else if (countrycode == "th") {
        cimbwebsitezonelanga = "th";
        cimbwebsitezonelangb = "th";
        cimbwebsitezonelangc = "th";
        cimbwebsitezonelangtitlea = "Thailand";
        cimbwebsitezonelangtitleb = "Thailand";
        cimbwebsitezonelangtitlec = "Thailand";
        cimbwebsitelanga = "en";
        cimbwebsitelangb = "th";
        cimbwebsitelangc = "";
        cimbwebsitelangtitlea = "EN";
        cimbwebsitelangtitleb = "TH";
        cimbwebsitelangtitlec = "";
        inlangtitlea = "International";
        mylangtitlea = "Malaysia";
        idlangtitlea = "Indonesia";
        sglangtitlea = "Singapore";
        thlangtitlea = "Thailand";
        inlangtitleb = "International";
        mylangtitleb = "Malaysia";
        idlangtitleb = "Indonesia";
        sglangtitleb = "Singapore";
        thlangtitleb = "Thailand";
        inlangtitlec = "";
        mylangtitlec = "";
        idlangtitlec = "";
        sglangtitlec = "";
        thlangtitlec = "";
    }
}

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function topFunction() {
//    window.scrollTo(0,0);
    $('html, body').animate({scrollTop: "0px"}, 100);
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $("#topbutton").show();
    } else {
        $("#topbutton").hide();
    }
}

function changeGetToPostInRedirect(url) {
    var urlWithoutParm = url.split("?")[0];
    var parmUrl = url.replace(urlWithoutParm, "").substr(1).split("&");

    $('body').append('<form id="postform"></form>');
    $('#postform').attr('action', urlWithoutParm);
    $('#postform').attr('method', 'post');

    for (var i = 0; i < parmUrl.length; i++) {
        $('#postform').append('<input type="hidden" name="' + parmUrl[i].split("=")[0] + '" id="' + parmUrl[i].split("=")[0] + '" value="' + parmUrl[i].split("=")[1] + '">');
    }

    $('#postform').submit();
}

function getTabParm(page) {
    var parmUrl = location.href.substr(1).split(page + "#");

    if (parmUrl.length > 1) {
        return decodeURIComponent(parmUrl[1]);
    } else {
        return "";
    }
}

function getParm(val) {
    var result = "", tmp = [];
    var parmUrl = location.search.substr(1).split("&");

    for (var i = 0; i < parmUrl.length; i++) {
        tmp = parmUrl[i].split("=");
        if (tmp[0] === val)
            result = decodeURIComponent(tmp[1]);
    }

    return result;
}

function intercomHandler() {
    //wating for coding
}

function bodyScroll(id) {
    var alertBar = $("#iframe-alertbar").height();
    var navBar = $(".navbar.navbar-expand-sm.bluenav:visible").height();
    var menubar = $(".navbar.navbar-expand-sm.navbar-light.navbar-padding.nav-border-bottom-gray.muli-font-family.navbar-white-font").height();
    var currentScrollTop = $('html, body').scrollTop();

    if (alertBar == undefined)
        alertBar = 0;

//    if(navBar == undefined || $(".navbar.navbar-expand-sm.bluenav:visible").css('visibility') == "hidden") {
//        navBar = 0;
//    }

    if (menubar == undefined)
        menubar = 0;

    var position = $(id).offset().top - alertBar - menubar;

    if (currentScrollTop > position) {
        position = position - navBar;
    }

    $('html, body').animate({scrollTop: position}, 'fast');

}

function datatimeFormatchangeToCalendar(input_date) {
    var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var temp_inputdate = input_date.split("-");
    var day = temp_inputdate[2].substring(0, 2);
    var month = monthNames[temp_inputdate[1] - 1];
    var year = temp_inputdate[0];

    return month + " " + day + ", " + year;
}

function calendarChangeToDatatimeFormat(input_date) {
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var temp_inputdate = input_date.split(" ");
    var day = temp_inputdate[1];
    var year = temp_inputdate[3];
    var month = "";

    for (var i = 0; i < monthNames.length; i++) {
        if (monthNames[i] == temp_inputdate[2])
            month = i + 1;
    }

    return year + "-" + month + "-" + day;
}

function selector() {
    var lang = $("html").attr("lang");

    i18n.init({
        resGetPath: webservice + ((location.pathname.indexOf('itradeweb') == -1) ? '' : 'itradeweb/') + 'locales/' + lang + '/translation.json?v=20240203'
    }, function (t) {
        $("body").i18n();
        $('*').trigger("updatelayout");

        $(".login-select>.select-selected").remove();
        $(".login-select>.select-items").remove();

        var x, i, j, selElmnt, a, b, c;
        /*look for any elements with the class "login-select":*/
        x = document.getElementsByClassName("login-select");
        for (i = 0; i < x.length; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");

            if (selElmnt != undefined) {
                if (selElmnt.options[selElmnt.selectedIndex] != undefined) {
                    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
                    x[i].appendChild(a);
                    /*for each element, create a new DIV that will contain the option list:*/
                    b = document.createElement("DIV");
                    b.setAttribute("class", "select-items select-hide");
                    for (j = 1; j < selElmnt.length; j++) {
                        /*for each option in the original select element,
                         create a new DIV that will act as an option item:*/
                        c = document.createElement("DIV");
                        c.innerHTML = selElmnt.options[j].innerHTML;
                        c.addEventListener("click", function (e) {
                            /*when an item is clicked, update the original select box,
                             and the selected item:*/
                            var i, s, h;
                            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                            h = this.parentNode.previousSibling;
                            for (i = 0; i < s.length; i++) {
                                if (s.options[i].innerHTML == this.innerHTML) {
                                    s.selectedIndex = i;
                                    h.innerHTML = this.innerHTML;
                                    $(s).change();
                                    break;
                                }
                            }
                            h.click();
                        });
                        b.appendChild(c);
                    }
                    x[i].appendChild(b);
                    a.addEventListener("click", function (e) {
                        /*when the select box is clicked, close any other select boxes,
                         and open/close the current select box:*/
                        e.stopPropagation();
                        closeAllSelect(this);
                        this.nextSibling.classList.toggle("select-hide");
                        this.classList.toggle("select-arrow-active");
                    });
                }
            }
        }

        function closeAllSelect(elmnt) {
            /*a function that will close all select boxes in the document,
             except the current select box:*/
            var x, y, i, arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected");
            for (i = 0; i < y.length; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i)
                } else {
                    y[i].classList.remove("select-arrow-active");
                }
            }
            for (i = 0; i < x.length; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide");
                }
            }
        }
        /*if the user clicks anywhere outside the select box,
         then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);

        getLanguage();
    });
}

function getMenuHref(href) {
    if (href == undefined || href == "") {
        return "";
    } else {
        return "href=\"" + href + "\"";
    }
}

function getMenuOnClickLocation(href) {
    if (href == undefined || href == "") {
        return "";
    } else {
        return 'onclick="javascript: location.href=\'' + href + '\'"';
    }
}

function setMenuHeader() {
    var langtitle = "";
    var lang = $("html").attr("lang");

    if (cimbwebsitezonelangtitlea == "International") {
        $(".dropdown-item-padding.countryin-item").addClass("dropdown-menu-bg-darkblue-lower-selected");
    } else if (cimbwebsitezonelangtitlea == "Malaysia") {
        $(".dropdown-item-padding.countrymy-item").addClass("dropdown-menu-bg-darkblue-lower-selected");
        $(".countryindia-item").hide();
        $(".countryuk-item").hide();
    } else if (cimbwebsitezonelangtitlea == "Indonesia") {
        $(".dropdown-item-padding.countryid-item").addClass("dropdown-menu-bg-darkblue-lower-selected");
        $(".countryindia-item").hide();
        $(".countryuk-item").hide();
    } else if (cimbwebsitezonelangtitlea == "Singapore") {
        $(".dropdown-item-padding.countrysg-item").addClass("dropdown-menu-bg-darkblue-lower-selected");
    } else if (cimbwebsitezonelangtitlea == "Thailand") {
        $(".dropdown-item-padding.countryth-item").addClass("dropdown-menu-bg-darkblue-lower-selected");
        $(".countryindia-item").hide();
        $(".countryuk-item").hide();
    }


    if (lang == cimbwebsitelanga) {
        $(".countrycurrent-item").html('<img style="margin: 0px 9px 0px 0px; height: 15px;" src="https://www.cgsi.com/cgsiresources/system/destop_language.png">' + cimbwebsitezonelangtitlea);
        $(".countryin-item").html(inlangtitlea);
        $(".countrymy-item").html(mylangtitlea);
        $(".countryid-item").html(idlangtitlea);
        $(".countrysg-item").html(sglangtitlea);
        $(".countryth-item").html(thlangtitlea);
        $(".phone-menu-select-place").val(cimbwebsitezonelangtitlea);

        langtitle = cimbwebsitelangtitlea;
        $(".dropdown-item-padding.langa-item").addClass("dropdown-menu-bg-darkblue-lower-selected");
    } else if (lang == cimbwebsitelangb) {
        $(".countrycurrent-item").html('<img style="margin: 0px 9px 0px 0px; height: 15px;" src="https://www.cgsi.com/cgsiresources/system/destop_language.png">' + cimbwebsitezonelangtitleb);
        $(".countryin-item").html(inlangtitleb);
        $(".countrymy-item").html(mylangtitleb);
        $(".countryid-item").html(idlangtitleb);
        $(".countrysg-item").html(sglangtitleb);
        $(".countryth-item").html(thlangtitleb);
        $(".phone-menu-select-place").val(cimbwebsitezonelangtitleb);

        langtitle = cimbwebsitelangtitleb;
        $(".dropdown-item-padding.langb-item").addClass("dropdown-menu-bg-darkblue-lower-selected");
    } else if (lang == cimbwebsitelangc) {
        $(".countrycurrent-item").html('<img style="margin: 0px 9px 0px 0px; height: 15px;" src="https://www.cgsi.com/cgsiresources/system/destop_language.png">' + cimbwebsitezonelangtitlec);
        $(".countryin-item").html(inlangtitlec);
        $(".countrymy-item").html(mylangtitlec);
        $(".countryid-item").html(idlangtitlec);
        $(".countrysg-item").html(sglangtitlec);
        $(".countryth-item").html(thlangtitlec);
        $(".phone-menu-select-place").val(cimbwebsitezonelangtitlec);

        langtitle = cimbwebsitelangtitlec;
        $(".dropdown-item-padding.langc-item").addClass("dropdown-menu-bg-darkblue-lower-selected");
    }

    $(".countryin-item").attr("href", weburlin);
    $(".countrymy-item").attr("href", weburlmy);
    $(".countryid-item").attr("href", weburlid);
    $(".countrysg-item").attr("href", weburlsg);
    $(".countryth-item").attr("href", weburlth);

    $(".langcurrent-item").html('<img style="margin: 0px 9px 0px 0px; height: 15px;" src="https://www.cgsi.com/cgsiresources/system/destop_place.png">' + langtitle);
    $(".langa-item").html(cimbwebsitelangtitlea);
    $(".langb-item").html(cimbwebsitelangtitleb);
    $(".langc-item").html(cimbwebsitelangtitlec);
    $(".langa-item").attr("href", replaceLast(location.href, "/" + lang + "/", "/" + cimbwebsitelanga + "/"));
    $(".langb-item").attr("href", replaceLast(location.href, "/" + lang + "/", "/" + cimbwebsitelangb + "/"));
    $(".langc-item").attr("href", replaceLast(location.href, "/" + lang + "/", "/" + cimbwebsitelangc + "/"));
    $(".langa-item").attr("value", cimbwebsitelanga);
    $(".langb-item").attr("value", cimbwebsitelangb);
    $(".langc-item").attr("value", cimbwebsitelangc);
    $(".phone-menu-select-language").val($("html").attr("lang"));

     //dev start
    if (definecountrycode == "international") {
        $(".langc-item").remove();
        $(".navbar.navbar-expand-sm.bluenav").css("background-image","url(https://www.cgsi.com/cgsiresources/system/in_flag.png)");
    } else if (definecountrycode == "my") {
        $(".langb-item").remove();
        $(".langc-item").remove();
        $(".navbar.navbar-expand-sm.bluenav").css("background-image","url(https://www.cgsi.com/cgsiresources/system/my_flag.png)");
    } else if (definecountrycode == "id") {
        $(".langa-item").remove();
        $(".navbar.navbar-expand-sm.bluenav").css("background-image","url(https://www.cgsi.com/cgsiresources/system/id_flag.png)");
    } else if (definecountrycode == "sg") {
        $(".langc-item").remove();
        $(".navbar.navbar-expand-sm.bluenav").css("background-image","url(https://www.cgsi.com/cgsiresources/system/sg_flag.png)");
    } else if (definecountrycode == "th") {
        $(".langc-item").remove();
        $(".navbar.navbar-expand-sm.bluenav").css("background-image","url(https://www.cgsi.com/cgsiresources/system/th_flag.png)");
    }
    //dev end


    $(".phone-menu-select-place").change(function () {
        if ($(".phone-menu-select-place").val() == "International") {
            window.location.href = weburlin;
        } else if ($(".phone-menu-select-place").val() == "Malaysia") {
            window.location.href = weburlmy;
        } else if ($(".phone-menu-select-place").val() == "Indonesia") {
            window.location.href = weburlid;
        } else if ($(".phone-menu-select-place").val() == "Singapore") {
            window.location.href = weburlsg;
        } else if ($(".phone-menu-select-place").val() == "Thailand") {
            window.location.href = weburlth;
        }
    });

    $(".phone-menu-select-language").change(function () {
        if ($(".phone-menu-select-language").val() == cimbwebsitelanga) {
            window.location.href = replaceLast(location.href, "/" + lang + "/", "/" + cimbwebsitelanga + "/");
        } else if ($(".phone-menu-select-language").val() == cimbwebsitelangb) {
            window.location.href = replaceLast(location.href, "/" + lang + "/", "/" + cimbwebsitelangb + "/");
        } else if ($(".phone-menu-select-language").val() == cimbwebsitelangc) {
            window.location.href = replaceLast(location.href, "/" + lang + "/", "/" + cimbwebsitelangc + "/");
        }
    });

//    if(definecountrycode == "international" || definecountrycode == "sg") {
//        $(".countrymy-item").hide();
//        $(".countryid-item").hide();
//        $(".countryth-item").hide();
//    }
}

function searchModal() {
    location.href = "search.jsp?keyword=" + $(".searchModal-search-keyword-box").val();
}

function replaceLast(value, replace, replaceby) {
    var pos = value.lastIndexOf(replace);
    return value.substring(0, pos) + replaceby + value.substring(pos + replace.length);
}

function productinfoFaqsCreateAnAccount() {
    var selectValue = $('.product7-selector').val();
    //var createAnAccountDetail = $('.desktop-product7-blue');
    var phoneNum = $('.product7-phone-number');
    var email = $('.product7-email-address');
    //createAnAccountDetail.hide();

    $('.product7-selector').on('change', function () {
        selectValue = $(this).val();
        if (selectValue == 1) {
            createAnAccountDetail.show();
            phoneNum.html('<a href="tel:1800 538 9889">1800 538 9889</a> / <a href="tel:+65 6538 9889">+65 6538 9889 (overseas)</a>');
            email.html('<a href="mailto:clientservices.sg@cgs-cimb.com">clientservices.sg@cgs-cimb.com</a>');
            $('.product7-selector-controll').find('div.select-selected').attr('style', 'color: #000000 !important');
        } else if (selectValue == 2) {
            createAnAccountDetail.show();
            phoneNum.html('<a href="tel:1800 538 9889">1800 538 9889</a> / <a href="tel:+65 6538 9889">+65 6538 9889 (overseas)</a>');
            email.html('<a href="mailto:clientservices.sg@cgs-cimb.com">clientservices.sg@cgs-cimb.com</a>');
            $('.product7-selector-controll').find('div.select-selected').attr('style', 'color: #000000 !important');
        } else if (selectValue == 3) {
            createAnAccountDetail.hide();
            phoneNum.html('<a href="tel:02-846-8689">02-846-8689</a>');
            email.html('<a href="mailto:bk.etrade@cgs-cimb.com">bk.etrade@cgs-cimb.com</a>');
            $('.product7-selector-controll').find('div.select-selected').attr('style', 'color: #000000 !important');
        } else if (selectValue == 4) {
            createAnAccountDetail.hide();
            phoneNum.html('<a href="tel:021-299 61800">021-299 61800</a>');
            email.html('<a href="mailto:JK.itrade@cimb.com">JK.itrade@cimb.com</a>');
            $('.product7-selector-controll').find('div.select-selected').attr('style', 'color: #000000 !important');
        } else if (selectValue == 5) {
            createAnAccountDetail.show();
            phoneNum.html('<a href="tel:1800 622 7272">1800 622 7272</a> / <a href="tel:+65 6210 8453">+65 6210 8453 (overseas)</a>');
            email.html('<a href="mailto:sg.cfdquery@cimb.com">sg.cfdquery@cimb.com</a>');
            $('.product7-selector-controll').find('div.select-selected').attr('style', 'color: #000000 !important');
        } else if (selectValue == 6) {
            createAnAccountDetail.show();
            phoneNum.html('<a href="tel:1800 538 9889">1800 538 9889 (仅新加坡)</a> / <a href="tel:+65 6538 9889">+65 6538 9889 (海外)</a>');
            email.html('<a href="mailto:Jclientservices.sg@cgs-cimb.com">Jclientservices.sg@cgs-cimb.com</a>');
            $('.product7-selector-controll').find('div.select-selected').attr('style', 'color: #000000 !important');
        }
    });
}

function carouselReplaceHTML() {
    var lang = $("html").attr("lang");
    $(".carouselcomponent").hide();

    for (var i = 0; i < $(".carouselcomponent").length; i++) {
        var carousel_id = $(".carouselcomponent").eq(i).attr("carousel_id");
        var carouselindex = i;

        var ajaxUrl = webservice + "WSCarousel.json";
        var currentUrl = window.location.href;
        if(currentUrl.indexOf("career") != -1 ){
            ajaxUrl = webservice + "WSCarousel_career.json";
        }
        // console.log('local:',window.location.href)

        $.ajax({
            type: "GET",
            dataType: 'json',
            url: ajaxUrl,
            headers: {"authorization": "webkey"},
            data: {action: "getitem", carousel_id: carousel_id, lang: lang, content: "", image: "", hyperlink: "", rank: "", headlinestatus: "", backgroundstatus: "", modified_by: "", modified_datetime: ""},
            success: function (response) {
                if (response.status === "SUCCESS") {
                    var html = "";
                    var active = "";

                    html += '<div carousel_id="' + carousel_id + '" id="carouselExampleSlidesOnly" class="carousel fade" data-ride="carousel">';
                    html += '<div class="carousel-inner">';

                    for (var j = 0; j < response.text.length; j++) {
                        if(j == 0) 
                            active = "active"; 
                        else
                            active = "";

                        if(response.text[j].hyperlink == "") {
                            html += '<div class="carousel-item ' + active + '">';
                        } else {
                            html += '<div class="carousel-item ' + active + '" style="cursor: pointer;" onclick="javascript: window.open(\'' + response.text[j].hyperlink + '\', \'_blank\');">';
                        }

                        html += '<img class="d-blocks w-100" src="' + response.text[j].image + '" alt="First slide">';
                        html += '</div>';
                    }
                    html += '</div>';
                    html += '</div>';

                    for (var j = 0; j < response.text.length; j++) {
                        html += '<div></div>';
                    }

                    html = html.replaceAll("slide-title", "slide-title-platform");
                    html = html.replaceAll("slide-info", "slide-info-platform");

                    $(".carouselcomponent").eq(carouselindex).removeAttr("style");
                    $(".carouselcomponent").eq(carouselindex).html("");
                    $(".carouselcomponent>*").eq(carouselindex).remove();
                    $(".carouselcomponent").eq(carouselindex).append(html);
                    $(".carouselcomponent").show();

                    $(".carouselcomponent").on("touchstart", function (event) {
                        var xClick = event.originalEvent.touches[0].pageX;
                        $(this).one("touchmove", function (event) {
                            var xMove = event.originalEvent.touches[0].pageX;
                            if (Math.floor(xClick - xMove) > 10) {
                                $(this).carousel('next');
                            } else if (Math.floor(xClick - xMove) < -10) {
                                $(this).carousel('prev');
                            }
                        });
                        $(".carouselcomponent").on("touchend", function () {
                            $(this).off("touchmove");
                        });
                    });
                }
            },
            error: function (XMLHttpRequest) {
                return "";
            }
        });
    }
}

(function (a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a);
    } else {
        a(jQuery);
    }
}(function (a) {
    a.fn.addBack = a.fn.addBack || a.fn.andSelf;
    a.fn.extend({
        actual: function (b, l) {
            if (!this[b]) {
                throw '$.actual => The jQuery method "' + b + '" you called does not exist';
            }
            var f = {
                absolute: false,
                clone: false,
                includeMargin: false,
                display: "block"
            };
            var i = a.extend(f, l);
            var e = this.eq(0);
            var h, j;
            if (i.clone === true) {
                h = function () {
                    var m = "position: absolute !important; top: -1000 !important; ";
                    e = e.clone().attr("style", m).appendTo("body");
                };
                j = function () {
                    e.remove();
                };
            } else {
                var g = [];
                var d = "";
                var c;
                h = function () {
                    c = e.parents().addBack().filter(":hidden");
                    d += "visibility: hidden !important; display: " + i.display + " !important; ";
                    if (i.absolute === true) {
                        d += "position: absolute !important; ";
                    }
                    c.each(function () {
                        var m = a(this);
                        var n = m.attr("style");
                        g.push(n);
                        m.attr("style", n ? n + ";" + d : d);
                    });
                };
                j = function () {
                    c.each(function (m) {
                        var o = a(this);
                        var n = g[m];
                        if (n === undefined) {
                            o.removeAttr("style");
                        } else {
                            o.attr("style", n);
                        }
                    });
                };
            }
            h();
            var k = /(outer)/.test(b) ? e[b](i.includeMargin) : e[b]();
            j();
            return k;
        }
    });
}));

function onScroll(event) {
    scrollFunction();
    var scroll = $(window).scrollTop();
    $(".sticky-sidebar .product-categories").each(function () {

        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.length) {
            if (refElement.position().top <= scroll && refElement.position().top + refElement.height() > scroll) {
                $(".sticky-sidebar .product-categories").removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        }
    });
}

function topProductsAndServiceScroll() {

    var position;
    var scrollBarWidth;
    //check button
    position = Math.round($(".topproductsandservice-scroll").scrollLeft());
    scrollBarWidth = getScrollbarWidth($(".topproductsandservice-scroll")[0]);
    if (position == 0 && scrollBarWidth == 0) {
        $(".topproductsandservice-previous").addClass("disabled");
        $(".topproductsandservice-next").addClass("disabled");
    } else if (position <= 0) {
        $(".topproductsandservice-previous").addClass("disabled");
    }

    //button next start
    $(".topproductsandservice-next").mousedown(function () {
        loopNext();
        if ($(".topproductsandservice-next").attr('class') != "topproductsandservice-next disabled") {
            position = Math.round($(".topproductsandservice-scroll").scrollLeft());
            scrollBarWidth = getScrollbarWidth($(".topproductsandservice-scroll")[0]);
            if (position >= 0 || position <= scrollBarWidth) {
                $(".topproductsandservice-previous").removeClass("disabled");
                $(".topproductsandservice-next").removeClass("disabled");
            }
        }
    }).mouseup(function () {
        stop();

        position = Math.round($(".topproductsandservice-scroll").scrollLeft());
        scrollBarWidth = getScrollbarWidth($(".topproductsandservice-scroll")[0]);
        if (position <= 0) {
            $(".topproductsandservice-previous").addClass("disabled");
        } else if (position >= scrollBarWidth) {
            $(".topproductsandservice-next").addClass("disabled");
        }
    });
    //button next end
    //button previous start

    $(".topproductsandservice-previous").mousedown(function () {
        loopPrev();
        if ($(".topproductsandservice-previous").attr('class') != "topproductsandservice-previous disabled") {
            position = Math.round($(".topproductsandservice-scroll").scrollLeft());
            scrollBarWidth = getScrollbarWidth($(".topproductsandservice-scroll")[0]);
            if (position >= 0 || position <= scrollBarWidth) {
                $(".topproductsandservice-previous").removeClass("disabled");
                $(".topproductsandservice-next").removeClass("disabled");
            }
        }
    }).mouseup(function () {
        stop();

        position = Math.round($(".topproductsandservice-scroll").scrollLeft());
        scrollBarWidth = getScrollbarWidth($(".topproductsandservice-scroll")[0]);
        if (position <= 0) {
            $(".topproductsandservice-previous").addClass("disabled");
        } else if (position >= scrollBarWidth) {
            $(".topproductsandservice-next").addClass("disabled");
        }
    });
    //button previous end

    //check the end/start of scrollbar when the window is changed
    $(window).resize(function () {
        position = Math.round($(".topproductsandservice-scroll").scrollLeft());
        scrollBarWidth = getScrollbarWidth($(".topproductsandservice-scroll")[0]);
        if (position == 0 && scrollBarWidth == 0) {
            $(".topproductsandservice-previous").addClass("disabled");
            $(".topproductsandservice-next").addClass("disabled");
        } else if (position <= 0) {
            $(".topproductsandservice-previous").addClass("disabled");
            $(".topproductsandservice-next").removeClass("disabled");
        } else if (position >= scrollBarWidth) {
            $(".topproductsandservice-next").addClass("disabled");
        } else if (position <= scrollBarWidth) {
            $(".topproductsandservice-next").removeClass("disabled");
        }
    });
}

function loopNext() {
    $(".topproductsandservice-scroll").stop().animate({scrollLeft: '+=80'}, 'fast', 'linear', loopNext);
}

function loopPrev() {
    $(".topproductsandservice-scroll").stop().animate({scrollLeft: '-=80'}, 'fast', 'linear', loopPrev);
}

function stop() {
    $(".topproductsandservice-scroll").stop();
}

function getScrollbarWidth(element) {
    if (element.offsetWidth > element.scrollWidth)
        return 0;
    else
        return element.scrollWidth - element.offsetWidth;
}

function getPopupCkeditorWebModal(popupid) {
    var lang = $("html").attr("lang");
    $("#popupCkeditorWebModal>div>div>div.modal-body>*").remove();

    $.ajax({
        type: "GET",
        dataType: 'json',
        url: webservice + "GetPopup",
        headers: {"authorization": getCookie("token")},
        data: {lang: lang, popupid: popupid, platform: "web"},
        success: function (response) {
            if (response.status === "SUCCESS") {
                $("#popupCkeditorWebModal>div>div>div.modal-body").append("<div>" + response.text[0].content + "</div>");
                $("#popupCkeditorWebModal").modal();
            } else {
                checkSessionExpired(response.replymsg);
                $("#errorModal>div>div>div.modal-body").html(response.replymsg);
                $("#errorModal").modal();
            }
        },
        error: function (XMLHttpRequest) {

        },
        complete: function () {
            $(".se-pre-con").fadeOut("fast");
        }
    });
}

function checkHttpStats(hyperlink) {
    if (hyperlink == undefined || hyperlink == "")
        return "";
    else {
        if (hyperlink.indexOf('http') == 0) {
            return hyperlink
        } else {
            return "http://" + hyperlink;
        }
    }
}

function appendRelationSelector() {
    var html = "";
    var lang = $("html").attr("lang");

    if (lang == cimbwebsitelanga) {
        if (definecountrycode == "dev")
            html += "<option value='dev'>Dev</option>";

        if (definecountrycode == "international" || definecountrycode == "sg") {
            html += "<option value='in'>" + inlangtitlea + "</option>";
            html += "<option value='sg'>" + sglangtitlea + "</option>";
        } else {
            html += "<option value='in'>" + inlangtitlea + "</option>";
            html += "<option value='my'>" + mylangtitlea + "</option>";
            html += "<option value='id'>" + idlangtitlea + "</option>";
            html += "<option value='sg'>" + sglangtitlea + "</option>";
            html += "<option value='th'>" + thlangtitlea + "</option>";
        }
    } else if (lang == cimbwebsitelangb) {
        if (definecountrycode == "dev")
            html += "<option value='dev'>开发</option>";

        if (definecountrycode == "international" || definecountrycode == "sg") {
            html += "<option value='in'>" + inlangtitleb + "</option>";
            html += "<option value='sg'>" + sglangtitleb + "</option>";
        } else {
            html += "<option value='in'>" + inlangtitleb + "</option>";
            html += "<option value='my'>" + mylangtitleb + "</option>";
            html += "<option value='id'>" + idlangtitleb + "</option>";
            html += "<option value='sg'>" + sglangtitleb + "</option>";
            html += "<option value='th'>" + thlangtitleb + "</option>";
        }
    } else if (lang == cimbwebsitelangc) {
        if (definecountrycode == "dev")
            html += "<option value='dev'>Dev</option>";

        if (definecountrycode == "international" || definecountrycode == "sg") {
            html += "<option value='in'>" + inlangtitlec + "</option>";
            html += "<option value='sg'>" + sglangtitlec + "</option>";
        } else {
            html += "<option value='in'>" + inlangtitlec + "</option>";
            html += "<option value='my'>" + mylangtitlec + "</option>";
            html += "<option value='id'>" + idlangtitlec + "</option>";
            html += "<option value='sg'>" + sglangtitlec + "</option>";
            html += "<option value='th'>" + thlangtitlec + "</option>";
        }
    }

    html = html.replace("value='" + cimbwebsitezonelanga + "'", "value='" + cimbwebsitezonelanga + "' selected");

    $(".relation-selector").append(html);
    $(".relation-selector").selectpicker('refresh');
}

function mailShareButton() {
    var url = location.href;
    var text = $(".insights-detail-title").html();
    if (text == undefined) {
        text = $(".news-detail-title").val();

        if (text == undefined) {
            text = "";
        }
    }

    location.href = 'mailto:clientservices.sg@cgs-cimb.com?body=' + encodeURIComponent(url) + '&subject=' + encodeURIComponent(text);
}

function facebookShareButton() {
    var url = location.href;
    var text = $(".insights-detail-title").html();
    if (text == undefined) {
        text = $(".news-detail-title").val();

        if (text == undefined) {
            text = "";
        }
    }

    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url) + '&t=' + encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0', '_blank');
}

function twitterShareButton() {
    var url = location.href;
    var text = $(".insights-detail-title").html();
    if (text == undefined) {
        text = $(".news-detail-title").val();

        if (text == undefined) {
            text = "";
        }
    }

    window.open('http://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0', '_blank');
}

function getPhoneLink(phonenum) {
    if (phonenum == undefined)
        return "";
    else
        return phonenum.replaceAll(new RegExp("[^0-9+*#]"), "");
}