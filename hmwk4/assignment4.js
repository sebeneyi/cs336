// a function to manipulate the text area
// converts the text inputted to uppercase if lowercase
// also outputs the info about the amount of words and characters
function text_area() {
  var text = document.getElementById("textBox");
  text.value = text.value.toUpperCase();

  text.addEventListener('keyup', function text_info() {
    var word_count = text.value.split(' ').length;
    var char_count = text.value.length;

    document.getElementById("word_info").innerHTML = word_count - 1 + " words";
    document.getElementById("char_info").innerHTML = char_count + " characters";
  });
}