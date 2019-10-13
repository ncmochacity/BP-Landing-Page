BP Landing Page - Find your favorite Gift Card and get an email notification

This is a single-page-application that utilizes Bootstrap 4, PHP and AJAX Post Request that gives users feedback for the gift selection.

Libraries, third-party APIs,Fonts :

Bootstrap
jQuery
Google Fonts

Project Requirements

Utilizes an asynchronous HTTP request :
$.ajax({
      type: "POST",
      url: "post.php",
      data: myID,
      success:function(data){
        msg.html("You selected" + data);
      }
    })
    
when user clicks on the Gift Selection, the button click event gets triggered.
jQuery AJAX method performs a POST request that loads the PHP script file and sends data to the PHP file, PHP script performs a mailTo function 
that sends an email notification to the user and sends a response back --> gift selection as can be seen in the browser Network tab as a HTTP response.

This app is mobile-responsive and user-friendly, in addition to being tested against errors in the Chrome Dev Tool.

How to use this app
Clone the repo in the Command Line
git clone git@github.com:ncmochacity/BP-Landing-Page.git
Download the repo in a zipped file at : https://github.com/ncmochacity/BP-Landing-Page and open the index.html in your browser
