$(document).ready(function(){
    // By default menu is set from css
    // Use local storage to get user preferences for menu, but on resize we should remove open wrapper
    
    $(window).on('resize', function(){
        var win = $(this);
        $(".open-wrapper").hide();
        if (win.width() >= 1500) { 
            $(".sidenav-lg").show();
            $(".sidenav-sm").hide();
            $(".main").removeClass("small-menu-activated");
            $(".top-menu-data").removeClass("small-menu-activated");
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

// Just for the demo, we do not need that much code, as we already have local storage setup
function toggleMenu(menu){
    var width = $(document).width()
    switch(menu) {
        case 'small':
            $(".open-wrapper").hide();
            $(".sidenav-lg").hide();
            $(".sidenav-sm").show();
            if(width > 1500){
                $(".main").addClass("small-menu-activated");
                $(".top-menu-data").addClass("small-menu-activated");
            }
            break;
        case 'large':
            if(width < 1500){
                $(".open-wrapper").show();
            }else{
                $(".main").removeClass("small-menu-activated");
                $(".top-menu-data").removeClass("small-menu-activated");
            }
            $(".sidenav-lg").show();
            $(".sidenav-sm").hide();
            break;
        default:
            $(".open-wrapper").hide();
            $(".sidenav-lg").hide();
            $(".sidenav-sm").show();
    }
}