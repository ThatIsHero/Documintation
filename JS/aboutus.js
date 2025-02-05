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
        $('<div class="visionContainer"></div><div class="missionContainer"></div>').appendTo(mainContainer.find('#MissionAndVisionContainer'));
        

    };


    return {
        control: control
    };
})();