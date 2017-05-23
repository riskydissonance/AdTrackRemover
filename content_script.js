var fix_ad_url = function( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}

$(document).on("click", "a", function(){
    var converted_url = $(this).attr('href');
    while(converted_url.includes('?u') || converted_url.includes('&u') || converted_url.includes('?redir') || converted_url.includes('&redir')){
      if(converted_url.includes('?u') || converted_url.includes('&u')){
        converted_url = fix_ad_url('u', converted_url);
      }
      if(converted_url.includes('?redir') || converted_url.includes('&redir')){
        converted_url = fix_ad_url('redir', converted_url);
      }
      converted_url = decodeURIComponent(converted_url);
      alert("Converted URL: " + converted_url);
    }
    $(this).attr('href', converted_url);s
});
