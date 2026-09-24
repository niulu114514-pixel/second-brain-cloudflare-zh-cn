import type { Messages } from "./types";

// Simplified Chinese desktop installer catalog.
export const zh: Messages = {
  "common": {
    "continue": "继续",
    "back": "返回",
    "copy": "复制",
    "copied": "复制 ✓",
    "copyBoth": "全部复制",
    "copyLink": "复制链接",
    "copyAddress": "复制地址",
    "copyCommand": "复制命令",
    "connect": "Connect",
    "connecting": "连接中......",
    "connected": "连接✓",
    "openSettings": "打开设置",
    "emailDetails": "把这些邮件发给自己",
    "notNow": "暂不",
    "tryAgain": "再试一次",
    "checking": "检查中......",
    "ready": "准备好了",
    "notFound": "未找到",
    "demoMode": "演示模式",
    "appTitle": "第二大脑",
    "continueToCloudflare": "继续前往Cloudflare",
    "continueToConnectionDetails": "继续查看连接详情",
    "trySetupAgain": "再试一次设置",
    "skipUpdateForNow": "暂时跳过更新"
  },
  "settings": {
    "title": "设定",
    "language": "语言",
    "languageDesc": "选择第二大脑应用在这台电脑上的显示方式。",
    "english": "English",
    "italian": "Italiano",
    "chinese": "简体中文"
  },
  "settingsPanel": {
    "title": "高级设置",
    "lede": "你的第二大脑如何记忆和回忆。更改将适用于你的下一次搜索。",
    "sectionRecall": "召回",
    "sectionRemember": "记住",
    "sectionAi": "AI",
    "sectionMatching": "匹配",
    "custom": "自定义",
    "customNote": "这些数值是在应用之外设置的，不匹配预设。选择低于某个等级的数值会替换它们。",
    "reset": "重置为默认",
    "save": "保存更改",
    "cancel": "取消",
    "unsaved": "{count}未保存的更改",
    "unsavedOne": "1 未保存的更改",
    "saving": "保存中……",
    "saved": "被拯救",
    "loadFailed": "我们无法加载高级设置。关闭此窗口，再试一次。",
    "recency": {
      "label": "近期记忆比旧记忆更重要",
      "desc": "旧记忆逐渐被新记忆取代。这决定了旧记忆的地位下降，以及重要记忆获得的保护程度。",
      "levels": {
        "timeless": {
          "name": "永恒",
          "notice": "年龄几乎无关紧要。如果你的大脑主要是想要随时找到的参考，那很好。"
        },
        "balanced": {
          "name": "平衡",
          "notice": "默认。最近的匹配打平，但强的旧匹配仍然胜过弱的新匹配。"
        },
        "recent_first": {
          "name": "最近优先",
          "notice": "更新的记忆占主导。适合快速变动的工作，但会埋没旧的上下文。"
        }
      }
    },
    "variety": {
      "label": "结果多样化",
      "desc": "当几条记忆内容几乎相同时，第二大脑 可以返回所有匹配或将结果分散。",
      "levels": {
        "focused": {
          "name": "专注",
          "notice": "最接近的匹配，即使有些内容重复。"
        },
        "balanced": {
          "name": "平衡",
          "notice": "默认。"
        },
        "varied": {
          "name": "多样化",
          "notice": "更广泛的不同记忆。为了让位，一些非常接近的匹配会被舍弃。"
        }
      }
    },
    "connections": {
      "label": "跟随关联的深度",
      "desc": "超过直接匹配，第二大脑 可以沿着记忆间的链接提取相关内容。",
      "levels": {
        "off": {
          "name": "关闭",
          "notice": "仅直接匹配。"
        },
        "nearby": {
          "name": "附近",
          "notice": "一步之遥。显示你未搜索的明显上下文。"
        },
        "extended": {
          "name": "扩展",
          "notice": "两步之遥。上下文更丰富，偶尔会有你认为牵强的内容。"
        }
      }
    },
    "detail": {
      "label": "返回的详细程度",
      "desc": "设置每条记忆发送给助手的详细量。",
      "levels": {
        "compact": {
          "name": "紧凑",
          "notice": "简短的片段。在助手上下文窗口中留下最多空间。"
        },
        "standard": {
          "name": "标准",
          "notice": "默认。顶部匹配显示完整文本，下面显示片段。"
        },
        "full": {
          "name": "全部",
          "notice": "提供更多每条记忆的信息。获得最佳答案，但明显使用更多上下文。"
        }
      }
    },
    "duplicates": {
      "label": "阻止近似重复保存",
      "desc": "当已有非常相似的内容存储时，第二大脑 可以阻止保存或允许保存并标记。",
      "note": "适用于新保存。已存在的大脑副本不受影响。",
      "levels": {
        "permissive": {
          "name": "宽松",
          "notice": "几乎所有内容都可以保存。重复内容会累积。"
        },
        "standard": {
          "name": "标准",
          "notice": "默认。近乎相同的保存会被阻止，相似的会被标记。"
        },
        "strict": {
          "name": "严格",
          "notice": "激进阻止。偶尔会拒绝对已存储内容的真实更新。"
        }
      }
    },
    "compression": {
      "label": "压缩旧记忆",
      "desc": "每晚，您很少回忆的旧记忆可以汇总，以保持搜索灵敏。",
      "note": "从今晚运行开始生效。已压缩的记忆保持压缩状态。",
      "levels": {
        "conservative": {
          "name": "保守",
          "notice": "保护更多。大脑容量增长，搜索会逐渐变慢。"
        },
        "standard": {
          "name": "标准",
          "notice": "默认。重要或频繁回忆的记忆从不压缩。"
        },
        "aggressive": {
          "name": "激进",
          "notice": "压缩得更早。大脑更精简，旧记忆中的细节被总结掉。"
        }
      }
    },
    "model": {
      "label": "使用哪种AI模型",
      "desc": "用于整理、总结和发现记忆中的矛盾。它不用于搜索本身或 第二大脑 在记忆之间提取的洞察，记忆之间有自己的模型。这里的每个模型运行在你自己的 Cloudflare 账户上。",
      "sizeNote": "大型模型写出更好的摘要，且花费更多神经元。较小的模型更快且更便宜。",
      "neuronsNote": "Neurons 是 Cloudflare 用于 AI 的使用单元。您的套餐包含每日配额。"
    },
    "insightModel": {
      "label": "哪些AI模型能获得洞察",
      "desc": "仅在第二大脑比较两个记忆并写出它们如何关联的见解时使用。上述模型负责排序、总结和发现矛盾。",
      "sizeNote": "更大的模型能获得更清晰的洞察，消耗更多神经元。较小的模型更快且更便宜。",
      "defaultNote": "比较两个记忆比总结一个记忆更难判断，因此默认使用比上述更大的模型。由于比较时间较短，成本大致相同。"
    },
    "migration": {
      "lede": "你的第二大脑如何读取你的记忆，并将其与你要求的匹配。",
      "label": "你的记忆如何被读取",
      "desc": "每个记忆保存时只读取一次，搜索结果会与该读取匹配。不同的读取器可以更精确地匹配，但你已经保存的所有内容必须先重新读取。",
      "entries": "{entries}记忆被保存，所有这些都将被重新阅读。",
      "entriesOne": "保存了1个记忆，等待重新读取。",
      "entriesNone": "还没有保存记忆，所以没有什么可以再读的。",
      "pickLabel": "如何解读你的记忆",
      "inUse": "{name}（现已使用）",
      "unknownValue": "尚未确定",
      "storageWarning": "对于你这种大脑来说，免费的Cloudflare账户能承受的钱已经超过了。重建期间，旧的和新的搜索数据都会被保留，这样你还能改变主意。那时数据就会用完。保存新记忆会开始失败。更粗略的方案，或者付费的Cloudflare套餐，可以避免这个问题。",
      "pickNote": "详细阅读匹配会更准确。每个选项都说明了费用。这些都运行在你自己的Cloudflare账户上。",
      "levels": {
        "standard": {
          "name": "标准",
          "notice": "你每日AI配额中英文选项最少，重建最快。足够大多数搜索。"
        },
        "finer": {
          "name": "更细致的细节",
          "notice": "捕捉每条记忆的更多内容，因此接近的匹配排序更好。使用更多的每日 AI 配额。"
        },
        "finest": {
          "name": "最精细细节",
          "notice": "最精确匹配，并且在每日 AI 配额和存储方面是英语选项中最重的。"
        },
        "multilingual": {
          "name": "多语言",
          "notice": "阅读 100 多种语言的记忆，细节与“最精细”相当。以上三种选项仅适用于英语。比“标准”每日 AI 配额更轻；使用与“最精细”相同的存储。"
        }
      },
      "sameAsCurrent": "现在正在使用的就是这个。无需操作。",
      "dirtyNote": "请先保存或取消其他更改。",
      "startButton": "使用此重建",
      "confirmTitle": "在开始之前",
      "confirmLead": "搜索在完成之前将不完整。",
      "confirmBody": "你的记忆是安全的：只有你的 第二大脑 用于搜索的内容会被重建。",
      "point1": "尚未再次读取的记忆不会出现在结果中。",
      "point2": "它使用你的每日 AI 配额，如果用完则暂停当天操作。",
      "point3": "{chunks} 待再次读取的部分：约 {rounds} 轮，依次进行。",
      "point4": "在你选择释放旧搜索数据之前，不会删除任何内容。",
      "targetLine": "切换到：{name}",
      "modelLine": "模型：{name}",
      "confirmButton": "是的，重建它",
      "cancelButton": "现在不行",
      "startingTitle": "准备中",
      "startingBody": "设置新的记忆读取方式，然后将你的 第二大脑 指向它。这需要一两分钟。请保持此窗口打开。",
      "runningTitle": "再次读取你的记忆",
      "runningBody": "在完成之前搜索不完整。请保持此窗口打开，或暂停后再继续。无论哪种方式，已再次读取的内容都不会丢失。如果在运行过程中保存了新内容，总数可能会增加。",
      "pauseButton": "暂停",
      "pausing": "本轮结束后暂停…",
      "pausedTitle": "已暂停",
      "pausedBody": "到目前为止再次读取的所有内容已保存。搜索在继续之前仍不完整，继续操作不会对已完成的部分产生额外费用。",
      "progress": "已再次读取 {total} 条记忆中的 {done}",
      "progressPending": "正在处理它们…",
      "skipped": "尚未再次读取的记忆：{failed}。随着操作继续，它们将再次尝试。",
      "stalledTitle": "今日已暂停",
      "stalledBody": "今日的 AI 配额已用完。到目前为止完成的所有操作已保存，重新开始不会对已完成的部分产生额外费用。请明天或在配额重置时再回来。",
      "stalledFailingTitle": "一条记忆阻止了重建",
      "stalledFailingBody": "同一个内存一直失败，所以上一轮什么都没做。等待也改变不了这一点。下一次尝试会执行同样的回合。再试一次，以防是小插曲，或者重新开始，忘记它走到哪里，从头读起所有内容。",
      "resumeButton": "继续",
      "startOverButton": "重新开始吧",
      "startOverNote": "重新开始会重新阅读所有记忆，包括已经完成的，然后再把你的AI资源花在那项工作上。",
      "resettingTitle": "重新开始",
      "resettingBody": "再次清除已读过的记录，然后从你的第一个记忆开始。",
      "interruptedTitle": "重建工程未完成",
      "interruptedBody": "重建中途停止：{done} {total}完成。搜索会保持不完整直到完成，继续做的事情对已经完成的内容没有任何成本。",
      "failedTitle": "重建停止",
      "failedBody": "你的记忆未被触动，到目前为止重新阅读的内容都保存了。继续前行从中断处继续。它不会重新开始。",
      "stuckTitle": "重建工作停止了进展",
      "stuck": "没有丢失任何内容，且目前重读的内容都会被保存。几分钟后再试通常能清除;如果不行，就重新开始。",
      "doneTitle": "你的记忆又被读了一遍",
      "doneBody": "搜索再次完成，你的第二大脑现在用全新的方式匹配记忆。",
      "changeAgain": "再改一次",
      "freeLabel": "释放旧的搜索数据",
      "freeDesc": "重建前的搜索数据仍在占用空间。你的记忆没有被动过。这只是移除了你第二大脑不再使用的剩余搜索数据。这是这里唯一无法撤销的步骤。",
      "freeButton": "释放旧数据",
      "freeConfirm": "是的，放开它。我知道这事无法撤销",
      "freeKeep": "暂时先留着",
      "freeing": "释放旧的搜索数据",
      "freeingBody": "这只需要一会儿。",
      "freedTitle": "全部完成",
      "freedBody": "你的第二大脑用新方式读取并匹配你的记忆，旧的搜索数据消失了。其他什么都没变。",
      "loading": "检查你的记忆是如何被读取的......",
      "loadFailed": "我们现在无法查看你的搜索设置。稍后再试。",
      "barRunning": "再次读取你的记忆：{total}完成{done}。其他设置会锁定，直到完成。",
      "barWorking": "正在处理你的第二大脑。其他设置在完成前都被锁定。"
    }
  },
  "steps": {
    "navLabel": "设置步骤",
    "start": "开始",
    "protect": "密码",
    "signIn": "登录",
    "find": "发现",
    "connect": "Connect",
    "build": "建造",
    "tools": "工具",
    "details": "详情",
    "backTo": "回到{step}",
    "locked": "已完成。设置无法返回此步骤。",
    "compact": "第 {n} 步，共 {total} 步"
  },
  "value": {
    "editorialHeading": "用他们自己的话说",
    "label": "人们对 第二大脑 的评价",
    "sourceProductHunt": "Product Hunt",
    "sourceReddit": "Reddit",
    "statSetup": "2 分钟设置",
    "statCost": "免费且开源",
    "statData": "你的数据，你的账户"
  },
  "welcome": {
    "title": "设置你的 第二大脑",
    "lede": "为你选择的 AI 应用创建一个私人记忆。它存储在你控制的 Cloudflare 账户中。",
    "getStarted": "创建一个新的 第二大脑",
    "alreadyHave": "连接我已有的 第二大脑",
    "footnote": "免费开始 · 你的数据保存在你选择的 Cloudflare 账户中"
  },
  "audience": {
    "title": "你会独自使用还是与团队一起使用？",
    "lede": "选择你计划如何使用这个新的 第二大脑。如果你被邀请加入别人的团队，请返回并选择“连接我已有的 第二大脑”。",
    "justMe": "只有我",
    "aTeam": "创建团队大脑",
    "existingTitle": "你会和团队一起使用这个 第二大脑 吗？",
    "existingLede": "你可以把它做成团队大脑。每个人都有私人记忆，并可以选择与团队分享。如果选择团队，你可以稍后从仪表板邀请成员。",
    "existingFootnote": "一旦有人加入团队，这个选择将永久生效。你现有的个人记忆仍然保持私密。",
    "footnote": "在团队大脑中，每个人都有自己的登录和私人记忆。人们可以选择哪些记忆与团队共享。"
  },
  "connectExisting": {
    "title": "连接到 第二大脑",
    "lede": "粘贴 第二大脑 的网页地址，然后输入密码或邀请中的团队登录令牌。连接仅会在此计算机上保存访问权限。",
    "addressPlaceholder": "第二大脑 网页地址（粘贴你收到的链接）",
    "passwordPlaceholder": "密码或团队登录令牌",
    "connect": "连接此计算机",
    "footnote": "在另一台计算机的连接详情中，或在邀请或确认邮件中找到地址。",
    "chooseLede": "选择连接方式。如果这是你自己的 第二大脑，我们可以在你的 Cloudflare 账户中查找它。如果你被邀请加入团队，请使用邀请中的地址和登录令牌。",
    "signInButton": "在 Cloudflare 查找我的 第二大脑",
    "signInHint": "仅用于你自己 Cloudflare 账户中的 第二大脑。",
    "signInFootnote": "对于你自行设置的 第二大脑，Cloudflare 允许我们查找其地址。Cloudflare 处理登录；本应用从未看到你的 Cloudflare 密码。如果有人邀请你加入他们的团队，你不需要 Cloudflare 账户：选择“我有地址或团队登录令牌。”",
    "manualButton": "我有一个地址或团队登录令牌",
    "accountPickerTitle": "我们应该搜索哪个 Cloudflare 账户？",
    "accountPickerLede": "选择创建 第二大脑 的账户。",
    "searchingTitle": "正在查找您的 第二大脑",
    "searchingLede": "正在搜索此 Cloudflare 账户。可能需要一分钟。",
    "searchingStep": "正在查找此账户中的 第二大脑",
    "pickTitleOne": "这是您想要连接的 第二大脑 吗？",
    "pickTitleMany": "您想要连接哪个 第二大脑？",
    "pickLedeOne": "选择它以继续，或使用另一台电脑上的地址或邀请。",
    "pickLedeMany": "选择您要连接的 第二大脑。",
    "noneFound": "我们未在该 Cloudflare 账户中找到 第二大脑。它可能在其他账户中，使用不同的网址，或属于邀请您的团队。请在下方粘贴您收到的地址。",
    "unlockTitle": "输入您的登录信息",
    "unlockLede": "使用此 第二大脑 的密码，或使用邀请中的团队登录令牌。连接只会在此电脑上保存访问权限。",
    "lostPassword": "我没有密码",
    "memberTokenHelp": "我是团队成员。向我的管理员索取新的令牌",
    "memberTokenHelpTitle": "向您的团队管理员索取新的令牌",
    "memberTokenHelpLede": "已被替换的令牌，或已被暂停或移除的账户，无法在此电脑上修复。请向邀请您的人索取新的。"
  },
  "password": {
    "title": "选择一个密码",
    "lede": "用它连接您的电脑和 AI 应用。",
    "placeholder": "选择一个密码（至少 12 个字符）",
    "confirmPlaceholder": "再次输入相同的密码",
    "generateTitle": "生成强密码",
    "tooShort": "太短",
    "checking": "检查中......",
    "foundInBreaches": "在泄漏中发现",
    "strong": "强",
    "good": "好",
    "easyToGuess": "容易猜到",
    "breachHint": "该密码已出现在数据泄漏中，因此在此使用不安全。请尝试另一个，或让我们生成一个。",
    "mismatch": "这些还不匹配。",
    "notice": "将其保存在密码管理器中。我们以后无法向您显示。",
    "footnote": "泄露检查使用指纹片段，从不使用您的密码。"
  },
  "changePassword": {
    "title": "修改密码",
    "lede": "您将选择一个新密码，保存它，它会在所有地方替换旧密码。您的记忆、地址和已连接的 AI 工具都会保留。",
    "notice": "一旦此操作完成，旧密码将停止使用。下一次打开其他电脑时，它们将要求输入新密码。",
    "signInButton": "登录并继续",
    "signInFootnote": "您的 第二大脑 存在于 Cloudflare 的个人空间中，因此我们在那里登录以更改它。我们从未看到您的 Cloudflare 密码。",
    "waitingLede": "在刚刚打开的浏览器窗口里完成 Cloudflare 登录，然后再回到这里。",
    "blockedTitle": "密码现在不能更改",
    "blockedBody": "你的第二大脑正在重建它读取你记忆的方式。在过程中更改密码可能会中断重建，让密码问题看起来像是重建失败，所以它会等重建完成。",
    "blockedEscape": "如果没有重建，说明有一个未完成。打开高级设置并继续运行。重建结束后，这个设置会清除。重新开始也能完成，但它会从第一个内存重新读取，所以会花更长时间。",
    "blockedButton": "打开高级设置",
    "blockedMayBeLive": "之前的尝试已经发到你的第二大脑但没有确认，所以下面的密码可能已经是有效的。关闭这个窗口前先保存它。再试一次才能解决这个问题，必须等重建完成后才能解决。",
    "lostTitle": "你的记忆是安全的",
    "lostLede": "没有人，无论是这个应用还是Cloudflare，都能帮你查密码。不过密码是可以替换的，替换它就是你重新登录的方式。",
    "lostBodySignedIn": "你已经登录了你第二大脑居住的Cloudflare空间，这决定了谁能进入。所以你现在就可以设置新密码。你存储的所有内容都会保持原位。",
    "lostBodySignIn": "你的第二大脑存在你自己的Cloudflare空间，这就是决定谁能进入的。登录那里，你可以设置新密码。你存储的所有内容都会保持原位。",
    "lostNotice": "任何已经使用旧密码的设备都会要求新的：你的其他电脑、浏览器扩展、Obsidian插件。",
    "lostContinueButton": "选择新密码",
    "lostSignInButton": "用Cloudflare登录",
    "pickBrainLedeOne": "给它设置新密码，或者回去重新选一个。",
    "pickBrainLedeMany": "选一个你丢失密码的那个。",
    "addressTitle": "你第二大脑的地址是什么？",
    "addressLede": "我们在那个空格里找不到它。输入地址，我们会给它设置新密码。不需要当前密码。",
    "addressLedeManual": "输入你想要新密码的第二大脑地址。不需要当前密码。",
    "pickTitle": "选择新密码",
    "pickLede": "这个版本取代了旧的。Cloudflare不能再给你看，我们也不能，所以请保留你自己的副本。",
    "generatedNote": "我们为你做了一份很强的。如果你想自己选，可以打字修改。",
    "pickNotice": "旧密码一旦生效就会失效。",
    "saveTitle": "把这个存到别的地方",
    "saveLede": "一旦设置完成，这个应用或 Cloudflare 将不会再次向你显示它。它会在此窗口中保持显示，直到你关闭它，之后你需要使用你保存的副本。",
    "passwordLabel": "你的新密码",
    "saveAdvice": "密码管理器是存放它的正确地方。如果你把它存放在其他地方，请存放在你信任的可以保管所有已记录内容的地方。",
    "saveConfirm": "我已保存：更改我的密码",
    "saveBack": "选择一个不同的密码",
    "progressTitle": "正在更改你的密码",
    "progressLede": "这需要一到两分钟。请保持此窗口打开。",
    "stepSend": "设置新密码",
    "stepConfirm": "等待你的 第二大脑 接受它",
    "stepLocal": "正在保存在此电脑上",
    "doneTitle": "你的密码已被更改",
    "doneTitleLost": "你已重新登录",
    "doneLede": "这台电脑已经使用新密码。你的备忘、地址及所有已连接的内容保持不变。",
    "doneNeedsHead": "会要求新密码的情况",
    "doneNeeds1": "你在其他电脑上下一次打开 第二大脑 时。",
    "doneNeeds2": "浏览器扩展和 Obsidian 插件，在此电脑及其他任何电脑上。每个都保有自己的副本，此更改不会影响它们。",
    "doneNeeds3": "任何其他电脑上终端中的大脑命令。",
    "doneNeeds4": "任何直接打开仪表板的浏览器标签页。",
    "doneKeptHead": "仍然已连接的内容",
    "doneKept": "你通过连接链接登录所连接的 AI 工具仍然保持连接并正常运行。每个工具在当时获得了自己的访问权限，独立于你的密码，因此更改密码不会影响它们。任何你通过粘贴密码本身连接的工具在上方列表中。它们会要求新密码。",
    "doneLeak": "如果你更改密码是因为可能有人获取了它，这些连接是唯一不会被关闭的。断开它们会让所有工具重新要求连接。",
    "doneDisconnectButton": "断开 AI 工具…",
    "doneShow": "显示我的新密码",
    "doneHide": "隐藏它",
    "failNotSentTitle": "没有任何更改",
    "failNotSentBody": "新密码未传达到你的 第二大脑，因此旧密码仍然可用，一切保持原样。再次尝试是安全的。",
    "failNotSentLabel": "你选择的密码未被使用",
    "failDetail": "出错原因：{detail}",
    "failUnsureTitle": "你的新密码可能已在使用",
    "failUnsureBody": "更改已发送到您的 第二大脑，但它没有及时确认，因此我们无法告诉您哪个密码是有效的。在进行其他操作之前，请先保存以下密码。它可能就是现在可用的密码。",
    "failUnsureRetry": "再试一次。如果之前已经成功设置相同的密码，再次设置不会改变任何内容；如果未成功，这次操作将完成。无论哪种情况，您最终都会知道。",
    "failUnsureFootnote": "这台电脑尚未更新，因此可能也会要求输入密码。如果出现，请使用上面的密码。",
    "failUnsureLeave": "暂时不要管它",
    "recheckButton": "再次检查",
    "recheckConfirmed": "您的 第二大脑 对新密码已有响应，所以那部分已经完成。此电脑尚未保存密码。再试一次以完成操作，并且不会更改您 第二大脑 上的任何内容。",
    "recheckUnconfirmed": "您的 第二大脑 仍未响应新密码。可能需要再等一会儿，或者更改尚未生效。无论哪种情况，再试一次都能解决问题。",
    "recheckUnreachable": "我们无法联系您的 第二大脑 进行询问，因此无论如何都无法确认。更改可能仍已生效。稍后再检查，或者直接再次尝试更改。",
    "failLocalTitle": "您的密码已更改，但未保存到此电脑上",
    "failLocalTitlePartial": "您的密码已更改，但此电脑上的某些地方仍保留旧密码",
    "failLocalBody": "您的 第二大脑 正在使用新密码。这台电脑无法存储它，因此在使用新密码重新连接之前无法打开您的 第二大脑。如果尚未保存，请立即保存。",
    "failLocalCli": "您终端中的大脑命令仍设置为旧密码。运行 brain setup 指向新密码。",
    "failLocalDashboard": "已打开的 第二大脑 窗口仍在使用旧密码。请关闭并重新打开它。",
    "failLocalReconnect": "重新连接此电脑",
    "leaveWarn": "这是显示该密码的最后一个界面。如果尚未妥善保存，请立即保存。",
    "leaveConfirm": "我已保存：离开",
    "leaveKeep": "留在这里"
  },
  "passwordChangedElsewhere": {
    "title": "您的密码在另一台电脑上已更改",
    "lede": "您的 第二大脑 有新密码，因此此电脑上保存的密码不再可以打开它。未丢失任何内容，也未删除任何内容。这台电脑只需要新的密码。",
    "body": "您会在更改时保存的位置找到它。它是在同一地址的相同 第二大脑。",
    "findAgain": "找另一个 第二大脑",
    "findAgainHint": "登录 Cloudflare 并查找它，以防您当前连接的是另一个第二大脑。",
    "footnote": "没有新密码，或不是您自己更改的？选择新密码将永久关闭旧密码。"
  },
  "cloudflare": {
    "title": "创建或连接您的 Cloudflare 账户",
    "lede": "Cloudflare 将在您控制的账户中托管这个新的 第二大脑。请登录现有的 Cloudflare 账户，或在打开的浏览器窗口中创建一个免费的账户。",
    "signIn": "打开 Cloudflare 来创建我的 第二大脑",
    "footnote": "Cloudflare 负责登录。此应用程序永远不会看到您的 Cloudflare 密码。",
    "waitingTitle": "在浏览器中完成登录",
    "waitingLede": "在浏览器窗口中完成登录或账户创建。当完成时，请返回此处。",
    "watchingSignIn": "等待 Cloudflare 登录完成",
    "pickerTitle": "选择一个 Cloudflare 账户",
    "pickerLede": "选择将拥有并托管此 第二大脑 的账户。"
  },
  "guard": {
    "existingBrainTitle": "我们找到了您现有的 第二大脑",
    "existingBrainConnect": "连接它",
    "conflictTitle": "该名称已被使用",
    "conflictChooseAnother": "选择另一个账户"
  },
  "progress": {
    "title": "创建您的 第二大脑",
    "lede": "这通常需要几分钟。在我们创建您的 第二大脑 时，请保持此窗口打开；我们将在每个步骤完成时显示。",
    "stepSpace": "准备您的 Cloudflare 账户",
    "stepMemory": "创建安全内存存储",
    "stepRecall": "为您的记忆准备搜索",
    "stepFinish": "最终检查",
    "stepInProgress": "进行中",
    "stepDone": "完成",
    "stepFailed": "失败"
  },
  "tools": {
    "title": "连接 AI 应用程序",
    "lede": "现在连接您使用的任何 AI 应用程序，或者跳过此步骤稍后添加。每个连接的应用程序都可以使用相同的 第二大脑。",
    "autoSetup": "自动将此计算机的连接详情添加到应用程序。",
    "notOnComputer": "此计算机未安装。您可以稍后从“连接”中连接。",
    "doneRestart": "完成。重新启动工具以开始使用您的 第二大脑。",
    "cliSub": "可选：从终端使用 第二大脑（适用于使用命令行工具的人）。",
    "setupCli": "设置 CLI",
    "settingUp": "正在设置…",
    "cliDone": "完成。brain 命令已在您的终端中准备就绪。",
    "installing": "安装中…",
    "installed": "已安装 ✓",
    "reopenTerminal": "brain 命令已准备好。如果尚未找到，请重新打开终端。",
    "configSaved": "配置已保存 ✓",
    "configSavedInstallFailed": "您的连接详情已保存，但可选的终端命令未安装。您的 第二大脑 仍然可以在应用程序中使用。",
    "configSavedNoNpm": "配置已保存。安装 Node.js，然后运行：",
    "pasteInSettings": "复制链接，然后在设置中的连接器下粘贴。",
    "claudeCode": "Claude Code",
    "cursor": "Cursor",
    "cliTitle": "第二大脑 CLI",
    "chatgpt": "ChatGPT",
    "claudeWeb": "Claude（网页 & 桌面）"
  },
  "details": {
    "title": "联系",
    "lede": "此窗口是您连接设备到您的 第二大脑 的地方。您的记忆本身存储在仪表盘中，仪表盘会在自己的窗口中打开。",
    "notSetupTitle": "尚未设置",
    "notSetupLede": "请先完成创建或连接您的 第二大脑。设置完成后，连接详情会显示在这里。",
    "addressLabel": "您的 第二大脑 地址",
    "addressDesc": "您的私人网页版仪表盘，也是连接新工具的地方。请将其保存在安全的地方。",
    "mcpLabel": "您的连接链接（用于 AI 工具）",
    "mcpDesc": "将此粘贴到任何支持连接器的 AI 工具中。",
    "passwordLabel": "您的密码",
    "passwordDesc": "您的 第二大脑 密钥。此处不会显示，但这台电脑会保留副本：在其安全存储中，如果您设置了大脑命令的设置文件，也会保存一份。Cloudflare 完全无法读取。如果您想要使用不同的密钥，现在可以设置。",
    "passwordButton": "更改我的密码",
    "disconnectLabel": "断开您的 AI 工具",
    "disconnectDesc": "通过您的连接链接登录的 AI 工具，每个都获得了独立访问权限，与您的密码分开。这会一次性关闭所有这些工具。通过粘贴密码连接的工具不受影响。更改密码才会关闭这些工具。您的记忆和密码将保持原样。",
    "disconnectButton": "断开 AI 工具…",
    "disconnectConfirmDesc": "每个通过您的连接链接在这台电脑及其他电脑登录的 AI 工具都需要重新连接，每次连接时都会要求输入密码。",
    "disconnectConfirm": "是的，断开它们全部",
    "disconnectKeep": "保持连接",
    "disconnectWorking": "断开连接......",
    "disconnectDone": "已断开连接。每个工具下次使用时都会要求重新连接。",
    "disconnectDoneNone": "没有工具通过连接链接登录，因此没有可以关闭的内容。使用密码的工具不受影响。更改密码才会关闭这些工具。",
    "disconnectFailed": "无法关闭一些 AI 应用的连接。已经关闭的连接保持关闭状态。请重试以关闭剩余连接。",
    "connectToolsTitle": "连接您的 AI 工具",
    "connectToolsDesc": "本电脑上的工具一键连接。对于其他工具，请在工具的连接器设置中粘贴您的连接链接。第一次使用时，它会要求输入密码。",
    "integrationsTitle": "集成",
    "integrationsDesc": "从您已使用的工具中导入笔记和页面。",
    "navConnection": "联系",
    "navTools": "AI 工具",
    "navIntegrations": "集成",
    "navComputer": "本电脑",
    "updateLabel": "有更新的 第二大脑 可用 ({version})",
    "updateDesc": "更新以获取最新改进。您的记忆、密码和已连接的工具将被保留。",
    "updateDescOther": "无论是谁设置了这个大脑，都需要更新。更新在他们自己的 Cloudflare 账户中运行，所以这台电脑无法执行。与此同时，你保存的内容不会受到影响。",
    "updateDescLegacy": "这个大脑正在运行较旧的版本，还不能告诉这个应用你是谁，因此更新会提供给打开此窗口的每个人。它只在创建大脑的 Cloudflare 账户中运行。如果那不是你的账户，它会停止并提示。更新一次可以让这个大脑学会回答，这条提示也会消失。",
    "updateButton": "更新我的 第二大脑",
    "allSetTitle": "你的 第二大脑 已准备好",
    "allSetLede": "如果你打算连接更多设备或 AI 应用，请保存这两个链接。你还可以在应用的“连接”中稍后找到它们。",
    "allSetTeamLede": "保存这两个链接，然后从仪表板邀请你的团队。每个人都会获得自己的登录令牌。",
    "teamCardLabel": "你团队的 第二大脑",
    "teamCardBody": "你设置了这个团队。打开仪表板并选择“团队”来邀请人员。每个人都会收到单独的登录令牌。他们的私人记忆保持私密；他们选择分享的记忆对团队可见。",
    "teamCardBodyAdmin": "你可以从仪表板的“团队”区域邀请人员。只有最初设置此 第二大脑 的人可以更改其密码，因为它在他们的 Cloudflare 账户中。",
    "teamCardBodyMember": "你已以团队成员身份连接。你的个人记忆保持私密。你选择分享的记忆团队每个人都能看到。如果这个登录令牌停止工作，请向团队管理员索取新的登录令牌。",
    "openDashboard": "打开我的 第二大脑 仪表板"
  },
  "integrations": {
    "extensionTitle": "浏览器扩展",
    "extensionSub": "捕获任意页面或高亮内容。在设置中粘贴你的地址和密码。",
    "getExtension": "获取扩展",
    "obsidianTitle": "Obsidian 同步",
    "obsidianSub": "保持你的资料库笔记与 第二大脑 同步。",
    "openObsidian": "在 Obsidian 中打开",
    "getPlugin": "获取插件",
    "connectedPlain": "已连接。",
    "connectedTo": "已连接到 {workspace}。",
    "syncNow": "现在同步",
    "syncing": "同步中......",
    "manage": "管理",
    "setUp": "设置",
    "appsTitle": "应用",
    "back": "所有集成",
    "categoryKnowledge": "知识",
    "categoryCalendar": "日历",
    "categoryEmail": "电子邮件",
    "categoryOther": "其他"
  },
  "logout": {
    "button": "从这台电脑退出登录",
    "confirm": "是，退出",
    "keep": "保持登录状态",
    "desc": "你可以使用地址和密码重新连接，也可以使用为团队大脑提供的登录令牌。"
  },
  "workerUpdate": {
    "title": "更新你的 第二大脑",
    "ledeWithVersion": "你的 第二大脑 有新版本（版本 {version}）可安装。你的记忆、密码和连接工具都会保留。不会重置任何内容。",
    "ledeGeneric": "你 第二大脑 的新版本已准备好安装。你的记忆、密码和已连接工具都已保留。没有任何重置。",
    "notice": "你需要登录 Cloudflare 一次来授权更新。大约需要一分钟。",
    "signInUpdate": "登录并更新",
    "waitingLede": "在刚刚打开的浏览器窗口里完成 Cloudflare 登录，然后再回到这里。",
    "updatingTitle": "正在更新你的 第二大脑",
    "updatingLede": "通常需要一分钟。请在更新完成前保持此窗口打开。",
    "stepMemory": "正在更新你的记忆存储",
    "stepRecall": "正在刷新智能回忆",
    "stepFinish": "正在完成",
    "doneTitle": "你的 第二大脑 已是最新版本",
    "doneLede": "一切均为最新版本。你的记忆、密码和已连接工具未更改。"
  },
  "email": {
    "subject": "你的 第二大脑 详情",
    "bodyAddress": "你的 第二大脑 地址（你的私人仪表盘）：",
    "bodyMcp": "你的连接链接（粘贴到支持连接器的 AI 工具中）："
  },
  "mascot": {
    "dismiss": "忽略",
    "welcome": {
      "intro": "你好，我是 Ridge，额外记忆，为你服务。选择下面的一个门开始。",
      "guard": "已经有大脑了吗？那个按钮是你的。这里新建的可能会破坏它的密码。"
    },
    "password": {
      "intro": "十二个以上字符，然后直接进入密码管理器。",
      "breached": "这个已经泄露了，很容易修复。试试另一个，或者让生成器生成一个。"
    },
    "cloudflare": {
      "why": "你唯一需要的真实账户：Cloudflare，免费，而且真正属于你。",
      "waiting": "在浏览器里慢慢来，你回来时我会在这里。",
      "pickerWhy": "这里有几个账户，请仔细选择，因为这会真正构建在那里。"
    },
    "progress": {
      "intro": "现在正在构建你的空间，这是你真正可以等待的一步。"
    },
    "tools": {
      "intro": "有 Claude Code 或 Cursor 吗？一键即可连接它们。否则，只需一个链接。"
    },
    "details": {
      "allSetSolo": "你已准备就绪。保存这两个链接，你可以在“连接”中再次找到它们。",
      "allSetTeam": "你的团队大脑已准备好。拿到链接，随时从“团队”标签邀请成员。",
      "allSetMember": "你已进入。你记忆保持私密，直到你选择分享。"
    },
    "connect": {
      "fork": "是你的吗？在下面用 Cloudflare 登录，我们会帮你找到。如果被邀请？使用你的令牌。"
    },
    "discover": {
      "searching": "正在你的 Cloudflare 账户中搜索任何脑状项目。"
    },
    "brainPicker": {
      "one": "找到一个，是这个吗？如果不是，手动选项就在下面。",
      "many": "弹出了几个，用地址来区分它们。"
    },
    "unlock": {
      "hint": "在这里输入你的密码，或者如果你加入团队，输入邀请令牌。"
    },
    "manualEntry": {
      "combined": "准确粘贴地址。也有令牌吗？将它放在下面的密码框中。",
      "insecureHttp": "那是 http，不是 https：容易输错。加上“s”，即可继续。"
    },
    "existingTeam": {
      "repeatQuestion": "又看到这个吗？你可能在别处已经回答过，它还没传到这个大脑里。"
    },
    "rotation": {
      "intro": "没有什么丢失，新的密码让你可以直接重新进入。我从这里开始保持安静。"
    },
    "error": {
      "provisioningHonest": "哎呀，中途停止了：部分可能存在。重试没问题；如果重复出现，就去仪表盘。",
      "wrongCredentialMemberAware": "没有匹配：是旧令牌，还是小的拼写错误？令牌用户，跳过重置，向你的管理员询问。",
      "cfSignIn": "Cloudflare 拒绝了，让我们再试一次登录。一切还没被改动。",
      "discoverFailed": "自动搜索没有结果，下面的手动框同样可以使用。",
      "rotateNotSent": "没有变化，你的旧密码仍然有效。继续重试。",
      "rotateUnsure": "已发送，但你的大脑没有及时确认。保存显示的密码，重试是安全的。",
      "rotateBlocked": "现在重建让大脑忙碌，在高级设置中推动它。",
      "rotateLocal": "你的大脑已经应用了新密码，这台电脑只需要同步。",
      "staleLocal": "你的大脑在别处获得了新密码。一切正常，只需要在这里也更新。",
      "disconnectPartial": "有些没有关闭，但关闭的那些保持关闭。重试会追赶剩下的。",
      "clipboard": "复制没有成功，仅此一次，选择文本并手动获取。"
    }
  }
};
