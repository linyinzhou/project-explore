// GENERATED DATA START
const dashboardGeneratedAt = "2026-10-10";
const trendingRepositories = [
  {
    "rank": 1,
    "owner": "boykopovar",
    "name": "AnyPS5",
    "url": "https://github.com/boykopovar/AnyPS5",
    "language": "C++",
    "stars": 23165,
    "purpose": "这是一个用于将 PS5 可执行文件自动移植到 Linux 和 Windows 的工具，核心包括重链接器和针对 PRX 系统库的动态链接实现，用于在目标平台上运行移植后的程序。它的目标是实现互操作性、研究和兼容性，README 也明确说明不包含、分发或要求受版权保护的软件、固件、密钥或专有库。它的边界在于它不是通用模拟器或独立运行时方案，而是依赖于目标平台原生格式转换和已验证兼容性列表，且异常状态会抛出 std::runtime_error 并终止进程。",
    "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。",
    "weekly": 15539
  },
  {
    "rank": 2,
    "owner": "mattpocock",
    "name": "skills",
    "url": "https://github.com/mattpocock/skills",
    "language": "Shell",
    "stars": 283094,
    "purpose": "一组小型、可组合且尽量不绑定具体模型的工程代理技能，覆盖方案规划、测试驱动开发、代码审查、问题分诊和研究等常见软件开发任务。开发者可以按需把单个技能接入支持技能机制的 AI 编程代理，以统一执行步骤和质量检查；它是工作流指令集合，而不是能够独立运行的开发工具。",
    "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。",
    "weekly": 8156
  },
  {
    "rank": 3,
    "owner": "Panniantong",
    "name": "Agent-Reach",
    "url": "https://github.com/Panniantong/Agent-Reach",
    "language": "Python",
    "stars": 95063,
    "purpose": "Agent Reach 是为 AI Agent 接入互联网能力的工具集与安装配置方案，统一提供网页阅读、YouTube 字幕提取与搜索、RSS 阅读、全网搜索，以及 GitHub、社交平台和其他站点的数据访问能力，并带有多后端路由和 `agent-reach doctor` 诊断命令。它面向能够运行命令行的 Agent，通过自动选择、安装和检查接入方式来减少逐个平台配置的工作；README 说明网页、YouTube 和 RSS 等部分功能无需配置，而私有仓库、部分搜索或受限平台需要额外配置，服务器代理也可能产生费用。",
    "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。",
    "weekly": 7084
  },
  {
    "rank": 4,
    "owner": "DuarteSantos8",
    "name": "openGym",
    "url": "https://github.com/DuarteSantos8/openGym",
    "language": "JavaScript",
    "stars": 8788,
    "purpose": "这是一个自托管的健身与体重跟踪应用，允许用户按周规划训练、执行引导动作、记录每组训练和体重，并在自己的设备或服务器上保管数据，强调“真正拥有”的数据控制权。README 说明它具有现代应用体验，例如可安装到主屏、支持 passkey 登录、离线工作并在设备间同步，且可以通过一次 docker compose up 启动。它的边界是它面向自托管健身场景，而不是依赖第三方服务的 SaaS 方案，用户数据和运行环境都由自己控制。",
    "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。",
    "weekly": 6749
  },
  {
    "rank": 5,
    "owner": "heygen-com",
    "name": "hyperframes",
    "url": "https://github.com/heygen-com/hyperframes",
    "language": "TypeScript",
    "stars": 59920,
    "purpose": "一个面向 AI 代理的开源 HTML 视频渲染框架，让代理使用熟悉的 HTML、CSS 和 JavaScript 创建可编辑的动态画面。它通过 Puppeteer、Chrome 与 FFmpeg 逐帧确定性渲染，支持 GSAP、Lottie、Three.js 等 Web 动画技术，并提供预览和命令行导出；它主要解决代码化视频合成，不会自动保证素材版权或内容事实正确。",
    "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。",
    "weekly": 4003
  },
  {
    "rank": 6,
    "owner": "thedotmack",
    "name": "claude-mem",
    "url": "https://github.com/thedotmack/claude-mem",
    "language": "TypeScript",
    "stars": 99034,
    "purpose": "这是一个为 Claude Code 设计的持久化记忆压缩系统，目标是在不破坏上下文连续性的前提下，让代理长期保留和复用重要信息。它的核心能力是压缩与管理记忆，以减少上下文丢失并提升 Claude Code 在多轮协作中的持续性；README 也明确将其描述为“built for Claude Code”。它的边界是它不是通用型记忆中间件，而是专门贴合 Claude Code 生态和工作流的实现，README 没有宣称它支持其它平台或所有 AI 工具链。",
    "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。",
    "weekly": 3850
  },
  {
    "rank": 7,
    "owner": "pingdotgg",
    "name": "t3code",
    "url": "https://github.com/pingdotgg/t3code",
    "language": "TypeScript",
    "stars": 26672,
    "purpose": "这是一个“agent harness control surface”，用于在本机上控制 Claude Code、Codex、Cursor 等 AI 代理，并通过移动端、网页端和桌面端统一管理它们。它能处理多个供应商的授权、任务控制、权限模式、后台服务和远程访问等功能，试图把分散的代理运行环境整合成统一控制面板。它的边界是 README 明确说明该项目非常早期，存在 bug，而且大多数情况下不接受贡献，说明它目前仍处于早期开发和有限协作状态。",
    "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。",
    "weekly": 2379
  },
  {
    "rank": 8,
    "owner": "mvschwarz",
    "name": "openrig",
    "url": "https://github.com/mvschwarz/openrig",
    "language": "TypeScript",
    "stars": 6534,
    "purpose": "这是一个用于构建和运行自定义 AI agent 团队的开源系统，通过 YAML 定义团队，并以单命令启动，把多个终端会话中的代理组织成一个持续运行、可协调的“rig”。它的目标是让一个主代理协调多个专家处理仓库级任务，并管理模型、权限与运行状态；README 还说明同一 rig 可同时管理 Claude Code 和 Codex。它的边界是它要求 Node.js 22/24、tmux，以及 macOS/Linux 原生支持；Windows 仅支持 WSL2，且 README 明确说明安装和运行会修改本机配置和信任设置。",
    "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。",
    "weekly": 2338
  },
  {
    "rank": 9,
    "owner": "earthtojake",
    "name": "text-to-cad",
    "url": "https://github.com/earthtojake/text-to-cad",
    "language": "Python",
    "stars": 18818,
    "purpose": "这是一个为 AI agent 提供本地 CAD 工作流的插件，能够生成 STEP、GLB、STL 或 3MF 等 3D 模型，并支持制造可行性检查、工程图生成以及连接常见 3D 打印、钣金和 CNC 制造服务。它以插件或 skills 的形式支持 Claude Code、Codex、Cursor、Gemini 和 Grok 等主流 agent，强调在本地完成建模和设计工作，而不是依赖云端专用 CAD 服务。它的边界是它依赖 uv 和本地 CAD 运行时，首次启动需要网络连接，并且安装说明要求不要同时安装插件和本地 server 的两份副本，避免重复副作用。",
    "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。",
    "weekly": 2125
  },
  {
    "rank": 10,
    "owner": "cursor",
    "name": "plugins",
    "url": "https://github.com/cursor/plugins",
    "language": "TypeScript",
    "stars": 10627,
    "purpose": "这是 Cursor 官方插件仓库，收集了开发工具、框架、生产力和集成类产品的插件，每个插件都作为独立目录和 .cursor-plugin/plugin.json 清单发布。它的能力范围非常广，覆盖教育、开发者工具、生产力、业务集成和自动化等类别，目标是为 Cursor 用户提供可直接加载的扩展能力。它的边界是它是插件集合仓库，不是单一应用；README 也明确说明插件来自不同作者和不同类别，因此它更像一个扩展生态入口，而不是统一的单一软件平台。",
    "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。",
    "weekly": 1125
  }
];
const mostStarredRepositories = [
  {
    "rank": 1,
    "owner": "codecrafters-io",
    "name": "build-your-own-x",
    "url": "https://github.com/codecrafters-io/build-your-own-x",
    "language": "Markdown",
    "stars": 552255,
    "purpose": "一个按技术类别整理的教程索引，核心学习方法是从零重建数据库、Git、Docker、Web 服务器、神经网络等常见系统。它帮助开发者通过实现简化版本理解底层原理和设计取舍，本身不是框架、软件包或可部署产品，教程质量与维护状态需逐项判断。",
    "example": "未找到可公开核实的第三方网站或 App 声明由该仓库构建；它本身是教程索引。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。"
  },
  {
    "rank": 2,
    "owner": "sindresorhus",
    "name": "awesome",
    "url": "https://github.com/sindresorhus/awesome",
    "language": "未注明",
    "stars": 516886,
    "purpose": "Awesome Lists 生态的总目录和质量规范入口，汇集由社区维护的技术、科学、文化与兴趣主题资源清单。它适合在陌生领域快速找到经过初步筛选的工具、资料和项目，但收录代表维护者的主观选择，不构成安全性、质量或持续维护的保证。",
    "example": "awesome.re 是该项目的官方入口网站，提供跨主题 Awesome Lists 导航。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。"
  },
  {
    "rank": 3,
    "owner": "public-apis",
    "name": "public-apis",
    "url": "https://github.com/public-apis/public-apis",
    "language": "Python",
    "stars": 487042,
    "purpose": "一个由社区维护的公共 API 分类目录，而不是代替各服务商转发请求的统一 API 网关。它按动物、图书、天气、金融等领域收录接口，并标注认证方式、HTTPS 和 CORS 支持情况，方便开发者为原型或正式产品寻找可接入的数据与功能；配额、稳定性和商用条款仍需到对应服务商核实。",
    "example": "Public APIs 仓库本身是实际运行的公共 API 目录；未找到可归因到该目录的具名第三方产品。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。"
  },
  {
    "rank": 4,
    "owner": "freeCodeCamp",
    "name": "freeCodeCamp",
    "url": "https://github.com/freeCodeCamp/freeCodeCamp",
    "language": "TypeScript",
    "stars": 456784,
    "purpose": "非营利编程教育平台 freeCodeCamp.org 的开源代码库与课程内容。平台通过交互式练习、项目和认证路径教授数学、编程、计算机科学、Web 开发、数据分析与机器学习等主题；仓库也供贡献者修订课程、翻译内容和开发平台功能。",
    "example": "freeCodeCamp.org 由该代码库实际运行，提供互动编码挑战、课程和认证项目。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。"
  },
  {
    "rank": 5,
    "owner": "EbookFoundation",
    "name": "free-programming-books",
    "url": "https://github.com/EbookFoundation/free-programming-books",
    "language": "Python",
    "stars": 398609,
    "purpose": "由社区维护的免费编程学习资源目录，收录多语言的书籍、课程、播客、交互式教程、习题集和备忘单。它还通过官方搜索 Web App 提供检索入口；项目只负责索引链接，不托管大部分内容，也不自动保证外部资源长期可用或版权状态不变。",
    "example": "Free Programming Books Search 是该仓库发布的搜索 Web App，可检索多语言免费编程资源。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。"
  },
  {
    "rank": 6,
    "owner": "openclaw",
    "name": "openclaw",
    "url": "https://github.com/openclaw/openclaw",
    "language": "TypeScript",
    "stars": 391555,
    "purpose": "一个可由个人自行托管的 AI 助手与消息网关，可把模型、工具和自动化能力接入不同操作系统及聊天渠道。它适合构建能查询个人数据、调用外部服务或控制设备的助手，官方 Showcase 已展示公共交通查询、Oura 健康助手和 Bambu 3D 打印机控制等项目。由于会接触账户凭据和本地工具，部署时必须严格限制权限与网络暴露范围。",
    "example": "官方 Showcase 收录 Vienna 公共交通查询、Oura 健康助手、Bambu 3D 打印机控制等具名社区项目。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。"
  },
  {
    "rank": 7,
    "owner": "donnemartin",
    "name": "system-design-primer",
    "url": "https://github.com/donnemartin/system-design-primer",
    "language": "Python",
    "stars": 373592,
    "purpose": "面向软件工程师的系统设计学习与面试准备资料库。它系统整理可扩展性、缓存、数据库、消息队列、一致性和高可用等概念，配有架构图、案例题、答案思路及 Anki 卡片，适合建立知识框架和模拟面试；内容是学习材料，不是可直接复用的生产架构模板。",
    "example": "未找到可公开核实的网站或 App 声明以该仓库作为产品依赖；它是系统设计学习资源。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。"
  },
  {
    "rank": 8,
    "owner": "nilbuild",
    "name": "developer-roadmap",
    "url": "https://github.com/nilbuild/developer-roadmap",
    "language": "TypeScript",
    "stars": 369060,
    "purpose": "roadmap.sh 的开源内容和代码仓库，为前端、后端、DevOps、AI、数据等岗位提供可交互的技能路线图、指南、项目题和测试题。用户可用它规划学习顺序、记录进度和查漏补缺；路线图是社区建议，不代表所有岗位或公司的统一招聘标准。",
    "example": "roadmap.sh 是该仓库对应的真实 Web 产品，提供互动路线、项目题目、测试题和学习进度。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。"
  },
  {
    "rank": 9,
    "owner": "jwasham",
    "name": "coding-interview-university",
    "url": "https://github.com/jwasham/coding-interview-university",
    "language": "未注明",
    "stars": 362357,
    "purpose": "一套以进入大型软件公司为目标的长期计算机科学和编码面试自学计划。它按阶段组织数据结构、算法、操作系统、网络、数据库和系统设计等资料，并附练习与复习建议；它是一份高强度课程清单，不是大学学历替代品，也不能保证面试结果。",
    "example": "未找到可公开核实的第三方工具或网站以该仓库作为产品依赖；项目本身是面试自学计划。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。"
  },
  {
    "rank": 10,
    "owner": "vinta",
    "name": "awesome-python",
    "url": "https://github.com/vinta/awesome-python",
    "language": "Python",
    "stars": 326214,
    "purpose": "按用途分类整理的 Python 框架、库、工具和学习资源清单，覆盖 Web、数据、机器学习、测试、运维、安全与桌面开发等领域。开发者可通过仓库或 awesome-python.com 快速比较候选工具，但进入清单不等于通过安全审计或生产验证，仍需检查许可证和维护状态。",
    "example": "awesome-python.com 是该仓库的真实网站，可按类别浏览 Python 框架、库和工具。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。"
  }
];
const verifiedCases = {
  "EbookFoundation/free-programming-books": {
    "type": "官方搜索 App",
    "url": "https://ebookfoundation.github.io/free-programming-books-search/",
    "verified": true
  },
  "codecrafters-io/build-your-own-x": {
    "type": "未找到公开案例",
    "url": "https://github.com/codecrafters-io/build-your-own-x",
    "verified": false
  },
  "donnemartin/system-design-primer": {
    "type": "未找到公开案例",
    "url": "https://github.com/donnemartin/system-design-primer",
    "verified": false
  },
  "freeCodeCamp/freeCodeCamp": {
    "type": "官方网站",
    "url": "https://www.freecodecamp.org/",
    "verified": true
  },
  "jwasham/coding-interview-university": {
    "type": "未找到公开案例",
    "url": "https://github.com/jwasham/coding-interview-university",
    "verified": false
  },
  "nilbuild/developer-roadmap": {
    "type": "官方网站",
    "url": "https://roadmap.sh/",
    "verified": true
  },
  "openclaw/openclaw": {
    "type": "官方 Showcase",
    "url": "https://docs.openclaw.ai/start/showcase",
    "verified": true
  },
  "public-apis/public-apis": {
    "type": "官方项目",
    "url": "https://github.com/public-apis/public-apis",
    "verified": true
  },
  "sindresorhus/awesome": {
    "type": "官方网站",
    "url": "https://awesome.re",
    "verified": true
  },
  "vinta/awesome-python": {
    "type": "官方网站",
    "url": "https://awesome-python.com/",
    "verified": true
  }
};
// GENERATED DATA END

const tableBody = document.querySelector("#repo-table-body");
const searchInput = document.querySelector("#search");
const languageFilter = document.querySelector("#language-filter");
const emptyState = document.querySelector("#empty-state");
const sortButtons = [...document.querySelectorAll(".sort-button")];
const boardTabs = [...document.querySelectorAll(".leaderboard-tab")];
const boardTitle = document.querySelector("#board-title");
const boardDescription = document.querySelector("#board-description");
const weeklyHeader = document.querySelector("#weekly-header");
const snapshotDate = document.querySelector("#snapshot-date");
const growthLeader = document.querySelector("#growth-leader");
const growthLeaderValue = document.querySelector("#growth-leader-value");
const growthTotal = document.querySelector("#growth-total");
const starsLeader = document.querySelector("#stars-leader");
const starsLeaderValue = document.querySelector("#stars-leader-value");

let activeBoard = "weekly";
let sortKey = "weekly";
let sortDirection = "desc";

const formatNumber = new Intl.NumberFormat("zh-CN");

function populateLanguageOptions() {
  const currentValue = languageFilter.value;
  languageFilter.replaceChildren();
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "全部语言";
  languageFilter.append(allOption);
  const languages = [...new Set(getActiveRepositories().map((repo) => repo.language))].sort();
  languages.forEach((language) => {
    const option = document.createElement("option");
    option.value = language;
    option.textContent = language;
    languageFilter.append(option);
  });
  languageFilter.value = languages.includes(currentValue) ? currentValue : "all";
}

function getActiveRepositories() {
  return activeBoard === "weekly" ? trendingRepositories : mostStarredRepositories;
}

function getCaseInfo(repo) {
  return verifiedCases[`${repo.owner}/${repo.name}`] ?? {
    type: "未找到公开案例",
    url: repo.url,
    verified: false,
  };
}

function updateSummary() {
  const weeklyLeader = trendingRepositories[0];
  const allTimeLeader = mostStarredRepositories[0];
  const totalGrowth = trendingRepositories.reduce((total, repo) => total + repo.weekly, 0);
  snapshotDate.textContent = dashboardGeneratedAt;
  growthLeader.textContent = weeklyLeader.name;
  growthLeaderValue.textContent = `+${formatNumber.format(weeklyLeader.weekly)} Stars`;
  growthTotal.textContent = formatNumber.format(totalGrowth);
  starsLeader.textContent = allTimeLeader.name;
  starsLeaderValue.textContent = formatNumber.format(allTimeLeader.stars);
}

function getVisibleRepositories() {
  const query = searchInput.value.trim().toLocaleLowerCase("zh-CN");
  const selectedLanguage = languageFilter.value;

  return getActiveRepositories()
    .filter((repo) => selectedLanguage === "all" || repo.language === selectedLanguage)
    .filter((repo) => {
      if (!query) return true;
      const caseInfo = getCaseInfo(repo);
      return [repo.owner, repo.name, repo.language, repo.purpose, repo.example, caseInfo.type, repo.risk]
        .join(" ")
        .toLocaleLowerCase("zh-CN")
        .includes(query);
    })
    .sort((left, right) => {
      const multiplier = sortDirection === "asc" ? 1 : -1;
      return (left[sortKey] - right[sortKey]) * multiplier;
    });
}

function makeCell(className, text) {
  const cell = document.createElement("td");
  const paragraph = document.createElement("p");
  paragraph.className = `cell-copy ${className}`.trim();
  paragraph.textContent = text;
  cell.append(paragraph);
  return cell;
}

function makeCaseCell(repo) {
  const caseInfo = getCaseInfo(repo);
  const cell = document.createElement("td");
  const badge = document.createElement("span");
  badge.className = `case-badge${caseInfo.verified ? "" : " unverified"}`;
  badge.textContent = caseInfo.type;
  const paragraph = document.createElement("p");
  paragraph.className = "cell-copy example-copy";
  paragraph.textContent = repo.example;
  const source = document.createElement("a");
  source.className = "case-source";
  source.href = caseInfo.url;
  source.target = "_blank";
  source.rel = "noreferrer";
  source.textContent = "查看来源 ↗";
  cell.append(badge, paragraph, source);
  return cell;
}

function renderTable() {
  const visibleRepositories = getVisibleRepositories();
  tableBody.replaceChildren();

  visibleRepositories.forEach((repo) => {
    const row = document.createElement("tr");

    const rankCell = document.createElement("td");
    rankCell.className = "rank";
    rankCell.textContent = String(repo.rank).padStart(2, "0");

    const repoCell = document.createElement("td");
    const repoLink = document.createElement("a");
    repoLink.className = "repo-link";
    repoLink.href = repo.url;
    repoLink.target = "_blank";
    repoLink.rel = "noreferrer";
    repoLink.textContent = repo.name;
    const owner = document.createElement("span");
    owner.className = "owner";
    owner.textContent = repo.owner;
    repoCell.append(repoLink, owner);

    const languageCell = document.createElement("td");
    const languageBadge = document.createElement("span");
    languageBadge.className = "language-badge";
    languageBadge.textContent = repo.language;
    languageCell.append(languageBadge);

    const starsCell = document.createElement("td");
    starsCell.className = "number";
    starsCell.textContent = formatNumber.format(repo.stars);

    const cells = [
      rankCell,
      repoCell,
      languageCell,
      starsCell,
      makeCell("", repo.purpose),
      makeCaseCell(repo),
      makeCell("risk-copy", repo.risk),
    ];
    if (activeBoard === "weekly") {
      const weeklyCell = document.createElement("td");
      weeklyCell.className = "number growth";
      weeklyCell.textContent = `+${formatNumber.format(repo.weekly)}`;
      cells.splice(4, 0, weeklyCell);
    }
    row.append(...cells);
    tableBody.append(row);
  });

  emptyState.hidden = visibleRepositories.length !== 0;
}

function selectBoard(board) {
  activeBoard = board;
  sortKey = board === "weekly" ? "weekly" : "stars";
  sortDirection = "desc";
  weeklyHeader.hidden = board !== "weekly";
  boardTitle.textContent = board === "weekly"
    ? "Weekly Trending Top 10"
    : "Most Starred Top 10";
  boardDescription.textContent = board === "weekly"
    ? "按 GitHub Trending 最近一周显示的新增 Star 排序。"
    : `按 ${dashboardGeneratedAt} 数据快照的累计 Star 总数排序。`;
  boardTabs.forEach((tab) => {
    const isActive = tab.dataset.board === board;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
  populateLanguageOptions();
  const activeSortButton = document.querySelector(`[data-sort="${sortKey}"]`);
  updateSortButtonState(activeSortButton);
  renderTable();
}

function updateSortButtonState(activeButton) {
  sortButtons.forEach((button) => {
    const header = button.closest("th");
    const isActive = button === activeButton;
    button.classList.toggle("active", isActive);
    button.querySelector("span").textContent = isActive
      ? sortDirection === "desc" ? "↓" : "↑"
      : "↕";
    header.setAttribute(
      "aria-sort",
      isActive ? (sortDirection === "desc" ? "descending" : "ascending") : "none",
    );
  });
}

sortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const requestedKey = button.dataset.sort;
    if (requestedKey === sortKey) {
      sortDirection = sortDirection === "desc" ? "asc" : "desc";
    } else {
      sortKey = requestedKey;
      sortDirection = "desc";
    }
    updateSortButtonState(button);
    renderTable();
  });
});

searchInput.addEventListener("input", renderTable);
languageFilter.addEventListener("change", renderTable);
boardTabs.forEach((tab) => {
  tab.addEventListener("click", () => selectBoard(tab.dataset.board));
});

populateLanguageOptions();
updateSummary();
renderTable();
