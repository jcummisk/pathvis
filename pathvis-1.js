(function() {

// Localize jQuery variable
var jQuery;

/******** Load jQuery if not present *********/
if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.4.2') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src",
        "http://code.jquery.com/jquery-1.12.4.min.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
              scriptLoadHandler();
          }
      };
    } else {
      script_tag.onload = scriptLoadHandler;
    }
    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
} else {
    // The jQuery version on the window is the one we want to use
    jQuery = window.jQuery;
    main();
}

/******** Called once jQuery has loaded ******/
function scriptLoadHandler() {
    // Restore $ and window.jQuery to their previous values and store the
    // new jQuery in our local jQuery variable
    jQuery = window.jQuery.noConflict(true);
    // Call our main function
    main(); 
}

/******** cstm fnction ********/
function main() { 
    jQuery(document).ready(function($) { 
        /******* Load CSS for iframe*******/
        var css_link = $("<link>", { 
            rel: "stylesheet", 
            type: "text/css", 
            href: "../ifrm.css" 
        });
        css_link.appendTo('head');          

var inspect_script = document.createElement('script');
inspect_script.setAttribute('src','../inspector.source.update.js');
document.head.appendChild(inspect_script);
      

        /******* Load iframe for path widget *******/

var popover = document.createElement('div');
        popover.setAttribute('class', 'pathvis_129');
        popover.setAttribute('id', 'showVisPop'); 
document.body.appendChild(popover); 
var popoverInner = document.createElement('div');
        popoverInner.setAttribute('class', 'PVispopover');
        popover.appendChild(popoverInner); 
var v = ["Name", "Type", "Actor", "Verb"];
v.forEach(function(el) {
    var inputss = document.createElement("input");
    inputss.placeholder = el;
    inputss.value = 'Test ' + el ;
    inputss.id = 'pathvis_text';
    popoverInner.appendChild(inputss);
});
var pop1 = document.createElement('input');
pop1.setAttribute('id', 'updateInput'); 
pop1.setAttribute('placeholder', 'Element'); 
popoverInner.appendChild(pop1); 
var ftrb = ['cancel', 'save'];
ftrb.forEach(function(el) {
    var ebtn = document.createElement('button');
    ebtn.innerHTML = el;
    ebtn.id = el;
    ebtn.className = el;
    popoverInner.appendChild(ebtn);
});
    });
}
})
(); // We call our anonymous function immediately
