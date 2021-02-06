const axios = require('axios');
axios.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=8c99cf61-bece-47d7-b326-18c6d4efdbbd', {

  "msgtype": "markdown",
  "markdown": {
    "content": "### IT服务中心截止至22:00单据统计:\n>今日总单量：<font color=\"warning\">X</font>单；\n >跨部门：<font color=\"comment\">X</font>单；\n >下派区域：<font color=\"comment\">X</font>单；\n >同事1：经手单据:<font color=\"info\">X</font>单，\n >已完成：<font color=\"info\">X</font>单；\n >同事2：经手单据:<font color=\"info\">X</font>单，\n >已完成：<font color=\"info\">X</font>单；"
  }
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });