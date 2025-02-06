var aboutUs = (function(){

    //#region Variables
    var mainContainer;
    //#endregion

    function control () {
        $.when(definition()).done(function(){
            body();
        });
        
    };    

    function definition(){
        $('#mainBody').empty();

        mainContainer = $('<div id="aboutUsContainer">' +
                    '<div id="MissionAndVisionContainer"><div>' +
                    '<div id="MeetTheTeamContainer"><div>' +
                    '</div>').appendTo('#mainBody');        
    };

    function body(){
        var missionContainer = $('<div class="missionContainer"></div>').appendTo(mainContainer.find('#MissionAndVisionContainer'));
        $('<i class="icon-Mission"></i>'+
           '<span>Mission</span>'+
           '<span>To innovate and produce durable, sustainable, and eco-conscious building bricks that address global plastic pollution while contributing to a greener construction industry.</span>'
        ).appendTo(missionContainer);

        var visionContainer = $('<div class="visionContainer"></div>').appendTo(mainContainer.find('#MissionAndVisionContainer'));
        $('<i class="icon-Vision"></i>'+
           '<span>Vision</span>'+
           '<span>To become a global leader in sustainable construction materials by driving the adoption of eco-friendly solutions and inspiring a circular economy in the built environment.</span>'
        ).appendTo(visionContainer);

    };


    return {
        control: control
    };
})();