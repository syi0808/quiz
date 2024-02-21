export const mockOpentdbHtml = `<html lang="en"><head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<title>Open Trivia DB: Free to use, user-contributed trivia question database.</title>

<meta name="description" content="Free to use, user-contributed trivia question database.">
<meta name="keywords" content="trivia, database, triviadb">
<meta name="viewport" content="width=device-width, initial-scale=1">

<meta property="og:title" content="Open Trivia DB">
<meta property="og:description" content="Free to use, user-contributed trivia questions!">
<meta property="og:type" content="website">
<meta property="og:url" content="https://opentdb.com/">
<meta property="og:image" content="https://opentdb.com/images/share.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1000">
<meta property="og:image:height" content="1000">

<meta name="theme-color" content="#87c5f1">

<!-- Bootstrap Core CSS -->
<link rel="stylesheet" href="https://opentdb.com/css/bootstrap.min.css" type="text/css">

<!-- Custom Fonts -->
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="https://opentdb.com/font-awesome/css/font-awesome.min.css" type="text/css">

<!-- Plugin CSS -->
<link rel="stylesheet" href="https://opentdb.com/css/animate.min.css" type="text/css">

<!-- Custom CSS -->
<link rel="stylesheet" href="https://opentdb.com/css/colorbox.css" type="text/css">

<!-- Custom CSS -->
<link rel="stylesheet" href="https://opentdb.com/css/trivia.css" type="text/css">

<!-- Menu Dropdowns -->
<style> ul.nav li.dropdown:hover ul.dropdown-menu { display: block; } </style>

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn"t work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

<!-- jQuery -->
<script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=G-G8T1P7E2LZ&amp;cx=c&amp;_slc=1"></script><script async="" src="https://www.google-analytics.com/analytics.js"></script><script src="https://opentdb.com/js/jquery.js"></script>

<!-- Bootstrap Core JavaScript -->
<script src="https://opentdb.com/js/bootstrap.min.js"></script>

<!-- Plugin JavaScript -->
<script src="https://opentdb.com/js/jquery.easing.min.js"></script>
<script src="https://opentdb.com/js/jquery.fittext.js"></script>

<!-- Colorbox JavaScript -->
<script src="https://opentdb.com/js/jquery.colorbox.min.js"></script>

<!-- Google Analytics -->
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-93030703-1', 'auto');
    ga('send', 'pageview');
</script>
</head>
<body id="page-top">
<nav id="mainNav" class="navbar navbar-default">

<div class="container-fluid">
  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
    <span class="sr-only">Toggle navigation</span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
  </button>
  
  <a class="navbar-brand page-scroll" href="https://opentdb.com"><div id="banner"></div></a>
  
  <!-- Collect the nav links, forms, and other content for toggling -->
  <div class="collapse navbar-collapse" id="navbar">
    <ul class="nav navbar-nav navbar-right">
      <li><a href="https://opentdb.com/browse.php"><i class="fa fa-bars"></i> Browse</a></li>
      <li><a href="https://opentdb.com/trivia_add_question.php"><i class="fa fa-plus"></i> Add New Questions</a></li>
      <li><a href="https://opentdb.com/api_config.php"><i class="fa fa-gears"></i> API</a></li>
      <li><a href="http://forums.pixeltailgames.com/"><i class="fa fa-comments"></i> Discuss</a></li>
<li><a href="https://opentdb.com/login.php"><i class="fa fa-sign-in"></i> Login</a></li>
</ul>
</div>
<!-- /.navbar-collapse -->
</div>
<!-- /.container-fluid -->
</nav>

<div class="container">
<h2> Trivia API </h2>
<p>The Open Trivia Database provides a completely free JSON API for use in programming projects.
Use of this API does not require a API Key, just generate the URL below use it in your own application to retrieve trivia questions.</p>
<p>All data provided by the API is available under the Creative Commons Attribution-ShareAlike 4.0 International License. <a href="https://creativecommons.org/licenses/by-sa/4.0/"><img src="https://licensebuttons.net/l/by-sa/4.0/80x15.png"></a></p>

<button class="btn btn-xs btn-primary btn-block" role="button" data-toggle="collapse" data-parent="#apiInfo" href="#apiInfo" aria-expanded="false" aria-controls="apiInfo">API Documentation</button>
<div class="collapse" id="apiInfo">
<div class="well">
  <h3>Getting Started</h3>
  <p>
    To get started using the Open Trivia DB API, use this URL: <input type="text" class="form-control" value="https://opentdb.com/api.php?amount=10" readonly="">
    For more settings or help using the API, read along below. Alternatively, you can use the helper form to craft your specific query.
  </p>

  <h3>Session Tokens</h3>
  <p>
     Session Tokens are unique keys that will help keep track of the questions the API has already retrieved. By appending a Session Token to a API Call, the API will never give you the same
     question twice. Over the lifespan of a Session Token, there will eventually reach a point where you have exhausted all the possible questions in the database. At this point, the API will
     respond with the approperate "Response Code". From here, you can either "Reset" the Token, which will wipe all past memory, or you can ask for a new one.
     <br>
     <br>
     <i><b>Session Tokens will be deleted after 6 hours of inactivity.</b></i>
   </p>
   <p>
    Using a Session Token: <input type="text" class="form-control" value="https://opentdb.com/api.php?amount=10&amp;token=YOURTOKENHERE" readonly="">
   </p>
   <p>
    Retrieve a Session Token: <input type="text" class="form-control" value="https://opentdb.com/api_token.php?command=request" readonly="">
   </p>
   <p>
    Reset a Session Token:  <input type="text" class="form-control" value="https://opentdb.com/api_token.php?command=reset&amp;token=YOURTOKENHERE" readonly="">
   </p>

   <h3>Response Codes</h3>
  <p>
    The API appends a "Response Code" to each API Call to help tell developers what the API is doing.
  </p>
  <ul>
    <li> Code 0: <b>Success</b>           Returned results successfully.</li>
    <li> Code 1: <b>No Results</b>        Could not return results. The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)</li>
    <li> Code 2: <b>Invalid Parameter</b> Contains an invalid parameter. Arguements passed in aren't valid. (Ex. Amount = Five)</li>
    <li> Code 3: <b>Token Not Found</b>   Session Token does not exist.</li>
    <li> Code 4: <b>Token Empty</b>       Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.</li>
            <li> Code 5: <b>Rate Limit</b>        Too many requests have occurred. Each IP can only access the API once every 5 seconds.</li>
  </ul>

  <h3>Encoding Types</h3>
  <p>
    The Open Trivia DB may contain questions which contain Unicode or Special Characters. For this reason, the API returns results in a encoded format. You can specify the desired encoding format
    using the examples below. If the encode type is not present in the URL, it will follow the default encoding.
  </p>
  <p>
    API Call with Encode Type (urlLegacy, url3986, base64):<input type="text" class="form-control" value="https://opentdb.com/api.php?amount=10&amp;encode=url3986" readonly="">
  </p>

  Example Sentence (Non Encoded): "Don't forget that π = 3.14 &amp; doesn't equal 3."
  <ul>
    <li><b>Default Encoding (HTML Codes):</b> <input type="text" class="form-control" value="Don&amp;&zwnj;#039;t forget that &amp;&zwnj;pi; = 3.14 &amp;&zwnj;amp; doesn&amp;&zwnj;#039;t equal 3." readonly=""></li>
    <li><b>Legacy URL Encoding:</b> <input type="text" class="form-control" value="Don%27t+forget+that+%CF%80+%3D+3.14+%26+doesn%27t+equal+3." readonly=""></li>
    <li><b>URL Encoding (<a href="https://www.ietf.org/rfc/rfc3986.txt">RFC 3986</a>):</b> <input type="text" class="form-control" value="Don%27t%20forget%20that%20%CF%80%20%3D%203.14%20%26%20doesn%27t%20equal%203." readonly=""></li>
    <li><b>Base64 Encoding:</b> <input type="text" class="form-control" value="RG9uJ3QgZm9yZ2V0IHRoYXQgz4AgPSAzLjE0ICYgZG9lc24ndCBlcXVhbCAzLg==" readonly=""></li>
  </ul>

  <h3>Helper API Tools</h3>
  <p>
    There are some functions in the API which can be useful to developers.
  </p>
  <p>
    <b>Category Lookup:</b> Returns the entire list of categories and ids in the database.
    <input type="text" class="form-control" value="https://opentdb.com/api_category.php" readonly="">
  </p>
  <p>
    <b>Category Question Count Lookup:</b> Returns the number of questions in the database, in a specific category.
    <input type="text" class="form-control" value="https://opentdb.com/api_count.php?category=CATEGORY_ID_HERE" readonly="">
  </p>
  <p>
    <b>Global Question Count Lookup:</b> Returns the number of ALL questions in the database. Total, Pending, Verified, and Rejected.
    <input type="text" class="form-control" value="https://opentdb.com/api_count_global.php" readonly="">
  </p>

  <h3>Limitations</h3>
  <ul>
     <li>Only 1 Category can be requested per API Call. To get questions from any category, don't specify a category.</li>
     <li>A Maximum of 50 Questions can be retrieved per call.</li>
   </ul>
</div>
</div>

<form action="" method="post" class="form-api">
<h2 class="form-signin-heading">API Helper</h2>

<label for="trivia_amount">Number of Questions:</label>
<input type="number" name="trivia_amount" id="trivia_amount" class="form-control" min="1" max="50" value="10">

<br>

<label for="trivia_category">Select Category: </label>
<select name="trivia_category" class="form-control">
  <option value="any">Any Category</option>
  <option value="9">General Knowledge</option><option value="10">Entertainment: Books</option><option value="11">Entertainment: Film</option><option value="12">Entertainment: Music</option><option value="13">Entertainment: Musicals &amp; Theatres</option><option value="14">Entertainment: Television</option><option value="15">Entertainment: Video Games</option><option value="16">Entertainment: Board Games</option><option value="17">Science &amp; Nature</option><option value="18">Science: Computers</option><option value="19">Science: Mathematics</option><option value="20">Mythology</option><option value="21">Sports</option><option value="22">Geography</option><option value="23">History</option><option value="24">Politics</option><option value="25">Art</option><option value="26">Celebrities</option><option value="27">Animals</option><option value="28">Vehicles</option><option value="29">Entertainment: Comics</option><option value="30">Science: Gadgets</option><option value="31">Entertainment: Japanese Anime &amp; Manga</option><option value="32">Entertainment: Cartoon &amp; Animations</option>		</select>

<br>

<label for="trivia_difficulty">Select Difficulty: </label>
<select name="trivia_difficulty" class="form-control">
  <option value="any">Any Difficulty</option>
  <option value="easy">Easy</option>
  <option value="medium">Medium</option>
  <option value="hard">Hard</option>
</select>

<br>

<label for="trivia_type">Select Type: </label>
<select name="trivia_type" class="form-control">&gt;
  <option value="any">Any Type</option>
  <option value="multiple">Multiple Choice</option>
  <option value="boolean">True / False</option>
</select>

<br>

<label for="trivia_encode">Select Encoding: </label>
<select name="trivia_encode" class="form-control">&gt;
  <option value="default">Default Encoding</option>
  <option value="urlLegacy">Legacy URL Encoding</option>
  <option value="url3986">URL Encoding (RFC 3986)</option>
  <option value="base64">Base64 Encoding</option>
</select>

<input type="hidden" name="token" value="473c194958dc0d96cff52dfede55f22a8e0ade328213c9be82cb232636fd7cec">

<br>

<button class="btn btn-lg btn-primary btn-block" type="submit">Generate API URL</button>
</form>
</div>
<div id="cboxOverlay" style="display: none;"></div><div id="colorbox" class="" role="dialog" tabindex="-1" style="display: none;"><div id="cboxWrapper"><div><div id="cboxTopLeft" style="float: left;"></div><div id="cboxTopCenter" style="float: left;"></div><div id="cboxTopRight" style="float: left;"></div></div><div style="clear: left;"><div id="cboxMiddleLeft" style="float: left;"></div><div id="cboxContent" style="float: left;"><div id="cboxTitle" style="float: left;"></div><div id="cboxCurrent" style="float: left;"></div><button type="button" id="cboxPrevious"></button><button type="button" id="cboxNext"></button><button id="cboxSlideshow"></button><div id="cboxLoadingOverlay" style="float: left;"></div><div id="cboxLoadingGraphic" style="float: left;"></div></div><div id="cboxMiddleRight" style="float: left;"></div></div><div style="clear: left;"><div id="cboxBottomLeft" style="float: left;"></div><div id="cboxBottomCenter" style="float: left;"></div><div id="cboxBottomRight" style="float: left;"></div></div></div><div style="position: absolute; width: 9999px; visibility: hidden; display: none; max-width: none;"></div></div></body></html>`;
