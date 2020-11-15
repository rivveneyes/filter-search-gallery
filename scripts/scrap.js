
    window.addEventListener('load', function() {
        baguetteBox.run('.gallery');
      });


      function myFunction() {
        var input, filter, ul, li, img, i, txtValue;
        input = document.getElementById("search");
        // console.log(input.value.toUpperCase());
        filter = input.value.toUpperCase();
        // change input of user to upper case
        ul = document.getElementById("listPhotos");
            // console.log(ul);
        li = ul.getElementsByTagName("li");
        // console.log(li);===length of 2 from zero index
        for (i = 0; i < li.length; i++) {
            img = li[i].getElementsByTagName("img")[0];
            // console.log(img.alt);
            txtValue = img.alt;
            //txtValue is pulled from the <img>alt="asd"
             if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }