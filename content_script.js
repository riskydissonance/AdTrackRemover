var redirection_params = ['redir', 'u'];

var replace_with_target_url = function(url) {
    var regexString = "[\\?&](" + redirection_params.join("|") + ")=([^&#]*)";
    var regex = new RegExp(regexString);
    var results = regex.exec(url);
    // alert("Results: " + results);
    return results == null ? null : results[2];
}

$(document).on("click", "a", function(){
    var converted_url = $(this).attr('href');
    var next = replace_with_target_url(converted_url);
    while(next != null){
      converted_url =  decodeURIComponent(next);
      next = replace_with_target_url(converted_url);
    }
    // Remove any fb added params.
    converted_url = converted_url.replace(/[\\?&](fb|sig|utm_source)=[^&#]*/g, "")
    // If there is no ? to start params anymore, replace the first &
    if(converted_url.includes('&') && !converted_url.includes('?')){
      var indexOfFirstAnd = converted_url.indexOf('&');
      converted_url = converted_url.substring(0, indexOfFirstAnd) + '?' + converted_url.substring(indexOfFirstAnd + 1, converted_url.length);
    }
    // alert("Converted Url: " + converted_url);
    $(this).attr('href', converted_url);
});
