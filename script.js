$(document).ready(function(){
    //by default menu is set from css
    //Use local storage to get user preferences for menu, but on resize we should remove open wrapper
    $(".toggle, .open-wrapper").click(function(){
        console.log($(document).width())
        var width = $(document).width()
        if(width < 1500){
            $(".open-wrapper").toggle();
        }
        if(width > 1500){
            menuActivated();
        }
        $(".sidenav-lg").toggle();
        $(".sidenav-sm").toggle();
        
        
    });
    $(window).on('resize', function(){
        var win = $(this);
        $(".open-wrapper").hide();
        if (win.width() >= 1500) { 
            $(".sidenav-lg").show();
            $(".sidenav-sm").hide();
        }else{
            $(".sidenav-lg").hide();
            $(".sidenav-sm").show();
        }
    });
    function menuActivated(){
        $(".main").toggleClass("small-menu-activated");
        $(".top-menu-data").toggleClass("small-menu-activated");
    }
});