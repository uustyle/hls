(function ($) {

    var init = false;

    // DOMの準備が完了した後、処理を実行
    $(function () {

        console.log("test");

        $(document).on('init', function () {

            if (init) {
                console.log("return2");
                return;
            };

            console.log("video", $("#video"));

            // https://qiita.com/horikeso/items/5f6863a49e8348f63c4b
            var btn = $("#btn");
            // $(document).on("click", "#btn", function () {
            $(document).on("click", btn, function () {

            //以下ではだめ    
                // btn.on('click',  function () { 
                //$("#btn").on('click', function () {


                console.log("btn clickされた init");

            });


            init = true;

        });


        $(document).on('show', function () {

            $("#btn").on('click', function () {


                console.log("btn clickされた show");

            });



        });


    });
})(jQuery); 