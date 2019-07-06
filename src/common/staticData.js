// navList
import icon_home from "Images/footer/home.png";
import icon_home_a from "Images/footer/home_active.png";
import icon_lever from "Images/footer/lever.png";
import icon_lever_a from "Images/footer/lever_active.png";
import icon_position from "Images/footer/position.png";
import icon_position_a from "Images/footer/position_active.png";
import icon_chat from "Images/footer/chat.png";
import icon_chat_a from "Images/footer/chat_active.png";
import icon_me from "Images/footer/me.png";
import icon_me_a from "Images/footer/me_active.png";
import radio from "Images/other/icon_radio.png";
import radios from "Images/other/icon_radios.png";

export const bankList = [
    {
        text: "中国工商银行 (ICBC)",
        value: "中国工商银行 (ICBC)"
    },
    {
        text: "中国农业银行 (ABC)",
        value: "中国农业银行 (ABC)"
    },
    {
        text: "中国建设银行 (CBC)",
        value: "中国建设银行 (CBC)"
    },
    {
        text: "中国银行 (BC)",
        value: "中国银行 (BC)"
    },
    {
        text: "交通银行 (BOCOM)",
        value: "交通银行 (BOCOM)"
    },
    {
        text: "招商银行 (CNBC)",
        value: "招商银行 (CNBC)"
    },
    {
        text: "广发银行 (CGB)",
        value: "广发银行 (CGB)"
    },
    {
        text: "招商银行 (CNBC)",
        value: "招商银行 (CNBC)"
    },
    {
        text: "浦发银行 (SDPB)",
        value: "浦发银行 (SDPB)"
    },
    {
        text: "兴业银行 (CIB)",
        value: "兴业银行 (CIB)"
    },
    {
        text: "中国光大银行 (CEB)",
        value: "中国光大银行 (CEB)"
    },
    {
        text: "平安银行 (PAB)",
        value: "平安银行 (PAB)"
    },
    {
        text: "中国民生银行 (CMBC)",
        value: "中国民生银行 (CMBC)"
    },
    {
        text: "中信银行 (ECITIC)",
        value: "中信银行 (ECITIC)"
    },
    {
        text: "上海银行 (BOSC)",
        value: "上海银行 (BOSC)"
    },
    {
        text: "中国邮政储蓄银行 (PSBC)",
        value: "中国邮政储蓄银行 (PSBC)"
    }
];

export const navList = [
    {
        id: 1,
        normal: icon_home,
        active: icon_home_a,
        name: "home",
        path: "/"
    },
    {
        id: 2,
        normal: icon_lever,
        active: icon_lever_a,
        name: "lever",
        path: "/lever"
    },
    {
        id: 3,
        normal: icon_position,
        active: icon_position_a,
        name: "position",
        path: "/position"
    },
    {
        id: 4,
        normal: icon_chat,
        active: icon_chat_a,
        name: "chat",
        path: "/chat"
    },
    {
        id: 5,
        normal: icon_me,
        active: icon_me_a,
        name: "me",
        path: "/me"
    }
];
export const guideData = {
    userList: [
        {
            icon: require("../assets/Images/guide/icon_1.png"),
            title: "系统操作指南",
            content: "平台开户指南，教您轻松了解平台开户指南，教您轻松了解",
            id: 1
        },
        {
            icon: require("../assets/Images/guide/icon_2.png"),
            title: "快捷开户",
            content: "平台开户指南，教您轻松了解平台开户指南，教您轻松了解",
            id: 2
        },
        {
            icon: require("../assets/Images/guide/icon_3.png"),
            title: "K线指标设置",
            content: "平台开户指南，教您轻松了解平台开户指南，教您轻松了解",
            id: 3
        },
        {
            icon: require("../assets/Images/guide/icon_4.png"),
            title: "杠杆交易操作",
            content: "平台开户指南，教您轻松了解平台开户指南，教您轻松了解",
            id: 4
        },
        {
            icon: require("../assets/Images/guide/icon_5.png"),
            title: "账户充值/提币",
            content: "平台开户指南，教您轻松了解平台开户指南，教您轻松了解",
            id: 5
        },
        {
            icon: require("../assets/Images/guide/icon_6.png"),
            title: "推广赚钱",
            content: "平台开户指南，教您轻松了解平台开户指南，教您轻松了解",
            id: 6
        }
    ]
};

export const askedData = {
    open_account: [
        {
            title: "是否能注册多个账户？",
            content: [
                "您可以注册多个账户，但一个身份证和一个手机号仅支持绑定一个账户。"
            ],
            name: 1
        },
        {
            title: "开户是否需要实名？",
            content: [
                "开户不需实名认证，您可以直接手机号或者邮箱注册，注册成功即可登录使用。但进行绑卡、充/提币等操作时，必须进行实名认证，以便保护您的资金安全！"
            ],
            name: 2
        },
        {
            title: "忘记登录密码怎么办？",
            content: [
                "忘记登录密码时，您可以在登录页面进行“忘记密码”操作，按照系统提示输入验证码，重置密码即可。"
            ],
            row: 1,
            name: 3
        }
    ],
    chong_ti: [
        {
            title: "充/提币有哪些方式？",
            content: [
                "目前可以直接向平台的USDT钱包转账，或者通过OTC场外的方式购买USDT充值进入平台。"
            ],
            name: 4
        },
        {
            title: "什么是OTC交易？",
            content: [
                "OTC交易为场外交易。平台与商户签约，用户可通过平台与签约商户自由进行数字货币资产与法币买卖。"
            ],
            name: 5
        },
        {
            title: "OTC交易如何操作？",
            content: [
                "OTC交易，即买方以法币（人民币）购买出售方提供的数字资产，如USDT。",
                "交易过程如下：",
                "购入：",
                "1、买方自由选择出售方，在出售方设定的出售额度范围内进行下单购买；",
                "2、买方下单成功后，出售方向买方提供收款账号，买方向其提供的账户进行转账，转账方式可通过个人微信、支付宝、银行卡等方式；",
                "3、转账成功后标记安全码，此时订单相应的数字货币将被锁定在平台上，卖方确认收到转账后，将释放数字货币给买方。",
                "4、如果有其他疑问可以直接联系我们的客服，加快操作速度。",
                "出售：",
                "1、进入出售界面，输入出售金额，设定每次交易额度范围，并设定转账方式；",
                "2、提交后，商户会进行审核，审核通过后即可进行交易，交易成功，款项到账；",
                "注：仅有实名认证的账户方可购入/出售数字货币；交易期间遇到问题可联系平台在线客服。"
            ],
            name: 6
        },
        {
            title: "什么是钱包转账？",
            content: [
                "1、指用户将其他第三方数字货币钱包下USDT资产充值到平台提供地址下；",
                "2、钱包转账受网络的拥挤程度决定，交易完成需6次确认；",
                "3、本平台目前只接受USDT的充值，请在充币钱，再次确认充值地址，交易一旦发送到区块链网络便不可撤回。",
                "4、钱包提币前需确保所提供提币地址准确无误，若无地址可选择新建地址，提币手续费每笔为提币USDT数量的3%。",
                "5、所有充提币记录可在历史明细查看。"
            ],
            name: 7
        }
    ],
    lever_list: [
        {
            title: "杠杆交易下单有哪些方式？",
            content: [
                "市价：以当前价立即成交，可设置止盈止损点及是否持仓过夜。",
                "挂单：是按投资者期望的价格下单但并未立即成交，仅当满足条件后才成交，可设置截止时间（指用户希望在某一时间内挂单按期望价格成交，若规定时间内未成交，则挂单取消）、止盈止损点及是否持仓过夜。"
            ],
            name: 8
        },
        {
            title: "杠杆交易费用包含哪些？",
            content: ["平台收取的费用主要包括交易手续费和持仓过夜费。"],
            name: 9
        },
        {
            title: "交易手续费怎么收取？",
            content: [
                "交易手续费=（交易量*开仓价-占用保证金）*费率",
                "交易手续费只在下单时收取一次，其余操作都不再收取。"
            ],
            name: 10
        },
        {
            title: "持仓过夜费怎么收取？",
            content: [
                "过夜费收取时间：每日06:00收取前一天的持仓过夜费；",
                "过夜费=交易手续费*30%；",
                "过夜费是对选择了持仓过夜的订单收取的费用，如订单在6:10前已经平仓，则不收取该费用；",
                "每笔订单每天都将收取一次，如订单持仓过夜2天，将收取2次过夜费；",
                "用户若想修改订单持仓过夜设置，可在下单时选择是否【持仓过夜】或在【06:10-次日06:00】至【持仓】页面修改该订单的持仓过夜设置，系统将根据该设置判断该笔订单是否持仓过夜。"
            ],
            name: 11
        },
        {
            title: "杠杆交易时间？",
            content: [
                "除服务器特殊维护时间外，为全部开放日，交易时间为当日的06:10—次日06:00 （按照香港的当地时间计算）"
            ],
            name: 12
        },
        {
            title: "投资的最小和最高交易量是多少？",
            content: ["每个品种的交易量各有不同，请具体查看每个交易品种介绍。"],
            name: 13
        },
        {
            title: "保证金交易是什么意思？",
            content: [
                "保证金是投资者放在自己开设的交易合约中的资金（承担风险的资金），用来弥补或者部分弥补可能遭受的亏损。保证金交易充分利用了杠杆投资的原理，即用较少的资金实现获取较大收益的可能性。固额保证金，三个档位，保证金越小风险越大，投资者谨慎选择！",
                "如购买一个BTC，合约价值为6000USDT，投资者选择10倍的杠杆保证金交易，即可用600USDT成交一个BTC。"
            ],
            name: 14
        },
        {
            title: "什么情况下杠杆交易会被强制平仓？",
            content: [
                "有三种情况会被强制平仓，一是亏损费用超出保证金的80%；二是用户没有设置【持仓过夜】，在次日06:00前会被系统强制平仓；三是账户资金不足以支付过夜费。"
            ],
            name: 15
        },
        {
            title: "是否可以一直持仓？",
            content: [
                "若订单开启【持仓过夜】设置，只要没有达到止损、止盈底线并有足够的资金支付过夜费，持仓将不受时间限制，可以长期持仓。"
            ],
            row: 1,
            name: 16
        }
    ],
    other_list: [
        {
            title: "什么是数字货币？",
            content: [
                "数字货币也称为加密货币，是一种端到端的电子现金系统，用户无需通过中央服务器或中介金融机构即可进行金融交易，比如，无需通过银行即可进行货币的电子转移。也就是说，数字货币是以电子支付形式存在的数字资产。此外，数字货币的价值与某个特定国家或货币没有相关性，是由市场供求关系决定的。"
            ],
            name: 17
        },
        {
            title: "该数字货币交易平台的特点？",
            content: [
                "本平台的交易主要采用了杠杆交易模式，即利用较少的资金实现获取较大收益的可能性，同时损失也相对放大。",
                "客户在本平台进行交易，支付保证金及交易手续费，由平台根据客户的交易信息在各大数字货币交易所进行实际交易，实际交易盈利部分归客户所有，亏损由客户的保证金承担，本平台仅赚取用户的交易手续费；",
                "客户一旦方向买错，会存在较大的资金损失，因此，本平台的交易模式并非适用于每个投资者，在您开始实盘交易前，建议您明确其交易风险，并控制投入资金额度，一旦您选择了本平台交易，即视为您认同本平台的交易模式并愿意承担其带来的风险。",
                "本平台的操作相较其他交易所简便，入门容易，更快上手投资。"
            ],
            name: 18
        },
        {
            title: "推广下线是如何分成的？",
            content: [
                "本平台采用师徒制的推广方式，按照一级二级下线进行分成，您将获取您一级下线交易手续费的10%，二级下线交易手续费的5%为分成。"
            ],
            name: 19
        },
        {
            title: "该平台行情对接方式是什么？",
            content: [
                "平台将订阅币安、OKEX和火币三大交易所的外盘行情，加权平均作为标准行情，若某交易所出现故障，则取消该交易所权重，将原有权重平均给其他交易所。"
            ],
            name: 20
        }
    ]
};

export const meList = [
    {
        title: "投资报表",
        icon: require("../assets/Images/me/icon_0.png"),
        link: "/me/report",
        id: "report0"
    },
    {
        title: "资金明细",
        icon: require("../assets/Images/me/icon_1.png"),
        link: "/me/fund",
        id: "fund1"
    },
    {
        title: "银行卡包",
        icon: require("../assets/Images/me/icon_1.png"),
        link: "/me/bank",
        id: "bank1"
    },
    {
        title: "消息中心",
        icon: require("../assets/Images/me/icon_2.png"),
        link: "/me/bank",
        id: "msg2"
    },
    {
        title: "新手引导",
        icon: require("../assets/Images/me/icon_3.png"),
        link: "/guide",
        id: "guide3"
    },
    {
        title: "联系客服",
        icon: require("../assets/Images/me/icon_4.png"),
        link: "/service",
        id: "service4"
    },
    {
        title: "安全中心",
        icon: require("../assets/Images/me/icon_5.png"),
        link: "/me/security",
        id: "security5"
    },
    {
        title: "账户设置",
        icon: require("../assets/Images/me/icon_6.png"),
        link: "/me/setting",
        id: "setting6"
    }
];

export const Edit = {
    phone: {
        title: "修改手机号",
        tips: "修改手机号前请先验证原手机号",
        tipPhone: "输入手机号"
    },
    email: {
        title: "修改邮箱",
        tips: "修改邮箱前请先验证原邮箱账号",
        tipPhone: "输入邮箱号"
    }
};
export const Edit1 = {
    phone: {
        title: "修改手机号",
        tips: "确认新的手机号",
        tipPhone: "输入您要绑定的新手机号"
    },
    email: {
        title: "修改邮箱",
        tips: "确认新邮箱账号",
        tipPhone: "输入您要绑定的邮箱账号"
    }
};
//Intord 文字描述
//关于我们
const product = {
    title: "产品相关介绍",
    name: "About",
    data: [
        {
            title: "",
            id: 1,
            List: [
                "<strong>币投</strong>是一个提供各类创新的数字资产衍生品的交易平台，致力于提供优质的区块链衍生品投资机会，为用户提供更加安全，快捷的区块链资产衍生品交易服务。其引进了先进的交易引擎，是一种以数字货币为标的物的交易合约，我们提供诸如比特币BTC，以太坊ETH，比特现金BCH等主流的数字货币的衍生品杠杆交易。",
                "我们提供便捷的买入、卖出操作，同时提供便捷的交易倍数方便用户选择，币投为全球用户提供7*24小时的数字货币衍生品交易服务。同时可以用低额的资金获得高额的回报。相比传统数字货币衍生品交易市场让用户更容易、更快的上手，更简便的操作。",
                "同时，本产品具有全球领先的商业架构，引进成熟的金融市场交易引擎，确保用户的交易安全。本产品基于及时、准确的数字货币行情，为投资者快速发现其价值，获得更好的商业回报。",
                "我们的团队均有十年以上传统金融市场的资深经验，同时也有多年的互联网资深技术人士加入，致力于推动数字货币和区块链行业的发展，我们的服务遍布全球，同时提供快捷的全球区块链资讯和行情，为您的投资保驾护航。"
            ]
        }
    ]
};
//免责及隐私声明
const privacy = {
    title: "免责及隐私声明",
    name: "About",
    data: [
        {
            title: "免责声明",
            id: 1,
            List: [
                "币投将尽最大力度去保护用户的数据和安全，提供用户良好的投资操作体验，但出现以下情况币投将有免责的权利：",
                "1、交易有风险",
                "交易或持有数字资产及其衍生品的损失风险可能很大。因此,您应该根据您的财务状况，仔细考虑数字资产或任何杠杆或衍生数字资产的交易是否适合您。",
                "2、我们不接受某些客户",
                "我们不能也不希望服务于某些客户， 比如来自当地禁止涉及数字资产行为的司法管辖区的客户， 这需要昂贵的跨司法管辖区的监管，或列名在国际制裁清单上的客户。我们根本不想违反各国的规定。",
                "3、其他各种非正常原因导致的故障和问题",
                "我们对由于信息网络设备维护、信息网络连接故障、电脑、通讯或其他系统的故障、电力故障、天气原因、意外事故、罢工、劳动争议、暴乱、起义、骚乱、生产力或生产资料不足、火灾、洪水、风暴、爆炸、战争、银行或其他合作方原因、数字资产市场崩溃、政府行为、 司法或行政机关的命令、其他不在我们可控范围内或我们无能力控制的行为或第三方的原因而造成的不能服务或延迟服务，以及造成的您的损失，我们不承担任何责任。",
                "我们不能保证本网站包含的全部信息、程序、文本等完全安全，不受任何病毒、木马等恶意程序的干扰和破坏，故您登录、使用本网站任何服务或下载及使用该下载的任何程序、信息、数据等均是您个人的决定并自行承担风险及可能产生的损失。",
                "4、数字资产的风险问题",
                "我们对于数字资产的市场、价值及价格等不做任何明示或暗示的保证，您理解并了解数字资产市场是不稳定的，价格和价值随时会大幅波动或崩盘，交易数字资产是您个人的自由选择及决定且自行承担风险及可能产生的损失。您注册后即表示认可我们按照本协议中规定的规则进行的任何操作，产生的任何风险均由您承担。"
            ]
        },
        {
            title: "隐私声明",
            id: 1,
            List: [
                "1、数据收集目的和使用",
                "币投收集、处理和存储的个人数据，是通过您使用我们的服务所取得的，或者已经获得了您的同意。这些个人数据，可能包括联系方式或与您的设备或互联网服务相关的任何信息（如 IP 地址和 MAC 号码）。 币投使用个人数据与您沟通，并管理、履行、改进以及为您制定个性化服务。 币投还可以从我们收集的任何个人数据中生成通用数据， 并将其用于我们自己的目的。我们还可以使用这些数据，与您就币投或其合作伙伴提供的其他产品或服务进行沟通。除非您同意并在下面列出的详细情况下，否则我们不会与第三方（与币投 的服务相关的合作伙伴除外）分享您的个人数据。我们可能会与第三方分享您的个人资料：",
                "（a）如果我们认为分享对于执行服务条款是有必要的;",
                "（b）使我们能够遵守政府机构，包括监管机构、执法部门或司法部门的要求;",
                "（c）向为币投站提供服务的第三方（例如管理或技术服务）;",
                "（d）如果适用，出售或转让我们的业务或其任何部分。 此外，我们已采取措施， 防止洗钱、规避贸易和经济制裁的行为， 这要求我们对客户进行尽职调查。这可能包括使用第三方数据和服务提供商将您的个人信息与其数据交叉比对。",
                "2、存储您的个人数据",
                "我们从您那收集的数据可能会转移并存储到新加坡以外的目的地。 这些数据也可能由在新加坡以外的工作人员处理，这些工作人员为我们或为我们的供应商工作。 您提交您的个人资料的行为， 即表示您同意上述转让、存储或处理。您提供给我们的所有信息都存储在我们的/第三方云安全服务器上。",
                "3、对我们的隐私政策的修改",
                "我们未来对我们的隐私政策的任何更改将会发布在此页面上，若合适的话，也许会通过电子邮件通知您。您使用我们的网站和服务的行为，即表示您同意我们的隐私政策。"
            ]
        }
    ]
};
//注册协议
const protocol = {
    title: "注册服务协议",
    name: "Register",
    data: [
        {
            title: "",
            id: 1,
            List: [
                "请仔细阅读这些服务条款（以下简称为“本条款”）。通过点击“用户注册”按钮或通过访问或使用本服务，即默认您同意遵守本条款及所有附加条款。如果您不同意受本条款的约束，请勿访问或使用本服务。",
                "币投保留随时更改或修改本条款中所含内容的权利，包括但不限于本网站的任何政策或准则。任何更改会在发布网站更新后或声明更改后立即生效，更改将持续生效。您有放弃接收有关此类更改的特定通知的权利，继续使用本网站表示您接受此类更改。如果您不同意本条款，请立即停止使用本网站。我们希望您经常回顾本条款，以确保您了解适用于您访问和使用本服务的条款和条件。",
                "本条款（以下简称“币投”、“本公司”或“我们”）提供的任何服务，包括但不限于币投（以下简称“币投”、“本公司”或“我们”）以及我们提供的移动应用程序和交易所服务（统称为“本服务”）。签订其他有关本网站所提供的产品的相关协议，不会影响本条款的生效。如果您代表任何机构使用本服务，您声明并保证（a）该机构是符合当地法律法规的合法机构，（b）您有权代表该机构接受本条款。如果您违反本条款，该机构同意对您的行为负责。",
                "2、我们的服务描述",
                "我们提供一个包含数字资产的在线交易平台，用于交易数字资产和衍生品，并提供保证金交易服务。交易者在我们的平台上进行交易。交易者必须在开始交易之前，开立账户并预存数字资产。因此我们是一个仅提供数字资产和衍生品交易的平台。交易者可以随时要求提取其数字资产，但须遵守本条款的限制。"
            ]
        },
        {
            title: "I.适用范围",
            id: 2,
            List: [
                "本服务仅适用于 18 岁或以上的用户。通过访问或使用我们的服务，您声明并确保您至少年满 18 岁，没有被剥夺过适用本服务的权利。您也保证您不在任何贸易或经济制裁清单中，如联合国安理会制裁清单，也不受香港金融管理局、香港海关等香港行政执法机构限制或禁止适用任何交易平台。此外，币投 可能不会在所有国家或地区提供本服务，并可能会对受限制地区的用户提供部分或不提供本服务，其中包括中国（包括香港、台湾、澳门），古巴、伊朗、朝鲜、克里米亚、苏丹、马来西亚、叙利亚、美国[包括所有美国领土，如波多黎各、美属萨摩亚、关岛、北马里亚纳群岛邦、美属维尔京群岛（圣克罗伊岛，圣约翰岛和圣托马斯岛）]、孟加拉国、玻利维亚、厄瓜多尔和吉尔吉斯斯坦。本协议内容不受用户所属国家或地区法律的排斥。因此，如果您不符合这些要求，请勿使用我们的服务。"
            ]
        },
        {
            title: "II.我们的服务描述 ",
            id: 3,
            List: [
                "我们提供一个包含数字资产的在线交易平台，用于交易数字资产和衍生品，并提供保证金交易服务。交易者在我们的平台上进行交易。交易者必须在开始交易之前，开立账户并预存数字资产。因此我们是一个仅提供数字资产和衍生品交易的平台。交易者可以随时要求提取其数字资产，但须遵守本条款的限制。",
                "币投会尽力确保网站上信息的准确性。网站上的信息和内容如有更改，恕不另行通知，且仅为协助用户以做出独立决定。币投已采取合理措施确保网站信息的准确性。但是，我们不保证本网站所提供的任何服务或产品内容的准确性、适用性、可靠性、完整性、性能和/或恰当性，且不对任何直接或间接造成的损失或损害、信息传递的延迟或失败承担责任。 币投 对此类信息的使用或解释不承担任何责任。",
                "用户必须自行准备如下设备和承担如下开支：",
                "（1）上网设备，包括并不限于电脑或者其他上网终端、调制解调器及其他上网装置；",
                "（2）上网开支，包括并不限于网络接入费、上网设备租用费、手机流量费等。",
                "用户在接受币投网各项服务的同时，同意接受币投网提供的各类信息服务。用户在此授权币 可以向其电子邮件、手机、通信地址等发送商业信息。用户有权选择不接受币投网提供的各类信息服务，并进入币投网相关页面进行更改。",
                "用户理解并同意，币投 的服务是按照现有技术和条件所能达到的现状提供的。币投 会尽最大努力向用户提供服务，确保服务的连贯性和安全性；但 币投 不能随时预见和防范法律、技术以及其他风险，包括但不限于不可抗力、病毒、木马、黑客攻击、系统不稳定、第三方服务瑕疵、政府行为等原因可能导致的服务中断、数据丢失以及其他的损失和风险。",
                "系统平台因下列状况无法正常运作，使用户无法使用各项服务或不能正常委托时，币投 不承担损害赔偿责任，该状况包括但不限于：",
                "A．币投平台公告之系统停机维护期间；",
                "B．电信设备出现故障不能进行数据传输的；",
                "C．因台风、地震、海啸、洪水、停电、战争、恐怖袭击等不可抗力之因素，造成 币投 平台系统障碍不能执行业务的；",
                "D．由于黑客攻击、计算机病毒侵入或发作、电信部门技术调整或故障、网站升级、银行方面的问题、因政府管制而造成的暂时性关闭等影响网络正常经营的原因而造成的服务中断或者延迟；",
                "E．因为行业现有技术力量无法预测或无法解决的技术问题而造成的损失；",
                "F．因第三方的过错或者延误而给用户或者其他第三方造成的损失。",
                "由于系统故障、网络原因、DDos 等黑客攻击等意外因素可能导致的异常成交、行情中断，以及其他可能的异常情况，币投 有权根据实际情况取消异常成交结果，以及回滚某一段时间的所有成交。",
                "币投的部分服务是以收费方式提供的，如用户使用收费服务，请遵守相关的协议。",
                "币投 可能根据实际需要对收费服务的收费标准、方式进行修改和变更，币投 也可能会对部分免费服务开始收费。前述修改、变更或开始收费前，币投 将在相应服务页面进行通知或公告。如果用户不同意上述修改、变更或付费内容，则应停止使用该服务。",
                "币投不会向任何用户索取密码，不会让用户往任何非本站交易中心里提供的帐户、充值地址打款，请大家不要相信任何币投网打折、优惠等信息，往非交易中心提供的账户、地址里打款或币所造成的损失本站不负责任。",
                "交易异常处理：用户使用本服务时同意并认可，可能由于数字货币网络连线问题或其他不可抗拒因素，造成本服务无法提供。用户确保所输入的您的资料无误，如果因资料错误造成本网站于上述异常状况发生时，无法及时通知用户相关交易后续处理方式的，本网站不承担任何损害赔偿责任。",
                "用户同意，基于运行和交易安全的需要，本网站可以暂时停止提供或者限制本服务部分功能, 或提供新的功能，在任何功能减少、增加或者变化时，只要用户仍然使用本服务，表示用户仍然同意本协议或者变更后的协议。",
                "本网站有权了解用户使用本网站产品或服务的真实交易背景及目的，用户应如实提供本网站所需的真实、全面、准确的信息；如果本网站有合理理由怀疑用户提供虚假交易信息的，本公司有权暂时或永久限制用户所使用的产品或服务的部分或全部功能。"
            ]
        },
        {
            title: "III.交易数字资产衍生品的风险",
            id: 4,
            List: [
                "数字资产衍生品交易涉及重大风险，交易或持有数字资产衍生品很有可能会造成您的损失。因此，您应该根据自己的财务状况，仔细考虑是否要交易数字资产或相关衍生品及使用杠杆。",
                "1、币投认为，数字资产不应该被称为钱和法定货币，因为它们不以政府或中央银行为后盾支持。币投不能保证数字资产和相关衍生品市场的有序稳定。您应该在数字资产（以及任何其他衍生品）交易中保持谨慎，价格会随时波动。由于价格波动，您可能会有大额的盈利或亏损。任何数字资产或衍生品头寸都可能发生大幅度波动，甚至可能变得毫无价值。",
                "2、在使用本服务时，若用户或用户的交易指令出现错误（包括但不限于价格、数量等因素），而使用户的交易出现损失时，如果非本站交易规则的原因，损失责任将由用户自己承担。",
                "3、因用户的过错导致的任何损失由用户自行承担，该过错包括但不限于：不按照交易提示操作，未及时进行交易操作，遗忘或泄漏密码，密码被他人破解，用户使用的计算机被他人侵入。",
                "4、在使用本服务时，若用户因为网站交易规则中潜在的尚未发现的某种漏洞而产生的不当得利，本站将联系用户追回，您必须有效予以配合，否则本站将采取包括但不限于限制账户交易、冻结账户资金、向有管辖权的法院起诉等追索措施，因用户不予有效配合而给 币投 产生的追索费用也将由您承担。"
            ]
        },
        {
            title: "IV.创建账户",
            id: 5,
            List: [
                "为了使用本平台任何服务，您必须首先通过提供您的姓名、电子邮件和密码注册账户，以及确认接受本服务条款。您同意不允许任何人使用、指导您的帐户，并向 币投 更新您的任何信息更改，或者您的帐户是否被盗用。您有责任保留，保护和保障任何已提供给您的密钥、证书、密码、访问代码、用户 ID 或其他凭据和登录信息（统称为“密码”），或是由您使用服务生成的上述密码。如果您丢失密码，可能无法访问您的帐户。您同意立即通知 币投 任何未经授权使用您密码的事宜。由于未经授权使用您的密码而导致的任何责任、损失或损害，币投 将不承担任何责任。由于本站是交易网站，登录密码、提现密码、交易密码、短信密码、谷歌密码等，不得使用相同密码，否则会有安全隐患，相关责任由用户自身承担。",
                "用户有权选择是否成为币投用户，用户选择成为币投APP注册用户的，用户名的命名及使用应遵守相关法律法规并符合网络道德。用户名中不能含有任何侮辱、威胁、淫秽、谩骂等侵害他人合法权益的文字。",
                "用户一旦注册成功，成为币投APP的用户，将得到用户名（用户邮箱或手机）和密码，并对以此组用户名和密码登入系统后所发生的所有活动和事件负责，自行承担一切使用该用户名的言语、行为等而直接或者间接导致的法律责任。",
                "用户密码遗失的，可以通过注册电子邮箱重置密码，以手机号码注册的用户可以凭借手机号码找回原密码。用户若发现任何非法使用用户名或存在其他安全漏洞的情况，应立即告知币投。"
            ]
        },
        {
            title: "V.用户权利及许可使用限制",
            id: 6,
            List: [
                "根据本条款，我们授予您有限的、非排他性的、不可转让的许可权限，以访问和使用 币投 网站和服务，仅用于 币投 许可的核准目的。您同意，您不得以任何其他方式复制、传播、分销、销售、许可、逆向工程，修改、发布或参与转让或出售创作衍生作品，或以任何其他方式利用任何币投的内容。",
                "您同意：",
                "1. 服务及相关软件，网站和技术的所有权利，所有权和利益，包括其中的所有知识产权，均属于币投;",
                "2. 除本许可授予的有限许可权限外，不得转让本服务的权利或利益;",
                "3. 本服务受版权及其他知识产权法保护，币投保留所有根据本条款未明确授予的权利;",
                "4. 本APP有权按照包括但不限于公安机关、检察机关、法院、海关、税务机关等司法机关、行政机关、军事机关的要求对用户在账户的物品及账户等进行查询、冻结或扣划;",
                "5. 用户有权根据网站相关规定，在发布信息等贡献后，取得币投给予的奖励；",
                "6. 用户有权修改其个人账户中各项可修改信息，自行决定是否提供非必填项的内容；"
            ]
        },
        {
            title: "VI.用户义务",
            id: 7,
            List: [
                "1、不得利用本站危害国家安全、泄露国家秘密，不得侵犯国家社会集体的和公民的合法权益，不得利用本站制作、复制和传播下列信息：",
                "（1）煽动抗拒、破坏宪法和法律、行政法规实施的；",
                "（2）煽动颠覆国家政权，推翻社会主义制度的；",
                "（3）煽动分裂国家、破坏国家统一的；",
                "（4）煽动民族仇恨、民族歧视，破坏民族团结的；",
                "（5）捏造或者歪曲事实，散布谣言，扰乱社会秩序的；",
                "（6）宣扬封建迷信、淫秽、色情、赌博、暴力、凶杀、恐怖、教唆犯罪的；",
                "（7）公然侮辱他人或者捏造事实诽谤他人的，或者进行其他恶意攻击的；",
                "（8）损害国家机关信誉的；",
                "（9）其他违反宪法和法律行政法规的；",
                "（10）进行商业广告行为的。",
                "2、用户不得通过任何手段恶意注册币投APP帐号，包括但不限于以牟利、炒作、套现、获奖等为目的多个账号注册。用户亦不得盗用其他用户帐号。",
                "如用户违反上述规定，则 币投 网有权直接采取一切必要的措施，包括但不限于删除用户发布的内容、取消用户在网站获得的星级、荣誉以及虚拟财富，暂停或查封用户帐号，取消因违规所获利益，乃至通过诉讼形式追究用户法律责任等。",
                "3、禁止用户将币投以任何形式作为从事各种非法活动的场所、平台或媒介。未经 币投 网的授权或许可，用户不得借用本站的名义从事任何商业活动，也不得以任何形式将币投作为从事商业活动的场所、平台或媒介。",
                "如用户违反上述规定，则 币投 网有权直接采取一切必要的措施，包括但不限于删除用户发布的内容、取消用户在网站获得的星级、荣誉以及虚拟财富，暂停或查封用户帐号，取消因违规所获利益，乃至通过诉讼形式追究用户法律责任等。",
                "4、用户在币投以各种形式发布的一切信息，均应符合国家法律法规等相关规定及网站相关规定，符合社会公序良俗，并不侵犯任何第三方主体的合法权益，否则用户自行承担因此产生的一切法律后果，且币投因此受到的损失，有权向用户追偿。"
            ]
        },
        {
            title: "VII.服务费用",
            id: 8,
            List: [
                "1、在用户使用本服务时，本公司有权按相应规则向用户收取服务费用。币投拥有制订及调整服务费之权利，具体服务费用，以用户使用本服务时币投APP上所列之收费方式公告或用户与币投达成的其他书面协议为准。",
                "2、除非另有说明或约定，用户同意币投有权自用户账户的资产中直接扣除上述服务费用。"
            ]
        },
        {
            title: "VIII.服务的变更、中断、终止、限制、冻结",
            id: 9,
            List: [
                "1、 币投可能会对服务内容进行变更，也可能会中断、中止或终止服务。",
                "2、转让时，币投可向第三方转让本服务下相关资产；币投也可在单方通知您后，将本协议下部分或全部服务转交由第三方运营或履行。具体受让主体以币投通知的为准。",
                "3、如发生下列任何一种情形，币投有权不经通知而中断或终止向您提供的服务：",
                "（1）根据法律规定您应提交真实信息，而您提供的个人资料不真实、或与注册时信息不一致又未能提供合理证明；",
                "（2）您违反相关法律法规或本协议的约定；",
                "（3）按照法律规定或主管部门的要求；",
                "（4）出于安全的原因或其他必要的情形。",
                "4、币投有权按本协议的约定进行收费。若您未按时足额付费，币投有权中断、中止或终止提供服务。",
                "5、您可以随时关闭您的帐户。您仍然有义务履行您对任何待处理交易的责任。此外，您将对关闭前发生的任何费用向币投负责。币投还可以随时自行决定终止您的账户，通过电子邮件或其他方式通知您。如果有嫌疑显示您未能遵守这些条款、对 币投 构成不可接受的欺诈或管理风险，或者您提供给我们虚假、不完整、不准确或误导性的信息，币投可能会暂停您的访问服务。由于币投关闭或暂停您的帐户所造成的任何损失，币投将不承担任何责任。",
                "6、用户同意，为了用户的账户及其内数字货币的安全，根据本协议的约定、法律法规及法律文书的规定、政府依行政职权的要求，及本公司依据自行判断认为的可能对用户的账户产生风险的情况，本网站有权对用户名下的全部或部分账户进行冻结，即进行暂时关闭这些账户部分或全部使用权限的操作。冻结的逆过程为解冻，即本网站对被冻结的账户结束冻结。当冻结发生时，如用户申请解冻，本网站有权依照自行判断根据本项规定前述的冻结原因来决定是否允许全部或部分解冻，用户应充分理解解冻申请并不必然被允许，且申请解冻时用户应当配合本网站核实用户的身份的有关要求，提供包括但不限于身份信息、身份证、护照、其他有效的身份证明文件及本公司要求的其他信息或文件。"
            ]
        },
        {
            title: "IX.符合您的当地法律",
            id: 10,
            List: [
                "您个人有责任确定是否以及在多大程度上，向相关税务机关缴纳通过服务进行的任何交易所得收入并扣除正确数额后所对应的税款。此外，您同意遵守当地所有相关法律。 关于防止资助恐怖主义和反洗钱活动，由于 币投 不是香港《打击洗钱及恐怖分子资金筹集 ( 金融机构 ) 条例》附表1第2部的“金融机构（financial institution）”， 币投 自愿酌情进行尽职调查，以防止洗钱和恐怖主义融资风险，并将与地方当局合作。使用我们的服务时，您确认您的行为是以合法和正确的方式，您的数字资产和法定货币并非来源于非法活动。 币投 可以酌情或与当地执法机关协调以控制、限制或清空您的账户、法定货币和数字资产。"
            ]
        },
        {
            title: "X.赔偿",
            id: 11,
            List: [
                "您将赔偿币投及其代理商（如有）、员工、高级职员、董事、关联公司、子公司和继承者，以使他们免受所有第三方索赔所构成的损害，除非是由币投单独违反本条款而导致的。同样的，除了因为您单独违反这些条款之外，币投 也应赔偿您和您的代理人、员工、高级职员、董事、关联公司、子公司和继承者免受所有第三方索赔所导致的损失。"
            ]
        },
        {
            title: "XI.拒绝担保与免责",
            id: 12,
            List: [
                "1、币投作为“网络服务提供者”的第三方平台，不担保网站平台上的信息及服务能充分满足用户的需求。对于用户在接受 币投 网的服务过程中可能遇到的错误、侮辱、诽谤、不作为、淫秽、色情或亵渎事件，币投 网不承担法律责任。",
                "2、基于互联网的特殊性，币投也不担保服务不会受中断，对服务的及时性、安全性都不作担保，不承担非因币投导致的责任。",
                "3、币投不对用户所发布信息的保存、修改、删除或储存失败负责。对网站上的非因币投故意所导致的排字错误、疏忽等不承担责任。币投有权但无义务，改善或更正本网站任何部分之疏漏、错误。",
                "4、除非币投以书面形式明确约定，币投对于用户以任何方式（包括但不限于包含、经由、连接或下载）从本网站所获得的任何内容信息，包括但不限于广告等，不保证其准确性、完整性、可靠性；对于用户因本网站上的内容信息而购买、获取的任何产品、服务、信息或资料，币投不承担责任。用户自行承担使用本网站信息内容所导致的风险。",
                "5、币投内所有用户所发表的用户评论，仅代表用户个人观点，并不表示本网站赞同其观点或证实其描述，本网站不承担用户评论引发的任何法律责任。",
                "6、币投有权删除币投内各类不符合法律或协议规定的信息，而保留不通知用户的权利。",
                "7、币投有权根据市场情况调整充值、提现、交易等手续费费率，有权决定免费推广期的终止。"
            ]
        },
        {
            title: "XII.适用法律和审判地",
            id: 13,
            List: [
                "这些条款和您对服务的使用将受到新加坡法律的约束和解释，而不诉诸于其冲突法规定。您同意，您根据本条款在法律上或依衡平法追究而不涉及仲裁（如下所述）的行为将仅在新加坡提交，兹此，您不可撤销地和无条件地同意，根据本条款产生的任何诉讼或争议将提交至新加坡法院专属管辖。"
            ]
        },
        {
            title: "XIII.仲裁",
            id: 14,
            List: [
                "您和 币投 同意仲裁由本条款引起的任何争议或与本服务有关的争议，除非您和 币投 不需要仲裁，任何一方就涉嫌非法使用版权，商标，商品名，标识， 商业秘密或专利权的争议寻求衡平的或其他救济。仲裁优先于在法庭起诉或进行陪审团审判。您和 币投 同意您将在发生任何争议之后的三十（30）天之内通知对方，您将在提交任何仲裁请求之前尝试非正式解决争议，任何仲裁将在新加坡发生，仲裁将由单一仲裁员保密地进行。"
            ]
        },
        {
            title: "XIV.其他规定",
            id: 15,
            List: [
                "这些条款规定了双方就服务主题的完整理解，取代了与之有关的所有先前的理解和沟通。 任何与本条款所规定的内容不一致的其他文件，将不对币投具有约束力。 您声明并保证所有披露给 币投 的与本服务条款有关的信息是真实，准确和完整的。"
            ]
        }
    ]
};

//充币服务协议
const otc_intord = {
    title: "充币服务协议",
    name: "Recharge",
    data: [
        {
            title: "",
            id: 1,
            List: [
                " 《OTC交易服务协议》（以下简称“本协议”）适用于所有平台使用用户（以下或称“您”）。本协议一经同意并接受，即形成您与平台间有法律约束力之文件。",
                "您确认，您已详细阅读了本协议所有内容，您充分理解并同意接受本协议的全部内容。如果你不同意本协议的任意内容，或者无法正确理解本协议任何条款的含义，请不要进行后续操作。",
                "1.法币充值，以平台设定的美元兑人民币汇率为准，将充值账户的美元金额以1:1的比例转化为相应数量的USDT ",
                "1.1 您同意平台有权依据其自身判断对涉嫌欺诈或被他人控制并用于欺诈目的账户采取相应的措施，上述措施包括但不限于冻结账户及资金、处置涉嫌欺诈的资金等。",
                "1.2 您应该妥善保管银行卡、卡号、密码、发卡行预留的手机号以及平台账号、密码、校验码等一切信息和设备。如您遗失或泄漏前述信息和/设备的，您应及时沟通发卡行及平台，以减少可能发生的损失。因您的原因所致损失需由您自行承担。",
                "1.3 您认可和同意：您发出的指令不可撤回或撤销，支付机构有权跟根据您的指令委托银行或第三方从银行卡中划扣资金给收款人。届时您不应该以非本人意愿交易或其他任何原因要求银行退款或承担其他责任。您在对使本服务过程中发出指令的真实性及有效性承担全部责任。",
                "1.4 出现下列情况之一的、本平台有权立即终止您使用本服务而无需承担任何责任：（1）将本服务用于非法目的；（2）违反本协议的约定；（3）银行认为向您提供本服务存在风险；（4）您的银行卡有效期届满（如有）。",
                "1.5 持卡人不得利用本协议下的服务实施套现、虚假交易、洗钱等行为，且有义务配合支付机构进行相关调查，若无正常理由拒绝配合相关调查或客户账户状态处于不正常或客户存在违反诚信原则的行为时，支付机构有权暂停或终止提供本协议项下的服务。",
                "1.6 无论何种原因（包括但不限于违反适用的法律法规）导致本协议任何条款完全或部分无效或无法执行，不影响本协议任何其他条款的效力、合法和可执行性。",
                "2. USDT充值，指用户将其他第三方数字货币钱包下USDT资产充值到平台提供地址下，USDT充值受网络的拥挤程度决定，交易完成需 6 次确认；充/提币需确认地址无误，交易一旦发送到区块链网络便不可撤回。",
                "2.1 您知晓并确认，USDT充值一旦成功，交易即确定完成，您不得要求退还。",
                "2.2 您知晓并确认，在使用USDT充值系统时，您必须仔细确认充值帐号及地址，若因为您自身输入帐号/地址错误、操作不当或不了解充值计费方式等个人因素造成充错帐号、错选充值金额等情形而损害自身权益，您不得因此要求平台作任何补偿或赔偿。",
                "2.3 若因充值系统原因造成您充值失实，在您提供合法有效凭证的情况下，造成USDT充值额小于您实际充值额的，平台予以补其差额，若大于您实际充值额的，平台有权追回差额。",
                "您应认真阅读本协议全文，如有疑义，请及时拨打平台客户服务热线咨询。如果您不同意本协议的任何内容，或无法准确理解相关条款的解释，请不要进行后续操作。"
            ]
        }
    ]
};

export const IntordList = {
    product, //关于我们
    privacy, //免责及隐私声明
    protocol, //注册协议
    otc_intord //充币服务协议
};

//充值页面
export const radioList = [
    {
        title: "网上银行",
        type: 1
    },
    {
        title: "手机银行",
        type: 2
    }
];
