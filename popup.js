(function () {
    $(function () {

        //Cross-browser function to select content
        function SelectText(element) {
            var doc = document;
            if (doc.body.createTextRange) {
                var range = document.body.createTextRange();
                range.moveToElementText(element);
                range.select();
            } else if (window.getSelection) {
                var selection = window.getSelection();
                var range = document.createRange();
                range.selectNodeContents(element);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }

        document.getElementById('date').innerHTML = new Date().getFullYear();
        // User Icon Show Options
        $("#options").on('change', function(){
            // Toggle all Icons with no words
            if ($(this).val() === '1'){
                $(".modal-spanishIcons").hide();
                $(".modal-wordsIcons").hide();
                $(".modal-emojis").hide();
                $(".modal-iconBars").hide();
                $(".modal-iconsOnly").show();
            }
            // Toggle all Icons with words
            if ($(this).val() === '2'){
                $(".modal-iconsOnly").hide();
                $(".modal-spanishIcons").hide();
                $(".modal-emojis").hide();
                $(".modal-iconBars").hide();
                $(".modal-wordsIcons").show();
            }
            // Toggle Emojis
            if ($(this).val() === '3'){
                $(".modal-iconsOnly").hide();
                $(".modal-spanishIcons").hide();
                $(".modal-wordsIcons").hide();
                $(".modal-iconBars").hide();
                $(".modal-emojis").show();
            }
            // Toggle Spanish Icons
            if ($(this).val() === '4'){
                $(".modal-iconsOnly").hide();
                $(".modal-emojis").hide();
                $(".modal-wordsIcons").hide();
                $(".modal-iconBars").hide();
                $(".modal-spanishIcons").show();
            }
            // Toggle Icons Bars
            if ($(this).val() === '5'){
                $(".modal-iconsOnly").hide();
                $(".modal-emojis").hide();
                $(".modal-spanishIcons").hide();
                $(".modal-wordsIcons").hide();
                $(".modal-iconBars").show();
            }
        });
        // Run copy image function
        $(".copyable").click(function (e) {
            //Make the container Div contenteditable
            $(this).attr("contenteditable", true);
            //Select the image
            SelectText($(this).get(0));
            //Execute copy Command
            document.execCommand('copy');            
            //Unselect the content
            window.getSelection().removeAllRanges();
            //Make the container Div uneditable again
            $(this).removeAttr("contenteditable");
            //Success!!
            document.getElementById('msg').innerHTML="Image Copied!";
            setTimeout(function(){ msg.style.display = "none"; }, 1200);
            msg.style.display = "block";
        });

        // Run copy image function for emojis with no backgrounds
        $(".copyableE").click(function (e) {
            $(this).attr("contenteditable", true);
            img = this.children[0];
            img.height = '15';
            SelectText($(this).get(0));
            document.execCommand('copy');
            img.height = '35';
            window.getSelection().removeAllRanges();
            $(this).removeAttr("contenteditable");
            document.getElementById('msg').innerHTML="Image Copied!";
            setTimeout(function(){ msg.style.display = "none"; }, 1200);
            msg.style.display = "block";
        });

        // Run copy image function for emojis with backgrounds
        $(".copyableB").click(function (e) {
            $(this).attr("contenteditable", true);
            img = this.children[0];
            img.height = '20';
            SelectText($(this).get(0));
            document.execCommand('copy');
            img.height = '45';
            window.getSelection().removeAllRanges();
            $(this).removeAttr("contenteditable");
            document.getElementById('msg').innerHTML="Image Copied!";
            setTimeout(function(){ msg.style.display = "none"; }, 1200);
            msg.style.display = "block";
        });

        // Run copy image function in spanish!
        $(".copyableS").click(function (e) {
            $(this).attr("contenteditable", true);
            SelectText($(this).get(0));
            document.execCommand('copy');            
            window.getSelection().removeAllRanges();
            $(this).removeAttr("contenteditable");
            document.getElementById('msg').innerHTML="Imagen Copiada!";
            setTimeout(function(){ msg.style.display = "none"; }, 1200);
            msg.style.display = "block";
        });
        
    });
})();