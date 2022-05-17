(function ($) {
    var products = document.querySelector("#products-card");
    var grid5x3 = "<script id='products-card' type='text/javascript'>new Etsy.Mini(7616195,'gallery',1,1,0,'https://www.etsy.com');</script>";
    var grid4x3 = "<script id='products-card' type='text/javascript'>new Etsy.Mini(7616195,'gallery',4,3,0,'https://www.etsy.com');</script>";
    var grid3x3 = "<script id='products-card' type='text/javascript'>new Etsy.Mini(7616195,'gallery',3,3,0,'https://www.etsy.com');</script>";
    var grid2x3 = "<script id='products-card' type='text/javascript'>new Etsy.Mini(7616195,'gallery',2,3,0,'https://www.etsy.com');</script>";
    var grid1x3 = "<script id='products-card' type='text/javascript'>new Etsy.Mini(7616195,'gallery',1,3,0,'https://www.etsy.com');</script>";

    function resize() {

        var min_576 = window.matchMedia('@media only screen and (min-width: 992px) and (max-width: 1200px)').addEventListener("change", function () {
            products.innerText = grid5x3;
            window.location.reload();
        });

        // var min_2500 = window.matchMedia('only screen and (min-width: 2500px)').addEventListener("change", function () {
        //     products.innerText = grid5x3;
        // });
        // var min_1900_max_2499 = window.matchMedia('only screen and (min-width: 1900px) and ' +
        //     '(max-width: 2499px)').addEventListener("change", function () {
        //         products.innerText = "DFSD" //grid4x3;
        //     });
        // var min_1200_max_1899 = window.matchMedia('only screen and (min-width: 1200px) and ' +
        //     '(max-width: 1899px)').addEventListener("change", function () {
        //         products.innerText = "DSFDSFSFD" //grid3x3;
        //     });
        // var min_900_max_1199 = window.matchMedia('only screen and (min-width: 900px) and ' +
        //     '(max-width: 1199px)').addEventListener("change", function () {
        //         products.innerText = "SDFDSFDS" // grid2x3;
        //     });
        // var max_899 = window.matchMedia('only screen and (max-width: 899px)').addEventListener("change", function () {
        //     products.innerText = grid1x3;
        // });
    }

    resize();
}());