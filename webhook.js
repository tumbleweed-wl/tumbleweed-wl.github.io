const axios = require('axios');
axios.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=8c99cf61-bece-47d7-b326-18c6d4efdbbd', {

  "msgtype": "markdown",
  "markdown": {
    "content": "IT服务中心截止至22:00单据统计:\n >肖周荣：已完成：<font color=\"info\">48</font>单；\n >王展鹏：已完成：<font color=\"info\">84</font>单；\n >史顺康：已完成：<font color=\"info\">104</font>单；\n >王磊：已完成：<font color=\"info\">132</font>单；"
  }
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });