console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  var links = $(".hwlink"); // warning sybmol for work
  links.on("click", function handleClick(event){
    event.preventDefault();
    alert("Warning! I'm not smart. Do not copy");
  });
});
