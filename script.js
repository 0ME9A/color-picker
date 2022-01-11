      // getting all Elements
      var color_red = document.getElementById("color-red");
      var color_green = document.getElementById("color-green");
      var color_blue = document.getElementById("color-blue");
      var text = document.getElementsByClassName("text");
      var color_id = document.getElementsByClassName("color-id");
      var color_sample = document.getElementsByClassName("color-sample");

      // empty variables and when we slide input then input value will be here
      var red;
      var green;
      var blue;

      setInterval(() => {
        // getting value from range input and giving to the red, green and blue variable
        red = color_red.value;
        green = color_green.value;
        blue = color_blue.value;

        // giving text color from empty variable red, green and blue
        text[0].style.color = "rgb(" + red + "," + green + "," + blue + ")";

        // giving color id (rbg) value from text (html h1) color
        color_id[0].innerHTML = text[0].style.color;

        // here is same the color from html tag text
        color_sample[0].style.backgroundColor = text[0].style.color;
      }, 100);