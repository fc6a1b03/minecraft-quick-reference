// noinspection GrazieInspection
export interface BiologyDataItem {
    name: string;
    category: string;
    image: string;
    shortDescription: string;
    description: string;
    link: string;
}

export const biology: BiologyDataItem[] = [
    {
        name: "悦灵",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/Allay_JE2.gif",
        shortDescription: "会帮助玩家收集物品的灵体生物，可通过音符盒引导",
        description: `<p>悦灵(Allay)是一种蓝色灵体生物，具有飞行能力，会被玩家手持的物品吸引并帮助收集相同物品。它们不会被敌对生物攻击，也不会自然消失。</p>
<h3>生成</h3>
<p>悦灵自然生成于：</p>
<ul>
  <li>林地府邸的监狱房间中，以2-3只为一组生成</li>
  <li>掠夺者前哨站的笼子里，通常生成1只</li>
</ul>
<h3>行为</h3>
<p>悦灵会被玩家手持的物品吸引并跟随，当玩家放下该物品后，它们会收集周围相同的物品并带回给玩家。当附近有音符盒播放音乐时，悦灵会被吸引并在其周围跳舞，此时若给予物品，它们会记住该物品并持续收集。</p>
<h3>互动</h3>
<p>玩家可以通过以下方式与悦灵互动：</p>
<ul>
  <li>给予物品让其收集相同物品</li>
  <li>使用安可盒可以让悦灵停留在该区域工作</li>
  <li>繁殖：给两只悦灵各一个阿玛尼水晶可以使其繁殖</li>
  <li>死亡时会掉落悦灵盒和荧光墨囊</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/悦灵"
    },
    {
        name: "蝙蝠",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/thumb/Bat_JE4_BE3.gif/150px-Bat_JE4_BE3.gif",
        shortDescription: "会飞的小型生物，通常出现在洞穴中，无实际用途",
        description: `<p>蝙蝠(Bat)是游戏中最小的被动生物，具有飞行能力，通常成群出现在黑暗区域。它们不会与玩家互动，也不会掉落任何有价值的物品。</p>
<h3>生成</h3>
<p>蝙蝠生成条件：</p>
<ul>
  <li>仅在亮度等级小于等于3的区域生成</li>
  <li>可在地下洞穴、废弃矿井等封闭空间生成</li>
  <li>生成高度为63层以下</li>
</ul>
<h3>行为</h3>
<p>蝙蝠大部分时间处于飞行状态，会随机改变飞行方向，偶尔会停在洞穴顶部。当玩家靠近时，它们会飞离玩家。在白天或亮度足够的区域，蝙蝠会进入静止状态。</p>
<h3>特性</h3>
<p>蝙蝠的特殊之处：</p>
<ul>
  <li>是游戏中唯一能飞的被动生物</li>
  <li>没有碰撞箱，玩家可以直接穿过它们</li>
  <li>死亡时不会掉落任何物品或经验</li>
  <li>可被用于指示附近是否有洞穴空间</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/蝙蝠"
    },
    {
        name: "骆驼",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/thumb/Saddled_Camel_Dash_BE1.gif/120px-Saddled_Camel_Dash_BE1.gif",
        shortDescription: "沙漠中的双峰坐骑，可搭载两名玩家，能快速跳跃",
        description: `<p>骆驼(Camel)是1.20版本加入的沙漠生物，具有独特的双峰特征，是游戏中唯一可以同时搭载两名玩家的坐骑。它们行动缓慢但能进行长距离跳跃。</p>
<h3>生成</h3>
<p>骆驼自然生成于：</p>
<ul>
  <li>沙漠村庄中，以1-3只为一组生成</li>
  <li>不会自然生成在其他生物群系</li>
</ul>
<h3>行为</h3>
<p>骆驼是中立生物，不会主动攻击或逃离玩家。它们具有以下特点：</p>
<ul>
  <li>可以跳跃跨越3格高的障碍物</li>
  <li>行走速度较慢，但跳跃能力强</li>
  <li>会偶尔坐下休息，此时无法骑乘</li>
</ul>
<h3>互动</h3>
<p>玩家可以：</p>
<ul>
  <li>右键点击骆驼进行骑乘，无需鞍具</li>
  <li>骑乘时可使用空格键使其跳跃</li>
  <li>使用小麦可以驯服并繁殖骆驼</li>
  <li>死亡时掉落皮革</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/骆驼"
    },
    {
        name: "鸡",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/thumb/Chicken_Flapping.gif/113px-Chicken_Flapping.gif",
        shortDescription: "常见的农场动物，会下蛋，可提供鸡肉和羽毛",
        description: `<p>鸡(Chicken)是游戏中最常见的被动生物之一，广泛分布于各种生物群系，是早期生存中重要的食物和资源来源。</p>
<h3>生成</h3>
<p>鸡自然生成于：</p>
<ul>
  <li>平原、森林、草原等大多数生物群系</li>
  <li>村庄的鸡舍中，通常以4-6只为一组</li>
  <li>也可通过投掷鸡蛋随机生成（1/8几率生成1只鸡，1/256几率生成4只）</li>
</ul>
<h3>行为</h3>
<p>鸡的行为特点：</p>
<ul>
  <li>会随机四处走动，偶尔会跳跃</li>
  <li>会游泳，不会溺水</li>
  <li>每5-10分钟会下一个鸡蛋</li>
  <li>受到伤害时会快速逃跑</li>
</ul>
<h3>用途</h3>
<p>鸡是重要的资源来源：</p>
<ul>
  <li>死亡时掉落生鸡肉（被烧死时掉落熟鸡肉）和0-2根羽毛</li>
  <li>鸡蛋可用于制作蛋糕和南瓜派，也可用于繁殖鸡</li>
  <li>使用小麦种子、甜菜种子等可以繁殖鸡</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/鸡"
    },
    {
        name: "鳕鱼",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/thumb/Cod.gif/150px-Cod.gif",
        shortDescription: "常见的水生生物，可提供食物来源",
        description: `<p>鳕鱼(Cod)是一种常见的被动水生生物，是海洋中最普遍的鱼类之一，可作为玩家的食物来源。</p>
<h3>生成</h3>
<p>鳕鱼生成于：</p>
<ul>
  <li>冷水海洋、普通海洋和温水海洋生物群系</li>
  <li>以3-6只为一组生成</li>
  <li>仅在Y=50-63之间的水中生成</li>
</ul>
<h3>行为</h3>
<p>鳕鱼的行为特点：</p>
<ul>
  <li>在水中随机游动，不会主动与玩家互动</li>
  <li>离开水后会挣扎一段时间，最终死亡</li>
  <li>会被溺尸猎杀</li>
</ul>
<h3>用途</h3>
<p>鳕鱼的主要用途：</p>
<ul>
  <li>死亡时掉落生鳕鱼，可烹饪为熟鳕鱼恢复饥饿值</li>
  <li>可被玩家用钓鱼竿捕获</li>
  <li>可放入水桶中成为桶装鳕鱼，用于运输或装饰</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/鳕鱼"
    },
    {
        name: "牛",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/Cow_JE2.png",
        shortDescription: "常见的农场动物，可提供牛肉、皮革和牛奶",
        description: `<p>牛(Cow)是游戏中最常见的农场动物之一，是生存模式初期重要的食物和资源来源，广泛分布于各种生物群系。</p>
<h3>生成</h3>
<p>牛自然生成于：</p>
<ul>
  <li>平原、森林、草原、热带草原等生物群系</li>
  <li>以4-10只为一组生成</li>
  <li>村庄的牧场中也会自然生成</li>
</ul>
<h3>行为</h3>
<p>牛的行为特点：</p>
<ul>
  <li>会缓慢地四处走动，偶尔会低头吃草</li>
  <li>受到攻击时会逃跑</li>
  <li>会游泳，不会溺水</li>
</ul>
<h3>用途</h3>
<p>牛是多功能的资源提供者：</p>
<ul>
  <li>死亡时掉落生牛肉（被烧死时掉落熟牛肉）和0-1块皮革</li>
  <li>使用桶可以从牛身上获取牛奶，用于消除状态效果</li>
  <li>使用小麦可以繁殖牛，小牛需要20分钟成长为成年牛</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/牛"
    },
    {
        name: "驴",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/Donkey_JE2.png",
        shortDescription: "可被驯服为坐骑的生物，能携带物品",
        description: `<p>驴(Donkey)是一种可被驯服的被动生物，类似于马，但不能装备马铠，取而代之的是可以装备箱子来携带物品。</p>
<h3>生成</h3>
<p>驴生成于：</p>
<ul>
  <li>平原、热带草原生物群系</li>
  <li>以1-3只为一组生成</li>
  <li>也可通过马和驴繁殖生成</li>
</ul>
<h3>行为</h3>
<p>驴的行为特点：</p>
<ul>
  <li>未被驯服时，玩家靠近会逃跑</li>
  <li>可通过多次右键点击骑乘来驯服，驯服成功几率随机</li>
  <li>驯服后可装备鞍来骑乘，装备箱子来存储物品</li>
</ul>
<h3>用途</h3>
<p>驴的主要用途：</p>
<ul>
  <li>作为坐骑使用，速度介于马和猪之间</li>
  <li>装备箱子后可提供15个物品栏空间</li>
  <li>与马繁殖可产生骡</li>
  <li>死亡时掉落皮革</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/驴"
    },
    {
        name: "发光鱿鱼",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/thumb/Glow_Squid_JE1_BE2.gif/200px-Glow_Squid_JE1_BE2.gif",
        shortDescription: "会发光的鱿鱼变种，生成于黑暗的水下区域",
        description: `<p>发光鱿鱼(Glow Squid)是鱿鱼的变种，具有生物发光特性，身体会发出蓝绿色的光芒，是1.17版本加入的生物。</p>
<h3>生成</h3>
<p>发光鱿鱼生成于：</p>
<ul>
  <li>地下洞穴中的水源，如废弃矿井的水池</li>
  <li>亮度等级小于等于7的水下区域</li>
  <li>以2-4只为一组生成</li>
</ul>
<h3>行为</h3>
<p>发光鱿鱼的行为特点：</p>
<ul>
  <li>与普通鱿鱼类似，在水中缓慢游动，会随水流移动</li>
  <li>身体会发出蓝绿色光芒，照亮周围环境</li>
  <li>离开水后会窒息死亡</li>
</ul>
<h3>用途</h3>
<p>发光鱿鱼的用途：</p>
<ul>
  <li>死亡时掉落1-3个荧光墨囊</li>
  <li>荧光墨囊可用于制作发光告示牌和染料</li>
  <li>可被玩家用桶捕获，成为桶装发光鱿鱼</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/发光鱿鱼"
    },
    {
        name: "马",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/thumb/White_Horse_JE5_BE3.png/540px-White_Horse_JE5_BE3.png",
        shortDescription: "可被驯服为快速坐骑的生物，有多种颜色和变种",
        description: `<p>马(Horse)是一种可被驯服的被动生物，是游戏中速度最快的陆地坐骑之一，有多种颜色、花纹和统计数据。</p>
<h3>生成</h3>
<p>马生成于：</p>
<ul>
  <li>平原和热带草原生物群系</li>
  <li>以2-6只为一组生成</li>
  <li>有不同的颜色和花纹变种，生成几率随机</li>
</ul>
<h3>行为</h3>
<p>马的行为特点：</p>
<ul>
  <li>未被驯服时，玩家靠近会逃跑</li>
  <li>可通过多次右键点击骑乘来驯服，成功几率随机</li>
  <li>驯服后可装备鞍来骑乘，部分马可装备马铠</li>
  <li>不同的马有不同的生命值、速度和跳跃高度</li>
</ul>
<h3>用途</h3>
<p>马的主要用途：</p>
<ul>
  <li>作为快速坐骑，速度可达玩家步行速度的3-4倍</li>
  <li>可装备不同类型的马铠来提供保护</li>
  <li>与驴繁殖可产生骡，与同种马繁殖可产生继承属性的小马</li>
  <li>死亡时掉落皮革</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/马"
    },
    {
        name: "哞菇",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/thumb/Mooshroom_JE5_BE3.png/150px-Mooshroom_JE5_BE3.png",
        shortDescription: "蘑菇岛上的特殊牛变种，可提供蘑菇 stew（蘑菇煲）",
        description: `<p>哞菇(Mooshroom)是牛的变种，仅存在于蘑菇岛生物群系，身体覆盖着红色蘑菇，是一种特殊的被动生物。</p>
<h3>生成</h3>
<p>哞菇生成于：</p>
<ul>
  <li>仅在蘑菇岛和蘑菇岛岸边生物群系生成</li>
  <li>以4-8只为一组生成</li>
  <li>有红色和棕色两种变种，红色更为常见</li>
</ul>
<h3>行为</h3>
<p>哞菇的行为特点：</p>
<ul>
  <li>行为模式与普通牛相似，但只在蘑菇岛上自然生成</li>
  <li>会被小麦吸引，可使用小麦繁殖</li>
  <li>被 lightning（闪电）击中时会在红色和棕色变种之间切换</li>
</ul>
<h3>用途</h3>
<p>哞菇的特殊用途：</p>
<ul>
  <li>使用碗右键点击可获取蘑菇煲</li>
  <li>使用剪刀右键点击可使其变回普通牛，并掉落5个红色蘑菇</li>
  <li>与普通牛不同，哞菇不会提供牛奶，而是提供蘑菇煲</li>
  <li>死亡时掉落生牛肉、皮革和红色蘑菇</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/哞菇"
    },
    {
        name: "骡",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/thumb/Saddled_Chested_Mule.png/200px-Saddled_Chested_Mule.png?2c899",
        shortDescription: "马和驴的杂交后代，不能繁殖但能携带更多物品",
        description: `<p>骡(Mule)是马和驴杂交产生的被动生物，结合了两者的特点，不能繁殖但具有良好的负重能力。</p>
<h3>生成</h3>
<p>骡的生成方式：</p>
<ul>
  <li>不能自然生成，只能通过马和驴繁殖产生</li>
  <li>繁殖时需要给马和驴各喂一片小麦</li>
</ul>
<h3>行为</h3>
<p>骡的行为特点：</p>
<ul>
  <li>行为模式类似于马和驴</li>
  <li>未被驯服时会躲避玩家，可通过骑乘来驯服</li>
  <li>驯服后可装备鞍和箱子</li>
</ul>
<h3>用途</h3>
<p>骡的主要用途：</p>
<ul>
  <li>作为坐骑，速度介于马和驴之间</li>
  <li>装备箱子后可提供15个物品栏空间，比驴更适合运输物品</li>
  <li>不能繁殖后代</li>
  <li>死亡时掉落皮革</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/骡"
    },
    {
        name: "鹦鹉",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/Dancing_Red_Parrot.gif",
        shortDescription: "可被驯服的彩色鸟类，能模仿生物声音",
        description: `<p>鹦鹉(Parrot)是一种色彩鲜艳的被动生物，可被玩家驯服为宠物，能模仿游戏中多种生物的声音。</p>
<h3>生成</h3>
<p>鹦鹉生成于：</p>
<ul>
  <li>丛林和竹林生物群系</li>
  <li>以1-2只为一组生成</li>
  <li>有红色、蓝色、绿色、青色和灰色五种颜色变种</li>
</ul>
<h3>行为</h3>
<p>鹦鹉的行为特点：</p>
<ul>
  <li>会飞，也会在地面上跳跃移动</li>
  <li>可通过喂食种子驯服，驯服后会跟随玩家</li>
  <li>会模仿10格范围内敌对生物的声音</li>
  <li>可以站在玩家的肩膀上</li>
  <li>对可可豆敏感，食用后会死亡</li>
</ul>
<h3>互动</h3>
<p>与鹦鹉的互动方式：</p>
<ul>
  <li>右键点击已驯服的鹦鹉可使其停留在原地或跟随玩家</li>
  <li>可通过喂食种子让两只鹦鹉繁殖</li>
  <li>死亡时不会掉落任何物品</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/鹦鹉"
    },
    {
        name: "猪",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/thumb/Pig_JE3_BE2.png/647px-Pig_JE3_BE2.png",
        shortDescription: "常见的农场动物，可作为坐骑，提供猪肉",
        description: `<p>猪(Pig)是游戏中常见的被动生物，是早期生存的重要食物来源，也可被驯服为临时坐骑。</p>
<h3>生成</h3>
<p>猪生成于：</p>
<ul>
  <li>平原、森林、草原、沼泽等大多数生物群系</li>
  <li>以3-6只为一组生成</li>
  <li>村庄中也会自然生成</li>
</ul>
<h3>行为</h3>
<p>猪的行为特点：</p>
<ul>
  <li>会缓慢地四处走动，寻找食物</li>
  <li>受到攻击时会快速逃跑</li>
  <li>可被胡萝卜、马铃薯和甜菜根吸引</li>
</ul>
<h3>用途</h3>
<p>猪的主要用途：</p>
<ul>
  <li>死亡时掉落生猪肉（被烧死时掉落熟猪肉）</li>
  <li>戴上鞍后可作为坐骑，使用胡萝卜钓竿控制方向</li>
  <li>使用胡萝卜可以繁殖猪</li>
  <li>在我的世界：故事模式中，猪可以被训练成战斗猪</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/猪"
    },
    {
        name: "兔子",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/Rabbit_running.gif",
        shortDescription: "小型草食动物，有多种毛色变种，提供兔肉",
        description: `<p>兔子(Rabbit)是一种小型被动生物，有多种毛色变种，分布在不同的生物群系中，是游戏中的食物来源之一。</p>
<h3>生成</h3>
<p>兔子生成于：</p>
<ul>
  <li>大多数生物群系，不同生物群系有不同毛色的兔子</li>
  <li>沙漠中的兔子为沙色，雪原中的为白色</li>
  <li>以2-3只为一组生成</li>
  <li>杀手兔是罕见的敌对变种，仅在特定条件下生成</li>
</ul>
<h3>行为</h3>
<p>兔子的行为特点：</p>
<ul>
  <li>行动敏捷，受到威胁时会快速逃跑</li>
  <li>会被胡萝卜、蒲公英和小麦吸引</li>
  <li>杀手兔会主动攻击玩家和其他生物</li>
</ul>
<h3>用途</h3>
<p>兔子的用途：</p>
<ul>
  <li>死亡时掉落生兔肉（被烧死时掉落熟兔肉）和0-1个兔皮</li>
  <li>可使用胡萝卜或蒲公英繁殖</li>
  <li>兔皮可用于制作皮革，兔肉可恢复饥饿值</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/兔子"
    },
    {
        name: "鲑鱼",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/thumb/Salmon_JE1.gif/150px-Salmon_JE1.gif",
        shortDescription: "常见的水生生物，有成年和幼年两种形态",
        description: `<p>鲑鱼(Salmon)是一种常见的被动水生生物，有成年和幼年两种形态，是重要的食物来源之一。</p>
<h3>生成</h3>
<p>鲑鱼生成于：</p>
<ul>
  <li>冷水海洋、普通海洋、温水海洋和河流生物群系</li>
  <li>以3-6只为一组生成，包含成年和幼年鲑鱼</li>
  <li>在冻洋生物群系中生成的鲑鱼更多</li>
</ul>
<h3>行为</h3>
<p>鲑鱼的行为特点：</p>
<ul>
  <li>在水中成群游动，有一定的游动模式</li>
  <li>离开水后会挣扎一段时间，最终死亡</li>
  <li>幼年鲑鱼不会掉落物品</li>
  <li>会被溺尸猎杀</li>
</ul>
<h3>用途</h3>
<p>鲑鱼的用途：</p>
<ul>
  <li>成年鲑鱼死亡时掉落生鲑鱼，可烹饪为熟鲑鱼</li>
  <li>可被玩家用钓鱼竿捕获</li>
  <li>可放入水桶中成为桶装鲑鱼</li>
  <li>是猫的最爱食物，可用于驯服猫</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/鲑鱼"
    },
    {
        name: "绵羊",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/Jeb_Sheep_JE4_BE3.gif",
        shortDescription: "提供羊毛和羊肉的农场动物，羊毛可染色",
        description: `<p>绵羊(Sheep)是一种常见的被动生物，是游戏中羊毛的主要来源，也可提供羊肉作为食物。</p>
<h3>生成</h3>
<p>绵羊生成于：</p>
<ul>
  <li>平原、森林、草原、冻原等大多数生物群系</li>
  <li>以4-10只为一组生成</li>
  <li>有白色、黑色、灰色、棕色等多种毛色，白色最常见</li>
</ul>
<h3>行为</h3>
<p>绵羊的行为特点：</p>
<ul>
  <li>行动缓慢，会四处游荡和吃草</li>
  <li>受到攻击时会逃跑</li>
  <li>吃草后羊毛会重新生长</li>
</ul>
<h3>用途</h3>
<p>绵羊的主要用途：</p>
<ul>
  <li>使用剪刀可获取1-3个羊毛，不会导致绵羊死亡</li>
  <li>死亡时掉落生羊肉（被烧死时掉落熟羊肉）和1个羊毛</li>
  <li>羊毛可被染色成16种不同颜色，用于制作各种物品</li>
  <li>使用小麦可以繁殖绵羊，小羊需要20分钟成长为成年羊</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/绵羊"
    },
    {
        name: "骷髅马",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/thumb/Skeleton_Horse_JE5_BE3.png/200px-Skeleton_Horse_JE5_BE3.png",
        shortDescription: "骷髅化的马，可被驯服，生成时可能伴随骷髅骑手",
        description: `<p>骷髅马(Skeleton Horse)是马的骷髅变种，是一种罕见的被动生物，有时会以骷髅陷阱的形式生成。</p>
<h3>生成</h3>
<p>骷髅马生成于：</p>
<ul>
  <li>罕见地自然生成，更多情况下以骷髅陷阱形式生成</li>
  <li>雷暴天气中，闪电击中地面有几率触发骷髅陷阱，生成4匹骷髅马及骷髅骑手</li>
  <li>可通过指令生成</li>
</ul>
<h3>行为</h3>
<p>骷髅马的行为特点：</p>
<ul>
  <li>未被驯服时会躲避玩家，可通过骑乘来驯服</li>
  <li>驯服后可装备鞍来骑乘</li>
  <li>骷髅陷阱生成的骷髅马会立即被骷髅骑士骑乘，并主动攻击玩家</li>
  <li>不会受跌落伤害</li>
</ul>
<h3>用途</h3>
<p>骷髅马的用途：</p>
<ul>
  <li>作为坐骑，速度与普通马相似</li>
  <li>不会被亡灵生物攻击</li>
  <li>死亡时不会掉落任何物品</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/骷髅马"
    },
    {
        name: "嗅探兽",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/thumb/Sniffer_sniffsniff_JE1_BE1.gif/120px-Sniffer_sniffsniff_JE1_BE1.gif",
        shortDescription: "能嗅探并挖掘古代种子的大型生物",
        description: `<p>嗅探兽(Sniffer)是一种大型被动生物，具有挖掘古代种子的能力，是通过2022年生物投票加入的生物。</p>
<h3>生成</h3>
<p>嗅探兽的生成方式：</p>
<ul>
  <li>不能自然生成，只能通过寻找嗅探兽蛋并孵化获得</li>
  <li>嗅探兽蛋可在水下遗迹的箱子中找到</li>
  <li>蛋需要在非沙砾方块上孵化，孵化时间约为20分钟</li>
</ul>
<h3>行为</h3>
<p>嗅探兽的行为特点：</p>
<ul>
  <li>行动缓慢，会用鼻子嗅探地面寻找古代种子</li>
  <li>找到种子后会挖掘地面并将其挖出</li>
  <li>会被古代种子吸引</li>
</ul>
<h3>用途</h3>
<p>嗅探兽的主要用途：</p>
<ul>
  <li>挖掘出各种古代种子，如古蕨种子和棕榈种子</li>
  <li>这些种子可种植出对应的古代植物</li>
  <li>使用古代种子可以让嗅探兽繁殖</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/嗅探兽"
    },
    {
        name: "鱿鱼",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/thumb/Squid.gif/200px-Squid.gif",
        shortDescription: "常见的水生生物，提供墨囊",
        description: `<p>鱿鱼(Squid)是一种常见的被动水生生物，生活在各种水域中，是墨囊的主要来源。</p>
<h3>生成</h3>
<p>鱿鱼生成于：</p>
<ul>
  <li>所有海洋生物群系和大型湖泊、河流中</li>
  <li>以1-4只为一组生成</li>
  <li>生成高度为Y=45-63之间的水中</li>
</ul>
<h3>行为</h3>
<p>鱿鱼的行为特点：</p>
<ul>
  <li>在水中缓慢游动，会随水流移动</li>
  <li>有8条触手，游动时会摆动</li>
  <li>离开水后会窒息死亡</li>
  <li>受到攻击时会喷出墨汁并试图逃跑</li>
</ul>
<h3>用途</h3>
<p>鱿鱼的主要用途：</p>
<ul>
  <li>死亡时掉落1-3个墨囊</li>
  <li>墨囊可用于制作黑色染料和书与笔</li>
  <li>可被玩家用桶捕获，成为桶装鱿鱼</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/鱿鱼"
    },
    {
        name: "炽足兽",
        category: "中立生物",
        image: "https://zh.minecraft.wiki/images/thumb/Strider_walking_JE2_BE2.gif/105px-Strider_walking_JE2_BE2.gif",
        shortDescription: "下界的熔岩生物，可被驯服为熔岩上的坐骑",
        description: `<p>炽足兽(Strider)是一种生活在下界熔岩中的中立生物，可被驯服为在熔岩上移动的坐骑。</p>
<h3>生成</h3>
<p>炽足兽生成于：</p>
<ul>
  <li>下界的熔岩海和熔岩湖中</li>
  <li>在绯红森林和扭曲森林生物群系中更为常见</li>
  <li>以2-4只为一组生成</li>
</ul>
<h3>行为</h3>
<p>炽足兽的行为特点：</p>
<ul>
  <li>能在熔岩中自由移动，但在陆地上移动缓慢</li>
  <li>会被诡异菌吸引，被战争pedestal（菌柄）排斥</li>
  <li>身体会发出微弱的红光</li>
  <li>在水中会受到伤害</li>
</ul>
<h3>用途</h3>
<p>炽足兽的主要用途：</p>
<ul>
  <li>使用诡异菌钓竿可以控制被驯服的炽足兽</li>
  <li>是唯一能在熔岩上作为坐骑的生物</li>
  <li>装备鞍后可作为熔岩上的快速交通工具</li>
  <li>死亡时掉落线和经验球</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/炽足兽"
    },
    {
        name: "蝌蚪",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/thumb/Tadpole_swimming.gif/150px-Tadpole_swimming.gif",
        shortDescription: "青蛙的幼年形态，生活在水中",
        description: `<p>蝌蚪(Tadpole)是青蛙的幼年形态，是一种小型被动水生生物，会逐渐成长为青蛙。</p>
<h3>生成</h3>
<p>蝌蚪的生成方式：</p>
<ul>
  <li>青蛙繁殖后会产下青蛙卵，青蛙卵孵化后生成蝌蚪</li>
  <li>一只青蛙一次可产下2-6个青蛙卵</li>
  <li>青蛙卵需要3-10分钟孵化成蝌蚪</li>
</ul>
<h3>行为</h3>
<p>蝌蚪的行为特点：</p>
<ul>
  <li>仅能在水中生存，离开水后会死亡</li>
  <li>会缓慢游动，随机改变方向</li>
  <li>约20分钟后会成长为青蛙，成长环境决定青蛙种类</li>
  <li>在寒冷生物群系成长为雪蛙，温暖生物群系成长为热带蛙，其他地区成长为普通青蛙</li>
</ul>
<h3>用途</h3>
<p>蝌蚪的用途：</p>
<ul>
  <li>可被玩家用桶捕获，成为桶装蝌蚪</li>
  <li>最终会成长为青蛙，帮助玩家消灭小型敌对生物</li>
  <li>死亡时不会掉落任何物品</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/蝌蚪"
    },
    {
        name: "热带鱼",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/Tropical_Fish_Preview_White.png",
        shortDescription: "色彩斑斓的小型鱼类，有多种外观变种",
        description: `<p>热带鱼(Tropical Fish)是一种色彩斑斓的被动水生生物，有多种外观和颜色组合，是游戏中最多样化的生物之一。</p>
<h3>生成</h3>
<p>热带鱼生成于：</p>
<ul>
  <li>暖水海洋和温水海洋生物群系</li>
  <li>以8-24只为一组生成</li>
  <li>有超过2700种不同的颜色和图案组合</li>
</ul>
<h3>行为</h3>
<p>热带鱼的行为特点：</p>
<ul>
  <li>在水中成群游动，行动敏捷</li>
  <li>离开水后会很快死亡</li>
  <li>会被溺尸猎杀</li>
  <li>不同变种的热带鱼有不同的体型和颜色</li>
</ul>
<h3>用途</h3>
<p>热带鱼的用途：</p>
<ul>
  <li>可被玩家用桶捕获，成为桶装热带鱼</li>
  <li>可作为食物，但恢复的饥饿值较少</li>
  <li>是美西螈的食物，可用于繁殖美西螈</li>
  <li>可用于制作鹦鹉螺壳和潮涌核心</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/热带鱼"
    },
    {
        name: "海龟",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/thumb/Turtle_JE1_BE1.png/240px-Turtle_JE1_BE1.png",
        shortDescription: "水生爬行动物，会在沙滩上产卵",
        description: `<p>海龟(Turtle)是一种被动水生生物，生活在海洋中，但会返回沙滩产卵，幼年形态为小海龟。</p>
<h3>生成</h3>
<p>海龟生成于：</p>
<ul>
  <li>温水海洋和暖水海洋的沙滩附近</li>
  <li>以1-5只为一组生成</li>
  <li>小海龟从海龟蛋中孵化而来</li>
</ul>
<h3>行为</h3>
<p>海龟的行为特点：</p>
<ul>
  <li>大部分时间在水中生活，会在水中缓慢游动</li>
  <li>成年海龟会定期返回沙滩产卵</li>
  <li>小海龟孵化后会向水中移动</li>
  <li>会被骷髅、僵尸等敌对生物攻击</li>
</ul>
<h3>用途</h3>
<p>海龟的用途：</p>
<ul>
  <li>死亡时掉落海龟壳碎片，可合成海龟壳头盔</li>
  <li>海龟壳头盔可提供水下呼吸效果</li>
  <li>使用海草可以繁殖海龟</li>
  <li>海龟蛋可用于制作海龟蛋方块</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/海龟"
    },
    {
        name: "村民",
        category: "友好生物",
        image: "https://zh.minecraft.wiki/images/thumb/Nitwit_refusing.gif/128px-Nitwit_refusing.gif",
        shortDescription: "居住在村庄的智能生物，可与玩家进行交易",
        description: `<p>村民(Villager)是具有智能的被动生物，居住在村庄中，具有不同的职业和交易能力。他们会根据职业进行工作，并在夜间回到家中休息。</p>
<h3>生成</h3>
<p>村民生成于：</p>
<ul>
  <li>自然生成的村庄中，不同生物群系的村庄有不同外观的村民</li>
  <li>可通过僵尸村民被治愈生成</li>
  <li>村庄中的床可让村民繁殖，需要足够的食物和空间</li>
</ul>
<h3>职业与行为</h3>
<p>村民的职业系统：</p>
<ul>
  <li>共有15种不同职业，每种职业有不同的交易内容</li>
  <li>职业由村民工作站点决定，如图书管理员对应讲台</li>
  <li>会在白天工作，夜间返回房屋，雨天也会待在室内</li>
  <li>会繁殖，需要满足有足够的床和食物（面包、胡萝卜、马铃薯等）</li>
</ul>
<h3>交易系统</h3>
<p>与村民交易：</p>
<ul>
  <li>右键点击村民打开交易界面</li>
  <li>每次交易可提高玩家与村民的声望等级</li>
  <li>声望等级提高后，村民会提供更好的交易</li>
  <li>不同职业的村民提供不同类型的物品交易</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/村民"
    },
    {
        name: "流浪商人",
        category: "友好生物",
        image: "https://zh.minecraft.wiki/images/thumb/Wandering_Trader_JE1_BE1.png/150px-Wandering_Trader_JE1_BE1.png",
        shortDescription: "随机出现的移动商人，出售稀有物品",
        description: `<p>流浪商人(Wandering Trader)是一种随机出现的被动生物，会四处游荡并向玩家出售各种稀有物品，通常伴随着行商羊驼。</p>
<h3>生成</h3>
<p>流浪商人的生成方式：</p>
<ul>
  <li>随机生成在玩家附近（24-48格范围内）</li>
  <li>每天有2.5%的几率生成，生成后停留40-60分钟</li>
  <li>生成时通常伴随着2只行商羊驼</li>
</ul>
<h3>行为</h3>
<p>流浪商人的行为特点：</p>
<ul>
  <li>会缓慢四处游荡，不会远离其生成点太远</li>
  <li>停留时间结束后会喝隐身药水并消失</li>
  <li>受到攻击时会逃跑，并让行商羊驼进行防御</li>
</ul>
<h3>交易系统</h3>
<p>与流浪商人交易：</p>
<ul>
  <li>右键点击可打开交易界面</li>
  <li>出售的物品通常包括稀有植物、染料和生物蛋</li>
  <li>只接受绿宝石作为交易货币</li>
  <li>有5-7种不同的交易组合，每天会刷新</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/流浪商人"
    },
    {
        name: "山羊",
        category: "友好生物",
        image: "https://zh.minecraft.wiki/images/thumb/Goat.png/564px-Goat.png",
        shortDescription: "山地生物，会用头撞击玩家和物体",
        description: `<p>山羊(Goat)是一种生活在山地的中立生物，具有很强的跳跃能力，会主动撞击玩家和其他生物。</p>
<h3>生成</h3>
<p>山羊生成于：</p>
<ul>
  <li>山地、尖峭山峰、积雪的山顶等生物群系</li>
  <li>以2-3只为一组生成</li>
  <li>有5%的几率生成尖叫山羊变种，行为更为激进</li>
</ul>
<h3>行为</h3>
<p>山羊的行为特点：</p>
<ul>
  <li>跳跃能力极强，可跳上5格高的方块</li>
  <li>会随机撞击玩家、生物或方块，造成轻微伤害</li>
  <li>尖叫山羊撞击的频率更高，力量更大</li>
  <li>会被小麦吸引</li>
</ul>
<h3>用途</h3>
<p>山羊的用途：</p>
<ul>
  <li>死亡时掉落生羊肉和0-2个皮革</li>
  <li>使用小麦可以繁殖山羊</li>
  <li>撞击某些方块时可能掉落山羊角（最多可获得2个）</li>
  <li>山羊角可用于制作号角，发出不同的声音</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/山羊"
    },
    {
        name: "河豚",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/Pufferfish_large.gif",
        shortDescription: "有毒的鱼类，受到威胁时会膨胀",
        description: `<p>河豚(Pufferfish)是一种有毒的被动水生生物，有独特的防御机制，受到威胁时会膨胀并露出尖刺。</p>
<h3>生成</h3>
<p>河豚生成于：</p>
<ul>
  <li>暖水海洋生物群系</li>
  <li>以1-3只为一组生成</li>
  <li>生成在Y=50-63之间的水中</li>
</ul>
<h3>行为</h3>
<p>河豚的行为特点：</p>
<ul>
  <li>平时体型较小，游动缓慢</li>
  <li>玩家或其他生物靠近时会膨胀到原来的3倍大小</li>
  <li>膨胀状态下接触会对玩家造成伤害和中毒效果</li>
  <li>离开水后会很快死亡</li>
</ul>
<h3>用途</h3>
<p>河豚的用途：</p>
<ul>
  <li>可被玩家用钓鱼竿捕获</li>
  <li>是制作水肺药水的关键材料</li>
  <li>可烹饪成烤河豚，但食用后仍会造成中毒效果</li>
  <li>可放入水桶中成为桶装河豚</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/河豚"
    },
    {
        name: "美西螈",
        category: "友好生物",
        image: "https://zh.minecraft.wiki/images/Lucy_Axolotl_JE2.gif",
        shortDescription: "水生生物，能帮助玩家攻击水下生物，有多种颜色",
        description: `<p>美西螈(Axolotl)是一种被动水生生物，外观类似现实中的墨西哥钝口螈，有五种不同的颜色变种，会主动攻击某些水下生物。</p>
<h3>生成</h3>
<p>美西螈生成于：</p>
<ul>
  <li>繁茂洞穴生物群系的水中</li>
  <li>以1-4只为一组生成</li>
  <li>有粉色、棕色、金色、蓝色和青色五种颜色，蓝色最为罕见</li>
</ul>
<h3>行为</h3>
<p>美西螈的行为特点：</p>
<ul>
  <li>会主动攻击鱼、鱿鱼、守卫者等水下生物</li>
  <li>受伤时会装死，此时会恢复生命值并免疫伤害</li>
  <li>离开水后会逐渐干燥并受到伤害</li>
  <li>会被水桶捕获，成为桶装美西螈</li>
</ul>
<h3>用途</h3>
<p>美西螈的用途：</p>
<ul>
  <li>帮助玩家攻击敌对水下生物</li>
  <li>使用热带鱼桶可以繁殖美西螈</li>
  <li>死亡时掉落经验球</li>
  <li>当玩家持有水桶时，美西螈会主动靠近</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/美西螈"
    },
    {
        name: "猫",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/thumb/Lying_down_Jellie_Cat_with_Red_Collar.png/800px-Lying_down_Jellie_Cat_with_Red_Collar.png",
        shortDescription: "可被驯服的家养动物，能驱赶苦力怕",
        description: `<p>猫(Cat)是一种可被驯服的被动生物，由豹猫驯服而来，有多种毛色变种，能为玩家提供多种益处。</p>
<h3>生成</h3>
<p>猫的生成方式：</p>
<ul>
  <li>不能自然生成，只能通过驯服豹猫获得</li>
  <li>村庄中有时会生成流浪猫，可直接驯服</li>
  <li>有11种不同的毛色和图案变种</li>
</ul>
<h3>行为</h3>
<p>猫的行为特点：</p>
<ul>
  <li>驯服后会跟随玩家，也可命令其坐下</li>
  <li>会随机攻击附近的兔子和鸡</li>
  <li>会避免接触苦力怕，苦力怕也会主动远离猫</li>
  <li>会偶尔带来礼物给玩家，如羽毛、兔子脚等</li>
  <li>喜欢坐在箱子、床和熔炉上，此时这些方块无法使用</li>
</ul>
<h3>互动</h3>
<p>与猫的互动方式：</p>
<ul>
  <li>使用生鱼可以驯服流浪猫或繁殖已驯服的猫</li>
  <li>右键点击可让猫坐下或跟随</li>
  <li>会在玩家睡觉后给予礼物</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/猫"
    },
    {
        name: "青蛙",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/thumb/Cold_Frog_Walking.gif/120px-Cold_Frog_Walking.gif",
        shortDescription: "会跳跃的两栖生物，能捕食小型生物",
        description: `<p>青蛙(Frog)是一种两栖被动生物，有三种不同的变种，会捕食小型生物并将其转化为蛙灯。</p>
<h3>生成</h3>
<p>青蛙的生成方式：</p>
<ul>
  <li>由蝌蚪成长而来，成长环境决定其变种</li>
  <li>普通青蛙：在森林、平原等温和生物群系生成</li>
  <li>雪蛙：在寒冷生物群系生成，皮肤为白色</li>
  <li>热带蛙：在温暖生物群系生成，皮肤为橙色</li>
</ul>
<h3>行为</h3>
<p>青蛙的行为特点：</p>
<ul>
  <li>能在陆地和水中活动，跳跃能力强</li>
  <li>会捕食小型生物，如史莱姆、岩浆怪、蛆虫等</li>
  <li>捕食后会产生相应颜色的蛙灯</li>
  <li>下雨时会更加活跃</li>
</ul>
<h3>用途</h3>
<p>青蛙的用途：</p>
<ul>
  <li>捕食史莱姆会产生绿色蛙灯</li>
  <li>捕食岩浆怪会产生橙色蛙灯</li>
  <li>使用海草可以繁殖青蛙</li>
  <li>蛙灯可用于装饰和制作</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/青蛙"
    },
    {
        name: "豹猫",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/thumb/Ocelot_JE1_BE1.png/800px-Ocelot_JE1_BE1.png",
        shortDescription: "丛林中的野生猫科动物，可被驯服为猫",
        description: `<p>豹猫(Ocelot)是一种生活在丛林中的被动生物，外形类似现实中的豹猫，可被驯服为不同品种的猫。</p>
<h3>生成</h3>
<p>豹猫生成于：</p>
<ul>
  <li>丛林和竹林生物群系</li>
  <li>以1-2只为一组生成</li>
  <li>有三种不同的外观变种</li>
</ul>
<h3>行为</h3>
<p>豹猫的行为特点：</p>
<ul>
  <li>行动敏捷，会主动躲避玩家</li>
  <li>可通过缓慢接近并喂食生鱼来驯服</li>
  <li>驯服过程较为困难，玩家移动过快会导致驯服失败</li>
  <li>驯服成功后会转化为随机品种的猫</li>
  <li>会攻击鸡和兔子</li>
</ul>
<h3>用途</h3>
<p>豹猫的主要用途：</p>
<ul>
  <li>驯服后成为猫，能驱赶苦力怕</li>
  <li>未驯服的豹猫会让爬行者保持距离</li>
  <li>使用生鱼可以繁殖已驯服的豹猫（此时会繁殖出猫）</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/豹猫"
    },
    {
        name: "雪傀儡",
        category: "效用生物",
        image: "https://zh.minecraft.wiki/images/thumb/Snow_Golem_JE1_BE1.png/279px-Snow_Golem_JE1_BE1.png",
        shortDescription: "由玩家创造的效用生物，会攻击敌对生物并留下雪迹",
        description: `<p>雪傀儡(Snow Golem)是一种由玩家创造的效用生物，外形类似雪人，会攻击敌对生物并在行走时留下雪迹。</p>
<h3>生成</h3>
<p>雪傀儡的生成方式：</p>
<ul>
  <li>由玩家摆放方块生成：在两个雪块上放置一个南瓜或南瓜灯</li>
  <li>不能自然生成</li>
</ul>
<h3>行为</h3>
<p>雪傀儡的行为特点：</p>
<ul>
  <li>会主动攻击10格范围内的敌对生物</li>
  <li>攻击方式是投掷雪球，造成少量伤害</li>
  <li>在行走时会在地面上留下雪层</li>
  <li>在温暖生物群系、沙漠和下界中会逐渐融化并死亡</li>
  <li>会被雨水伤害</li>
</ul>
<h3>用途</h3>
<p>雪傀儡的用途：</p>
<ul>
  <li>协助玩家防御敌对生物</li>
  <li>在适当的生物群系中可用于制作雪块</li>
  <li>可用于触发压力板和按钮</li>
  <li>死亡时不会掉落任何物品</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/雪傀儡"
    },
    {
        name: "蜜蜂",
        category: "中立生物",
        image: "https://zh.minecraft.wiki/images/Bee_with_nectar_JE1.gif",
        shortDescription: "会飞的昆虫，能采集花粉并制作蜂蜜",
        description: `<p>蜜蜂(Bee)是一种会飞的中立生物，生活在蜂巢或蜂箱中，能采集花粉并生产蜂蜜，受到攻击时会反击。</p>
<h3>生成</h3>
<p>蜜蜂生成于：</p>
<ul>
  <li>繁花森林生物群系的蜂巢中，每个蜂巢有3只蜜蜂</li>
  <li>平原、向日葵平原和森林生物群系的橡树和白桦树上可能生成蜂巢</li>
  <li>以1-3只为一组在蜂巢周围飞行</li>
</ul>
<h3>行为</h3>
<p>蜜蜂的行为特点：</p>
<ul>
  <li>白天飞出蜂巢采集花粉，夜间返回蜂巢</li>
  <li>采集花粉后会给作物授粉，加速其生长</li>
  <li>受到攻击时会群起反击，使用尾刺攻击并造成中毒效果</li>
  <li>攻击后会死亡</li>
  <li>可被花吸引</li>
</ul>
<h3>用途</h3>
<p>蜜蜂的用途：</p>
<ul>
  <li>蜂巢和蜂箱中会生成蜂蜜，可使用玻璃瓶收集</li>
  <li>蜂蜜可用于制作蜂蜜瓶和蜂蜜块</li>
  <li>加速作物生长</li>
  <li>使用花可以繁殖蜜蜂</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/蜜蜂"
    },
    {
        name: "海豚",
        category: "中立生物",
        image: "https://zh.minecraft.wiki/images/thumb/Dolphin.gif/215px-Dolphin.gif",
        shortDescription: "聪明的水生生物，能引导玩家找到沉船和水下遗迹",
        description: `<p>海豚(Dolphin)是一种聪明的中立水生生物，生活在海洋中，能与玩家互动并提供帮助。</p>
<h3>生成</h3>
<p>海豚生成于：</p>
<ul>
  <li>所有海洋生物群系，除了冻洋</li>
  <li>以3-5只为一组生成</li>
  <li>生成在Y=45-63之间的水中</li>
</ul>
<h3>行为</h3>
<p>海豚的行为特点：</p>
<ul>
  <li>是游戏中游泳速度最快的生物之一</li>
  <li>会追逐玩家并跃出水面</li>
  <li>玩家喂食生鱼后，会引导玩家找到附近的沉船或水下遗迹</li>
  <li>离开水后会很快死亡</li>
  <li>会被玩家攻击时会变得敌对</li>
</ul>
<h3>互动与用途</h3>
<p>与海豚的互动：</p>
<ul>
  <li>在海豚附近游泳时，玩家会获得"海豚的恩惠"效果，游泳速度加快</li>
  <li>使用生鱼可以繁殖海豚</li>
  <li>帮助玩家定位水下结构</li>
  <li>死亡时掉落经验球</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/海豚"
    },
    {
        name: "狐狸",
        category: "中立生物",
        image: "https://zh.minecraft.wiki/images/Fox_JE1_BE1.png",
        shortDescription: "夜间活动的小型哺乳动物，会偷取物品",
        description: `<p>狐狸(Fox)是一种夜间活动的中立生物，有红色和白色两种变种，会偷取物品并攻击小型生物。</p>
<h3>生成</h3>
<p>狐狸生成于：</p>
<ul>
  <li>红色狐狸：森林、针叶林、桦木森林等生物群系</li>
  <li>白色狐狸：积雪的针叶林和冰原生物群系</li>
  <li>以2-4只为一组生成，有5%几率生成幼狐</li>
</ul>
<h3>行为</h3>
<p>狐狸的行为特点：</p>
<ul>
  <li>白天睡觉，夜间活动</li>
  <li>会偷取地面上的物品，尤其是发光浆果</li>
  <li>会攻击鸡、兔子、鱼和幼年海龟</li>
  <li>受到威胁时会逃跑</li>
  <li>可被玩家缓慢接近，使用浆果驯服</li>
</ul>
<h3>互动</h3>
<p>与狐狸的互动：</p>
<ul>
  <li>使用甜浆果或发光浆果可以驯服狐狸，使其信任玩家</li>
  <li>驯服的狐狸会跟随玩家，并帮助攻击敌对生物</li>
  <li>使用浆果可以繁殖狐狸</li>
  <li>会将偷取的物品带给信任的玩家</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/狐狸"
    },
    {
        name: "铁傀儡",
        category: "效用生物",
        image: "https://zh.minecraft.wiki/images/thumb/Iron_Golem_JE1_BE1.png/319px-Iron_Golem_JE1_BE1.png",
        shortDescription: "强大的效用生物，会保护村民免受攻击",
        description: `<p>铁傀儡(Iron Golem)是一种强大的效用生物，外形高大，由铁锭构成，会主动保护村民和玩家免受敌对生物的攻击。</p>
<h3>生成</h3>
<p>铁傀儡的生成方式：</p>
<ul>
  <li>村庄自然生成：当村庄有足够多的村民和床时</li>
  <li>玩家建造：摆放4个铁块成T字形，顶部放置一个南瓜或南瓜灯</li>
</ul>
<h3>行为</h3>
<p>铁傀儡的行为特点：</p>
<ul>
  <li>会缓慢巡逻村庄，保护村民免受敌对生物攻击</li>
  <li>会主动攻击16格范围内的大多数敌对生物</li>
  <li>攻击方式是挥臂重击，造成大量伤害并可能击退敌人</li>
  <li>对玩家通常中立，但如果玩家攻击村民，会变得敌对</li>
  <li>拥有较高的生命值和防御力</li></li>
</ul>
<h3>用途</h3>
<p>铁傀儡的用途：</p>
<ul>
  <li>保护村庄和玩家免受敌对生物侵害</li>
  <li>死亡时掉落3-5个铁锭和0-1个罂粟</li>
  <li>可被玩家治疗：使用铁锭右键点击可恢复生命值</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/铁傀儡"
    },
    {
        name: "羊驼",
        category: "中立生物",
        image: "https://zh.minecraft.wiki/images/thumb/Gray_Llama_JE2_BE2.png/391px-Gray_Llama_JE2_BE2.png",
        shortDescription: "可被驯服的生物，能携带物品并吐口水防御",
        description: `<p>羊驼(Llama)是一种可被驯服的中立生物，外形类似骆驼，能携带物品，受到威胁时会向敌人吐口水。</p>
<h3>生成</h3>
<p>羊驼生成于：</p>
<ul>
  <li>山地、针叶林山地和热带草原生物群系</li>
  <li>以4-6只为一组生成</li>
  <li>有4种不同的毛色变种</li>
</ul>
<h3>行为</h3>
<p>羊驼的行为特点：</p>
<ul>
  <li>可通过多次右键点击骑乘来驯服，无需鞍具</li>
  <li>驯服后可装备地毯和箱子，箱子可提供3-15个物品栏空间</li>
  <li>受到攻击或被其他生物挑衅时会向其吐口水，造成少量伤害</li>
  <li>可以形成 caravan（商队）：多只羊驼会跟随领头的羊驼</li>
</ul>
<h3>用途</h3>
<p>羊驼的用途：</p>
<ul>
  <li>作为运输工具，携带物品</li>
  <li>使用干草捆可以繁殖羊驼</li>
  <li>不同强度的羊驼可提供不同数量的物品栏空间</li>
  <li>死亡时掉落0-2个皮革和其携带的地毯</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/羊驼"
    },
    {
        name: "行商羊驼",
        category: "中立生物",
        image: "https://zh.minecraft.wiki/images/thumb/Light_Gray_Carpeted_Llama_JE1_BE1.png/391px-Light_Gray_Carpeted_Llama_JE1_BE1.png",
        shortDescription: "跟随流浪商人的羊驼，会保护商人",
        description: `<p>行商羊驼(Trader Llama)是羊驼的一个变种，专门跟随流浪商人出现，会保护商人免受攻击。</p>
<h3>生成</h3>
<p>行商羊驼的生成方式：</p>
<ul>
  <li>不会自然生成，只会伴随流浪商人生成</li>
  <li>每个流浪商人通常伴随着2只行商羊驼</li>
</ul>
<h3>行为</h3>
<p>行商羊驼的行为特点：</p>
<ul>
  <li>会跟随流浪商人移动，保持较近的距离</li>
  <li>当流浪商人受到攻击时，会向攻击者吐口水</li>
  <li>不能被玩家驯服，但可以被拴绳牵引</li>
  <li>流浪商人消失时，行商羊驼也会随之消失</li>
</ul>
<h3>特性</h3>
<p>行商羊驼的特性：</p>
<ul>
  <li>背上有装饰性的蓝色毯子，区别于普通羊驼</li>
  <li>不能装备箱子或其他物品</li>
  <li>死亡时掉落0-2个皮革</li>
  <li>流浪商人会尝试治愈受伤的行商羊驼</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/行商羊驼"
    },
    {
        name: "熊猫",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/images/thumb/Panda_JE1_BE1.png/643px-Panda_JE1_BE1.png",
        shortDescription: "稀有的熊科生物，有多种行为状态，生活在竹林",
        description: `<p>熊猫(Panda)是一种稀有的被动生物，外形可爱，生活在竹林中，有多种不同的行为状态和外观变种。</p>
<h3>生成</h3>
<p>熊猫生成于：</p>
<ul>
  <li>仅在竹林生物群系生成</li>
  <li>以1-2只为一组生成</li>
  <li>有7种不同的基因变种，表现出不同的行为和外观</li>
</ul>
<h3>行为</h3>
<p>熊猫的行为特点：</p>
<ul>
  <li>大多数时间会缓慢走动、坐下或翻滚</li>
  <li>不同变种有不同行为：普通熊猫、懒惰熊猫、担忧熊猫、顽皮熊猫等</li>
  <li>生气的熊猫会攻击玩家和其他生物</li>
  <li>会被竹子吸引，以竹子为食</li>
</ul>
<h3>互动</h3>
<p>与熊猫的互动：</p>
<ul>
  <li>使用竹子可以繁殖熊猫</li>
  <li>小熊猫需要20分钟成长为成年熊猫</li>
  <li>熊猫幼崽会玩滚来滚去的游戏</li>
  <li>死亡时掉落竹子</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/熊猫"
    },
    {
        name: "北极熊",
        category: "中立生物",
        image: "https://zh.minecraft.wiki/images/Polar_Bear_attacking.gif",
        shortDescription: "生活在寒冷地区的熊科生物，保护幼崽时会变得敌对",
        description: `<p>北极熊(Polar Bear)是一种生活在寒冷地区的中立生物，平时较为温和，但在保护幼崽时会变得极具攻击性。</p>
<h3>生成</h3>
<p>北极熊生成于：</p>
<ul>
  <li>冰原、冰刺平原、冻河和积雪的沙滩生物群系</li>
  <li>以1-2只为一组生成，有5%几率生成幼崽</li>
</ul>
<h3>行为</h3>
<p>北极熊的行为特点：</p>
<ul>
  <li>平时为中立状态，不会主动攻击玩家</li>
  <li>当玩家靠近幼崽时，成年北极熊会变得敌对并攻击玩家</li>
  <li>会主动攻击海豹</li>
  <li>在陆地上移动速度较快，也能在水中游泳</li>
</ul>
<h3>特性</h3>
<p>北极熊的特性：</p>
<ul>
  <li>拥有较高的生命值和攻击力</li>
  <li>不能被驯服，但可以被拴绳牵引</li>
  <li>死亡时掉落生鲑鱼或生鳕鱼</li>
  <li>不会受到寒冷伤害</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/北极熊"
    },
    {
        name: "狼",
        category: "中立生物",
        image: "https://zh.minecraft.wiki/images/thumb/Wolf_JE1_BE1.png/620px-Wolf_JE1_BE1.png",
        shortDescription: "可被驯服为宠物狗的野生犬科生物",
        description: `<p>狼(Wolf)是一种中立生物，外形类似现实中的狼，可被玩家驯服为宠物狗，帮助玩家攻击敌对生物。</p>
<h3>生成</h3>
<p>狼生成于：</p>
<ul>
  <li>森林、针叶林、白桦木森林和积雪的针叶林生物群系</li>
  <li>以4-8只为一组生成</li>
  <li>生成时有10%几率是幼崽</li>
</ul>
<h3>行为</h3>
<p>狼的行为特点：</p>
<ul>
  <li>未被驯服时为中立状态，被攻击后会变得敌对并群起反击</li>
  <li>可通过喂食骨头驯服，驯服成功几率随机</li>
  <li>驯服后会变成狗，跟随玩家并攻击玩家攻击的目标</li>
  <li>生命值通过尾巴的高度显示，尾巴越高生命值越高</li>
</ul>
<h3>互动</h3>
<p>与狼/狗的互动：</p>
<ul>
  <li>使用骨头驯服野生狼</li>
  <li>使用生肉可以治愈受伤的狗并使其繁殖</li>
  <li>右键点击可让狗坐下或跟随</li>
  <li>驯服的狗死亡时会掉落经验球</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/狼"
    },
    {
        name: "烈焰人",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/Blaze.gif",
        shortDescription: "下界的火焰生物，会发射火球攻击玩家",
        description: `<p>烈焰人(Blaze)是一种生活在下界的敌对生物，由火焰和烟雾构成，会飞行并发射火球攻击玩家，是获取烈焰棒的唯一途径。</p>
<h3>生成</h3>
<p>烈焰人生成于：</p>
<ul>
  <li>下界要塞的刷怪笼中</li>
  <li>不会自然生成在其他地方</li>
  <li>刷怪笼周围通常有铁块和栅栏保护</li>
</ul>
<h3>行为</h3>
<p>烈焰人的行为特点：</p>
<ul>
  <li>具有飞行能力，会漂浮在空中</li>
  <li>会主动攻击16格范围内的玩家</li>
  <li>攻击方式是发射火球，火球可被玩家反弹</li>
  <li>免疫火焰和熔岩伤害</li>
  <li>在水中会受到伤害并减速</li>
</ul>
<h3>掉落物</h3>
<p>烈焰人死亡时掉落：</p>
<ul>
  <li>0-2根烈焰棒，用于制作酿造台和末影眼</li>
  <li>被玩家杀死时掉落10点经验值</li>
  <li>有几率掉落 blaze rod（烈焰棒）和经验球</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/烈焰人"
    },
    {
        name: "苦力怕",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/thumb/Creeper_JE2_BE1.png/128px-Creeper_JE2_BE1.png",
        shortDescription: "绿色的爆炸生物，靠近玩家时会自爆，造成巨大伤害",
        description: `<p>苦力怕(Creeper)是Minecraft中最具标志性的敌对生物之一，外观为绿色爬行动物，最大特点是靠近玩家时会自爆，造成大范围伤害。</p>
<h3>生成</h3>
<p>苦力怕生成条件：</p>
<ul>
  <li>在主世界亮度等级小于等于7的地方生成</li>
  <li>可在任何生物群系生成，除了蘑菇岛</li>
  <li>在雷暴天气中，苦力怕有几率被闪电击中变成高压苦力怕</li>
</ul>
<h3>行为</h3>
<p>苦力怕的行为模式：</p>
<ul>
  <li>会主动追逐16格范围内的玩家</li>
  <li>靠近玩家后会停止移动并开始嘶嘶作响，进入3秒倒计时</li>
  <li>倒计时结束前若玩家远离，会取消爆炸</li>
  <li>高压苦力怕的爆炸威力是普通苦力怕的1.5倍</li>
</ul>
<h3>掉落物</h3>
<p>苦力怕死亡时掉落：</p>
<ul>
  <li>0-2个火药，用于制作TNT和烟花</li>
  <li>被闪电杀死时会掉落音乐唱片"13"和"cat"</li>
  <li>如果被玩家或驯服的狼杀死，会掉落5点经验值</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/苦力怕"
    },
    {
        name: "溺尸",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/thumb/Drowned_with_Trident.png/336px-Drowned_with_Trident.png",
        shortDescription: "水下的僵尸变种，会游泳并使用三叉戟攻击",
        description: `<p>溺尸(Drowned)是僵尸的水下变种，是一种敌对生物，会在水中游泳并攻击玩家，有几率携带三叉戟。</p>
<h3>生成</h3>
<p>溺尸生成于：</p>
<ul>
  <li>所有海洋生物群系和河流中</li>
  <li>在水中的僵尸会在15秒后转化为溺尸</li>
  <li>在亮度等级小于等于7的水下区域生成</li>
</ul>
<h3>行为</h3>
<p>溺尸的行为特点：</p>
<ul>
  <li>能在水中自由游泳，也能在陆地上行走</li>
  <li>会主动攻击16格范围内的玩家、村民和海龟</li>
  <li>部分溺尸会手持三叉戟，能进行远程攻击</li>
  <li>非远程攻击的溺尸会游泳靠近玩家进行近战攻击</li>
  <li>在陆地上会寻找水源</li>
</ul>
<h3>掉落物</h3>
<p>溺尸死亡时掉落：</p>
<ul>
  <li>0-2块腐肉</li>
  <li>有几率掉落三叉戟、钓鱼竿或铜锭</li>
  <li>被玩家杀死时掉落5点经验值</li>
  <li>有几率掉落其手中的装备</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/溺尸"
    },
    {
        name: "远古守卫者",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/thumb/Elder_Guardian_JE2_BE2.gif/280px-Elder_Guardian_JE2_BE2.gif",
        shortDescription: "海底遗迹的强大守卫，会施加挖掘疲劳效果",
        description: `<p>远古守卫者(Elder Guardian)是一种强大的敌对水生生物，是守卫者的强化版本，仅生成于海底遗迹，会保护遗迹中的宝藏。</p>
<h3>生成</h3>
<p>远古守卫者生成于：</p>
<ul>
  <li>仅在海底遗迹（海底神殿）中生成</li>
  <li>每个海底遗迹中固定生成3只远古守卫者</li>
  <li>不会自然重生，被杀死后不会再生成</li>
</ul>
<h3>行为</h3>
<p>远古守卫者的行为特点：</p>
<ul>
  <li>会在海底遗迹内巡逻，保护遗迹</li>
  <li>会主动攻击16格范围内的玩家和鱿鱼</li>
  <li>有两种攻击方式：激光攻击和尖刺攻击</li>
  <li>会对附近的玩家施加"挖掘疲劳III"效果，持续5分钟</li>
  <li>在陆地上会很快死亡</li>
</ul>
<h3>掉落物</h3>
<p>远古守卫者死亡时掉落：</p>
<ul>
  <li>1个海晶碎片和0-2个海晶砂粒</li>
  <li>1个湿海绵</li>
  <li>被玩家杀死时掉落10点经验值</li>
  <li>有几率掉落远古守卫者的鳍，用于制作潮涌核心</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/远古守卫者"
    },
    {
        name: "末影螨",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/Endermite.gif",
        shortDescription: "小型的末地生物，会随机生成并攻击玩家",
        description: `<p>末影螨(Endermite)是一种小型敌对生物，外形类似末影人的缩小版，会随机生成并攻击玩家。</p>
<h3>生成</h3>
<p>末影螨的生成方式：</p>
<ul>
  <li>玩家使用末影珍珠时有5%的几率生成</li>
  <li>末影人瞬移时有15%的几率生成</li>
  <li>不能自然生成在任何生物群系</li>
  <li>生成后仅能存活2分钟</li>
</ul>
<h3>行为</h3>
<p>末影螨的行为特点：</p>
<ul>
  <li>体型非常小，仅有0.3格高</li>
  <li>会主动攻击8格范围内的玩家</li>
  <li>移动速度快，会躲避阳光</li>
  <li>在灵魂沙上会受到伤害</li>
  <li>会被末影人攻击</li>
</ul>
<h3>掉落物</h3>
<p>末影螨死亡时掉落：</p>
<ul>
  <li>被玩家杀死时掉落3点经验值</li>
  <li>不会掉落任何物品</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/末影螨"
    },
    {
        name: "唤魔者",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/Evoker_celebrating.gif",
        shortDescription: "林地府邸中的 spell-casting（施法）生物，能召唤恼鬼",
        description: `<p>唤魔者(Evoker)是一种强大的敌对生物，属于灾厄村民的一种，能使用魔法攻击玩家并召唤恼鬼，仅生成于林地府邸。</p>
<h3>生成</h3>
<p>唤魔者生成于：</p>
<ul>
  <li>仅在林地府邸的特定房间中生成</li>
  <li>每个林地府邸中生成2-3只</li>
  <li>也会作为袭击中的-wave（波次）出现</li>
</ul>
<h3>行为</h3>
<p>唤魔者的行为特点：</p>
<ul>
  <li>会使用两种魔法攻击：尖牙攻击和召唤恼鬼</li>
  <li>尖牙攻击：在玩家脚下生成尖牙，造成伤害</li>
  <li>召唤攻击：召唤2-4只恼鬼协助战斗</li>
  <li>会主动攻击玩家、村民和铁傀儡</li>
  <li>受到伤害时会尝试逃跑并与玩家保持距离</li>
</ul>
<h3>掉落物</h3>
<p>唤魔者死亡时掉落：</p>
<ul>
  <li>0-1个绿宝石</li>
  <li>1个不死图腾，用于在死亡时自动复活玩家</li>
  <li>被玩家杀死时掉落50点经验值</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/唤魔者"
    },
    {
        name: "恶魂",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/thumb/Ghast_JE3_BE3.gif/511px-Ghast_JE3_BE3.gif",
        shortDescription: "下界的巨大飞行生物，会发射火球攻击玩家",
        description: `<p>恶魂(Ghast)是一种巨大的飞行敌对生物，生活在下界，外形类似漂浮的幽灵，会发射火球攻击玩家。</p>
<h3>生成</h3>
<p>恶魂生成于：</p>
<ul>
  <li>下界的任何地方，除了下界要塞内部</li>
  <li>生成高度通常在Y=45-128之间</li>
  <li>在灵魂沙峡谷生物群系中更为常见</li>
</ul>
<h3>行为</h3>
<p>恶魂的行为特点：</p>
<ul>
  <li>会缓慢飞行，发出呜咽声</li>
  <li>会主动攻击100格范围内的玩家</li>
  <li>攻击方式是发射火球，火球可被玩家反弹</li>
  <li>火球击中方块会引起爆炸</li>
  <li>免疫火焰和熔岩伤害</li>
  <li>在主世界中会因窒息而死亡</li>
</ul>
<h3>掉落物</h3>
<p>恶魂死亡时掉落：</p>
<ul>
  <li>0-2个火药</li>
  <li>0-1个恶魂之泪，用于制作再生药水</li>
  <li>被玩家杀死时掉落5点经验值</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/恶魂"
    },
    {
        name: "守卫者",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/thumb/Guardian.gif/280px-Guardian.gif",
        shortDescription: "海底遗迹的守护者，会使用激光攻击",
        description: `<p>守卫者(Guardian)是一种敌对水生生物，生活在海底遗迹中，会使用激光攻击入侵者，保护遗迹中的宝藏。</p>
<h3>生成</h3>
<p>守卫者生成于：</p>
<ul>
  <li>仅在海底遗迹（海底神殿）内部和周围生成</li>
  <li>在遗迹内的刷怪笼中生成</li>
  <li>生成需要水，离开水后会死亡</li>
</ul>
<h3>行为</h3>
<p>守卫者的行为特点：</p>
<ul>
  <li>会在海底遗迹周围巡逻</li>
  <li>会主动攻击16格范围内的玩家和鱿鱼</li>
  <li>攻击方式是发射激光，需要几秒时间充能</li>
  <li>身体周围有尖刺，靠近的生物会受到伤害</li>
  <li>会对附近的玩家施加"挖掘疲劳I"效果</li>
</ul>
<h3>掉落物</h3>
<p>守卫者死亡时掉落：</p>
<ul>
  <li>0-2个海晶碎片和0-1个海晶砂粒</li>
  <li>有几率掉落生鳕鱼</li>
  <li>被玩家杀死时掉落5点经验值</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/守卫者"
    },
    {
        name: "疣猪兽",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/thumb/Hoglin_attacking.gif/120px-Hoglin_attacking.gif",
        shortDescription: "下界的猪形生物，会主动攻击玩家",
        description: `<p>疣猪兽(Hoglin)是一种生活在下界的敌对生物，外形类似猪但更为凶猛，会主动攻击玩家和其他生物。</p>
<h3>生成</h3>
<p>疣猪兽生成于：</p>
<ul>
  <li>下界的绯红森林生物群系</li>
  <li>以3-4只为一组生成，包含成年疣猪兽和幼崽</li>
  <li>生成在Y=63以下的区域</li>
</ul>
<h3>行为</h3>
<p>疣猪兽的行为特点：</p>
<ul>
  <li>会主动攻击32格范围内的玩家、猪灵和凋灵骷髅</li>
  <li>移动速度快，会冲撞玩家</li>
  <li>害怕诡异菌和诡异菌相关方块</li>
  <li>在主世界或末路之地会逐渐转化为僵尸疣猪兽</li>
  <li>会被绯红菌吸引</li>
</ul>
<h3>掉落物</h3>
<p>疣猪兽死亡时掉落：</p>
<ul>
  <li>2-4块生疣猪兽肉（被烧死时掉落熟疣猪兽肉）</li>
  <li>0-1个疣猪兽牙，用于制作黑耀石按钮和探测铁轨</li>
  <li>被玩家杀死时掉落5点经验值</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/疣猪兽"
    },
    {
        name: "尸壳",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/thumb/Husk_JE2_BE2.png/360px-Husk_JE2_BE2.png",
        shortDescription: "沙漠中的僵尸变种，不会在阳光下燃烧",
        description: `<p>尸壳(Husk)是僵尸的沙漠变种，是一种敌对生物，具有独特的外观和特性，适应沙漠环境。</p>
<h3>生成</h3>
<p>尸壳生成于：</p>
<ul>
  <li>沙漠、沙漠丘陵和沙漠湖泊生物群系</li>
  <li>在亮度等级小于等于7的地方生成</li>
  <li>僵尸在沙漠生物群系中有80%的几率生成为尸壳</li>
</ul>
<h3>行为</h3>
<p>尸壳的行为特点：</p>
<ul>
  <li>行为模式与普通僵尸相似，但有一些特殊特性</li>
  <li>不会在阳光下燃烧</li>
  <li>攻击玩家时会施加饥饿效果</li>
  <li>在水中浸泡30秒后会转化为普通僵尸</li>
  <li>会攻击村民，将其转化为僵尸村民</li>
</ul>
<h3>掉落物</h3>
<p>尸壳死亡时掉落：</p>
<ul>
  <li>0-2块腐肉</li>
  <li>有几率掉落铁锭、胡萝卜、马铃薯等物品</li>
  <li>佩戴的装备有几率掉落</li>
  <li>被玩家杀死时掉落5点经验值</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/尸壳"
    },
    {
        name: "岩浆怪",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/Magma_Cube_jumping.gif",
        shortDescription: "下界的史莱姆变种，生活在熔岩中，会弹跳攻击",
        description: `<p>岩浆怪(Magma Cube)是史莱姆的下界变种，是一种敌对生物，由岩浆构成，会弹跳着攻击玩家。</p>
<h3>生成</h3>
<p>岩浆怪生成于：</p>
<ul>
  <li>下界的任何地方，尤其是下界要塞和玄武岩三角洲</li>
  <li>在亮度等级小于等于7的地方生成</li>
  <li>有大、中、小三种尺寸</li>
</ul>
<h3>行为</h3>
<p>岩浆怪的行为特点：</p>
<ul>
  <li>会弹跳移动，弹跳高度随尺寸变化</li>
  <li>会主动攻击16格范围内的玩家</li>
  <li>免疫火焰和熔岩伤害</li>
  <li>在水中会受到伤害并减速</li>
  <li>被杀死时会分裂成2-4个小一级的岩浆怪</li>
</ul>
<h3>掉落物</h3>
<p>岩浆怪死亡时掉落：</p>
<ul>
  <li>仅小岩浆怪会掉落0-1个岩浆膏</li>
  <li>岩浆膏用于制作 magma cream（岩浆膏）和防火药水</li>
  <li>被玩家杀死时掉落经验值，随尺寸增加而增加</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/岩浆怪"
    },
    {
        name: "幻翼",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/thumb/Phantom_JE2.gif/250px-Phantom_JE2.gif",
        shortDescription: "攻击长时间不睡觉玩家的飞行生物",
        description: `<p>幻翼(Phantom)是一种敌对飞行生物，只会在玩家长时间不睡觉时生成，会俯冲攻击玩家。</p>
<h3>生成</h3>
<p>幻翼的生成条件：</p>
<ul>
  <li>仅当玩家连续3个游戏日（72分钟）没有睡觉时生成</li>
  <li>在夜间或雷暴天气生成</li>
  <li>生成在玩家上方20-34格的高度</li>
  <li>玩家周围生成数量随不睡觉时间增加而增加</li>
</ul>
<h3>行为</h3>
<p>幻翼的行为特点：</p>
<ul>
  <li>会在玩家上方盘旋飞行</li>
  <li>会周期性地俯冲攻击玩家</li>
  <li>白天会燃烧，但不会立即死亡</li>
  <li>可被栓绳牵引</li>
  <li>会被猫吓跑</li>
</ul>
<h3>掉落物</h3>
<p>幻翼死亡时掉落：</p>
<ul>
  <li>0-1个幻翼膜，用于修复鞘翅和制作缓降药水</li>
  <li>被玩家杀死时掉落5点经验值</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/幻翼"
    },
    {
        name: "猪灵蛮兵",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/thumb/JAPPA_Piglin_Brute.png/639px-JAPPA_Piglin_Brute.png",
        shortDescription: "下界的强大猪灵变种，守卫堡垒遗迹",
        description: `<p>猪灵蛮兵(Piglin Brute)是猪灵的强大变种，是一种敌对生物，专门守卫下界的堡垒遗迹，不会被黄金物品安抚。</p>
<h3>生成</h3>
<p>猪灵蛮兵生成于：</p>
<ul>
  <li>仅在下界的堡垒遗迹中生成</li>
  <li>以1-3只为一组生成在堡垒遗迹的特定房间</li>
  <li>生成时手持金斧</li>
</ul>
<h3>行为</h3>
<p>猪灵蛮兵的行为特点：</p>
<ul>
  <li>是游戏中少数完全敌对的生物，无论玩家是否穿着黄金装备都会攻击</li>
  <li>会主动攻击32格范围内的玩家、村民、铁傀儡等生物</li>
  <li>攻击力高，移动速度快</li>
  <li>在主世界或末路之地会转化为僵尸猪灵蛮兵</li>
  <li>不会进行交易，也不会被黄金物品吸引</li>
</ul>
<h3>掉落物</h3>
<p>猪灵蛮兵死亡时掉落：</p>
<ul>
  <li>0-1个金锭</li>
  <li>有几率掉落其手持的金斧</li>
  <li>被玩家杀死时掉落20点经验值</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/猪灵蛮兵"
    },
    {
        name: "掠夺者",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/Pillager_Charging_Crossbow.gif",
        shortDescription: "持有弩的灾厄村民，会参与袭击",
        description: `<p>掠夺者(Pillager)是一种敌对生物，属于灾厄村民的一种，持有弩，会主动攻击村民和玩家，是袭击事件的主要参与者。</p>
<h3>生成</h3>
<p>掠夺者生成于：</p>
<ul>
  <li>掠夺者前哨站中，以2-5只为一组生成</li>
  <li>在村庄附近生成的袭击事件中出现</li>
  <li>会与其他灾厄村民一起生成</li>
</ul>
<h3>行为</h3>
<p>掠夺者的行为特点：</p>
<ul>
  <li>使用弩进行远程攻击，会保持距离并寻找掩护</li>
  <li>会主动攻击16格范围内的玩家、村民和铁傀儡</li>
  <li>会与其他灾厄村民协同作战</li>
  <li>击败携带不祥之兆效果的玩家后会触发村庄袭击</li>
</ul>
<h3>掉落物</h3>
<p>掠夺者死亡时掉落：</p>
<ul>
  <li>0-1个弩（有几率附魔）</li>
  <li>0-2根箭</li>
  <li>0-1个绿宝石</li>
  <li>被玩家杀死时掉落5点经验值</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/掠夺者"
    },
    {
        name: "劫掠兽",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/thumb/Ravager_JE1.png/240px-Ravager_JE1.png",
        shortDescription: "大型敌对生物，灾厄村民的坐骑，破坏力强",
        description: `<p>劫掠兽(Ravager)是一种大型敌对生物，外形类似犀牛，是灾厄村民的坐骑，具有强大的破坏力。</p>
<h3>生成</h3>
<p>劫掠兽生成于：</p>
<ul>
  <li>作为袭击事件的后期波次出现</li>
  <li>掠夺者前哨站的笼子里有几率生成</li>
  <li>通常由掠夺者骑乘</li>
</ul>
<h3>行为</h3>
<p>劫掠兽的行为特点：</p>
<ul>
  <li>体型庞大，能破坏大多数植物和部分方块</li>
  <li>会主动攻击24格范围内的玩家、村民、铁傀儡等生物</li>
  <li>攻击方式包括冲撞和践踏，造成大量伤害</li>
  <li>会咆哮，使周围的玩家和生物受到恐惧效果</li>
  <li>受伤时会逃跑一小段距离再返回战斗</li>
</ul>
<h3>掉落物</h3>
<p>劫掠兽死亡时掉落：</p>
<ul>
  <li>3-7块生肉（被烧死时掉落熟肉）</li>
  <li>被玩家杀死时掉落20点经验值</li>
  <li>会掉落其佩戴的铃铛（如果有的话）</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/劫掠兽"
    },
    {
        name: "潜影贝",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/Shulker_shooting.gif?59e6c&20240213044750",
        shortDescription: "末地城的防御生物，能隐形并发射子弹",
        description: `<p>潜影贝(Shulker)是一种敌对生物，仅生成于末地城，能与周围方块融为一体并发射具有漂浮效果的子弹。</p>
<h3>生成</h3>
<p>潜影贝生成于：</p>
<ul>
  <li>仅在末地城的墙壁上生成</li>
  <li>每个末地城会生成多个潜影贝</li>
  <li>生成时会与周围方块颜色一致</li>
</ul>
<h3>行为</h3>
<p>潜影贝的行为特点：</p>
<ul>
  <li>平时闭合，与周围方块颜色一致，几乎难以察觉</li>
  <li>玩家靠近时会打开并露出内部的紫色核心</li>
  <li>会发射紫色子弹，击中玩家会造成伤害并施加漂浮效果</li>
  <li>被攻击时会瞬移到附近的方块上</li>
  <li>免疫漂浮效果</li>
</ul>
<h3>掉落物</h3>
<p>潜影贝死亡时掉落：</p>
<ul>
  <li>0-2个潜影壳，用于制作潜影箱</li>
  <li>被玩家杀死时掉落5点经验值</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/潜影贝"
    },
    {
        name: "蠹虫",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/Silverfish.gif",
        shortDescription: "小型地下生物，会从怪物蛋中出现并群起攻击",
        description: `<p>蠹虫(Silverfish)是一种小型敌对生物，生活在地下，会从特定方块（怪物蛋）中出现，受到攻击时会召唤同伴。</p>
<h3>生成</h3>
<p>蠹虫生成于：</p>
<ul>
  <li>从石砖、圆石等怪物蛋方块中生成，当玩家破坏这些方块时</li>
  <li>要塞的图书馆和走廊中</li>
  <li>极端 hills（山地）生物群系的地下区域</li>
</ul>
<h3>行为</h3>
<p>蠹虫的行为特点：</p>
<ul>
  <li>体型小，移动速度快</li>
  <li>受到攻击或发现玩家时，会召唤附近的其他蠹虫</li>
  <li>会躲进石头类方块中，将其转化为怪物蛋</li>
  <li>会主动攻击10格范围内的玩家</li>
  <li>群体攻击时会对玩家造成持续伤害</li>
</ul>
<h3>掉落物</h3>
<p>蠹虫死亡时掉落：</p>
<ul>
  <li>被玩家杀死时掉落5点经验值</li>
  <li>不会掉落任何物品</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/蠹虫"
    },
    {
        name: "骷髅",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/thumb/Skeleton_Aiming_JE2_BE3.png/339px-Skeleton_Aiming_JE2_BE3.png",
        shortDescription: "使用弓箭的骷髅生物，会远程攻击玩家",
        description: `<p>骷髅(Skeleton)是一种常见的敌对生物，外形为骷髅骨架，使用弓箭进行远程攻击，是游戏中最早出现的敌对生物之一。</p>
<h3>生成</h3>
<p>骷髅生成于：</p>
<ul>
  <li>在主世界亮度等级小于等于7的地方生成</li>
  <li>可在任何生物群系生成</li>
  <li>在要塞、废弃矿井等地下结构中常见</li>
  <li>有几率生成骑着骷髅马的骷髅骑手</li>
</ul>
<h3>行为</h3>
<p>骷髅的行为特点：</p>
<ul>
  <li>使用弓箭进行远程攻击，会与玩家保持距离</li>
  <li>会主动攻击16格范围内的玩家、村民和铁傀儡</li>
  <li>白天暴露在阳光下会燃烧，除非在水中或有遮挡</li>
  <li>会躲避爬行者，避免被其爆炸伤害</li>
  <li>有几率生成时带有附魔弓箭</li>
</ul>
<h3>掉落物</h3>
<p>骷髅死亡时掉落：</p>
<ul>
  <li>0-2根骨头</li>
  <li>0-2根箭</li>
  <li>有几率掉落弓（可能附魔）</li>
  <li>被玩家杀死时掉落5点经验值</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/骷髅"
    },
    {
        name: "史莱姆",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/thumb/Slime.gif/230px-Slime.gif",
        shortDescription: "绿色的粘性生物，会弹跳攻击，死亡时分裂",
        description: `<p>史莱姆(Slime)是一种敌对生物，由绿色粘液构成，会弹跳着攻击玩家，死亡时会分裂成更小的史莱姆。</p>
<h3>生成</h3>
<p>史莱姆生成于：</p>
<ul>
  <li>在主世界亮度等级小于等于7的地方生成</li>
  <li>沼泽生物群系中更为常见，尤其是在满月夜晚</li>
  <li>下界的史莱姆区块中也会生成</li>
  <li>有大、中、小三种尺寸</li>
</ul>
<h3>行为</h3>
<p>史莱姆的行为特点：</p>
<ul>
  <li>会弹跳移动，弹跳高度和距离随尺寸变化</li>
  <li>会主动攻击16格范围内的玩家</li>
  <li>攻击方式是跳跃撞击玩家</li>
  <li>被杀死时会分裂成2-4个小一级的史莱姆</li>
  <li>最小的史莱姆不会再分裂</li>
</ul>
<h3>掉落物</h3>
<p>史莱姆死亡时掉落：</p>
<ul>
  <li>仅小史莱姆会掉落0-2个粘液球</li>
  <li>粘液球用于制作粘性活塞、史莱姆块等</li>
  <li>被玩家杀死时掉落经验值，随尺寸增加而增加</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/史莱姆"
    },
    {
        name: "流浪者",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/thumb/Stray_Aiming.png/387px-Stray_Aiming.png",
        shortDescription: "寒冷地区的骷髅变种，会发射带有迟缓效果的箭",
        description: `<p>流浪者(Stray)是骷髅的寒冷变种，是一种敌对生物，生活在寒冷生物群系，会发射带有迟缓效果的箭。</p>
<h3>生成</h3>
<p>流浪者生成于：</p>
<ul>
  <li>冰原、冰刺平原、冻河等寒冷生物群系</li>
  <li>在亮度等级小于等于7的地方生成</li>
  <li>骷髅在雪地生物群系中有80%的几率生成为流浪者</li>
</ul>
<h3>行为</h3>
<p>流浪者的行为特点：</p>
<ul>
  <li>行为模式与普通骷髅相似，但有特殊攻击效果</li>
  <li>使用弓箭进行远程攻击，箭矢带有迟缓效果</li>
  <li>会主动攻击16格范围内的玩家、村民和铁傀儡</li>
  <li>白天暴露在阳光下会燃烧</li>
</ul>
<h3>掉落物</h3>
<p>流浪者死亡时掉落：</p>
<ul>
  <li>0-2根骨头</li>
  <li>0-2根箭</li>
  <li>有几率掉落弓（可能附魔）和迟缓药水</li>
  <li>被玩家杀死时掉落5点经验值</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/流浪者"
    },
    {
        name: "恼鬼",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/Vex_JE4_BE4.gif",
        shortDescription: "唤魔者召唤的小型飞行生物，能穿透墙壁",
        description: `<p>恼鬼(Vex)是一种小型飞行敌对生物，由唤魔者召唤而来，能穿透墙壁，对玩家造成持续威胁。</p>
<h3>生成</h3>
<p>恼鬼的生成方式：</p>
<ul>
  <li>不能自然生成，只能由唤魔者通过魔法召唤</li>
  <li>每次召唤会生成2-4只恼鬼</li>
  <li>召唤后会存在30-119秒，然后消失</li>
</ul>
<h3>行为</h3>
<p>恼鬼的行为特点：</p>
<ul>
  <li>体型小，呈蓝色，具有飞行能力</li>
  <li>能穿透所有类型的方块，无视地形障碍</li>
  <li>会快速冲向目标进行攻击，移动速度极快</li>
  <li>会优先攻击唤魔者的目标，如玩家和村民</li>
  <li>免疫跌落伤害</li>
</ul>
<h3>掉落物</h3>
<p>恼鬼死亡时掉落：</p>
<ul>
  <li>被玩家杀死时掉落3点经验值</li>
  <li>不会掉落任何物品</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/恼鬼"
    },
    {
        name: "卫道士",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/thumb/Vindicator_JE3_BE3.png/257px-Vindicator_JE3_BE3.png",
        shortDescription: "一种手持斧头的敌对生物，会生成在林地府邸中。",
        description: `<p>卫道士(Vindicator)是《我的世界》中的一种敌对生物，属于灾厄村民的一种，通常手持铁斧或斧头。它们会主动攻击玩家和村民。</p>
<h3>生成</h3>
<p>卫道士可以生成在：</p>
<ul>
  <li>林地府邸的各种房间中</li>
  <li>袭击事件中作为增援出现</li>
</ul>
<h3>行为</h3>
<p>卫道士是非常危险的近战攻击者，会主动追逐并攻击玩家、村民、铁傀儡和流浪商人。当它们被命名为"Johnny"时，会攻击除其他灾厄村民外的所有生物。</p>
<h3>战斗</h3>
<p>卫道士使用斧头进行攻击，具有较高的伤害输出。它们的生命值为24点（12颗心），在困难难度下造成的伤害更高。击败后会掉落绿宝石、斧头（有几率附魔）和经验值。</p>`,
        link: "https://zh.minecraft.wiki/w/卫道士"
    },
    {
        name: "监守者",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/Warden_sonic_boom_attack.gif",
        shortDescription: "一种强大的敌对生物，生成于深邃洞穴，通过震动和声音感知玩家。",
        description: `<p>监守者(Warden)是《我的世界》中一种极其强大的敌对生物，生成于深邃洞穴生物群系。它是游戏中最强大的生物之一，具有极高的生命值和伤害。</p>
<h3>生成</h3>
<p>监守者不会自然生成，而是由潜声传感器检测到足够的振动后，通过潜声尖啸召唤而来。生成过程需要一定时间，给予玩家逃离的机会。</p>
<h3>行为</h3>
<p>监守者是盲目的，依靠振动和声音来感知周围环境。它会对任何发出声音的实体发起攻击，包括玩家、生物甚至掉落的物品。监守者具有很强的嗅觉，能探测到隐藏的玩家。</p>
<h3>战斗</h3>
<p>监守者拥有500点生命值（250颗心），普通攻击可造成30点伤害，而尖啸攻击可造成15点伤害并给予黑暗效果。它对大多数状态效果免疫，建议玩家尽量避开而非对抗。击败后会掉落一个潜声之心。</p>`,
        link: "https://zh.minecraft.wiki/w/监守者"
    },
    {
        name: "女巫",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/thumb/Witch_BE3.png/266px-Witch_BE3.png",
        shortDescription: "一种使用各种药水进行攻击和防御的敌对生物。",
        description: `<p>女巫(Witch)是《我的世界》中的一种敌对生物，擅长使用各种药水进行战斗。它们穿着紫色的长袍，戴着尖顶帽，外形类似传统童话中的女巫。</p>
<h3>生成</h3>
<p>女巫可以自然生成在：</p>
<ul>
  <li>沼泽小屋周围</li>
  <li>袭击事件中</li>
  <li>由被闪电击中的村民转变而成</li>
</ul>
<h3>行为</h3>
<p>女巫会主动攻击玩家、村民、铁傀儡和流浪商人。它们不会近战攻击，而是使用各种负面药水进行远程攻击，包括伤害药水、迟缓药水、剧毒药水等。同时，女巫会饮用正面药水进行自我治疗和防御。</p>
<h3>战斗</h3>
<p>女巫拥有26点生命值（13颗心），击败后会掉落各种药水、红石粉、糖、萤石粉等物品。使用弓箭对付女巫是比较有效的策略，因为它们在饮用药水时会有短暂的硬直。</p>`,
        link: "https://zh.minecraft.wiki/w/女巫"
    },
    {
        name: "凋灵骷髅",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/thumb/Wither_Skeleton_JE4_BE3.png/405px-Wither_Skeleton_JE4_BE3.png",
        shortDescription: "生成于下界要塞的敌对生物，会造成凋零效果。",
        description: `<p>凋灵骷髅(Wither Skeleton)是《我的世界》下界中的一种敌对生物，是骷髅的下界变种。它们比普通骷髅更高大，通体黑色，会造成凋零效果。</p>
<h3>生成</h3>
<p>凋灵骷髅只生成在下界要塞中，生成概率比普通骷髅高。它们可以在亮度等级小于7的地方生成。</p>
<h3>行为</h3>
<p>凋灵骷髅是近战攻击者，会主动追逐并攻击玩家、铁傀儡和村民。它们移动速度较快，并且有一定的跳跃能力。当被杀死时，有几率召唤一只凋零玫瑰。</p>
<h3>战斗</h3>
<p>凋灵骷髅拥有20点生命值（10颗心），攻击会造成凋零效果，使玩家持续受到伤害并降低生命值上限。击败后会掉落煤炭、骨头，有几率掉落石剑（可能附魔）和头颅。收集三个凋灵骷髅头颅可以召唤凋灵。</p>`,
        link: "https://zh.minecraft.wiki/w/凋灵骷髅"
    },
    {
        name: "僵尸疣猪兽",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/Zoglin_attacking.gif",
        shortDescription: "一种凶猛的敌对生物，由疣猪兽被带到主世界后转变而成。",
        description: `<p>僵尸疣猪兽(Zoglin)是《我的世界》中的一种敌对生物，是疣猪兽的僵尸变种。它们具有攻击性，会主动攻击大多数生物。</p>
<h3>生成</h3>
<p>僵尸疣猪兽不会自然生成，而是由疣猪兽被带到主世界或末路之地后，经过20-30秒转变而成。这个过程不可逆。</p>
<h3>行为</h3>
<p>僵尸疣猪兽是凶猛的近战攻击者，会主动攻击除了苦力怕、僵尸猪灵和其他僵尸疣猪兽之外的几乎所有生物。它们移动速度快，会跳跃，并且可以冲破木门。</p>
<h3>战斗</h3>
<p>僵尸疣猪兽拥有40点生命值（20颗心），攻击伤害较高。它们对火焰和岩浆免疫，但会受到阳光伤害。击败后会掉落腐肉，有几率掉落金粒。</p>`,
        link: "https://zh.minecraft.wiki/w/僵尸疣猪兽"
    },
    {
        name: "僵尸村民",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/thumb/Swamp_Zombie_Villager_Base.png/337px-Swamp_Zombie_Villager_Base.png",
        shortDescription: "村民被僵尸感染后的形态，可以被治愈恢复为普通村民。",
        description: `<p>僵尸村民(Zombie Villager)是《我的世界》中的一种敌对生物，是村民被僵尸感染后的形态。它们保留了原村民的职业特征，但行为与普通僵尸相似。</p>
<h3>生成</h3>
<p>僵尸村民可以通过以下方式生成：</p>
<ul>
  <li>普通僵尸攻击村民并使其死亡时有几率生成</li>
  <li>在村庄中自然生成（尤其是在困难难度下）</li>
  <li>僵尸刷怪蛋有几率生成</li>
</ul>
<h3>行为</h3>
<p>僵尸村民的行为与普通僵尸相似，会在白天燃烧（除非在水中或阴影处），会主动攻击玩家和村民。它们会尝试破门而入，并在村庄中寻找村民。</p>
<h3>治疗与用途</h3>
<p>僵尸村民可以被治愈：使用虚弱药水对其施加虚弱效果，然后右键点击金苹果。经过一段时间后，僵尸村民会恢复为普通村民，并保留其原有职业。这是在村庄被破坏后恢复村民数量的重要方法。</p>`,
        link: "https://zh.minecraft.wiki/w/僵尸村民"
    },
    {
        name: "僵尸",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/Zombie_JE2_BE2.png",
        shortDescription: "最常见的敌对生物之一，夜间生成，会攻击玩家和村民。",
        description: `<p>僵尸(Zombie)是《我的世界》中最常见的敌对生物之一，外形类似腐烂的人类。它们是新手玩家遇到的第一种敌对生物，广泛分布于世界各地。</p>
<h3>生成</h3>
<p>僵尸会在主世界亮度等级小于7的地方自然生成，尤其常见于夜间和地下洞穴。它们也会在僵尸刷怪笼中生成。</p>
<h3>行为</h3>
<p>僵尸会主动攻击玩家、村民、铁傀儡和流浪商人。在白天，暴露在阳光下的僵尸会燃烧，除非它们处于水中、阴影处或戴着头盔。僵尸会尝试破门而入，并能在困难难度下破坏木门。</p>
<h3>变种与掉落</h3>
<p>僵尸有多种变种，包括尸壳、溺尸和僵尸村民等。击败僵尸后会掉落腐肉，有几率掉落铁锭、胡萝卜、马铃薯和武器（可能附魔）。</p>`,
        link: "https://zh.minecraft.wiki/w/僵尸"
    },
    {
        name: "洞穴蜘蛛",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/thumb/Cave_Spider_JE3_BE3.png/792px-Cave_Spider_JE3_BE3.png",
        shortDescription: "生成于废弃矿井的小型蜘蛛，会造成剧毒效果。",
        description: `<p>洞穴蜘蛛(Cave Spider)是《我的世界》中的一种敌对生物，是蜘蛛的小型变种。它们比普通蜘蛛小，颜色更深，会造成剧毒效果。</p>
<h3>生成</h3>
<p>洞穴蜘蛛不会自然生成，只会从废弃矿井中的洞穴蜘蛛刷怪笼生成。这些刷怪笼通常被 cobweb（蜘蛛网）包围。</p>
<h3>行为</h3>
<p>洞穴蜘蛛的行为与普通蜘蛛相似，是节肢生物，会爬墙，在黑暗中眼睛会发光。它们在白天不会燃烧，会主动攻击玩家和铁傀儡。</p>
<h3>战斗</h3>
<p>洞穴蜘蛛拥有12点生命值（6颗心），体型小可以穿过1x1的空间。它们的攻击会造成剧毒效果，在简单难度下持续7秒，普通难度下持续15秒，困难难度下持续30秒。击败后会掉落线和蜘蛛眼。</p>`,
        link: "https://zh.minecraft.wiki/w/洞穴蜘蛛"
    },
    {
        name: "末影人",
        category: "中立生物",
        image: "https://zh.minecraft.wiki/images/Enderman_Screaming.gif",
        shortDescription: "一种高大的中立生物，可以瞬间移动并拾取方块。",
        description: `<p>末影人(Enderman)是《我的世界》中一种独特的中立生物，具有黑色的身体、紫色的眼睛和长长的四肢。它们可以瞬间移动，并能拾取和放置方块。</p>
<h3>生成</h3>
<p>末影人可以在以下地方生成：</p>
<ul>
  <li>主世界亮度等级小于7的地方</li>
  <li>下界任何亮度等级</li>
  <li>末路之地（生成概率最高）</li>
</ul>
<h3>行为</h3>
<p>末影人通常是中立的，但当玩家直视它们的眼睛时，它们会变得敌对并攻击玩家。它们可以瞬间移动，避开伤害和障碍物。末影人会拾取和放置某些方块，也会在雨中受到伤害。</p>
<h3>战斗</h3>
<p>末影人拥有40点生命值（20颗心），攻击伤害较高。它们对弓箭有较高的闪避率，但会被水伤害。击败后会掉落末影珍珠，有几率掉落经验球。末影珍珠可用于 teleportation（ teleportation）或制作末影之眼。</p>`,
        link: "https://zh.minecraft.wiki/w/末影人"
    },
    {
        name: "猪灵",
        category: "中立生物",
        image: "https://zh.minecraft.wiki/images/Piglin_celebrate_hunt.gif",
        shortDescription: "下界的类人生物，对黄金物品有特殊反应。",
        description: `<p>猪灵(Piglin)是《我的世界》下界中的一种中立生物，具有猪的特征和人类的形态。它们对黄金物品有特殊的喜爱和反应，是下界更新中加入的重要生物。</p>
<h3>生成</h3>
<p>猪灵生成在下界的绯红森林和下界荒地生物群系，生成在亮度等级小于11的地方。它们通常以2-4只为一组生成。</p>
<h3>行为</h3>
<p>猪灵是中立生物，但如果玩家没有穿着至少一件黄金盔甲，它们会主动攻击玩家。它们会被黄金物品吸引，会与玩家进行物品交易，也会互相交换物品。猪灵害怕 zombified猪灵，会主动避开它们。</p>
<h3>交易与掉落</h3>
<p>玩家可以向手持黄金锭的猪灵投掷黄金锭来进行交易，猪灵会给予玩家各种下界物品。击败猪灵后会掉落金粒、黄金锭、下界石英等物品。当猪灵进入主世界或末路之地时，会转变为 zombified猪灵。</p>`,
        link: "https://zh.minecraft.wiki/w/猪灵"
    },
    {
        name: "蜘蛛",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/images/thumb/Spider_JE5_BE4.png/768px-Spider_JE5_BE4.png",
        shortDescription: "常见的敌对生物，会爬墙，夜间活跃。",
        description: `<p>蜘蛛(Spider)是《我的世界》中常见的敌对生物，外形类似现实中的蜘蛛，但体型更大。它们是节肢生物，具有独特的爬墙能力。</p>
<h3>生成</h3>
<p>蜘蛛会在主世界亮度等级小于7的地方自然生成，尤其常见于夜间和地下洞穴。它们也会在蜘蛛刷怪笼中生成。</p>
<h3>行为</h3>
<p>蜘蛛会主动攻击玩家和铁傀儡，在黑暗中眼睛会发光。它们可以爬任何非透明方块的垂直表面，并且能在天花板上移动。与其他敌对生物不同，蜘蛛在白天不会燃烧，而是变得中立，只有被攻击时才会反击。</p>
<h3>战斗与掉落</h3>
<p>蜘蛛拥有16点生命值（8颗心），移动速度较快，会跳跃。击败后会掉落线和蜘蛛眼，蜘蛛眼可用于酿造药水。当蜘蛛生成时，有几率生成骑在其背上的骷髅，形成蜘蛛骑士。</p>`,
        link: "https://zh.minecraft.wiki/w/蜘蛛"
    },
    {
        name: "僵尸猪灵",
        category: "中立生物",
        image: "https://zh.minecraft.wiki/images/thumb/Zombified_Piglin_JE8.png/450px-Zombified_Piglin_JE8.png",
        shortDescription: "下界的僵尸猪生物，曾经被称为僵尸猪人。",
        description: `<p>僵尸猪灵(Zombified Piglin)是《我的世界》下界中的一种中立生物，具有猪的头部和人类的身体，通体呈僵尸般的绿色。它们曾经被称为僵尸猪人(Zombie Pigman)。</p>
<h3>生成</h3>
<p>僵尸猪灵可以在以下地方生成：</p>
<ul>
  <li>下界任何亮度等级的地方</li>
  <li>主世界中猪被闪电击中时</li>
  <li>猪灵或猪灵蛮兵进入主世界或末路之地后转变而成</li>
</ul>
<h3>行为</h3>
<p>僵尸猪灵通常是中立的，但当其中一只受到攻击时，周围的所有僵尸猪灵都会变得敌对并攻击玩家。它们会成群结队地移动，手持金剑。僵尸猪灵对火焰和岩浆免疫。</p>
<h3>掉落</h3>
<p>击败僵尸猪灵后会掉落金粒，有几率掉落黄金锭、金剑（可能附魔）和腐肉。它们是游戏中获取黄金的重要来源之一。</p>`,
        link: "https://zh.minecraft.wiki/w/僵尸猪灵"
    },
    {
        name: "末影龙",
        category: "Boss生物",
        image: "https://zh.minecraft.wiki/images/Ender_Dragon.gif",
        shortDescription: "游戏的最终Boss，栖息在末路之地。",
        description: `<p>末影龙(Ender Dragon)是《我的世界》中的第一个Boss生物，是游戏的最终挑战之一。它是一条巨大的黑色龙，具有紫色的眼睛和翅膀，栖息在末路之地。</p>
<h3>生成</h3>
<p>末影龙只会在末路之地的中央岛屿上生成一次，是该维度的标志性生物。击败后可以通过放置末影水晶使其重生。</p>
<h3>行为</h3>
<p>末影龙会在末路之地的中央岛屿上空盘旋飞行，主动攻击玩家。它会通过末地水晶恢复生命值，这些水晶位于岛屿周围的黑曜石柱顶端。末影龙可以穿过方块，并且会摧毁除黑曜石、末地石和基岩外的大多数方块。</p>
<h3>战斗与掉落</h3>
<p>末影龙拥有200点生命值（100颗心），是游戏中最强大的生物之一。击败它需要先摧毁末地水晶，然后攻击其弱点。击败后会掉落大量经验值（12000点）和一个龙蛋，同时开启通往末路之地折跃门的通道。</p>`,
        link: "https://zh.minecraft.wiki/w/末影龙"
    },
    {
        name: "凋灵",
        category: "Boss生物",
        image: "https://zh.minecraft.wiki/images/thumb/Wither_JE2_BE2.png/600px-Wither_JE2_BE2.png",
        shortDescription: "由玩家召唤的Boss生物，会飞行并造成凋零效果。",
        description: `<p>凋灵(Wither)是《我的世界》中的第二个Boss生物，由玩家主动召唤而来。它是一个黑色的三头骨架生物，具有毁灭性的力量和飞行能力。</p>
<h3>生成</h3>
<p>凋灵不会自然生成，需要由玩家通过摆放灵魂沙或灵魂土和凋灵骷髅头颅来召唤：</p>
<ul>
  <li>摆放3x3的灵魂沙/灵魂土底座，中间一行空置</li>
  <li>在顶端放置三个凋灵骷髅头颅</li>
</ul>
<h3>行为</h3>
<p>凋灵生成后会经历一个无敌的蓄力阶段，然后变得敌对。它会飞行，攻击周围的所有生物（除了亡灵生物）。凋灵会发射蓝色的凋灵之首，造成爆炸和凋零效果。当生命值低于一半时，凋灵会进入"凋灵风暴"状态，获得更高的防御和攻击力。</p>
<h3>战斗与掉落</h3>
<p>凋灵拥有300点生命值（150颗心），是极其强大的Boss。击败后会掉落 Nether Star（下界之星），用于制作信标。凋灵在攻击时会破坏周围的方块，战斗时需要注意环境安全。</p>`,
        link: "https://zh.minecraft.wiki/w/凋灵"
    }
];