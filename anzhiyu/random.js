var posts=["2023/08/26/3-4data/","2023/04/02/B站视频测试/","2023/06/07/2023高考作文/","2023/05/27/CUDA/","2023/03/26/Copilot/","2023/05/13/DDSP-SVC-3-0/","2023/11/04/GFW/","2023/10/02/Emoji表情大全/","2023/03/12/GPT-3模型/","2023/04/01/GPT-4paper解读/","2023/09/24/GH200/","2023/08/25/Hexo搭建小记/","2023/06/04/GPU参数/","2023/04/01/GPT1、GPT2原理/","2023/10/28/Github图床搭建/","2023/09/23/Git入门/","2023/11/04/Markdown语法速查/","2023/08/24/Pages的Hexo博客添加HTTPS支持/","2023/11/11/Potplayer-Alist-阿里云盘搭建在线影音观看/","2023/09/16/PyTorch安装教程/","2023/11/04/LaTeX编写基础知识/","2023/08/06/Lua笔记/","2023/07/13/Python3函数/","2023/06/03/Python3列表/","2023/06/03/Python3数据类型转换/","2023/05/01/Python3基础语法/","2023/06/03/Python3数字/","2023/07/13/Python3条件控制/","2023/06/03/Python3运算符/","2023/10/15/StarLink/","2023/04/09/Word文档转Markdown/","2023/09/30/RAID磁盘阵列技术/","2023/05/01/Typora快速设置文字颜色/","2023/09/17/anzhiyu-plugins/","2023/10/28/core-values-encoder/","2023/09/03/anzhiyu主题标签/","2023/03/11/hexo文章加密/","2023/05/01/lora模型/","2023/10/02/huggingface下载脚本/","2023/02/25/pip换源/","2023/07/13/pythonOS/","2023/02/26/python实现OpenAI的API调用/","2023/07/13/python3模块/","2023/02/25/python实现最优选科方案/","2023/07/13/python推导式/","2023/07/13/python数据结构/","2023/09/03/telegram国内注册/","2023/03/26/すずめの戸締まり/","2023/04/09/《云服务在电子游戏领域的应用》/","2023/07/13/python输入与输出/","2023/10/01/为主页文章卡片添加擦亮动画效果/","2023/04/01/中华人民共和国计算机信息网络国际联网管理暂行规定/","2023/11/12/使用Cloudflare-Pages和Telegraph搭建图床/","2023/04/08/作业1/","2023/10/14/图书页面配置/","2023/10/03/利用Cloudflare-Workers搭建Github下载加速站/","2023/10/01/在侧边栏添加个性定位欢迎信息/","2023/08/23/博客重构/","2023/06/03/基本数据类型/","2023/10/02/实现文章统计页面/","2023/08/10/工业和信息化部关于开展移动互联网应用程序备案工作的通知/","2023/09/30/希腊字母表/","2023/10/01/开源许可证简介/","2022/11/05/折枝落梦/","2023/09/02/服务器维修日记/","2023/10/02/搭建NPM图床/","2023/09/24/安知鱼主题配置/","2023/05/01/泠鸢Lora模型/","2023/06/03/梯度下降算法简介/","2023/10/29/猎鹰9回收视频/","2023/10/21/我要我们在一起/","2023/05/07/泠鸢lora模型v2/","2023/04/22/生成式人工智能服务管理办法/","2023/09/30/算法复杂度简析/","2023/09/28/这还是比较抽象/","2023/06/08/黄仁勋台大毕典演讲/","2023/09/03/计算机组成原理（转载）/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};