/*
(function() {
  var links = document.getElementsByTagName('a');
  var query = '?';
  for (var i = 0; i < links.length; i++) {
    if (links[i].href.indexOf('#disqus_thread') >= 0) {
       query += 'url' + i + '=' + encodeURIComponent(links[i].href) + '&';
    }
  }
  document.write('<script charset="utf-8" type="text/javascript" src="http://disqus.com/forums/stevenshaw/get_num_replies.js' + query + '"></' + 'script>');
})();
*/

    var disqus_shortname = 'steshaw';

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function () {
        var s = document.createElement('script'); s.async = true;
        s.type = 'text/javascript';
        s.src = 'http://' + disqus_shortname + '.disqus.com/count.js';
        (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
    }());
