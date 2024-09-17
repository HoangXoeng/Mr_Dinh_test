const add = () => {
  var img_link = document.querySelector("#img_link").value;
  var product_name = document.querySelector("#name").value;
  var new_price = parseInt(document.querySelector("#newPrice").value);
  var old_price = parseInt(document.querySelector("#oldPrice").value);
  var product_code = document.querySelector("#product_code").value;

  if (!img_link || !product_name || !new_price || !old_price || !product_code) {
    alert("Vui lòng nhập đầy đủ thông tin sản phẩm!");
    return;
  }

  console.log(img_link + product_name + product_code + old_price + new_price);

  var productInfor = " <div class=" + "card" + " style=" + "width:400px" + ">";
  productInfor +=
    " <img class=" +
    "card-img-top" +
    " src=" +
    img_link +
    " alt=" +
    "Card image cap" +
    ">";
  productInfor += " <div class=" + "card-body" + ">";
  productInfor +=
    " <h4 class=" +
    "card-title" +
    ">" +
    product_name +
    " - " +
    product_code +
    "</h4>";
  productInfor += "<div class=" + "price" + ">";
  productInfor += " <p class=" + "newPrice" + ">" + new_price + "vnđ" + "</p>";
  productInfor += " <p class=" + "oldPrice" + ">" + old_price + "vnđ"  +"</p>";
  productInfor += "</div>";
  productInfor +=
    "<a href=" + "#" + " class=" + "btn btn-primary" + ">Đặt Mua</a>";
  productInfor += " </div> " + "</div>";

  document.querySelector(".body_content_session").innerHTML += productInfor;
};
