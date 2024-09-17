
const fileInput = document.querySelector("#img_link");
var dataUrl; 
fileInput.addEventListener('change', function(event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      dataUrl = e.target.result; // Đây là DataURL của ảnh
      // Bây giờ bạn đã có DataURL, bạn có thể gọi hàm để hiển thị ảnh trong JS ở nơi khác
    };
    reader.readAsDataURL(file);
  }
});



const add = () => {

  // var img_link = document.querySelector("#");
  
  var product_name = document.querySelector("#name").value;
  var new_price = parseInt(document.querySelector("#newPrice").value);
  var old_price = parseInt(document.querySelector("#oldPrice").value);
  var product_code = document.querySelector("#product_code").value;
  var type = document.querySelector("#type").value;
  if ( !product_name || !new_price || !old_price || !product_code) {
    alert("Vui lòng nhập đầy đủ thông tin sản phẩm!");
    return;
  }
 

  var productInfor = " <div class=" + "card" + " style=" + "width:400px" + ">";
 productInfor += `
    <img class="card-img-top" src = "${dataUrl}"id="card-img-top" alt="Card image cap">
    <div class="card-body">
        <h4 class="card-title">${product_name} - ${product_code}</h4>
        <div class="price">
            <p class="newPrice">${new_price}vnđ</p>
            <p class="oldPrice">${old_price}vnđ</p>
        </div>
        <a href="#" class="btn btn-primary">Đặt Mua</a>
    </div>
</div>`;




  if (type == "nu") {
    document.querySelector(".body_content_session_girl").innerHTML +=
      productInfor;
      
      
  } else {
    document.querySelector(".body_content_session_boy").innerHTML +=
      productInfor;
    
      
  }
    
  
};

