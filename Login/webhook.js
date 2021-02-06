const axios = require('axios');
axios.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=8c99cf61-bece-47d7-b326-18c6d4efdbbd', {
    
        "msgtype": "markdown",
        "markdown": {
          "content": " 2021/02/05/截止至22：00单据统计：\n>王磊：总单量：`31`单；\n>余小燕：总单量：`27` 单\n>周明利：总单量：`50` 单；\n>袁刚刚：总单量：`2`单；\n>李雄：总单量：`35`单，其中包含事件单据`16`单，项目单据`19`单；"
          /*  /n 代表换行 不能直接换行 会报错
               > 表示引用文字
          */
        }
      
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});