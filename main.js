const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let message = '동아대학교 흡연 신고 현황';
let url = '';
// app.post('/', (req, res) => {
//     message = '동아대학교 흡연 신고 현황\n';
//     res.send(message);
// });

app.post('/B1F', (req, res) => {
  message = '지하1층 흡연신고가 접수되었습니다.';
  url = "./assets/S06-4F.jpg"
  res.send(message);
});

app.post('/6F', (req, res) => {
  message = '6층 흡연신고가 접수되었습니다.';
  url = "./assets/S06-6F_smokingarea.jpg";
  res.send(message);
});

app.get('/', (req, res) => {
  res.send(`
    // <img width="100" height="200" src="/assets/S06-6F_smokingarea.jpg" />
    <h2>${message}</h2>
  `);
});

app.listen(8081, () => {
  console.log('8081 포트에서 서버 시작');
});
