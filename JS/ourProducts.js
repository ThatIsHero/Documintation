var OurProducts = (function(){

    //#region Variables
    var mainContainer;
    //#endregion

    function control () {
        $.when(definition()).done(function(){
            body();
        });
        
    };    

    function definition(){

        mainContainer = $('<div id="ourProductsContainer" style="padding-top:10%">' +
                    '<div id="Cards"></div>' +
                    '<div id="HockOurProducts">This is not the end.<span>Stay <span style="color:#990011"> Tuned</span></span></div>' +
                    '</div>').appendTo('#mainBody');   


    };

    function body(){
                $.each(Products,function(index,product){
                  $(`<div class="singlecard">
                      <img class="productImages" src='Products/${product.name}.jpeg' alt='${product.name}' style="width:200px"/>
                      <span>${product.name}</span>
                      <span>${product.description}</span>
                      <span>${product.price}</span>
                    </div>`).appendTo(mainContainer.find('#Cards'))
                });
    };


    return {
        control: control
    };
})();

var Products = [{
  name:"RPP Brick",
  description:"Sand, Cement, Glass, Plastic",
  price:"-- BD"
}]
