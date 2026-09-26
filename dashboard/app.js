// GENERATED DATA START
const dashboardGeneratedAt = "2026-09-26";
const trendingRepositories = [
  {
    "rank": 1,
    "owner": "cloudflare",
    "name": "security-audit-skill",
    "url": "https://github.com/cloudflare/security-audit-skill",
    "language": "JavaScript",
    "stars": 21699,
    "purpose": "这是一个面向编码代理的安全审计技能，通过侦察、按覆盖范围狩猎、候选验证、结构化记录、独立核验和报告生成等阶段，帮助对单个代码库开展有流程约束的审计，并维护覆盖台账与审计发现。它适用于希望让编码代理系统化检查代码并生成可追溯报告的场景；其定位是单仓库审计的起点，而不是 Cloudflare 后来发展出的多阶段、全平台漏洞发现系统。",
    "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。",
    "weekly": 9547
  },
  {
    "rank": 2,
    "owner": "stablyai",
    "name": "orca",
    "url": "https://github.com/stablyai/orca",
    "language": "TypeScript",
    "stars": 78446,
    "purpose": "Orca 是面向高并发构建工作的 AI 编排桌面应用，可让 Codex、ClaudeCode、OpenCode 或 Pi 等编码代理并行运行在相互隔离的 Git worktree 中，并集中跟踪、比较和合并结果。它还提供移动端伴侣、可持久化的分屏终端、浏览器 Design Mode、原生 GitHub 与 Linear 工作流，以及通过 SSH 在远程机器上运行代理等能力；README 标明桌面应用支持 macOS、Windows 和 Linux。",
    "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。",
    "weekly": 6537
  },
  {
    "rank": 3,
    "owner": "affaan-m",
    "name": "ECC",
    "url": "https://github.com/affaan-m/ECC",
    "language": "JavaScript",
    "stars": 267575,
    "purpose": "一套面向 Claude Code 等 AI 编程代理的工程化配置与工作流集合，包含技能、子代理、规则、钩子和命令。它把规划、测试驱动开发、代码审查、安全扫描、构建修复、上下文管理和长期记忆等做法整理成可复用模块，适合为团队建立一致的代理辅助开发流程；它不是独立的终端应用，效果仍取决于所用代理和项目配置。",
    "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。",
    "weekly": 6037
  },
  {
    "rank": 4,
    "owner": "alibaba",
    "name": "open-code-review",
    "url": "https://github.com/alibaba/open-code-review",
    "language": "Go",
    "stars": 41398,
    "purpose": "OpenCodeReview 是一个由大语言模型驱动的代码审查命令行工具，读取 Git diff 或完整文件，将代码交给可配置的模型代理分析，并生成带精确行号的结构化审查意见；代理还可以读取完整文件、搜索代码库和检查其他变更文件，以支持更深入的审查。它适合代码变更审查，也可通过 `ocr scan` 审计没有明显 diff 的完整文件或目录；README 明确指出其基准测试以较低召回率为代价偏重精确率和减少噪声。",
    "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。",
    "weekly": 5030
  },
  {
    "rank": 5,
    "owner": "vectorize-io",
    "name": "hindsight",
    "url": "https://github.com/vectorize-io/hindsight",
    "language": "Python",
    "stars": 30049,
    "purpose": "Hindsight 是为 AI 代理设计的记忆系统，目标是让代理能够随着交互积累和运用长期记忆，而不只检索对话历史；README 介绍了 retain、recall、reflect 等操作，并提供服务端、客户端及嵌入式等接入方式。它适合希望为代理加入长期记忆能力的开发者；部署时需要选择其支持的模型提供方，示例配置使用模型 API 密钥，README 片段未说明其他明确的功能限制。",
    "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。",
    "weekly": 4869
  },
  {
    "rank": 6,
    "owner": "Tencent",
    "name": "WeKnora",
    "url": "https://github.com/Tencent/WeKnora",
    "language": "Go",
    "stars": 30139,
    "purpose": "WeKnora 是一个开源、面向企业级文档理解和语义检索的 LLM 知识框架，结合 RAG 快速问答、可调用检索与工具的 ReAct Agent，以及能把原始文档整理成可维护互联 Markdown 知识库的 Wiki Mode。它支持多源导入、长期记忆、知识块编辑与版本回滚、多工作区 RBAC、嵌入式网站组件、API 密钥、多个 LLM/向量数据库/存储后端和本地或私有云部署，适合将分散文档转化为可查询、可推理且持续演进的知识资产；README 说明自动同步目前覆盖飞书、GitLab、腾讯 IMA、Notion 和语雀等来源，更多数据源仍在增加。",
    "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。",
    "weekly": 3189
  },
  {
    "rank": 7,
    "owner": "addyosmani",
    "name": "agent-skills",
    "url": "https://github.com/addyosmani/agent-skills",
    "language": "JavaScript",
    "stars": 99116,
    "purpose": "Agent Skills 提供面向 AI 编码 Agent 的生产级工程技能，将定义、规划、构建、测试、约束、审查、性能审计、代码简化和发布等开发阶段封装为可通过斜杠命令触发的工作流，并支持按需自动激活相关技能。它适合把资深工程实践和质量门槛一致地应用到 Agent 开发过程中，可用 `npx skills` 安装全部或单个技能；README 提醒单独安装某个技能时不会复制仓库级 `references/` 目录，因此依赖共享检查清单的补充路径可能不可用。",
    "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。",
    "weekly": 2911
  },
  {
    "rank": 8,
    "owner": "anthropics",
    "name": "financial-services",
    "url": "https://github.com/anthropics/financial-services",
    "language": "Python",
    "stars": 37576,
    "purpose": "这是面向金融服务工作流的参考代理、技能和数据连接器集合，覆盖投行、研究、私募股权、财富管理等方向，包含建模、研究、对账、估值审核和客户尽调等工作流，并可作为 Cowork 插件或 Claude Managed Agent 模板使用。它面向需要定制金融工作流辅助工具的团队；代理生成的是供专业人员审核的草稿，不提供投资、法律、税务或会计建议，也不会作出投资建议、执行交易、批准开户或直接记账。",
    "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。",
    "weekly": 2623
  },
  {
    "rank": 9,
    "owner": "paperclipai",
    "name": "paperclip",
    "url": "https://github.com/paperclipai/paperclip",
    "language": "TypeScript",
    "stars": 85277,
    "purpose": "Paperclip 是由 Node.js 服务端和 React 界面组成的开源 AI 代理编排工具，用于围绕业务目标组织多个代理、分配任务，并在一个仪表板中管理组织关系、预算、审批、工作进度和成本。它面向希望协调不同代理共同工作的团队；代理需要能够接收心跳信号才能接入，项目负责管理和编排代理，而不是提供这些代理本身。",
    "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。",
    "weekly": 2616
  },
  {
    "rank": 10,
    "owner": "bojieli",
    "name": "ai-agent-book",
    "url": "https://github.com/bojieli/ai-agent-book",
    "language": "Python",
    "stars": 51037,
    "purpose": "《深入理解 AI Agent：设计原理与工程实践》是一本介绍 AI Agent 原理与工程实践的开源书籍，以“Agent = LLM + 上下文 + 工具”为主线，包含 10 章正文和 109 个配套实验，并提供在线阅读及多语言版本。它适合希望系统学习代理设计并动手复现实验的读者；仓库书稿已更新至 2.0 版，README 提醒旧版 PDF 可能不含最新修订和内容调整，应以最新版为准。",
    "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
    "risk": "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。",
    "weekly": 2485
  }
];
const mostStarredRepositories = [
  {
    "rank": 1,
    "owner": "codecrafters-io",
    "name": "build-your-own-x",
    "url": "https://github.com/codecrafters-io/build-your-own-x",
    "language": "Markdown",
    "stars": 549631,
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
    "stars": 510557,
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
    "stars": 483297,
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
    "stars": 456178,
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
    "stars": 397712,
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
    "stars": 390530,
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
    "stars": 371830,
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
    "stars": 368161,
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
    "stars": 361873,
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
    "stars": 323054,
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
