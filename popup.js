$.getJSON(
        "https://www.reddit.com/r/hiphopheads/search.json?q=[Fresh]&restrict_sr=1&t=day",
        function foo(data)
        {
          $.each(
            data.data.children,
            function (i, post) {
            	if(post.data.title.includes("[FRESH]") || post.data.title.includes("[Fresh]") || post.data.title.includes("[fresh]") || post.data.title.includes("leak]") || post.data.title.includes("Leak]") || post.data.title.includes("LEAK]")){
              		$("#songs").append( '<a href="' + post.data.url + '">' + post.data.title.substring(post.data.title.indexOf(']')+2) ) + ' </a>';
             		$("#songs").append( '<br>' );
          		}

          		if(post.data.title.includes("Album]") || post.data.title.includes("album]") || post.data.title.includes("ALBUM]")){
              		$("#albums").append( '<a href="' + post.data.url + '">' + post.data.title.substring(post.data.title.indexOf(']')+2) ) + ' </a>';
             		$("#albums").append( '<br>' );
          		}

          		if(post.data.title.includes("Video]") || post.data.title.includes("video]") || post.data.title.includes("VIDEO]")){
              		$("#videos").append( '<a href="' + post.data.url + '">' + post.data.title.substring(post.data.title.indexOf(']')+2) ) + ' </a>';
             		$("#videos").append( '<br>' );
          		}
            }
          )
        }
      )