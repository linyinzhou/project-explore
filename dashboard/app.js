const repositories = [
  {
    rank: 1,
    owner: "public-apis",
    name: "public-apis",
    url: "https://github.com/public-apis/public-apis",
    language: "Python",
    stars: 468307,
    weekly: 10990,
    purpose: "社区维护的公共 API 导航目录，按领域列出鉴权、HTTPS 与 CORS 等信息；它不是统一 API 服务。",
    example: "马拉松比赛日助手：用目录找到 Nominatim 与 Open-Meteo，把起跑地址转成坐标，再输出比赛时段温度、降雨、风速和配速提醒。",
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
    example: "博物馆探访短片：输入“庞贝古城壁画”，自动生成 60 秒文案、画面搜索词、旁白、字幕与竖屏成片，再由编辑核实史实后发布。",
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
    example: "项目架构图：让 Codex读取 GitHub Radar 代码，生成“数据抓取 → 排序 → 内容分析 → Dashboard”的静态 HTML/SVG，直接嵌入 README。",
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
    example: "MX Master 工作流：在 VS Code 中拇指键运行测试，在 Chrome 中切换前进/后退，打开会议软件时自动切换摄像头曝光配置。",
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
    example: "电影资料插件：向 Agent 注册 TMDb 查询工具和缓存服务；会话结束或插件重载时自动撤销事件监听与副作用，避免污染宿主。",
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
    example: "个人编码记忆库：导入项目源码、README 和编码偏好，让 Codex 跨任务找回约定，并显示本次回答检索过哪些目录和文档。",
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
    example: "个人电影研究模型：用已标注影评微调一个本地中文模型，使其按导演、时代和美学主题归类影片，并通过本地 API 接入 Obsidian。",
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
    example: "离线跑步手表助手：识别“开始 8 组 400 米间歇，每组休息 90 秒”，转为结构化计时器参数并调用设备功能，无需上传语音文本到云端。",
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
    example: "贷款审批审计：把申请数据、政策规则、模型建议与最终决策连接成图；监管审查时导出“使用了哪些事实、命中了哪条规则”的完整轨迹。",
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
    example: "开发者新机标准化：在一台兼容电脑上安装 Omarchy，快速获得统一终端、编辑器、浏览器、截图录屏、剪贴板和 AI 编程环境。",
    risk: "强观点配置不适合所有工作流；迁移前需验证硬件、公司安全策略、现有软件和数据备份。",
  },
];

const tableBody = document.querySelector("#repo-table-body");
const searchInput = document.querySelector("#search");
const languageFilter = document.querySelector("#language-filter");
const emptyState = document.querySelector("#empty-state");
const sortButtons = [...document.querySelectorAll(".sort-button")];

let sortKey = "weekly";
let sortDirection = "desc";

const formatNumber = new Intl.NumberFormat("zh-CN");

function populateLanguageOptions() {
  const languages = [...new Set(repositories.map((repo) => repo.language))].sort();
  languages.forEach((language) => {
    const option = document.createElement("option");
    option.value = language;
    option.textContent = language;
    languageFilter.append(option);
  });
}

function getVisibleRepositories() {
  const query = searchInput.value.trim().toLocaleLowerCase("zh-CN");
  const selectedLanguage = languageFilter.value;

  return repositories
    .filter((repo) => selectedLanguage === "all" || repo.language === selectedLanguage)
    .filter((repo) => {
      if (!query) return true;
      return [repo.owner, repo.name, repo.language, repo.purpose, repo.example, repo.risk]
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

    const weeklyCell = document.createElement("td");
    weeklyCell.className = "number growth";
    weeklyCell.textContent = `+${formatNumber.format(repo.weekly)}`;

    row.append(
      rankCell,
      repoCell,
      languageCell,
      starsCell,
      weeklyCell,
      makeCell("", repo.purpose),
      makeCell("example-copy", repo.example),
      makeCell("risk-copy", repo.risk),
    );
    tableBody.append(row);
  });

  emptyState.hidden = visibleRepositories.length !== 0;
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

populateLanguageOptions();
renderTable();
