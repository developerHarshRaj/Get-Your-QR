 $("#create").click(function(){
    var text=document.querySelector("input").value;
    var qr_svg = qr.image(text);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    fs.writeFile("link.txt",text,(err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
  })
const fs =require("fs");
