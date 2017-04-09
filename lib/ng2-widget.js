window.onload = function(){
    var bundle = function() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "./lib/bundle.js";
        return script;
    };
    var createButton = function() {
        var img = document.createElement("img");
        img.setAttribute("src", "./lib/icon.png");
        img.style.position = "fixed";
        img.style.right = "20px";
        img.style.bottom = "20px";
        img.style.width = "60px";
        img.addEventListener("click", showHide);
        return document.body.appendChild(img);
    };

    function showHide(){
        var trigger = document.getElementById("ng2-frame").style.visibility;
        if(trigger == "hidden"){
            document.getElementById("ng2-frame").style.visibility = "visible";
        } else {
            document.getElementById("ng2-frame").style.visibility = "hidden";
        }
    }

    var createIframe = function() {
        var iframe = document.createElement("iframe");
        iframe.id = "ng2-frame";
        iframe.setAttribute("width","300");
        iframe.setAttribute("height","500");
        iframe.setAttribute("scrollable","auto");
        iframe.style.visibility = "hidden";
        iframe.style.position = "fixed";
        iframe.style.right = "20px";
        iframe.style.bottom = "100px";
        iframe.style.backgroundColor = "white";
        document.body.appendChild(iframe);
        iframe.contentWindow.document.open("text/html", "replace");
        iframe.contentWindow.document.write(
            "<!doctype html>\n" +
            "<body>\n" +
            "   <app>\n LOADING...\n </app>\n" +
            "   </body>\n" +
            "</html>");
        iframe.contentWindow.document.close();
        var importScript = bundle();
        iframe.contentWindow.document.body.appendChild(importScript);
        createButton()
    };

    createIframe();
};