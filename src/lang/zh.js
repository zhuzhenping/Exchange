// zh.js
module.exports = {
    tabNav: {
        home: "主页",
        lever: "杠杆",
        position: "交易",
        chat: "持仓",
        me: "我的"
    },
    loginReg: {
        reg: "注册",
        login: "登录",
        pwdLogin: "密码登录",
        codeLogin: "验证码登录",
        niHao: "你好！",
        welcome: "欢迎回来",
        welcomeJoin: "欢迎加入",
        regPlaceholder: "输入手机号/邮箱账号",
        codePlaceholder: "输入验证码",
        pwdPlaceholder: "输入密码",
        phonePlaceholder: "输入手机号",
        emailPlaceholder: "输入邮箱账号",
        sendCode: "获取验证码",
        phoneReg: "手机注册",
        emailReg: "邮箱注册",
        nextStep: "下一步",
        regDeal: "注册即表示同意",
        Deal: "《平台服务协议》"
    },
    home: {
        //header
        notLogin: "未登录",
        server: "客服",
        //Modul
        hotActvitity: "热门活动",
        mewUser: "新手引导",
        Apprentice: "我的徒弟",
        //OTC
        legal: "法币",
        deal: "交易",
        legalIntrord: "OTC交易 支持多种支付方式",
        recharge: "立即充值",
        //news
        guid: "行业",
        news: "快讯",
        guidIntord: "行业快讯德里克代课老师OTC交易",
        lever: "交易操作",
        leverHow: "怎样使用杠杆",
        howOpen: "如何开户",
        experHow: "立刻开户试玩"
    },
    guide: {
        title: "新手引导",
        subTitle: "操作指南",
        subTitle1: "常见问题",
        pageIntord: "平台开户指南，教您轻松了解",
        intord1: "开户",
        intord2: "指标",
        intord3: "杠杆",
        intord4: "充值",
        intord5: "等操作",
        intord6: "这里是关于",
        intord7: "本平台",
        intord8: "的一些常见问题"
    },
    lever: {
        title1: "交易品种",
        title2: "价格",
        title3: "涨跌幅"
    },
    pos: {
        clickHide: "点击收起",
        high: "高",
        low: "低",
        amount: "量",
        minute: "分",
        hour: "时",
        day: "天",
        week: "周",
        month: "月",
        more: "更多",
        indicator: "指标",
        hide: "隐藏",
        fund: "资金",
        intord: "简介",
        buyRise: "买涨",
        buyFall: "买跌"
    },
    chat: {
        title: "我的持仓",
        historyTitle: "历史记录（模拟盘）",
        historyTitles: "历史记录",
        DetailTitle: "持仓详情",
        rechargeBtn: "立即充币",
        current: "可用保证金",
        frozen: "已用保证金",
        total: "账户净值",
        hold: "持仓",
        list: "挂单",
        history: "历史",
        orderNo: "订单编号",
        floatProfit: "浮动盈亏",
        netProfit: "净盈亏",
        profit: "盈亏",
        dealPrice: "开仓价",
        dealTime: "开仓时间",
        dealMarket: "开仓市值",
        closePrice: "平仓价",
        closeTime: "平仓时间",
        undoTime: "撤单时间",
        nowUndo:"已撤单",
        currentPrice: "当前价",
        tradePrice: "挂单价",
        lossPrice: "止损价",
        profitPrice: "止盈价",
        cancelOrder: "撤单",
        closeOut: "平仓",
        goOrder: "追单",
        deposit: "保证金",
        volume: "交易量",
        leverage: "杠杆倍数",
        inventoryFree: "库存费",
        setting: "设置止盈止损"
    },
    meSeting: {
        loginOut: "退出登录",
        feedback: "意见反馈",
        about: "关于我们",
        codePc: "PC登录名",
        lang: "语言",
        personalData: "个人资料"
    },
    errMsg: {
        NOT_FOUND: "暂无数据",
        ACCOUNT_NUMBER_NOEXIST: "用户不存在",
        ORDER_NUM_TOO_SMALL: "委托数量太小",
        PRICE_IS_TOO_LOW: "委托价格太低",
        CREATE_ORDER_FAILED: "创建委托单失败",
        TRADING_CLOSED: "交易关闭",
        ORDER_NOT_EXIST: "订单不存在",
        ORDER_BEEN_CANCELLED: "此订单已撤销",
        INSUFFICIENT_ACCOUNT_BALANCE: "账户余额不足",
        CANCELL_OPERATION_FAILED: "撤单操作失败",
        TRADING_NOT_EXIST: "委托单不存在",
        COIN_CODE_NOT_EXIST: "币对不存在",
        CODE_TO_CODE_NAME_EXIST: "币币交易对名称已存在",
        MAX_NUMBER_MUST_LESS_THAN_MIN: "最大数量不得小于最小数",
        RULE_NOT_EXIS: "规则不存在",
        LEVERAGE_MARKET_ORDER_CREATION_FAILED: "杠杆 [市价单] 创建失败",
        ORDER_DOES_NOT_EXIST: "订单不存在",
        THE_CLOSING_TIME_OF_THE_TRANSACTION_TARGET: "交易标的已过收盘时间",
        CLOSING_CREATION_FAILED: "平仓创建失败",
        THERE_ARE_CURRENTLY_NO_POSITIONS_CANNOT_BE_CLOSED:
            "当前没有持仓,无法进行平仓",
        LEVERAGED_EVENING_UP_FAIL_STATUS_ERROR: "订单状态非已成交，不能平仓",
        THE_LEVERAGED_TRANSACTION_AMOUNT_MUST_BE_LESS_THAN_THRESHOLD:
            "杠杆交易委托量不得大于该币对设定的阈值",
        THE_RELEVANT_CURRENCY_PAIR_TRADING_RULES_NOFOUND:
            "未查询到相关币对交易规则，杠杆交易下单失败",
        THE_CURRENCY_AMOUNT_DOES_NOT_EXIST: "垫资账户该币种不存在",
        LEVERAGE_LIMIT_ORDER_CREATED_FAILED: "杠杆 [限价单] 创建失败",
        THE_COMMISSION_AMOUNT_IS_GREATER_THAN_THRESHOLD: "委托量大于设定的阈值",
        LEVERAGE_LIMIT_ORDER_TRADE_TYPE_INVALID:
            "杠杆 [限价单] 订单类型不符合规范",
        LEVERAGE_LIMIT_ORDER_STOCK_NUM_INVALID: "杠杆 [限价单] 手数不符合规范",
        LEVERAGE_LIMIT_ORDER_DEPOSIT_INVALID: "杠杆 [限价单] 保证金不符合规范",
        LEVERAGE_LIMIT_ORDER_PRICE_INVALID: "杠杆 [限价单] 价格不符合规范",
        LEVERAGE_LIMIT_ORDER_OPTION_INVALID: "杠杆 [限价单] 交易方向不符合规范",
        LEVERAGE_LIMIT_ORDER_STOP_INVALID: "杠杆 [限价单] 止盈止损不符合规范",
        ORDER_PRICE_IS_TOO_HIGH: "委托价格太高",
        GENERATE_COIN_PAIR_FAILED: "生成币币交易对失败",
        ENTRUSTED_AMOUNT_EXCEEDS_MAXIMUM: "委托额超出最大额度",
        COMMISSION_AMOUNT_LESS_THAN_MIN: "委托额小于最小额度",
        ORDER_PRICE_MUST_BE_MULTI: "委托价必须是步长的整数倍",
        OPENING_TIME_LESS_THAN_STOP_TIME: "开盘时间不得小于停盘时间",
        TRADING_ORDER_MAX_PRICE_LESS_THAN_MIN: "委托单最高价格不得小于最低价格",
        HANDLE_FAIL: "业务处理失败",
        NAME_EXIST: "名称已存在",
        PRIMARY_KEY_EXIST: "主键已存在",
        TRADE_INFO_NOT_EXIST: "币币交易对不存在",
        TRADE_INFO_CLOSING: "交易标的未到开盘时间",
        TRADE_ENTRUST_PRICE_ERROR: "报价高于或者低于交易标的价格",
        TRADE_ENTRUST_AMOUNT: "报单数量过低",
        TRADE_ENTRUST_FAIL: "生成委托单失败",
        WITHDRAW_FAIL: "撤单失败",
        STEP_SIZE_ERR: "数量尺寸错误",
        TICK_SIZE_ERR: "价格尺寸错误"
    },
    notData: "暂无订单",
    hand: "手",
    stopProfit: "止盈",
    stopLoss: "止损",
    night: "持仓过夜",
    holdTo: "持仓到",
    freeSyn: "综合交易费",
    rise: "涨",
    fall: "跌",
    orderSucc: "下单成功",
    seeOrder: "查看订单",
    cutFake: "切换至实盘",
    cutReal: "切换至模拟盘",
    real: "模拟盘",
    reals: "（模拟盘）",
    fake: "实盘",
    more: "更多",
    cancel: "取消"
};
