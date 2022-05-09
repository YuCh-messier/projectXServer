var express = require('express');
var router = express.Router();

/* GET home page. */

//检测用户登录信息，返回基本内容
router.post('/check/checkUser', function(req, res, next) {
  console.log(req.body)
  if(true){
    res.send({headImg:'http://124.223.155.169/testpic/head.jpg',name:'张蠡奥',statu:true})
  }
  else{
    res.send({statu:false})
  }
})

//检测特殊权限
router.post('/check/checkSpecialAccount', function(req, res, next) {
  console.log(req.body)
  if(true){
    res.send({statu:true})
  }
  else{
    res.send({statu:false})
  }
})


//响应招聘信息页面所有招聘内容
router.get('/recruits/allRecruits', function(req, res, next) {
  console.log(req.query)
  res.send([
      {
      affairId:1,
      title:'飞书前端实习生招聘',
      taps:'互联网|前端|实习',
      companyTaps:'互联网|前端|实习',
      companyName:'字节跳动',
      address:'光谷软件园',
      graph:'http://124.223.155.169/testpic/pic4.webp',
      workDays:'4天',
      salary:'400-500',
      url:'#'
  },{
      affairId:2,
      title:'飞书2前端实习生招聘',
      taps:'互联网|前端|实习',
      companyTaps:'互联网|前端|实习',
      companyName:'字节跳动',
      address:'光谷软件园',
      graph:'http://124.223.155.169/testpic/pic4.webp',
      workDays:'4天',
      salary:'400-500',
      url:'#'
  }
  ])
});

//响应招聘信息页面搜索的招聘内容
router.get('/recruits/searchRecruits', function(req, res, next) {
  console.log(req.query)
  res.send([
      {
      affairId:1,
      title:'飞书前端实习生招聘',
      taps:'互联网|前端|实习',
      companyTaps:'互联网|前端|实习',
      companyName:'字节跳动',
      address:'光谷软件园',
      graph:'http://124.223.155.169/testpic/pic4.webp',
      workDays:'4天',
      salary:'400-500',
      url:'#'
  }
  ])
});

//响应内推信息页面搜索的招聘内容
router.get('/recruits/searchRecommends', function(req, res, next) {
  console.log(req.query)
  res.send([
      {
      affairId:1,
      title:'飞书前端实习生招聘',
      taps:'互联网|前端|实习',
      companyTaps:'互联网|前端|实习',
      companyName:'字节跳动',
      address:'光谷软件园',
      graph:'http://124.223.155.169/testpic/pic4.webp',
      workDays:'4天',
      salary:'400-500',
      url:'#'
  }
  ])
});

//响应选区所有可选标签
router.get('/choices/allRecruitsTaps', function(req, res, next) {
  console.log(req.query)
  res.send([
    ['光谷','武璐路','南湖大道'],
    ['金融','会计','前端','算法'],
    ['4天以下','4天','5天','6天'],
    ['小于200','200-300','300-400','400以上']
  ])
})


//响应轮播内容
router.get('/ppts/setppts',(req,res,next)=>{
  console.log(req.query)
  res.send([
    {url:'#',graph:'http://124.223.155.169/testpic/head.jpg'},
    {url:'#',graph:'http://124.223.155.169/testpic/pic4.webp'},
    {url:'#',graph:'http://124.223.155.169/testpic/pic4.webp'},
    {url:'#',graph:'http://124.223.155.169/testpic/pic4.webp'}
])
})


//响应内推页面所有内推信息
router.get('/recommends/allRecommends',(req,res,next)=>{
  console.log(req.query)
  res.send([
    {
    affairId:1,
    title:'飞书前端实习生招聘',
    taps:'互联网|前端|实习',
    companyTaps:'互联网|前端|实习',
    companyName:'字节跳动',
    address:'光谷软件园',
    graph:'http://124.223.155.169/testpic/pic4.webp',
    workDays:'4天',
    salary:'400-500'
  },{
    affairId:2,
    title:'飞书前端实习生招聘',
    taps:'互联网|前端|实习',
    companyTaps:'互联网|前端|实习',
    companyName:'字节跳动',
    address:'光谷软件园',
    graph:'http://124.223.155.169/testpic/pic4.webp',
    workDays:'4天',
    salary:'400-500'
  }
  ])
})

//通过id响应具体内推信息
router.get('/recruits/speRecommend',(req,res,next)=>{
  console.log(req.query)
  var headerInfo={
    affairId:1,
    title:'飞书前端实习生招聘',
    taps:'互联网|前端|实习',
    address:'光谷软件园',
    workDays:'4天',
    salary:'400-500'
}
var speRecruitInfo={
    content:`
    职位描述：
    1. 负责MMC买家链路业务产品（导购交易营销结算等）相关的架构设计与开发；
    2. 从用户和技术出发，实现面向未来的系统规划、设计和落地；
    3. 技术预研和技术难点攻关，保障系统可用性、稳定性、和可扩展性。
    职位要求：
    1. Java基础扎实，理解io、多线程、集合等基础框架，对JVM原理有一定的了解；
    2. 对于你用过的开源框架，能了解到它的原理和机制；对Spring、ibatis开源框架熟悉；
    3. 掌握多线程及高性能的设计与编码及性能调优；有高并发应用开发经验；
    4. 对技术有浓厚兴趣，学习能力强，适应能力好，抗压能力强；
    5.具备较强的业务理解及业务抽象能力，能理解数据，分析数据，挖掘商业本质
    6. 有强烈的技术热情和钻研精神，热爱新技术；有独立、主动的学习习惯和良好的沟通表达、团队协作能力
    7. 激情，有创业经历和主导平台型产品研发经验者优先"
    我们鼓励人人践行公益，同学如参与过公益活动，有相关证明，也欢迎附在简历中。参考依据包括但不限于：全国志愿服务信息系统开具的志愿服务证明、“人人3小时”公益平台公益时证书、志愿服务组织（含社会团体、社会服务机构、基金会）授予的志愿服务证明等。
        `
    }
var companyInfo={
    companyTaps:'互联网|前端|实习',
    companyName:'字节跳动',
    companyContent:`
    北京字节跳动科技有限公司，简称字节跳动，是一家位于中国北京的跨国互联网技术公司[2]，成立于2012年3月，旗下有产品今日头条和抖音（及其海外版本TikTok）、西瓜视频等。

    至2018年，字节跳动的移动应用月度用户超过十亿人，估值750亿美元，超越Uber成为全球最有价值的创业公司[3]。截至2019年7月，字节跳动的产品和服务已覆盖全球150个国家和地区、75个语种，曾在40多个国家和地区位居应用商店总榜前列[4]。
    `,
    companyGraph:'http://124.223.155.169/testpic/pic4.webp',
}
var mapInfo={address:'武汉市光谷软件园XX大厦',coordinate:'(122.5,116,3)'}
  res.send({
    headerInfo:headerInfo,
    speRecruitInfo:speRecruitInfo,
    companyInfo:companyInfo,
    mapInfo:mapInfo,
    affairKey:'ZLASG'
  })
})

//通过id响应具体招聘信息
router.get('/recruits/speRecruit',(req,res,next)=>{
  console.log(req.query)
  var headerInfo={
    affairId:1,
    title:'飞书前端实习生招聘',
    taps:'互联网|前端|实习',
    address:'光谷软件园',
    workDays:'4天',
    salary:'400-500'
}
var speRecruitInfo={
    content:`
    职位描述：
    1. 负责MMC买家链路业务产品（导购交易营销结算等）相关的架构设计与开发；
    2. 从用户和技术出发，实现面向未来的系统规划、设计和落地；
    3. 技术预研和技术难点攻关，保障系统可用性、稳定性、和可扩展性。
    职位要求：
    1. Java基础扎实，理解io、多线程、集合等基础框架，对JVM原理有一定的了解；
    2. 对于你用过的开源框架，能了解到它的原理和机制；对Spring、ibatis开源框架熟悉；
    3. 掌握多线程及高性能的设计与编码及性能调优；有高并发应用开发经验；
    4. 对技术有浓厚兴趣，学习能力强，适应能力好，抗压能力强；
    5.具备较强的业务理解及业务抽象能力，能理解数据，分析数据，挖掘商业本质
    6. 有强烈的技术热情和钻研精神，热爱新技术；有独立、主动的学习习惯和良好的沟通表达、团队协作能力
    7. 激情，有创业经历和主导平台型产品研发经验者优先"
    我们鼓励人人践行公益，同学如参与过公益活动，有相关证明，也欢迎附在简历中。参考依据包括但不限于：全国志愿服务信息系统开具的志愿服务证明、“人人3小时”公益平台公益时证书、志愿服务组织（含社会团体、社会服务机构、基金会）授予的志愿服务证明等。
        `
    }
var companyInfo={
    companyTaps:'互联网|前端|实习',
    companyName:'字节跳动',
    companyContent:`
    北京字节跳动科技有限公司，简称字节跳动，是一家位于中国北京的跨国互联网技术公司[2]，成立于2012年3月，旗下有产品今日头条和抖音（及其海外版本TikTok）、西瓜视频等。

    至2018年，字节跳动的移动应用月度用户超过十亿人，估值750亿美元，超越Uber成为全球最有价值的创业公司[3]。截至2019年7月，字节跳动的产品和服务已覆盖全球150个国家和地区、75个语种，曾在40多个国家和地区位居应用商店总榜前列[4]。
    `,
    companyGraph:'http://124.223.155.169/testpic/pic4.webp',
}
var mapInfo={address:'武汉市光谷软件园XX大厦',coordinate:'(122.5,116,3)'}
  res.send({
    headerInfo:headerInfo,
    speRecruitInfo:speRecruitInfo,
    companyInfo:companyInfo,
    mapInfo:mapInfo
  })
})

//通过用户电话和token获取所有投递的内推与招聘信息
router.get('/myRecruits/allMyRecruits',(req,res,next)=>{
  console.log(req.query)
  res.send(
    [
      {
      affairId:1,
      title:'飞书前端实习生招聘',
      taps:'互联网|前端|实习',
      companyTaps:'互联网|前端|实习',
      companyName:'字节跳动',
      address:'光谷软件园',
      graph:'http://124.223.155.169/testpic/pic4.webp',
      sendTime:'2022/05/07',
      statu:'待浏览',
      url:'#'
  },{
      affairId:2,
      title:'飞书前端实习生招聘',
      taps:'互联网|前端|实习',
      companyTaps:'互联网|前端|实习',
      companyName:'字节跳动',
      address:'光谷软件园',
      graph:'http://124.223.155.169/testpic/pic4.webp',
      sendTime:'2022/05/07',
      statu:'已浏览',
      url:'#'
  },{
      affairId:3,
      title:'飞书前端实习生招聘',
      taps:'互联网|前端|实习',
      companyTaps:'互联网|前端|实习',
      companyName:'字节跳动',
      address:'光谷软件园',
      graph:'http://124.223.155.169/testpic/pic4.webp',
      sendTime:'2022/05/07',
      statu:'已完成',
      url:'#'
  }
  ]
  )
})

//通过id响应用户投递信息的页面
router.get('/myRecruits/showMyRecruit',(req,res,next)=>{
  console.log(req.query)
  var headerInfo={
    affairId:1,
    title:'飞书前端实习生招聘',
    taps:'互联网|前端|实习',
    address:'光谷软件园',
    workDays:'4天',
    salary:'400-500'
}
var speRecruitInfo={
    content:`
    职位描述：
    1. 负责MMC买家链路业务产品（导购交易营销结算等）相关的架构设计与开发；
    2. 从用户和技术出发，实现面向未来的系统规划、设计和落地；
    3. 技术预研和技术难点攻关，保障系统可用性、稳定性、和可扩展性。
    职位要求：
    1. Java基础扎实，理解io、多线程、集合等基础框架，对JVM原理有一定的了解；
    2. 对于你用过的开源框架，能了解到它的原理和机制；对Spring、ibatis开源框架熟悉；
    3. 掌握多线程及高性能的设计与编码及性能调优；有高并发应用开发经验；
    4. 对技术有浓厚兴趣，学习能力强，适应能力好，抗压能力强；
    5.具备较强的业务理解及业务抽象能力，能理解数据，分析数据，挖掘商业本质
    6. 有强烈的技术热情和钻研精神，热爱新技术；有独立、主动的学习习惯和良好的沟通表达、团队协作能力
    7. 激情，有创业经历和主导平台型产品研发经验者优先"
    我们鼓励人人践行公益，同学如参与过公益活动，有相关证明，也欢迎附在简历中。参考依据包括但不限于：全国志愿服务信息系统开具的志愿服务证明、“人人3小时”公益平台公益时证书、志愿服务组织（含社会团体、社会服务机构、基金会）授予的志愿服务证明等。
    `
}
var companyInfo={
    companyTaps:'互联网|前端|实习',
    companyName:'字节跳动',
    companyContent:`
    北京字节跳动科技有限公司，简称字节跳动，是一家位于中国北京的跨国互联网技术公司[2]，成立于2012年3月，旗下有产品今日头条和抖音（及其海外版本TikTok）、西瓜视频等。

    至2018年，字节跳动的移动应用月度用户超过十亿人，估值750亿美元，超越Uber成为全球最有价值的创业公司[3]。截至2019年7月，字节跳动的产品和服务已覆盖全球150个国家和地区、75个语种，曾在40多个国家和地区位居应用商店总榜前列[4]。
    `,
    companyGraph:'http://124.223.155.169/testpic/pic4.webp',
}
var userInfo=[
  {title:'用户',content:'张蠡奥'},
  {title:'性别',content:'男'},
  {title:'年龄',content:'21'},
  {title:'电话号码',content:'13272732651'},
  {title:'邮箱地址',content:'1181119044@qq.com'},
  {title:'学校',content:'中南财经政法大学'},
  {title:'专业',content:'经济学'}
]
var userResume={
  overView:`我是一个优秀的大学生`,
  educateView:[
    {
      '学校':'中南财经政法大学',
      '学位':'学士',
      '时间':'2019-2023',
      '经历简介':`我在学校干了很多事情`
    },{
      '学校':'中南财经政法大学',
      '学位':'学士',
      '时间':'2019-2023',
      '经历简介':`我在学校干了很多事情`
    }
  ],
  internshipView:[
    {
      '公司':'武汉同创万智科技有限公司',
      '职位':'技术部部长',
      '时间':'2020-至今',
     '经历简介':`我在公司干了很多事情`
    },{
      '公司':'武汉同创万智科技有限公司',
      '职位':'技术部部长',
      '时间':'2020-至今',
      '经历简介':`我在公司干了很多事情`
    }
  ],
  projectView:[
    {
      '项目':'网站开发',
      '角色':'架构师|产品经理',
     '时间':'2022-至今',
     '经历简介':'我做了很多事情'
    }
  ]
}
  var recruitStatu=['2022/05/07/10:59','待浏览','待反馈']
  var mapInfo={address:'武汉市光谷软件园XX大厦',coordinate:'(122.5,116,3)'}
  res.send({
    headerInfo:headerInfo,
    speRecruitInfo:speRecruitInfo,
    companyInfo:companyInfo,
    userInfo:userInfo,
    userResume:userResume,
    recruitStatu:recruitStatu,
    mapInfo:mapInfo
  })
})

router.post('/myrecruits/setRecruit',(req,res,next)=>{
  console.log(req.body)
  res.send('success')
})

//通过用户telephone和token返回用户信息
router.get('/user/getUserInfo',(req,res,next)=>{
  var userInfo=[
    {title:'用户',content:'张蠡奥'},
    {title:'性别',content:'男'},
    {title:'年龄',content:'21'},
    {title:'电话号码',content:'13272732651'},
    {title:'邮箱地址',content:'1181119044@qq.com'},
    {title:'学校',content:'中南财经政法大学'},
    {title:'专业',content:'经济学'}
  ]
  var userResume={
    overView:`我是一个优秀的大学生`,
    educateView:[
      {
        '学校':'中南财经政法大学',
        '学位':'学士',
        '时间':'2019-2023',
        '经历简介':`我在学校干了很多事情`
      },{
        '学校':'中南财经政法大学',
        '学位':'学士',
        '时间':'2019-2023',
        '经历简介':`我在学校干了很多事情`
      }
    ],
    internshipView:[
      {
        '公司':'武汉同创万智科技有限公司',
        '职位':'技术部部长',
        '时间':'2020-至今',
       '经历简介':`我在公司干了很多事情`
      },{
        '公司':'武汉同创万智科技有限公司',
        '职位':'技术部部长',
        '时间':'2020-至今',
        '经历简介':`我在公司干了很多事情`
      }
    ],
    projectView:[
      {
        '项目':'网站开发',
        '角色':'架构师|产品经理',
       '时间':'2022-至今',
       '经历简介':'我做了很多事情'
      }
    ]
  }
  var userMessages=[
    {
      title:'您的飞书实习申请通过',
      sender:'金领工场官方',
      sendTime:'2022/05/07 13:47',
      senderGraph:'http://124.223.155.169/testpic/pic4.webp',
      content:'感谢您通过飞书实习申请，请添加微信1181119044获取详细内容'
    },{
      title:'您的飞书实习申请通过',
      sender:'金领工场官方',
      sendTime:'2022/05/07 13:47',
      senderGraph:'http://124.223.155.169/testpic/pic4.webp',
      content:'感谢您通过飞书实习申请，请添加微信1181119044获取详细内容'
    }
  ]
  var collects=[
    {
        title:'飞书前端实习生招聘',
        content:`职位描述：
  1. 负责MMC买家链路业务产品（导购交易营销结算等）相关的架构设计与开发；
  2. 从用户和技术出发，实现面向未来的系统规划、设计和落地；
  3. 技术预研和技术难点攻关，保障系统可用性、稳定性、和可扩展性。
  职位要求：
  1. Java基础扎实，理解io、多线程、集合等基础框架，对JVM原理有一定的了解；`,
          url:'http://localhost:3000/pages/speRecruit.html?affairId=1&type=recruit',tap:'实习'
      },    {
          title:'飞书前端实习生招聘',
          content:`职位描述：
  1. 负责MMC买家链路业务产品（导购交易营销结算等）相关的架构设计与开发；
  2. 从用户和技术出发，实现面向未来的系统规划、设计和落地；
  3. 技术预研和技术难点攻关，保障系统可用性、稳定性、和可扩展性。
  职位要求：
  1. Java基础扎实，理解io、多线程、集合等基础框架，对JVM原理有一定的了解；`,
        url:'http://localhost:3000/pages/speRecruit.html?affairId=1&type=recruit',tap:'网页'
    }
]
var standardInfo={headImg:'http://124.223.155.169/testpic/head.jpg',backImg:'http://124.223.155.169/testpic/pic2.jpg',name:'张蠡奥',school:'中南财经政法大学',department:'经济学'}
  res.send({
    userInfo:userInfo,
    userResume:userResume,
    userMessages:userMessages,
    collects:collects,
    standardInfo:standardInfo
  })
})

//用户上传个人信息
router.post('/user/setUserInfo',(req,res,next)=>{
  console.log(req.body)
  res.send('success')
})

//用户上传个人简历
router.post('/user/setUserResume',(req,res,next)=>{
  console.log(req.body)
  res.send('success')
})

//用户收藏
router.post('/collect/setCollect',(req,res,next)=>{
  console.log(req.body)
  res.send('success')
})

//判断用户是否已收藏该页面
router.post('/collect/checkCollect',(req,res,next)=>{
  console.log(req.body)
  res.send('fail')
})
module.exports = router;
