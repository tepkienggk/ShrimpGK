
let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let codeInput = document.getElementById("codeInput");
let submitCodeButton = document.getElementById("submitCode");
let spinCountDisplay = document.getElementById("spinCount");
let randomCodeDisplay = document.getElementById("randomCode");
let spinCount = 0;
let validCodes = ["0110", "5678", "9012", "3456", "9742", "7148", "4578", "6782", "5784", "8128", "7838", "5808", "8406", "3979", 
    "3997", "7255", "7436", "8978", "5225", "3161", "8123", "1957", "8579", "1792", 
    "4075", "3056", "6647", "7328", "9141", "2519", "6782", "8167", "4648", "5360", 
    "5598", "1013", "8001", "300", "9249", "3414", "9982", "4520", "9956", "958", 
    "1056", "4047", "5052", "5383", "3334", "4863", "4133", "4885", "1475", "6362", 
    "8599", "8187", "3814", "9336", "5468", "320", "9748", "5781", "9586", "377", 
    "4283", "557", "1089", "983", "7309", "8229", "8606", "1958", "1422", "5835", 
    "3909", "3820", "6585", "4226", "8297", "3459", "4227", "1980", "4291", "1080", 
    "4193", "1661", "8992", "6350", "5583", "2828", "3653", "9690", "7988", "7701", 
    "4661", "5992", "223", "3472", "4265", "1101", "2635", "8652", "7297"
]; // Mã code được tạo sẵn
let usedCodes = []; // Mảng chứa mã đã sử dụng

// Hàm kiểm tra mã code có hợp lệ không
function isCodeValid(code) {
    
    return validCodes.includes(code) && !usedCodes.includes(code);
}

// Hàm xử lý khi người dùng nhập mã code
submitCodeButton.onclick = function () {
    let code = codeInput.value;

    // Kiểm tra mã code có trong danh sách hợp lệ không và chưa được sử dụng
    if (isCodeValid(code)) {
        spinCount = 1; // Người dùng có 1 lượt quay
        spinCountDisplay.innerText = `Số lượt quay: ${spinCount}`;
        codeInput.value = ""; // Xóa input

        // Đánh dấu mã code đã sử dụng
        usedCodes.push(code);

        // Thông báo mã đã hết hiệu lực và không thể sử dụng lại
        randomCodeDisplay.innerText = `Mã ${code} đã hết hiệu lực sau khi sử dụng!`;

    } else if (usedCodes.includes(code)) {
        alert("Mã này đã được sử dụng!");
    } else {
        alert("Mã không hợp lệ!");
    }
};

// Thay đổi ở đây để xác định phần thưởng cho từng góc
const rewards = [
    "voucher giảm 5%",
    "Bạn đã thắng 1 con tép hạng thấp",
    "Chúc bạn may mắn",
    "Bạn đã thắng 1 chai vitamin 100ml ",
    "Bạn đã thắng free ship",
    "Bạn đã thắng Dark Bloody"
];

// Xử lý sự kiện quay
btn.onclick = function () {
    if (spinCount > 0) {
        spinCount--; // Giảm số lượt quay

        // Chọn một ô thắng ngẫu nhiên
        const winningSegments = [45, 110, 165, 280]; // Đặt các góc cho các ô
        const randomIndex = Math.floor(Math.random() * winningSegments.length);
        const targetDegree = winningSegments[randomIndex];

        // Tính toán góc quay tổng thể, đảm bảo tối thiểu 2 vòng
        const totalDegree = 720 + targetDegree;

        // Thiết lập thời gian quay
        container.style.transition = "transform 2s cubic-bezier(0.33, 1, 0.68, 1)";
        container.style.transform = `rotate(${totalDegree}deg)`;

        // Reset lại về 0 độ sau khi quay xong
        setTimeout(() => {
            container.style.transition = "none"; // Bỏ chuyển tiếp để tránh hiệu ứng
            container.style.transform = `rotate(0deg)`; // Đặt lại vị trí ban đầu
            
            // Hiển thị phần thưởng
            const rewardMessage = rewards[randomIndex];
            randomCodeDisplay.innerText = rewardMessage; // Cập nhật thông báo phần thưởng

            // Gửi email thông báo phần thưởng
             sendEmail(rewardMessage);

        }, 2000); // Thời gian phải bằng với thời gian quay (2 giây)

        spinCountDisplay.innerText = `Số lượt quay: ${spinCount}`; // Cập nhật số lượt quay
        
    } else {
        alert("Bạn không còn lượt quay!");
    }
};
window.onload = function() {
    emailjs.init("zpcH78bZja9Y_Zhiw"); // Khởi tạo EmailJS
};

// Hàm gửi email
function sendEmail(rewardMessage) {
    
    const templateParams = {
        message: rewardMessage 
    };

    emailjs.send('service_rmj04jm', 'template_c7ya0ze', templateParams)
        .then(() => {
            console.log('Email gửi thành công');
        })
        .catch((error) => {
            console.error('Lỗi khi gửi email:', error);
        });
}