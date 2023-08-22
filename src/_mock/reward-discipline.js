const REWARD_DISCIPLINE_TITLE = [
  '1. Khen thưởng',
  '2. Các hình thức khen thưởng',
  '3. Kỷ luật - khiển trách bằng lời nói',
  '4. Kỷ luật - Khiển trách bằng văn bản',
  '5. Kỷ luật - Sa thải',
];

const REWARD_DISCIPLINE_CONTENT = [
  '- Người lao động hoàn thành tốt nhiệm vụ, chấp hành tốt quy định, nội quy sẽ được tuyên dương, khen thưởng theo quy định của Công ty.</br>' +
    '- Hàng quý và hàng năm, căn cứ các chỉ tiêu bình chọn, hội đồng xét thưởng và kỷ luật sẽ chọn công khai và ra quyết định khen thưởng cho tập thể hoặc nhóm nhân viên có thành tích xuất sắc trong việc thực hiện nhiệm vụ và thực hiện Nội quy lao động.',
  '- Khen thưởng bằng danh hiệu cho cá nhân, tập thể như:</br>' +
    '+ Biểu dương thành tích trước toàn Công ty.</br>' +
    '+ Phong tặng các danh hiệu.</br>' +
    '- Khen thưởng bằng vật chất, cụ thể:</br>' +
    '+ Bằng tiền hoặc hiện vật cho cá nhân có thành tích xuất sắc.</br>' +
    '+ Bằng tiền hoặc hiện vật cho tập thể có thành tích xuất sắc.',
  'KHIỂN TRÁCH BẰNG LỜI NÓI được áp dụng khi người lao động có ít nhất một trong các hành vi sau:</br>' +
    '– Đi làm trễ hoặc về sớm hơn thời gian quy định của Công ty mà không được sự đồng ý của người có thẩm quyền;</br>' +
    '– Không nghỉ giải lao đúng thời gian quy định hoặc nghỉ giải lao dài hơn thời gian quy định mà không được sự đồng ý của người có thẩm quyền;</br>' +
    '– Nghỉ cho mục đích hội họp không theo yêu cầu của công việc hoặc tự ý kéo dài thời gian hội họp;</br>' +
    '– Ngủ trong giờ làm việc;',
  'KHIỂN TRÁCH BẰNG VĂN BẢN được áp dụng khi người lao động thuộc ít nhất một trong các trường hợp sau:</br>' +
    '– Trong vòng 01 tháng, vi phạm từ 03 hành vi trở lên hoặc 03 lần trở lên đối với một hành vi được liệt kê trong phần Khiển trách bằng lời nói.</br>' +
    '– Cố ý làm chậm công việc được giao hoặc ngưng việc;</br>' +
    '– Nghỉ ốm, nghỉ việc riêng, nghỉ thai sản không theo quy định của Công ty;</br>' +
    '– Vi phạm thời gian yêu cầu thông báo trước khi xin nghỉ phép năm làm cho Công ty bị động trong việc điều người khác thay thế;</br>' +
    '– Không tuân thủ quy trình công nghệ gây hư hỏng máy móc, thiết bị.</br>' +
    '– Không tuân thủ các quy định về an toàn lao động và vệ sinh lao động;',
  'SA THẢI được áp dụng khi người lao động thuộc ít nhất một trong các trường hợp sau:</br>' +
    '– Người lao động bị xử lý kỷ luật kéo dài thời hạn nâng lương, chuyển làm công việc khác… mà tái phạm trong thời gian chưa xóa kỷ luật hoặc bị xử lý kỷ luật cách chức mà tái phạm;</br>' +
    '– Cố ý giả mạo các loại giấy tờ như hồ sơ xin việc, hồ sơ cá nhân gây hậu quả nghiêm trọng;</br>' +
    '– Sao chép, lấy tài liệu, hoặc những thông tin bảo mật, lấy hàng trong kho, sử dụng, lấy thiết bị, chìa khóa Công ty không nằm trong phạm vi quản lý của mình;</br>' +
    '– Có hành động phá hoại, gây tổn thất cho hoạt động kinh doanh của Công ty;</br>' +
    '– Tiết lộ bí mật hoạt động của Công ty;',
];

export const rewardDisciplineData = [...Array(5)].map((_, index) => ({
  title: REWARD_DISCIPLINE_TITLE[index],
  content: REWARD_DISCIPLINE_CONTENT[index],
}));
