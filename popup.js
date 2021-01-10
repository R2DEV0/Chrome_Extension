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

    $(document).ready(function(){
        document.getElementById('date').innerHTML = new Date().getFullYear();
        manifest = chrome.runtime.getManifest();
        document.getElementById('version').innerHTML = "version" + " " + manifest.version;
        // User Icon Show Options
        $("#options").change(function(){
            // Toggle Icons with background No Words
            if ($(this).val() === '1'){
                $(".modal-iconsNoBackground").hide();
                $(".modal-blackWhiteIcons").hide();
                $(".modal-spanishBlackWhite").hide();
                $(".modal-spanishNoBackground").hide();
                $(".modal-spanishBackground").hide();
                $(".modal-wordsBackground").hide();
                $(".modal-wordsNoBackground").hide();
                $(".modal-blackWhiteWords").hide();
                $(".modal-emojisBackground").hide();
                $(".modal-emojisBlackWhite").hide();
                $(".modal-emojisNoBackground").hide();
                $(".modal-iconBars").hide();
                $(".modal-iconsWithBackground").show();
            }
            // Toggle No background Icons
            if ($(this).val() === '2'){
                $(".modal-iconsWithBackground").hide();
                $(".modal-blackWhiteIcons").hide();
                $(".modal-spanishBlackWhite").hide();
                $(".modal-spanishNoBackground").hide();
                $(".modal-spanishBackground").hide();
                $(".modal-wordsBackground").hide();
                $(".modal-wordsNoBackground").hide();
                $(".modal-blackWhiteWords").hide();
                $(".modal-emojisBackground").hide();
                $(".modal-emojisNoBackground").hide();
                $(".modal-iconBars").hide();
                $(".modal-emojisBlackWhite").hide();
                $(".modal-iconsNoBackground").show();
            }
            // Toggle Math Icons
            if ($(this).val() === '6'){
                $(".modal-iconsWithBackground").hide();
                $(".modal-iconsNoBackground").hide();
                $(".modal-spanishBlackWhite").hide();
                $(".modal-spanishNoBackground").hide();
                $(".modal-spanishBackground").hide();
                $(".modal-wordsBackground").hide();
                $(".modal-wordsNoBackground").hide();
                $(".modal-blackWhiteWords").hide();
                $(".modal-emojisNoBackground").hide();
                $(".modal-emojisBackground").hide();
                $(".modal-iconBars").hide();
                $(".modal-emojisBlackWhite").hide();
                $(".modal-blackWhiteIcons").show();
            }
            // Toggle Spanish No Background
            if ($(this).val() === '11'){
                $(".modal-blackWhiteIcons").hide();
                $(".modal-iconsWithBackground").hide();
                $(".modal-iconsNoBackground").hide();
                $(".modal-spanishBlackWhite").hide();
                $(".modal-spanishBackground").hide();
                $(".modal-wordsBackground").hide();
                $(".modal-wordsNoBackground").hide();
                $(".modal-blackWhiteWords").hide();
                $(".modal-emojisNoBackground").hide();
                $(".modal-emojisBackground").hide();
                $(".modal-emojisBlackWhite").hide();
                $(".modal-iconBars").hide();
                $(".modal-spanishNoBackground").show();
            }
            // Toggle Spanish Black & White
            if ($(this).val() === '12'){
                $(".modal-blackWhiteIcons").hide();
                $(".modal-iconsWithBackground").hide();
                $(".modal-iconsNoBackground").hide();
                $(".modal-spanishNoBackground").hide();
                $(".modal-spanishBackground").hide();
                $(".modal-wordsBackground").hide();
                $(".modal-wordsNoBackground").hide();
                $(".modal-blackWhiteWords").hide();
                $(".modal-emojisBackground").hide();
                $(".modal-emojisNoBackground").hide();
                $(".modal-iconBars").hide();
                $(".modal-emojisBlackWhite").hide();
                $(".modal-spanishBlackWhite").show();
            }
            // Toggle Spanish Background
            if ($(this).val() === '10'){
                $(".modal-blackWhiteIcons").hide();
                $(".modal-iconsWithBackground").hide();
                $(".modal-iconsNoBackground").hide();
                $(".modal-spanishBlackWhite").hide();
                $(".modal-spanishNoBackground").hide();
                $(".modal-wordsBackground").hide();
                $(".modal-wordsNoBackground").hide();
                $(".modal-blackWhiteWords").hide();
                $(".modal-emojisBackground").hide();
                $(".modal-emojisNoBackground").hide();
                $(".modal-emojisBlackWhite").hide();
                $(".modal-iconBars").hide();
                $(".modal-spanishBackground").show();
            }
            // Toggle Icons with background & words
            if ($(this).val() === '4'){
                $(".modal-iconsWithBackground").hide();
                $(".modal-iconsNoBackground").hide();
                $(".modal-blackWhiteIcons").hide();
                $(".modal-spanishBlackWhite").hide();
                $(".modal-spanishNoBackground").hide();
                $(".modal-spanishBackground").hide();
                $(".modal-wordsNoBackground").hide();
                $(".modal-blackWhiteWords").hide();
                $(".modal-emojisBackground").hide();
                $(".modal-emojisNoBackground").hide();
                $(".modal-emojisBlackWhite").hide();
                $(".modal-iconBars").hide();
                $(".modal-wordsBackground").show();
            }
            // Toggle Icons with words no background
            if ($(this).val() === '13'){
                $(".modal-iconsWithBackground").hide();
                $(".modal-iconsNoBackground").hide();
                $(".modal-blackWhiteIcons").hide();
                $(".modal-spanishBlackWhite").hide();
                $(".modal-spanishNoBackground").hide();
                $(".modal-spanishBackground").hide();
                $(".modal-wordsBackground").hide();
                $(".modal-blackWhiteWords").hide();
                $(".modal-emojisBackground").hide();
                $(".modal-emojisNoBackground").hide();
                $(".modal-emojisBlackWhite").hide();
                $(".modal-iconBars").hide();
                $(".modal-wordsNoBackground").show();
            }
            // Toggle black & white icons with words
            if ($(this).val() === '5'){
                $(".modal-iconsWithBackground").hide();
                $(".modal-iconsNoBackground").hide();
                $(".modal-blackWhiteIcons").hide();
                $(".modal-spanishBlackWhite").hide();
                $(".modal-spanishNoBackground").hide();
                $(".modal-spanishBackground").hide();
                $(".modal-wordsBackground").hide();
                $(".modal-wordsNoBackground").hide();
                $(".modal-emojisBackground").hide();
                $(".modal-emojisNoBackground").hide();
                $(".modal-emojisBlackWhite").hide();
                $(".modal-iconBars").hide();
                $(".modal-blackWhiteWords").show();
            }
            // Toggle Emojis with background
            if ($(this).val() === '7'){
                $(".modal-iconsWithBackground").hide();
                $(".modal-iconsNoBackground").hide();
                $(".modal-blackWhiteIcons").hide();
                $(".modal-spanishBlackWhite").hide();
                $(".modal-spanishNoBackground").hide();
                $(".modal-spanishBackground").hide();
                $(".modal-wordsBackground").hide();
                $(".modal-wordsNoBackground").hide();
                $(".modal-blackWhiteWords").hide();
                $(".modal-emojisNoBackground").hide();
                $(".modal-emojisBlackWhite").hide();
                $(".modal-iconBars").hide();
                $(".modal-emojisBackground").show();
            }
            // Toggle Emojis No background
            if ($(this).val() === '8'){
                $(".modal-iconsWithBackground").hide();
                $(".modal-iconsNoBackground").hide();
                $(".modal-blackWhiteIcons").hide();
                $(".modal-spanishBlackWhite").hide();
                $(".modal-spanishNoBackground").hide();
                $(".modal-spanishBackground").hide();
                $(".modal-wordsBackground").hide();
                $(".modal-wordsNoBackground").hide();
                $(".modal-blackWhiteWords").hide();
                $(".modal-emojisBackground").hide();
                $(".modal-emojisBlackWhite").hide();
                $(".modal-iconBars").hide();
                $(".modal-emojisNoBackground").show();
            }
            // Toggle Emojis No background
            if ($(this).val() === '9'){
                $(".modal-iconsWithBackground").hide();
                $(".modal-iconsNoBackground").hide();
                $(".modal-blackWhiteIcons").hide();
                $(".modal-spanishBlackWhite").hide();
                $(".modal-spanishNoBackground").hide();
                $(".modal-spanishBackground").hide();
                $(".modal-wordsBackground").hide();
                $(".modal-wordsNoBackground").hide();
                $(".modal-blackWhiteWords").hide();
                $(".modal-emojisBackground").hide();
                $(".modal-emojisNoBackground").hide();
                $(".modal-iconBars").hide();
                $(".modal-emojisBlackWhite").show();
            }
            // Toggle Emojis No background
            if ($(this).val() === '14'){
                $(".modal-iconsWithBackground").hide();
                $(".modal-iconsNoBackground").hide();
                $(".modal-blackWhiteIcons").hide();
                $(".modal-spanishBlackWhite").hide();
                $(".modal-spanishNoBackground").hide();
                $(".modal-spanishBackground").hide();
                $(".modal-wordsBackground").hide();
                $(".modal-wordsNoBackground").hide();
                $(".modal-blackWhiteWords").hide();
                $(".modal-emojisBackground").hide();
                $(".modal-emojisNoBackground").hide();
                $(".modal-emojisBlackWhite").hide();
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