const SALE_SGUIDE_TITLE = ['HDBH 2022', 'HDBH 1', 'HDBH 2', 'HDBH 3', 'HDBH 4'];

const SALE_SGUIDE_CONTENT = [
  'Điều 1: Biểu thời gian làm việc trong ngày:</br>' +
    '– Số giờ làm việc trong ngày: 8 tiếng.</br>' +
    '– Số ngày làm việc trong tuần: 5.5 ngày.Từ thứ Hai đến trưa thứ Bảy.</br>' +
    '– Thời điểm bắt đầu làm việc trong ngày: 8h sáng</br>' +
    '– Thời điểm kết thúc làm việc trong ngày: 5h chiều.</br>' +
    '– Thời gian nghỉ ngơi trong ngày: 11h 30’ – 12h 30’</br>' +
    'Điều 2: Ngày nghỉ hằng tuần:</br>' +
    '– Chiều thứ 7 và ngày Chủ nhật.</br>' +
    'Điều 3: Ngày nghỉ người lao động được hưởng nguyên lương:</br>' +
    '– 1. Nghỉ lễ, tết  hàng năm:  Theo điều 73 của Bộ luật Lao động VN quy định:</br>' +
    '– Tết Dương Lịch: Một ngày (ngày 1 tháng 1 dương lịch).</br>' +
    '– Tết Âm lịch: Bốn ngày (một ngày cuối năm và 3 ngày đầu năm âm lịch).</br>' +
    '– Ngày chiến thắng: Một ngày (ngày 30 tháng 4 dương lịch).</br>' +
    '– Ngày Quốc tế lao động: Một ngày (ngày 1 tháng 5 dương lịch).</br>' +
    '– Ngày Quốc khánh: Một ngày (ngày 2 tháng 9 dương lịch).',
  '– Người lao động có 12 tháng làm việc tại Công ty thì được nghỉ 12 ngày phép năm hưởng nguyên lương. Mỗi tháng người lao động được nghỉ một ngày phép, nếu không nghỉ thì ngày phép đó sẽ cộng dồn vào những tháng sau. (dựa theo điều 74). Cụ thể như sau: Nếu tháng 1 nhân viên có một ngày nghỉ phép hưởng nguyên lương mà không sử dụng thì có thể cộng dồn vào tháng 2. Đến tháng 2 có nhu cấu sử dụng thì có thể sử dụng cả 2 ngày phép. Nhân viên cũng có thể sử dụng một lần phép năm nếu không ảnh hưởng đến công việc.</br>' +
    '– Nếu thời gian làm việc dưới 12 tháng  thì số ngày phép năm được tính theo tỉ lệ tương ứng với số tháng làm việc',
  '– Trong giờ làm việc, người lao động phải có mặt tại địa điểm làm việc theo quy định, không được làm bất cứ công việc riêng nào ngoài công việc được giao.</br>' +
    '–  Không được vắng mặt tại Công ty nếu không có  lý do chính đáng và phải thông báo cho cấp trên biết mỗi khi ra ngoài công tác.</br>' +
    '– Không được ra vào công ty ngoài giờ làm việc và các ngày nghỉ nếu không có sự chấp thuận của cấp trên.</br>' +
    '– Không gây mất trật tự trong giờ làm việc',
  '– Tất cả mọi người phải nghiêm túc tuân thủ các quy định, tiêu chuẩn về an toàn lao động.</br>' +
    '– Người lao động có quyền từ chối hoặc rời bỏ nơi làm việc khi thấy rõ có nguy cơ xảy ra tai nạn lao động, đe dọa tính mạng hoặc sức khỏe của bản thân hoặc cho những người khác cho đến khi sự cố được khắc phục.</br>' +
    '– Người lao động có bệnh được phép đề nghị xin nghỉ để bảo đảm an toàn cho người lao động đó cũng như những người khác.</br>' +
    '– Lãnh đạo có trách nhiệm bảo đảm thực hiện trang bị bảo hiểm lao động theo quy định của pháp luật về an toàn và vệ sinh lao động, bảo vệ môi trường.',
  'Điều 16: Bảo vệ tài sản:</br>' +
    '– Người lao động trong Công ty phải trung thực, thật thà, chịu trách nhiệm bảo vệ tài sản Công ty; nếu làm thất thoát, hư hỏng thì phải bồi thường.</br>' +
    '– Người lao động không được phép mang các dụng cụ, máy móc, văn bản và bất kỳ tài sản nào của Công ty ra khỏi văn phòng mà không có sự đồng ý của cấp trên.</br>' +
    'Điếu 17: Giữ bí mật công nghệ, kinh doanh:                                       </br>' +
    '– Trong khi đang làm việc cho Công ty, người lao động không được tiết lộ hoặc yêu cầu tiết lộ các thông tin bí mật thuộc quyền sỡ hữu của Công ty về khách hàng hoặc nhà cung cấp cho những người không có quyền hạn hoặc bất cứ ai ngoại trừ những người được khách hàng cho phép hay cơ quan pháp luật.</br>' +
    '– Ví dụ về các thông tin thuộc quyền sỡ hữu và thông tin bí mật bao gồm nhưng không giới hạn, kế họach kinh doanh, quá trình kinh doanh, danh sách khách hàng, thông tin người lao động, các thông tin không được công bồ trong quá trình thuê mướn người lao động, các thông tin về khách hàng, kỹ thuật và các hệ thống bao gồm các chương trình của Công ty.</br>' +
    '– Ngăn ngừa việc cố ý hay không cồ ý tiết lộ các thông tin về quyền sở hữu và thông tin bí mật bằng cách giảm tối thiều rủi ro, người lao động không có thẩm quyền truy xuất vào các thông tin này, các phương pháp</br>' +
    'phòng ngừa sẽ được thực hiện để bảo đảm các công việc giấy tờ liên quan tới công việc và các văn bản được tạo ra, sao chép, bản fax được lưu trữ và hủy bỏ theo quy định của Công ty.</br>' +
    '– Việc ra vào vùng làm việc và truy xuất máy tính sẽ được điều khiển hợp lý. Người lao động không được phép thảo luận về các vấn đề nhạy cảm hoặc các thông tin mật ở nơi công cộng như thang máy, hành lang, nhà hàng, nhà vệ sinh và các phương tiện di chuyển công cộng.</br>' +
    '– Bảo mật thông tin khách hàng là ưu tiên hàng đầu của mọi người trong Công ty.</br>' +
    '– Mọi người phải bảo vệ, tùy thuộc vào mức độ an toàn nghiêm ngặt, các thông tin cần được bảo mật mà khách hàng cung cấp cho họ.',
];

export const SalesGuide = [...Array(5)].map((_, index) => ({
  title: SALE_SGUIDE_TITLE[index],
  content: SALE_SGUIDE_CONTENT[index],
}));
