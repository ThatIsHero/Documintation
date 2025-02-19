var Dashboard = (function(){

    //#region Variables
    var mainContainer,secondaryContainer;
    //#endregion

    function control () {
        $.when(definition()).done(function(){
            body();
        });
    };    

    function definition(){
        mainContainer = $('<div id="dashboardContainer">' +
            '<div style="display:flex;justify-content:center;"><div id="gifSection"></div>' +
            '<div id="DashboardHockStatement"></div></div>' +
            '<div id="Statement"></div>' +
            '<div id="StatementButton"><div class="button">Our Products</div></div>' +
            '</div>').appendTo('#mainBody');  
        
    };

    function body(){
        $('<img id="gifHock" src="Recycle.gif" alt="Recycle" />').appendTo(mainContainer.find('#gifSection'))
        $('<span>Turning plastic waste into the building blocks of a sustainable <span style="color:#990011">future.</span></span>').appendTo(mainContainer.find('#DashboardHockStatement'))
        $('<span>Build a greener future. <span style="color:#990011">Shop</span> our recycled plastic bricks today!</span>').appendTo(mainContainer.find('#Statement'))

        mainContainer.find('.button').off('click').on('click',function(){
            $('#mainBody').empty();
            OurProducts.control();
        })
    };


    return {
        control: control
    };
})();