const state = {
  chances: 3,
  teamEnergy: 350,
  energyGoal: 1000,
  calories: 680,
  votes: 6,
  currentPlayer: 0,
  drawing: false,
  mapIcons: null,
  feedTab: "推荐",
  healthScore: 689,
  healthRank: "未上榜",
  dailyExpanded: false,
  taskMode: "daily",
  blindBoxOpened: false,
  prizes: ["健康优惠券"],
  blindPrizePool: [
    { name: "现场门票", desc: "", badge: "前5名必得", type: "ticket", image: "https://www.figma.com/api/mcp/asset/3ac1bf69-49a6-41b2-ba54-6d2559933189" },
    { name: "哥哥同款", desc: "", badge: "", type: "product", image: "https://www.figma.com/api/mcp/asset/6a5ad89b-0f3c-40ab-85fa-f62e7dc203ff" },
    { name: "节目周边", desc: "", badge: "", type: "merch", image: "https://www.figma.com/api/mcp/asset/67aaf434-e981-4747-9b54-bf84a40ecd8f" },
    { name: "免单卡", desc: "", badge: "", type: "coupon", image: "https://www.figma.com/api/mcp/asset/5025b5a4-f9d6-4158-8219-ed8fd08de2b8" },
    { name: "京东京豆", desc: "", badge: "", type: "bean", image: "https://www.figma.com/api/mcp/asset/837d61ac-6bb8-40d2-a13f-614f39202488" }
  ],
  dailyPrizePool: [
    { name: "关节伴侣", icon: "joint", image: "https://www.figma.com/api/mcp/asset/bd24ddb2-6354-4b19-8869-e5cbd581c2ef" },
    { name: "女士营养", icon: "bottle", image: "https://www.figma.com/api/mcp/asset/6764fbb7-c301-45f8-bdbb-d39a31a31845" },
    { name: "京豆", icon: "bean", image: "https://www.figma.com/api/mcp/asset/a46c4fdf-d4cd-4612-91b1-1abb03457181" },
    { name: "优惠券", icon: "coupon", image: "https://www.figma.com/api/mcp/asset/e0a9787d-70e1-43b4-91ff-7c5e7d00e435" },
    { name: "健康值", icon: "energy", image: "https://www.figma.com/api/mcp/asset/5a5c70f3-8166-42ef-b2d9-64771a5da652" }
  ],
  dailyTasks: [
    { id: "daily_signin", title: "每日签到", desc: "每日登录活动页面签到", reward: 5, action: "去打卡", done: false },
    { id: "daily_subscribe", title: "订阅周六晚8开抽大奖", desc: "订阅抽奖提醒", reward: 5, action: "去提醒", done: false },
    { id: "daily_device", title: "绑定硬件设备(0/10)", desc: "手环、体重秤、血糖仪等", reward: 10, action: "去绑定", done: false },
    { id: "daily_browse", title: "浏览看病买药频道15秒", desc: "浏览15秒", reward: 5, action: "去逛逛", done: false },
    { id: "daily_profile", title: "完善健康档案", desc: "填写个人信息、健康指标等", reward: 20, action: "去完善", done: false },
    { id: "daily_weight", title: "上传今日体重", desc: "参与健康打卡", reward: 10, action: "去上传", done: false }
  ],
  rushTasks: [
    { id: "rush_invite", title: "邀请好友下载京东健康App", desc: "好友需注册登录，不限次数", reward: 50, action: "去邀请", done: false },
    { id: "rush_device", title: "绑定硬件设备", desc: "手环、体重秤、血糖仪等", reward: 20, action: "去绑定", done: false },
    { id: "rush_consult", title: "完成一次在线问诊", desc: "去检测你的健康程度", reward: 50, action: "去问诊", done: false },
    { id: "rush_trade", title: "下单购买任意健康品类订单", desc: "签收后计入健康值", reward: 50, action: "去下单", done: false },
    { id: "rush_same_trade", title: "下单购买哥哥同款健康商品", desc: "会场内下单任意金额同款商品", reward: 80, action: "去下单", done: false }
  ],
  players: [
    { name: "我", index: 9, color: "#19a96f" },
    { name: "队友1", index: 1, color: "#ff6f91" },
    { name: "队友2", index: 15, color: "#3c8cff" },
    { name: "队友3", index: 21, color: "#ff9f1a" },
    { name: "队友4", index: 27, color: "#8a6cff" }
  ],
  prizePool: [
    { name: "现场门票", image: "https://www.figma.com/api/mcp/asset/39431c7a-37cc-4b2d-8218-154935783ce5" },
    { name: "健康免单券", image: "https://www.figma.com/api/mcp/asset/221650ea-bc42-43d7-a5f7-b6290d3b1308" },
    { name: "健康优惠券", image: "https://www.figma.com/api/mcp/asset/221650ea-bc42-43d7-a5f7-b6290d3b1308" },
    { name: "同款水杯", image: "https://www.figma.com/api/mcp/asset/7166b577-71f8-4ee8-9785-f285af35c7d2" },
    { name: "同款背包", image: "https://www.figma.com/api/mcp/asset/be410353-5b95-48bb-a580-ea7391c28907" },
    { name: "同款帽子", image: "https://www.figma.com/api/mcp/asset/aec31cdd-6b52-40e0-8120-7dd78abd8dfd" },
    { name: "同款冰袖", image: "https://www.figma.com/api/mcp/asset/0c6550a4-786f-43ba-9d80-2780dcf068c9" }
  ],
  tasks: [
    { id: "invite", title: "邀请好友下载京东健康App", desc: "好友需注册登录", reward: 2, action: "去邀请", done: false },
    { id: "browse_med", title: "浏览看病买药频道", desc: "浏览15秒", reward: 1, action: "去浏览", done: false },
    { id: "profile", title: "完善健康档案", desc: "填写个人信息/健康指标", reward: 1, action: "去完善", done: false },
    { id: "signin", title: "每日签到", desc: "订阅明天提醒", reward: 1, action: "去签到", done: false },
    { id: "bind_device", title: "绑定硬件设备（0/10）", desc: "手环/体重秤/血糖仪", reward: 1, action: "去绑定", done: false },
    { id: "xiaokang", title: "与小康完成一次对话", desc: "健康的事，小康都知道", reward: 1, action: "去对话", done: false },
    { id: "same_trade", title: "下单购买哥哥同款健康商品", desc: "会场内下单任意金额同款商品", reward: 2, action: "去下单", done: false },
    { id: "weight", title: "上传今日体重", desc: "参与减重活动", reward: 1, action: "去上传", done: false },
    { id: "consult", title: "完成在线问诊", desc: "去检测你的健康程度", reward: 1, action: "去问诊", done: false },
    { id: "trade_any", title: "下单购买任意健康商品", desc: "会场内下单任意金额商品", reward: 1, action: "去下单", done: false },
    { id: "swisse_browse", title: "浏览Swisse店铺", desc: "浏览15秒", reward: 1, action: "去浏览", done: false },
    { id: "swisse_follow", title: "收藏Swisse店铺", desc: "关注店铺", reward: 1, action: "去收藏", done: false },
    { id: "swisse_trade", title: "下单Swisse店铺内商品", desc: "下单店内任意金额商品", reward: 1, action: "去下单", done: false }
  ],
  ranks: [
    { name: "X-Brothers", votes: 256.8, image: "https://www.figma.com/api/mcp/asset/8aee3927-8875-458e-85de-70c19c838553" },
    { name: "快乐老咖", votes: 124.6, image: "https://www.figma.com/api/mcp/asset/a97ec4d0-19be-4c44-aca8-a4b498977226" },
    { name: "TOP登场", votes: 80.3, image: "https://www.figma.com/api/mcp/asset/11cbae57-ee5d-456a-9bbb-867eb9ff1e83" }
  ],
  products: [
    {
      name: "Swisse护肝净肝片",
      category: "减重套餐",
      badge: "店铺精选",
      sales: "已售200万+",
      promo: "满300减40",
      save: "已减50元",
      price: "¥999.99",
      store: "Swisse京东海外自营",
      image: "https://www.figma.com/api/mcp/asset/92587fe9-0b16-4918-87fd-daf7adfe8f5c"
    },
    {
      name: "汤臣倍健金装鱼油软胶囊",
      category: "健身必补",
      badge: "自营",
      sales: "已售200万+",
      promo: "满300减40",
      save: "已减50元",
      price: "¥999.99",
      image: "https://www.figma.com/api/mcp/asset/344a443e-28e4-46a7-b201-5d4859a8bbc9"
    },
    {
      name: "Swisse 护肝净肝片",
      category: "营养保健",
      badge: "直播同款",
      sales: "已售200万+",
      promo: "满300减40",
      save: "已减50元",
      price: "¥999.99",
      image: "https://www.figma.com/api/mcp/asset/8c396b5b-594b-4e12-adc8-97e1d38ba4eb"
    },
    {
      name: "汤臣倍健鱼油软胶囊",
      category: "营养保健",
      badge: "哥哥同款",
      sales: "已售200万+",
      promo: "满300减40",
      save: "已减50元",
      price: "¥999.99",
      image: "https://www.figma.com/api/mcp/asset/8beb4535-e010-4069-b28f-e4bd6d48279c"
    },
    {
      name: "诺斯清儿童海生理盐水",
      category: "营养保健",
      badge: "直播同款",
      sales: "已售200万+",
      promo: "满300减40",
      save: "已减50元",
      price: "¥999.99",
      image: "https://www.figma.com/api/mcp/asset/e4bb9a35-2d0c-41b7-aafb-9e70bb3ef852"
    },
    {
      name: "鱼跃医用血压仪670",
      category: "健身器材",
      badge: "直播同款",
      sales: "已售200万+",
      promo: "满300减40",
      save: "已减50元",
      price: "¥999.99",
      image: "https://www.figma.com/api/mcp/asset/0a6de793-a905-4f61-bb16-8b2caada0320"
    },
    {
      name: "家用筋膜枪放松仪",
      category: "健身器材",
      badge: "哥哥同款",
      sales: "已售8万+",
      promo: "器械好物",
      save: "限时补贴",
      price: "¥159.00",
      image: "https://www.figma.com/api/mcp/asset/ba7b6424-c78a-44a6-ae4c-215d3ca44bb9"
    },
    {
      name: "弹力带训练组合",
      category: "健身器材",
      badge: "哥哥同款",
      sales: "已售6万+",
      promo: "低至5折",
      save: "已减20元",
      price: "¥39.90",
      image: "https://www.figma.com/api/mcp/asset/b390d124-ac47-45f0-928e-bf301b93a390"
    },
    {
      name: "哥哥同款减重问诊",
      category: "问诊服务",
      badge: "哥哥同款",
      sales: "已服务8万+",
      promo: "健康顾问",
      save: "限时补贴",
      price: "¥19.90",
      image: "https://www.figma.com/api/mcp/asset/158ca793-a627-4618-b829-7786420d14aa"
    },
    {
      name: "在线营养师咨询",
      category: "问诊服务",
      badge: "直播同款",
      sales: "已服务12万+",
      promo: "专业问诊",
      save: "新人立减",
      price: "¥29.90",
      image: "https://www.figma.com/api/mcp/asset/fac66fe5-7e76-442a-a0d8-3835f537611a"
    }
  ]
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const toast = $("#toast");
const sheetMask = $("#sheetMask");
const sheet = $("#sheet");
const drawMask = $("#drawMask");
const prizePopup = $("#prizePopup");
const mapViewport = $("#mapViewport");
const mapTiles = $$(".route i");
const tileIcons = ["question", "energy", "chest"];
const routePositions = [
  [78, 184], [132, 184], [186, 184], [240, 184], [294, 184], [348, 184],
  [402, 184], [456, 184], [510, 184], [564, 184], [618, 184], [672, 184],
  [726, 184], [780, 184], [780, 136], [780, 88], [726, 88], [672, 88],
  [618, 88], [564, 88], [510, 88], [456, 88], [402, 88], [348, 88],
  [294, 88], [240, 88], [186, 88], [132, 88], [78, 88], [78, 136],
  [132, 136], [186, 136]
];
const myPrizeItems = [
  {
    iconImage: "https://www.figma.com/api/mcp/asset/624c39e6-23ad-4717-9536-987dc152155a",
    title: "现场节目门票-8.24日",
    value: "¥888",
    desc: "奖品价值",
    time: "2026.06.18 11:12:59",
    action: "填写信息",
    status: "2026.6.19过期"
  },
  {
    iconImage: "https://www.figma.com/api/mcp/asset/e29b0ded-c53f-409c-b245-ad9904f3511f",
    title: "京东健康免单卡",
    value: "+5",
    desc: "",
    time: "2026.06.18 11:12:59",
    action: "去使用",
    status: "2026.6.19过期"
  },
  {
    iconImage: "https://www.figma.com/api/mcp/asset/e9907c6d-cbe8-49fa-ad8b-a20ec716a49e",
    title: "可购买健康部分商品",
    value: "¥120",
    desc: "满599可用",
    time: "2026.06.18 11:12:59",
    action: "去使用",
    status: "23:59:59.9失效"
  }
];

function sync() {
  const drawChanceText = $("#drawChanceText");
  if (drawChanceText) drawChanceText.textContent = `剩余前进次数 ×${state.chances}`;
  const teamEnergyValue = $("#teamEnergyValue");
  if (teamEnergyValue) teamEnergyValue.textContent = `${state.teamEnergy}/${state.energyGoal}`;
  const teamEnergyBar = $("#teamEnergyBar");
  if (teamEnergyBar) teamEnergyBar.style.width = `${Math.min(100, state.teamEnergy / state.energyGoal * 100)}%`;
  const calories = $("#calories");
  if (calories) calories.textContent = state.calories;
  const voteCount = $("#voteCount");
  if (voteCount) voteCount.textContent = state.votes;
  renderTasks();
  renderRanks();
  renderPrizePool();
  renderBlindPrizePool();
  renderDailyPrizePool();
  renderHealthTasks();
  renderMap();
  renderProducts();
}

function showToast(message) {
  toast.classList.remove("is-energy");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function showEnergyToast(gain) {
  toast.classList.add("is-energy");
  toast.innerHTML = `
    <span class="energy-toast-figure" aria-hidden="true"></span>
    <span class="energy-toast-card">
      <span class="energy-toast-main">
        <b>健康能量值增加</b>
        <i>能</i>
        <em>+${gain}</em>
      </span>
      <small>小队大奖进度同步提升</small>
    </span>
  `;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("show", "is-energy");
    toast.textContent = "";
  }, 1900);
}

function renderTasks() {
  const taskPreview = $("#taskPreview");
  if (!taskPreview) return;
  taskPreview.innerHTML = state.tasks.slice(0, 4).map(task => `
    <button class="task-chip" data-task="${task.id}" ${task.done ? "disabled" : ""}>
      <b>${task.title}</b>
      <span>${task.done ? "已完成" : `+${task.reward}次`}</span>
    </button>
  `).join("");
}

function renderRanks() {
  const holder = $("#rankPreview");
  if (!holder) return;
  const sortedRanks = [...state.ranks].sort((a, b) => b.votes - a.votes);
  holder.innerHTML = sortedRanks.map((item, index) => `
    <article class="team-card">
      <div class="team-cover">
        <img src="${item.image}" alt="" />
      </div>
      <h3>${item.name}</h3>
      <strong>${item.votes.toFixed(1)}万票</strong>
      <div class="team-actions">
        <button class="assist-btn" data-toast="已模拟为${item.name}助力10票">助力投10票</button>
        <button class="primary-btn" data-vote="${item.name}">投一票</button>
      </div>
    </article>
  `).join("");
}

function renderPrizePool() {
  const rail = $("#heroPrizeRail");
  if (!rail) return;
  rail.innerHTML = state.prizePool.map(item => `
    <button class="prize-item" data-sheet="prizes">
      <img src="${item.image}" alt="" />
      <span>${item.name}</span>
    </button>
  `).join("");
}

function renderBlindPrizePool() {
  const rail = $("#blindPrizePool");
  if (!rail) return;
  rail.innerHTML = state.blindPrizePool.map(item => `
    <article class="blind-prize is-${item.type}">
      ${item.badge ? `<strong>${item.badge}</strong>` : ""}
      <span class="blind-prize-icon" aria-hidden="true"><img src="${item.image}" alt="" /></span>
      <b>${item.name}</b>
      ${item.desc ? `<em>${item.desc}</em>` : ""}
    </article>
  `).join("");
}

function renderDailyPrizePool() {
  const rail = $("#dailyPrizePool");
  if (!rail) return;
  rail.innerHTML = state.dailyPrizePool.map(item => `
    <article class="daily-prize is-${item.icon}">
      <span aria-hidden="true"><img src="${item.image}" alt="" /></span>
      <b>${item.name}</b>
    </article>
  `).join("");
}

function allDailyTasksDone() {
  return state.dailyTasks.every(task => task.done);
}

function dailyCheckinUnlocked() {
  return state.dailyTasks.filter(task => task.done).length >= 3;
}

function renderHealthTasks() {
  const list = $("#healthTaskList");
  if (!list) return;
  const isDaily = state.taskMode === "daily";
  const source = isDaily ? state.dailyTasks : state.rushTasks;
  const visibleTasks = isDaily && !state.dailyExpanded ? source.slice(0, 3) : source;
  const title = $("#healthTaskTitle");
  const desc = $("#healthTaskDesc");
  const toggle = $("#healthTaskToggle");
  const score = $("#myHealthScore");
  const rank = $("#myHealthRank");
  const progress = $("#healthTaskProgress");
  const tip = $("#healthTaskTip");
  const dailyDoneCount = state.dailyTasks.filter(task => task.done).length;

  if (score) score.textContent = state.healthScore;
  if (rank) rank.textContent = typeof state.healthRank === "number" ? `第 ${state.healthRank} 名` : state.healthRank;
  if (progress) progress.textContent = `${Math.min(dailyDoneCount, 3)}/3`;
  if (tip) {
    const tipText = tip.querySelector("em");
    if (tipText) {
      tipText.textContent = isDaily
        ? "每周一0点开启新一轮健康值积累任务，每周日晚10点公布排名及中奖名单"
        : "继续做冲榜任务，提升本周健康值排名";
    }
  }
  if (title) title.textContent = isDaily ? "每日打卡任务" : "冲榜任务列表";
  if (desc) desc.textContent = isDaily
    ? "完成当日打卡任务，即可免费开启当日健康盲盒。"
    : "继续做冲榜任务，提升本周健康值排名。";
  if (toggle) {
    toggle.hidden = !isDaily;
    toggle.textContent = state.dailyExpanded ? "收起" : "展开";
  }

  list.innerHTML = visibleTasks.map(task => `
    <article class="health-task-card ${task.done ? "is-done" : ""}">
      <span class="health-task-icon" aria-hidden="true"></span>
      <div>
        <h3>${task.title}</h3>
        <p>${task.desc}</p>
      </div>
      <strong>${task.reward}</strong>
      <button data-health-task="${task.id}" ${task.done ? "disabled" : ""}>${task.done ? "已完成" : task.action}</button>
    </article>
  `).join("");
}

function renderMap() {
  if (!state.mapIcons) {
    state.mapIcons = mapTiles.map((_, index) => {
      if (index === 0) return "start";
      if ([4, 10, 17, 25, 31].includes(index)) return "chest";
      if ([2, 6, 12, 15, 20, 23, 28].includes(index)) return "energy";
      return "question";
    });
  }
  mapTiles.forEach((tile, index) => {
    const icon = state.mapIcons[index];
    const [left, top] = routePositions[index % routePositions.length];
    tile.style.left = `${left}px`;
    tile.style.top = `${top}px`;
    if (icon === "start") {
      tile.dataset.icon = icon;
      tile.textContent = "起点";
      return;
    }
    tile.dataset.icon = icon;
    tile.textContent = "";
  });
  renderPlayers();
  focusCurrentPlayer();
}

function renderPlayers() {
  const holder = $("#mapPlayers");
  if (!holder) return;
  holder.innerHTML = state.players.map((player, index) => {
    const [left, top] = routePositions[player.index % routePositions.length];
    return `<span class="map-player ${index === state.currentPlayer ? "is-current" : ""}" data-name="${player.name}" style="left:${left + 12}px;top:${top - 22}px;--player-color:${player.color}"></span>`;
  }).join("");
}

function focusCurrentPlayer() {
  if (!mapViewport) return;
  const current = state.players[state.currentPlayer];
  const [left] = routePositions[current.index % routePositions.length];
  const targetLeft = Math.max(0, Math.min(left - 160, 900 - 375));
  mapViewport.scrollTo({ left: targetLeft, behavior: "smooth" });
}

function renderProducts() {
  $$(".feed-tabs button").forEach(button => {
    button.classList.toggle("active", button.dataset.feedTab === state.feedTab);
  });
  const list = state.feedTab === "推荐" ? state.products.slice(0, 4) : state.products.filter(item => item.category === state.feedTab);
  $("#productList").innerHTML = list.map(item => `
    <article class="product-card">
      <div class="feed-img">
        <img src="${item.image}" alt="" />
        <span class="feed-badge">${item.badge}</span>
      </div>
      <div class="feed-copy">
        <h3>${item.name}</h3>
        <p class="feed-meta">${item.sales}</p>
      </div>
      <div class="feed-buy">
        <div class="feed-price">
          <strong>${item.price}</strong>
          <span>${item.save}</span>
        </div>
        <button data-toast="已模拟抢购 ${item.name}">抢</button>
      </div>
      ${item.store ? `<div class="feed-store"><span>${item.store}</span><button data-toast="已模拟进店">进店逛逛 &gt;</button></div>` : ""}
    </article>
  `).join("");
}

function completeTask(id) {
  const task = state.tasks.find(item => item.id === id);
  if (!task || task.done) return;
  task.done = true;
  state.chances += task.reward;
  if (id === "weight") {
    state.calories += 120;
    state.votes += 2;
  }
  showToast(`获得前进次数 +${task.reward}`);
  sync();
  if (sheetMask.classList.contains("show") && sheet.dataset.type === "tasks") openSheet("tasks");
}

function completeHealthTask(id) {
  const list = state.taskMode === "daily" ? state.dailyTasks : state.rushTasks;
  const task = list.find(item => item.id === id);
  if (!task || task.done) return;
  task.done = true;
  state.healthScore += task.reward;
  if (state.healthScore >= 500 && typeof state.healthRank === "number") {
    state.healthRank = Math.max(1, state.healthRank - 1);
  }
  showToast(`${task.title}完成，健康值 +${task.reward}`);
  sync();
}

function openBlindBox() {
  if (state.healthScore < 100) {
    showToast("健康值不足，做任务赚到100后可抽奖");
    return;
  }
  state.healthScore -= 100;
  if (typeof state.healthRank === "number") {
    state.healthRank += 1;
  }
  const prize = ["节目现场门票", "京东京豆 +30", "健康免单卡 ¥50", "节目周边水杯", "健康服务优惠券"][Math.floor(Math.random() * 5)];
  state.prizes.push(prize);
  showToast(`消耗100健康值，抽中${prize}`);
  sync();
}

function pickDrawResult() {
  const roll = Math.random();
  if (roll < .18) return { type: "none", title: "未中奖", desc: "差一点点，继续做任务赚次数再前进吧。" };
  if (roll < .46) {
    const amount = Math.floor(Math.random() * 100) + 1;
    return { type: "coupon", title: `健康免单券 ${amount}元`, desc: `恭喜获得 ${amount} 元健康免单券。` };
  }
  if (roll < .7) return { type: "coupon", title: "健康优惠券", desc: "恭喜获得健康优惠券，可用于健康商品补给。" };
  if (roll < .82) return { type: "ticket", title: "节目现场门票", desc: "大奖掉落！获得节目现场门票资格。" };
  const merch = ["哥哥同款水杯", "哥哥同款背包", "哥哥同款帽子", "哥哥同款冰袖"];
  const item = merch[Math.floor(Math.random() * merch.length)];
  return { type: "merch", title: item, desc: `恭喜获得节目周边：${item}。` };
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function advancePerson(steps) {
  const player = state.players[state.currentPlayer];
  for (let step = 0; step < steps; step += 1) {
    player.index = (player.index + 1) % routePositions.length;
    renderPlayers();
    focusCurrentPlayer();
    await sleep(260);
  }
}

function handleTileEvent() {
  const player = state.players[state.currentPlayer];
  const icon = state.mapIcons[player.index];
  if (icon === "energy") {
    const gain = 50;
    state.teamEnergy = Math.min(state.energyGoal, state.teamEnergy + gain);
    closePrizeResult();
    showEnergyToast(gain);
    return;
  }
  if (icon === "chest") {
    showPrizeResult(pickDrawResult());
    return;
  }
  closePrizeResult();
  showToast("触发问号事件，玩法待定");
}

function showPrizeResult(result) {
  $("#prizeTitle").textContent = result.title;
  $("#prizeDesc").textContent = result.desc;
  drawMask.classList.remove("rolling");
  drawMask.classList.add("result");
  if (result.type !== "none") state.prizes.push(result.title);
}

function closePrizeResult() {
  drawMask.classList.remove("show", "rolling", "result");
  drawMask.setAttribute("aria-hidden", "true");
}

async function drawPrize() {
  if (state.drawing) return;
  if (state.chances < 1) {
    showToast("前进次数不足，先做任务赚次数");
    return;
  }
  state.drawing = true;
  state.chances -= 1;
  sync();
  const steps = Math.floor(Math.random() * 6) + 1;
  drawMask.classList.remove("result");
  drawMask.classList.add("show", "rolling");
  drawMask.setAttribute("aria-hidden", "false");
  await sleep(900);
  await advancePerson(steps);
  await sleep(220);
  drawMask.classList.remove("rolling");
  handleTileEvent();
  sync();
  state.drawing = false;
}

function voteFor(name, refreshSheet = false) {
  if (state.votes <= 0 || state.calories < 50) {
    showToast("票数或卡路里不足，先上传体重参与减重活动");
    return;
  }
  const target = state.ranks.find(item => item.name === name);
  target.votes += 0.1;
  state.votes -= 1;
  state.calories -= 50;
  showToast(`已为 ${name} 投票`);
  sync();
  if (refreshSheet) openSheet("vote");
}

function header(title) {
  return `
    <div class="sheet-head">
      <h2>${title}</h2>
      <button class="icon-btn" data-close aria-label="关闭"><svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
    </div>
  `;
}

function taskSheetContent() {
  return `
    <button class="task-sheet-close" data-close aria-label="关闭">
      <svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>
    <div class="task-sheet-body">
      <div class="task-sheet-head">
        <h2>做任务赚次数</h2>
        <p>任务每日更新</p>
      </div>
      <div class="task-sheet-list">
        ${state.tasks.map((task, index) => `
          <article class="game-task-row">
            <span class="game-task-icon" aria-hidden="true">${["邀", "逛", "档", "签", "硬", "康", "同", "秤", "诊", "买", "店", "藏", "S"][index] || "任"}</span>
            <div class="game-task-copy">
              <h3>${task.title}</h3>
              <p><i></i><span>${task.desc}</span><b>+${task.reward}次前进</b></p>
            </div>
            <button
              class="game-task-btn ${task.done ? "is-disabled" : task.tone === "secondary" ? "is-secondary" : ""}"
              data-task="${task.id}"
              ${task.done ? "disabled" : ""}
            >${task.done ? "已完成" : task.action}</button>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function prizeSheetContent() {
  return `
    <button class="prize-sheet-close" data-close aria-label="关闭">
      <svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>
    <div class="prize-sheet-body">
      <div class="prize-sheet-head">
        <h2>我的奖品</h2>
        <p>奖品到账可能延迟</p>
      </div>
      <div>
        <div class="prize-sheet-list">
          ${myPrizeItems.map(item => `
            <article class="prize-sheet-row">
              <span class="prize-sheet-icon" aria-hidden="true">
                <img src="${item.iconImage}" alt="">
              </span>
              <div class="prize-sheet-copy">
                <h3>${item.title}</h3>
                <b>${item.value}${item.desc ? ` <small>${item.desc}</small>` : ""}</b>
                <small>${item.time}</small>
              </div>
              <div class="prize-sheet-action">
                <button data-toast="已模拟${item.action}：${item.title}">${item.action}</button>
                <small>${item.status}</small>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function openSheet(type) {
  sheet.dataset.type = type;
  sheetMask.dataset.type = type;
  sheet.innerHTML = sheetContent(type);
  sheetMask.classList.add("show");
  sheetMask.setAttribute("aria-hidden", "false");
}

function closeSheet() {
  sheetMask.classList.remove("show");
  sheetMask.setAttribute("aria-hidden", "true");
  delete sheetMask.dataset.type;
  delete sheet.dataset.type;
  sheet.innerHTML = "";
}

function sheetContent(type) {
  if (type === "tasks") {
    return taskSheetContent();
  }
  if (type === "prizes") {
    return prizeSheetContent();
  }
  if (type === "vote") {
    return `${header("投票互动")}
      <div class="sheet-list">
        <article class="sheet-card"><h3>为哥哥打CALL</h3><p>票数第一的队伍赢生存礼包，每 50 卡路里可投 1 票。</p></article>
        ${[...state.ranks].sort((a, b) => b.votes - a.votes).map(item => `
          <article class="sheet-card">
            <h3>${item.name}</h3>
            <p>${item.votes.toFixed(1)} 万票，第一名获得生存礼包。</p>
            <button class="primary-btn" data-vote="${item.name}">投一票</button>
          </article>
        `).join("")}
        <article class="sheet-card"><h3>成团夜舞台投票</h3><p>五公公演结束后开启，排名第一舞台将在成团夜由 joy 颁奖。</p></article>
      </div>`;
  }
  if (type === "liveDrop") {
    return `${header("直播整点掉落")}
      <div class="sheet-list">
        <article class="sheet-card"><h3>1 分钱买哥哥同款</h3><p>直播期间主持人口播引导打开健康 App，整点进入可抢 1 分钱同款商品。</p><button class="primary-btn" data-toast="已模拟进入 1 分钱同款">立即进入</button></article>
        <article class="sheet-card"><h3>随机掉落</h3><p>整点打开后随机掉落免单卡或节目现场门票。</p><button class="primary-btn" data-drop>模拟掉落</button></article>
      </div>`;
  }
  if (type === "quiz") {
    return `${header("舞台续航力测试")}
      <div class="sheet-list">
        ${["舞台续航王", "养生控场官", "熬夜修复师", "健康气氛组"].map(name => `
          <article class="sheet-card"><h3>${name}</h3><p>回答健康问题后生成可分享海报，带来裂变传播。</p><button class="primary-btn" data-toast="已生成${name}海报">生成海报</button></article>
        `).join("")}
      </div>`;
  }
  if (type === "team") {
    return `${header("组队抽盲盒")}
      <article class="sheet-card"><h3>竞猜公演节目第一名</h3><p>用户可发起组队，每队最多 5 人；猜中队伍获得九宫格盲盒抽奖资格。</p></article>
      <div class="grid-9">${["免单", "京豆", "门票", "优惠券", "周边", "谢谢", "补给", "同款", "盲盒"].map(item => `<span>${item}</span>`).join("")}</div>
      <button class="primary-btn" data-toast="已模拟发起组队" style="width:100%;margin-top:12px;">发起组队</button>`;
  }
  if (type === "rules") {
    return `${header("活动规则")}
      <div class="sheet-list">
        <article class="sheet-card"><h3>小队前进</h3><p>完成任务获得前进次数，点击前进后玩家移动 1-6 步。</p></article>
        <article class="sheet-card"><h3>地图格子</h3><p>积分格增加小队健康能量值；宝箱格触发中奖结果；问号格为待定事件。</p></article>
        <article class="sheet-card"><h3>投票</h3><p>投票消耗减重活动卡路里，每天需上传体重获取参与资格。</p></article>
      </div>`;
  }
  return header("健康能量岛");
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;
  if (target.dataset.close !== undefined) return closeSheet();
  if (target.dataset.closePrize !== undefined) return closePrizeResult();
  if (target.dataset.sheet) return openSheet(target.dataset.sheet);
  if (target.dataset.toast) return showToast(target.dataset.toast);
  if (target.dataset.blindBox !== undefined) return openBlindBox();
  if (target.dataset.healthTask) return completeHealthTask(target.dataset.healthTask);
  if (target.dataset.toggleHealthTasks !== undefined) {
    state.dailyExpanded = !state.dailyExpanded;
    renderHealthTasks();
    return;
  }
  if (target.dataset.task) return completeTask(target.dataset.task);
  if (target.dataset.vote) return voteFor(target.dataset.vote, sheet.contains(target));
  if (target.dataset.draw !== undefined) return drawPrize();
  if (target.dataset.feedTab) {
    state.feedTab = target.dataset.feedTab;
    renderProducts();
    return;
  }
  if (target.dataset.jump) {
    $(`#${target.dataset.jump}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  if (target.dataset.drop !== undefined) {
    const prize = Math.random() > .5 ? "健康免单券" : "节目现场门票";
    state.prizes.push(prize);
    showToast(`掉落：${prize}`);
    sync();
  }
});

document.addEventListener("change", (event) => {
  const target = event.target.closest("[data-subscribe-rain]");
  if (!target) return;
  const label = target.closest(".subscribe-switch")?.querySelector("em");
  if (label) label.textContent = target.checked ? "已订阅" : "未订阅";
  showToast(target.checked ? "已开启整点红包雨提醒" : "已关闭整点红包雨提醒");
});

$("#drawBtn")?.addEventListener("click", drawPrize);
sheetMask.addEventListener("click", (event) => {
  if (event.target === sheetMask) closeSheet();
});

drawMask.addEventListener("click", (event) => {
  if (event.target === drawMask && drawMask.classList.contains("result")) closePrizeResult();
});

setInterval(() => {
  if (state.drawing || drawMask.classList.contains("show")) return;
  const teammate = state.players[1 + Math.floor(Math.random() * (state.players.length - 1))];
  teammate.index = (teammate.index + 1) % routePositions.length;
  renderPlayers();
}, 3600);

sync();

const params = new URLSearchParams(window.location.search);
if (params.get("sheet")) openSheet(params.get("sheet"));
