let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let codeInput = document.getElementById("codeInput");
let submitCodeButton = document.getElementById("submitCode");
let spinCountDisplay = document.getElementById("spinCount");
let randomCodeDisplay = document.getElementById("randomCode");
let spinCount = 0;
let validCodes = ["", "5678", "9012", "3456"]; // Mã code được tạo sẵn
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

// Xử lý sự kiện quay
btn.onclick = function () {
    if (spinCount > 0) {
        spinCount--; // Giảm số lượt quay

        // Chọn một ô thắng ngẫu nhiên
        const winningSegments = [0, 60, 120, 180, 240, 300]; // Đặt các góc cho các ô
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
        }, 2000); // Thời gian phải bằng với thời gian quay (2 giây)

        spinCountDisplay.innerText = `Số lượt quay: ${spinCount}`; // Cập nhật số lượt quay
    } else {
        alert("Bạn không còn lượt quay!");
    }
};
