// Désactive le clic droit et les raccourcis des outils de développement.
// Ces blocages gênent un visiteur normal, pas quelqu'un qui sait ouvrir les outils autrement.
(function(){
 document.addEventListener("contextmenu",function(e){e.preventDefault()});
 document.addEventListener("dragstart",function(e){if(e.target.tagName==="IMG")e.preventDefault()});
 document.addEventListener("keydown",function(e){
  var k=(e.key||"").toLowerCase(),c=e.ctrlKey||e.metaKey;
  if(k==="f12"||(c&&e.shiftKey&&"ijc".indexOf(k)>-1)||(c&&k==="u")||(e.metaKey&&e.altKey&&"iju".indexOf(k)>-1)){e.preventDefault();e.stopPropagation()}
 },true);
})();
