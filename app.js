// Imported Images in a Array by giving complete url
var imges = ['images/PG1.png', 'images/PG2.png', 'images/PG3.png'];

// homepage links
var homepage_links = [
    "https://oralsinitajai.com.br/",
    "https://oralsinnavegantes.com.br/",
    "https://oralsinflorianopolis.com.br/",
    "https://oralsinindaial.com.br/"
]

// whatsapp links
var whatsapp_links = [
    "https://api.whatsapp.com/send?phone=554791038700&text=Ol%C3%A1%2C%20visitei%20o%20site%20Oral%20Sin%20Itaja%C3%AD%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es",
    "https://api.whatsapp.com/send?phone=554797419230&text=Ol%C3%A1%2C%20visitei%20o%20site%20Oral%20Sin%20Navegantes%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es",
    "https://api.whatsapp.com/send?phone=554884237975&text=Ol%C3%A1%2C%20visitei%20o%20site%20Oral%20Sin%20Grande%20Floripa%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es",
    "https://api.whatsapp.com/send?phone=5547997420271&text=Ol%C3%A1%2C%20visitei%20o%20site%20Oral%20Sin%20Indaial%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
]

// Privacy Policy link
var privacy_policy_link = "https://www.oralsin.com.br/politica_de_privacidade"

var output = document.getElementById('output');
let contact_info = {"name":"", "phone":""};

// Opening the 1st Image
openfile(imges[0]);
clickpattern();

// adding Event Listener
document.getElementById("output").addEventListener('click', function() {
                    //console.log('Click');
                    clickpattern();});

// Opening a  file
function openfile(filepath){
    output.src = filepath;
    //console.log("Current Img URL = ", output.src);
};

// click count but it refreshes again as per page loads
function APICall(n){
            //console.log("Clicked Now !!!!!", n);
};


function pg1func(op){
    var logo = document.getElementById("logo");
    logo.style = "position: absolute; top: 25px; left: 90px; height: 45px; background: transparent; width: 150px; border-radius: 2%; border:1px solid transparent;";
    logo.onclick= function(){APICall(0);window.location.href=homepage_links[0]};

    var implantes = document.getElementById("implantes");
    implantes.style = "position: absolute;top: 207px;left: 27px;height: 43px;background: transparent;width: 137px;border-radius: 2%;border: 1px solid transparent;";
    implantes.onclick = function(){APICall(1); op.src = imges[2]; pg3func(op);};

    var prótese = document.getElementById("prótese");
    prótese.style = "position: absolute; top: 207px; left: 171px; height: 43px; background: transparent; width: 137px; border-radius: 2%; border:1px solid transparent;";
    prótese.onclick= function(){APICall(2);  op.src = imges[1]; pg2func(op);};

    var name = document.getElementById("name");
    name.style = "position: absolute;  font-size: 10px; top: 338px; left: 105px; height: 23px; background: transparent; width: 160px; border-radius: 2%; border:1px solid transparent;";

    var phone = document.getElementById("phone");
    phone.style = "position: absolute; font-size: 10px; top: 378px; left: 115px; height: 23px; background: transparent; width: 150px; border-radius: 2%; border:1px solid transparent;";

    var enviar = document.getElementById("enviar");
    enviar.style = "position: absolute;cursor: pointer;top: 437px;left: 200px;height: 35px;background: transparent;width: 109px;border-radius: 2%;border: 1px solid transparent;";
    enviar.onclick= function(){APICall(3);
                            document.getElementById("contact_form").submit();
                            contact_info.name= name.value;
                            contact_info.phone=phone.value;
                            document.getElementById("message").innerHTML = "Obrigado! Entraremos em contato em breve"
                            };

    var privacy_policy = document.getElementById("privacy_policy");
    privacy_policy.style = "position: absolute;top: 412px;left: 37px;height: 15px;background: transparent;width: 262px;border-radius: 2%;border: 1px solid transparent;";
    privacy_policy.onclick= function(){APICall(4); window.location.href = privacy_policy_link};

    var whatsapp = document.getElementById("whatsapp");
    whatsapp.style = "position: absolute; top: 437px; left: 30px; height: 35px; background: transparent; width: 109px; border-radius: 2%; border: 1px solid transparent;";
    whatsapp.onclick= function(){APICall(5); window.open(whatsapp_links[0]);};
};

function pg2func(op){
    var logo = document.getElementById("logo");
    logo.style = "position: absolute;top: 24px;left: 86px;height: 45px;background: transparent;width: 162px;border-radius: 2%;border: 1px solid transparent;";
    logo.onclick= function(){APICall(0);window.location.href=homepage_links[0]};

    document.getElementById("implantes").style = "display:none !important";
    document.getElementById("prótese").style = "display:none !important";
    document.getElementById("privacy_policy").style = "display:none !important";
    document.getElementById("contact_form").style = "display:none !important";
    document.getElementById("contact_form").disabled = true;
    document.getElementById("name").disabled = true;
    document.getElementById("phone").disabled = true;
    document.getElementById("enviar").disabled = true;

    var whatsapp = document.getElementById("whatsapp");
    whatsapp.style = "position: absolute;top: 390px;left: 75px;height: 60px;background: transparent;width: 185px;border-radius: 2%;border: 1px solid transparent;";
    whatsapp.onclick= function(){APICall(5);  window.open(whatsapp_links[0]);};
};

function pg3func(op){
    var logo = document.getElementById("logo");
    logo.style = "position: absolute;top: 412px;left: 180px;height: 38px;background: transparent;width: 135px;border-radius: 2%;border: 1px solid transparent;";
    logo.onclick= function(){APICall(0);window.location.href=homepage_links[0]};

    document.getElementById("implantes").style = "display:none !important";
    document.getElementById("prótese").style = "display:none !important";
    document.getElementById("privacy_policy").style = "display:none !important";
    document.getElementById("contact_form").style = "display:none !important";
    document.getElementById("contact_form").disabled = true;
    document.getElementById("name").disabled = true;
    document.getElementById("phone").disabled = true;
    document.getElementById("enviar").disabled = true;

    var whatsapp = document.getElementById("whatsapp");
    whatsapp.style = "position: absolute;top: 247px;left: 174px;height: 45px;background: transparent;width: 142px;border-radius: 2%;border: 1px solid transparent;";
    whatsapp.onclick= function(){APICall(5);  window.open(whatsapp_links[0]);};
};

// Clicking of Images
function clickpattern(){
    var op = document.getElementById('output');
    op.onmousedown = GetCoordinates;

    if (op.src.search('PG1.png') > -1)
    {
        pg1func(op);
    }
    else if (op.src.search('PG2.png') > -1)
    {
        pg2func(op);
    }
    else if (op.src.search('PG3.png') > -1)
    {
        pg3func(op);
    }
};

// Finding a Position of Mouse Click
function FindPosition(oElement){
  if(typeof( oElement.offsetParent ) != "undefined")
  {
    for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
    {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
      return [ posX, posY ];
    }
    else
    {
      return [ oElement.x, oElement.y ];
    }
};

//Getting a Co-ordinates of Mouse click
function GetCoordinates(e){

  var PosX = 0;
  var PosY = 0;
  var ImgPos;
  ImgPos = FindPosition(output);

  if (!e) var e = window.event;
  if (e.pageX || e.pageY)
  {
    PosX = e.pageX;
    PosY = e.pageY;
  }
  else if (e.clientX || e.clientY)
    {
      PosX = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      PosY = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
  PosX = PosX - ImgPos[0];
  PosY = PosY - ImgPos[1];
  //document.getElementById("x").innerHTML = PosX;
  //document.getElementById("y").innerHTML = PosY;
  return (PosX, PosY);
};