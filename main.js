var province_arr = new Array('An Giang', 'Bà Rịa Vũng Tàu', 'Bắc Cạn', 'Bắc Giang', 'Bạc Liêu', 'Bắc Ninh', 'Bến Tre', 'Bình Định', 'Bình Dương', 'Bình Phước', 'Bình Thuận', 'Cà Mau', 'Cần Thơ', 'Cao Bằng', 'Đà Nẵng', 'Đăk Lăk', 'Đăk Nông', 'Điện Biên', 'Đồng Nai', 'Đồng Tháp', 'Gia Lai', 'Hà Giang', 'Hà Nam', 'Hà Nội', 'Hà Tĩnh', 'Hải Dương', 'Hải Phòng', 'Hậu Giang', 'Hồ Chí Minh', 'Hòa Bình', 'Hưng Yên', 'Khánh Hòa', 'Kiên Giang', 'Kon Tum', 'Lai Châu', 'Lâm Đồng', 'Lạng Sơn', 'Lào Cai', 'Long An', 'Nam Định', 'Nghệ An', 'Ninh Bình', 'Ninh Thuận', 'Phú Thọ', 'Phú Yên', 'Quảng Bình', 'Quảng Nam', 'Quảng Ngãi', 'Quảng Ninh', 'Quảng Trị', 'Sóc Trăng', 'Sơn La', 'Tây Ninh', 'Thái Bình', 'Thái Nguyên', 'Thanh Hóa', 'Thừa Thiên Huế', 'Tiền Giang', 'Trà Vinh', 'Tuyên Quang', 'Vĩnh Long', 'Vĩnh Phúc', 'Yên Bái');
var s_a = new Array();
s_a[0]="";
s_a[1]="H. An Phú|H. Châu Phú|H. Châu Thành|H. Chợ Mới|H. Phú Tân|H. Thoại Sơn|H. Tịnh Biên|H. Tri Tôn|H. Vĩnh Trinh|TP. Châu Đốc|TP. Long Xuyên|TX. Tân Châu";
s_a[2]="H. Châu Đức|H. Côn Đảo|H. Đất Đỏ|H. Long Đất|H. Long Điền|H. Tân Thành|H. Xuyên Mộc|TP. Bà Rịa|TP. Vũng Tàu|TX. Phú Mỹ";
s_a[3]="H. Ba Bể|H. Bạch Thông|H. Chợ Đồn|H. Chợ Mới|H. Na Rì|H. Ngân Sơn|H. Pắc Nặm|TX. Bắc Cạn";
s_a[4]="H. Hiệp Hòa|H. Lạng Giang|H. Lục Nam|H. Lục Ngạn|H. Sơn Động|H. Tân Yên|H. Việt Yên|H. Yên Dũng|H. Yên Thế|TP. Bắc Giang";
s_a[5]="H. Đông Hải|H. Hòa Bình|H. Hồng Dân|H. Phước Long|H. Thạnh Trị|H. Vĩnh Lợi|TP. Bạc Liêu|TX. Giá Rai";
s_a[6]="H. Gia Bình|H. Lương Tài|H. Quế Võ|H. Thuận Thành|H. Tiên Du|H. Yên Phong|TP. Bắc Ninh|TX. Từ Sơn";
s_a[7]="H. Ba Tri|H. Bình Đại|H. Châu Thành|H. Chợ Lách|H. Giồng Trôm|H. Mỏ Cày Bắc|H. Mỏ Cày Nam|H. Thạnh Phú|TP. Bến Tre";
s_a[8]="H. An Lão|H. An Nhơn|H. Cư Bang|H. Hoài Ân|H. Hoài Nhơn|H. Phù Cát|H. Phù Mỹ|H. Tây Sơn|H. Tuy Phước|H. Vân Canh|H. Vĩnh Thạnh|TP. Quy Nhơn|TX. An Nhơn";
s_a[9]="H. Bắc Tân Uyên|H. Bàu Bàng|H. Dầu Tiếng|H. Lái Thiêu|H. Phú Giáo|H. Thuận An|TP. Mới|TP. Thủ Dầu Một|TX. Bến Cát|TX. Dĩ An|TX. Tân Uyên|TX. Thuận An";
s_a[10]="H. Bù Đăng|H. Bù Đốp|H. Bù Gia Mập|H. Chơn Thành|H. Đồng Phú|H. Hớn Quản|H. Lộc Ninh|H. Phú Riềng|TX. Bình Long|TX. Đồng Xoài|TX. Phước Long";
s_a[11]="H. Bắc Bình|H. Đức Linh|H. Hàm Tân|H. Hàm Thuận Bắc|H. Hàm Thuận Nam|H. Phú Quý|H. Tánh Linh|H. Tuy Phong|TP. Phan Thiết|TX. La Gi";
s_a[12]="H. Cái Nước|H. Đầm Dơi|H. Năm Căn|H. Ngọc Hiển|H. Phú Tân|H. Thới Bình|H. Trần Văn Thời|H. U Minh|TP. Cà Mau";
s_a[13]="H. Cờ Đỏ|H. Phong Điền|H. Thới Lai|H. Vĩnh Thạnh|Q. Bình Thủy|Q. Cái Răng|Q. Ninh Kiều|Q. Ô Môn|Q. Thốt Nốt";
s_a[14]="H. Bảo Lạc|H. Bảo Lâm|H. Hạ Lang|H. Hà Quảng|H. Hòa An|H. Nguyên Bình|H. Phục Hòa|H. Quảng Uyên|H. Thạch An|H. Thông Nông|H. Trà Lĩnh|H. Trùng Khánh|TP. Cao Bằng";
s_a[15]="H. Hòa Vang|H. Hoàng Sa|Q. Cẩm Lệ|Q. Hải Châu|Q. Liên Chiểu|Q. Ngũ Hành Sơn|Q. Sơn Trà|Q. Thanh Khê";
s_a[16]="H. Buôn Đôn|H. Cư Kuin|H. Cư M'Gar|H. Ea H'Leo|H. Ea Kar|H. EA Súp|H. Krông Ana|H. Krông Bông|H. Krông Buk|H. Krông Năng|H. Krông Pắc|H. Lăk|H. M'Đrăk|TP. Buôn Ma Thuột|TX. Buôn Hồ";
s_a[17]="H. Cư Jut|H. Đăk GLong|H. Đăk Mil|H. Đăk R'Lấp|H. Đăk Song|H. Krông Nô|H. Tuy Đức|TX. Gia Nghĩa";
s_a[18]="H. Điện Biên|H. Điện Biên Đông|H. Mường Ảng|H. Mường Chà|H. Mường Nhé|H. Nậm Pồ|H. Thanh Uyên|H. Tủa Chùa|H. Tuần Giáo|TP. Điện Biên|TX. Mường Lay";
s_a[19]="H. Cẩm Mỹ|H. Định Quán|H. Long Thành|H. Nhơn Trạch|H. Tân Phú|H. Thống Nhất|H. Trảng Bom|H. Vĩnh Cửu|H. Xuân Lộc|TP. Biên Hòa|TX. Long Khánh";
s_a[20]="H. Cao Lãnh|H. Châu Thành|H. Hồng Hạnh|H. Hồng Ngự|H. Lai Vung|H. Lấp Vò|H. Tam Nông|H. Tân Hồng|H. Thanh Bình|H. Tháp Mười|TP. Cao Lãnh|TP. Sa Đéc|TX. Hồng Ngự";
s_a[21]="H. Chư Păh|H. Chư Prông|H. Chư Pưh|H. Chư Sê|H. Đăk Đoa|H. Đăk Pơ|H. Đức Cơ|H. Ia Grai|H. Ia Pa|H. K'Bang|H. Kông Chro|H. Krông Pa|H. Mang Yang|H. Phú Thiện|TP. Pleiku|TX. A Yun Pa|TX. An Khê";
s_a[22]="H. Bắc Mê|H. Bắc Quang|H. Đồng Văn|H. Hoàng Su Phì|H. Mèo Vạc|H. Quản Bạ|H. Quang Bình|H. Vị Xuyên|H. Xín Mần|H. Yên Minh|TP. Hà Giang";
s_a[23]="H. Bình Lục|H. Duy Tiên|H. Kim Bảng|H. Lý Nhân|H. Thanh Liêm|TP. Phủ Lý";
s_a[24]="H. Ba Vì|H. Chương Mỹ|H. Đan Phượng|H. Đông Anh|H. Gia Lâm|H. Hoài Đức|H. Mê Linh|H. Mỹ Đức|H. Phú Xuyên|H. Phúc Thọ|H. Quốc Oai|H. Sóc Sơn|H. Thạch Thất|H. Thanh Oai|H. Thanh Trì|H. Thường Tín|H. Từ Liêm|H. ứng Hòa|Q. Ba Đình|Q. Bắc Từ Liêm|Q. Cầu Giấy|Q. Đống Đa|Q. Hà Đông|Q. Hai Bà Trưng|Q. Hoàn Kiếm|Q. Hoàng Mai|Q. Long Biên|Q. Nam Từ Liêm|Q. Tây Hồ|Q. Thanh Xuân|TX. Sơn Tây";
s_a[25]="H. Cẩm Xuyên|H. Can Lộc|H. Đức Thọ|H. Hương Khê|H. Hương Sơn|H. Lộc Hà|H. Nghi Xuân|H. Thạch Hà|H. Vũ Quang|Tp. Hà Tĩnh|TX. Hồng Lĩnh|TX. Kỳ Anh";
s_a[26]="H. Bình Giang|H. Cẩm Giàng|H. Gia Lộc|H. Kim Thành|H. Kinh Môn|H. Nam Sách|H. Ninh Giang|H. Thanh Hà|H. Thanh Miện|H. Tứ Kỳ|TP. Hải Dương|TX. Chí Linh";
s_a[27]="H. An Dương|H. An Hải|H. An Lão|H. Bạch Long Vĩ|H. Cát Hải|H. Kiến Thụy|H. Thủy Nguyên|H. Tiên Lãng|H. Vĩnh Bảo|Q. Đồ Sơn|Q. Dương Kinh|Q. Hải An|Q. Hồng Bàng|Q. Kiến An|Q. Lê Chân|Q. Ngô Quyền";
s_a[28]="H. Châu Thành|H. Châu Thành A|H. Phụng Hiệp|H. Vị Thủy|TP. Vị Thanh|TX. Long Mỹ|TX. Ngã Bảy";
s_a[29]="H. Bình Chánh|H. Cần Giờ|H. Củ Chi|H. Hóc Môn|H. Nhà Bè|Q. 1|Q. 10|Q. 11|Q. 12|Q. 2|Q. 3|Q. 4|Q. 5|Q. 6|Q. 7|Q. 8|Q. 9|Q. Bình Tân|Q. Bình Thạnh|Q. Gò Vấp|Q. Phú Nhuận|Q. Tân Bình|Q. Tân Phú|Q. Thủ Đức";
s_a[30]="H. Cao Phong|H. Đà Bắc|H. Kim Bôi|H. Kỳ Sơn|H. Lạc Sơn|H. Lạc Thủy|H. Lương Sơn|H. Mai Châu|H. Tân Lạc|H. Yên Thủy|Tp. Hòa Bình";
s_a[31]="H. Ân Thi|H. Khoái Châu|H. Kim Động|H. Mỹ Hào|H. Phù Cừ|H. Tiên Lữ|H. Văn Giang|H. Văn Lâm|H. Yên Mỹ|TP. Hưng Yên";
s_a[32]="H. Cam Lâm|H. Diên Khánh|H. Khánh Sơn|H. Khánh Vĩnh|H. Trường Sa|H. Vạn Ninh|TP. Cam Ranh|TP. Nha Trang|TX. Ninh Hòa";
s_a[33]="H. An Biên|H. An Minh|H. Châu Thành|H. Giang Thành|H. Giồng Riềng|H. Gò Quao|H. Hòn Đất|H. Kiên Biên|H. Kiên Hải|H. Kiên Lương|H. Phú Quốc|H. Tân Hiệp|H. U Minh Thượng|H. Vĩnh Thuận|TP. Rạch Giá|TX. Hà Tiên";
s_a[34]="H. Đăk Glei|H. Đăk Hà|H. Đăk Tô|H. Ia H'Drai|H. Kon Plông|H. Kông Rẫy|H. Ngọc Hồi|H. Sa Thầy|H. Tu Mơ Rông|TP. Kon Tum";
s_a[35]="H. Mường Tè|H. Nậm Nhùn|H. Phong Thổ|H. Sìn Hồ|H. Tam Đường|H. Tân Uyên|H. Than Uyên|TP. Lai Châu";
s_a[36]="H. Bảo Lâm|H. Cát Tiên|H. Đạ Huoai|H. Đạ Tẻh|H. Đam Rông|H. Di Linh|H. Đơn Dương|H. Đức Trọng|H. Lạc Dương|H. Lâm Hà|TP. Bảo Lộc|TP. Đà Lạt";
s_a[37]="H. Bắc Sơn|H. Bình Gia|H. Cao Lộc|H. Chi Lăng|H. Đình Lập|H. Hữu Lũng|H. Lộc Bình|H. Tràng Định|H. Văn Lãng|H. Văn Quan|TP. Lạng Sơn";
s_a[38]="H. Bắc Hà|H. Bảo Thắng|H. Bảo Yên|H. Bát Xát|H. Mường Khương|H. Sa Pa|H. Si Ma Cai|H. Văn Bàn|TP. Lào Cai";
s_a[39]="H. Bến Lức|H. Cần Đước|H. Cần Giuộc|H. Châu Thành|H. Đức Hòa|H. Đức Huệ|H. Mộc Hóa|H. Tân Hưng|H. Tân Thạnh|H. Tân Trụ|H. Thạnh Hóa|H. Thủ Thừa|H. Vĩnh Hưng|TP. Tân An|TX. Kiến Tường";
s_a[40]="H. Giao Thủy|H. Hải Hậu|H. Mỹ Lộc|H. Nam Trực|H. Nghĩa Hưng|H. Trực Ninh|H. Vụ Bản|H. Xuân Trường|H. ý Yên|TP. Nam Định";
s_a[41]="H. Anh Sơn|H. Con Cuông|H. Diễn Châu|H. Đô Lương|H. Hưng Nguyên|H. Kỳ Sơn|H. Nam Đàn|H. Nghi Lộc|H. Nghĩa Đàn|H. Quế Phong|H. Quỳ Châu|H. Quỳ Hợp|H. Quỳnh Lưu|H. Tân Kỳ|H. Tân Quỳ|H. Thanh Chương|H. Tương Dương|H. Yên Thành|TP. Vinh|TX. Cửa Lò|TX. Hoàng Mai|TX. Thái Hòa";
s_a[42]="H. Gia Viễn|H. Hoa Lư|H. Kim Sơn|H. Nho Quan|H. Yên Khánh|H. Yên Mô|TP. Ninh Bình|TP. Tam Điệp|TX. Ninh Bình";
s_a[43]="H. Bác ái|H. Ninh Hải|H. Ninh Phước|H. Ninh Sơn|H. Thuận Bắc|H. Thuận Nam|TP. Phan Rang Tháp Chàm";
s_a[44]="H. Cẩm Khê|H. Đoan Hùng|H. Hạ Hòa|H. Lâm Thao|H. Phù Ninh|H. Sông Thao|H. Tam Nông|H. Tân Sơn|H. Thanh Ba|H. Thanh Sơn|H. Thanh Thủy|H. Yên Lập|TP. Việt Trì|TX. Phú Thọ";
s_a[45]="H. Đông Hòa|H. Đồng Xuân|H. Phú Hòa|H. Sơn Hòa|H. Sông Hinh|H. Tây Hòa|H. Tuy An|TP. Tuy Hòa|TX. Sông Cầu";
s_a[46]="H. Bố Trạch|H. Lệ Thủy|H. Minh Hóa|H. Quảng Ninh|H. Quảng Trạch|H. Tuyên Hóa|TP. Đồng Hới|TX. Ba Đồn";
s_a[47]="H. Bắc Trà My|H. Đại Lộc|H. Đông Giang|H. Duy Xuyên|H. Hiệp Đức|H. Nam Giang|H. Nam Trà My|H. Nông Sơn|H. Núi Thành|H. Phú Ninh|H. Phước Sơn|H. Quế Sơn|H. Tây Giang|H. Thăng Bình|H. Tiên Phước|TP. Hội An|TP. Tam Kỳ|TX. Điện Bàn";
s_a[48]="H. Ba Tơ|H. Bình Sơn|H. Đức Phổ|H. Lý Sơn|H. Minh Long|H. Mộ Đức|H. Nghĩa Hành|H. Sơn Hà|H. Sơn Tây|H. Sơn Tịnh|H. Tây Trà|H. Trà Bồng|H. Tư Nghĩa|TP. Quảng Ngãi";
s_a[49]="H. Ba Chẽ|H. Bình Liêu|H. Cô Tô|H. Đầm Hà|H. Đông Triều|H. Hải Hà|H. Hoành Bồ|H. Tiên Yên|H. Vân Đồn|TP. Cẩm Phả|TP. Hạ Long|TP. Hòn Gai|TP. Móng Cái|TP. Uông Bí|TX. Quảng Yên";
s_a[50]="H. Cam Lộ|H. Cổn Cỏ|H. Đakrông|H. Gio Linh|H. Hải Lăng|H. Hướng Hóa|H. Triệu Phong|H. Vĩnh Linh|TP. Đông Hà|TX. Quảng Trị";
s_a[51]="H. Cần Đề|H. Châu Thành|H. Cù Lao Dung|H. Hòa Mỹ|H. Kế Sách|H. Long Phú|H. Mỹ Tú|H. Mỹ Xuyên|H. Thạnh Trị|H. Trần Đề|TP. Sóc Trăng|TX. Ngã Năm|TX. Vĩnh Châu";
s_a[52]="H. Bắc Yên|H. Mai Sơn|H. Mộc Châu|H. Mường La|H. Phù Yên|H. Quỳnh Nhai|H. Sông Mã|H. Sốp Cộp|H. Thuận Châu|H. Vân Hồ|H. Yên Châu|TP. Sơn La";
s_a[53]="H. Bến Cầu|H. Châu Thành|H. Dương Minh Châu|H. Gò Dầu|H. Hòa Thành|H. Tân Biên|H. Tân Châu|H. Trảng Bàng|TP. Tây Ninh";
s_a[54]="H. Đông Hưng|H. Hưng Hà|H. Kiến Xương|H. Quỳnh Phụ|H. Thái Thụy|H. Tiền Hải|H. Vũ Thư|TP. Thái Bình";
s_a[55]="H. Đại Từ|H. Định Hóa|H. Đồng Hỷ|H. Phú Bình|H. Phú Lương|H. Võ Nhai|TP. Thái Nguyên|TX. Phổ Yên|TX. Sông Công";
s_a[56]="H. Bá Thước|H. Cẩm Thủy|H. Đông Sơn|H. Hà Hải|H. Hà Trung|H. Hậu Lộc|H. Hoằng Hóa|H. Lang Chánh|H. Mường Lát|H. Nga Sơn|H. Ngọc Lặc|H. Như Thanh|H. Như Xuân|H. Nông Cống|H. Quan Hóa|H. Quang Sơn|H. Quảng Xương|H. Thạch Thành|H. Thiệu Hóa|H. Thọ Xuân|H. Thường Xuân|H. Tĩnh Gia|H. Triệu Sơn|H. Vĩnh Lộc|H. Yên Định|TP. Thanh Hóa|TX. Bỉm Sơn|TX. Sầm Sơn";
s_a[57]="H. A Lưới|H. Hội An|H. Nam Đông|H. Núi Thành|H. Phong Điền|H. Phú Lộc|H. Phú Vang|H. Quảng Điền|TP. Huế|TX. Hương Thủy|TX. Hương Trà";
s_a[58]="H. An Phú Đông|H. Cái Bè|H. Cai Lậy|H. Châu Thành|H. Chợ Gạo|H. Gò Công Đông|H. Gò Công Tây|H. Tân Phú Đông|H. Tân Phước|TP. Mỹ Tho|TX. Cai Lậy|TX. Gò Công";
s_a[59]="H. Càng Long|H. Cầu Kè|H. Cầu Ngang|H. Châu Thành|H. Duyên Hải|H. Tiểu Cần|H. Trà Cú|TP. Trà Vinh";
s_a[60]="H. Chiêm Hóa|H. Hàm Yên|H. Lâm Bình|H. Na Hang|H. Sơn Dương|H. Yên Sơn|TP. Tuyên Quang";
s_a[61]="H. Bình Tân|H. Long Hồ|H. Mang Thít|H. Tam Bình|H. Trà Ôn|H. Vũng Liêm|TP. Vĩnh Long|TX. Bình Minh";
s_a[62]="H. Bình Xuyên|H. Lập Thạch|H. Mê Linh|H. Sông Lô|H. Tam Đảo|H. Tam Dương|H. Vĩnh Tường|H. Yên Lạc|TP. Vĩnh Yên|TX. Phúc Yên";
s_a[63]="H. Lục Yên|H. Mù Căng Chải|H. Trạm Tấu|H. Trấn Yên|H. Văn Chấn|H. Văn Yên|H. Yên Bình|TP. Yên Bái|TX. Nghĩa Lộ";

function generateProvinces(){
    var provinceTagId = 'province_list';
    var listProvince = `<li class="selected" data-value="none"><a href="javascript:void(0)">Thành phố</a></li>`;
    for (var i=0; i<province_arr.length; i++) {
        listProvince += `<li data-target-value="${i+1}" data-value="${province_arr[i]}"><a href="javascript:void(0)">${province_arr[i]}</a></li>`;
    }
    $("#" + provinceTagId).html(listProvince);
}

function generateDistricts(provinceId){
	var districtTagId = 'district_list';
	var listDsitrict = `<li class="selected" data-value="none"><a href="javascript:void(0)">Quận</a></li>`;
    var district_arr = s_a[provinceId].split("|");
    for (var i=0; i<district_arr.length; i++) {
        listDsitrict += `<li data-value="${district_arr[i]}"><a href="javascript:void(0)">${district_arr[i]}</a></li>`;
    }
    $("#" + districtTagId).html(listDsitrict);
}
generateProvinces();

$(document).on('click', '#province_list li', function(e) {
    var that = $(this);
    var value = $(this).attr('data-target-value');
    if (value != 'none') {
    	generateDistricts(value);
    }
});