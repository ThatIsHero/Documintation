var OurJourney = (function(){

    //#region Variables
    var mainContainer;
    //#endregion

    function control () {
        $.when(definition()).done(function(){
            body();
        });
        
    };    

    function definition(){

        mainContainer = $('<div id="OurJourneyContainer">' +
                    '</div>').appendTo('#mainBody');                       


    };

    function body(){
        var swiper = $(`<div class="swiper-container">
            <div class="swiper-wrapper">                
            </div>
        </div>`).appendTo(mainContainer)
            
        $.each(Journey,function(index,journey){
            var landmark = $(`<div class="swiper-slide">
                <div class="swiperinformation">
                    <span class="journeyTitle">${journey.title}</span>
                    <span class="journeyDate">${journey.date}</span>
                </div>    
                <div class="spacerBetween">.............................</div>
                </div>
                
                `).appendTo(swiper.find('.swiper-wrapper'))

                if (Journey.length == index+1){
                    landmark.find('.spacerBetween').hide();
                    landmark.css('justify-content','flex-start')
                }
        });

        console.log(swiper);

        var swiperer = new Swiper('.swiper-container', {            
            slidesPerView: 'auto',

            loop: false,
        });
        
    };


    return {
        control: control
    };

    
})();

var Journey = [
    {
        title:"Visit to glass factory",
        date:"17 Feb. 2025",
    },
    {
        title:"Visit to glass factory",
        date:"17 Feb. 2025",
    },
    {
        title:"Visit to glass factory",
        date:"17 Feb. 2025",
    },
    {
        title:"Visit to glass factory",
        date:"17 Feb. 2025",
    },
    {
        title:"Visit to glass factory",
        date:"17 Feb. 2025",
    },
    {
        title:"Visit to glass factory",
        date:"17 Feb. 2025",
    },
    {
        title:"Visit to glass factory",
        date:"17 Feb. 2025",
    },
    {
        title:"Visit to glass factory",
        date:"17 Feb. 2025",
    }
]