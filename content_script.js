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
    // alert("Converted Url: " + converted_url);
    $(this).attr('href', converted_url);
});
