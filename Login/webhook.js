const axios = require('axios');
axios.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=8c99cf61-bece-47d7-b326-18c6d4efdbbd', {

  "msgtype": "markdown",
  "markdown": {
    "content": "2020/03/05 IT服务中心截止至22:00单据统计:\n >周明利：已完成：<font color=\"info\">8</font>单；\n >王磊：已完成：<font color=\"info\">99</font>单；\n >史顺康：已完成：<font color=\"info\">47</font>单；"
  }
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });