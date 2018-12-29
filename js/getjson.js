$(function () {
    $.ajax({
        url: "./json/info.json",
        async:false,
        success: function(result){
            var Home=result.Home;
            $("#headimg").attr("src",Home.headimg);
            $("#myName").html(Home.name);
            $("#position").html(Home.position);
            $("#hometext").html(Home.text);
            var homeContact='';
            for(var i in Home.contact){
                homeContact+='<li class="twitter animated bounceIn wow delay-02s animated" style="visibility: visible; animation-name: bounceIn;">' +
                    '<a href="'+Home.contact[i].href+'" target="_blank">' +
                    Home.contact[i].icon +
                    '</a></li>';
            }
            $("#homeContact").html(homeContact);


            var AboutMe=result.AboutMe;
            $("#AboutMeH2").html(AboutMe.h2);
            $("#AboutMeH6").html(AboutMe.h6);
            var barWrapperLeft='';
            for(var i in AboutMe.barWrapperLeft){
                barWrapperLeft+='<div class="barWrapper">' +
                    '<span class="progressText"><B>'+AboutMe.barWrapperLeft[i].title+'</B></span>' +
                    '<div class="progress">' +
                    '<div class="progress-bar" role="progressbar" aria-valuenow="'+AboutMe.barWrapperLeft[i].Percentage+'" aria-valuemin="0" aria-valuemax="100" >' +
                    '<span  class="popOver" data-toggle="tooltip" data-placement="top" title="'+AboutMe.barWrapperLeft[i].Percentage+'%"></span>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            }
            $("#barWrapperLeft").html(barWrapperLeft);
            var barWrapperRight='';
            for(var i in AboutMe.barWrapperRight){
                barWrapperRight+='<div class="barWrapper">' +
                    '<span class="progressText"><B>'+AboutMe.barWrapperRight[i].title+'</B></span>' +
                    '<div class="progress">' +
                    '<div class="progress-bar" role="progressbar" aria-valuenow="'+AboutMe.barWrapperRight[i].Percentage+'" aria-valuemin="0" aria-valuemax="100" >' +
                    '<span  class="popOver" data-toggle="tooltip" data-placement="top" title="'+AboutMe.barWrapperRight[i].Percentage+'%"></span>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            }
            $("#barWrapperRight").html(barWrapperRight);


            var Portfolio=result.Portfolio;
            $("#PortfolioH2").html(Portfolio.h2);
            $("#PortfolioH6").html(Portfolio.h6);
            var tabnav = '';
            for(var i in Portfolio.tab){
                tabnav+=' <li><a id="all" href="#" data-filter="'+ Portfolio.tab[i].datafilter+'">' +
                    '<h5>'+Portfolio.tab[i].h5+'</h5>' +
                    '</a></li>';
            }
            $("#tabnav").html(tabnav);
            $("#tabnav>li").eq(0).addClass('active');
            var protwrapper = '';
            for(var i in Portfolio.prots){
                protwrapper+=' <figure style="position: absolute; left: 0; top: 0; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1); width: 337px; opacity: 1;" class="portfolio-item one-four '+Portfolio.prots[i].datafilter+' isotope-item effect-oscar">' +
                    '<div class="portfolio_img">' +
                    '<img src="'+Portfolio.prots[i].img+'"  alt="Portfolio 1">' +
                    '</div>' +
                    '<figcaption>' +
                    '<div>' +
                    '<a href="'+Portfolio.prots[i].href+'" class="fancybox" target="_blank">' +
                    '<h2>'+Portfolio.prots[i].title+'</h2>' +
                    '<p>'+Portfolio.prots[i].text+'</p>' +
                    '</a>' +
                    '</div>' +
                    '</figcaption>' +
                    '</figure>';
            }
            $("#portfolio_wrapper").html(protwrapper);


            var Experience = result.Experience;
            $("#ExperienceH2").html(Experience.h2);
            $("#ExperienceH6").html(Experience.h6);
            var expers='';
            for(var i in Experience.expers){
                expers+='<div class="message-item" id="'+Experience.expers[i].id+'">' +
                    '<div class="message-inner">' +
                    '<div class="message-head clearfix">' +
                    '<div class="user-detail">' +
                    '<h5 class="handle">'+Experience.expers[i].title+'</h5>' +
                    '<div class="post-meta">' +
                    '<div class="asker-meta">' +
                    '<span class="qa-message-what"></span>' +
                    '<span class="qa-message-when">' +
                    '<span class="qa-message-when-data">'+Experience.expers[i].date+'</span>' +
                    '</span>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="qa-message-content">' +Experience.expers[i].text+
                    '</div>' +
                    '</div>' +
                    '</div>';
            }
            $("#wallmessages").html(expers);
        }
    })
});
