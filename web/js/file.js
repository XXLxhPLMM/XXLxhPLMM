var nowye = -1, ye = 0, openye = 0, opennow = 0;//nowye： 现在显示的是哪一页 ; ye：总页数

/**
 * 生成所有文档的链接
 * @param datas 传入json数据
 * **/
function urlShow(datas) {
    var str = "";
    for (var i = 0; i < datas.length; i++) {
        var data = datas[i]
        str += "<div><a " +
            "id='path_h" + i + "' " +
            "onclick='showALl(this)' " +
            "onmouseout='hoverOut(this)' " +
            "onmouseover='hoverShow(this)' " +
            "class='title'>" + data.name + "</a><div id='path" + i + "' class='content_path'>"
        for (var n = 0; n < data.child.length; n++) {
            str += "<p><a " +
                "id='alink_" + ye + "' " +
                "href='doc/" + data.name + "/" + data.child[n] + "' " +
                "target='iframe_show" + ye + "' " +
                "rel='noopener' " +
                "class='a_link' " +
                "onclick='ashow(this," + ye + ")' " +
                "onmouseout='ahoverOut(this," + ye + ")'" +
                "onmouseover='ahoverShow(this," + ye + ")'>" + data.child[n].substring(0, data.child[n].length - 4) + "</a></p>";
            ye++
        }
        str += "</div></div>"
    }

    $("#content_r")[0].innerHTML = str
    for (var i = 0; i < datas.length; i++) {
        $("#path" + i)[0].style.display = "none"
    }
}

/**
 * 控制对应模块的显示和隐藏
 * @param obj  传入 节点对象
 */
function showALl(obj) {
    var o = obj.parentNode.childNodes[1].style
    if (o.display == "none") {
        $("#" + obj.parentNode.childNodes[1].id).slideDown("fast")
        obj.style.background = "rgb(68,157,68)"
    } else {
        o.display = "none"
        obj.style.background = "rgb(49,176,213)"
    }
}

/**
 * 细节颜色控制
 * @param obj 传入要被操作的对象
 */
function hoverShow(obj) {
    var o = obj.parentNode.childNodes[1].style
    if (o.display == "none") {
        obj.style.background = "rgb(49,176,213)"
    } else {
        obj.style.background = "rgb(68,157,68)"
    }
}

/**
 * 细节颜色控制
 * @param obj 传入要被操作的对象
 */
function hoverOut(obj) {
    var o = obj.parentNode.childNodes[1].style
    if (o.display == "none") {
        obj.style.background = "rgb(91,192,222)"
    } else {
        obj.style.background = "rgb(92,184,92)"
    }
}

/**
 * 打开文档
 * @param obj 需要操作的对象
 * @param i 序号
 */
function ashow(obj, i) {
    if (nowye != -1) {
        $("#alink_" + nowye)[0].style.cssText = "" +
            "padding-left: 15px;\n" +
            "    display: block;\n" +
            "    padding-top: 10px;\n" +
            "    height: 35px;\n" +
            "    line-height: 15px;\n" +
            "    font-size: 15px;\n" +
            "    color: rgb(50,59,57);"
    }
    nowye = i;
    obj.style.cssText = "" +
        "padding-left: 30px;\n" +
        "    text-align: center;\n" +
        "    display: block;\n" +
        "    width: 70%;\n" +
        "    z-index: 100;\n" +
        "    color: dodgerblue;\n" +
        "    transform: scale(1.2);"
    //提供显示使用的窗口
    if ($("iframe[name=" + obj.target + "]").length == 0) {
        openye++
        $("#window_r_iframe").append("<iframe name='" + obj.target + "' id='iframe" + openye + "' number='" + openye + "'></iframe>")
        $("#window_r_title")[0].innerHTML += " <span id='open" + openye + "' ><a " +
            "href='#' " +
            "onclick='changeF(" + openye + ")'>" +
            obj.innerText + "</a>" +
            "<img " + "src='img/colse.png' " +
            "class='closeDoc' " +
            "onclick='closeF(" + openye + ")'/></span>"
        opennow = openye
        $("#iframe" + opennow).siblings().css({"display": "none"})
    }

    changeF(parseInt($("iframe[name=" + obj.target + "]").attr("number")))

}

/**
 * 关闭文档
 * @param i
 */
function closeF(i) {
    if (i == opennow) {
        changeF(parseInt($("#iframe" + i).prev().attr("number")))
        if ($("#iframe" + i).prev().length==0){
            changeF(parseInt($("#iframe" + i).next().attr("number")))
        }
    }
    $("#iframe" + i).remove()
    $("#open" + i).remove()
}

/**
 * 切换打开的文档
 * @param objid
 */
function changeF(objid) {
    opennow = objid
    $("#iframe" + objid).css({"display": "inline-block"})
    $("#iframe" + objid).siblings().css({"display": "none"})
    $("#open" + objid).css({"background": "rgb(92,184,92)"})
    $("#open" + objid).siblings().css({"background": "rgb(91,192,222)"})
    // console.log($("#iframe"+objid))
}


function ahoverShow(obj, i) {
    if (nowye != i) {
        obj.style.cssText = "padding-left: 30px;\n" +
            "    text-align: center;\n" +
            "    display: block;\n" +
            "    width: 70%;\n" +
            "    color: rgb(190,64,42);\n" +
            "    transform: scale(1.2);\n" +
            "    transition: .2s;"
    }
}

function ahoverOut(obj, i) {
    if (nowye != i) {
        obj.style.cssText = "padding-left: 15px;\n" +
            "    display: block;\n" +
            "    padding-top: 10px;\n" +
            "    height: 35px;\n" +
            "    line-height: 15px;\n" +
            "    font-size: 15px;\n" +
            "    color: rgb(50,59,57);"
    }
}