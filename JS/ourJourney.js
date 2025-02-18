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
                    '<div class="hockstatementJourney">The journey was long, but the <span class="hockwordsJourney">Planet</span> was worth every <span class="hockwordsJourney">Sacrifice.</span></div>'+
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
                    <img class="ourJourneyImages" src='Journey/${journey.date}.png' alt='${journey.title}' />
                    <span class="journeyTitle">${journey.title}</span>
                    <span class="journeyDate">${journey.date}</span>
                </div>    
                <div class="spacerBetween">.............................</div>
                </div>
                
                `).appendTo(swiper.find('.swiper-wrapper'))

                if (Journey.length == index+1){
                    landmark.find('.spacerBetween').hide();
                    landmark.css('width','fit-content')
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
        title:"Acquired the plastic beads",
        date:"29 Jan 2025",
    },
    {
        title:"First meeting with Al Manatatain",
        date:"30 Jan 2025",
    },
    {
        title:"Gathered the glass from Royal glass company",
        date:"5 Feb 2025",
    },
    {
        title:"Started working on the samples",
        date:"12 Feb 2025",
    },
    {
        title:"Production of the first sample",
        date:"15 Mar 2025",
    }
]