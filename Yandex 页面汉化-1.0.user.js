// ==UserScript==
// @name         Yandex 页面汉化
// @version      1.0
// @author       hee1310
// @description  Yandex 页面汉化
// @description:zh-cn Yandex 页面汉化
// @match        *://yandex.com/*
// @match        *://*.yandex.com/*
// @match        *://yandex.ru/*
// @match        *://*.yandex.ru/*
// @match        *://ya.ru/*
// @match        *://*.ya.ru/*
// @icon         data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 23 24' height='22.5' width='22.5'%3E%3Cpath fill='%23FC3F1D' d='M15.829 22.488C20.026 20.855 23 16.775 23 12 23 5.787 17.963.75 11.75.75c-1.744 0-3.395.397-4.868 1.105z'%3E%3C/path%3E%3Cpath fill='%232B2B2B' d='M15.829 22.488C20.026 20.855 23 16.775 23 12 23 5.787 17.963.75 11.75.75c-1.744 0-3.395.397-4.868 1.105z'%3E%3C/path%3E%3Cpath fill='%23fff' fill-rule='evenodd' d='M19.5 10.232c-.258-.627-.757-1.118-1.451-1.432a7.6 7.6 0 0 0 .164-1.255H17.02a6.5 6.5 0 0 1-.121.93c-.932-.131-1.982-.004-2.987.357a18 18 0 0 1-.22-1.79c3.58-.202 5.693-1.047 5.791-1.087l-.46-1.078c-.021.009-2.021.802-5.378.996-.004-.804-.031-.8.012-1.068l-1.196-.012c-.02.227-.016.46-.011 1.122q-.054 0-.11.003a28 28 0 0 1-2.3-.1l-.223 1.183c.351.03 1.423.085 2.39.085h.141q.075-.001.149-.003c.047.667.137 1.43.296 2.264-1.585.922-2.843 2.713-2.202 4.169.27.61.789 1.003 1.463 1.102q.17.027.35.026c.682 0 1.465-.271 2.212-.731.489.712.883 1.087.918 1.12l.82-.85c-.008-.006-.354-.336-.79-.984.195-.176.385-.36.56-.561a8.5 8.5 0 0 0 1.595-2.69c.27.151.535.38.676.721.477 1.16-.213 2.502-.855 3.084l.81.857c1.069-.968 1.808-2.783 1.151-4.378m-7.268 3.232c-.27-.04-.44-.168-.547-.411-.295-.671.345-1.765 1.388-2.495.261.93.596 1.715.936 2.353-.638.404-1.29.623-1.777.553m2.986-1.586a6 6 0 0 1-.263.274c-.296-.591-.583-1.31-.801-2.16a5.5 5.5 0 0 1 1.993-.403q.217 0 .426.022a7.4 7.4 0 0 1-1.355 2.267' clip-rule='evenodd'%3E%3C/path%3E%3Cpath fill='%23FC3F1D' d='m7.274 1.676 8.953 20.648a11.2 11.2 0 0 1-4.477.926C5.537 23.25.5 18.213.5 12c0-4.622 2.788-8.594 6.774-10.324'%3E%3C/path%3E%3Cpath fill='url(%23paint0_linear_4915_46620)' fill-opacity='0.4' d='m7.274 1.676 8.953 20.648a11.2 11.2 0 0 1-4.477.926C5.537 23.25.5 18.213.5 12c0-4.622 2.788-8.594 6.774-10.324'%3E%3C/path%3E%3Cpath fill='%23fff' fill-rule='evenodd' d='m7.369 8.969-3.88 8.965h1.587l.955-2.395h3.924l.954 2.395h1.588l-3.88-8.965zm.624 1.846 1.445 3.515h-2.89z' clip-rule='evenodd'%3E%3C/path%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_4915_46620' x1='29.857' x2='5.887' y1='-1.826' y2='18.826' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23fff'%3E%3C/stop%3E%3Cstop offset='1' stop-color='%23fff' stop-opacity='0'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E
// @grant        none
// @license      GPL-3.0 License
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // 隐藏页面直至首次翻译完成
    const hideStyle = document.createElement('style');
    hideStyle.textContent = `body { visibility: hidden !important; }`;
    document.documentElement.appendChild(hideStyle);

    // =====================================================
    // 词典（完整版）—— 按功能类别分组
    // =====================================================
    const translateDict = {
        // ---------- 通用界面 ----------
        "Settings": "设置",
        "General": "通用",
        "Location": "地区",
        "Home page": "主页",
        "Cancel": "取消",
        "Apply": "应用",
        "OK": "确认",
        "Save": "保存设置",
        "Back": "返回",
        "More": "更多筛选",
        "Clear": "清空",
        "Reset": "重置筛选",
        "All": "全部",
        "next": "下一页",
        "Back to top": "回到顶部",
        "Full version": "电脑端页面",
        "Mobile version": "移动端页面",
        "Copy": "复制",
        "Paste": "粘贴",
        "Submit": "提交",
        "Select": "选择",
        "Options": "选项",
        "Compare": "对比",
        "Show more": "显示更多",
        "View all": "查看全部",
        "Show more similar images": "显示更多相似图片",
        "Show comparison": "显示对比",
        "Show translation": "显示翻译",
        "Close chat": "关闭聊天框",
        "Open chat": "打开聊天框",
        "Try again": "重试",
        "Learn more": "了解更多",
        "Got it": "已知晓",
        "Not now": "暂不",
        "Yes": "是",
        "No": "否",
        "Select file": "选择文件",

        // ---------- 搜索相关 ----------
        "Search": "搜索",
        "Search Yandex": "Yandex 搜索",
        "Alice": "AI搜索",
        "Alice AI": "AI搜索",
        "Advanced search": "高级检索",
        "Search suggestions": "搜索联想词",
        "Filter search results": "搜索结果过滤",
        "No filter": "无过滤",
        "Moderate search": "中度过滤",
        "Moderate filter": "中度过滤",
        "Family mode": "家庭模式",
        "Family search": "家庭安全模式",
        "Turn off Family search": "关闭家庭安全模式",
        "Show sites that you frequently visit": "展示常访问网站",
        "Your favorite sites will appear first in the list of search hints along with an icon and a short description to make them more noticeable.": "常用网站会置顶在搜索建议，附带图标与简介方便识别。",
        "Open search results in a new window": "在新窗口中打开搜索结果",
        "History in hints": "搜索提示中的历史记录",
        "Your previous queries": "您之前的查询",
        "Show tips": "显示提示",
        "Clear history": "清除历史记录",
        "On this site": "仅本站",
        "On the site": "仅本站",
        "Site URL": "指定网址",
        "Sites": "网址",
        "Web": "网页",
        "Images": "图片",
        "Video": "视频",
        "News": "新闻",
        "Maps": "地图",
        "In the region": "所在地区",
        "More from the site": "本站更多内容",
        "Recommend Search": "推荐搜索",
        "And get up to 4,000 ₽": "最高可获得4,000 ₽",

        // ---------- 翻译功能 ----------
        "Translate": "翻译",
        "Yandex Translate": "Yandex翻译",
        "Go to Yandex Translate": "使用Yandex翻译打开",
        "Translator for 100+ languages": "支持100多种语言的翻译器",
        "Translator for 100 languages": "支持100多种语言的翻译器",
        "Text": "文本翻译",
        "Documents": "文档翻译",
        "For business": "企业版翻译",
        "Translate in Google": "跳转谷歌翻译",
        "Website translation": "网站翻译",
        "Translate website": "翻译网站",
        "Auto detect": "自动检测",
        "Choose source language": "选择源语言",
        "Choose target language": "选择目标语言",
        "Search languages": "搜索语言",
        "No matches were found": "未找到匹配项",
        "Select a translation model": "选择翻译模型",
        "Basic translation": "基础翻译",
        "Enhanced translation": "增强翻译",
        "Enhanced PDF translation": "增强PDF翻译",
        "Quick translation": "快速翻译",
        "When you need a good translation instantly": "当你需要即时优质翻译时",
        "Translate AI": "AI翻译",
        "Introducing Translate AI": "AI翻译现已推出",
        "Try the enhanced model in action": "试试增强模型的实际效果",
        "Ask Translate AI": "询问AI翻译",
        "The neural network can answer questions, explain grammar, and suggest alternative translations": "神经网络可以回答问题、解释语法并提供备选翻译",
        "Hi! I'm Translate AI. I can help you with translation, grammar, and English-related questions.": "你好！我是AI翻译。我可以帮助你处理翻译、语法和英语相关问题。",
        "Hi! I'm Translate AI.\nI can help you with translation, grammar,\nand English-related questions.": "你好！我是AI翻译。\n我可以帮助你处理翻译、语法\n和英语相关问题。",
        "I can help you with translation, grammar, and English-related questions.": "我可以帮助你处理翻译、语法和英语相关问题。",
        "Explain the Present Perfect": "解释现在完成时",
        "When do I use \"the\" before nouns?": "名词前何时使用“the”？",
        "grammar": "语法",
        "English-related questions": "英语相关问题",
        "The neural network's answers may contain inaccuracies.": "神经网络的回答可能包含不准确之处。",
        "Translating photo": "翻译图片",
        "Text could not be recognized": "无法识别文本",
        "You may have selected the wrong language.": "你可能选择了错误语言",
        "If the photo is rotated to its side, you can use the buttons on the left to change its orientation.": "如果照片倾斜，可以使用左侧按钮调整方向",
        "If the photo is too blurry, please upload a higher quality photo.": "如果照片太模糊，请上传更高质量的照片",
        "select file to upload": "选择文件上传",
        "JPG, PNG, GIF, or other formats up to 5 MB in size": "JPG、PNG、GIF或其他格式，大小不超过5 MB",
        "Image URL": "图片网址",
        "Document translated": "文档已翻译",
        "Download translation": "下载翻译",
        "How's the translation quality?": "翻译质量如何？",
        "What went wrong?": "出了什么问题？",
        "What did you like most?": "您最喜欢什么？",
        "Thank you for your feedback! You're helping us to make the service better.": "感谢您的反馈！您正在帮助我们改进服务。",
        "Comments": "评论",
        "DOC, DOCX, PDF, XLS, XLSX, PPT, PPTX, and other files up to 15MB in size": "DOC、DOCX、PDF、XLS、XLSX、PPT、PPTX及其他格式，大小不超过15 MB",
        "Powered by new models.": "由新模型驱动。",
        "Translation may be slow.": "翻译可能较慢。",
        "Powered by new models.\nTranslation may be slow.": "由新模型驱动。\n翻译可能较慢。",
        "Original": "原文",
        "Open as text": "以文本方式打开",
        "Open in Yandex Translate": "在Yandex翻译中打开",
        "Click to rate the translation": "点击评价翻译",
        "What do you think about this translation?": "您觉得这个翻译怎么样？",
        "Your answer will help us a lot!": "您的回答对我们很有帮助！",
        "Sorry. What went wrong?": "抱歉，出了什么问题？",
        "You don't have to answer, we have already saved your rating": "您无需回答，我们已经保存了您的评分",
        "Thanks for the feedback": "感谢您的反馈",
        "Thank you for your feedback. This helps make our service even better.": "感谢您的反馈，这有助于我们改进服务。",
        "so-so": "一般",
        "Your option": "您的选项",
        "Not all the text has been translated": "并非所有文本都已翻译",
        "Incorrect translation": "翻译不正确",
        "The text is poorly readable": "文本不易阅读",
        "Change the reaction": "更改评价",
        "You're welcome": "不用谢",
        "Highlight the error": "高亮错误",
        "Found a mistake?": "发现错误？",
        "You can suggest a translation": "您可以建议翻译",
        "Your translation": "您的翻译",
        "Leave a comment (optional)": "留下评论（可选）",
        "Your comment": "您的评论",
        "Report": "报告",
        "Thank you for helping us with this translation and sharing your feedback. This helps make our service even better.": "感谢您帮助我们翻译并提供反馈，这有助于改进服务。",
        "Switch direction": "切换方向",
        "Switch direction (Alt+S)": "切换方向（Alt+S）",
        "Start typing or insert a link": "开始输入或插入链接",
        "Bad translation": "翻译有误",
        "Examples": "示例",
        "Translation examples": "翻译示例",
        "Good translation": "优质翻译",
        "Voice input (Alt+M)": "语音输入（Alt+M）",
        "Voice over (Alt+V)": "语音朗读（Alt+V）",
        "On-screen keyboard": "屏幕键盘",
        "Collections": "收藏夹",
        "My collections": "我的收藏",
        "Recommendations": "推荐",
        "Create new collection": "创建新收藏",
        "New collection": "新收藏",
        "Favorites": "收藏夹",
        "Find in collections": "在收藏中查找",
        "Press the bookmark next to the translation and it will appear here": "点击翻译旁边的书签，它会出现在这里",
        "Share collection": "分享收藏",
        "Copy translations": "复制翻译",
        "Search by collection": "按收藏搜索",
        "Add to collection (Alt+L)": "添加到收藏夹（Alt+L）",
        "Share": "分享",
        "Log in to discuss translations": "登录以讨论翻译",
        "Support": "支持",
        "Translate AI supports only some languages": "AI翻译仅支持部分语言",
        "The new technology isn't available for this language yet": "该语言暂不支持此新技术",
        "Text to Speech isn't available in this language yet": "该语言暂不支持文本转语音",
        "Text to Speech isn\\'t available in this language yet": "该语言暂不支持文本转语音",
        "Not sure if you used a word correctly?": "不确定单词用得对不对？",
        "Double-tap to highlight the word and we'll show you possible translations and how the word is used in sentences": "双击高亮单词，我们会展示可能的翻译及例句用法",
        "Great! Thanks": "太好了，谢谢",
        "Clear (Alt+D)": "清空 (Alt+D)",
        "Copy (Alt+C)": "复制 (Alt+C)",
        "We analyze millions of websites, books, movies, and TV shows to show how words are used in different contexts. That helps us better understand the nuances of words that are similar in meaning.": "我们分析数百万个网站、书籍、电影和电视节目，以展示单词在不同语境中的用法。这有助于我们更好地理解意思相近的单词之间的细微差别。",
        "We analyze millions of websites": "我们分析数百万个网站",
        "books, movies, and TV shows": "书籍、电影和电视节目",
        "to show how words are used in different contexts": "展示单词在不同语境中的用法",
        "that helps us better understand": "这有助于我们更好地理解",
        "the nuances of words that are similar in meaning": "意思相近的单词之间的细微差别",
        "Select multiple translations": "选择多个翻译",
        "Delete all": "删除全部",
        "Subscribe": "订阅",
        "Enter a link to any website, and we'll translate it into the chosen language": "输入任意网站的链接，我们会将其翻译成所选语言",
        "Enter a website address": "输入网站地址",
        "Invalid URL": "无效网址",
        "Translating…": "翻译中…",
        "File selection field cleared": "文件选择已清空",
        "The file size exceeds the limit of {0} MB": "文件大小超过{0} MB的限制",
        "Corrupted file": "文件已损坏",
        "Error saving file": "保存文件出错",
        "File is too large": "文件过大",
        "Something's not right": "出了点问题",
        "Internal server error": "内部服务器错误",
        "Network error": "网络错误",
        "Request timeout": "请求超时",
        "Error type:": "错误类型：",
        "Request canceled": "请求已取消",
        "Translation error": "翻译错误",
        "Translation timeout": "翻译超时",
        "Unsupported file format": "不支持的文件格式",
        "Supported formats:": "支持的格式：",

        // ---------- 语言名称 ----------
        "Bahasa Indonesia": "印尼语",
        "Русский": "俄语",
        "Türkçe": "土耳其语",
        "Українська": "乌克兰语",
        "Belarusian": "白俄罗斯语",
        "French": "法语",
        "German": "德语",
        "Indonesian": "印尼语",
        "Tatar": "鞑靼语",
        "Turkish": "土耳其语",
        "Ukrainian": "乌克兰语",
        "Russian": "俄语",
        "English": "英语",
        "Беларуская": "白俄罗斯语",
        "Français": "法语",
        "Deutsch": "德语",
        "Italiano": "意大利语",
        "Español": "西班牙语",
        "Татарча": "鞑靼语",
        "O'zbek": "乌兹别克语",
        "Україн": "乌克兰语",
        "Қазақша": "哈萨克语",
        "Indonesia": "印尼语",
        "O‘zbek": "乌兹别克语",
        "Қазақ": "哈萨克语",
        "Português": "葡萄牙语",
        "Abaza": "阿巴扎语",
        "Abkhaz": "阿布哈兹语",
        "Adyghe": "阿迪格语",
        "Afrikaans": "南非荷兰语",
        "Albanian": "阿尔巴尼亚语",
        "Amharic": "阿姆哈拉语",
        "Arabic": "阿拉伯语",
        "Armenian": "亚美尼亚语",
        "Azerbaijani": "阿塞拜疆语",
        "Bashkir": "巴什基尔语",
        "Basque": "巴斯克语",
        "Bengali": "孟加拉语",
        "Bosnian": "波斯尼亚语",
        "Bulgarian": "保加利亚语",
        "Burmese": "缅甸语",
        "Buryat": "布里亚特语",
        "Catalan": "加泰罗尼亚语",
        "Cebuano": "宿务语",
        "Chechen": "车臣语",
        "Chinese": "中文",
        "Chuvash": "楚瓦什语",
        "Croatian": "克罗地亚语",
        "Czech": "捷克语",
        "Danish": "丹麦语",
        "Dutch": "荷兰语",
        "Elvish (Sindarin)": "精灵语（辛达林）",
        "Erzya": "埃尔齐亚语",
        "Esperanto": "世界语",
        "Estonian": "爱沙尼亚语",
        "Finnish": "芬兰语",
        "Galician": "加利西亚语",
        "Galtaran": "加尔塔兰语",
        "Georgian": "格鲁吉亚语",
        "Greek": "希腊语",
        "Gujarati": "古吉拉特语",
        "Haitian": "海地语",
        "Hebrew": "希伯来语",
        "Hill Mari": "山地马里语",
        "Hindi": "印地语",
        "Hungarian": "匈牙利语",
        "Icelandic": "冰岛语",
        "Irish": "爱尔兰语",
        "Italian": "意大利语",
        "Japanese": "日语",
        "Javanese": "爪哇语",
        "Kabardian": "卡巴尔达语",
        "Kannada": "卡纳达语",
        "Karachay-Balkar": "卡拉恰伊-巴尔卡尔语",
        "Kazakh": "哈萨克语",
        "Kazakh (Latin)": "哈萨克语（拉丁字母）",
        "Khakas": "哈卡斯语",
        "Khmer": "高棉语",
        "Komi": "科米语",
        "Korean": "韩语",
        "Kyrgyz": "吉尔吉斯语",
        "Lao": "老挝语",
        "Latin": "拉丁语",
        "Latvian": "拉脱维亚语",
        "Lithuanian": "立陶宛语",
        "Luxembourgish": "卢森堡语",
        "Macedonian": "马其顿语",
        "Malagasy": "马达加斯加语",
        "Malay": "马来语",
        "Malayalam": "马拉雅拉姆语",
        "Maltese": "马耳他语",
        "Mansi": "曼西语",
        "Maori": "毛利语",
        "Marathi": "马拉地语",
        "Mari": "马里语",
        "Moksha": "莫克沙语",
        "Mongolian": "蒙古语",
        "Nepali": "尼泊尔语",
        "Nogai": "诺盖语",
        "Norwegian": "挪威语",
        "Ossetian": "奥塞梯语",
        "Papiamento": "帕皮阿门托语",
        "Persian": "波斯语",
        "Polish": "波兰语",
        "Portuguese": "葡萄牙语",
        "Portuguese (Brazilian)": "葡萄牙语（巴西）",
        "Punjabi": "旁遮普语",
        "Romanian": "罗马尼亚语",
        "Scottish Gaelic": "苏格兰盖尔语",
        "Serbian": "塞尔维亚语",
        "Serbian (Latin)": "塞尔维亚语（拉丁字母）",
        "Sinhalese": "僧伽罗语",
        "Slovak": "斯洛伐克语",
        "Slovenian": "斯洛文尼亚语",
        "Spanish": "西班牙语",
        "Sundanese": "巽他语",
        "Swahili": "斯瓦希里语",
        "Swedish": "瑞典语",
        "Tagalog": "他加禄语",
        "Tajik": "塔吉克语",
        "Tamil": "泰米尔语",
        "Telugu": "泰卢固语",
        "Thai": "泰语",
        "Tuvan": "图瓦语",
        "Udmurt": "乌德穆尔特语",
        "Urdu": "乌尔都语",
        "Uzbek": "乌兹别克语",
        "Uzbek (Cyrillic)": "乌兹别克语（西里尔字母）",
        "Vietnamese": "越南语",
        "Welsh": "威尔士语",
        "Xhosa": "科萨语",
        "Yakut": "雅库特语",
        "Yiddish": "意第绪语",
        "Zulu": "祖鲁语",

        // ---------- 图片/视频搜索 ----------
        "Size": "尺寸",
        "Any size": "全部尺寸",
        "Large": "大图",
        "Medium": "中图",
        "Small": "小图",
        "Orientation": "画面方向",
        "Any orientation": "不限方向",
        "Horizontal": "横向",
        "Vertical": "纵向",
        "Square": "正方形",
        "Type": "图片类型",
        "Any type": "全部类型",
        "Photos": "实拍照片",
        "White background": "白底图",
        "Drawings and sketches": "手绘草图",
        "People": "人像",
        "Demotivators": "趣味贴图",
        "Color": "色彩",
        "Any color": "不限色彩",
        "Color images only": "仅彩色图",
        "Black and white": "黑白图",
        "File": "文件筛选",
        "Any file": "全部文件",
        "Recent": "最近",
        "Format": "格式",
        "Any format": "任何格式",
        "Landscape": "横向",
        "Portrait": "纵向",
        "HD": "高清",
        "Any duration": "不限时长",
        "Less than 10 minutes": "10分钟以内",
        "10-65 minutes": "10-65分钟",
        "More than 65 minutes": "65分钟以上",
        "Visual search": "视觉搜索",
        "Drag your image here": "将图片拖拽至此",
        "or press the button": "或点击按钮",
        "Select file": "选择文件",
        "Paste from clipboard": "从剪贴板粘贴",
        "Enter image URL": "输入图片网址",
        "Upload an image to get an instant answer": "上传图片获取即时答案",
        "or paste it using Ctrl+V": "或使用Ctrl+V粘贴",
        "Image address": "图片地址",
        "Image appears to contain": "图片似乎包含",
        "Similar images": "相似图片",
        "Move the frames to select the search area": "移动框以选择搜索区域",
        "Ask a question about the photo": "询问有关这张照片的问题",
        "With white background": "白底",
        "Drawings": "绘图",
        "In other sizes": "其他尺寸",
        "Show all sizes": "显示全部尺寸",
        "Collapse": "收起",

        // ---------- 广告与隐私 ----------
        "Advertising": "广告设置",
        "Ad settings": "广告偏好",
        "Show ads": "允许展示广告",
        "Take my interests into account": "基于我的兴趣推送广告",
        "Use my location": "允许使用地理位置推送广告",
        "Ad personalization": "广告个性化",
        "Thanks to personalization, you don't have to see irrelevant and uninteresting ads.": "借助个性化，您无需看到不相关和不感兴趣的广告。",
        "About personal data": "关于个人数据",
        "Yandex processes users' personal data in accordance with the Privacy Policy. Your data may be shared with third parties only when legally permitted, such as with your consent, to perform a contract with you, or to protect your rights and the rights of Yandex.": "Yandex将依照《隐私政策》处理用户个人数据。仅在法律允许的情况下（如获得您的许可、履行与您的合约、保护您与Yandex合法权益），才会向第三方共享您的数据。",
        "To determine users' interests and location, Yandex installs special cookies, on their devices and also uses data from Yandex services and apps you have authorized to share such information.": "为判断用户偏好与地理位置，Yandex会在设备中存储专用cookies，同时调取您已授权的Yandex服务与应用所共享的数据。",
        "in accordance with the Privacy Policy": "依照《隐私政策》",
        "Your data may be shared with third parties only when legally permitted": "仅在法律允许的情况下，您的数据可能被共享给第三方",
        "such as with your consent": "例如经您同意",
        "to perform a contract with you": "为履行与您的合同",
        "to protect your rights and the rights of Yandex": "为保护您和Yandex的权利",
        "Yandex processes users' personal data in accordance with the": "Yandex按照以下条款处理用户个人数据：",
        ". Your data may be shared with third parties only when legally permitted, such as with your consent, to perform a contract with you, or to protect your rights and the rights of Yandex.": "。仅在法律允许的情况下，您的数据可能会与第三方共享，例如经您同意、为履行与您的合同或为保护您和Yandex的权利。",
        "users' personal data": "用户个人数据",
        "third parties": "第三方",
        "To determine users' interests and location": "为判断用户兴趣和位置",
        "installs special cookies": "安装专用cookies",
        "on their devices": "在用户设备上",
        "and also uses data from Yandex services and apps": "同时使用来自Yandex服务和应用的数据",
        "you have authorized to share such information": "您已授权共享这些信息",
        "To determine users' interests and location, Yandex installs special": "为了确定用户的兴趣和位置，Yandex安装特殊的",
        ", on their devices and also uses data from Yandex services and apps you have authorized to share such information.": "，在用户设备上，同时使用来自Yandex服务和应用的数据，这些数据是您已授权共享的。",
        "Privacy Policy": "隐私政策",
        "Recommendation policy": "推荐政策",
        "Ad banner": "广告横幅",
        "We try to display ads that you'll find useful": "我们会为您推送可能感兴趣的广告",
        "during the trip": "在使用过程中",
        "to show relevant information": "展示相关信息",
        "for that location": "针对该地区",
        "Thanks to personalization": "借助个性化",
        "you don't have to see": "您无需看到",
        "irrelevant and uninteresting ads": "不相关和不感兴趣的广告",

        // ---------- 产品与服务 ----------
        "Browser": "浏览器",
        "Yandex Browser": "Yandex浏览器",
        "Disk": "云盘",
        "Mail": "邮箱",
        "Weather": "天气",
        "Games": "游戏",
        "AI": "AI",
        "Search with Yandex AI": "使用Yandex AI搜索",
        "Ads": "广告",
        "Yandex": "Yandex",
        "Yandex in": "地区站点",
        "Russia": "俄罗斯",
        "Ukraine": "乌克兰",
        "Belarus": "白俄罗斯",
        "Kazakhstan": "哈萨克斯坦",
        "Uzbekistan": "乌兹别克斯坦",
        "Turkey": "土耳其",
        "Telemost": "视频会议",
        "Calendar": "日历",
        "Notes": "备忘录",
        "Contacts": "通讯录",
        "Messenger": "即时通讯",
        "AppMetrica": "Yandex AppMetrica",
        "Finds everything": "全网搜索",
        "Technologies": "技术服务",
        "Smart Camera": "智能相机",
        "Products": "产品",
        "Finance": "金融",
        "Apartments": "公寓",

        // ---------- 账户与登录 ----------
        "Account": "账号",
        "Log in": "登录",
        "Exit": "退出登录",
        "Email": "邮箱",
        "To save your bookmarks, passwords, and cards": "用于同步书签、密码与支付卡片",
        "Account management": "账号管理",
        "My reviews": "我的评价",

        // ---------- 外观与主题 ----------
        "Appearance": "外观设置",
        "External appearance": "外观样式",
        "Interface language": "界面语言",
        "UI language": "界面语言",
        "Always light": "始终浅色",
        "Always dark": "始终深色",
        "System": "跟随系统",
        "Light": "浅色",
        "Dark": "深色",
        "System default": "跟随系统",

        // ---------- 帮助与反馈 ----------
        "Help": "帮助中心",
        "Feedback": "意见反馈",
        "report error": "反馈错误",
        "Report error": "反馈错误",
        "Report a violation": "举报违规内容",
        "Contact us": "联系我们",
        "Report an error": "提交错误反馈",
        "Commercial offers": "商业合作",
        "Jobs": "招聘岗位",
        "License": "许可协议",
        "Developers": "开发者接口",
        "User Agreement": "用户协议",
        "User agreement": "用户协议",
        "Terms of Service": "服务条款",
        "Copyright Notice": "版权声明",
        "About": "关于",
        "About Yandex": "关于Yandex",

        // ---------- 时间与日期 ----------
        "Time period": "时间范围",
        "All time": "全部时间",
        "Last day": "近1天",
        "Last 2 weeks": "近两周",
        "Last 24 hours": "近24小时",
        "Past 2 weeks": "近两周",
        "Past month": "近一个月",
        "Last month": "近一个月",
        "Month": "近一个月",
        "Year": "近一年",

        // ---------- 设置偏好 ----------
        "Search settings": "搜索偏好",
        "Home page and new Yandex Browser tab": "主页与浏览器新标签页",
        "Document language": "文档语言",
        "Detect automatically": "自动定位",
        "Enter your location": "输入所在地区",
        "We'll detect your city during the trip to show relevant information for that location.": "在使用过程中，系统会自动识别您所在城市，展示对应地区相关内容。",
        "Use keyboard shortcuts": "使用键盘快捷键",
        "To quickly access functions with the keyboard": "用键盘快速访问功能",
        "Autocorrect spelling": "自动更正拼写",
        "We'll correct any typos we find": "我们会更正我们发现的任何错别字",
        "Line break with Enter": "按Enter换行",
        "Otherwise, line break with Shift+Enter": "否则，按Shift+Enter换行",

        // ---------- 长句说明 ----------
        "Yandex serves ads that take into account your current location and the places you visit. By doing this, we can show you ads for businesses near you — for example, the nearest cafe or a dry cleaner that's along your commute.": "Yandex 会根据您当前的位置和访问过的地点展示广告。这样我们可以向您展示您附近商家的广告，例如最近的咖啡馆或您通勤路上的干洗店。",
        "Not sure if you used a word correctly?": "不确定单词用得对不对？",
        "Double-tap to highlight the word and we'll show you possible translations and how the word is used in sentences": "双击高亮单词，我们会展示可能的翻译及例句用法",
        "Great! Thanks": "太好了，谢谢",
        "Clear (Alt+D)": "清空 (Alt+D)",
        "Copy (Alt+C)": "复制 (Alt+C)",
        "Switch direction": "切换方向",
        "The new technology isn't available for this language yet": "该语言暂不支持此新技术",
        "Text to Speech isn't available in this language yet": "该语言暂不支持文本转语音",
        "Copy": "复制",
        "2011-2026Yandex": "2011-2026 Yandex",
        "Hi! I'm Translate AI. I can help you with translation, grammar, and English-related questions.": "你好！我是AI翻译。我可以帮助你处理翻译、语法和英语相关问题。",
        "The neural network's answers may contain inaccuracies.": "神经网络的回答可能包含不准确之处。",
        "Learn more": "了解更多",
        "We analyze millions of websites, books, movies, and TV shows to show how words are used in different contexts. That helps us better understand the nuances of words that are similar in meaning.": "我们分析数百万个网站、书籍、电影和电视节目，以展示单词在不同语境中的用法。这有助于我们更好地理解意思相近的单词之间的细微差别。",
        "translate between 118 languages instantly": "即时翻译118种语言",
        "get smart typing suggestions": "获取智能输入建议",
        "look up words with pronunciation and real examples": "查询带发音和真实示例的单词",
        "and much more": "以及更多功能",
        "in accordance with the Privacy Policy": "依照《隐私政策》",
        "Your data may be shared with third parties only when legally permitted": "仅在法律允许的情况下，您的数据可能被共享给第三方",
        "such as with your consent": "例如经您同意",
        "to perform a contract with you": "为履行与您的合同",
        "to protect your rights and the rights of Yandex": "为保护您和Yandex的权利",
        "Yandex processes users' personal data in accordance with the": "Yandex按照以下条款处理用户个人数据：",
        ". Your data may be shared with third parties only when legally permitted, such as with your consent, to perform a contract with you, or to protect your rights and the rights of Yandex.": "。仅在法律允许的情况下，您的数据可能会与第三方共享，例如经您同意、为履行与您的合同或为保护您和Yandex的权利。",
        "users' personal data": "用户个人数据",
        "third parties": "第三方",
        "To determine users' interests and location": "为判断用户兴趣和位置",
        "installs special cookies": "安装专用cookies",
        "on their devices": "在用户设备上",
        "and also uses data from Yandex services and apps": "同时使用来自Yandex服务和应用的数据",
        "you have authorized to share such information": "您已授权共享这些信息",
        "To determine users' interests and location, Yandex installs special": "为了确定用户的兴趣和位置，Yandex安装特殊的",
        ", on their devices and also uses data from Yandex services and apps you have authorized to share such information.": "，在用户设备上，同时使用来自Yandex服务和应用的数据，这些数据是您已授权共享的。",
        "Saved copy": "存档副本",
        "With Yandex search you can find any information available on the internet. Yandex offers different filtering modes to help you avoid unwanted content in search results:": "Yandex可检索全网信息，提供多级过滤屏蔽不适内容：",
        "Upload an image to get an instant answer": "上传图片获取即时答案",
        "or paste it using Ctrl+V": "或使用Ctrl+V粘贴",
        "Image address": "图片地址",
        "History in hints": "搜索提示中的历史记录",
        "Your previous queries": "您之前的查询",
        "Show tips": "显示提示",
        "Clear history": "清除历史记录",

        // ---------- 其他杂项 ----------
        "Детский режим": "儿童模式",
        "Bing": "必应",
        "Google": "谷歌",
        "beta": "测试版",
        "library": "库",
        "camera": "相机",
        "Log in to Yandex to sync collections": "登录 Yandex 以同步收藏",
        "Popular collections": "热门收藏",
        "chinese": "中文",
        "emoji": "表情符号",
        "To text": "转为文本",
        "Translation copied": "翻译已复制",
        "Display pages in other languages": "显示其他语言的页面",
        "Type text or a site address": "输入文本或网站地址"
    };

    // ---------- 核心工具 ----------
    const skipTags = new Set([
        'IMG','BR','HR','FORM','SELECT','OPTION','INPUT','SCRIPT','STYLE','CODE','IFRAME','CANVAS','SVG','VIDEO','AUDIO'
    ]);

    function cleanText(str) {
        if (!str) return '';
        return str.replace(/[\n\r]/g, '').replace(/\u00A0/g, ' ').trim();
    }

    // ---------- 翻译函数（带防重入 + 断开 Observer） ----------
    let isTranslating = false;
    let observer = null;

    function translatePage() {
        if (isTranslating) return;
        isTranslating = true;

        // 暂停 MutationObserver，避免自触发循环
        if (observer) observer.disconnect();

        try {
            const allElements = document.querySelectorAll('body *');

            // 【1】专门针对该输入框的强锁定
            const targetInputs = document.querySelectorAll('input.HeaderForm-Input[placeholder*="Ask a question"]');
            targetInputs.forEach(el => {
                if (el.placeholder) {
                    const cleaned = cleanText(el.placeholder);
                    if (cleaned === 'Ask a question about the photo') {
                        el.placeholder = translateDict['Ask a question about the photo'];
                    }
                }
            });

            // 【2】通用属性遍历
            allElements.forEach(el => {
                if (skipTags.has(el.tagName)) return;

                const attrs = ['placeholder', 'aria-label', 'title', 'alt', 'value', 'data-title'];
                attrs.forEach(attr => {
                    if (el.hasAttribute(attr)) {
                        let val = el.getAttribute(attr);
                        if (val) {
                            const cleaned = cleanText(val);
                            if (translateDict.hasOwnProperty(cleaned)) {
                                el.setAttribute(attr, translateDict[cleaned]);
                            }
                        }
                    }
                });
            });

            // 【3】文本节点
            allElements.forEach(el => {
                if (skipTags.has(el.tagName)) return;
                el.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        const cleaned = cleanText(node.data);
                        if (translateDict.hasOwnProperty(cleaned)) {
                            node.data = translateDict[cleaned];
                        }
                    }
                });
            });
        } finally {
            // 重新连接 Observer
            if (observer) {
                observer.observe(document.documentElement, {
                    childList: true,
                    subtree: true,
                    characterData: true,
                    attributes: true,
                    attributeFilter: ['placeholder', 'aria-label', 'title', 'alt', 'value', 'data-title']
                });
            }
            isTranslating = false;
        }
    }

    // ---------- 启动与显示 ----------
    function fullTranslateAndShow() {
        translatePage();
        // 移除隐藏样式，显示页面
        hideStyle.textContent = '';
    }

    // 等待 DOM 就绪后执行首次翻译
    document.addEventListener('DOMContentLoaded', function() {
        fullTranslateAndShow();
        // 保留一次延迟补偿
        setTimeout(translatePage, 800);
    });

    // ---------- 创建 MutationObserver ----------
    observer = new MutationObserver(() => translatePage());
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['placeholder', 'aria-label', 'title', 'alt', 'value', 'data-title']
    });
    // 页面切换（如 History API 导航）时重新翻译
    window.addEventListener('popstate', translatePage);
})();