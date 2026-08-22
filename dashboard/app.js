const trendingRepositories = [
  {
    rank: 1,
    owner: "public-apis",
    name: "public-apis",
    url: "https://github.com/public-apis/public-apis",
    language: "Python",
    stars: 468307,
    weekly: 10990,
    purpose: "社区维护的公共 API 导航目录，按领域列出鉴权、HTTPS 与 CORS 等信息；它不是统一 API 服务。",
    example: "Public APIs 仓库本身就是实际运行的公共 API 目录，开发者可按类别、认证方式、HTTPS 和 CORS 条件查找服务；未找到可归因到该目录的具名第三方产品。",
    risk: "目录条目可能过期；Public 不等于免费、稳定或可商用，仍需逐项核实条款。",
  },
  {
    rank: 2,
    owner: "harry0703",
    name: "MoneyPrinterTurbo",
    url: "https://github.com/harry0703/MoneyPrinterTurbo",
    language: "Python",
    stars: 114399,
    weekly: 10470,
    purpose: "输入主题或关键词，自动生成脚本、匹配素材、制作字幕与背景音乐，最终合成高清短视频。",
    example: "官方 WebUI、API 与 CLI 已实际提供短视频生成；README Gallery 展示了《When the City Wakes》《The Science Inside Coffee》等由该工具生成的竖屏和横屏成片。",
    risk: "生成内容可能出现事实错误；素材版权、模型 API 成本和平台内容规范需要人工审核。",
  },
  {
    rank: 3,
    owner: "cathrynlavery",
    name: "diagram-design",
    url: "https://github.com/cathrynlavery/diagram-design",
    language: "HTML",
    stars: 25262,
    weekly: 8457,
    purpose: "面向 Claude Code、Codex 等编码代理的图表设计技能，提供 39 类编辑级 HTML + SVG 图表。",
    example: "项目提供可直接浏览的 Diagram Design Live Gallery，实际展示架构图、流程图、时序图、ER 图、甘特图等 27 类静态 HTML/SVG 成品。",
    risk: "它优化的是表达与版式，不会验证架构本身是否正确；生成图仍需开发者复核。",
  },
  {
    rank: 4,
    owner: "AprilNEA",
    name: "OpenLogi",
    url: "https://github.com/AprilNEA/OpenLogi",
    language: "Rust",
    stars: 13422,
    weekly: 4054,
    purpose: "本地优先的 Logitech Options+ 替代方案，可管理按键映射、DPI、SmartShift、灯光与摄像头。",
    example: "OpenLogi 本身是可安装的跨平台桌面应用，实际用于配置 Logitech 设备的按键映射、DPI、SmartShift 和按应用切换配置文件。",
    risk: "项目明确处于活跃开发且尚不稳定；设备、操作系统与连接方式的兼容性需实机验证。",
  },
  {
    rank: 5,
    owner: "cordiverse",
    name: "cordis",
    url: "https://github.com/cordiverse/cordis",
    language: "TypeScript",
    stars: 7045,
    weekly: 3614,
    purpose: "DeepSeek Harness 使用的插件元框架，用 Context、Service、依赖注入和类型化事件管理插件生命周期。",
    example: "DeepSeek Harness 是已公开运行的真实下游产品：其模型适配器、工具、文件访问、Agent Loop 和 Web UI 能力都作为 Cordis 插件挂载。",
    risk: "不是面向普通用户的完整应用，API 尚不稳定；目前更适合框架研究和可控原型。",
  },
  {
    rank: 6,
    owner: "volcengine",
    name: "OpenViking",
    url: "https://github.com/volcengine/OpenViking",
    language: "Python",
    stars: 31864,
    weekly: 3033,
    purpose: "AI Agent 上下文数据库，把记忆、资源与技能组织为虚拟文件系统，并提供分层加载和可追踪检索。",
    example: "OpenViking 已提供 Codex、Claude Code、OpenClaw、Cursor、DeepSeek Harness 等正式集成；Hermes Agent 将其作为内置记忆提供器使用。",
    risk: "需控制源码与个人记忆的访问权限；AGPL 许可证、索引成本和错误记忆传播都要评估。",
  },
  {
    rank: 7,
    owner: "unslothai",
    name: "unsloth",
    url: "https://github.com/unslothai/unsloth",
    language: "Python",
    stars: 74359,
    weekly: 2987,
    purpose: "在本地桌面运行、训练和部署 LLM、扩散、嵌入及音频模型，并提供 OpenAI 兼容接口。",
    example: "Unsloth Studio / Desktop 是项目提供的真实应用，可在本机下载、运行、训练和微调模型，并通过 OpenAI 兼容接口连接其他 Agent 工具。",
    risk: "训练效果取决于数据量与标注质量；硬件显存、基础模型许可证和输出幻觉不能忽略。",
  },
  {
    rank: 8,
    owner: "cactus-compute",
    name: "needle",
    url: "https://github.com/cactus-compute/needle",
    language: "Python",
    stars: 8478,
    weekly: 2985,
    purpose: "面向微型设备的 14MB 工具调用与结构化提取模型，完整会话内存约 28MB，可离线推理。",
    example: "Cactus Engine 已把 Needle 作为可直接运行的设备端模型：使用 cactus run Cactus-Compute/needle 可测试 OpenAI 格式工具调用；项目也提供本地 Playground。",
    risk: "小模型能力边界明显；低置信度指令必须拒绝或交给用户确认，不能直接控制高风险设备。",
  },
  {
    rank: 9,
    owner: "semantica-agi",
    name: "semantica",
    url: "https://github.com/semantica-agi/semantica",
    language: "Python",
    stars: 10183,
    weekly: 2755,
    purpose: "为 AI 系统构建上下文图、知识图谱、确定性推理与决策溯源，面向可审计和监管场景。",
    example: "Semantica 已提供可安装的 Python 包、Knowledge Explorer、CLI、REST API 和 MCP Server，用于实际构建、浏览和导出知识图谱及决策审计轨迹；未找到具名客户案例。",
    risk: "它解释系统输入、规则和决策轨迹，不会揭示模型内部思维过程；企业数据治理成本较高。",
  },
  {
    rank: 10,
    owner: "basecamp",
    name: "omarchy",
    url: "https://github.com/basecamp/omarchy",
    language: "Shell",
    stars: 27901,
    weekly: 2565,
    purpose: "由 DHH 主导的现代、强观点 Linux 发行版，预设终端、Neovim、浏览器、AI 工具、快捷键和主题。",
    example: "Omarchy 是已经发布 ISO、安装程序与用户手册的真实 Linux 发行版，官网 omarchy.org 提供下载；项目由 37signals 孵化。",
    risk: "强观点配置不适合所有工作流；迁移前需验证硬件、公司安全策略、现有软件和数据备份。",
  },
];

const mostStarredRepositories = [
  {
    rank: 1,
    owner: "codecrafters-io",
    name: "build-your-own-x",
    url: "https://github.com/codecrafters-io/build-your-own-x",
    language: "Markdown",
    stars: 541915,
    purpose: "汇集从零重建数据库、编程语言、操作系统、搜索引擎、Web 服务器和 AI 模型等技术的分步教程，用实现过程理解底层原理。",
    example: "未找到可公开核实的第三方网站或 App 声明由该仓库构建；它本身是教程索引，而不是提供运行时能力的软件产品。",
    risk: "教程来源与年代不一，完成教学实现不等于达到生产级安全、性能和容错标准。",
  },
  {
    rank: 2,
    owner: "sindresorhus",
    name: "awesome",
    url: "https://github.com/sindresorhus/awesome",
    language: "列表",
    stars: 498692,
    purpose: "由社区维护的 Awesome Lists 总索引，覆盖编程语言、平台、安全、数据库、媒体、学习资源等主题；它是导航目录，不是软件包。",
    example: "awesome.re 是该项目的官方入口网站，实际提供跨平台、语言、数据库、安全和媒体等主题 Awesome Lists 导航；未找到可验证的第三方产品采用声明。",
    risk: "被收录不代表项目经过安全或质量认证；子清单的维护活跃度和收录标准差异很大。",
  },
  {
    rank: 3,
    owner: "public-apis",
    name: "public-apis",
    url: "https://github.com/public-apis/public-apis",
    language: "Python",
    stars: 468094,
    purpose: "社区维护的公共 API 导航目录，按领域标记鉴权、HTTPS 与 CORS 等信息；它本身不提供统一 API 服务。",
    example: "Public APIs 仓库本身就是实际运行的公共 API 目录，开发者可按类别、认证方式、HTTPS 和 CORS 条件查找服务；未找到可归因到该目录的具名第三方产品。",
    risk: "目录条目可能过期；Public 不等于免费、稳定或可商用，必须逐项核实配额与条款。",
  },
  {
    rank: 4,
    owner: "freeCodeCamp",
    name: "freeCodeCamp",
    url: "https://github.com/freeCodeCamp/freeCodeCamp",
    language: "TypeScript",
    stars: 454427,
    purpose: "freeCodeCamp 的开源学习平台与课程代码库，提供自定进度的全栈、编程、数学和机器学习互动练习及认证项目。",
    example: "freeCodeCamp.org 是由该代码库实际运行的学习网站，提供数千个互动编码挑战、全栈与机器学习课程以及认证项目。",
    risk: "课程完成和证书不能替代真实项目经验；自托管整个平台的体量、数据和维护成本都很高。",
  },
  {
    rank: 5,
    owner: "EbookFoundation",
    name: "free-programming-books",
    url: "https://github.com/EbookFoundation/free-programming-books",
    language: "Python",
    stars: 394970,
    purpose: "按编程语言、主题和自然语言整理可免费获取的编程图书、课程、交互资源与播客，并提供搜索页面。",
    example: "Free Programming Books Search 是该仓库实际发布的搜索 Web App，可按书名或作者检索多语言免费编程图书与课程。",
    risk: "免费访问不一定意味着开放版权或内容仍然更新；外链可能失效，教材版本也可能落后。",
  },
  {
    rank: 6,
    owner: "openclaw",
    name: "openclaw",
    url: "https://github.com/openclaw/openclaw",
    language: "TypeScript",
    stars: 387057,
    purpose: "运行在个人设备上的单用户 AI 助手，通过 Gateway 连接模型、工具、技能和 WhatsApp、Telegram、Slack 等消息渠道。",
    example: "官方 Showcase 收录了 Vienna 公共交通查询、Oura Ring 健康助手、Bambu 3D 打印机控制、PR Review Telegram 反馈等具名社区项目。",
    risk: "主会话工具可在宿主机执行操作；消息输入必须视为不可信，并正确配置配对、沙箱、密钥和远程暴露策略。",
  },
  {
    rank: 7,
    owner: "donnemartin",
    name: "system-design-primer",
    url: "https://github.com/donnemartin/system-design-primer",
    language: "Python",
    stars: 365318,
    purpose: "系统讲解可扩展系统设计、缓存、负载均衡、数据库、消息队列和可用性，并提供面试题、真实架构资料与 Anki 卡片。",
    example: "未找到可公开核实的网站或 App 声明以该仓库作为产品依赖；它是系统设计学习材料和面试准备资源。",
    risk: "材料偏学习与面试框架，示例数字和架构不能直接替代真实业务测量、压测与容量规划。",
  },
  {
    rank: 8,
    owner: "nilbuild",
    name: "developer-roadmap",
    url: "https://github.com/nilbuild/developer-roadmap",
    language: "TypeScript",
    stars: 365096,
    purpose: "roadmap.sh 的社区驱动互动学习路线，覆盖前端、后端、DevOps、数据、AI、安全和多种语言，并为节点提供文章与测试题。",
    example: "roadmap.sh 是该仓库对应的真实 Web 产品，提供互动式岗位和技能路线、项目题目、最佳实践、测试题及注册用户学习进度。",
    risk: "路线图是知识地图而非统一课程，覆盖面容易制造完成焦虑；学习顺序仍要按岗位和已有基础裁剪。",
  },
  {
    rank: 9,
    owner: "jwasham",
    name: "coding-interview-university",
    url: "https://github.com/jwasham/coding-interview-university",
    language: "文档",
    stars: 359447,
    purpose: "面向大型科技公司软件工程面试的多月计算机科学学习计划，覆盖数据结构、算法、复杂度、网络、系统设计与求职准备。",
    example: "未找到可公开核实的第三方工具或网站以该仓库作为产品依赖；项目本身是多语言的软件工程面试自学计划。",
    risk: "原作者的高强度路径不是普适工时标准；它侧重通用软件工程面试，不等同于前端或全栈岗位能力模型。",
  },
  {
    rank: 10,
    owner: "vinta",
    name: "awesome-python",
    url: "https://github.com/vinta/awesome-python",
    language: "Python",
    stars: 315378,
    purpose: "按 AI、Web、数据库、数据分析、测试、DevOps、媒体和安全等类别整理 Python 框架、库、工具与资源。",
    example: "awesome-python.com 是该仓库的真实网站，支持按 AI、Web、数据库、测试、媒体和安全等类别浏览 Python 框架、库和工具。",
    risk: "这是有主观筛选标准的目录；热门库也可能许可证不合适、维护停滞或与目标 Python 版本不兼容。",
  },
];

const verifiedCases = {
  "public-apis/public-apis": { type: "官方项目", url: "https://github.com/public-apis/public-apis", verified: true },
  "harry0703/MoneyPrinterTurbo": { type: "官方产品与 Gallery", url: "https://github.com/harry0703/MoneyPrinterTurbo", verified: true },
  "cathrynlavery/diagram-design": { type: "官方 Live Gallery", url: "https://cathrynlavery.github.io/diagram-design/", verified: true },
  "AprilNEA/OpenLogi": { type: "官方桌面应用", url: "https://github.com/AprilNEA/OpenLogi", verified: true },
  "cordiverse/cordis": { type: "真实下游产品", url: "https://deepseek.com/harness/en/", verified: true },
  "volcengine/OpenViking": { type: "官方产品集成", url: "https://openviking.ai/integrations", verified: true },
  "unslothai/unsloth": { type: "官方桌面应用", url: "https://github.com/unslothai/unsloth", verified: true },
  "cactus-compute/needle": { type: "官方引擎集成", url: "https://docs.cactuscompute.com/", verified: true },
  "semantica-agi/semantica": { type: "官方产品", url: "https://github.com/semantica-agi/semantica", verified: true },
  "basecamp/omarchy": { type: "官方发行版", url: "https://omarchy.org/", verified: true },
  "codecrafters-io/build-your-own-x": { type: "未找到公开案例", url: "https://github.com/codecrafters-io/build-your-own-x", verified: false },
  "sindresorhus/awesome": { type: "官方网站", url: "https://awesome.re", verified: true },
  "freeCodeCamp/freeCodeCamp": { type: "官方网站", url: "https://www.freecodecamp.org/", verified: true },
  "EbookFoundation/free-programming-books": { type: "官方搜索 App", url: "https://ebookfoundation.github.io/free-programming-books-search/", verified: true },
  "openclaw/openclaw": { type: "官方 Showcase", url: "https://docs.openclaw.ai/start/showcase", verified: true },
  "donnemartin/system-design-primer": { type: "未找到公开案例", url: "https://github.com/donnemartin/system-design-primer", verified: false },
  "nilbuild/developer-roadmap": { type: "官方网站", url: "https://roadmap.sh/", verified: true },
  "jwasham/coding-interview-university": { type: "未找到公开案例", url: "https://github.com/jwasham/coding-interview-university", verified: false },
  "vinta/awesome-python": { type: "官方网站", url: "https://awesome-python.com/", verified: true },
};

const tableBody = document.querySelector("#repo-table-body");
const searchInput = document.querySelector("#search");
const languageFilter = document.querySelector("#language-filter");
const emptyState = document.querySelector("#empty-state");
const sortButtons = [...document.querySelectorAll(".sort-button")];
const boardTabs = [...document.querySelectorAll(".leaderboard-tab")];
const boardTitle = document.querySelector("#board-title");
const boardDescription = document.querySelector("#board-description");
const weeklyHeader = document.querySelector("#weekly-header");

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
    : "按 2026-08-22 数据快照的累计 Star 总数排序。";
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
renderTable();
