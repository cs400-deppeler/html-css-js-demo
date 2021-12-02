var image = new Array();

var caption = new Array();

image[0] = 'map.png'; caption[0]= 'Computer Science';
image[1] = 'photo_1.png'; caption[1]= 'ta 1';
image[2] = 'photo_2.png'; caption[2]= 'ta 2';
image[3] = 'photo_3.png'; caption[3]= 'ta 3';
image[4] = 'photo_4.png'; caption[4]= 'ta 4';
image[5] = 'photo_5.png'; caption[5]= 'ta 5';
image[6] = 'photo_6.png'; caption[6]= 'ta 6';
image[7] = 'photo_7.png'; caption[7]= 'ta 7';
image[8] = 'photo_8.png'; caption[8]= 'ta 8';
image[9] = 'photo_9.png'; caption[9]= 'ta 9';

var minIndex = 1;
var maxIndex = 9;

function queryString(parameter) { 
  var loc = location.search.substring(1, location.search.length);
  var param_value = false;

  var params = loc.split("&");
  for (i=0; i<params.length;i++) {
      param_name = params[i].substring(0,params[i].indexOf('='));
      if (param_name == parameter) {
          param_value = params[i].substring(params[i].indexOf('=')+1)
      }
  }
  return param_value;

}

function writePhotoRow() {
    var param_value = queryString('photo');
    //document.write( "<p>param_value=[" + param_value + "]</p>\n" );
    if (param_value==NaN || param_value==false) { 
        param_value=0;
    }

    var photoIndex = parseInt(param_value,10); 
    var prev = maxIndex; 
    var next = minIndex;
    var isrc = "map.png"; // image[0];
    var icap = "Computer Science"; //caption[0];

    if (photoIndex != NaN && photoIndex!=0) { 
        if (photoIndex < 1 || photoIndex > maxIndex) { photoIndex = 1; }
        if (photoIndex > 2) { prev = photoIndex - 1; } 
        if (photoIndex < maxIndex) { next = photoIndex + 1; }
        isrc = image[photoIndex];
        icap = caption[photoIndex];
    }
    
    document.getElementById('photonav').innerHTML = 
        "<a href='index.html?photo=" + prev + "'> << </a> " +
        icap + " <a href='index.html?photo=" + next + "'> >> </a>" ;

    document.getElementById('photo').innerHTML = 
        "<iframe width='480' height='360' frameborder='0' scrolling='no' " +
        "marginheight='0' marginwidth='10'  src='" + isrc + "'</iframe>"; 
}
