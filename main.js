// const express = require('express');
// const app = express ();
// let path = require('path');
// const cors = require('cors');
// app.use(cors());

// app.use(express.static(path.join(__dirname)));
// app.get('/report', function(res,req){
//     res.sendFile(path.join(__dirname,'index.html'));
//     //res.send('신고가 접수되었습니다.');
// })
// app.post('/report', function(req, res) {
//     const { report } = req.body;
//     console.log(report); // 콘솔에 신고 내용 출력
//     res.send('신고가 접수되었습니다.');
// });

// app.listen(3000,function(){
//     console.log("Server start");
// })


// fetch('http://172.20.10.8:3000/report', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     report : '흡연 구역 신고가 접수되었습니다.'
//   })
// })
// .then(response => {
//   console.log('신고 접수되었습니다.');
// })
// .catch(error => {
//   console.log('신고 접수 중 오류가 발생했습니다.');
// })

const express = require('express');
const app = express();

// POST 요청 처리
app.post('/', (req, res) => {
  const { alertContent } = req.body;
  console.log(alertContent);
  res.send('신고가 접수되었습니다.');
});

// 서버 실행
app.listen(3000, () => {
  console.log('Server start');
});