var navbar = (function(){

    //#region Variables
    var mainContainer;
    //#endregion

    function control () {
        $.when(definition()).done(function(){
            body();
        });
        
    };    

    function definition(){
        $('#mainNav').empty();

        mainContainer = $('<div id="Navigator">' +
                    '<div id="Logo"></div>' +
                    '<div id="Tabs"></div>' +
                    '</div>').appendTo('#mainNavBar');        
    };

    function body(){
        var Logo = $('<div class="LogoContainer"></div>').appendTo(mainContainer.find('#Logo'));
        $('<img src="logo.png" alt="Logo" title="Home"/>').appendTo(Logo);

        var Tabs = $('<div class="TabsContainer"></div>').appendTo(mainContainer.find('#Tabs'));
        $(`
            <div class='navtab hoveringover' title="Our Products" data-item="OurProducts"><div style='padding:6px 8px;'>Our Products</div></div>
            <div class='navtab hoveringover' title="About Us" data-item="Aboutus"><div style='padding:6px 8px;'>About Us</div></div>
            <div class='navtab hoveringover' title="Our Journey" data-item="OurJourney"><div style='padding:6px 8px;'>Our Journey</div></div>
            <div class='navtabSelector'></div>
            `).appendTo(Tabs);

            Tabs.find('.navtab').on('click', function() {
                let $this = $(this); 
                $('#mainBody').empty();
                Tabs.find('.navtab').addClass('hoveringover'); 
                $this.removeClass('hoveringover'); 
                
                if ($(this).data("item") === "OurProducts") {
                    OurProducts.control();
                }
                else if ($(this).data("item") === "OurJourney") {
                    OurJourney.control();
                }
                else if ($(this).data("item") === "Aboutus") {
                    aboutUs.control();
                }

                setTimeout(function() {
                    Tabs.find('.navtabSelector').css({
                        'left': $this.position().left,
                        'width': $this.outerWidth(),
                        'height': $this.outerHeight()
                    });
                }, 200);
            });

            Logo.off('click').on('click',function(){
                $('#mainBody').empty();
                Dashboard.control();
            })
            
        Logo.on('click', function(){
            Tabs.find('.navtabSelector').attr('style', '');    
            Tabs.find('.navtab').addClass('hoveringover');           
        });

    };


    return {
        control: control
    };
})();