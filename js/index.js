// Bài 1: Tính tiền lương nhân viên
function tinhTienLuong(){
    // Đầu vào: soNgayLam: number, luongMotNgay: number

    // Khai báo biến cho dữ liệu vào và lấy giá trị nhập vào từ người dùng
    var soNgayLam = +document.getElementById('soNgayLam').value;
    var luongMotNgay = +document.getElementById('luongMotNgay').value;

    // Đầu ra: tongSoLuong: number 
    var tongSoLuong = 0;

    // Các bước xử lý
    // Phép tính lương: Tổng số lương nhận được sẽ bằng số ngày làm nhân với lương một ngày đạt được
    tongSoLuong = soNgayLam * luongMotNgay;

    // In giá trị ra màn hình 
    document.getElementById('tongSoLuong').innerHTML = tongSoLuong.toLocaleString() + ' VND';
}

// Bài 2: Tính giá trị trung bình
function tinhGiaTriTrungBinh(){
    /*
        Đầu vào: 
        soThuNhat: number
        soThuHai: number
        soThuBa: number
        soThuTu: number
        soThuNam: number
    */
   var soThuNhat = +document.getElementById('soThuNhat').value;
   var soThuHai = +document.getElementById('soThuHai').value;
   var soThuBa = +document.getElementById('soThuBa').value;
   var soThuTu = +document.getElementById('soThuTu').value;
   var soThuNam = +document.getElementById('soThuNam').value;

   //Đầu ra: giaTriTB: number 
   var giaTriTB = 0;

   //Các bước xử lý
   //Phép tính giá trị trung bình sẽ được tính bằng cách lấy 5 số cộng lại và chia cho 5
   giaTriTB = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam)/5;

   //In ra màn hình
   document.getElementById('giaTriTB').innerHTML = giaTriTB;
}

// Bài 3: Quy đổi tiền 
function quyDoiTien(){
    // Đầu vào: soTien: number 
    var soTien = +document.getElementById('soTien').value;

    // Đầu ra: soTienDaQuyDoi: number 
    var soTienDaQuyDoi = 0;

    // Các bước xử lý
    // Số tiền sau khi quy đổi sẽ được tính bằng cách lấy số tiền muốn quy đổi nhân cho 23.500 VND
    soTienDaQuyDoi = soTien * 23500;

    //In ra màn hình
    document.getElementById('soTienDaQuyDoi').innerHTML = soTienDaQuyDoi.toLocaleString() + ' VND';
}

// Bài 4: Tính diện tích, chu vi hình chữ nhật
function hinhChuNhat(){
    // Đầu vào: chieuDai: number, chieuRong: number

    // Khai báo biến cho dữ liệu vào và lấy giá trị nhập vào từ người dùng
    var chieuDai = +document.getElementById('chieuDai').value;
    var chieuRong = +document.getElementById('chieuRong').value;

    // Đầu ra: dienTich: number, chuVi: number
    var dienTich = 0;
    var chuVi = 0;

    // Các bước xử lý
    // Phép tính diện tích: chiều dài * chiều rộng
    // Phép tính chu vi: (chiều dài + chiều rộng) * 2
    dienTich = chieuDai * chieuRong;
    chuVi = (chieuDai + chieuRong) * 2

    // In giá trị ra màn hình 
    document.getElementById('ketQuaTinhHCN').innerHTML = 'Diện tích: ' + dienTich + '; Chu vi: ' + chuVi;
}

// Bài 5: Tính tổng 2 ký số
function tongKySo(){
    // Đầu vào: kySo: number 
    var kySo = +document.getElementById('kySo').value;

    // Đầu ra: giaTriTongKySo: number 
    var giaTriTongKySo = 0;

    // Các bước xử lý
    // Lấy giá trị của hàng chục bằng cách lấy số đó chia lấy phần nguyên cho 10. 
    // Giá trị của hàng đơn vị bằng cách lấy số đó chia lấy phần dư cho 10
    giaTriTongKySo = Math.floor(kySo / 10) + (kySo % 10);

    //In ra màn hình
    document.getElementById('giaTriTongKySo').innerHTML = giaTriTongKySo;
}