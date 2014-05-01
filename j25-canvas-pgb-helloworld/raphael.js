




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>raphaeljs.com/raphael.js at master · DmitryBaranovskiy/raphaeljs.com</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="DmitryBaranovskiy/raphaeljs.com" name="twitter:title" /><meta content="raphaeljs.com - raphaël web site" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/22726?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/22726?s=400" property="og:image" /><meta content="DmitryBaranovskiy/raphaeljs.com" property="og:title" /><meta content="https://github.com/DmitryBaranovskiy/raphaeljs.com" property="og:url" /><meta content="raphaeljs.com - raphaël web site" property="og:description" />

    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="9A05ED31:6135:91FC57:53462FAC" name="octolytics-dimension-request_id" /><meta content="5605614" name="octolytics-actor-id" /><meta content="hpssjellis" name="octolytics-actor-login" /><meta content="5d2085726cc880cd4648bd358eeb1c753eb58e5e588cfd72ce94d918061c1dbf" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="mmfqat1GN1yRAc0OEuL0olAvART6PsyywiPgYqNYRXQ=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-dfc6417658d5b6b7dd3d1e58c09c2c25dee7506e.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-b564d9e99bd5747d2d0901c61c403e758a5e5ef1.css" media="all" rel="stylesheet" type="text/css" />
    


        <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-8abcd7ea143a104f306837078bc3832700c88b3a.js" type="text/javascript"></script>
        <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-984ce95f5187e6d78b77f2f469b90465c7fd9a1d.js" type="text/javascript"></script>
        
        
      <meta http-equiv="x-pjax-version" content="414fde84db740e83c88e09105b62dd03">

        <link data-pjax-transient rel='permalink' href='/DmitryBaranovskiy/raphaeljs.com/blob/6fa569a6205239926f48ca7d579217f830946522/raphael.js'>

  <meta name="description" content="raphaeljs.com - raphaël web site" />

  <meta content="22726" name="octolytics-dimension-user_id" /><meta content="DmitryBaranovskiy" name="octolytics-dimension-user_login" /><meta content="2435075" name="octolytics-dimension-repository_id" /><meta content="DmitryBaranovskiy/raphaeljs.com" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2435075" name="octolytics-dimension-repository_network_root_id" /><meta content="DmitryBaranovskiy/raphaeljs.com" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/DmitryBaranovskiy/raphaeljs.com/commits/master.atom" rel="alternate" title="Recent Commits to raphaeljs.com:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-gotokey="n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="hpssjellis"
      data-repo="DmitryBaranovskiy/raphaeljs.com"
      data-branch="master"
      data-sha="25a9976033d89f747a93778e952546f23525da71"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="DmitryBaranovskiy/raphaeljs.com" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/hpssjellis" class="name">
        <img alt="Jeremy Ellis" class=" js-avatar" data-user="5605614" height="20" src="https://avatars2.githubusercontent.com/u/5605614?s=140" width="20" /> hpssjellis
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped tooltipped-s" href="/logout" data-method="post" id="logout" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="DmitryBaranovskiy/raphaeljs.com">This repository</span>
    </li>
      <li>
        <a href="/DmitryBaranovskiy/raphaeljs.com/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="mmfqat1GN1yRAc0OEuL0olAvART6PsyywiPgYqNYRXQ=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="2435075" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/DmitryBaranovskiy/raphaeljs.com/watchers">
        16
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/DmitryBaranovskiy/raphaeljs.com/unstar"
      class="minibutton with-count js-toggler-target star-button starred"
      aria-label="Unstar this repository" title="Unstar DmitryBaranovskiy/raphaeljs.com" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/DmitryBaranovskiy/raphaeljs.com/star"
      class="minibutton with-count js-toggler-target star-button unstarred"
      aria-label="Star this repository" title="Star DmitryBaranovskiy/raphaeljs.com" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/DmitryBaranovskiy/raphaeljs.com/stargazers">
        41
      </a>
  </div>

  </li>


        <li>
          <a href="/DmitryBaranovskiy/raphaeljs.com/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of DmitryBaranovskiy/raphaeljs.com to your account" aria-label="Fork your own copy of DmitryBaranovskiy/raphaeljs.com to your account" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/DmitryBaranovskiy/raphaeljs.com/network" class="social-count">25</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/DmitryBaranovskiy" class="url fn" itemprop="url" rel="author"><span itemprop="title">DmitryBaranovskiy</span></a></span><span class="path-divider">/</span><strong><a href="/DmitryBaranovskiy/raphaeljs.com" class="js-current-repository js-repo-home-link">raphaeljs.com</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/DmitryBaranovskiy/raphaeljs.com" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /DmitryBaranovskiy/raphaeljs.com">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/DmitryBaranovskiy/raphaeljs.com/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /DmitryBaranovskiy/raphaeljs.com/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>2</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/DmitryBaranovskiy/raphaeljs.com/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /DmitryBaranovskiy/raphaeljs.com/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/DmitryBaranovskiy/raphaeljs.com/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /DmitryBaranovskiy/raphaeljs.com/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/DmitryBaranovskiy/raphaeljs.com/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /DmitryBaranovskiy/raphaeljs.com/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/DmitryBaranovskiy/raphaeljs.com/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /DmitryBaranovskiy/raphaeljs.com/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/DmitryBaranovskiy/raphaeljs.com.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/DmitryBaranovskiy/raphaeljs.com.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:DmitryBaranovskiy/raphaeljs.com.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:DmitryBaranovskiy/raphaeljs.com.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/DmitryBaranovskiy/raphaeljs.com" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/DmitryBaranovskiy/raphaeljs.com" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="github-windows://openRepo/https://github.com/DmitryBaranovskiy/raphaeljs.com" class="minibutton sidebar-button" title="Save DmitryBaranovskiy/raphaeljs.com to your computer and use it in GitHub Desktop." aria-label="Save DmitryBaranovskiy/raphaeljs.com to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/DmitryBaranovskiy/raphaeljs.com/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download DmitryBaranovskiy/raphaeljs.com as a zip file"
                   title="Download DmitryBaranovskiy/raphaeljs.com as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:a850f62571123767a563c1d33c69144b -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/DmitryBaranovskiy/raphaeljs.com/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/DmitryBaranovskiy/raphaeljs.com/blob/master/raphael.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/DmitryBaranovskiy/raphaeljs.com" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">raphaeljs.com</span></a></span></span><span class="separator"> / </span><strong class="final-path">raphael.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="raphael.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/DmitryBaranovskiy/raphaeljs.com/contributors/master/raphael.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>8 lines (8 sloc)</span>
          <span class="meta-divider"></span>
        <span>82.968 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="github-windows://openRepo/https://github.com/DmitryBaranovskiy/raphaeljs.com?branch=master&amp;filepath=raphael.js" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/DmitryBaranovskiy/raphaeljs.com/edit/master/raphael.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/DmitryBaranovskiy/raphaeljs.com/raw/master/raphael.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/DmitryBaranovskiy/raphaeljs.com/blame/master/raphael.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/DmitryBaranovskiy/raphaeljs.com/commits/master/raphael.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/DmitryBaranovskiy/raphaeljs.com/delete/master/raphael.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'>// ┌─────────────────────────────────────────────────────────────────────┐ \\</div><div class='line' id='LC2'>// │ Raphaël 2.0 - JavaScript Vector Library                             │ \\</div><div class='line' id='LC3'>// ├─────────────────────────────────────────────────────────────────────┤ \\</div><div class='line' id='LC4'>// │ Copyright (c) 2008-2011 Dmitry Baranovskiy (http://raphaeljs.com)   │ \\</div><div class='line' id='LC5'>// │ Copyright (c) 2008-2011 Sencha Labs (http://sencha.com)             │ \\</div><div class='line' id='LC6'>// │ Licensed under the MIT (http://raphaeljs.com/license.html) license. │ \\</div><div class='line' id='LC7'>// └─────────────────────────────────────────────────────────────────────┘ \\</div><div class='line' id='LC8'>(function(a){var b=&quot;0.3.0&quot;,c=&quot;hasOwnProperty&quot;,d=/[\.\/]/,e=&quot;*&quot;,f=function(){},g=function(a,b){return a-b},h,i,j={n:{}},k=function(a,b){var c=j,d=Array.prototype.slice.call(arguments,2),e=k.listeners(a),f=0,l=!1,m,n=[],o={},p=[],q=[];h=a,i=0;for(var r=0,s=e.length;r&lt;s;r++)&quot;zIndex&quot;in e[r]&amp;&amp;(n.push(e[r].zIndex),e[r].zIndex&lt;0&amp;&amp;(o[e[r].zIndex]=e[r]));n.sort(g);while(n[f]&lt;0){m=o[n[f++]],p.push(m.apply(b,d));if(i)return p}for(r=0;r&lt;s;r++){m=e[r];if(&quot;zIndex&quot;in m)if(m.zIndex==n[f]){p.push(m.apply(b,d));if(i)return p;do{f++,m=o[n[f]],m&amp;&amp;p.push(m.apply(b,d));if(i)return p}while(m)}else o[m.zIndex]=m;else{p.push(m.apply(b,d));if(i)return p}}return p.length?p:null};k.listeners=function(a){var b=a.split(d),c=j,f,g,h,i,k,l,m,n,o=[c],p=[];for(i=0,k=b.length;i&lt;k;i++){n=[];for(l=0,m=o.length;l&lt;m;l++){c=o[l].n,g=[c[b[i]],c[e]],h=2;while(h--)f=g[h],f&amp;&amp;(n.push(f),p=p.concat(f.f||[]))}o=n}return p},k.on=function(a,b){var c=a.split(d),e=j;for(var g=0,h=c.length;g&lt;h;g++)e=e.n,!e[c[g]]&amp;&amp;(e[c[g]]={n:{}}),e=e[c[g]];e.f=e.f||[];for(g=0,h=e.f.length;g&lt;h;g++)if(e.f[g]==b)return f;e.f.push(b);return function(a){+a==+a&amp;&amp;(b.zIndex=+a)}},k.stop=function(){i=1},k.nt=function(a){if(a)return(new RegExp(&quot;(?:\\.|\\/|^)&quot;+a+&quot;(?:\\.|\\/|$)&quot;)).test(h);return h},k.unbind=function(a,b){var f=a.split(d),g,h,i,k=[j];for(var l=0,m=f.length;l&lt;m;l++)for(var n=0;n&lt;k.length;n+=i.length-2){i=[n,1],g=k[n].n;if(f[l]!=e)g[f[l]]&amp;&amp;i.push(g[f[l]]);else for(h in g)g[c](h)&amp;&amp;i.push(g[h]);k.splice.apply(k,i)}for(l=0,m=k.length;l&lt;m;l++){g=k[l];while(g.n){if(b){if(g.f){for(l=0,m=g.f.length;l&lt;m;l++)if(g.f[l]==b){g.f.splice(l,1);break}!g.f.length&amp;&amp;delete g.f}for(h in g.n)if(g.n[c](h)&amp;&amp;g.n[h].f){var o=g.n[h].f;for(l=0,m=o.length;l&lt;m;l++)if(o[l]==b){o.splice(l,1);break}!o.length&amp;&amp;delete g.n[h].f}}else{delete g.f;for(h in g.n)g.n[c](h)&amp;&amp;g.n[h].f&amp;&amp;delete g.n[h].f}g=g.n}}},k.version=b,k.toString=function(){return&quot;You are running Eve &quot;+b},typeof module!=&quot;undefined&quot;&amp;&amp;module.exports?module.exports=k:a.eve=k})(this),function(){function cr(b,d,e,f,h,i){e=Q(e);var j,k,l,m=[],n,o,p,q=b.ms,s={},t={},u={};if(f)for(w=0,x=cl.length;w&lt;x;w++){var v=cl[w];if(v.el.id==d.id&amp;&amp;v.anim==b){v.percent!=e?(cl.splice(w,1),l=1):k=v,d.attr(v.totalOrigin);break}}else f=+t;for(var w=0,x=b.percents.length;w&lt;x;w++){if(b.percents[w]==e||b.percents[w]&gt;f*b.top){e=b.percents[w],o=b.percents[w-1]||0,q=q/b.top*(e-o),n=b.percents[w+1],j=b.anim[e];break}f&amp;&amp;d.attr(b.anim[b.percents[w]])}if(!!j){if(!k){for(attr in j)if(j[g](attr))if(U[g](attr)||d.paper.customAttributes[g](attr)){s[attr]=d.attr(attr),s[attr]==null&amp;&amp;(s[attr]=T[attr]),t[attr]=j[attr];switch(U[attr]){case C:u[attr]=(t[attr]-s[attr])/q;break;case&quot;colour&quot;:s[attr]=a.getRGB(s[attr]);var y=a.getRGB(t[attr]);u[attr]={r:(y.r-s[attr].r)/q,g:(y.g-s[attr].g)/q,b:(y.b-s[attr].b)/q};break;case&quot;path&quot;:var z=bG(s[attr],t[attr]),A=z[1];s[attr]=z[0],u[attr]=[];for(w=0,x=s[attr].length;w&lt;x;w++){u[attr][w]=[0];for(var B=1,D=s[attr][w].length;B&lt;D;B++)u[attr][w][B]=(A[w][B]-s[attr][w][B])/q}break;case&quot;transform&quot;:var E=d._,F=bQ(E[attr],t[attr]);if(F){s[attr]=F.from,t[attr]=F.to,u[attr]=[],u[attr].real=!0;for(w=0,x=s[attr].length;w&lt;x;w++){u[attr][w]=[s[attr][w][0]];for(B=1,D=s[attr][w].length;B&lt;D;B++)u[attr][w][B]=(t[attr][w][B]-s[attr][w][B])/q}}else{var G=d.matrix||new bR,H={_:{transform:E.transform},getBBox:function(){return d.getBBox(1)}};s[attr]=[G.a,G.b,G.c,G.d,G.e,G.f],bO(H,t[attr]),t[attr]=H._.transform,u[attr]=[(H.matrix.a-G.a)/q,(H.matrix.b-G.b)/q,(H.matrix.c-G.c)/q,(H.matrix.d-G.d)/q,(H.matrix.e-G.e)/q,(H.matrix.e-G.f)/q]}break;case&quot;csv&quot;:var I=r(j[attr]).split(c),J=r(s[attr]).split(c);if(attr==&quot;clip-rect&quot;){s[attr]=J,u[attr]=[],w=J.length;while(w--)u[attr][w]=(I[w]-s[attr][w])/q}t[attr]=I;break;default:I=[].concat(j[attr]),J=[].concat(s[attr]),u[attr]=[],w=d.paper.customAttributes[attr].length;while(w--)u[attr][w]=((I[w]||0)-(J[w]||0))/q}}var K=j.easing,L=a.easing_formulas[K];if(!L){L=r(K).match(N);if(L&amp;&amp;L.length==5){var M=L;L=function(a){return cp(a,+M[1],+M[2],+M[3],+M[4],q)}}else L=be}p=j.start||b.start||+(new Date),v={anim:b,percent:e,timestamp:p,start:p+(b.del||0),status:0,initstatus:f||0,stop:!1,ms:q,easing:L,from:s,diff:u,to:t,el:d,callback:j.callback,prev:o,next:n,repeat:i||b.times,origin:d.attr(),totalOrigin:h},cl.push(v);if(f&amp;&amp;!k&amp;&amp;!l){v.stop=!0,v.start=new Date-q*f;if(cl.length==1)return cn()}l&amp;&amp;(v.start=new Date-v.ms*f),cl.length==1&amp;&amp;cm(cn)}else k.initstatus=f,k.start=new Date-k.ms*f;eve(&quot;anim.start.&quot;+d.id,d,b)}}function cq(a,b){var c=[],d={};this.ms=b,this.times=1;if(a){for(var e in a)a[g](e)&amp;&amp;(d[Q(e)]=a[e],c.push(Q(e)));c.sort(bc)}this.anim=d,this.top=c[c.length-1],this.percents=c}function cp(a,b,c,d,e,f){function o(a,b){var c,d,e,f,j,k;for(e=a,k=0;k&lt;8;k++){f=m(e)-a;if(z(f)&lt;b)return e;j=(3*i*e+2*h)*e+g;if(z(j)&lt;1e-6)break;e=e-f/j}c=0,d=1,e=a;if(e&lt;c)return c;if(e&gt;d)return d;while(c&lt;d){f=m(e);if(z(f-a)&lt;b)return e;a&gt;f?c=e:d=e,e=(d-c)/2+c}return e}function n(a,b){var c=o(a,b);return((l*c+k)*c+j)*c}function m(a){return((i*a+h)*a+g)*a}var g=3*b,h=3*(d-b)-g,i=1-g-h,j=3*c,k=3*(e-c)-j,l=1-j-k;return n(a,1/(200*f))}function cd(){return this.x+q+this.y+q+this.width+&quot; × &quot;+this.height}function cc(){return this.x+q+this.y}function bR(a,b,c,d,e,f){a!=null?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function bw(a){var b=[];for(var c=0,d=a.length;d-2&gt;c;c+=2){var e=[{x:+a[c],y:+a[c+1]},{x:+a[c],y:+a[c+1]},{x:+a[c+2],y:+a[c+3]},{x:+a[c+4],y:+a[c+5]}];d-4==c?(e[0]={x:+a[c-2],y:+a[c-1]},e[3]=e[2]):c&amp;&amp;(e[0]={x:+a[c-2],y:+a[c-1]}),b.push([&quot;C&quot;,(-e[0].x+6*e[1].x+e[2].x)/6,(-e[0].y+6*e[1].y+e[2].y)/6,(e[1].x+6*e[2].x-e[3].x)/6,(e[1].y+6*e[2].y-e[3].y)/6,e[2].x,e[2].y])}return b}function bv(){return this.hex}function bt(a,b,c){function d(){var e=Array.prototype.slice.call(arguments,0),f=e.join(&quot;␀&quot;),h=d.cache=d.cache||{},i=d.count=d.count||[];if(h[g](f)){bs(i,f);return c?c(h[f]):h[f]}i.length&gt;=1e3&amp;&amp;delete h[i.shift()],i.push(f),h[f]=a[m](b,e);return c?c(h[f]):h[f]}return d}function bs(a,b){for(var c=0,d=a.length;c&lt;d;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function a(c){if(a.is(c,&quot;function&quot;))return b?c():eve.on(&quot;DOMload&quot;,c);if(a.is(c,E)){var e=c,f=a._engine.create[m](a,e.splice(0,3+a.is(e[0],C))),h=f.set(),i=0,j=e.length,k;for(;i&lt;j;i++)k=e[i]||{},d[g](k.type)&amp;&amp;h.push(f[k.type]().attr(k));return h}var l=Array.prototype.slice.call(arguments,0);if(a.is(l[l.length-1],&quot;function&quot;)){var n=l.pop();return b?n.call(a._engine.create[m](a,l)):eve.on(&quot;DOMload&quot;,function(){n.call(a._engine.create[m](a,l))})}return a._engine.create[m](a,arguments)}a.version=&quot;2.0.0&quot;,a.eve=eve;var b,c=/[, ]+/,d={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},e=/\{(\d+)\}/g,f=&quot;prototype&quot;,g=&quot;hasOwnProperty&quot;,h={doc:document,win:window},i={was:Object.prototype[g].call(h.win,&quot;Raphael&quot;),is:h.win.Raphael},j=function(){this.customAttributes={}},k,l=&quot;appendChild&quot;,m=&quot;apply&quot;,n=&quot;concat&quot;,o=&quot;createTouch&quot;in h.doc,p=&quot;&quot;,q=&quot; &quot;,r=String,s=&quot;split&quot;,t=&quot;click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel&quot;.split(q),u={mousedown:&quot;touchstart&quot;,mousemove:&quot;touchmove&quot;,mouseup:&quot;touchend&quot;},v=r.prototype.toLowerCase,w=Math,x=w.max,y=w.min,z=w.abs,A=w.pow,B=w.PI,C=&quot;number&quot;,D=&quot;string&quot;,E=&quot;array&quot;,F=&quot;toString&quot;,G=&quot;fill&quot;,H=Object.prototype.toString,I={},J=&quot;push&quot;,K=a._ISURL=/^url\([&#39;&quot;]?([^\)]+?)[&#39;&quot;]?\)$/i,L=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,M={NaN:1,Infinity:1,&quot;-Infinity&quot;:1},N=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,O=w.round,P=&quot;setAttribute&quot;,Q=parseFloat,R=parseInt,S=r.prototype.toUpperCase,T=a._availableAttrs={&quot;arrow-end&quot;:&quot;none&quot;,&quot;arrow-start&quot;:&quot;none&quot;,blur:0,&quot;clip-rect&quot;:&quot;0 0 1e9 1e9&quot;,cursor:&quot;default&quot;,cx:0,cy:0,fill:&quot;#fff&quot;,&quot;fill-opacity&quot;:1,font:&#39;10px &quot;Arial&quot;&#39;,&quot;font-family&quot;:&#39;&quot;Arial&quot;&#39;,&quot;font-size&quot;:&quot;10&quot;,&quot;font-style&quot;:&quot;normal&quot;,&quot;font-weight&quot;:400,gradient:0,height:0,href:&quot;http://raphaeljs.com/&quot;,opacity:1,path:&quot;M0,0&quot;,r:0,rx:0,ry:0,src:&quot;&quot;,stroke:&quot;#000&quot;,&quot;stroke-dasharray&quot;:&quot;&quot;,&quot;stroke-linecap&quot;:&quot;butt&quot;,&quot;stroke-linejoin&quot;:&quot;butt&quot;,&quot;stroke-miterlimit&quot;:0,&quot;stroke-opacity&quot;:1,&quot;stroke-width&quot;:1,target:&quot;_blank&quot;,&quot;text-anchor&quot;:&quot;middle&quot;,title:&quot;Raphael&quot;,transform:&quot;&quot;,width:0,x:0,y:0},U=a._availableAnimAttrs={blur:C,&quot;clip-rect&quot;:&quot;csv&quot;,cx:C,cy:C,fill:&quot;colour&quot;,&quot;fill-opacity&quot;:C,&quot;font-size&quot;:C,height:C,opacity:C,path:&quot;path&quot;,r:C,rx:C,ry:C,stroke:&quot;colour&quot;,&quot;stroke-opacity&quot;:C,&quot;stroke-width&quot;:C,transform:&quot;transform&quot;,width:C,x:C,y:C},V=/\s*,\s*/,W={hs:1,rg:1},X=/,?([achlmqrstvxz]),?/gi,Y=/([achlmrqstvz])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?\s*,?\s*)+)/ig,Z=/([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?\s*,?\s*)+)/ig,$=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)\s*,?\s*/ig,_=a._radial_gradient=/^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/,ba={},bb=function(a,b){return a.key-b.key},bc=function(a,b){return Q(a)-Q(b)},bd=function(){},be=function(a){return a},bf=a._rectPath=function(a,b,c,d,e){if(e)return[[&quot;M&quot;,a+e,b],[&quot;l&quot;,c-e*2,0],[&quot;a&quot;,e,e,0,0,1,e,e],[&quot;l&quot;,0,d-e*2],[&quot;a&quot;,e,e,0,0,1,-e,e],[&quot;l&quot;,e*2-c,0],[&quot;a&quot;,e,e,0,0,1,-e,-e],[&quot;l&quot;,0,e*2-d],[&quot;a&quot;,e,e,0,0,1,e,-e],[&quot;z&quot;]];return[[&quot;M&quot;,a,b],[&quot;l&quot;,c,0],[&quot;l&quot;,0,d],[&quot;l&quot;,-c,0],[&quot;z&quot;]]},bg=function(a,b,c,d){d==null&amp;&amp;(d=c);return[[&quot;M&quot;,a,b],[&quot;m&quot;,0,-d],[&quot;a&quot;,c,d,0,1,1,0,2*d],[&quot;a&quot;,c,d,0,1,1,0,-2*d],[&quot;z&quot;]]},bh=a._getPath={path:function(a){return a.attr(&quot;path&quot;)},circle:function(a){var b=a.attrs;return bg(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return bg(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return bf(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return bf(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return bf(b.x,b.y,b.width,b.height)}},bi=function(a,b){if(!b)return a;var c,d,e,f,g;a=bG(a);for(e=0,ii=a.length;e&lt;ii;e++){g=a[e];for(f=1,jj=g.length;f&lt;jj;f+=2)c=b.x(g[f],g[f+1]),d=b.y(g[f],g[f+1]),g[f]=c,g[f+1]=d}return a};a._g=h,a.type=h.win.SVGAngle||h.doc.implementation.hasFeature(&quot;http://www.w3.org/TR/SVG11/feature#BasicStructure&quot;,&quot;1.1&quot;)?&quot;SVG&quot;:&quot;VML&quot;;if(a.type==&quot;VML&quot;){var bj=h.doc.createElement(&quot;div&quot;),bk;bj.innerHTML=&#39;&lt;v:shape adj=&quot;1&quot;/&gt;&#39;,bk=bj.firstChild,bk.style.behavior=&quot;url(#default#VML)&quot;;if(!bk||typeof bk.adj!=&quot;object&quot;)return a.type=p;bj=null}a.svg=!(a.vml=a.type==&quot;VML&quot;),a._Paper=j,a.fn=k=j.prototype=a.prototype,a._id=0,a._oid=0,a.is=function(a,b){b=v.call(b);if(b==&quot;finite&quot;)return!M[g](+a);if(b==&quot;array&quot;)return a instanceof Array;return b==&quot;null&quot;&amp;&amp;a===null||b==typeof a||b==&quot;object&quot;&amp;&amp;a===Object(a)||b==&quot;array&quot;&amp;&amp;Array.isArray&amp;&amp;Array.isArray(a)||H.call(a).slice(8,-1).toLowerCase()==b},a.angle=function(b,c,d,e,f,g){if(f==null){var h=b-d,i=c-e;if(!h&amp;&amp;!i)return 0;return(180+w.atan2(-i,-h)*180/B+360)%360}return a.angle(b,c,f,g)-a.angle(d,e,f,g)},a.rad=function(a){return a%360*B/180},a.deg=function(a){return a*180/B%360},a.snapTo=function(b,c,d){d=a.is(d,&quot;finite&quot;)?d:10;if(a.is(b,E)){var e=b.length;while(e--)if(z(b[e]-c)&lt;=d)return b[e]}else{b=+b;var f=c%b;if(f&lt;d)return c-f;if(f&gt;b-d)return c-f+b}return c};var bl=a._createUUID=function(a,b){return function(){return&quot;xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx&quot;.replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=w.random()*16|0,c=a==&quot;x&quot;?b:b&amp;3|8;return c.toString(16)});a.setWindow=function(b){eve(&quot;setWindow&quot;,a,h.win,b),h.win=b,h.doc=h.win.document,initWin&amp;&amp;initWin(h.win)};var bm=function(b){if(a.vml){var c=/^\s+|\s+$/g,d;try{var e=new ActiveXObject(&quot;htmlfile&quot;);e.write(&quot;&lt;body&gt;&quot;),e.close(),d=e.body}catch(f){d=createPopup().document.body}var g=d.createTextRange();bm=bt(function(a){try{d.style.color=r(a).replace(c,p);var b=g.queryCommandValue(&quot;ForeColor&quot;);b=(b&amp;255)&lt;&lt;16|b&amp;65280|(b&amp;16711680)&gt;&gt;&gt;16;return&quot;#&quot;+(&quot;000000&quot;+b.toString(16)).slice(-6)}catch(e){return&quot;none&quot;}})}else{var i=h.doc.createElement(&quot;i&quot;);i.title=&quot;Raphaël Colour Picker&quot;,i.style.display=&quot;none&quot;,h.doc.body.appendChild(i),bm=bt(function(a){i.style.color=a;return h.doc.defaultView.getComputedStyle(i,p).getPropertyValue(&quot;color&quot;)})}return bm(b)},bn=function(){return&quot;hsb(&quot;+[this.h,this.s,this.b]+&quot;)&quot;},bo=function(){return&quot;hsl(&quot;+[this.h,this.s,this.l]+&quot;)&quot;},bp=function(){return this.hex},bq=function(b,c,d){c==null&amp;&amp;a.is(b,&quot;object&quot;)&amp;&amp;&quot;r&quot;in b&amp;&amp;&quot;g&quot;in b&amp;&amp;&quot;b&quot;in b&amp;&amp;(d=b.b,c=b.g,b=b.r);if(c==null&amp;&amp;a.is(b,D)){var e=a.getRGB(b);b=e.r,c=e.g,d=e.b}if(b&gt;1||c&gt;1||d&gt;1)b/=255,c/=255,d/=255;return[b,c,d]},br=function(b,c,d,e){b*=255,c*=255,d*=255;var f={r:b,g:c,b:d,hex:a.rgb(b,c,d),toString:bp};a.is(e,&quot;finite&quot;)&amp;&amp;(f.opacity=e);return f};a.color=function(b){var c;a.is(b,&quot;object&quot;)&amp;&amp;&quot;h&quot;in b&amp;&amp;&quot;s&quot;in b&amp;&amp;&quot;b&quot;in b?(c=a.hsb2rgb(b),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):a.is(b,&quot;object&quot;)&amp;&amp;&quot;h&quot;in b&amp;&amp;&quot;s&quot;in b&amp;&amp;&quot;l&quot;in b?(c=a.hsl2rgb(b),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):(a.is(b,&quot;string&quot;)&amp;&amp;(b=a.getRGB(b)),a.is(b,&quot;object&quot;)&amp;&amp;&quot;r&quot;in b&amp;&amp;&quot;g&quot;in b&amp;&amp;&quot;b&quot;in b?(c=a.rgb2hsl(b),b.h=c.h,b.s=c.s,b.l=c.l,c=a.rgb2hsb(b),b.v=c.b):(b={hex:&quot;none&quot;},crl.r=b.g=b.b=b.h=b.s=b.v=b.l=-1)),b.toString=bp;return b},a.hsb2rgb=function(a,b,c,d){this.is(a,&quot;object&quot;)&amp;&amp;&quot;h&quot;in a&amp;&amp;&quot;s&quot;in a&amp;&amp;&quot;b&quot;in a&amp;&amp;(c=a.b,b=a.s,a=a.h,d=a.o),a*=360;var e,f,g,h,i;a=a%360/60,i=c*b,h=i*(1-z(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return br(e,f,g,d)},a.hsl2rgb=function(a,b,c,d){this.is(a,&quot;object&quot;)&amp;&amp;&quot;h&quot;in a&amp;&amp;&quot;s&quot;in a&amp;&amp;&quot;l&quot;in a&amp;&amp;(c=a.l,b=a.s,a=a.h);if(a&gt;1||b&gt;1||c&gt;1)a/=360,b/=100,c/=100;a*=360;var e,f,g,h,i;a=a%360/60,i=2*b*(c&lt;.5?c:1-c),h=i*(1-z(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return br(e,f,g,d)},a.rgb2hsb=function(a,b,c){c=bq(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;f=x(a,b,c),g=f-y(a,b,c),d=g==0?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=g==0?0:g/f;return{h:d,s:e,b:f,toString:bn}},a.rgb2hsl=function(a,b,c){c=bq(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;g=x(a,b,c),h=y(a,b,c),i=g-h,d=i==0?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=i==0?0:f&lt;.5?i/(2*f):i/(2-2*f);return{h:d,s:e,l:f,toString:bo}},a._path2string=function(){return this.join(&quot;,&quot;).replace(X,&quot;$1&quot;)};var bu=a._preload=function(a,b){var c=h.doc.createElement(&quot;img&quot;);c.style.cssText=&quot;position:absolute;left:-9999em;top-9999em&quot;,c.onload=function(){b.call(this),this.onload=null,h.doc.body.removeChild(this)},c.onerror=function(){h.doc.body.removeChild(this)},h.doc.body.appendChild(c),c.src=a};a.getRGB=bt(function(b){if(!b||!!((b=r(b)).indexOf(&quot;-&quot;)+1))return{r:-1,g:-1,b:-1,hex:&quot;none&quot;,error:1,toString:bv};if(b==&quot;none&quot;)return{r:-1,g:-1,b:-1,hex:&quot;none&quot;,toString:bv};!W[g](b.toLowerCase().substring(0,2))&amp;&amp;b.charAt()!=&quot;#&quot;&amp;&amp;(b=bm(b));var c,d,e,f,h,i,j,k=b.match(L);if(k){k[2]&amp;&amp;(f=R(k[2].substring(5),16),e=R(k[2].substring(3,5),16),d=R(k[2].substring(1,3),16)),k[3]&amp;&amp;(f=R((i=k[3].charAt(3))+i,16),e=R((i=k[3].charAt(2))+i,16),d=R((i=k[3].charAt(1))+i,16)),k[4]&amp;&amp;(j=k[4].split(V),d=Q(j[0]),j[0].slice(-1)==&quot;%&quot;&amp;&amp;(d*=2.55),e=Q(j[1]),j[1].slice(-1)==&quot;%&quot;&amp;&amp;(e*=2.55),f=Q(j[2]),j[2].slice(-1)==&quot;%&quot;&amp;&amp;(f*=2.55),k[1].toLowerCase().slice(0,4)==&quot;rgba&quot;&amp;&amp;(h=Q(j[3])),j[3]&amp;&amp;j[3].slice(-1)==&quot;%&quot;&amp;&amp;(h/=100));if(k[5]){j=k[5].split(V),d=Q(j[0]),j[0].slice(-1)==&quot;%&quot;&amp;&amp;(d*=2.55),e=Q(j[1]),j[1].slice(-1)==&quot;%&quot;&amp;&amp;(e*=2.55),f=Q(j[2]),j[2].slice(-1)==&quot;%&quot;&amp;&amp;(f*=2.55),(j[0].slice(-3)==&quot;deg&quot;||j[0].slice(-1)==&quot;°&quot;)&amp;&amp;(d/=360),k[1].toLowerCase().slice(0,4)==&quot;hsba&quot;&amp;&amp;(h=Q(j[3])),j[3]&amp;&amp;j[3].slice(-1)==&quot;%&quot;&amp;&amp;(h/=100);return a.hsb2rgb(d,e,f,h)}if(k[6]){j=k[6].split(V),d=Q(j[0]),j[0].slice(-1)==&quot;%&quot;&amp;&amp;(d*=2.55),e=Q(j[1]),j[1].slice(-1)==&quot;%&quot;&amp;&amp;(e*=2.55),f=Q(j[2]),j[2].slice(-1)==&quot;%&quot;&amp;&amp;(f*=2.55),(j[0].slice(-3)==&quot;deg&quot;||j[0].slice(-1)==&quot;°&quot;)&amp;&amp;(d/=360),k[1].toLowerCase().slice(0,4)==&quot;hsla&quot;&amp;&amp;(h=Q(j[3])),j[3]&amp;&amp;j[3].slice(-1)==&quot;%&quot;&amp;&amp;(h/=100);return a.hsl2rgb(d,e,f,h)}k={r:d,g:e,b:f,toString:bv},k.hex=&quot;#&quot;+(16777216|f|e&lt;&lt;8|d&lt;&lt;16).toString(16).slice(1),a.is(h,&quot;finite&quot;)&amp;&amp;(k.opacity=h);return k}return{r:-1,g:-1,b:-1,hex:&quot;none&quot;,error:1,toString:bv}},a),a.hsb=bt(function(b,c,d){return a.hsb2rgb(b,c,d).hex}),a.hsl=bt(function(b,c,d){return a.hsl2rgb(b,c,d).hex}),a.rgb=bt(function(a,b,c){return&quot;#&quot;+(16777216|c|b&lt;&lt;8|a&lt;&lt;16).toString(16).slice(1)}),a.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);b.h+=.075,b.h&gt;1&amp;&amp;(b.h=0,b.s-=.2,b.s&lt;=0&amp;&amp;(this.getColor.start={h:0,s:1,b:b.b}));return c.hex},a.getColor.reset=function(){delete this.start},a.parsePathString=bt(function(b){if(!b)return null;var c={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},d=[];a.is(b,E)&amp;&amp;a.is(b[0],E)&amp;&amp;(d=by(b)),d.length||r(b).replace(Y,function(a,b,e){var f=[],g=b.toLowerCase();e.replace($,function(a,b){b&amp;&amp;f.push(+b)}),g==&quot;m&quot;&amp;&amp;f.length&gt;2&amp;&amp;(d.push([b][n](f.splice(0,2))),g=&quot;l&quot;,b=b==&quot;m&quot;?&quot;l&quot;:&quot;L&quot;);if(g==&quot;r&quot;)d.push([b][n](f));else while(f.length&gt;=c[g]){d.push([b][n](f.splice(0,c[g])));if(!c[g])break}}),d.toString=a._path2string;return d}),a.parseTransformString=bt(function(b){if(!b)return null;var c={r:3,s:4,t:2,m:6},d=[];a.is(b,E)&amp;&amp;a.is(b[0],E)&amp;&amp;(d=by(b)),d.length||r(b).replace(Z,function(a,b,c){var e=[],f=v.call(b);c.replace($,function(a,b){b&amp;&amp;e.push(+b)}),d.push([f][n](e))}),d.toString=a._path2string;return d}),a.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=A(j,3),l=A(j,2),m=i*i,n=m*i,o=k*a+l*3*i*c+j*3*i*i*e+n*g,p=k*b+l*3*i*d+j*3*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,x=j*e+i*g,y=j*f+i*h,z=90-w.atan2(q-s,r-t)*180/B;(q&gt;s||r&lt;t)&amp;&amp;(z+=180);return{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:x,y:y},alpha:z}};var bx=bt(function(a){if(!a)return{x:0,y:0,width:0,height:0};a=bG(a);var b=0,c=0,d=[],e=[],f;for(var g=0,h=a.length;g&lt;h;g++){f=a[g];if(f[0]==&quot;M&quot;)b=f[1],c=f[2],d.push(b),e.push(c);else{var i=bF(b,c,f[1],f[2],f[3],f[4],f[5],f[6]);d=d[n](i.min.x,i.max.x),e=e[n](i.min.y,i.max.y),b=f[5],c=f[6]}}var j=y[m](0,d),k=y[m](0,e);return{x:j,y:k,width:x[m](0,d)-j,height:x[m](0,e)-k}},null,function(a){return{x:a.x,y:a.y,width:a.width,height:a.height}}),by=function(b){var c=[];if(!a.is(b,E)||!a.is(b&amp;&amp;b[0],E))b=a.parsePathString(b);for(var d=0,e=b.length;d&lt;e;d++){c[d]=[];for(var f=0,g=b[d].length;f&lt;g;f++)c[d][f]=b[d][f]}c.toString=a._path2string;return c},bz=a._pathToRelative=bt(function(b){if(!a.is(b,E)||!a.is(b&amp;&amp;b[0],E))b=a.parsePathString(b);var c=[],d=0,e=0,f=0,g=0,h=0;b[0][0]==&quot;M&quot;&amp;&amp;(d=b[0][1],e=b[0][2],f=d,g=e,h++,c.push([&quot;M&quot;,d,e]));for(var i=h,j=b.length;i&lt;j;i++){var k=c[i]=[],l=b[i];if(l[0]!=v.call(l[0])){k[0]=v.call(l[0]);switch(k[0]){case&quot;a&quot;:k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]-d).toFixed(3),k[7]=+(l[7]-e).toFixed(3);break;case&quot;v&quot;:k[1]=+(l[1]-e).toFixed(3);break;case&quot;m&quot;:f=l[1],g=l[2];default:for(var m=1,n=l.length;m&lt;n;m++)k[m]=+(l[m]-(m%2?d:e)).toFixed(3)}}else{k=c[i]=[],l[0]==&quot;m&quot;&amp;&amp;(f=l[1]+d,g=l[2]+e);for(var o=0,p=l.length;o&lt;p;o++)c[i][o]=l[o]}var q=c[i].length;switch(c[i][0]){case&quot;z&quot;:d=f,e=g;break;case&quot;h&quot;:d+=+c[i][q-1];break;case&quot;v&quot;:e+=+c[i][q-1];break;default:d+=+c[i][q-2],e+=+c[i][q-1]}}c.toString=a._path2string;return c},0,by),bA=a._pathToAbsolute=bt(function(b){if(!a.is(b,E)||!a.is(b&amp;&amp;b[0],E))b=a.parsePathString(b);if(!b||!b.length)return[[&quot;M&quot;,0,0]];var c=[],d=0,e=0,f=0,g=0,h=0;b[0][0]==&quot;M&quot;&amp;&amp;(d=+b[0][1],e=+b[0][2],f=d,g=e,h++,c[0]=[&quot;M&quot;,d,e]);for(var i,j,k=h,l=b.length;k&lt;l;k++){c.push(i=[]),j=b[k];if(j[0]!=S.call(j[0])){i[0]=S.call(j[0]);switch(i[0]){case&quot;A&quot;:i[1]=j[1],i[2]=j[2],i[3]=j[3],i[4]=j[4],i[5]=j[5],i[6]=+(j[6]+d),i[7]=+(j[7]+e);break;case&quot;V&quot;:i[1]=+j[1]+e;break;case&quot;H&quot;:i[1]=+j[1]+d;break;case&quot;R&quot;:var m=[d,e][n](j.slice(1));for(var o=2,p=m.length;o&lt;p;o++)m[o]=+m[o]+d,m[++o]=+m[o]+e;c.pop(),c=c[n](bw(m));break;case&quot;M&quot;:f=+j[1]+d,g=+j[2]+e;default:for(o=1,p=j.length;o&lt;p;o++)i[o]=+j[o]+(o%2?d:e)}}else if(j[0]==&quot;R&quot;)m=[d,e][n](j.slice(1)),c.pop(),c=c[n](bw(m)),i=[&quot;R&quot;][n](j.slice(-2));else for(var q=0,r=j.length;q&lt;r;q++)i[q]=j[q];switch(i[0]){case&quot;Z&quot;:d=f,e=g;break;case&quot;H&quot;:d=i[1];break;case&quot;V&quot;:e=i[1];break;case&quot;M&quot;:f=i[i.length-2],g=i[i.length-1];default:d=i[i.length-2],e=i[i.length-1]}}c.toString=a._path2string;return c},null,by),bB=function(a,b,c,d){return[a,b,c,d,c,d]},bC=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},bD=function(a,b,c,d,e,f,g,h,i,j){var k=B*120/180,l=B/180*(+e||0),m=[],o,p=bt(function(a,b,c){var d=a*w.cos(c)-b*w.sin(c),e=a*w.sin(c)+b*w.cos(c);return{x:d,y:e}});if(!j){o=p(a,b,-l),a=o.x,b=o.y,o=p(h,i,-l),h=o.x,i=o.y;var q=w.cos(B/180*e),r=w.sin(B/180*e),s=(a-h)/2,t=(b-i)/2,u=s*s/(c*c)+t*t/(d*d);u&gt;1&amp;&amp;(u=w.sqrt(u),c=u*c,d=u*d);var v=c*c,x=d*d,y=(f==g?-1:1)*w.sqrt(z((v*x-v*t*t-x*s*s)/(v*t*t+x*s*s))),A=y*c*t/d+(a+h)/2,C=y*-d*s/c+(b+i)/2,D=w.asin(((b-C)/d).toFixed(9)),E=w.asin(((i-C)/d).toFixed(9));D=a&lt;A?B-D:D,E=h&lt;A?B-E:E,D&lt;0&amp;&amp;(D=B*2+D),E&lt;0&amp;&amp;(E=B*2+E),g&amp;&amp;D&gt;E&amp;&amp;(D=D-B*2),!g&amp;&amp;E&gt;D&amp;&amp;(E=E-B*2)}else D=j[0],E=j[1],A=j[2],C=j[3];var F=E-D;if(z(F)&gt;k){var G=E,H=h,I=i;E=D+k*(g&amp;&amp;E&gt;D?1:-1),h=A+c*w.cos(E),i=C+d*w.sin(E),m=bD(h,i,c,d,e,0,g,H,I,[E,G,A,C])}F=E-D;var J=w.cos(D),K=w.sin(D),L=w.cos(E),M=w.sin(E),N=w.tan(F/4),O=4/3*c*N,P=4/3*d*N,Q=[a,b],R=[a+O*K,b-P*J],S=[h+O*M,i-P*L],T=[h,i];R[0]=2*Q[0]-R[0],R[1]=2*Q[1]-R[1];if(j)return[R,S,T][n](m);m=[R,S,T][n](m).join().split(&quot;,&quot;);var U=[];for(var V=0,W=m.length;V&lt;W;V++)U[V]=V%2?p(m[V-1],m[V],l).y:p(m[V],m[V+1],l).x;return U},bE=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:A(j,3)*a+A(j,2)*3*i*c+j*3*i*i*e+A(i,3)*g,y:A(j,3)*b+A(j,2)*3*i*d+j*3*i*i*f+A(i,3)*h}},bF=bt(function(a,b,c,d,e,f,g,h){var i=e-2*c+a-(g-2*e+c),j=2*(c-a)-2*(e-c),k=a-c,l=(-j+w.sqrt(j*j-4*i*k))/2/i,n=(-j-w.sqrt(j*j-4*i*k))/2/i,o=[b,h],p=[a,g],q;z(l)&gt;&quot;1e12&quot;&amp;&amp;(l=.5),z(n)&gt;&quot;1e12&quot;&amp;&amp;(n=.5),l&gt;0&amp;&amp;l&lt;1&amp;&amp;(q=bE(a,b,c,d,e,f,g,h,l),p.push(q.x),o.push(q.y)),n&gt;0&amp;&amp;n&lt;1&amp;&amp;(q=bE(a,b,c,d,e,f,g,h,n),p.push(q.x),o.push(q.y)),i=f-2*d+b-(h-2*f+d),j=2*(d-b)-2*(f-d),k=b-d,l=(-j+w.sqrt(j*j-4*i*k))/2/i,n=(-j-w.sqrt(j*j-4*i*k))/2/i,z(l)&gt;&quot;1e12&quot;&amp;&amp;(l=.5),z(n)&gt;&quot;1e12&quot;&amp;&amp;(n=.5),l&gt;0&amp;&amp;l&lt;1&amp;&amp;(q=bE(a,b,c,d,e,f,g,h,l),p.push(q.x),o.push(q.y)),n&gt;0&amp;&amp;n&lt;1&amp;&amp;(q=bE(a,b,c,d,e,f,g,h,n),p.push(q.x),o.push(q.y));return{min:{x:y[m](0,p),y:y[m](0,o)},max:{x:x[m](0,p),y:x[m](0,o)}}}),bG=a._path2curve=bt(function(a,b){var c=bA(a),d=b&amp;&amp;bA(b),e={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g=function(a,b){var c,d;if(!a)return[&quot;C&quot;,b.x,b.y,b.x,b.y,b.x,b.y];!(a[0]in{T:1,Q:1})&amp;&amp;(b.qx=b.qy=null);switch(a[0]){case&quot;M&quot;:b.X=a[1],b.Y=a[2];break;case&quot;A&quot;:a=[&quot;C&quot;][n](bD[m](0,[b.x,b.y][n](a.slice(1))));break;case&quot;S&quot;:c=b.x+(b.x-(b.bx||b.x)),d=b.y+(b.y-(b.by||b.y)),a=[&quot;C&quot;,c,d][n](a.slice(1));break;case&quot;T&quot;:b.qx=b.x+(b.x-(b.qx||b.x)),b.qy=b.y+(b.y-(b.qy||b.y)),a=[&quot;C&quot;][n](bC(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case&quot;Q&quot;:b.qx=a[1],b.qy=a[2],a=[&quot;C&quot;][n](bC(b.x,b.y,a[1],a[2],a[3],a[4]));break;case&quot;L&quot;:a=[&quot;C&quot;][n](bB(b.x,b.y,a[1],a[2]));break;case&quot;H&quot;:a=[&quot;C&quot;][n](bB(b.x,b.y,a[1],b.y));break;case&quot;V&quot;:a=[&quot;C&quot;][n](bB(b.x,b.y,b.x,a[1]));break;case&quot;Z&quot;:a=[&quot;C&quot;][n](bB(b.x,b.y,b.X,b.Y))}return a},h=function(a,b){if(a[b].length&gt;7){a[b].shift();var e=a[b];while(e.length)a.splice(b++,0,[&quot;C&quot;][n](e.splice(0,6)));a.splice(b,1),k=x(c.length,d&amp;&amp;d.length||0)}},i=function(a,b,e,f,g){a&amp;&amp;b&amp;&amp;a[g][0]==&quot;M&quot;&amp;&amp;b[g][0]!=&quot;M&quot;&amp;&amp;(b.splice(g,0,[&quot;M&quot;,f.x,f.y]),e.bx=0,e.by=0,e.x=a[g][1],e.y=a[g][2],k=x(c.length,d&amp;&amp;d.length||0))};for(var j=0,k=x(c.length,d&amp;&amp;d.length||0);j&lt;k;j++){c[j]=g(c[j],e),h(c,j),d&amp;&amp;(d[j]=g(d[j],f)),d&amp;&amp;h(d,j),i(c,d,e,f,j),i(d,c,f,e,j);var l=c[j],o=d&amp;&amp;d[j],p=l.length,q=d&amp;&amp;o.length;e.x=l[p-2],e.y=l[p-1],e.bx=Q(l[p-4])||e.x,e.by=Q(l[p-3])||e.y,f.bx=d&amp;&amp;(Q(o[q-4])||f.x),f.by=d&amp;&amp;(Q(o[q-3])||f.y),f.x=d&amp;&amp;o[q-2],f.y=d&amp;&amp;o[q-1]}return d?[c,d]:c},null,by),bH=a._parseDots=bt(function(b){var c=[];for(var d=0,e=b.length;d&lt;e;d++){var f={},g=b[d].match(/^([^:]*):?([\d\.]*)/);f.color=a.getRGB(g[1]);if(f.color.error)return null;f.color=f.color.hex,g[2]&amp;&amp;(f.offset=g[2]+&quot;%&quot;),c.push(f)}for(d=1,e=c.length-1;d&lt;e;d++)if(!c[d].offset){var h=Q(c[d-1].offset||0),i=0;for(var j=d+1;j&lt;e;j++)if(c[j].offset){i=c[j].offset;break}i||(i=100,j=e),i=Q(i);var k=(i-h)/(j-d+1);for(;d&lt;j;d++)h+=k,c[d].offset=h+&quot;%&quot;}return c}),bI=a._tear=function(a,b){a==b.top&amp;&amp;(b.top=a.prev),a==b.bottom&amp;&amp;(b.bottom=a.next),a.next&amp;&amp;(a.next.prev=a.prev),a.prev&amp;&amp;(a.prev.next=a.next)},bJ=a._tofront=function(a,b){b.top!==a&amp;&amp;(bI(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},bK=a._toback=function(a,b){b.bottom!==a&amp;&amp;(bI(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},bL=a._insertafter=function(a,b,c){bI(a,c),b==c.top&amp;&amp;(c.top=a),b.next&amp;&amp;(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},bM=a._insertbefore=function(a,b,c){bI(a,c),b==c.bottom&amp;&amp;(c.bottom=a),b.prev&amp;&amp;(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},bN=function(a){return function(){throw new Error(&quot;Raphaël: you are calling to method “&quot;+a+&quot;” of removed object&quot;)}},bO=a._extractTransform=function(b,c){if(c==null)return b._.transform;c=r(c).replace(/\.{3}|\u2026/g,b._.transform||p);var d=a.parseTransformString(c),e=0,f=0,g=0,h=1,i=1,j=b._,k=new bR;j.transform=d||[];if(d)for(var l=0,m=d.length;l&lt;m;l++){var n=d[l],o=n.length,q;n[0]=r(n[0]).toLowerCase(),n[0]==&quot;t&quot;&amp;&amp;o==3?k.translate(n[1],n[2]):n[0]==&quot;r&quot;?o==2?(q=q||b.getBBox(1),k.rotate(n[1],q.x+q.width/2,q.y+q.height/2),e+=n[1]):o==4&amp;&amp;(k.rotate(n[1],n[2],n[3]),e+=n[1]):n[0]==&quot;s&quot;?o==2||o==3?(q=q||b.getBBox(1),k.scale(n[1],n[o-1],q.x+q.width/2,q.y+q.height/2),h*=n[1],i*=n[o-1]):o==5&amp;&amp;(k.scale(n[1],n[2],n[3],n[4]),h*=n[1],i*=n[2]):n[0]==&quot;m&quot;&amp;&amp;o==7&amp;&amp;k.add(n[1],n[2],n[3],n[4],n[5],n[6]),j.dirtyT=1,b.matrix=k}b.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,h==1&amp;&amp;i==1&amp;&amp;!e&amp;&amp;j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1},bP=function(a){switch(a[0]){case&quot;t&quot;:return[&quot;t&quot;,0,0];case&quot;m&quot;:return[&quot;m&quot;,1,0,0,1,0,0];case&quot;r&quot;:return a.length==4?[&quot;r&quot;,0,a[2],a[3]]:[&quot;r&quot;,0];case&quot;s&quot;:return a.length==5?[&quot;s&quot;,1,1,a[3],a[4]]:a.length==3?[&quot;s&quot;,1,1]:[&quot;s&quot;,1]}},bQ=a._equaliseTransform=function(b,c){c=r(c).replace(/\.{3}|\u2026/g,b),b=a.parseTransformString(b)||[],c=a.parseTransformString(c)||[];var d=x(b.length,c.length),e=[],f=[],g=0,h,i,j,k;for(;g&lt;d;g++){j=b[g]||bP(c[g]),k=c[g]||bP(j);if(j[0]!=k[0]||j[0]==&quot;r&quot;&amp;&amp;(j[2]!=k[2]||j[3]!=k[3])||j[0]==&quot;s&quot;&amp;&amp;(j[3]!=k[3]||j[4]!=k[4]))return;e[g]=[],f[g]=[];for(h=0,i=x(j.length,k.length);h&lt;i;h++)h in j&amp;&amp;(e[g][h]=j[h]),h in k&amp;&amp;(f[g][h]=k[h])}return{from:e,to:f}};a._getContainer=function(b,c,d,e){var f;f=e==null&amp;&amp;!a.is(b,&quot;object&quot;)?h.doc.getElementById(b):b;if(f!=null){if(f.tagName)return c==null?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:c,height:d};return{container:1,x:b,y:c,width:d,height:e}}},a.pathToRelative=bz,a._engine={},a.path2curve=bG,a.matrix=function(a,b,c,d,e,f){return new bR(a,b,c,d,e,f)},function(b){function d(a){var b=w.sqrt(c(a));a[0]&amp;&amp;(a[0]/=b),a[1]&amp;&amp;(a[1]/=b)}function c(a){return a[0]*a[0]+a[1]*a[1]}b.add=function(a,b,c,d,e,f){var g=[[],[],[]],h=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],i=[[a,c,e],[b,d,f],[0,0,1]],j,k,l,m;a&amp;&amp;a instanceof bR&amp;&amp;(i=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]);for(j=0;j&lt;3;j++)for(k=0;k&lt;3;k++){m=0;for(l=0;l&lt;3;l++)m+=h[j][l]*i[l][k];g[j][k]=m}this.a=g[0][0],this.b=g[1][0],this.c=g[0][1],this.d=g[1][1],this.e=g[0][2],this.f=g[1][2]},b.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new bR(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},b.clone=function(){return new bR(this.a,this.b,this.c,this.d,this.e,this.f)},b.translate=function(a,b){this.add(1,0,0,1,a,b)},b.scale=function(a,b,c,d){b==null&amp;&amp;(b=a),(c||d)&amp;&amp;this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&amp;&amp;this.add(1,0,0,1,-c,-d)},b.rotate=function(b,c,d){b=a.rad(b),c=c||0,d=d||0;var e=+w.cos(b).toFixed(9),f=+w.sin(b).toFixed(9);this.add(e,f,-f,e,c,d),this.add(1,0,0,1,-c,-d)},b.x=function(a,b){return a*this.a+b*this.c+this.e},b.y=function(a,b){return a*this.b+b*this.d+this.f},b.get=function(a){return+this[r.fromCharCode(97+a)].toFixed(4)},b.toString=function(){return a.svg?&quot;matrix(&quot;+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+&quot;)&quot;:[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},b.toFilter=function(){return&quot;progid:DXImageTransform.Microsoft.Matrix(M11=&quot;+this.get(0)+&quot;, M12=&quot;+this.get(2)+&quot;, M21=&quot;+this.get(1)+&quot;, M22=&quot;+this.get(3)+&quot;, Dx=&quot;+this.get(4)+&quot;, Dy=&quot;+this.get(5)+&quot;, sizingmethod=&#39;auto expand&#39;)&quot;},b.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},b.split=function(){var b={};b.dx=this.e,b.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];b.scalex=w.sqrt(c(e[0])),d(e[0]),b.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*b.shear,e[1][1]-e[0][1]*b.shear],b.scaley=w.sqrt(c(e[1])),d(e[1]),b.shear/=b.scaley;var f=-e[0][1],g=e[1][1];g&lt;0?(b.rotate=a.deg(w.acos(g)),f&lt;0&amp;&amp;(b.rotate=360-b.rotate)):b.rotate=a.deg(w.asin(f)),b.isSimple=!+b.shear.toFixed(9)&amp;&amp;(b.scalex.toFixed(9)==b.scaley.toFixed(9)||!b.rotate),b.isSuperSimple=!+b.shear.toFixed(9)&amp;&amp;b.scalex.toFixed(9)==b.scaley.toFixed(9)&amp;&amp;!b.rotate,b.noRotation=!+b.shear.toFixed(9)&amp;&amp;!b.rotate;return b},b.toTransformString=function(){var a=this.split();return a.isSimple?&quot;t&quot;+[a.dx,a.dy]+&quot;s&quot;+[a.scalex,a.scaley,0,0]+&quot;r&quot;+[a.rotate,0,0]:&quot;m&quot;+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(bR.prototype);var bS=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);navigator.vendor==&quot;Apple Computer, Inc.&quot;&amp;&amp;(bS&amp;&amp;bS[1]&lt;4||navigator.platform.slice(0,2)==&quot;iP&quot;)||navigator.vendor==&quot;Google Inc.&quot;&amp;&amp;bS&amp;&amp;bS[1]&lt;8?k.safari=function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:&quot;none&quot;});setTimeout(function(){a.remove()})}:k.safari=bd;var bT=function(){this.returnValue=!1},bU=function(){return this.originalEvent.preventDefault()},bV=function(){this.cancelBubble=!0},bW=function(){return this.originalEvent.stopPropagation()},bX=function(){if(h.doc.addEventListener)return function(a,b,c,d){var e=o&amp;&amp;u[b]?u[b]:b,f=function(e){var f=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,i=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,j=e.clientX+i,k=e.clientY+f;if(o&amp;&amp;u[g](b))for(var l=0,m=e.targetTouches&amp;&amp;e.targetTouches.length;l&lt;m;l++)if(e.targetTouches[l].target==a){var n=e;e=e.targetTouches[l],e.originalEvent=n,e.preventDefault=bU,e.stopPropagation=bW;break}return c.call(d,e,j,k)};a.addEventListener(e,f,!1);return function(){a.removeEventListener(e,f,!1);return!0}};if(h.doc.attachEvent)return function(a,b,c,d){var e=function(a){a=a||h.win.event;var b=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;a.preventDefault=a.preventDefault||bT,a.stopPropagation=a.stopPropagation||bV;return c.call(d,a,f,g)};a.attachEvent(&quot;on&quot;+b,e);var f=function(){a.detachEvent(&quot;on&quot;+b,e);return!0};return f}}(),bY=[],bZ=function(a){var b=a.clientX,c=a.clientY,d=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,f,g=bY.length;while(g--){f=bY[g];if(o){var i=a.touches.length,j;while(i--){j=a.touches[i];if(j.identifier==f.el._drag.id){b=j.clientX,c=j.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}}else a.preventDefault();var k=f.el.node,l,m=k.nextSibling,n=k.parentNode,p=k.style.display;h.win.opera&amp;&amp;n.removeChild(k),k.style.display=&quot;none&quot;,l=f.el.paper.getElementByPoint(b,c),k.style.display=p,h.win.opera&amp;&amp;(m?n.insertBefore(k,m):n.appendChild(k)),l&amp;&amp;eve(&quot;drag.over.&quot;+f.el.id,f.el,l),b+=e,c+=d,eve(&quot;drag.move.&quot;+f.el.id,f.move_scope||f.el,b-f.el._drag.x,c-f.el._drag.y,b,c,a)}},b$=function(b){a.unmousemove(bZ).unmouseup(b$);var c=bY.length,d;while(c--)d=bY[c],d.el._drag={},eve(&quot;drag.end.&quot;+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,b);bY=[]},b_=a.el={};for(var ca=t.length;ca--;)(function(b){a[b]=b_[b]=function(c,d){a.is(c,&quot;function&quot;)&amp;&amp;(this.events=this.events||[],this.events.push({name:b,f:c,unbind:bX(this.shape||this.node||h.doc,b,c,d||this)}));return this},a[&quot;un&quot;+b]=b_[&quot;un&quot;+b]=function(a){var c=this.events,d=c.length;while(d--)if(c[d].name==b&amp;&amp;c[d].f==a){c[d].unbind(),c.splice(d,1),!c.length&amp;&amp;delete this.events;return this}return this}})(t[ca]);b_.data=function(b,c){var d=ba[this.id]=ba[this.id]||{};if(arguments.length==1){if(a.is(b,&quot;object&quot;)){for(var e in b)b[g](e)&amp;&amp;this.data(e,b[e]);return this}eve(&quot;data.get.&quot;+this.id,this,d[b],b);return d[b]}d[b]=c,eve(&quot;data.set.&quot;+this.id,this,c,b);return this},b_.removeData=function(a){a==null?ba[this.id]={}:ba[this.id]&amp;&amp;delete ba[this.id][a];return this},b_.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},b_.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)},b_.drag=function(b,c,d,e,f,g){function i(i){(i.originalEvent||i).preventDefault();var j=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,k=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft;this._drag.x=i.clientX+k,this._drag.y=i.clientY+j,this._drag.id=i.identifier,!bY.length&amp;&amp;a.mousemove(bZ).mouseup(b$),bY.push({el:this,move_scope:e,start_scope:f,end_scope:g}),c&amp;&amp;eve.on(&quot;drag.start.&quot;+this.id,c),b&amp;&amp;eve.on(&quot;drag.move.&quot;+this.id,b),d&amp;&amp;eve.on(&quot;drag.end.&quot;+this.id,d),eve(&quot;drag.start.&quot;+this.id,f||e||this,i.clientX+k,i.clientY+j,i)}this._drag={},this.mousedown(i);return this},b_.onDragOver=function(a){a?eve.on(&quot;drag.over.&quot;+this.id,a):eve.unbind(&quot;drag.over.&quot;+this.id)},b_.undrag=function(){var b=bY.length;while(b--)bY[b].el==this&amp;&amp;(a.unmousedown(bY[b].start),bY.splice(b++,1),eve.unbind(&quot;drag.*.&quot;+this.id));!bY.length&amp;&amp;a.unmousemove(bZ).unmouseup(b$)},k.circle=function(b,c,d){var e=a._engine.circle(this,b||0,c||0,d||0);this.__set__&amp;&amp;this.__set__.push(e);return e},k.rect=function(b,c,d,e,f){var g=a._engine.rect(this,b||0,c||0,d||0,e||0,f||0);this.__set__&amp;&amp;this.__set__.push(g);return g},k.ellipse=function(b,c,d,e){var f=a._engine.ellipse(this,b||0,c||0,d||0,e||0);this.__set__&amp;&amp;this.__set__.push(f);return f},k.path=function(b){b&amp;&amp;!a.is(b,D)&amp;&amp;!a.is(b[0],E)&amp;&amp;(b+=p);var c=a._engine.path(a.format[m](a,arguments),this);this.__set__&amp;&amp;this.__set__.push(c);return c},k.image=function(b,c,d,e,f){var g=a._engine.image(this,b||&quot;about:blank&quot;,c||0,d||0,e||0,f||0);this.__set__&amp;&amp;this.__set__.push(g);return g},k.text=function(b,c,d){var e=a._engine.text(this,b||0,c||0,r(d));this.__set__&amp;&amp;this.__set__.push(e);return e},k.set=function(b){!a.is(b,&quot;array&quot;)&amp;&amp;(b=Array.prototype.splice.call(arguments,0,arguments.length));var c=new cs(b);this.__set__&amp;&amp;this.__set__.push(c);return c},k.setStart=function(a){this.__set__=a||this.set()},k.setFinish=function(a){var b=this.__set__;delete this.__set__;return b},k.setSize=function(b,c){return a._engine.setSize.call(this,b,c)},k.setViewBox=function(b,c,d,e,f){return a._engine.setViewBox.call(this,b,c,d,e,f)},k.top=k.bottom=null,k.raphael=a;var cb=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,i=b.top+(h.win.pageYOffset||e.scrollTop||d.scrollTop)-f,j=b.left+(h.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:i,x:j}};k.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=h.doc.elementFromPoint(a,b);if(h.win.opera&amp;&amp;e.tagName==&quot;svg&quot;){var f=cb(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var i=d.getIntersectionList(g,null);i.length&amp;&amp;(e=i[i.length-1])}if(!e)return null;while(e.parentNode&amp;&amp;e!=d.parentNode&amp;&amp;!e.raphael)e=e.parentNode;e==c.canvas.parentNode&amp;&amp;(e=d),e=e&amp;&amp;e.raphael?c.getById(e.raphaelid):null;return e},k.getById=function(a){var b=this.bottom;while(b){if(b.id==a)return b;b=b.next}return null},k.forEach=function(a,b){var c=this.bottom;while(c){if(a.call(b,c)===!1)return this;c=c.next}return this},b_.getBBox=function(a){if(this.removed)return{};var b=this._;if(a){if(b.dirty||!b.bboxwt)this.realPath=bh[this.type](this),b.bboxwt=bx(this.realPath),b.bboxwt.toString=cd,b.dirty=0;return b.bboxwt}if(b.dirty||b.dirtyT||!b.bbox){if(b.dirty||!this.realPath)b.bboxwt=0,this.realPath=bh[this.type](this);b.bbox=bx(bi(this.realPath,this.matrix)),b.bbox.toString=cd,b.dirty=b.dirtyT=0}return b.bbox},b_.clone=function(){if(this.removed)return null;return this.paper[this.type]().attr(this.attr())},b_.glow=function(a){if(this.type==&quot;text&quot;)return null;a=a||{};var b={width:(a.width||10)+(+this.attr(&quot;stroke-width&quot;)||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||&quot;#000&quot;},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||bh[this.type](this);f=this.matrix?bi(f,this.matrix):f;for(var g=1;g&lt;c+1;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:&quot;none&quot;,&quot;stroke-linejoin&quot;:&quot;round&quot;,&quot;stroke-linecap&quot;:&quot;round&quot;,&quot;stroke-width&quot;:+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var ce={},cf=function(b,c,d,e,f,g,h,i,j){var k=0,l=100,m=[b,c,d,e,f,g,h,i].join(),n=ce[m],o,p;!n&amp;&amp;(ce[m]=n={data:[]}),n.timer&amp;&amp;clearTimeout(n.timer),n.timer=setTimeout(function(){delete ce[m]},2e3);if(j!=null&amp;&amp;!n.precision){var q=cf(b,c,d,e,f,g,h,i);n.precision=~~q*10,n.data=[]}l=n.precision||l;for(var r=0;r&lt;l+1;r++){n.data[r*l]?p=n.data[r*l]:(p=a.findDotsAtSegment(b,c,d,e,f,g,h,i,r/l),n.data[r*l]=p),r&amp;&amp;(k+=A(A(o.x-p.x,2)+A(o.y-p.y,2),.5));if(j!=null&amp;&amp;k&gt;=j)return p;o=p}if(j==null)return k},cg=function(b,c){return function(d,e,f){d=bG(d);var g,h,i,j,k=&quot;&quot;,l={},m,n=0;for(var o=0,p=d.length;o&lt;p;o++){i=d[o];if(i[0]==&quot;M&quot;)g=+i[1],h=+i[2];else{j=cf(g,h,i[1],i[2],i[3],i[4],i[5],i[6]);if(n+j&gt;e){if(c&amp;&amp;!l.start){m=cf(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),k+=[&quot;C&quot;+m.start.x,m.start.y,m.m.x,m.m.y,m.x,m.y];if(f)return k;l.start=k,k=[&quot;M&quot;+m.x,m.y+&quot;C&quot;+m.n.x,m.n.y,m.end.x,m.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!b&amp;&amp;!c){m=cf(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n);return{x:m.x,y:m.y,alpha:m.alpha}}}n+=j,g=+i[5],h=+i[6]}k+=i.shift()+i}l.end=k,m=b?n:c?l:a.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),m.alpha&amp;&amp;(m={x:m.x,y:m.y,alpha:m.alpha});return m}},ch=cg(1),ci=cg(),cj=cg(0,1);a.getTotalLength=ch,a.getPointAtLength=ci,a.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c&lt;1e-6)return cj(a,b).end;var d=cj(a,c,1);return b?cj(d,b).end:d},b_.getTotalLength=function(){if(this.type==&quot;path&quot;){if(this.node.getTotalLength)return this.node.getTotalLength();return ch(this.attrs.path)}},b_.getPointAtLength=function(a){if(this.type==&quot;path&quot;)return ci(this.attrs.path,a)},b_.getSubpath=function(b,c){if(this.type==&quot;path&quot;)return a.getSubpath(this.attrs.path,b,c)};var ck=a.easing_formulas={linear:function(a){return a},&quot;&lt;&quot;:function(a){return A(a,1.7)},&quot;&gt;&quot;:function(a){return A(a,.48)},&quot;&lt;&gt;&quot;:function(a){var b=.48-a/1.04,c=w.sqrt(.1734+b*b),d=c-b,e=A(z(d),1/3)*(d&lt;0?-1:1),f=-c-b,g=A(z(f),1/3)*(f&lt;0?-1:1),h=e+g+.5;return(1-h)*3*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a=a-1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){if(a==!!a)return a;return A(2,-10*a)*w.sin((a-.075)*2*B/.3)+1},bounce:function(a){var b=7.5625,c=2.75,d;a&lt;1/c?d=b*a*a:a&lt;2/c?(a-=1.5/c,d=b*a*a+.75):a&lt;2.5/c?(a-=2.25/c,d=b*a*a+.9375):(a-=2.625/c,d=b*a*a+.984375);return d}};ck.easeIn=ck[&quot;ease-in&quot;]=ck[&quot;&lt;&quot;],ck.easeOut=ck[&quot;ease-out&quot;]=ck[&quot;&gt;&quot;],ck.easeInOut=ck[&quot;ease-in-out&quot;]=ck[&quot;&lt;&gt;&quot;],ck[&quot;back-in&quot;]=ck.backIn,ck[&quot;back-out&quot;]=ck.backOut;var cl=[],cm=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){setTimeout(a,16)},cn=function(){var b=+(new Date),c=0;for(;c&lt;cl.length;c++){var d=cl[c];if(d.el.removed||d.paused)continue;var e=b-d.start,f=d.ms,h=d.easing,i=d.from,j=d.diff,k=d.to,l=d.t,m=d.el,n={},o;d.initstatus?(e=(d.initstatus*d.anim.top-d.prev)/(d.percent-d.prev)*f,d.status=d.initstatus,delete d.initstatus,d.stop&amp;&amp;cl.splice(c--,1)):d.status=(d.prev+(d.percent-d.prev)*(e/f))/d.anim.top;if(e&lt;0)continue;if(e&lt;f){var p=h(e/f);for(var r in i)if(i[g](r)){switch(U[r]){case C:o=+i[r]+p*f*j[r];break;case&quot;colour&quot;:o=&quot;rgb(&quot;+[co(O(i[r].r+p*f*j[r].r)),co(O(i[r].g+p*f*j[r].g)),co(O(i[r].b+p*f*j[r].b))].join(&quot;,&quot;)+&quot;)&quot;;break;case&quot;path&quot;:o=[];for(var s=0,t=i[r].length;s&lt;t;s++){o[s]=[i[r][s][0]];for(var u=1,v=i[r][s].length;u&lt;v;u++)o[s][u]=+i[r][s][u]+p*f*j[r][s][u];o[s]=o[s].join(q)}o=o.join(q);break;case&quot;transform&quot;:if(j[r].real){o=[];for(s=0,t=i[r].length;s&lt;t;s++){o[s]=[i[r][s][0]];for(u=1,v=i[r][s].length;u&lt;v;u++)o[s][u]=i[r][s][u]+p*f*j[r][s][u]}}else{var w=function(a){return+i[r][a]+p*f*j[r][a]};o=[[&quot;m&quot;,w(0),w(1),w(2),w(3),w(4),w(5)]]}break;case&quot;csv&quot;:if(r==&quot;clip-rect&quot;){o=[],s=4;while(s--)o[s]=+i[r][s]+p*f*j[r][s]}break;default:var x=[].concat(i[r]);o=[],s=m.paper.customAttributes[r].length;while(s--)o[s]=+x[s]+p*f*j[r][s]}n[r]=o}m.attr(n),function(a,b,c){setTimeout(function(){eve(&quot;anim.frame.&quot;+a,b,c)})}(m.id,m,d.anim)}else(function(b,c,d){setTimeout(function(){eve(&quot;anim.frame.&quot;+c.id,c,d),eve(&quot;anim.finish.&quot;+c.id,c,d),a.is(b,&quot;function&quot;)&amp;&amp;b.call(c)})})(d.callback,m,d.anim),m.attr(k),cl.splice(c--,1),d.repeat&gt;1&amp;&amp;!d.next&amp;&amp;cr(d.anim,d.el,d.anim.percents[0],null,d.totalOrigin,d.repeat-1),d.next&amp;&amp;!d.stop&amp;&amp;cr(d.anim,d.el,d.next,null,d.totalOrigin,d.repeat)}a.svg&amp;&amp;m&amp;&amp;m.paper&amp;&amp;m.paper.safari(),cl.length&amp;&amp;cm(cn)},co=function(a){return a&gt;255?255:a&lt;0?0:a};b_.animateWith=function(b,c,d,e,f,g){var h=d?a.animation(d,e,f,g):c;status=b.status(c);return this.animate(h).status(h,status*c.ms/h.ms)},b_.onAnimation=function(a){a?eve.on(&quot;anim.frame.&quot;+this.id,a):eve.unbind(&quot;anim.frame.&quot;+this.id);return this},cq.prototype.delay=function(a){var b=new cq(this.anim,this.ms);b.times=this.times,b.del=+a||0;return b},cq.prototype.repeat=function(a){var b=new cq(this.anim,this.ms);b.del=this.del,b.times=w.floor(x(a,0))||1;return b},a.animation=function(b,c,d,e){if(b instanceof cq)return b;if(a.is(d,&quot;function&quot;)||!d)e=e||d||null,d=null;b=Object(b),c=+c||0;var f={},h,i;for(i in b)b[g](i)&amp;&amp;Q(i)!=i&amp;&amp;Q(i)+&quot;%&quot;!=i&amp;&amp;(h=!0,f[i]=b[i]);if(!h)return new cq(b,c);d&amp;&amp;(f.easing=d),e&amp;&amp;(f.callback=e);return new cq({100:f},c)},b_.animate=function(b,c,d,e){var f=this;if(f.removed){e&amp;&amp;e.call(f);return f}var g=b instanceof cq?b:a.animation(b,c,d,e);cr(g,f,g.percents[0],null,f.attr());return f},b_.setTime=function(a,b){a&amp;&amp;b!=null&amp;&amp;this.status(a,y(b,a.ms)/a.ms);return this},b_.status=function(a,b){var c=[],d=0,e,f;if(b!=null){cr(a,this,-1,y(b,1));return this}e=cl.length;for(;d&lt;e;d++){f=cl[d];if(f.el.id==this.id&amp;&amp;(!a||f.anim==a)){if(a)return f.status;c.push({anim:f.anim,status:f.status})}}if(a)return 0;return c},b_.pause=function(a){for(var b=0;b&lt;cl.length;b++)cl[b].el.id==this.id&amp;&amp;(!a||cl[b].anim==a)&amp;&amp;eve(&quot;anim.pause.&quot;+this.id,this,cl[b].anim)!==!1&amp;&amp;(cl[b].paused=!0);return this},b_.resume=function(a){for(var b=0;b&lt;cl.length;b++)if(cl[b].el.id==this.id&amp;&amp;(!a||cl[b].anim==a)){var c=cl[b];eve(&quot;anim.resume.&quot;+this.id,this,c.anim)!==!1&amp;&amp;(delete c.paused,this.status(c.anim,c.status))}return this},b_.stop=function(a){for(var b=0;b&lt;cl.length;b++)cl[b].el.id==this.id&amp;&amp;(!a||cl[b].anim==a)&amp;&amp;eve(&quot;anim.stop.&quot;+this.id,this,cl[b].anim)!==!1&amp;&amp;cl.splice(b--,1);return this},b_.toString=function(){return&quot;Raphaël’s object&quot;};var cs=function(a){this.items=[],this.length=0,this.type=&quot;set&quot;;if(a)for(var b=0,c=a.length;b&lt;c;b++)a[b]&amp;&amp;(a[b].constructor==b_.constructor||a[b].constructor==cs)&amp;&amp;(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},ct=cs.prototype;ct.push=function(){var a,b;for(var c=0,d=arguments.length;c&lt;d;c++)a=arguments[c],a&amp;&amp;(a.constructor==b_.constructor||a.constructor==cs)&amp;&amp;(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},ct.pop=function(){this.length&amp;&amp;delete this[this.length--];return this.items.pop()},ct.forEach=function(a,b){for(var c=0,d=this.items.length;c&lt;d;c++)if(a.call(b,this.items[c])===!1)return this;return this};for(var cu in b_)b_[g](cu)&amp;&amp;(ct[cu]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][m](c,b)})}}(cu));ct.attr=function(b,c){if(b&amp;&amp;a.is(b,E)&amp;&amp;a.is(b[0],&quot;object&quot;))for(var d=0,e=b.length;d&lt;e;d++)this.items[d].attr(b[d]);else for(var f=0,g=this.items.length;f&lt;g;f++)this.items[f].attr(b,c);return this},ct.clear=function(){while(this.length)this.pop()},ct.splice=function(a,b,c){a=a&lt;0?x(this.length+a,0):a,b=x(0,y(this.length-a,b));var d=[],e=[],f=[],g;for(g=2;g&lt;arguments.length;g++)f.push(arguments[g]);for(g=0;g&lt;b;g++)e.push(this[a+g]);for(;g&lt;this.length-a;g++)d.push(this[a+g]);var h=f.length;for(g=0;g&lt;h+d.length;g++)this.items[a+g]=this[a+g]=g&lt;h?f[g]:d[g-h];g=this.items.length=this.length-=b-h;while(this[g])delete this[g++];return new cs(e)},ct.exclude=function(a){for(var b=0,c=this.length,d;b&lt;c;b++)if(d||this[b]==a)this[b]=this[b+1],d=1;if(d){this.length--,delete this[b];return!0}},ct.animate=function(b,c,d,e){(a.is(d,&quot;function&quot;)||!d)&amp;&amp;(e=d||null);var f=this.items.length,g=f,h,i=this,j;if(!f)return this;e&amp;&amp;(j=function(){!--f&amp;&amp;e.call(i)}),d=a.is(d,D)?d:j;var k=a.animation(b,c,d,j);h=this.items[--g].animate(k);while(g--)this.items[g]&amp;&amp;!this.items[g].removed&amp;&amp;this.items[g].animateWith(h,k);return this},ct.insertAfter=function(a){var b=this.items.length;while(b--)this.items[b].insertAfter(a);return this},ct.getBBox=function(){var a=[],b=[],c=[],d=[];for(var e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}a=y[m](0,a),b=y[m](0,b);return{x:a,y:b,width:x[m](0,c)-a,height:x[m](0,d)-b}},ct.clone=function(a){a=new cs;for(var b=0,c=this.items.length;b&lt;c;b++)a.push(this.items[b].clone());return a},ct.toString=function(){return&quot;Raphaël‘s set&quot;},a.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face[&quot;font-family&quot;];for(var d in a.face)a.face[g](d)&amp;&amp;(b.face[d]=a.face[d]);this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b];if(!a.svg){b.face[&quot;units-per-em&quot;]=R(a.face[&quot;units-per-em&quot;],10);for(var e in a.glyphs)if(a.glyphs[g](e)){var f=a.glyphs[e];b.glyphs[e]={w:f.w,k:{},d:f.d&amp;&amp;&quot;M&quot;+f.d.replace(/[mlcxtrv]/g,function(a){return{l:&quot;L&quot;,c:&quot;C&quot;,x:&quot;z&quot;,t:&quot;m&quot;,r:&quot;l&quot;,v:&quot;c&quot;}[a]||&quot;M&quot;})+&quot;z&quot;};if(f.k)for(var h in f.k)f[g](h)&amp;&amp;(b.glyphs[e].k[h]=f.k[h])}}return a},k.getFont=function(b,c,d,e){e=e||&quot;normal&quot;,d=d||&quot;normal&quot;,c=+c||{normal:400,bold:700,lighter:300,bolder:800}[c]||400;if(!!a.fonts){var f=a.fonts[b];if(!f){var h=new RegExp(&quot;(^|\\s)&quot;+b.replace(/[^\w\d\s+!~.:_-]/g,p)+&quot;(\\s|$)&quot;,&quot;i&quot;);for(var i in a.fonts)if(a.fonts[g](i)&amp;&amp;h.test(i)){f=a.fonts[i];break}}var j;if(f)for(var k=0,l=f.length;k&lt;l;k++){j=f[k];if(j.face[&quot;font-weight&quot;]==c&amp;&amp;(j.face[&quot;font-style&quot;]==d||!j.face[&quot;font-style&quot;])&amp;&amp;j.face[&quot;font-stretch&quot;]==e)break}return j}},k.print=function(b,d,e,f,g,h,i){h=h||&quot;middle&quot;,i=x(y(i||0,1),-1);var j=this.set(),k=r(e).split(p),l=0,m=p,n;a.is(f,e)&amp;&amp;(f=this.getFont(f));if(f){n=(g||16)/f.face[&quot;units-per-em&quot;];var o=f.face.bbox.split(c),q=+o[0],s=+o[1]+(h==&quot;baseline&quot;?o[3]-o[1]+ +f.face.descent:(o[3]-o[1])/2);for(var t=0,u=k.length;t&lt;u;t++){var v=t&amp;&amp;f.glyphs[k[t-1]]||{},w=f.glyphs[k[t]];l+=t?(v.w||f.w)+(v.k&amp;&amp;v.k[k[t]]||0)+f.w*i:0,w&amp;&amp;w.d&amp;&amp;j.push(this.path(w.d).attr({fill:&quot;#000&quot;,stroke:&quot;none&quot;,transform:[[&quot;t&quot;,l*n,0]]}))}j.transform([&quot;...s&quot;,n,n,q,s,&quot;t&quot;,(b-q)/n,(d-s)/n])}return j},a.format=function(b,c){var d=a.is(c,E)?[0][n](c):arguments;b&amp;&amp;a.is(b,D)&amp;&amp;d.length-1&amp;&amp;(b=b.replace(e,function(a,b){return d[++b]==null?p:d[b]}));return b||p},a.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[(&#39;|&quot;)(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;c.replace(b,function(a,b,c,d,f){b=b||d,e&amp;&amp;(b in e&amp;&amp;(e=e[b]),typeof e==&quot;function&quot;&amp;&amp;f&amp;&amp;(e=e()))}),e=(e==null||e==d?a:e)+&quot;&quot;;return e};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),a.ninja=function(){i.was?h.win.Raphael=i.is:delete Raphael;return a},a.st=ct,function(b,c,d){function e(){/in/.test(b.readyState)?setTimeout(e,9):a.eve(&quot;DOMload&quot;)}b.readyState==null&amp;&amp;b.addEventListener&amp;&amp;(b.addEventListener(c,d=function(){b.removeEventListener(c,d,!1),b.readyState=&quot;complete&quot;},!1),b.readyState=&quot;loading&quot;),e()}(document,&quot;DOMContentLoaded&quot;),i.was?h.win.Raphael=a:Raphael=a,eve.on(&quot;DOMload&quot;,function(){b=!0})}(),window.Raphael.svg&amp;&amp;function(a){var b=&quot;hasOwnProperty&quot;,c=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=a.eve,l=&quot;&quot;,m=&quot; &quot;,n=&quot;http://www.w3.org/1999/xlink&quot;,o={block:&quot;M5,0 0,2.5 5,5z&quot;,classic:&quot;M5,0 0,2.5 5,5 3.5,3 3.5,2z&quot;,diamond:&quot;M2.5,0 5,2.5 2.5,5 0,2.5z&quot;,open:&quot;M6,1 1,3.5 6,6&quot;,oval:&quot;M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z&quot;},p={};a.toString=function(){return&quot;Your browser supports SVG.\nYou are running Raphaël &quot;+this.version};var q=function(d,e){if(e){typeof d==&quot;string&quot;&amp;&amp;(d=q(d));for(var f in e)e[b](f)&amp;&amp;(f.substring(0,6)==&quot;xlink:&quot;?d.setAttributeNS(n,f.substring(6),c(e[f])):d.setAttribute(f,c(e[f])))}else d=a._g.doc.createElementNS(&quot;http://www.w3.org/2000/svg&quot;,d),d.style&amp;&amp;(d.style.webkitTapHighlightColor=&quot;rgba(0,0,0,0)&quot;);return d},r={},s=/^url\(#(.*)\)$/,t=function(b,c){var d=b.getAttribute(&quot;fill&quot;);d=d&amp;&amp;d.match(s),d&amp;&amp;!--r[d[1]]&amp;&amp;(delete r[d[1]],c.defs.removeChild(a._g.doc.getElementById(d[1])))},u=function(b,e){var j=&quot;linear&quot;,k=b.id+e,m=.5,n=.5,o=b.node,p=b.paper,r=o.style,s=a._g.doc.getElementById(k);if(!s){e=c(e).replace(a._radial_gradient,function(a,b,c){j=&quot;radial&quot;;if(b&amp;&amp;c){m=d(b),n=d(c);var e=(n&gt;.5)*2-1;i(m-.5,2)+i(n-.5,2)&gt;.25&amp;&amp;(n=f.sqrt(.25-i(m-.5,2))*e+.5)&amp;&amp;n!=.5&amp;&amp;(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/);if(j==&quot;linear&quot;){var t=e.shift();t=-d(t);if(isNaN(t))return null;var u=[0,0,f.cos(a.rad(t)),f.sin(a.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]&lt;0&amp;&amp;(u[0]=-u[2],u[2]=0),u[3]&lt;0&amp;&amp;(u[1]=-u[3],u[3]=0)}var w=a._parseDots(e);if(!w)return null;b.gradient&amp;&amp;(p.defs.removeChild(b.gradient),delete b.gradient),k=k.replace(/[\(\)\s,\xb0#]/g,&quot;-&quot;),s=q(j+&quot;Gradient&quot;,{id:k}),b.gradient=s,q(s,j==&quot;radial&quot;?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:b.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;x&lt;y;x++)s.appendChild(q(&quot;stop&quot;,{offset:w[x].offset?w[x].offset:x?&quot;100%&quot;:&quot;0%&quot;,&quot;stop-color&quot;:w[x].color||&quot;#fff&quot;}))}q(o,{fill:&quot;url(#&quot;+k+&quot;)&quot;,opacity:1,&quot;fill-opacity&quot;:1}),r.fill=l,r.opacity=1,r.fillOpacity=1;return 1},v=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+&quot; translate(&quot;+b.x+&quot;,&quot;+b.y+&quot;)&quot;})},w=function(d,e,f){if(d.type==&quot;path&quot;){var g=c(e).toLowerCase().split(&quot;-&quot;),h=d.paper,i=f?&quot;end&quot;:&quot;start&quot;,j=d.node,k=d.attrs,l=k[&quot;stroke-width&quot;],n=g.length,r=&quot;classic&quot;,s,t,u,v,w,x=3,y=3,z=5;while(n--)switch(g[n]){case&quot;block&quot;:case&quot;classic&quot;:case&quot;oval&quot;:case&quot;diamond&quot;:case&quot;open&quot;:case&quot;none&quot;:r=g[n];break;case&quot;wide&quot;:y=5;break;case&quot;narrow&quot;:y=2;break;case&quot;long&quot;:x=5;break;case&quot;short&quot;:x=2}r==&quot;open&quot;?(x+=2,y+=2,z+=2,u=1,v=f?4:1,w={fill:&quot;none&quot;,stroke:k.stroke}):(v=u=x/2,w={fill:k.stroke,stroke:&quot;none&quot;}),d._.arrows?f?(d._.arrows.endPath&amp;&amp;p[d._.arrows.endPath]--,d._.arrows.endMarker&amp;&amp;p[d._.arrows.endMarker]--):(d._.arrows.startPath&amp;&amp;p[d._.arrows.startPath]--,d._.arrows.startMarker&amp;&amp;p[d._.arrows.startMarker]--):d._.arrows={};if(r!=&quot;none&quot;){var A=&quot;raphael-marker-&quot;+r,B=&quot;raphael-marker-&quot;+i+r+x+y;a._g.doc.getElementById(A)?p[A]++:(h.defs.appendChild(q(q(&quot;path&quot;),{&quot;stroke-linecap&quot;:&quot;round&quot;,d:o[r],id:A})),p[A]=1);var C=a._g.doc.getElementById(B),D;C?(p[B]++,D=C.getElementsByTagName(&quot;use&quot;)[0]):(C=q(q(&quot;marker&quot;),{id:B,markerHeight:y,markerWidth:x,orient:&quot;auto&quot;,refX:v,refY:y/2}),D=q(q(&quot;use&quot;),{&quot;xlink:href&quot;:&quot;#&quot;+A,transform:(f?&quot; rotate(180 &quot;+x/2+&quot; &quot;+y/2+&quot;) &quot;:m)+&quot;scale(&quot;+x/z+&quot;,&quot;+y/z+&quot;)&quot;,&quot;stroke-width&quot;:1/((x/z+y/z)/2)}),C.appendChild(D),h.defs.appendChild(C),p[B]=1),q(D,w);var E=u*(r!=&quot;diamond&quot;&amp;&amp;r!=&quot;oval&quot;);f?(s=d._.arrows.startdx*l||0,t=a.getTotalLength(k.path)-E*l):(s=E*l,t=a.getTotalLength(k.path)-(d._.arrows.enddx*l||0)),w={},w[&quot;marker-&quot;+i]=&quot;url(#&quot;+B+&quot;)&quot;;if(t||s)w.d=Raphael.getSubpath(k.path,s,t);q(j,w),d._.arrows[i+&quot;Path&quot;]=A,d._.arrows[i+&quot;Marker&quot;]=B,d._.arrows[i+&quot;dx&quot;]=E,d._.arrows[i+&quot;Type&quot;]=r,d._.arrows[i+&quot;String&quot;]=e}else f?(s=d._.arrows.startdx*l||0,t=a.getTotalLength(k.path)-s):(s=0,t=a.getTotalLength(k.path)-(d._.arrows.enddx*l||0)),d._.arrows[i+&quot;Path&quot;]&amp;&amp;q(j,{d:Raphael.getSubpath(k.path,s,t)}),delete d._.arrows[i+&quot;Path&quot;],delete d._.arrows[i+&quot;Marker&quot;],delete d._.arrows[i+&quot;dx&quot;],delete d._.arrows[i+&quot;Type&quot;],delete d._.arrows[i+&quot;String&quot;];for(w in p)if(p[b](w)&amp;&amp;!p[w]){var F=a._g.doc.getElementById(w);F&amp;&amp;F.parentNode.removeChild(F)}}},x={&quot;&quot;:[0],none:[0],&quot;-&quot;:[3,1],&quot;.&quot;:[1,1],&quot;-.&quot;:[3,1,1,1],&quot;-..&quot;:[3,1,1,1,1,1],&quot;. &quot;:[1,3],&quot;- &quot;:[4,3],&quot;--&quot;:[8,3],&quot;- .&quot;:[4,3,1,3],&quot;--.&quot;:[8,3,1,3],&quot;--..&quot;:[8,3,1,3,1,3]},y=function(a,b,d){b=x[c(b).toLowerCase()];if(b){var e=a.attrs[&quot;stroke-width&quot;]||&quot;1&quot;,f={round:e,square:e,butt:0}[a.attrs[&quot;stroke-linecap&quot;]||d[&quot;stroke-linecap&quot;]]||0,g=[],h=b.length;while(h--)g[h]=b[h]*e+(h%2?1:-1)*f;q(a.node,{&quot;stroke-dasharray&quot;:g.join(&quot;,&quot;)})}},z=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility=&quot;hidden&quot;;for(var o in f)if(f[b](o)){if(!a._availableAttrs[b](o))continue;var p=f[o];k[o]=p;switch(o){case&quot;blur&quot;:d.blur(p);break;case&quot;href&quot;:case&quot;title&quot;:case&quot;target&quot;:var r=i.parentNode;if(r.tagName.toLowerCase()!=&quot;a&quot;){var s=q(&quot;a&quot;);r.insertBefore(s,i),s.appendChild(i),r=s}o==&quot;target&quot;&amp;&amp;p==&quot;blank&quot;?r.setAttributeNS(n,&quot;show&quot;,&quot;new&quot;):r.setAttributeNS(n,o,p);break;case&quot;cursor&quot;:i.style.cursor=p;break;case&quot;transform&quot;:d.transform(p);break;case&quot;arrow-start&quot;:w(d,p);break;case&quot;arrow-end&quot;:w(d,p,1);break;case&quot;clip-rect&quot;:var t=c(p).split(j);if(t.length==4){d.clip&amp;&amp;d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var x=q(&quot;clipPath&quot;),z=q(&quot;rect&quot;);x.id=a._createUUID(),q(z,{x:t[0],y:t[1],width:t[2],height:t[3]}),x.appendChild(z),d.paper.defs.appendChild(x),q(i,{&quot;clip-path&quot;:&quot;url(#&quot;+x.id+&quot;)&quot;}),d.clip=z}if(!p){var A=a._g.doc.getElementById(i.getAttribute(&quot;clip-path&quot;).replace(/(^url\(#|\)$)/g,l));A&amp;&amp;A.parentNode.removeChild(A),q(i,{&quot;clip-path&quot;:l}),delete d.clip}break;case&quot;path&quot;:d.type==&quot;path&quot;&amp;&amp;(q(i,{d:p?k.path=a._pathToAbsolute(p):&quot;M0,0&quot;}),d._.dirty=1,d._.arrows&amp;&amp;(&quot;startString&quot;in d._.arrows&amp;&amp;w(d,d._.arrows.startString),&quot;endString&quot;in d._.arrows&amp;&amp;w(d,d._.arrows.endString,1)));break;case&quot;width&quot;:i.setAttribute(o,p),d._.dirty=1;if(k.fx)o=&quot;x&quot;,p=k.x;else break;case&quot;x&quot;:k.fx&amp;&amp;(p=-k.x-(k.width||0));case&quot;rx&quot;:if(o==&quot;rx&quot;&amp;&amp;d.type==&quot;rect&quot;)break;case&quot;cx&quot;:i.setAttribute(o,p),d.pattern&amp;&amp;v(d),d._.dirty=1;break;case&quot;height&quot;:i.setAttribute(o,p),d._.dirty=1;if(k.fy)o=&quot;y&quot;,p=k.y;else break;case&quot;y&quot;:k.fy&amp;&amp;(p=-k.y-(k.height||0));case&quot;ry&quot;:if(o==&quot;ry&quot;&amp;&amp;d.type==&quot;rect&quot;)break;case&quot;cy&quot;:i.setAttribute(o,p),d.pattern&amp;&amp;v(d),d._.dirty=1;break;case&quot;r&quot;:d.type==&quot;rect&quot;?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case&quot;src&quot;:d.type==&quot;image&quot;&amp;&amp;i.setAttributeNS(n,&quot;href&quot;,p);break;case&quot;stroke-width&quot;:if(d._.sx!=1||d._.sy!=1)p/=g(h(d._.sx),h(d._.sy))||1;d.paper._vbSize&amp;&amp;(p*=d.paper._vbSize),i.setAttribute(o,p),k[&quot;stroke-dasharray&quot;]&amp;&amp;y(d,k[&quot;stroke-dasharray&quot;],f),d._.arrows&amp;&amp;(&quot;startString&quot;in d._.arrows&amp;&amp;w(d,d._.arrows.startString),&quot;endString&quot;in d._.arrows&amp;&amp;w(d,d._.arrows.endString,1));break;case&quot;stroke-dasharray&quot;:y(d,p,f);break;case&quot;fill&quot;:var C=c(p).match(a._ISURL);if(C){x=q(&quot;pattern&quot;);var D=q(&quot;image&quot;);x.id=a._createUUID(),q(x,{x:0,y:0,patternUnits:&quot;userSpaceOnUse&quot;,height:1,width:1}),q(D,{x:0,y:0,&quot;xlink:href&quot;:C[1]}),x.appendChild(D),function(b){a._preload(C[1],function(){var a=this.offsetWidth,c=this.offsetHeight;q(b,{width:a,height:c}),q(D,{width:a,height:c}),d.paper.safari()})}(x),d.paper.defs.appendChild(x),i.style.fill=&quot;url(#&quot;+x.id+&quot;)&quot;,q(i,{fill:&quot;url(#&quot;+x.id+&quot;)&quot;}),d.pattern=x,d.pattern&amp;&amp;v(d);break}var E=a.getRGB(p);if(!E.error)delete f.gradient,delete k.gradient,!a.is(k.opacity,&quot;undefined&quot;)&amp;&amp;a.is(f.opacity,&quot;undefined&quot;)&amp;&amp;q(i,{opacity:k.opacity}),!a.is(k[&quot;fill-opacity&quot;],&quot;undefined&quot;)&amp;&amp;a.is(f[&quot;fill-opacity&quot;],&quot;undefined&quot;)&amp;&amp;q(i,{&quot;fill-opacity&quot;:k[&quot;fill-opacity&quot;]});else if((d.type==&quot;circle&quot;||d.type==&quot;ellipse&quot;||c(p).charAt()!=&quot;r&quot;)&amp;&amp;u(d,p)){if(&quot;opacity&quot;in k||&quot;fill-opacity&quot;in k){var F=a._g.doc.getElementById(i.getAttribute(&quot;fill&quot;).replace(/^url\(#|\)$/g,l));if(F){var G=F.getElementsByTagName(&quot;stop&quot;);q(G[G.length-1],{&quot;stop-opacity&quot;:(&quot;opacity&quot;in k?k.opacity:1)*(&quot;fill-opacity&quot;in k?k[&quot;fill-opacity&quot;]:1)})}}k.gradient=p,k.fill=&quot;none&quot;;break}E[b](&quot;opacity&quot;)&amp;&amp;q(i,{&quot;fill-opacity&quot;:E.opacity&gt;1?E.opacity/100:E.opacity});case&quot;stroke&quot;:E=a.getRGB(p),i.setAttribute(o,E.hex),o==&quot;stroke&quot;&amp;&amp;E[b](&quot;opacity&quot;)&amp;&amp;q(i,{&quot;stroke-opacity&quot;:E.opacity&gt;1?E.opacity/100:E.opacity}),o==&quot;stroke&quot;&amp;&amp;d._.arrows&amp;&amp;(&quot;startString&quot;in d._.arrows&amp;&amp;w(d,d._.arrows.startString),&quot;endString&quot;in d._.arrows&amp;&amp;w(d,d._.arrows.endString,1));break;case&quot;gradient&quot;:(d.type==&quot;circle&quot;||d.type==&quot;ellipse&quot;||c(p).charAt()!=&quot;r&quot;)&amp;&amp;u(d,p);break;case&quot;opacity&quot;:k.gradient&amp;&amp;!k[b](&quot;stroke-opacity&quot;)&amp;&amp;q(i,{&quot;stroke-opacity&quot;:p&gt;1?p/100:p});case&quot;fill-opacity&quot;:if(k.gradient){F=a._g.doc.getElementById(i.getAttribute(&quot;fill&quot;).replace(/^url\(#|\)$/g,l)),F&amp;&amp;(G=F.getElementsByTagName(&quot;stop&quot;),q(G[G.length-1],{&quot;stop-opacity&quot;:p}));break};default:o==&quot;font-size&quot;&amp;&amp;(p=e(p,10)+&quot;px&quot;);var H=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[H]=p,d._.dirty=1,i.setAttribute(o,p)}}B(d,f),i.style.visibility=m},A=1.2,B=function(d,f){if(d.type==&quot;text&quot;&amp;&amp;!!(f[b](&quot;text&quot;)||f[b](&quot;font&quot;)||f[b](&quot;font-size&quot;)||f[b](&quot;x&quot;)||f[b](&quot;y&quot;))){var g=d.attrs,h=d.node,i=h.firstChild?e(a._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue(&quot;font-size&quot;),10):10;if(f[b](&quot;text&quot;)){g.text=f.text;while(h.firstChild)h.removeChild(h.firstChild);var j=c(f.text).split(&quot;\n&quot;),k=[],m;for(var n=0,o=j.length;n&lt;o;n++)m=q(&quot;tspan&quot;),n&amp;&amp;q(m,{dy:i*A,x:g.x}),m.appendChild(a._g.doc.createTextNode(j[n])),h.appendChild(m),k[n]=m}else{k=h.getElementsByTagName(&quot;tspan&quot;);for(n=0,o=k.length;n&lt;o;n++)n?q(k[n],{dy:i*A,x:g.x}):q(k[0],{dy:0})}q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&amp;&amp;a.is(r,&quot;finite&quot;)&amp;&amp;q(k[0],{dy:r})}},C=function(b,c){var d=0,e=0;this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.matrix=a.matrix(),this.realPath=null,this.paper=c,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!c.bottom&amp;&amp;(c.bottom=this),this.prev=c.top,c.top&amp;&amp;(c.top.next=this),c.top=this,this.next=null},D=a.el;C.prototype=D,D.constructor=C,a._engine.path=function(a,b){var c=q(&quot;path&quot;);b.canvas&amp;&amp;b.canvas.appendChild(c);var d=new C(c,b);d.type=&quot;path&quot;,z(d,{fill:&quot;none&quot;,stroke:&quot;#000&quot;,path:a});return d},D.rotate=function(a,b,e){if(this.removed)return this;a=c(a).split(j),a.length-1&amp;&amp;(b=d(a[1]),e=d(a[2])),a=d(a[0]),e==null&amp;&amp;(b=e);if(b==null||e==null){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}this.transform(this._.transform.concat([[&quot;r&quot;,a,b,e]]));return this},D.scale=function(a,b,e,f){if(this.removed)return this;a=c(a).split(j),a.length-1&amp;&amp;(b=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),b==null&amp;&amp;(b=a),f==null&amp;&amp;(e=f);if(e==null||f==null)var g=this.getBBox(1);e=e==null?g.x+g.width/2:e,f=f==null?g.y+g.height/2:f,this.transform(this._.transform.concat([[&quot;s&quot;,a,b,e,f]]));return this},D.translate=function(a,b){if(this.removed)return this;a=c(a).split(j),a.length-1&amp;&amp;(b=d(a[1])),a=d(a[0])||0,b=+b||0,this.transform(this._.transform.concat([[&quot;t&quot;,a,b]]));return this},D.transform=function(c){var d=this._;if(c==null)return d.transform;a._extractTransform(this,c),this.clip&amp;&amp;q(this.clip,{transform:this.matrix.invert()}),this.pattern&amp;&amp;v(this),this.node&amp;&amp;q(this.node,{transform:this.matrix});if(d.sx!=1||d.sy!=1){var e=this.attrs[b](&quot;stroke-width&quot;)?this.attrs[&quot;stroke-width&quot;]:1;this.attr({&quot;stroke-width&quot;:e})}return this},D.hide=function(){!this.removed&amp;&amp;this.paper.safari(this.node.style.display=&quot;none&quot;);return this},D.show=function(){!this.removed&amp;&amp;this.paper.safari(this.node.style.display=&quot;&quot;);return this},D.remove=function(){if(!this.removed){k.unbind(&quot;*.*.&quot;+this.id),a._tear(this,this.paper),this.node.parentNode.removeChild(this.node);for(var b in this)delete this[b];this.removed=!0}},D._getBBox=function(){if(this.node.style.display==&quot;none&quot;){this.show();var a=!0}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=b||{}}a&amp;&amp;this.hide();return b},D.attr=function(c,d){if(this.removed)return this;if(c==null){var e={};for(var f in this.attrs)this.attrs[b](f)&amp;&amp;(e[f]=this.attrs[f]);e.gradient&amp;&amp;e.fill==&quot;none&quot;&amp;&amp;(e.fill=e.gradient)&amp;&amp;delete e.gradient,e.transform=this._.transform;return e}if(d==null&amp;&amp;a.is(c,&quot;string&quot;)){if(c==&quot;fill&quot;&amp;&amp;this.attrs.fill==&quot;none&quot;&amp;&amp;this.attrs.gradient)return this.attrs.gradient;if(c==&quot;transform&quot;)return this._.transform;var g=c.split(j),h={};for(var i=0,k=g.length;i&lt;k;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],&quot;function&quot;)?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return k-1?h:h[g[0]]}if(d==null&amp;&amp;a.is(c,&quot;array&quot;)){h={};for(i=0,k=c.length;i&lt;k;i++)h[c[i]]=this.attr(c[i]);return h}if(d!=null){var l={};l[c]=d}else c!=null&amp;&amp;a.is(c,&quot;object&quot;)&amp;&amp;(l=c);for(var m in this.paper.customAttributes)if(this.paper.customAttributes[b](m)&amp;&amp;l[b](m)&amp;&amp;a.is(this.paper.customAttributes[m],&quot;function&quot;)){var n=this.paper.customAttributes[m].apply(this,[].concat(l[m]));this.attrs[m]=l[m];for(var o in n)n[b](o)&amp;&amp;(l[o]=n[o])}z(this,l);return this},D.toFront=function(){if(this.removed)return this;this.node.parentNode.appendChild(this.node);var b=this.paper;b.top!=this&amp;&amp;a._tofront(this,b);return this},D.toBack=function(){if(this.removed)return this;if(this.node.parentNode.firstChild!=this.node){this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper);var b=this.paper}return this},D.insertAfter=function(b){if(this.removed)return this;var c=b.node||b[b.length-1].node;c.nextSibling?c.parentNode.insertBefore(this.node,c.nextSibling):c.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper);return this},D.insertBefore=function(b){if(this.removed)return this;var c=b.node||b[0].node;c.parentNode.insertBefore(this.node,c),a._insertbefore(this,b,this.paper);return this},D.blur=function(b){var c=this;if(+b!==0){var d=q(&quot;filter&quot;),e=q(&quot;feGaussianBlur&quot;);c.attrs.blur=b,d.id=a._createUUID(),q(e,{stdDeviation:+b||1.5}),d.appendChild(e),c.paper.defs.appendChild(d),c._blur=d,q(c.node,{filter:&quot;url(#&quot;+d.id+&quot;)&quot;})}else c._blur&amp;&amp;(c._blur.parentNode.removeChild(c._blur),delete c._blur,delete c.attrs.blur),c.node.removeAttribute(&quot;filter&quot;)},a._engine.circle=function(a,b,c,d){var e=q(&quot;circle&quot;);a.canvas&amp;&amp;a.canvas.appendChild(e);var f=new C(e,a);f.attrs={cx:b,cy:c,r:d,fill:&quot;none&quot;,stroke:&quot;#000&quot;},f.type=&quot;circle&quot;,q(e,f.attrs);return f},a._engine.rect=function(a,b,c,d,e,f){var g=q(&quot;rect&quot;);a.canvas&amp;&amp;a.canvas.appendChild(g);var h=new C(g,a);h.attrs={x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:&quot;none&quot;,stroke:&quot;#000&quot;},h.type=&quot;rect&quot;,q(g,h.attrs);return h},a._engine.ellipse=function(a,b,c,d,e){var f=q(&quot;ellipse&quot;);a.canvas&amp;&amp;a.canvas.appendChild(f);var g=new C(f,a);g.attrs={cx:b,cy:c,rx:d,ry:e,fill:&quot;none&quot;,stroke:&quot;#000&quot;},g.type=&quot;ellipse&quot;,q(f,g.attrs);return g},a._engine.image=function(a,b,c,d,e,f){var g=q(&quot;image&quot;);q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:&quot;none&quot;}),g.setAttributeNS(n,&quot;href&quot;,b),a.canvas&amp;&amp;a.canvas.appendChild(g);var h=new C(g,a);h.attrs={x:c,y:d,width:e,height:f,src:b},h.type=&quot;image&quot;;return h},a._engine.text=function(b,c,d,e){var f=q(&quot;text&quot;);b.canvas&amp;&amp;b.canvas.appendChild(f);var g=new C(f,b);g.attrs={x:c,y:d,&quot;text-anchor&quot;:&quot;middle&quot;,text:e,font:a._availableAttrs.font,stroke:&quot;none&quot;,fill:&quot;#000&quot;},g.type=&quot;text&quot;,z(g,g.attrs);return g},a._engine.setSize=function(a,b){this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute(&quot;width&quot;,this.width),this.canvas.setAttribute(&quot;height&quot;,this.height),this._viewBox&amp;&amp;this.setViewBox.apply(this,this._viewBox);return this},a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b&amp;&amp;b.container,d=b.x,e=b.y,f=b.width,g=b.height;if(!c)throw new Error(&quot;SVG container not found.&quot;);var h=q(&quot;svg&quot;),i=&quot;overflow:hidden;&quot;,j;d=d||0,e=e||0,f=f||512,g=g||342,q(h,{height:g,version:1.1,width:f,xmlns:&quot;http://www.w3.org/2000/svg&quot;}),c==1?(h.style.cssText=i+&quot;position:absolute;left:&quot;+d+&quot;px;top:&quot;+e+&quot;px&quot;,a._g.doc.body.appendChild(h),j=1):(h.style.cssText=i+&quot;position:relative&quot;,c.firstChild?c.insertBefore(h,c.firstChild):c.appendChild(h)),c=new a._Paper,c.width=f,c.height=g,c.canvas=h,c.clear(),c._left=c._top=0,j&amp;&amp;(c.renderfix=function(){}),c.renderfix();return c},a._engine.setViewBox=function(a,b,c,d,e){k(&quot;setViewBox&quot;,this,this._viewBox,[a,b,c,d,e]);var f=g(c/this.width,d/this.height),h=this.top,i=e?&quot;meet&quot;:&quot;xMinYMin&quot;,j,l;a==null?(this._vbSize&amp;&amp;(f=1),delete this._vbSize,j=&quot;0 0 &quot;+this.width+m+this.height):(this._vbSize=f,j=a+m+b+m+c+m+d),q(this.canvas,{viewBox:j,preserveAspectRatio:i});while(f&amp;&amp;h)l=&quot;stroke-width&quot;in h.attrs?h.attrs[&quot;stroke-width&quot;]:1,h.attr({&quot;stroke-width&quot;:l}),h._.dirty=1,h._.dirtyT=1,h=h.prev;this._viewBox=[a,b,c,d,!!e];return this},a.prototype.renderfix=function(){var a=this.canvas,b=a.style,c=a.getScreenCTM(),d=-c.e%1,e=-c.f%1;if(d||e)d&amp;&amp;(this._left=(this._left+d)%1,b.left=this._left+&quot;px&quot;),e&amp;&amp;(this._top=(this._top+e)%1,b.top=this._top+&quot;px&quot;)},a.prototype.clear=function(){a.eve(&quot;clear&quot;,this);var b=this.canvas;while(b.firstChild)b.removeChild(b.firstChild);this.bottom=this.top=null,(this.desc=q(&quot;desc&quot;)).appendChild(a._g.doc.createTextNode(&quot;Created with Raphaël &quot;+a.version)),b.appendChild(this.desc),b.appendChild(this.defs=q(&quot;defs&quot;))},a.prototype.remove=function(){k(&quot;remove&quot;,this),this.canvas.parentNode&amp;&amp;this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]=removed(a)};var E=a.st;for(var F in D)D[b](F)&amp;&amp;!E[b](F)&amp;&amp;(E[F]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(F))}(window.Raphael),window.Raphael.vml&amp;&amp;function(a){var b=&quot;hasOwnProperty&quot;,c=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j=&quot;fill&quot;,k=/[, ]+/,l=a.eve,m=&quot; progid:DXImageTransform.Microsoft&quot;,n=&quot; &quot;,o=&quot;&quot;,p={M:&quot;m&quot;,L:&quot;l&quot;,C:&quot;c&quot;,Z:&quot;x&quot;,m:&quot;t&quot;,l:&quot;r&quot;,c:&quot;v&quot;,z:&quot;x&quot;},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t=&quot;position:absolute;left:0;top:0;width:1px;height:1px&quot;,u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(b){var d=/[ahqstv]/ig,e=a._pathToAbsolute;c(b).match(d)&amp;&amp;(e=a._path2curve),d=/[clmz]/g;if(e==a._pathToAbsolute&amp;&amp;!c(b).match(d)){var g=c(b).replace(q,function(a,b,c){var d=[],e=b.toLowerCase()==&quot;m&quot;,g=p[b];c.replace(s,function(a){e&amp;&amp;d.length==2&amp;&amp;(g+=d+p[b==&quot;m&quot;?&quot;l&quot;:&quot;L&quot;],d=[]),d.push(f(a*u))});return g+d});return g}var h=e(b),i,j;g=[];for(var k=0,l=h.length;k&lt;l;k++){i=h[k],j=h[k][0].toLowerCase(),j==&quot;z&quot;&amp;&amp;(j=&quot;x&quot;);for(var m=1,r=i.length;m&lt;r;m++)j+=f(i[m]*u)+(m!=r-1?&quot;,&quot;:o);g.push(j)}return g.join(n)},y=function(b,c,d){var e=a.matrix();e.rotate(-b,.5,.5);return{dx:e.x(c,d),dy:e.y(c,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p=&quot;&quot;,q,r=u/b,s=u/c;m.visibility=&quot;hidden&quot;;if(!!b&amp;&amp;!!c){l.coordsize=i(r)+n+i(s),m.rotation=f*(b*c&lt;0?-1:1);if(f){var t=y(f,d,e);d=t.dx,e=t.dy}b&lt;0&amp;&amp;(p+=&quot;x&quot;),c&lt;0&amp;&amp;(p+=&quot; y&quot;)&amp;&amp;(o=-1),m.flip=p,l.coordorigin=d*-r+n+e*-s;if(k||g.fillsize){var v=l.getElementsByTagName(j);v=v&amp;&amp;v[0],l.removeChild(v),k&amp;&amp;(t=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),v.position=t.dx*o+n+t.dy*o),g.fillsize&amp;&amp;(v.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(v)}m.visibility=&quot;visible&quot;}};a.toString=function(){return&quot;Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël &quot;+this.version},addArrow=function(a,b,d){var e=c(b).toLowerCase().split(&quot;-&quot;),f=d?&quot;end&quot;:&quot;start&quot;,g=e.length,h=&quot;classic&quot;,i=&quot;medium&quot;,j=&quot;medium&quot;;while(g--)switch(e[g]){case&quot;block&quot;:case&quot;classic&quot;:case&quot;oval&quot;:case&quot;diamond&quot;:case&quot;open&quot;:case&quot;none&quot;:h=e[g];break;case&quot;wide&quot;:case&quot;narrow&quot;:j=e[g];break;case&quot;long&quot;:case&quot;short&quot;:i=e[g]}var k=a.node.getElementsByTagName(&quot;stroke&quot;)[0];k[f+&quot;arrow&quot;]=h,k[f+&quot;arrowlength&quot;]=i,k[f+&quot;arrowwidth&quot;]=j},setFillAndStroke=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q,r=v[e.type]&amp;&amp;(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),s=w[e.type]&amp;&amp;(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),t=e;for(var y in i)i[b](y)&amp;&amp;(m[y]=i[y]);r&amp;&amp;(m.path=a._getPath[e.type](e),e._.dirty=1),i.href&amp;&amp;(l.href=i.href),i.title&amp;&amp;(l.title=i.title),i.target&amp;&amp;(l.target=i.target),i.cursor&amp;&amp;(p.cursor=i.cursor),&quot;blur&quot;in i&amp;&amp;e.blur(i.blur);if(i.path&amp;&amp;e.type==&quot;path&quot;||r)l.path=x(~c(m.path).toLowerCase().indexOf(&quot;r&quot;)?a._pathToAbsolute(m.path):m.path),e.type==&quot;image&quot;&amp;&amp;(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0));&quot;transform&quot;in i&amp;&amp;e.transform(i.transform);if(s){var A=+m.cx,C=+m.cy,D=+m.rx||+m.r||0,F=+m.ry||+m.r||0;l.path=a.format(&quot;ar{0},{1},{2},{3},{4},{1},{4},{1}x&quot;,f((A-D)*u),f((C-F)*u),f((A+D)*u),f((C+F)*u),f(A*u))}if(&quot;clip-rect&quot;in i){var G=c(i[&quot;clip-rect&quot;]).split(k);if(G.length==4){G[2]=+G[2]+ +G[0],G[3]=+G[3]+ +G[1];var H=l.clipRect||a._g.doc.createElement(&quot;div&quot;),I=H.style,J=l.parentNode;I.clip=a.format(&quot;rect({1}px {2}px {3}px {0}px)&quot;,G),l.clipRect||(I.position=&quot;absolute&quot;,I.top=0,I.left=0,I.width=e.paper.width+&quot;px&quot;,I.height=e.paper.height+&quot;px&quot;,J.parentNode.insertBefore(H,J),H.appendChild(J),l.clipRect=H)}i[&quot;clip-rect&quot;]||l.clipRect&amp;&amp;(l.clipRect.style.clip=o)}if(e.textpath){var K=e.textpath.style;i.font&amp;&amp;(K.font=i.font),i[&quot;font-family&quot;]&amp;&amp;(K.fontFamily=&#39;&quot;&#39;+i[&quot;font-family&quot;].split(&quot;,&quot;)[0].replace(/^[&#39;&quot;]+|[&#39;&quot;]+$/g,o)+&#39;&quot;&#39;),i[&quot;font-size&quot;]&amp;&amp;(K.fontSize=i[&quot;font-size&quot;]),i[&quot;font-weight&quot;]&amp;&amp;(K.fontWeight=i[&quot;font-weight&quot;]),i[&quot;font-style&quot;]&amp;&amp;(K.fontStyle=i[&quot;font-style&quot;])}&quot;arrow-start&quot;in i&amp;&amp;addArrow(t,i[&quot;arrow-start&quot;]),&quot;arrow-end&quot;in i&amp;&amp;addArrow(t,i[&quot;arrow-end&quot;],1);if(i.opacity!=null||i[&quot;stroke-width&quot;]!=null||i.fill!=null||i.src!=null||i.stroke!=null||i[&quot;stroke-width&quot;]!=null||i[&quot;stroke-opacity&quot;]!=null||i[&quot;fill-opacity&quot;]!=null||i[&quot;stroke-dasharray&quot;]!=null||i[&quot;stroke-miterlimit&quot;]!=null||i[&quot;stroke-linejoin&quot;]!=null||i[&quot;stroke-linecap&quot;]!=null){var L=l.getElementsByTagName(j),M=!1;L=L&amp;&amp;L[0],!L&amp;&amp;(M=L=B(j)),e.type==&quot;image&quot;&amp;&amp;i.src&amp;&amp;(L.src=i.src),i.fill&amp;&amp;(L.on=!0);if(L.on==null||i.fill==&quot;none&quot;||i.fill===null)L.on=!1;if(L.on&amp;&amp;i.fill){var N=c(i.fill).match(a._ISURL);if(N){L.parentNode==l&amp;&amp;l.removeChild(L),L.rotate=!0,L.src=N[1],L.type=&quot;tile&quot;;var O=e.getBBox(1);L.position=O.x+n+O.y,e._.fillpos=[O.x,O.y],a._preload(N[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else L.color=a.getRGB(i.fill).hex,L.src=o,L.type=&quot;solid&quot;,a.getRGB(i.fill).error&amp;&amp;(t.type in{circle:1,ellipse:1}||c(i.fill).charAt()!=&quot;r&quot;)&amp;&amp;addGradientFill(t,i.fill,L)&amp;&amp;(m.fill=&quot;none&quot;,m.gradient=i.fill,L.rotate=!1)}if(&quot;fill-opacity&quot;in i||&quot;opacity&quot;in i){var P=((+m[&quot;fill-opacity&quot;]+1||2)-1)*((+m.opacity+1||2)-1)*((+a.getRGB(i.fill).o+1||2)-1);P=h(g(P,0),1),L.opacity=P,L.src&amp;&amp;(L.color=&quot;none&quot;)}l.appendChild(L);var Q=l.getElementsByTagName(&quot;stroke&quot;)&amp;&amp;l.getElementsByTagName(&quot;stroke&quot;)[0],T=!1;!Q&amp;&amp;(T=Q=B(&quot;stroke&quot;));if(i.stroke&amp;&amp;i.stroke!=&quot;none&quot;||i[&quot;stroke-width&quot;]||i[&quot;stroke-opacity&quot;]!=null||i[&quot;stroke-dasharray&quot;]||i[&quot;stroke-miterlimit&quot;]||i[&quot;stroke-linejoin&quot;]||i[&quot;stroke-linecap&quot;])Q.on=!0;(i.stroke==&quot;none&quot;||i.stroke===null||Q.on==null||i.stroke==0||i[&quot;stroke-width&quot;]==0)&amp;&amp;(Q.on=!1);var U=a.getRGB(i.stroke);Q.on&amp;&amp;i.stroke&amp;&amp;(Q.color=U.hex),P=((+m[&quot;stroke-opacity&quot;]+1||2)-1)*((+m.opacity+1||2)-1)*((+U.o+1||2)-1);var V=(d(i[&quot;stroke-width&quot;])||1)*.75;P=h(g(P,0),1),i[&quot;stroke-width&quot;]==null&amp;&amp;(V=m[&quot;stroke-width&quot;]),i[&quot;stroke-width&quot;]&amp;&amp;(Q.weight=V),V&amp;&amp;V&lt;1&amp;&amp;(P*=V)&amp;&amp;(Q.weight=1),Q.opacity=P,i[&quot;stroke-linejoin&quot;]&amp;&amp;(Q.joinstyle=i[&quot;stroke-linejoin&quot;]||&quot;miter&quot;),Q.miterlimit=i[&quot;stroke-miterlimit&quot;]||8,i[&quot;stroke-linecap&quot;]&amp;&amp;(Q.endcap=i[&quot;stroke-linecap&quot;]==&quot;butt&quot;?&quot;flat&quot;:i[&quot;stroke-linecap&quot;]==&quot;square&quot;?&quot;square&quot;:&quot;round&quot;);if(i[&quot;stroke-dasharray&quot;]){var W={&quot;-&quot;:&quot;shortdash&quot;,&quot;.&quot;:&quot;shortdot&quot;,&quot;-.&quot;:&quot;shortdashdot&quot;,&quot;-..&quot;:&quot;shortdashdotdot&quot;,&quot;. &quot;:&quot;dot&quot;,&quot;- &quot;:&quot;dash&quot;,&quot;--&quot;:&quot;longdash&quot;,&quot;- .&quot;:&quot;dashdot&quot;,&quot;--.&quot;:&quot;longdashdot&quot;,&quot;--..&quot;:&quot;longdashdotdot&quot;};Q.dashstyle=W[b](i[&quot;stroke-dasharray&quot;])?W[i[&quot;stroke-dasharray&quot;]]:o}T&amp;&amp;l.appendChild(Q)}if(t.type==&quot;text&quot;){t.paper.canvas.style.display=o;var X=t.paper.span,Y=100,Z=m.font&amp;&amp;m.font.match(/\d+(?:\.\d*)?(?=px)/);p=X.style,m.font&amp;&amp;(p.font=m.font),m[&quot;font-family&quot;]&amp;&amp;(p.fontFamily=m[&quot;font-family&quot;]),m[&quot;font-weight&quot;]&amp;&amp;(p.fontWeight=m[&quot;font-weight&quot;]),m[&quot;font-style&quot;]&amp;&amp;(p.fontStyle=m[&quot;font-style&quot;]),Z=d(Z?Z[0]:m[&quot;font-size&quot;]),p.fontSize=Z*Y+&quot;px&quot;,t.textpath.string&amp;&amp;(X.innerHTML=c(t.textpath.string).replace(/&lt;/g,&quot;&amp;#60;&quot;).replace(/&amp;/g,&quot;&amp;#38;&quot;).replace(/\n/g,&quot;&lt;br&gt;&quot;));var $=X.getBoundingClientRect();t.W=m.w=($.right-$.left)/Y,t.H=m.h=($.bottom-$.top)/Y,t.X=m.x,t.Y=m.y+t.H/2,(&quot;x&quot;in i||&quot;y&quot;in i)&amp;&amp;(t.path.v=a.format(&quot;m{0},{1}l{2},{1}&quot;,f(m.x*u),f(m.y*u),f(m.x*u)+1));var _=[&quot;x&quot;,&quot;y&quot;,&quot;text&quot;,&quot;font&quot;,&quot;font-family&quot;,&quot;font-weight&quot;,&quot;font-style&quot;,&quot;font-size&quot;];for(var ba=0,bb=_.length;ba&lt;bb;ba++)if(_[ba]in i){t._.dirty=1;break}switch(m[&quot;text-anchor&quot;]){case&quot;start&quot;:t.textpath.style[&quot;v-text-align&quot;]=&quot;left&quot;,t.bbx=t.W/2;break;case&quot;end&quot;:t.textpath.style[&quot;v-text-align&quot;]=&quot;right&quot;,t.bbx=-t.W/2;break;default:t.textpath.style[&quot;v-text-align&quot;]=&quot;center&quot;,t.bbx=0}t.textpath.style[&quot;v-text-kern&quot;]=!0}},addGradientFill=function(b,f,g){b.attrs=b.attrs||{};var h=b.attrs,i,j,k=&quot;linear&quot;,l=&quot;.5 .5&quot;;b.attrs.gradient=f,f=c(f).replace(a._radial_gradient,function(a,b,c){k=&quot;radial&quot;,b&amp;&amp;c&amp;&amp;(b=d(b),c=d(c),pow(b-.5,2)+pow(c-.5,2)&gt;.25&amp;&amp;(c=e.sqrt(.25-pow(b-.5,2))*((c&gt;.5)*2-1)+.5),l=b+n+c);return o}),f=f.split(/\s*\-\s*/);if(k==&quot;linear&quot;){var m=f.shift();m=-d(m);if(isNaN(m))return null}var p=a._parseDots(f);if(!p)return null;b=b.shape||b.node;if(p.length){b.removeChild(g),g.on=!0,g.method=&quot;none&quot;,g.color=p[0].color,g.color2=p[p.length-1].color;var q=[];for(var r=0,s=p.length;r&lt;s;r++)p[r].offset&amp;&amp;q.push(p[r].offset+n+p[r].color);g.colors=q.length?q.join():&quot;0% &quot;+g.color,k==&quot;radial&quot;?(g.type=&quot;gradientTitle&quot;,g.focus=&quot;100%&quot;,g.focussize=&quot;0 0&quot;,g.focusposition=l,g.angle=0):(g.type=&quot;gradient&quot;,g.angle=(270-m)%360),b.appendChild(g)}return 1},Element=function(b,c){this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=c,this.matrix=a.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!c.bottom&amp;&amp;(c.bottom=this),this.prev=c.top,c.top&amp;&amp;(c.top.next=this),c.top=this,this.next=null};var A=a.el;Element.prototype=A,A.constructor=Element,A.transform=function(b){if(b==null)return this._.transform;var d=this.paper._viewBoxShift,e=d?&quot;s&quot;+[d.scale,d.scale]+&quot;-1-1t&quot;+[d.dx,d.dy]:o,f;d&amp;&amp;(f=b=c(b).replace(/\.{3}|\u2026/g,this._.transform||o)),a._extractTransform(this,e+b);var g=this.matrix.clone(),h=this.skew,i=this.node,j,k=~c(this.attrs.fill).indexOf(&quot;-&quot;),l=!c(this.attrs.fill).indexOf(&quot;url(&quot;);g.translate(-0.5,-0.5);if(l||k||this.type==&quot;image&quot;){h.matrix=&quot;1 0 0 1&quot;,h.offset=&quot;0 0&quot;,j=g.split();if(k&amp;&amp;j.noRotation||!j.isSimple){i.style.filter=g.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;i.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else i.style.filter=o,z(this,j.scalex,j.scaley,j.dx,j.dy,j.rotate)}else i.style.filter=o,h.matrix=c(g),h.offset=g.offset();f&amp;&amp;(this._.transform=f);return this},A.rotate=function(a,b,e){if(this.removed)return this;if(a!=null){a=c(a).split(k),a.length-1&amp;&amp;(b=d(a[1]),e=d(a[2])),a=d(a[0]),e==null&amp;&amp;(b=e);if(b==null||e==null){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}this._.dirtyT=1,this.transform(this._.transform.concat([[&quot;r&quot;,a,b,e]]));return this}},A.translate=function(a,b){if(this.removed)return this;a=c(a).split(k),a.length-1&amp;&amp;(b=d(a[1])),a=d(a[0])||0,b=+b||0,this._.bbox&amp;&amp;(this._.bbox.x+=a,this._.bbox.y+=b),this.transform(this._.transform.concat([[&quot;t&quot;,a,b]]));return this},A.scale=function(a,b,e,f){if(this.removed)return this;a=c(a).split(k),a.length-1&amp;&amp;(b=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&amp;&amp;(e=null),isNaN(f)&amp;&amp;(f=null)),a=d(a[0]),b==null&amp;&amp;(b=a),f==null&amp;&amp;(e=f);if(e==null||f==null)var g=this.getBBox(1);e=e==null?g.x+g.width/2:e,f=f==null?g.y+g.height/2:f,this.transform(this._.transform.concat([[&quot;s&quot;,a,b,e,f]])),this._.dirtyT=1;return this},A.hide=function(){!this.removed&amp;&amp;(this.node.style.display=&quot;none&quot;);return this},A.show=function(){!this.removed&amp;&amp;(this.node.style.display=o);return this},A._getBBox=function(){if(this.removed)return{};return this.type==&quot;text&quot;?{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}:pathDimensions(this.attrs.path)},A.remove=function(){if(!this.removed){a.eve.unbind(&quot;*.*.&quot;+this.id),a._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&amp;&amp;this.shape.parentNode.removeChild(this.shape);for(var b in this)delete this[b];this.removed=!0}},A.attr=function(c,d){if(this.removed)return this;if(c==null){var e={};for(var f in this.attrs)this.attrs[b](f)&amp;&amp;(e[f]=this.attrs[f]);e.gradient&amp;&amp;e.fill==&quot;none&quot;&amp;&amp;(e.fill=e.gradient)&amp;&amp;delete e.gradient,e.transform=this._.transform;return e}if(d==null&amp;&amp;a.is(c,&quot;string&quot;)){if(c==j&amp;&amp;this.attrs.fill==&quot;none&quot;&amp;&amp;this.attrs.gradient)return this.attrs.gradient;var g=c.split(k),h={};for(var i=0,l=g.length;i&lt;l;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],&quot;function&quot;)?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return l-1?h:h[g[0]]}if(this.attrs&amp;&amp;d==null&amp;&amp;a.is(c,&quot;array&quot;)){h={};for(i=0,l=c.length;i&lt;l;i++)h[c[i]]=this.attr(c[i]);return h}var m;d!=null&amp;&amp;(m={},m[c]=d),d==null&amp;&amp;a.is(c,&quot;object&quot;)&amp;&amp;(m=c);for(var n in m)a.eve(&quot;attr.&quot;+n+&quot;.&quot;+this.id,this,m[n]);if(m){for(n in this.paper.customAttributes)if(this.paper.customAttributes[b](n)&amp;&amp;m[b](n)&amp;&amp;a.is(this.paper.customAttributes[n],&quot;function&quot;)){var o=this.paper.customAttributes[n].apply(this,[][concat](m[n]));this.attrs[n]=m[n];for(var p in o)o[b](p)&amp;&amp;(m[p]=o[p])}m.text&amp;&amp;this.type==&quot;text&quot;&amp;&amp;(this.textpath.string=m.text),setFillAndStroke(this,m)}return this},A.toFront=function(){!this.removed&amp;&amp;this.node.parentNode.appendChild(this.node),this.paper&amp;&amp;this.paper.top!=this&amp;&amp;a._tofront(this,this.paper);return this},A.toBack=function(){if(this.removed)return this;this.node.parentNode.firstChild!=this.node&amp;&amp;(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper));return this},A.insertAfter=function(b){if(this.removed)return this;b.constructor==a.st.constructor&amp;&amp;(b=b[b.length-1]),b.node.nextSibling?b.node.parentNode.insertBefore(this.node,b.node.nextSibling):b.node.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper);return this},A.insertBefore=function(b){if(this.removed)return this;b.constructor==a.st.constructor&amp;&amp;(b=b[0]),b.node.parentNode.insertBefore(this.node,b.node),a._insertbefore(this,b,this.paper);return this},A.blur=function(b){var c=this.node.runtimeStyle,d=c.filter;d=d.replace(r,o),+b!==0?(this.attrs.blur=b,c.filter=d+n+m+&quot;.Blur(pixelradius=&quot;+(+b||1.5)+&quot;)&quot;,c.margin=a.format(&quot;-{0}px 0 0 -{0}px&quot;,f(+b||1.5))):(c.filter=d,c.margin=0,delete this.attrs.blur)},a._engine.path=function(a,b){var c=B(&quot;shape&quot;);c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new Element(c,b),e={fill:&quot;none&quot;,stroke:&quot;#000&quot;};a&amp;&amp;(e.path=a),d.type=&quot;path&quot;,d.path=[],d.Path=o,setFillAndStroke(d,e),b.canvas.appendChild(c);var f=B(&quot;skew&quot;);f.on=!0,c.appendChild(f),d.skew=f,d.transform(o);return d},a._engine.rect=function(b,c,d,e,f,g){var h=a._rectPath(c,d,e,f,g),i=b.path(h),j=i.attrs;i.X=j.x=c,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type=&quot;rect&quot;;return i},a._engine.ellipse=function(a,b,c,d,e){var f=a.path(),g=f.attrs;f.X=b-d,f.Y=c-e,f.W=d*2,f.H=e*2,f.type=&quot;ellipse&quot;,setFillAndStroke(f,{cx:b,cy:c,rx:d,ry:e});return f},a._engine.circle=function(a,b,c,d){var e=a.path(),f=e.attrs;e.X=b-d,e.Y=c-d,e.W=e.H=d*2,e.type=&quot;circle&quot;,setFillAndStroke(e,{cx:b,cy:c,r:d});return e},a._engine.image=function(b,c,d,e,f,g){var h=a._rectPath(d,e,f,g),i=b.path(h).attr({stroke:&quot;none&quot;}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];k.src=c,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type=&quot;image&quot;,m.parentNode==l&amp;&amp;l.removeChild(m),m.rotate=!0,m.src=c,m.type=&quot;tile&quot;,i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0);return i},a._engine.text=function(b,d,e,g){var h=B(&quot;shape&quot;),i=B(&quot;path&quot;),j=B(&quot;textpath&quot;);d=d||0,e=e||0,g=g||&quot;&quot;,i.v=a.format(&quot;m{0},{1}l{2},{1}&quot;,f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=c(g),j.on=!0,h.style.cssText=&quot;position:absolute;left:0;top:0;width:1px;height:1px&quot;,h.coordsize=u+n+u,h.coordorigin=&quot;0 0&quot;;var k=new Element(h,b),l={fill:&quot;#000&quot;,stroke:&quot;none&quot;,font:a._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type=&quot;text&quot;,k.attrs.text=c(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,setFillAndStroke(k,l),h.appendChild(j),h.appendChild(i),b.canvas.appendChild(h);var m=B(&quot;skew&quot;);m.on=!0,h.appendChild(m),k.skew=m,k.transform(o);return k},a._engine.setSize=function(a,b){var c=this.canvas.style;this.width=a,this.height=b,a==+a&amp;&amp;(a+=&quot;px&quot;),b==+b&amp;&amp;(b+=&quot;px&quot;),c.width=a,c.height=b,c.clip=&quot;rect(0 &quot;+a+&quot; &quot;+b+&quot; 0)&quot;,this._viewBox&amp;&amp;setViewBox.apply(this,this._viewBox);return this},a._engine.setViewBox=function(b,c,d,e,f){a.eve(&quot;setViewBox&quot;,this,this._viewBox,[b,c,d,e,f]);var h=this.width,i=this.height,j=1/g(d/h,e/i),k,l;f&amp;&amp;(k=i/e,l=h/d,d*k&lt;h&amp;&amp;(b-=(h-d*k)/2/k),e*l&lt;i&amp;&amp;(c-=(i-e*l)/2/l)),this._viewBox=[b,c,d,e,!!f],this._viewBoxShift={dx:-b,dy:-c,scale:j},this.forEach(function(a){a.transform(&quot;...&quot;)});return this};var B,C=function(a){var b=a.document;b.createStyleSheet().addRule(&quot;.rvml&quot;,&quot;behavior:url(#default#VML)&quot;);try{!b.namespaces.rvml&amp;&amp;b.namespaces.add(&quot;rvml&quot;,&quot;urn:schemas-microsoft-com:vml&quot;),B=function(a){return b.createElement(&quot;&lt;rvml:&quot;+a+&#39; class=&quot;rvml&quot;&gt;&#39;)}}catch(c){B=function(a){return b.createElement(&quot;&lt;&quot;+a+&#39; xmlns=&quot;urn:schemas-microsoft.com:vml&quot; class=&quot;rvml&quot;&gt;&#39;)}}};C(a._g.win),a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b.container,d=b.height,e,f=b.width,g=b.x,h=b.y;if(!c)throw new Error(&quot;VML container not found.&quot;);var i=new a._Paper,j=i.canvas=a._g.doc.createElement(&quot;div&quot;),k=j.style;g=g||0,h=h||0,f=f||512,d=d||342,i.width=f,i.height=d,f==+f&amp;&amp;(f+=&quot;px&quot;),d==+d&amp;&amp;(d+=&quot;px&quot;),i.coordsize=u*1e3+n+u*1e3,i.coordorigin=&quot;0 0&quot;,i.span=a._g.doc.createElement(&quot;span&quot;),i.span.style.cssText=&quot;position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;&quot;,j.appendChild(i.span),k.cssText=a.format(&quot;top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden&quot;,f,d),c==1?(a._g.doc.body.appendChild(j),k.left=g+&quot;px&quot;,k.top=h+&quot;px&quot;,k.position=&quot;absolute&quot;):c.firstChild?c.insertBefore(j,c.firstChild):c.appendChild(j),i.renderfix=function(){};return i},a.prototype.clear=function(){a.eve(&quot;clear&quot;,this),this.canvas.innerHTML=o,this.span=a._g.doc.createElement(&quot;span&quot;),this.span.style.cssText=&quot;position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;&quot;,this.canvas.appendChild(this.span),this.bottom=this.top=null},a.prototype.remove=function(){a.eve(&quot;remove&quot;,this),this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=removed(b);return!0}}(window.Raphael)</div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.07577s from github-fe117-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

