import type {StructureDataItem} from '@/types'

export const structures: StructureDataItem[] = [
  // 主世界
  {
    name: '废弃传送门',
    category: '主世界',
    image: 'https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/70/Overworld_Giant_Ruined_Portal_1.png/revision/latest/scale-to-width-down/150',
    shortDescription: '由黑曜石、哭泣的黑曜石和石头的变种组成，包含金块和战利品箱子',
    description: `<p>废弃传送门(Ruined Portal)是主世界中随机生成的损坏的下界传送门结构，由黑曜石、哭泣的黑曜石和各种石头变种组成。</p>
<h3>生成</h3>
<p>废弃传送门生成于：</p>
<ul>
  <li>所有主世界生物群系，包括地下和海洋</li>
  <li>有概率生成于地下（Y=15-45）或地表</li>
  <li>有些传送门框架会平置在地面，像是倒塌了一样</n  <li>框架完整性随机，有些完全损坏无法使用</li>
</ul>
<h3>结构组成</h3>
<p>废弃传送门包含：</p>
<ul>
  <li>黑曜石和哭泣的黑曜石构成的框架</li>
  <li>石头、磨制安山岩等石质方块</li>
  <li>金块（作为装饰）</li>
  <li>战利品箱子，包含金质物品、工具等</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/废弃传送门',
    images: [
      'https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/d/d7/Overworld_Giant_Ruined_Portal_2.png/revision/latest/scale-to-width-down/150',
      'https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/98/Overworld_Giant_Ruined_Portal_3.png/revision/latest/scale-to-width-down/150',
      'https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/f8/Overworld_Ruined_Portal_2.png/revision/latest/scale-to-width-down/150',
      'https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/3f/Overworld_Ruined_Portal_7.png/revision/latest/scale-to-width-down/150',
      'https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/f5/Overworld_Ruined_Portal_8.png/revision/latest/scale-to-width-down/150',
      'https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/2c/Overworld_Ruined_Portal_10.png/revision/latest/scale-to-width-down/150',
    ]
  },
  // 地下结构
  {
    name: '远古城市',
    category: '地下结构',
    image: 'https://zh.minecraft.wiki/images/thumb/Ancient_City_JE1.png/250px-Ancient_City_JE1.png',
    shortDescription: '一种延伸很广的城池状结构，建筑主体是深板岩及其变种方块',
    description: `<p>远古城市(Ancient City)是一种庞大的地下城池结构，位于深暗之域生物群系中，由深板岩及其变种方块构成，是游戏中最神秘的结构之一。</p>
<h3>生成</h3>
<p>远古城市生成于：</p>
<ul>
  <li>深暗之域(Deep Dark)生物群系</li>
  <li>Y=-51层附近的大型洞穴系统中</li>
  <li>通常在大型洞穴系统的中心位置</li>
  <li>每个深暗之域可能生成0-1个远古城市</li>
</ul>
<h3>结构组成</h3>
<p>远古城市的特点：</p>
<ul>
  <li>建筑主体：深板岩、深板岩砖、深板岩瓦、深板岩楼梯等</li>
  <li>地面：灰羊毛地毯、灵魂火、灵魂灯笼</li>
  <li>灵魂沙和灵魂土道路</li>
  <li>强化深板岩框架（不可破坏）</li>
  <li>多个战利品箱子，包含独特物品如迅捷潜行附魔书</li>
  <li>中心有神秘的强化深板岩结构</li>
</ul>
<h3>危险</h3>
<p>探索远古城市需要格外小心：</p>
<ul>
  <li>遍布潜声传感器、潜声尖啸和潜声催化器</li>
  <li>触发过多声音会召唤监守者</li>
  <li>建议潜行移动，避免发出声音</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/远古城市'
  },
  {
    name: '埋藏的宝藏',
    category: '地下结构',
    image: 'https://zh.minecraft.wiki/images/thumb/Buried_Treasure_JE1.png/250px-Buried_Treasure_JE1.png',
    shortDescription: '包含战利品的箱子，可通过藏宝图定位',
    description: `<p>埋藏的宝藏(Buried Treasure)是一种小型地下结构，包含一个装有珍贵战利品的箱子，只能通过藏宝图找到。</p>
<h3>生成</h3>
<p>埋藏的宝藏生成于：</p>
<ul>
  <li>沙滩、积雪沙滩、石岸等海岸生物群系</li>
  <li>通常埋在沙子或沙砾下方</li>
  <li>生成位置随机，但可通过藏宝图定位</li>
</ul>
<h3>获取藏宝图</h3>
<p>藏宝图的获取方式：</p>
<ul>
  <li>沉船的箱子中有概率找到</li>
  <li>海底废墟的箱子中有概率找到</li>
  <li>与制图师村民交易获得</li>
</ul>
<h3>战利品</h3>
<p>埋藏宝藏的箱子包含：</p>
<ul>
  <li>海洋之心（制作潮涌核心的关键材料）</li>
  <li>铁锭、金锭、钻石</li>
  <li>熟鱼、皮革、TNT等</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/埋藏的宝藏'
  },
  {
    name: '废弃矿井',
    category: '地下结构',
    image: 'https://zh.minecraft.wiki/images/thumb/Mineshaft_JE1.png/250px-Mineshaft_JE1.png',
    shortDescription: '包含长长的走道，其上有铁轨，有时铁轨上有运输矿车',
    description: `<p>废弃矿井(Abandoned Mineshaft)是一种庞大的地下结构，由木质支架、铁轨和矿车组成，是寻找资源和刷怪的好地方。</p>
<h3>生成</h3>
<p>废弃矿井生成于：</p>
<ul>
  <li>所有主世界生物群系的地下</li>
  <li>在恶地生物群系中更常见，且更接近地表</li>
  <li>恶地中的矿井使用深色橡木木板而非橡木木板</li>
  <li>可能与其他结构（如要塞）相交</li>
</ul>
<h3>结构组成</h3>
<p>废弃矿井包含：</p>
<ul>
  <li>橡木木板/深色橡木木板支架</li>
  <li>铁轨和运输矿车</li>
  <li>蜘蛛网覆盖的区域</li>
  <li>洞穴蜘蛛刷怪笼</li>
  <li>战利品箱子</li>
</ul>
<h3>危险</h3>
<p>探索废弃矿井需要注意：</p>
<ul>
  <li>洞穴蜘蛛刷怪笼会生成敌对洞穴蜘蛛</li>
  <li>洞穴蜘蛛攻击会造成中毒效果</li>
  <li>建议携带牛奶解毒</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/废弃矿井'
  },
  {
    name: '要塞',
    category: '地下结构',
    image: 'https://zh.minecraft.wiki/images/thumb/Stronghold_JE1.png/250px-Stronghold_JE1.png',
    shortDescription: '石砖构成的有许多房间的结构，包含末地传送门房间',
    description: `<p>要塞(Stronghold)是一种庞大的地下结构，由石砖构成，包含多个房间和走廊，是前往末地的必经之路。</p>
<h3>生成</h3>
<p>要塞生成于：</p>
<ul>
  <li>所有主世界生物群系的地下</li>
  <li>Y=0至Y=63之间</li>
  <li>Java版每个世界最多生成128个要塞</li>
  <li>可使用末影之眼定位</li>
</ul>
<h3>结构组成</h3>
<p>要塞包含多种房间：</p>
<ul>
  <li>末地传送门房间：包含末地传送门和蠹虫刷怪笼</li>
  <li>图书馆：包含书架和箱子</li>
  <li>祭坛房间：空房间</li>
  <li>储藏室：包含箱子和熔炉</li>
  <li>监狱：铁栏杆围成的牢房</li>
  <li>楼梯间：连接不同楼层</li>
</ul>
<h3>重要用途</h3>
<p>要塞的重要性：</p>
<ul>
  <li>末地传送门是前往末地的唯一方式</li>
  <li>图书馆可能包含珍贵附魔书</li>
  <li>箱子中有各种有用的战利品</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/要塞'
  },
  {
    name: '古迹废墟',
    category: '地下结构',
    image: 'https://zh.minecraft.wiki/images/thumb/Trail_Ruins_JE1.png/250px-Trail_Ruins_JE1.png',
    shortDescription: '一种被掩埋的陶瓦建筑群',
    description: `<p>古迹废墟(Trail Ruins)是一种1.20版本加入的地下结构，是被掩埋的古代陶瓦建筑群，可以通过考古发现珍贵的锻造模板。</p>
<h3>生成</h3>
<p>古迹废墟生成于：</p>
<ul>
  <li>针叶林、原始针叶林、原始桦木森林等生物群系</li>
  <li>通常被泥土、沙砾和陶瓦掩埋</li>
  <li>结构部分或完全埋在地下</li>
</ul>
<h3>结构组成</h3>
<p>古迹废墟包含：</p>
<ul>
  <li>各种颜色的陶瓦方块</li>
  <li>泥土和沙砾层</li>
  <li>可疑的沙砾（可用刷子考古）</li>
  <li>战利品箱子</li>
</ul>
<h3>考古发现</h3>
<p>古迹废墟的独特价值：</p>
<ul>
  <li>可疑的沙砾中包含锻造模板碎片</li>
  <li>可发现音乐唱片残片</li>
  <li>陶瓦图案具有考古价值</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/古迹废墟'
  },
  // 地上结构
  {
    name: '沙漠神殿',
    category: '地上结构',
    image: 'https://zh.minecraft.wiki/images/thumb/Desert_Temple_JE1.png/250px-Desert_Temple_JE1.png',
    shortDescription: '由砂岩组成的大型建筑物，下方有TNT陷阱和战利品箱子',
    description: `<p>沙漠神殿(Desert Pyramid)是一种生成于沙漠生物群系的地上结构，由砂岩构成，内部藏有珍贵的战利品，但也设有危险的TNT陷阱。</p>
<h3>生成</h3>
<p>沙漠神殿生成于：</p>
<ul>
  <li>沙漠、沙漠丘陵生物群系</li>
  <li>地表生成</li>
  <li>每个沙漠生物群系可能生成多个</li>
</ul>
<h3>结构组成</h3>
<p>沙漠神殿的结构：</p>
<ul>
  <li>外部：砂岩、錾制砂岩、平滑砂岩构成金字塔形状</li>
  <li>入口：蓝色陶瓦标记</li>
  <li>内部：下降竖井通向中央房间</li>
  <li>陷阱：压力板触发9个TNT</li>
  <li>战利品：4个箱子，包含金苹果、附魔书、钻石等</li>
</ul>
<h3>探索技巧</h3>
<p>安全获取战利品：</p>
<ul>
  <li>从顶部挖开进入，避开压力板</li>
  <li>或者小心拆除压力板后再取箱子</li>
  <li>触发TNT会炸毁所有战利品</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/沙漠神殿'
  },
  {
    name: '雪屋',
    category: '地上结构',
    image: 'https://zh.minecraft.wiki/images/thumb/Igloo_JE1.png/250px-Igloo_JE1.png',
    shortDescription: '由雪和冰组成的建筑物，有概率带有地下室',
    description: `<p>雪屋(Igloo)是一种生成于雪地生物群系的地上结构，由雪块构成，外观可爱，有50%概率包含一个有用的地下室。</p>
<h3>生成</h3>
<p>雪屋生成于：</p>
<ul>
  <li>积雪的平原、积雪的针叶林等雪地生物群系</li>
  <li>地表生成</li>
  <li>50%概率带有地下室</li>
</ul>
<h3>结构组成</h3>
<p>雪屋的结构：</p>
<ul>
  <li>外部：雪块圆顶，冰窗户</li>
  <li>内部：床、熔炉、工作台、红石火把</li>
  <li>地下室（如有）：石砖楼梯通向地下</li>
</ul>
<h3>地下室内容</h3>
<p>雪屋地下室包含：</p>
<ul>
  <li>一个被铁栏杆困住的村民</li>
  <li>一个被铁栏杆困住的僵尸村民</li>
  <li>战利品箱子：金苹果、喷溅型虚弱药水</li>
  <li>这些物品可用于治愈僵尸村民</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/雪屋',
    images: [
      'https://zh.minecraft.wiki/images/thumb/Igloo_JE1.png/250px-Igloo_JE1.png',
      'https://zh.minecraft.wiki/images/thumb/Igloo_Basement_JE1.png/250px-Igloo_Basement_JE1.png'
    ]
  },
  {
    name: '丛林神庙',
    category: '地上结构',
    image: 'https://zh.minecraft.wiki/images/thumb/Jungle_Temple_JE1.png/250px-Jungle_Temple_JE1.png',
    shortDescription: '由圆石和苔石组成的建筑物，内有陷阱和战利品',
    description: `<p>丛林神庙(Jungle Pyramid)是一种生成于丛林生物群系的地上结构，由圆石和苔石构成，内部设有谜题和陷阱，包含两个战利品箱子。</p>
<h3>生成</h3>
<p>丛林神庙生成于：</p>
<ul>
  <li>丛林、竹林、稀疏丛林生物群系</li>
  <li>地表生成</li>
  <li>被丛林树木和藤蔓环绕</li>
</ul>
<h3>结构组成</h3>
<p>丛林神庙的结构：</p>
<ul>
  <li>外部：圆石和苔石构成的金字塔</li>
  <li>内部：三层结构，设有机关</li>
  <li>陷阱：绊线连接的发射器，会发射箭</li>
  <li>谜题房间：需要按正确顺序拉下杠杆才能开门</li>
</ul>
<h3>战利品</h3>
<p>丛林神庙包含两个战利品箱子：</p>
<ul>
  <li>陷阱房间箱子：骨头、箭、装备等</li>
  <li>谜题房间箱子：金锭、钻石、马铠、附魔书等</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/丛林神庙'
  },
  {
    name: '掠夺者前哨站',
    category: '地上结构',
    image: 'https://zh.minecraft.wiki/images/thumb/Pillager_Outpost_JE1.png/250px-Pillager_Outpost_JE1.png',
    shortDescription: '高大的木质和圆石建筑物，会生成掠夺者和战利品箱子',
    description: `<p>掠夺者前哨站(Pillager Outpost)是一种生成于多种生物群系的地上结构，是掠夺者的据点，会不断生成掠夺者。</p>
<h3>生成</h3>
<p>掠夺者前哨站生成于：</p>
<ul>
  <li>平原、沙漠、热带草原、针叶林、积雪的针叶林等生物群系</li>
  <li>地表生成</li>
  <li>每个生物群系可能生成多个</li>
  <li>不会生成在村庄附近</li>
</ul>
<h3>结构组成</h3>
<p>掠夺者前哨站的结构：</p>
<ul>
  <li>主体：深色橡木原木和圆石构成的高塔</li>
  <li>顶部：掠夺者旗帜和瞭望台</li>
  <li>周围：帐篷、稻草人等装饰</li>
  <li>笼子：有时关押着铁傀儡</li>
  <li>战利品箱子</li>
</ul>
<h3>危险</h3>
<p>探索掠夺者前哨站：</p>
<ul>
  <li>会不断生成掠夺者（包括巡逻队）</li>
  <li>击败携带不祥之兆的队长会触发袭击</li>
  <li>建议充分准备后再前往</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/掠夺者前哨站'
  },
  {
    name: '沼泽小屋',
    category: '地上结构',
    image: 'https://zh.minecraft.wiki/images/thumb/Swamp_Hut_JE1.png/250px-Swamp_Hut_JE1.png',
    shortDescription: '小的木质建筑物，包含一个炼药锅，会生成女巫和黑猫',
    description: `<p>沼泽小屋(Swamp Hut)是一种生成于沼泽生物群系的小型结构，是女巫的居所，会生成女巫和黑猫。</p>
<h3>生成</h3>
<p>沼泽小屋生成于：</p>
<ul>
  <li>沼泽、红树林沼泽生物群系</li>
  <li>通常生成在沼泽的水边</li>
  <li>结构较小但容易识别</li>
</ul>
<h3>结构组成</h3>
<p>沼泽小屋的结构：</p>
<ul>
  <li>外部：云杉木木板和橡木原木</li>
  <li>内部：工作台、炼药锅、花盆</li>
  <li>会生成女巫和黑猫</li>
  <li>炼药锅通常是满的</li>
</ul>
<h3>用途</h3>
<p>沼泽小屋的利用：</p>
<ul>
  <li>女巫会掉落红石、萤石粉、火药等炼药材料</li>
  <li>可以改造成女巫农场</li>
  <li>黑猫可以驯服为宠物</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/沼泽小屋'
  },
  {
    name: '村庄',
    category: '地上结构',
    image: 'https://zh.minecraft.wiki/images/thumb/Village_JE1.png/250px-Village_JE1.png',
    shortDescription: '一组会生成村民的建筑物，是重要的交易和庇护场所',
    description: `<p>村庄(Village)是一种重要的地上结构，由多种建筑组成，居住着村民，是玩家进行交易、获取资源和寻求庇护的重要场所。</p>
<h3>生成</h3>
<p>村庄生成于：</p>
<ul>
  <li>平原、沙漠、热带草原、针叶林、积雪的平原、积雪的针叶林生物群系</li>
  <li>不同生物群系有不同风格的建筑</li>
  <li>规模从几栋到几十栋建筑不等</li>
</ul>
<h3>建筑类型</h3>
<p>村庄包含多种建筑：</p>
<ul>
  <li>住宅：村民居住的地方</li>
  <li>工作站：对应村民职业（如铁匠铺、图书馆、教堂等）</li>
  <li>会合点：钟所在的位置，村民聚集处</li>
  <li>农场：种植小麦、胡萝卜、马铃薯等</li>
  <li>动物围栏：圈养羊、牛等</li>
</ul>
<h3>重要性</h3>
<p>村庄的重要价值：</p>
<ul>
  <li>与村民交易获取稀有物品</li>
  <li>获取食物和资源</li>
  <li>庇护所和床</li>
  <li>铁傀儡保护</li>
  <li>可能受到袭击事件威胁</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/村庄'
  },
  {
    name: '林地府邸',
    category: '地上结构',
    image: 'https://zh.minecraft.wiki/images/thumb/Woodland_Mansion_JE1.png/250px-Woodland_Mansion_JE1.png',
    shortDescription: '巨大的深色橡木建筑物，有大量房间，会生成灾厄村民',
    description: `<p>林地府邸(Woodland Mansion)是一种庞大的地上结构，是灾厄村民的居所，包含大量房间和珍贵战利品，是游戏中最具挑战性的探索目标之一。</p>
<h3>生成</h3>
<p>林地府邸生成于：</p>
<ul>
  <li>黑森林生物群系</li>
  <li>距离出生点可能非常遥远</li>
  <li>可使用探险家地图定位</li>
  <li>每个世界生成数量有限</li>
</ul>
<h3>结构组成</h3>
<p>林地府邸的结构：</p>
<ul>
  <li>外部：深色橡木木板构成的大型建筑</li>
  <li>内部：超过50种不同类型的房间</li>
  <li>常见房间：卧室、图书馆、会议室、祭坛等</li>
  <li>隐藏房间：有些房间被隐藏，需要寻找秘密通道</li>
</ul>
<h3>敌对生物</h3>
<p>林地府邸的守卫：</p>
<ul>
  <li>卫道士：手持斧头的近战攻击者</li>
  <li>唤魔者：会召唤恼鬼的施法者</li>
  <li>恼鬼：小型飞行生物，能穿透墙壁</li>
</ul>
<h3>战利品</h3>
<p>珍贵的战利品：</p>
<ul>
  <li>不死图腾（唤魔者掉落）</li>
  <li>附魔金苹果</li>
  <li>各种附魔装备</li>
  <li>唱片和独特物品</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/林地府邸'
  },
  // 水下结构
  {
    name: '珊瑚礁',
    category: '水下结构',
    image: 'https://zh.minecraft.wiki/images/thumb/Coral_Reef_JE1.png/250px-Coral_Reef_JE1.png',
    shortDescription: '由许多成簇的珊瑚块、珊瑚和珊瑚扇组成',
    description: `<p>珊瑚礁(Coral Reef)是一种生成于暖水海洋生物群系的水下结构，由各种颜色的珊瑚组成，是游戏中最美丽的自然景观之一。</p>
<h3>生成</h3>
<p>珊瑚礁生成于：</p>
<ul>
  <li>暖水海洋生物群系</li>
  <li>通常生成在沙子上方</li>
  <li>与海底废墟和沉船相邻生成</li>
</ul>
<h3>珊瑚种类</h3>
<p>珊瑚礁包含多种珊瑚：</p>
<ul>
  <li>珊瑚块：管珊瑚、脑纹珊瑚、气泡珊瑚、火珊瑚、鹿角珊瑚</li>
  <li>每种珊瑚有五种颜色：蓝色、粉色、紫色、红色、黄色</li>
  <li>珊瑚扇：附在方块侧面的珊瑚</li>
  <li>海泡菜：发光的小型生物</li>
</ul>
<h3>特性</h3>
<p>珊瑚的特殊性质：</p>
<ul>
  <li>离开水会变成失活的灰色珊瑚</li>
  <li>会吸引热带鱼</li>
  <li>可用于装饰建筑</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/珊瑚礁'
  },
  {
    name: '海底神殿',
    category: '水下结构',
    image: 'https://zh.minecraft.wiki/images/thumb/Ocean_Monument_JE1.png/250px-Ocean_Monument_JE1.png',
    shortDescription: '由海晶石组成的大型建筑物，内有守卫者和远古守卫者',
    description: `<p>海底神殿(Ocean Monument)是一种庞大的水下结构，由海晶石构成，是守卫者和远古守卫者的居所，藏有丰富的宝藏。</p>
<h3>生成</h3>
<p>海底神殿生成于：</p>
<ul>
  <li>深海、冷水深海、温水深海生物群系</li>
  <li>深海中的大型平坦区域</li>
  <li>每个世界生成数量有限</li>
</ul>
<h3>结构组成</h3>
<p>海底神殿的结构：</p>
<ul>
  <li>外部：海晶石砖、暗海晶石构成的大型建筑</li>
  <li>内部：复杂的房间和走廊系统</li>
  <li>核心房间：藏有8个金块的海绵房间</li>
  <li>宝藏室：藏有湿海绵和金块</li>
</ul>
<h3>守卫者</h3>
<p>海底神殿的防御：</p>
<ul>
  <li>守卫者：普通守卫，使用激光攻击</li>
  <li>远古守卫者：更强的守卫，每个神殿3只</li>
  <li>远古守卫者会施加挖掘疲劳效果</li>
  <li>杀死远古守卫者会掉落湿海绵</li>
</ul>
<h3>战利品</h3>
<p>海底神殿的宝藏：</p>
<ul>
  <li>8个金块</li>
  <li>湿海绵（海绵房间）</li>
  <li>海晶碎片、海晶砂粒</li>
  <li>鱼（守卫者掉落）</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/海底神殿'
  },
  {
    name: '海底废墟',
    category: '水下结构',
    image: 'https://zh.minecraft.wiki/images/thumb/Ocean_Ruins_JE1.png/250px-Ocean_Ruins_JE1.png',
    shortDescription: '由石砖和砂岩等方块组成的结构，会生成溺尸',
    description: `<p>海底废墟(Ocean Ruins)是一种生成于海洋生物群系的水下结构，由石砖或砂岩构成，会生成溺尸，是寻找藏宝图的好地方。</p>
<h3>生成</h3>
<p>海底废墟生成于：</p>
<ul>
  <li>所有海洋生物群系</li>
  <li>冷水和冻洋使用石砖变体</li>
  <li>温水和暖水海洋使用砂岩变体</li>
  <li>通常以小群生成</li>
</ul>
<h3>结构组成</h3>
<p>海底废墟的结构：</p>
<ul>
  <li>冷水变体：石砖、裂石砖、苔石砖</li>
  <li>暖水变体：砂岩、錾制砂岩、平滑砂岩</li>
  <li>可疑的沙子（可用刷子考古）</li>
  <li>战利品箱子</li>
</ul>
<h3>战利品</h3>
<p>海底废墟的战利品：</p>
<ul>
  <li>藏宝图（指向埋藏的宝藏）</li>
  <li>钓鱼竿、附魔书</li>
  <li>食物、煤炭</li>
  <li>考古发现：陶片、锻造模板</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/海底废墟',
    images: [
      'https://zh.minecraft.wiki/images/thumb/Ocean_Ruins_JE1.png/250px-Ocean_Ruins_JE1.png',
      'https://zh.minecraft.wiki/images/thumb/Ocean_Ruins_Warm_JE1.png/250px-Ocean_Ruins_Warm_JE1.png'
    ]
  },
  {
    name: '沉船',
    category: '水下结构',
    image: 'https://zh.minecraft.wiki/images/thumb/Shipwreck_JE1.png/250px-Shipwreck_JE1.png',
    shortDescription: '木质结构，拥有各异的损毁程度，包含至多3个战利品箱子',
    description: `<p>沉船(Shipwreck)是一种生成于海洋生物群系和沙滩的水下结构，是失事的船只，包含珍贵的战利品和藏宝图。</p>
<h3>生成</h3>
<p>沉船生成于：</p>
<ul>
  <li>所有海洋生物群系</li>
  <li>沙滩生物群系</li>
  <li>有多种形态：直立、侧翻、倒立</li>
  <li>不同程度的损毁</li>
</ul>
<h3>结构组成</h3>
<p>沉船的结构：</p>
<ul>
  <li>船体：橡木木板、云杉木木板等</li>
  <li>桅杆：木质栅栏</li>
  <li>船尾：船舱区域</li>
  <li>宝箱区域：包含补给箱、地图箱、宝藏箱</li>
</ul>
<h3>战利品</h3>
<p>沉船包含三种箱子：</p>
<ul>
  <li>补给箱：食物、木板、工具等</li>
  <li>地图箱：藏宝图、纸、指南针</li>
  <li>宝藏箱：铁锭、金锭、绿宝石、钻石等</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/沉船',
    images: [
      'https://zh.minecraft.wiki/images/thumb/Shipwreck_JE1.png/250px-Shipwreck_JE1.png',
      'https://zh.minecraft.wiki/images/thumb/Shipwreck_Sideways_JE1.png/250px-Shipwreck_Sideways_JE1.png',
      'https://zh.minecraft.wiki/images/thumb/Shipwreck_Upside_Down_JE1.png/250px-Shipwreck_Upside_Down_JE1.png'
    ]
  },
  // 下界
  {
    name: '堡垒遗迹',
    category: '下界结构',
    image: 'https://zh.minecraft.wiki/images/thumb/Bastion_Remnant_JE1.png/250px-Bastion_Remnant_JE1.png',
    shortDescription: '由黑石和玄武岩组成的大型结构，会生成猪灵和猪灵蛮兵',
    description: `<p>堡垒遗迹(Bastion Remnant)是一种庞大的下界结构，由黑石和玄武岩构成，是猪灵和猪灵蛮兵的居所，藏有珍贵的战利品。</p>
<h3>生成</h3>
<p>堡垒遗迹生成于：</p>
<ul>
  <li>所有下界生物群系（除玄武岩三角洲外）</li>
  <li>不会与下界要塞相邻生成</li>
  <li>每个下界生成数量有限</li>
</ul>
<h3>结构类型</h3>
<p>堡垒遗迹有四种类型：</p>
<ul>
  <li>桥型：横跨熔岩湖的大型建筑</li>
  <li>居住区：多个小房间组成</li>
  <li>藏宝室：藏有大量金块的中央房间</li>
  <li> Hoglin 马厩：圈养疣猪兽的区域</li>
</ul>
<h3>敌对生物</h3>
<p>堡垒遗迹的居民：</p>
<ul>
  <li>猪灵：可交易，但会被打开箱子的行为激怒</li>
  <li>猪灵蛮兵：完全敌对，无论是否穿金甲</li>
  <li>疣猪兽：部分结构会生成</li>
  <li>岩浆怪：部分结构有刷怪笼</li>
</ul>
<h3>战利品</h3>
<p>珍贵的战利品：</p>
<ul>
  <li>大量金块和金锭</li>
  <li>猪灵旗帜图案</li>
  <li>磁石、附魔书</li>
  <li>哭泣的黑曜石</li>
  <li>钻石装备</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/堡垒遗迹',
    images: [
      'https://zh.minecraft.wiki/images/thumb/Bastion_Remnant_JE1.png/250px-Bastion_Remnant_JE1.png',
      'https://zh.minecraft.wiki/images/thumb/Bastion_Remnant_Bridge_JE1.png/250px-Bastion_Remnant_Bridge_JE1.png',
      'https://zh.minecraft.wiki/images/thumb/Bastion_Remnant_Treasure_JE1.png/250px-Bastion_Remnant_Treasure_JE1.png'
    ]
  },
  {
    name: '下界要塞',
    category: '下界结构',
    image: 'https://zh.minecraft.wiki/images/thumb/Nether_Fortress_JE1.png/250px-Nether_Fortress_JE1.png',
    shortDescription: '由下界砖块组成的大型结构，会生成凋灵骷髅和烈焰人',
    description: `<p>下界要塞(Nether Fortress)是一种庞大的下界结构，由下界砖块构成，是烈焰人和凋灵骷髅的居所，是获取下界资源的重要场所。</p>
<h3>生成</h3>
<p>下界要塞生成于：</p>
<ul>
  <li>所有下界生物群系</li>
  <li>通常生成在Y=64以下</li>
  <li>结构可能延伸很长距离</li>
  <li>不会与堡垒遗迹相邻生成</li>
</ul>
<h3>结构组成</h3>
<p>下界要塞的结构：</p>
<ul>
  <li>走廊：长通道，可能有下界疣种植区</li>
  <li>桥梁：跨越熔岩湖的高架桥</li>
  <li>房间：各种封闭房间</li>
  <li>烈焰人刷怪笼房间</li>
  <li>楼梯间：连接不同高度</li>
</ul>
<h3>重要资源</h3>
<p>下界要塞的资源：</p>
<ul>
  <li>烈焰人：掉落烈焰棒（制作酿造台和末影之眼）</li>
  <li>凋灵骷髅：掉落凋灵骷髅头颅（召唤凋灵）</li>
  <li>下界疣：炼药材料</li>
  <li>战利品箱子</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/下界要塞'
  },
  {
    name: '下界化石',
    category: '下界结构',
    image: 'https://zh.minecraft.wiki/images/thumb/Nether_Fossil_JE1.png/250px-Nether_Fossil_JE1.png',
    shortDescription: '由骨块组成的小型结构，拥有不同的变种',
    description: `<p>下界化石(Nether Fossil)是一种生成于灵魂沙峡谷生物群系的下界结构，由骨块构成，是古老的生物遗骸。</p>
<h3>生成</h3>
<p>下界化石生成于：</p>
<ul>
  <li>灵魂沙峡谷生物群系</li>
  <li>Y=25至Y=60之间</li>
  <li>不会与矿石混合生成</li>
  <li>有14种不同的形状变体</li>
</ul>
<h3>结构组成</h3>
<p>下界化石的组成：</p>
<ul>
  <li>主体：骨块</li>
  <li>表面：部分暴露在空气中</li>
  <li>周围：灵魂沙和灵魂土</li>
</ul>
<h3>用途</h3>
<p>下界化石的利用：</p>
<ul>
  <li>骨块可以分解为骨粉</li>
  <li>作为装饰性方块使用</li>
  <li>指示灵魂沙峡谷区域</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/下界化石'
  },
  {
    name: '下界废弃传送门',
    category: '下界结构',
    image: 'https://zh.minecraft.wiki/images/thumb/Ruined_Portal_Nether_JE1.png/250px-Ruined_Portal_Nether_JE1.png',
    shortDescription: '由黑曜石、哭泣的黑曜石和磨制黑石的变种组成',
    description: `<p>下界废弃传送门(Ruined Portal)是下界中的损坏传送门结构，与主世界的废弃传送门类似，但使用下界风格的方块。</p>
<h3>生成</h3>
<p>下界废弃传送门生成于：</p>
<ul>
  <li>所有下界生物群系</li>
  <li>有概率生成于地下或地表</li>
  <li>有些传送门框架平置在地面</li>
</ul>
<h3>结构组成</h3>
<p>下界废弃传送门包含：</p>
<ul>
  <li>黑曜石和哭泣的黑曜石框架</li>
  <li>磨制黑石、黑石等方块</li>
  <li>金块</li>
  <li>战利品箱子</li>
</ul>
<h3>用途</h3>
<p>下界废弃传送门：</p>
<ul>
  <li>可能作为返回主世界的快速通道</li>
  <li>战利品箱子中的物品</li>
  <li>哭泣的黑曜石来源</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/废弃传送门'
  },
  // 末地
  {
    name: '末地城',
    category: '末地结构',
    image: 'https://zh.minecraft.wiki/images/thumb/End_City_JE1.png/250px-End_City_JE1.png',
    shortDescription: '高大的由紫珀块和末地石组成的结构，里面包含潜影贝',
    description: `<p>末地城(End City)是一种生成于末地外岛的大型结构，由紫珀块和末地石砖构成，是潜影贝的居所，藏有游戏中最珍贵的战利品之一。</p>
<h3>生成</h3>
<p>末地城生成于：</p>
<ul>
  <li>末地外岛（击败末影龙后可达）</li>
  <li>末地小型岛屿生物群系</li>
  <li>通常距离折跃门较远</li>
  <li>有概率附带末地船</li>
</ul>
<h3>结构组成</h3>
<p>末地城的结构：</p>
<ul>
  <li>主体：紫珀块、紫珀楼梯、紫珀台阶</li>
  <li>装饰：末地烛、旗帜</li>
  <li>楼梯：通往各层的台阶</li>
  <li>房间：各种大小的房间</li>
  <li>末地船（如有）：悬浮在末地城旁边</li>
</ul>
<h3>末地船</h3>
<p>末地船的内容：</p>
<ul>
  <li>鞘翅（允许玩家滑翔）</li>
  <li>龙首（装饰性方块）</li>
  <li>治疗药水</li>
  <li>大量珍贵战利品</li>
</ul>
<h3>危险与战利品</h3>
<p>末地城的挑战：</p>
<ul>
  <li>潜影贝：会发射漂浮子弹</li>
  <li>高处坠落危险</li>
  <li>战利品：附魔钻石装备、附魔书、金苹果、潜影壳等</li>
</ul>`,
    link: 'https://minecraft.fandom.com/zh/wiki/末地城',
    images: [
      'https://zh.minecraft.wiki/images/thumb/End_City_JE1.png/250px-End_City_JE1.png',
      'https://zh.minecraft.wiki/images/thumb/End_Ship_JE1.png/250px-End_Ship_JE1.png'
    ]
  }
]
