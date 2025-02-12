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

        mainContainer = $('<div id="aboutUsContainer">' +
                    '<div id="MissionAndVisionContainer" style="padding-top:120px;display:flex;gap:150px;min-height:268.67px"></div>' +
                    '<div id="MeetTheTeamContainer"></div>' +
                    '</div>').appendTo('#mainBody');   


    };

    function body(){
        
        $(`
            <div class="MissionContainer">
                <svg xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 20.001289 20.000372" fill="none" version="1.1" id="svg1" sodipodi:docname="Goal.svg">
  <defs id="defs1"/>
  <sodipodi:namedview id="namedview1" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" showgrid="false">
    <inkscape:page x="0" y="0" width="20.001289" height="20.000372" id="page1" margin="0" bleed="0"/>
  </sodipodi:namedview>
  <path style="fill:#000000;fill-opacity:1;stroke-linecap:round;stroke-linejoin:round" d="M 10.000408,0 C 8.0227149,0 6.0881861,0.58678261 4.4437673,1.6855469 2.7993588,2.7843153 1.5189691,4.3466468 0.76212669,6.1738281 c -0.7568409,1.8271889 -0.956152,3.8376469 -0.5703125,5.7773439 0.3858273,1.939692 1.33982261,3.720649 2.73828121,5.11914 1.3984537,1.398365 3.1794105,2.352411 5.1191405,2.738282 1.939665,0.385755 3.9501041,0.186538 5.7773441,-0.570313 1.826669,-0.756659 3.389584,-2.037726 4.488281,-3.68164 v -0.002 C 19.413089,13.910598 20.000408,11.977083 20.000408,10 c 0,-0.552285 -0.447715,-1 -1,-1 -0.552285,0 -1,0.447715 -1,1 0,1.582322 -0.468522,3.129722 -1.347656,4.445312 -0.87906,1.315702 -2.129917,2.339759 -3.591797,2.945313 C 11.599467,17.99557 9.9911709,18.154223 8.4398609,17.845703 6.8879111,17.536974 5.4630642,16.775085 4.3441579,15.65625 3.2252765,14.537342 2.4633974,13.112455 2.1547048,11.560547 1.8460043,10.008644 2.0042438,8.401364 2.6097829,6.9394531 3.2153205,5.4775545 4.2394238,4.2267678 5.5550954,3.3476562 6.8707566,2.4685605 8.4181009,2 10.000408,2 c 0.552285,0 1,-0.4477153 1,-1 0,-0.55228469 -0.447715,-1 -1,-1 z m 6.507812,0.03710901 c -0.34724,-0.096558 -0.719575,0.00119 -0.974609,0.2558594 L 12.293377,3.5332027 c -0.224202,0.2236256 -0.32925,0.5402193 -0.283203,0.8535156 l 0.28125,1.9082032 -2.9980471,2.9980475 c -0.390423,0.390507 -0.390423,1.023555 0,1.414062 0.390507,0.390423 1.0235551,0.390423 1.4140621,0 l 2.96875,-2.96875 1.955078,0.253907 c 0.307798,0.0398 0.616633,-0.06555 0.835938,-0.285157 L 19.707439,4.4667969 C 20.252589,3.9221232 20.002829,2.9914992 19.25822,2.7929687 L 17.60783,2.3515625 17.211345,0.75781251 C 17.123812,0.40851201 16.855253,0.13323871 16.50822,0.03710901 Z M 15.697674,2.9570312 15.809002,3.40625 c 0.08801,0.3532958 0.361076,0.6308466 0.71289,0.7246094 L 17.068767,4.2773437 15.400799,5.9453125 14.240642,5.7949219 14.062908,4.5917969 Z M 7.9867359,4.3476562 C 7.0347519,4.6866675 6.1850408,5.2599118 5.5140798,6.015625 4.8431263,6.7713432 4.3727327,7.6844 4.1488454,8.669922 c -0.223907,0.985435 -0.1945825,2.012901 0.083984,2.984375 0.2785554,0.971476 0.797673,1.857134 1.5097656,2.574219 0.7121183,0.71711 1.5950369,1.242002 2.5644539,1.527343 0.969504,0.285367 1.9954441,0.320445 2.9824221,0.103516 0.986924,-0.217063 1.901703,-0.680093 2.662109,-1.345703 h 0.002 c 0.760226,-0.665678 1.339851,-1.511324 1.685547,-2.460938 0.189877,-0.519409 -0.07789,-1.094314 -0.597656,-1.283203 -0.518838,-0.188589 -1.092348,0.07893 -1.28125,0.597657 -0.230504,0.633186 -0.618026,1.198655 -1.125,1.642578 -0.506995,0.44379 -1.117315,0.751747 -1.775391,0.896484 C 10.201608,14.050921 9.5178449,14.028124 8.8715489,13.83789 8.2251179,13.647632 7.637279,13.296449 7.1625173,12.818359 6.6877298,12.340244 6.3404294,11.751239 6.1547048,11.103516 5.9689716,10.45579 5.9507443,9.770246 6.1000173,9.113281 6.24929,8.456203 6.562827,7.847612 7.0101735,7.34375 7.4575325,6.8398832 8.0238949,6.4584507 8.6586109,6.2324219 9.1791319,6.0474912 9.4511119,5.4755461 9.2660329,4.9550781 9.0811179,4.433517 8.5077809,4.1612913 7.9867359,4.3476562 Z" id="path1" sodipodi:nodetypes="sccccccccssscccccccsssccccccccccccccccccccccccccccsscccccccccscccccc" inkscape:export-filename="path1.png" inkscape:export-xdpi="96" inkscape:export-ydpi="96"/>
  <path style="fill:#990011;fill-opacity:1;stroke:#88aa00;stroke-width:0.0246792" d="M 9.1892039,19.957174 C 7.1321199,19.764552 5.3255523,19.040405 3.7351068,17.770946 3.3065148,17.428853 2.5601493,16.68237 2.2205694,16.25617 1.9385723,15.902241 1.5193398,15.288825 1.333614,14.958388 0.04918569,12.673177 -0.30939801,10.10262 0.30799829,7.60612 0.59193409,6.4579995 1.0871519,5.3551658 1.7684365,4.3537722 2.335095,3.5208633 3.1666271,2.6510136 3.9964471,2.0230934 5.4927334,0.89086211 7.3488415,0.18960591 9.2373249,0.04303731 c 0.545992,-0.0423750016 0.8908201,-0.034219 1.0673431,0.025248 0.769673,0.2592839 0.923164,1.28079169 0.26061,1.73440199 C 10.353479,1.9476936 10.260274,1.9699122 9.7672389,1.9929293 8.9885479,2.029282 8.3928049,2.1240808 7.7356702,2.3162064 6.0970945,2.7952747 4.6387783,3.8070972 3.5932198,5.1903596 2.3931756,6.7780049 1.8232849,8.842742 2.0341057,10.839092 c 0.3070372,2.907463 2.1758785,5.418169 4.8743666,6.548497 0.9278906,0.388669 1.8312856,0.581247 2.8730316,0.612448 1.9006361,0.05692 3.7468641,-0.562673 5.2443241,-1.760003 0.317795,-0.254101 0.892671,-0.818751 1.142065,-1.12175 1.125145,-1.366984 1.747246,-2.992704 1.831081,-4.785115 0.02575,-0.55062 0.04999,-0.671376 0.173307,-0.863551 0.186119,-0.290041 0.478133,-0.44753 0.829807,-0.44753 0.411719,0 0.773797,0.252038 0.926238,0.644743 0.111477,0.287175 0.04288,1.404959 -0.141598,2.307503 -0.715051,3.49824 -3.206623,6.331633 -6.57482,7.476825 -0.650088,0.221031 -1.253138,0.360742 -1.986226,0.460157 -0.421675,0.05718 -1.6259221,0.0843 -2.0364781,0.04586 z" id="path2" sodipodi:nodetypes="sssssssscsssssscsssssscssss"/>
  <path style="fill:#990011;fill-opacity:1;stroke:#88aa00;stroke-width:0.0246792" d="m 9.5223719,15.970359 c -0.04072,-0.0055 -0.173988,-0.02197 -0.29615,-0.03667 C 8.1590519,15.805216 7.008724,15.299692 6.1525873,14.582945 5.0226056,13.636937 4.279528,12.286741 4.0650011,10.789733 4.0137,10.431745 4.0068135,9.641818 4.0519845,9.296644 4.3437473,7.0671367 5.7547152,5.2477754 7.8368929,4.4162234 c 0.213317,-0.085192 0.247621,-0.091647 0.489059,-0.092025 0.243866,-3.825e-4 0.269627,0.0045 0.423783,0.080395 0.544997,0.2683011 0.727055,0.9597777 0.38089,1.4466651 -0.145824,0.2051057 -0.244988,0.271124 -0.681796,0.4539072 C 7.9307619,6.5219513 7.5499602,6.7814154 7.1408324,7.1963847 6.8346759,7.506913 6.626672,7.792766 6.4426285,8.155905 6.126837,8.778998 5.9971233,9.315926 5.9971233,10 c 0,0.702033 0.1351346,1.248875 0.4653414,1.883075 0.1899977,0.364912 0.3795377,0.619042 0.7030469,0.942625 0.340147,0.340225 0.6498393,0.565324 1.0488643,0.762363 1.137486,0.561692 2.4490101,0.561246 3.5760891,-0.0012 0.897362,-0.447823 1.548502,-1.158123 1.947977,-2.124962 0.124482,-0.301282 0.238699,-0.456211 0.423466,-0.574405 0.405861,-0.259626 0.915314,-0.198771 1.24382,0.148576 0.178254,0.188477 0.256055,0.367761 0.269402,0.620808 0.01218,0.230889 -0.0244,0.365225 -0.217539,0.798872 -0.557679,1.252158 -1.559414,2.289061 -2.800964,2.8993 -0.607345,0.298518 -1.158196,0.473517 -1.78924,0.568421 -0.266372,0.04006 -1.1629891,0.07133 -1.3450151,0.0469 z" id="path3" sodipodi:nodetypes="ccssssscsssssssscsssscsscc"/>
</svg>
                <span class="Title">Our Mission</span>           
                <span style="text-align:center;padding-top:10px;">To innovate and produce durable, sustainable, and eco-conscious building bricks that address global plastic pollution while contributing to a greener construction industry.</span>     
            </div>
            `).appendTo(mainContainer.find('#MissionAndVisionContainer'))

            $(`
                <div class="VisionContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="70px" height="70px" viewBox="0 0 70 70" version="1.1">
<defs>
<filter id="alpha" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%">
  <feColorMatrix type="matrix" in="SourceGraphic" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
</filter>
<mask id="mask0">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.933333;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip1">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface5" clip-path="url(#clip1)">
<path style="fill-rule:nonzero;fill:rgb(98.823529%,90.196079%,32.549021%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(98.823529%,90.196079%,32.549021%);stroke-opacity:1;stroke-miterlimit:4;" d="M 315.485714 10 L 330.514286 15 L 349.485714 25 C 365.314286 34.542857 379.142857 46.028571 391 59.485714 L 394 64.514286 L 393 64.514286 L 372.514286 43 L 347.485714 25 L 325.485714 14 L 315.485714 11 Z M 315.485714 10 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask1">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.996078;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip2">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface8" clip-path="url(#clip2)">
<path style="fill-rule:nonzero;fill:rgb(99.607843%,94.509804%,33.725491%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(99.607843%,94.509804%,33.725491%);stroke-opacity:1;stroke-miterlimit:4;" d="M 313.485714 11 L 317.485714 11 L 325.485714 14 L 347.485714 25 C 364.971429 35.542857 380.142857 48.371429 393 63.485714 L 395 66.514286 C 407.8 80.685714 417.8 97.714286 425 117.485714 L 429 129.485714 L 434 152.514286 L 435 171.485714 L 436 172.514286 L 436 187.485714 L 435 188.514286 L 434 207.485714 L 430 226.514286 C 426 241.171429 420.657143 254.514286 414 266.514286 L 402 285.485714 L 365 329.485714 C 358.857143 338.171429 353.857143 347.657143 350 358 L 321.485714 352 L 296.514286 342 L 294 339.485714 C 300.8 331.314286 306.142857 321.628571 310 310.514286 L 313 297.485714 L 314 275 C 320.8 273.657143 326.142857 270.514286 330 265.485714 C 336.342857 259.171429 339.657143 249.828571 340 237.485714 L 337 225.485714 L 327.485714 212 C 321.171429 205.657143 311.828571 202.342857 299.485714 202 L 287.485714 205 L 278.514286 210 C 274.685714 206.457143 269.714286 204.142857 263.485714 203 L 248.514286 203 C 242.114286 204.257143 236.771429 206.6 232.514286 210 C 226.914286 204.6 218.571429 201.942857 207.485714 202 L 198.514286 204 L 197 202.514286 L 197 193.485714 L 196 192.514286 L 196 167.485714 L 197 166.514286 L 197 157.485714 L 198 156.514286 L 199 144.514286 L 203 128.514286 L 214 100.514286 C 225 78.828571 239.171429 60.342857 256.514286 45 C 272.371429 30.542857 291.371429 19.2 313.485714 11 Z M 313.485714 11 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask2">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.996078;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip3">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface11" clip-path="url(#clip3)">
<path style="fill-rule:nonzero;fill:rgb(99.607843%,94.509804%,33.725491%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(99.607843%,94.509804%,33.725491%);stroke-opacity:1;stroke-miterlimit:4;" d="M 204.514286 218 C 213.028571 217 219.2 218 223 221 L 219 232.514286 L 219 247.485714 L 223 259 L 215.485714 261 C 208.171429 249.142857 203.342857 235.142857 201 219 Z M 204.514286 218 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask3">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.996078;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip4">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface14" clip-path="url(#clip4)">
<path style="fill-rule:nonzero;fill:rgb(99.607843%,94.509804%,33.725491%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(99.607843%,94.509804%,33.725491%);stroke-opacity:1;stroke-miterlimit:4;" d="M 249.485714 218 L 262.514286 218 L 269 221 C 265.657143 226.2 264 233.371429 264 242.514286 L 269 259 L 262.514286 262 L 249.485714 262 L 243 259 C 246.342857 253.8 248 246.628571 248 237.485714 L 243 221 Z M 249.485714 218 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask4">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.996078;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip5">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface17" clip-path="url(#clip5)">
<path style="fill-rule:nonzero;fill:rgb(99.607843%,94.509804%,33.725491%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(99.607843%,94.509804%,33.725491%);stroke-opacity:1;stroke-miterlimit:4;" d="M 296.514286 218 C 308.971429 216.857143 317.142857 220.028571 321 227.485714 C 324.142857 231.371429 325.142857 237.371429 324 245.485714 C 322.342857 251.485714 319.171429 256 314.514286 259 C 310.628571 262.057143 304.628571 263.057143 296.514286 262 L 289 259 L 293 247.485714 L 293 232.514286 L 289 221 Z M 296.514286 218 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask5">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.996078;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip6">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface20" clip-path="url(#clip6)">
<path style="fill-rule:nonzero;fill:rgb(99.607843%,94.509804%,33.725491%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(99.607843%,94.509804%,33.725491%);stroke-opacity:1;stroke-miterlimit:4;" d="M 232.514286 270 C 236.771429 273.4 242.114286 275.742857 248.514286 277 L 263.485714 277 C 269.914286 275.742857 275.228571 273.4 279.485714 270 C 284.028571 274.342857 290.2 276.657143 298 277 L 298 295.485714 L 296 303.485714 L 291 316.514286 L 281 332 C 265.6 323.6 252.257143 312.771429 241 299.485714 L 223 275.485714 Z M 232.514286 270 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask6">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.87451;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip7">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface25" clip-path="url(#clip7)">
<path style="fill-rule:nonzero;fill:rgb(98.823529%,74.509805%,27.058825%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(98.823529%,74.509805%,27.058825%);stroke-opacity:1;stroke-miterlimit:4;" d="M 237.485714 0 L 252 0.514286 L 237.485714 1 Z M 237.485714 0 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask7">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.87451;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip8">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface28" clip-path="url(#clip8)">
<path style="fill-rule:nonzero;fill:rgb(98.823529%,74.509805%,27.058825%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(98.823529%,74.509805%,27.058825%);stroke-opacity:1;stroke-miterlimit:4;" d="M 261.485714 0 L 282.514286 1 L 302 5.485714 L 298.514286 6 L 282.514286 2 L 261.485714 1 Z M 261.485714 0 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask8">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.87451;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip9">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface31" clip-path="url(#clip9)">
<path style="fill-rule:nonzero;fill:rgb(98.823529%,74.509805%,27.058825%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(98.823529%,74.509805%,27.058825%);stroke-opacity:1;stroke-miterlimit:4;" d="M 229.485714 1 L 236 1.485714 L 229.485714 2 Z M 229.485714 1 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask9">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.87451;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip10">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface34" clip-path="url(#clip10)">
<path style="fill-rule:nonzero;fill:rgb(98.823529%,74.509805%,27.058825%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(98.823529%,74.509805%,27.058825%);stroke-opacity:1;stroke-miterlimit:4;" d="M 223.485714 2 L 228 2.514286 L 202.514286 8 L 169.485714 22 C 152.571429 31.4 137.742857 42.914286 125 56.514286 L 117.485714 65 L 120 61.485714 L 136.514286 44 C 149.485714 32.342857 164.514286 22.657143 181.485714 15 C 193.971429 9.142857 207.971429 4.8 223.485714 2 Z M 223.485714 2 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask10">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.87451;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip11">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface37" clip-path="url(#clip11)">
<path style="fill-rule:nonzero;fill:rgb(98.823529%,74.509805%,27.058825%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(98.823529%,74.509805%,27.058825%);stroke-opacity:1;stroke-miterlimit:4;" d="M 303.485714 6 L 312 8.514286 L 309.485714 9 L 303.485714 7 Z M 303.485714 6 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask11">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.87451;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip12">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface40" clip-path="url(#clip12)">
<path style="fill-rule:nonzero;fill:rgb(98.823529%,74.509805%,27.058825%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(98.823529%,74.509805%,27.058825%);stroke-opacity:1;stroke-miterlimit:4;" d="M 313.485714 9 L 316 9.485714 L 313.485714 10 Z M 313.485714 9 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask12">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip13">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface43" clip-path="url(#clip13)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 395.485714 66 L 398.514286 70 Z M 395.485714 66 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask13">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip14">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface46" clip-path="url(#clip14)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 115.485714 67 L 113.485714 70 Z M 115.485714 67 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask14">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip15">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface49" clip-path="url(#clip15)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 399.485714 71 L 401.485714 74 Z M 399.485714 71 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask15">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip16">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface52" clip-path="url(#clip16)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 111.485714 72 L 110.514286 74 Z M 111.485714 72 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask16">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip17">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface55" clip-path="url(#clip17)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 109.485714 75 L 108.514286 77 Z M 109.485714 75 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask17">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip18">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface58" clip-path="url(#clip18)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 402.514286 75 L 403.485714 77 Z M 402.514286 75 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask18">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip19">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface61" clip-path="url(#clip19)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 404.514286 78 L 405.485714 80 Z M 404.514286 78 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask19">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip20">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface64" clip-path="url(#clip20)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 406.514286 81 L 407.485714 83 Z M 406.514286 81 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask20">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip21">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface67" clip-path="url(#clip21)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 408.514286 84 L 409.485714 86 Z M 408.514286 84 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask21">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip22">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface70" clip-path="url(#clip22)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 411.485714 89 L 412.514286 91 Z M 411.485714 89 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask22">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip23">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface73" clip-path="url(#clip23)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 81.485714 134 L 82 136.514286 L 81 136.514286 Z M 81.485714 134 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask23">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip24">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface76" clip-path="url(#clip24)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 430.514286 134 L 431 136.514286 L 430 136.514286 Z M 430.514286 134 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask24">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip25">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface79" clip-path="url(#clip25)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 431.485714 138 L 432 140.514286 L 431 140.514286 Z M 431.485714 138 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask25">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip26">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface82" clip-path="url(#clip26)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 79.485714 143 L 80 145.485714 L 79 145.485714 Z M 79.485714 143 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask26">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip27">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface85" clip-path="url(#clip27)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 432.514286 143 L 433 145.485714 L 432 145.485714 Z M 432.514286 143 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask27">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip28">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface88" clip-path="url(#clip28)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 78.514286 148 L 79 150.514286 L 78 150.514286 Z M 78.514286 148 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask28">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip29">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface91" clip-path="url(#clip29)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 433.485714 148 L 434 150.514286 L 433 150.514286 Z M 433.485714 148 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask29">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip30">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface94" clip-path="url(#clip30)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 434.514286 154 L 435 157.485714 L 434 157.485714 Z M 434.514286 154 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask30">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip31">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface97" clip-path="url(#clip31)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 77.485714 155 L 78 158.514286 L 77 158.514286 Z M 77.485714 155 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask31">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip32">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface100" clip-path="url(#clip32)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 76.514286 163 L 77 169.485714 L 76 169.485714 Z M 76.514286 163 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask32">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip33">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface103" clip-path="url(#clip33)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 435.485714 163 L 436 169.485714 L 435 169.485714 Z M 435.485714 163 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask33">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip34">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface106" clip-path="url(#clip34)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 76.514286 189 L 77 195.485714 L 76 195.485714 Z M 76.514286 189 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask34">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip35">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface109" clip-path="url(#clip35)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 435.485714 190 L 436 196.514286 L 435 196.514286 Z M 435.485714 190 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask35">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip36">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface112" clip-path="url(#clip36)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 77.485714 201 L 78 204.514286 L 77 204.514286 Z M 77.485714 201 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask36">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip37">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface115" clip-path="url(#clip37)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 434.514286 201 L 435 204.514286 L 434 204.514286 Z M 434.514286 201 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask37">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip38">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface118" clip-path="url(#clip38)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 78.514286 208 L 79 210.514286 L 78 210.514286 Z M 78.514286 208 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask38">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip39">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface121" clip-path="url(#clip39)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 433.485714 208 L 434 211.485714 L 433 211.485714 Z M 433.485714 208 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask39">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip40">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface124" clip-path="url(#clip40)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 432.514286 214 L 433 216.514286 L 432 216.514286 Z M 432.514286 214 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask40">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip41">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface127" clip-path="url(#clip41)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 413.485714 267 L 412.514286 269 Z M 413.485714 267 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask41">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip42">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface130" clip-path="url(#clip42)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 104.514286 277 L 105.485714 279 Z M 104.514286 277 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask42">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip43">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface133" clip-path="url(#clip43)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 407.485714 277 L 406.514286 279 Z M 407.485714 277 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask43">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip44">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface136" clip-path="url(#clip44)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 106.514286 280 L 107.485714 282 Z M 106.514286 280 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask44">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip45">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface139" clip-path="url(#clip45)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 405.485714 280 L 404.514286 282 Z M 405.485714 280 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask45">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip46">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface142" clip-path="url(#clip46)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 403.485714 283 L 402.514286 285 Z M 403.485714 283 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask46">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip47">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface145" clip-path="url(#clip47)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 111.485714 287 L 112.514286 289 Z M 111.485714 287 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask47">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip48">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface148" clip-path="url(#clip48)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 400.514286 287 L 399.485714 289 Z M 400.514286 287 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask48">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip49">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface151" clip-path="url(#clip49)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 114.514286 291 L 116.514286 294 Z M 114.514286 291 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask49">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip50">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface154" clip-path="url(#clip50)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 397.485714 291 L 395.485714 294 Z M 397.485714 291 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask50">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip51">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface157" clip-path="url(#clip51)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 393.485714 296 L 389.485714 301 Z M 393.485714 296 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask51">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip52">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface160" clip-path="url(#clip52)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 119.485714 297 L 123.485714 302 Z M 119.485714 297 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask52">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip53">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface163" clip-path="url(#clip53)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 384.514286 306 L 379.485714 312 Z M 384.514286 306 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask53">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip54">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface166" clip-path="url(#clip54)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 129.485714 308 L 132.514286 312 Z M 129.485714 308 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask54">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip55">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface169" clip-path="url(#clip55)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 135.485714 315 L 137.485714 318 Z M 135.485714 315 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask55">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip56">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface172" clip-path="url(#clip56)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 376.514286 315 L 374.514286 318 Z M 376.514286 315 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask56">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip57">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface175" clip-path="url(#clip57)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 139.485714 320 L 140.514286 322 Z M 139.485714 320 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask57">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip58">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface178" clip-path="url(#clip58)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 372.514286 320 L 371.485714 322 Z M 372.514286 320 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask58">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip59">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface181" clip-path="url(#clip59)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 142.514286 324 L 143.485714 326 Z M 142.514286 324 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask59">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip60">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface184" clip-path="url(#clip60)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 369.485714 324 L 368.514286 326 Z M 369.485714 324 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask60">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip61">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface187" clip-path="url(#clip61)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 367.485714 327 L 366.514286 329 Z M 367.485714 327 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask61">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip62">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface190" clip-path="url(#clip62)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 363.485714 333 L 362.514286 335 Z M 363.485714 333 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask62">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip63">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface193" clip-path="url(#clip63)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 150.514286 336 L 151.485714 338 Z M 150.514286 336 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask63">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip64">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface196" clip-path="url(#clip64)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 361.485714 336 L 360.514286 338 Z M 361.485714 336 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask64">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip65">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface199" clip-path="url(#clip65)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 357.485714 343 L 356.514286 345 Z M 357.485714 343 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask65">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip66">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface202" clip-path="url(#clip66)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 173.485714 388 L 174.514286 390 Z M 173.485714 388 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask66">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip67">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface205" clip-path="url(#clip67)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 338.514286 388 L 337.485714 390 Z M 338.514286 388 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask67">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip68">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface208" clip-path="url(#clip68)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 176.514286 392 L 177.485714 394 Z M 176.514286 392 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask68">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip69">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface211" clip-path="url(#clip69)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 335.485714 392 L 334.514286 394 Z M 335.485714 392 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask69">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip70">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface214" clip-path="url(#clip70)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 331.485714 395 L 330.514286 397 Z M 331.485714 395 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask70">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip71">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface217" clip-path="url(#clip71)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 188.514286 399 L 192 400.514286 L 190.514286 401 Z M 188.514286 399 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask71">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip72">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface220" clip-path="url(#clip72)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 321 399 L 324 399.485714 L 321.485714 401 Z M 321 399 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask72">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip73">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface223" clip-path="url(#clip73)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 190 439 C 192 438.342857 192.657143 439 192 441 C 190 441.657143 189.342857 441 190 439 Z M 190 439 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask73">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.988235;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip74">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface226" clip-path="url(#clip74)">
<path style="fill-rule:nonzero;fill:rgb(83.92157%,56.078434%,45.490196%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(83.92157%,56.078434%,45.490196%);stroke-opacity:1;stroke-miterlimit:4;" d="M 321.485714 439 L 322 441 L 320 440.514286 Z M 321.485714 439 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask74">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip75">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface229" clip-path="url(#clip75)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 395.485714 65 C 410.685714 74.8 424.2 86.285714 436 99.485714 L 438 102.514286 C 448.942857 113.228571 458.257143 125.571429 466 139.485714 L 464 138.514286 C 453.657143 120.514286 441.171429 104.657143 426.514286 91 C 417.571429 81.942857 407.571429 73.942857 396.514286 67 Z M 395.485714 65 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask75">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip76">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface232" clip-path="url(#clip76)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 114.514286 66 L 116 66.514286 C 102.6 75.114286 90.6 85.114286 80 96.514286 C 67.257143 109.428571 56.114286 123.942857 46.514286 140 L 47 138.514286 L 57 122.514286 L 74 101 L 76 101 L 76 99 C 77.8 99.742857 78.457143 99.228571 78 97.485714 L 87.485714 88 L 89 88 L 90.514286 85 Z M 114.514286 66 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask76">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip77">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface235" clip-path="url(#clip77)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 45.485714 141 L 45 142.514286 L 31.485714 169 L 31 167.485714 Z M 45.485714 141 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask77">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip78">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface238" clip-path="url(#clip78)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 466.514286 141 L 480 166.514286 L 479 166.514286 Z M 466.514286 141 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask78">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip79">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface241" clip-path="url(#clip79)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 480.514286 168 L 486 181.485714 L 485 181.485714 Z M 480.514286 168 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask79">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip80">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface244" clip-path="url(#clip80)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 30.514286 170 L 31 171.485714 L 26.514286 182 L 26 179.485714 Z M 30.514286 170 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask80">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip81">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface247" clip-path="url(#clip81)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 25.485714 183 L 26 184.514286 L 23.485714 190 L 23 188.514286 Z M 25.485714 183 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask81">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip82">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface250" clip-path="url(#clip82)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 486.514286 183 L 491 196.514286 L 490 196.514286 Z M 486.514286 183 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask82">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip83">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface253" clip-path="url(#clip83)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 22.514286 191 L 23 193.485714 L 21.485714 197 L 21 194.514286 Z M 22.514286 191 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask83">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip84">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface256" clip-path="url(#clip84)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 19.485714 201 L 20 203.485714 L 19 203.485714 Z M 19.485714 201 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask84">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip85">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface259" clip-path="url(#clip85)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 492.514286 201 L 493 203.485714 L 492 203.485714 Z M 492.514286 201 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask85">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip86">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface262" clip-path="url(#clip86)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 18.514286 205 L 19 207.485714 L 17.485714 212 L 17 208.514286 Z M 18.514286 205 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask86">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip87">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface265" clip-path="url(#clip87)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 493.485714 205 L 494 207.485714 L 493 207.485714 Z M 493.485714 205 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask87">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip88">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface268" clip-path="url(#clip88)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 494.514286 209 L 495 211.485714 L 494 211.485714 Z M 494.514286 209 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask88">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip89">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface271" clip-path="url(#clip89)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 16.514286 213 L 17 216.514286 L 16 216.514286 Z M 16.514286 213 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask89">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip90">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface274" clip-path="url(#clip90)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 495.485714 213 L 496 216.514286 L 495 216.514286 Z M 495.485714 213 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask90">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip91">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface277" clip-path="url(#clip91)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 15.485714 218 L 16 221.485714 L 14.514286 228 L 14 222.514286 Z M 15.485714 218 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask91">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip92">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface280" clip-path="url(#clip92)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 496.514286 218 L 498 227.485714 L 497 227.485714 Z M 496.514286 218 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask92">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip93">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface283" clip-path="url(#clip93)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 13.485714 229 L 14 233.485714 L 13 233.485714 Z M 13.485714 229 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask93">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip94">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface286" clip-path="url(#clip94)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 498.514286 229 L 499 233.485714 L 498 233.485714 Z M 498.514286 229 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask94">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip95">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface289" clip-path="url(#clip95)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 12.514286 236 L 13 242.514286 L 12 242.514286 Z M 12.514286 236 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask95">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip96">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface292" clip-path="url(#clip96)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 499.485714 236 L 500 242.514286 L 499 242.514286 Z M 499.485714 236 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask96">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip97">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface295" clip-path="url(#clip97)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 11.485714 245 L 12 256.514286 L 11 256.514286 Z M 11.485714 245 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask97">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip98">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface298" clip-path="url(#clip98)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 500.514286 245 L 501 256.514286 L 500 256.514286 Z M 500.514286 245 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask98">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip99">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface301" clip-path="url(#clip99)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 11.485714 277 L 12 288.514286 L 11 288.514286 Z M 11.485714 277 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask99">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip100">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface304" clip-path="url(#clip100)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 500.514286 277 L 501 288.514286 L 500 288.514286 Z M 500.514286 277 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask100">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip101">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface307" clip-path="url(#clip101)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 12.514286 291 L 13 297.485714 L 12 297.485714 Z M 12.514286 291 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask101">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip102">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface310" clip-path="url(#clip102)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 499.485714 291 L 500 297.485714 L 499 297.485714 Z M 499.485714 291 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask102">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip103">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface313" clip-path="url(#clip103)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 13.485714 300 L 14 304.514286 L 13 304.514286 Z M 13.485714 300 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask103">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip104">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface316" clip-path="url(#clip104)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 498.514286 300 L 499 304.514286 L 498 304.514286 Z M 498.514286 300 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask104">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip105">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface319" clip-path="url(#clip105)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 14.514286 307 L 15 311.485714 L 14 311.485714 Z M 14.514286 307 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask105">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip106">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface322" clip-path="url(#clip106)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 497.485714 307 L 498 311.485714 L 496.514286 316 L 496 312.514286 Z M 497.485714 307 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask106">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip107">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface325" clip-path="url(#clip107)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 15.485714 313 L 16 315.485714 L 15 315.485714 Z M 15.485714 313 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask107">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip108">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface328" clip-path="url(#clip108)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 16.514286 317 L 19 328.514286 L 18 328.514286 L 16 321.485714 Z M 16.514286 317 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask108">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip109">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface331" clip-path="url(#clip109)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 495.485714 317 L 496 320.514286 L 495 320.514286 Z M 495.485714 317 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask109">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip110">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface334" clip-path="url(#clip110)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 494.514286 322 L 495 325.485714 L 493.485714 329 L 493 326.514286 Z M 494.514286 322 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask110">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip111">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface337" clip-path="url(#clip111)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 19.485714 330 L 20 332.514286 L 19 332.514286 Z M 19.485714 330 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask111">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip112">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface340" clip-path="url(#clip112)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 492.514286 330 L 493 332.514286 L 492 332.514286 Z M 492.514286 330 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask112">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip113">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface343" clip-path="url(#clip113)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 21.485714 337 L 23 342.514286 L 22 342.514286 Z M 21.485714 337 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask113">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip114">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface346" clip-path="url(#clip114)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 490.514286 337 L 491 339.485714 L 485.485714 354 L 485 352.514286 Z M 490.514286 337 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask114">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip115">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface349" clip-path="url(#clip115)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 24.514286 347 L 27 353.485714 L 26 353.485714 Z M 24.514286 347 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask115">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip116">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface352" clip-path="url(#clip116)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 27.485714 355 L 29 358.514286 L 28 358.514286 Z M 27.485714 355 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask116">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip117">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface355" clip-path="url(#clip117)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 484.514286 355 L 485 356.514286 L 483.485714 359 L 483 357.485714 Z M 484.514286 355 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask117">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip118">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface358" clip-path="url(#clip118)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 29.485714 360 L 31 363.485714 L 30 363.485714 Z M 29.485714 360 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask118">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip119">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface361" clip-path="url(#clip119)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 482.514286 360 L 483 361.485714 C 468.657143 395.485714 448.828571 424 423.485714 447 L 401.485714 465 L 403.485714 462 C 414.371429 454.542857 424.2 446.028571 433 436.514286 C 453.857143 415.371429 470.371429 389.857143 482.514286 360 Z M 482.514286 360 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask119">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip120">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface364" clip-path="url(#clip120)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 31.485714 365 L 46 392.514286 L 44 391.485714 L 31 366.514286 Z M 31.485714 365 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask120">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip121">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface367" clip-path="url(#clip121)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 46.514286 394 C 57.771429 412.742857 71.114286 429.4 86.514286 444 C 99.171429 456.342857 113.342857 467.171429 129 476.514286 L 127.485714 476 L 98 456 C 98.742857 454.2 98.228571 453.542857 96.514286 454 L 76 434.514286 L 54 407.485714 Z M 46.514286 394 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask121">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip122">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface370" clip-path="url(#clip122)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 399.485714 465 L 397.485714 468 L 383.485714 477 L 384.514286 475 Z M 399.485714 465 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask122">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip123">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface373" clip-path="url(#clip123)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 130.514286 477 L 156 490.514286 L 154.514286 491 L 134.514286 481 Z M 130.514286 477 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask123">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip124">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface376" clip-path="url(#clip124)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 381.485714 477 L 380.514286 479 L 354.514286 492 L 354.514286 491 Z M 381.485714 477 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask124">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip125">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface379" clip-path="url(#clip125)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 157.485714 491 L 163 493.485714 L 161.485714 494 L 157.485714 492 Z M 157.485714 491 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask125">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip126">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface382" clip-path="url(#clip126)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 351.485714 492 L 353 492.514286 L 349.485714 494 L 349.485714 493 Z M 351.485714 492 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask126">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip127">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface385" clip-path="url(#clip127)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 164.514286 494 L 168 495.485714 L 166.514286 496 Z M 164.514286 494 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask127">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip128">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface388" clip-path="url(#clip128)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 346.514286 494 L 348 494.514286 L 336.514286 499 L 336.514286 498 Z M 346.514286 494 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask128">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.556863;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip129">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface391" clip-path="url(#clip129)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 169.485714 496 L 176 498.514286 L 174.514286 499 L 169.485714 497 Z M 169.485714 496 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask129">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.996078;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip130">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface394" clip-path="url(#clip130)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 114.514286 67 L 113 69.485714 C 98.657143 87.485714 88 109.171429 81 134.514286 L 76 163.485714 L 76 185.485714 L 67 205.485714 L 59 235.485714 L 58 248.514286 L 57 249.485714 L 57 259.485714 L 56 260.514286 L 56 278.514286 L 100.514286 312 L 107 318.514286 L 108 328.514286 L 103.485714 335 C 101.628571 337.457143 98.285714 338.457143 93.485714 338 L 64 326 C 68.542857 344.457143 75.2 360.8 84 375 L 87.485714 376 L 94.514286 376 L 95.485714 377 L 140.514286 382 L 148 386.514286 L 151 392.514286 L 151 397.485714 L 146.514286 405 L 135.485714 409 L 113 411.485714 C 130.142857 430.028571 151.142857 444.685714 176 455.485714 L 176 465.485714 C 177.742857 470.428571 180.571429 474.257143 184.514286 477 L 192 480.514286 C 186.457143 481.314286 182.457143 483.628571 180 487.485714 C 177.542857 490.171429 176.2 493.657143 176 498 C 159.057143 492.857143 143.571429 485.857143 129.485714 477 C 110.685714 465.457143 93.857143 451.971429 79 436.514286 C 56.942857 413.914286 39.6 386.571429 27 354.514286 L 20 333.485714 L 14 306.514286 L 13 291.485714 L 12 290.514286 L 12 277.485714 L 11 276.514286 L 11 257.485714 L 12 256.514286 L 13 234.514286 L 17 212.514286 L 23 190.514286 L 31 169.485714 C 44.8 138.971429 62.971429 112.8 85.485714 91 Z M 114.514286 67 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask130">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.996078;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip131">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface397" clip-path="url(#clip131)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 397.485714 67 C 410.085714 75.742857 421.6 85.571429 432 96.514286 C 454.6 119.228571 472.257143 146.914286 485 179.485714 L 492 200.514286 L 499 234.514286 L 500 256.514286 L 501 257.485714 L 501 276.514286 L 500 277.485714 L 499 299.485714 L 495 321.485714 L 492 333.485714 L 480 366.514286 C 466.257143 396.771429 448.085714 422.6 425.485714 444 C 401.314286 468 371.457143 486 336 498 C 335.4 491.8 332.914286 487.142857 328.514286 484 C 326.628571 481.542857 323.8 480.542857 320 481 C 319.142857 478.8 320.285714 478.142857 323.485714 479 L 332 472.514286 C 335.6 468.514286 336.942857 462.657143 336 455 C 360.857143 444.657143 381.857143 430.171429 399 411.485714 L 371.485714 408 L 364 403.485714 C 361.457143 401.371429 360.457143 397.714286 361 392.514286 L 365.485714 385 L 368.514286 383 L 377.485714 381 L 384.514286 381 L 385.485714 380 L 392.514286 380 L 393.485714 379 L 400.514286 379 L 401.485714 378 L 408.514286 378 L 409.485714 377 L 416.514286 377 L 428 375 L 439 353.485714 L 447 332.514286 L 448 326 L 424.514286 336 L 414.514286 338 L 406 332.514286 C 403.857143 330.285714 403.2 326.628571 404 321.485714 C 405.057143 316.914286 407.571429 313.742857 411.485714 312 L 456 278.514286 L 456 260.514286 L 455 259.485714 L 454 241.485714 L 447 211.485714 L 436 185.485714 L 436 163.485714 L 431 134.514286 C 426.6 118.228571 420.6 103.571429 413 90.514286 Z M 397.485714 67 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask131">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.996078;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip132">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface400" clip-path="url(#clip132)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 117.485714 295 L 118.514286 297 Z M 117.485714 295 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask132">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.996078;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip133">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface403" clip-path="url(#clip133)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 125.485714 304 L 128.514286 308 Z M 125.485714 304 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask133">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.996078;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip134">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface406" clip-path="url(#clip134)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 178.514286 394 L 179.485714 396 Z M 178.514286 394 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask134">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.996078;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip135">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface409" clip-path="url(#clip135)">
<path style="fill-rule:nonzero;fill:rgb(78.431374%,7.843138%,7.843138%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(78.431374%,7.843138%,7.843138%);stroke-opacity:1;stroke-miterlimit:4;" d="M 333.485714 394 L 332.514286 396 Z M 333.485714 394 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
<mask id="mask135">
  <g filter="url(#alpha)">
<rect x="0" y="0" width="70" height="70" style="fill:rgb(0%,0%,0%);fill-opacity:0.992157;stroke:none;"/>
  </g>
</mask>
<clipPath id="clip136">
  <rect x="0" y="0" width="70" height="70"/>
</clipPath>
<g id="surface412" clip-path="url(#clip136)">
<path style="fill-rule:nonzero;fill:rgb(76.862746%,93.725491%,98.039216%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(76.862746%,93.725491%,98.039216%);stroke-opacity:1;stroke-miterlimit:4;" d="M 192.514286 400 L 319.485714 400 C 325.028571 401.142857 329.2 403.628571 332 407.485714 C 335.257143 410.914286 336.6 416.228571 336 423.485714 C 334.857143 429.028571 332.371429 433.2 328.514286 436 C 326.628571 438.457143 323.8 439.457143 320 439 C 319.142857 441.2 320.285714 441.857143 323.485714 441 L 332 447.485714 C 335.257143 450.914286 336.6 456.228571 336 463.485714 C 334.857143 469.028571 332.371429 473.2 328.514286 476 C 326.628571 478.542857 323.8 479.542857 320 479 C 319.142857 481.2 320.285714 481.857143 323.485714 481 L 332 487.485714 C 334.457143 490.028571 335.8 493.714286 336 498.514286 L 318.514286 505 L 287.485714 511 L 278.514286 511 L 277.485714 512 L 234.514286 512 L 233.485714 511 L 225.485714 511 L 224.514286 510 L 206.514286 508 L 186.514286 503 L 176 498.514286 C 176.6 491.771429 179.085714 486.942857 183.485714 484 C 185.285714 481.542857 188.142857 480.542857 192 481 C 192.857143 478.8 191.714286 478.142857 188.514286 479 L 180 472.514286 C 176.742857 469.085714 175.4 463.771429 176 456.514286 C 177.142857 450.971429 179.628571 446.8 183.485714 444 L 192 441 C 192.857143 438.8 191.714286 438.142857 188.514286 439 L 180 432.514286 C 176.742857 429.085714 175.4 423.771429 176 416.514286 C 177.142857 410.971429 179.628571 406.8 183.485714 404 Z M 192.514286 400 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
</g>
</defs>
<g id="surface1">
<use xlink:href="#surface5" mask="url(#mask0)"/>
<use xlink:href="#surface8" mask="url(#mask1)"/>
<use xlink:href="#surface11" mask="url(#mask2)"/>
<use xlink:href="#surface14" mask="url(#mask3)"/>
<use xlink:href="#surface17" mask="url(#mask4)"/>
<use xlink:href="#surface20" mask="url(#mask5)"/>
<use xlink:href="#surface25" mask="url(#mask6)"/>
<use xlink:href="#surface28" mask="url(#mask7)"/>
<use xlink:href="#surface31" mask="url(#mask8)"/>
<use xlink:href="#surface34" mask="url(#mask9)"/>
<use xlink:href="#surface37" mask="url(#mask10)"/>
<use xlink:href="#surface40" mask="url(#mask11)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 252.514286 0 L 274.514286 1 L 275.485714 2 L 288.514286 3 L 302.514286 6 L 315 10.514286 C 284.8 21.628571 260.142857 38.314286 241 60.514286 C 226.142857 76.971429 214.457143 96.628571 206 119.485714 L 199 144.514286 L 198 156.514286 L 197 157.485714 L 196 192.514286 L 197 193.485714 L 197 202.514286 L 199 204.514286 C 190.057143 206.914286 183.4 211.571429 179 218.514286 L 173 232.514286 L 173 247.485714 C 175.4 258.085714 180.571429 265.942857 188.514286 271 L 199 276.514286 L 199 296.514286 L 204 315.485714 C 208.2 325.371429 213.542857 334.028571 220 341.485714 L 227 359.485714 L 228 373.485714 L 229 374.514286 L 229 400 L 192.514286 400 L 182.514286 397 L 176 391.485714 L 171 382.514286 L 171 379.485714 L 164 360.514286 L 151 335.485714 L 135 313.485714 L 111 286.514286 L 93 256.514286 L 86 239.485714 L 81 222.514286 L 77 199.485714 L 76 175.485714 L 77 174.514286 L 77 160.514286 L 78 159.485714 L 80 141.485714 C 82.942857 128.428571 86.942857 116.428571 92 105.485714 C 102.2 83.371429 115.714286 64.542857 132.514286 49 C 148.228571 34.057143 166.914286 22.057143 188.514286 13 L 213.485714 5 L 228.514286 2 L 251.485714 1 Z M 252.514286 0 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 207.485714 202 L 213 202.514286 L 207.485714 203 Z M 207.485714 202 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 299.485714 202 L 305 202.514286 L 299.485714 203 Z M 299.485714 202 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 248.514286 203 L 263.485714 203 C 269.914286 204.257143 275.228571 206.6 279.485714 210 L 282 208.514286 L 280 211.485714 C 290.142857 217.714286 294.457143 229.714286 293 247.485714 L 289 258.514286 L 283 267 L 280 268.514286 L 281 270.514286 L 279.485714 270 C 275.228571 273.4 269.914286 275.742857 263.485714 277 L 248.514286 277 C 237.885714 274.6 230.057143 269.428571 225 261.485714 L 219 247.485714 L 219 232.514286 L 223 221.485714 L 229 213 L 237.485714 207 Z M 250 218 L 244 221 C 239.342857 223.657143 236 228 234 234 C 232.657143 242 233.657143 248.342857 237 253 C 239.657143 257 244 260 250 262 C 258.657143 263.342857 265 262.342857 269 259 C 273.657143 256.342857 276.657143 252 278 246 C 279.342857 237.342857 278.342857 231.342857 275 228 C 272.342857 223.342857 268.342857 220 263 218 Z M 250 218 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 230.514286 208 L 231.485714 210 Z M 230.514286 208 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 322.514286 208 L 323.485714 210 Z M 322.514286 208 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 327.485714 212 L 329.485714 215 Z M 327.485714 212 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 206.514286 217 L 214 217.485714 L 206.514286 218 Z M 206.514286 217 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 298.514286 217 L 306 217.485714 L 298.514286 218 Z M 298.514286 217 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 200.514286 219 C 203.371429 235.142857 208.371429 249.142857 215.485714 261 L 218 261.485714 L 209.485714 263 C 208.714286 261.457143 206.714286 261.142857 203.485714 262 L 197.485714 259 L 191 252.514286 L 188 246.514286 L 187 239.485714 C 188.542857 238.685714 188.857143 236.685714 188 233.485714 L 191 227.485714 L 197.485714 221 Z M 200.514286 219 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 316.514286 222 L 319.485714 226 Z M 316.514286 222 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 324.514286 236 L 325 243.485714 L 324 243.485714 Z M 324.514286 236 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 247.485714 237 L 248 242.514286 L 247 242.514286 Z M 247.485714 237 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 264.514286 237 L 265 242.514286 L 264 242.514286 Z M 264.514286 237 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 339.485714 237 L 340 242.514286 L 339 242.514286 Z M 339.485714 237 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 319.485714 254 L 316.514286 258 Z M 319.485714 254 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 298.514286 262 L 306 262.514286 L 298.514286 263 Z M 298.514286 262 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 329.485714 265 L 327.485714 268 Z M 329.485714 265 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 231.485714 270 L 230.514286 272 Z M 231.485714 270 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 323.485714 270 L 322.514286 272 Z M 323.485714 270 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 222.514286 275 C 232.028571 290.142857 243.371429 303.457143 256.514286 315 L 281 332.514286 L 274 344.514286 L 269 362.514286 L 269 400 L 243 400 L 243 363.485714 L 238 344.514286 C 233.857143 334.685714 228.542857 326.028571 222 318.514286 L 217 307.485714 L 214 296.514286 L 213 278.514286 Z M 222.514286 275 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 313.485714 276 L 314 287.485714 L 313 287.485714 Z M 313.485714 276 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 298.514286 277 L 299 290.514286 L 298 290.514286 Z M 298.514286 277 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 312.514286 295 L 313 297.485714 L 312 297.485714 Z M 312.514286 295 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 388.514286 301 L 387.485714 303 Z M 388.514286 301 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 284.514286 326 L 283.485714 328 Z M 284.514286 326 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 282.514286 329 L 281.485714 331 Z M 282.514286 329 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 300.514286 329 L 299.485714 331 Z M 300.514286 329 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 298.514286 332 L 297.485714 334 Z M 298.514286 332 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,76.078433%,25.490198%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,76.078433%,25.490198%);stroke-opacity:1;stroke-miterlimit:4;" d="M 293.485714 339 L 296.514286 342 L 315.485714 350 L 336.514286 356 L 349 358 L 344 370.514286 L 341 382.514286 L 332.514286 395 L 327.485714 398 L 319.485714 400 L 283 400 L 284 364.514286 C 285.742857 354.571429 288.914286 346.057143 293.485714 339 Z M 293.485714 339 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<use xlink:href="#surface43" mask="url(#mask12)"/>
<use xlink:href="#surface46" mask="url(#mask13)"/>
<use xlink:href="#surface49" mask="url(#mask14)"/>
<use xlink:href="#surface52" mask="url(#mask15)"/>
<use xlink:href="#surface55" mask="url(#mask16)"/>
<use xlink:href="#surface58" mask="url(#mask17)"/>
<use xlink:href="#surface61" mask="url(#mask18)"/>
<use xlink:href="#surface64" mask="url(#mask19)"/>
<use xlink:href="#surface67" mask="url(#mask20)"/>
<use xlink:href="#surface70" mask="url(#mask21)"/>
<use xlink:href="#surface73" mask="url(#mask22)"/>
<use xlink:href="#surface76" mask="url(#mask23)"/>
<use xlink:href="#surface79" mask="url(#mask24)"/>
<use xlink:href="#surface82" mask="url(#mask25)"/>
<use xlink:href="#surface85" mask="url(#mask26)"/>
<use xlink:href="#surface88" mask="url(#mask27)"/>
<use xlink:href="#surface91" mask="url(#mask28)"/>
<use xlink:href="#surface94" mask="url(#mask29)"/>
<use xlink:href="#surface97" mask="url(#mask30)"/>
<use xlink:href="#surface100" mask="url(#mask31)"/>
<use xlink:href="#surface103" mask="url(#mask32)"/>
<use xlink:href="#surface106" mask="url(#mask33)"/>
<use xlink:href="#surface109" mask="url(#mask34)"/>
<use xlink:href="#surface112" mask="url(#mask35)"/>
<use xlink:href="#surface115" mask="url(#mask36)"/>
<use xlink:href="#surface118" mask="url(#mask37)"/>
<use xlink:href="#surface121" mask="url(#mask38)"/>
<use xlink:href="#surface124" mask="url(#mask39)"/>
<use xlink:href="#surface127" mask="url(#mask40)"/>
<use xlink:href="#surface130" mask="url(#mask41)"/>
<use xlink:href="#surface133" mask="url(#mask42)"/>
<use xlink:href="#surface136" mask="url(#mask43)"/>
<use xlink:href="#surface139" mask="url(#mask44)"/>
<use xlink:href="#surface142" mask="url(#mask45)"/>
<use xlink:href="#surface145" mask="url(#mask46)"/>
<use xlink:href="#surface148" mask="url(#mask47)"/>
<use xlink:href="#surface151" mask="url(#mask48)"/>
<use xlink:href="#surface154" mask="url(#mask49)"/>
<use xlink:href="#surface157" mask="url(#mask50)"/>
<use xlink:href="#surface160" mask="url(#mask51)"/>
<use xlink:href="#surface163" mask="url(#mask52)"/>
<use xlink:href="#surface166" mask="url(#mask53)"/>
<use xlink:href="#surface169" mask="url(#mask54)"/>
<use xlink:href="#surface172" mask="url(#mask55)"/>
<use xlink:href="#surface175" mask="url(#mask56)"/>
<use xlink:href="#surface178" mask="url(#mask57)"/>
<use xlink:href="#surface181" mask="url(#mask58)"/>
<use xlink:href="#surface184" mask="url(#mask59)"/>
<use xlink:href="#surface187" mask="url(#mask60)"/>
<use xlink:href="#surface190" mask="url(#mask61)"/>
<use xlink:href="#surface193" mask="url(#mask62)"/>
<use xlink:href="#surface196" mask="url(#mask63)"/>
<use xlink:href="#surface199" mask="url(#mask64)"/>
<use xlink:href="#surface202" mask="url(#mask65)"/>
<use xlink:href="#surface205" mask="url(#mask66)"/>
<use xlink:href="#surface208" mask="url(#mask67)"/>
<use xlink:href="#surface211" mask="url(#mask68)"/>
<use xlink:href="#surface214" mask="url(#mask69)"/>
<use xlink:href="#surface217" mask="url(#mask70)"/>
<use xlink:href="#surface220" mask="url(#mask71)"/>
<use xlink:href="#surface223" mask="url(#mask72)"/>
<use xlink:href="#surface226" mask="url(#mask73)"/>
<path style="fill-rule:nonzero;fill:rgb(99.215686%,65.882355%,24.705882%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(99.215686%,65.882355%,24.705882%);stroke-opacity:1;stroke-miterlimit:4;" d="M 76.514286 170 L 77 174.514286 L 76 174.514286 Z M 76.514286 170 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(99.215686%,65.882355%,24.705882%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(99.215686%,65.882355%,24.705882%);stroke-opacity:1;stroke-miterlimit:4;" d="M 76.514286 185 L 77 188.514286 L 76 188.514286 Z M 76.514286 185 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(99.215686%,65.882355%,24.705882%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(99.215686%,65.882355%,24.705882%);stroke-opacity:1;stroke-miterlimit:4;" d="M 203.485714 203 C 216.914286 201.942857 226.742857 204.428571 233 210.514286 L 229 213 L 223.485714 221 L 213.485714 217 L 206.514286 217 C 199.714286 218.857143 194.542857 222.371429 191 227.485714 L 188 233.485714 L 187 240.514286 C 188.542857 241.371429 188.857143 243.371429 188 246.514286 L 191 252.514286 L 197.485714 259 L 203.485714 262 L 210.514286 263 C 211.485714 261.342857 213.828571 261 217.485714 262 L 223.485714 259 L 233 269.485714 L 221.485714 276 L 214.514286 277 L 213 278.514286 L 214 296.514286 L 217 307.485714 C 220.6 317.228571 225.6 325.571429 232 332.514286 L 241 353.485714 L 243 363.485714 L 243 400 L 229 400 L 229 374.514286 L 228 373.485714 L 227 359.485714 L 223 347.485714 L 210 327.485714 L 201 306.514286 L 199 296.514286 L 199 276.514286 L 197.485714 275 C 189.285714 272.542857 183.142857 268.028571 179 261.485714 L 173 247.485714 L 173 232.514286 C 175.4 221.885714 180.571429 214.057143 188.514286 209 L 195.485714 205 Z M 203.485714 203 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(99.215686%,65.882355%,24.705882%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(99.215686%,65.882355%,24.705882%);stroke-opacity:1;stroke-miterlimit:4;" d="M 295.485714 203 C 303.771429 202.057143 310.428571 202.742857 315.485714 205 C 322.371429 207.8 327.857143 211.971429 332 217.485714 C 335.4 221.771429 337.742857 227.085714 339 233.485714 L 339 246.514286 C 336.657143 256.828571 331.828571 264.657143 324.514286 270 L 313 276.514286 L 313 294.514286 L 308 314.514286 C 304.342857 324.171429 299.342857 332.514286 293 339.485714 L 285 359.485714 L 284 373.485714 L 283 374.514286 L 283 400 L 269 400 L 269 362.514286 L 274 344.514286 L 295 308.514286 L 299 290.514286 L 299 277 C 290.857143 276.657143 284.542857 274.171429 280 269.485714 L 281.485714 267 C 283.028571 267.542857 283.542857 267.028571 283 265.485714 L 288.514286 259 L 298.514286 263 L 305.485714 263 C 311.771429 261.6 316.6 258.771429 320 254.514286 C 323.8 250.628571 325.457143 244.628571 325 236.514286 C 323.6 230.228571 320.771429 225.4 316.514286 222 C 312.628571 218.2 306.628571 216.542857 298.514286 217 L 288.514286 221 L 280 210.514286 C 283.857143 206.714286 289.028571 204.2 295.485714 203 Z M 295.485714 203 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(99.215686%,65.882355%,24.705882%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(99.215686%,65.882355%,24.705882%);stroke-opacity:1;stroke-miterlimit:4;" d="M 242.514286 222 L 247 233.485714 L 247 246.514286 L 242.514286 258 C 235.485714 254 232.657143 245.828571 234 233.485714 C 235.742857 228.571429 238.571429 224.742857 242.514286 222 Z M 242.514286 222 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(99.215686%,65.882355%,24.705882%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(99.215686%,65.882355%,24.705882%);stroke-opacity:1;stroke-miterlimit:4;" d="M 269.485714 222 C 273.428571 224.742857 276.257143 228.571429 278 233.485714 L 278 245.485714 C 276.6 251.028571 273.771429 255.2 269.485714 258 L 265 246.514286 L 265 233.485714 Z M 269.485714 222 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(99.215686%,65.882355%,24.705882%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(99.215686%,65.882355%,24.705882%);stroke-opacity:1;stroke-miterlimit:4;" d="M 117.485714 294 L 118.514286 296 Z M 117.485714 294 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(99.215686%,65.882355%,24.705882%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(99.215686%,65.882355%,24.705882%);stroke-opacity:1;stroke-miterlimit:4;" d="M 124.514286 302 L 126.514286 305 Z M 124.514286 302 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(99.215686%,65.882355%,24.705882%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(99.215686%,65.882355%,24.705882%);stroke-opacity:1;stroke-miterlimit:4;" d="M 133.485714 312 L 134.514286 314 Z M 133.485714 312 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(60.000002%,0%,6.666667%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(60.000002%,0%,6.666667%);stroke-opacity:1;stroke-miterlimit:4;" d="M 75.485714 186 L 77 205.485714 L 80 221.485714 L 90 251.485714 C 95.6 264.228571 102.257143 275.914286 110 286.514286 L 134 313.485714 L 150 335.485714 C 159.257143 349.571429 166.257143 365.914286 171 384.514286 L 179.485714 396 L 190 400.514286 C 185.142857 401.971429 181.457143 404.628571 179 408.514286 C 175.8 411.971429 174.8 417.628571 176 425.485714 C 177.742857 430.428571 180.571429 434.257143 184.514286 437 L 190 439 C 190.742857 440.8 190.228571 441.457143 188.514286 441 L 179 448.514286 L 175.485714 455 C 150.771429 444.4 129.942857 429.914286 113 411.485714 L 140.514286 408 L 148 403.485714 L 151 397.485714 L 151 392.514286 L 146.514286 385 L 143.485714 383 L 134.514286 381 L 127.485714 381 L 126.514286 380 L 119.485714 380 L 118.514286 379 L 111.485714 379 L 110.514286 378 L 103.485714 378 L 102.514286 377 L 95.485714 377 L 84 375 C 75.2 360.8 68.542857 344.457143 64 326 L 87.485714 336 L 97.485714 338 L 106 332.514286 C 108.142857 330.285714 108.8 326.628571 108 321.485714 C 106.942857 316.914286 104.428571 313.742857 100.514286 312 L 56 278.514286 L 56 260.514286 L 57 259.485714 L 57 249.485714 L 58 248.514286 L 60 230.514286 L 67 205.485714 Z M 75.485714 186 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<path style="fill-rule:nonzero;fill:rgb(60.000002%,0%,6.666667%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(60.000002%,0%,6.666667%);stroke-opacity:1;stroke-miterlimit:4;" d="M 436.514286 186 L 445 205.485714 L 452 230.514286 L 454 248.514286 L 455 249.485714 L 455 259.485714 L 456 260.514286 L 456 278.514286 L 411.485714 312 L 405 318.514286 L 404 328.514286 L 408.514286 335 C 410.371429 337.457143 413.714286 338.457143 418.514286 338 L 448 326 L 447 332.514286 L 439 353.485714 L 428 375 L 424.514286 376 L 417.485714 376 L 416.514286 377 L 371.485714 382 L 364 386.514286 L 361 392.514286 L 361 397.485714 L 365.485714 405 L 371.485714 408 L 399 411.485714 C 382.057143 429.914286 361.228571 444.4 336.514286 455 C 334.571429 449.942857 331.571429 445.942857 327.485714 443 L 322 441 C 321.257143 439.2 321.771429 438.542857 323.485714 439 L 333 431.485714 C 336.2 428.028571 337.2 422.371429 336 414.514286 C 334.257143 409.571429 331.428571 405.742857 327.485714 403 L 322 400.514286 C 328.6 399.085714 333.6 396.085714 337 391.485714 L 341 384.514286 C 343.657143 373.171429 347.342857 362.828571 352 353.485714 L 362 335.485714 L 378 313.485714 L 402 286.514286 C 409.742857 275.914286 416.4 264.228571 422 251.485714 L 432 221.485714 L 435 205.485714 Z M 436.514286 186 " transform="matrix(0.136719,0,0,0.136719,0,0)"/>
<use xlink:href="#surface229" mask="url(#mask74)"/>
<use xlink:href="#surface232" mask="url(#mask75)"/>
<use xlink:href="#surface235" mask="url(#mask76)"/>
<use xlink:href="#surface238" mask="url(#mask77)"/>
<use xlink:href="#surface241" mask="url(#mask78)"/>
<use xlink:href="#surface244" mask="url(#mask79)"/>
<use xlink:href="#surface247" mask="url(#mask80)"/>
<use xlink:href="#surface250" mask="url(#mask81)"/>
<use xlink:href="#surface253" mask="url(#mask82)"/>
<use xlink:href="#surface256" mask="url(#mask83)"/>
<use xlink:href="#surface259" mask="url(#mask84)"/>
<use xlink:href="#surface262" mask="url(#mask85)"/>
<use xlink:href="#surface265" mask="url(#mask86)"/>
<use xlink:href="#surface268" mask="url(#mask87)"/>
<use xlink:href="#surface271" mask="url(#mask88)"/>
<use xlink:href="#surface274" mask="url(#mask89)"/>
<use xlink:href="#surface277" mask="url(#mask90)"/>
<use xlink:href="#surface280" mask="url(#mask91)"/>
<use xlink:href="#surface283" mask="url(#mask92)"/>
<use xlink:href="#surface286" mask="url(#mask93)"/>
<use xlink:href="#surface289" mask="url(#mask94)"/>
<use xlink:href="#surface292" mask="url(#mask95)"/>
<use xlink:href="#surface295" mask="url(#mask96)"/>
<use xlink:href="#surface298" mask="url(#mask97)"/>
<use xlink:href="#surface301" mask="url(#mask98)"/>
<use xlink:href="#surface304" mask="url(#mask99)"/>
<use xlink:href="#surface307" mask="url(#mask100)"/>
<use xlink:href="#surface310" mask="url(#mask101)"/>
<use xlink:href="#surface313" mask="url(#mask102)"/>
<use xlink:href="#surface316" mask="url(#mask103)"/>
<use xlink:href="#surface319" mask="url(#mask104)"/>
<use xlink:href="#surface322" mask="url(#mask105)"/>
<use xlink:href="#surface325" mask="url(#mask106)"/>
<use xlink:href="#surface328" mask="url(#mask107)"/>
<use xlink:href="#surface331" mask="url(#mask108)"/>
<use xlink:href="#surface334" mask="url(#mask109)"/>
<use xlink:href="#surface337" mask="url(#mask110)"/>
<use xlink:href="#surface340" mask="url(#mask111)"/>
<use xlink:href="#surface343" mask="url(#mask112)"/>
<use xlink:href="#surface346" mask="url(#mask113)"/>
<use xlink:href="#surface349" mask="url(#mask114)"/>
<use xlink:href="#surface352" mask="url(#mask115)"/>
<use xlink:href="#surface355" mask="url(#mask116)"/>
<use xlink:href="#surface358" mask="url(#mask117)"/>
<use xlink:href="#surface361" mask="url(#mask118)"/>
<use xlink:href="#surface364" mask="url(#mask119)"/>
<use xlink:href="#surface367" mask="url(#mask120)"/>
<use xlink:href="#surface370" mask="url(#mask121)"/>
<use xlink:href="#surface373" mask="url(#mask122)"/>
<use xlink:href="#surface376" mask="url(#mask123)"/>
<use xlink:href="#surface379" mask="url(#mask124)"/>
<use xlink:href="#surface382" mask="url(#mask125)"/>
<use xlink:href="#surface385" mask="url(#mask126)"/>
<use xlink:href="#surface388" mask="url(#mask127)"/>
<use xlink:href="#surface391" mask="url(#mask128)"/>
<use xlink:href="#surface394" mask="url(#mask129)"/>
<use xlink:href="#surface397" mask="url(#mask130)"/>
<use xlink:href="#surface400" mask="url(#mask131)"/>
<use xlink:href="#surface403" mask="url(#mask132)"/>
<use xlink:href="#surface406" mask="url(#mask133)"/>
<use xlink:href="#surface409" mask="url(#mask134)"/>
<use xlink:href="#surface412" mask="url(#mask135)"/>
</g>
</svg>
                    <span class="Title">Our Vision</span>           
                    <span style="text-align:center;padding-top:10px;">To become a global leader in sustainable construction materials by driving the adoption of eco-friendly solutions and inspiring a circular economy in the built environment.</span>     
                </div>
                `).appendTo(mainContainer.find('#MissionAndVisionContainer'))


                $(`
                    <span class='Title'>Meet The <span style="color:#990011 ">Team</span></span>
                    <div class='ManagementSection'></div>
                    <div class='DepartmentsSection'></div>
                    `).appendTo(mainContainer.find('#MeetTheTeamContainer'))

                   $.each(Magamenet, function (index, value) {
                    $(`
                    <div class='ManagementCard'>
                        <img class="teamMemberImages" src='MemberTeam/${value.name}.png' alt='${value.name}' />
                        <span class="teamMemberName">${value.name}</span>
                        <span class="teamMemberPosition">${value.position}</span>
                    </div>
                    `).appendTo(mainContainer.find('.ManagementSection'))
                   });
                   $.each(Department, function (index, value) {
                    $(`
                    <div class='ManagementCard'>
                        <img class="teamMemberImages" src='MemberTeam/${value.name}.png' alt='${value.name}' />
                        <span class="teamMemberName">${value.name}</span>
                        <span class="teamMemberPosition">${value.position}</span>
                    </div>
                    `).appendTo(mainContainer.find('.DepartmentsSection'))
                   });
    };


    return {
        control: control
    };
})();

var Magamenet = [
    {
        name: 'Abdulla Khan',	
        position: 'CEO',	
    },
    {
        name: 'Manar Sadeq',	
        position: 'CFO',	
    },
    {
        name: 'Gufran Ali',	
        position: 'COO',	
    }
];

var Department = [
    {
        name: 'Arfan Mohamed',	
        position: 'HR',	
    },
    {
        name: 'Sima Feras',	
        position: 'Project Management',	
    },
    {
        name: 'Hawra Al-Arab',	
        position: 'R&D Team',	
    },
    {
        name: 'S.Ali Al-Mosawi',	
        position: 'Finance Team',	
    },
    {
        name: 'Duaa Adel',	
        position: 'Sales Team',	
    },
    {
        name: 'Hanadi Al-Anzi',	
        position: 'Marketing Team',	
    },
    {
        name: 'Kawther Mansour',	
        position: 'Marketing Team',	
    },
    {
        name: 'Mahra Muneer',	
        position: 'Marketing Team',	
    },
    {
        name: 'Nawra Ali',	
        position: 'Marketing Team',	
    },
];