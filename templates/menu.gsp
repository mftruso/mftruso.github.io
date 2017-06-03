	<!-- Fixed navbar -->
    <div class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="<%if (content.rootpath) {%>${content.rootpath}<% } else { %><% }%>">Mike Truso</a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a href="<%if (content.rootpath) {%>${content.rootpath}<% } else { %><% }%>index.html">Home</a></li>
            <li><a href="<%if (content.rootpath) {%>${content.rootpath}<% } else { %><% }%>about.html">About</a></li>
          </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="https://www.linkedin.com/in/michaeltruso/" title="LinkedIn"><i class="icon-linkedin"></i></a></li>
                <li><a href="https://github.com/mftruso" title="Github"><i class="icon-github"></i></a></li>
                <li><a href="https://keybase.io/miketruso" title="Keybase"><i class="icon-key"></i></a></li>
            </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>
    <div class="container">