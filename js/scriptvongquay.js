// scriptvongquay.js

let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let codeInput = document.getElementById("codeInput");
let submitCodeButton = document.getElementById("submitCode");
let spinCountDisplay = document.getElementById("spinCount");
let randomCodeDisplay = document.getElementById("randomCode");
let spinCount = 0;
let currentCode = ""; // Mã code hiện tại

// Hàm tạo mã code ngẫu nhiên
function generateRandomCode() {
    return Math.floor(Math.random() * 10000); // Tạo mã từ 0000 đến 9999
}

// Hàm khởi tạo mã code ngẫu nhiên và hiển thị
function initializeRandomCode() {
    currentCode = generateRandomCode(); // Tạo mã ngẫu nhiên
    randomCodeDisplay.innerText = `Mã ngẫu nhiên: ${currentCode}`; // Hiển thị mã
}

// Gọi hàm khởi tạo khi trang tải
window.onload = function() {
    initializeRandomCode();
};

// Đặt biến để lưu trữ mã code
export { currentCode }; // Xuất biến currentCode

submitCodeButton.onclick = function () {
    let code = codeInput.value;

    // Kiểm tra mã code đã được sử dụng chưa
    if (currentCode && code === currentCode.toString()) {
        spinCount = 1; // Cộng 1 lượt quay
        spinCountDisplay.innerText = `Số lượt quay: ${spinCount}`;
        codeInput.value = ""; // Xóa input

        // Gọi hàm để tạo mã code mới và hiển thị
        initializeRandomCode(); // Tạo mã mới
    } else if (currentCode && code !== currentCode.toString()) {
        alert("Mã này đã được sử dụng hoặc không hợp lệ!"); // Thông báo nếu mã đã sử dụng
    } else {
        alert("Mã không hợp lệ!"); // Thông báo mã không hợp lệ
    }
};

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

        // Đặt mã code thành không hợp lệ sau khi quay
        currentCode = ""; // Đặt lại mã code
        randomCodeDisplay.innerText = "Mã ngẫu nhiên: ";
    } else {
        alert("Bạn không còn lượt quay!"); // Thông báo nếu không còn lượt quay
    }
}
