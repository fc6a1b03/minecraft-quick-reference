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
        shortDescription: "一种会跟随玩家的生物，会掉落悦灵盒和荧光墨囊。",
        description: `<p>悦灵(Axolotl)是《我的世界》中的一种被动型水生生物，外观类似现实中的墨西哥钝口螈。它们有五种不同的颜色变种，会主动攻击鱼和鱿鱼。</p>
<h3>生成</h3>
<p>悦灵只会在水生生物群系的水中自然生成，包括：</p>
<ul>
  <li>温水海洋</li>
  <li>暖水海洋</li>
  <li> lukewarm ocean（温水海洋）</li>
  <li>冷水海洋</li>
  <li>海洋</li>
</ul>
<h3>行为</h3>
<p>悦灵会跟随玩家，当玩家手持桶时，它们会主动靠近玩家。如果被伤害，它们会随机传送到附近位置。悦灵会主动攻击鱼和鱿鱼，但不会攻击发光鱿鱼。</p>
<h3>用途</h3>
<p>悦灵最主要的作用是协助玩家：</p>
<ul>
  <li>治疗玩家：当玩家在水中受伤时，附近的悦灵会给予玩家生命恢复效果</li>
  <li>可以被玩家用桶捕捉，变成桶装悦灵</li>
  <li>繁殖：使用热带鱼桶喂食两只悦灵可以使其繁殖</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/%E6%82%A6%E7%81%B5"
    },
    {
        name: "蜜蜂",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/w/File:Bee_JE1.gif",
        shortDescription: "一种会生产和收集花粉的生物，可以被驯服并帮助玩家授粉作物。",
        description: `<p>蜜蜂(Bee)是《我的世界》中的一种被动型生物。它们会收集花粉并帮助作物授粉，当被激怒时会攻击玩家。</p>
<h3>生成</h3>
<p>蜜蜂会在以下结构中自然生成：</p>
<ul>
  <li>村庄中的蜂箱附近</li>
  <li>森林生物群系中的树上（1.15版本及以后）</li>
</ul>
<h3>行为</h3>
<p>蜜蜂有以下行为特征：</p>
<ul>
  <li>白天活跃，晚上回巢</li>
  <li>会采集花的花粉，使花变成被采集状态</li>
  <li>会为附近的作物授粉，加速作物生长</li>
  <li>被激怒时会攻击玩家，造成中毒效果</li>
  <li>下雨时会寻找避雨的地方</li>
</ul>
<h3>繁殖</h3>
<p>使用花朵喂食两只蜜蜂可以使其繁殖。蜜蜂会跟随持有花朵的玩家。</p>`,
        link: "https://zh.minecraft.wiki/w/%E8%9C%9C%E8%9C%82"
    },
    {
        name: "猫",
        category: "被动生物",
        image: "https://zh.minecraft.wiki/w/File:Cat_JE2.gif",
        shortDescription: "一种常见的家养动物，可以被驯服，会吓跑幻翼和苦力怕。",
        description: `<p>猫(Cat)是《我的世界》中的一种被动型生物，可以被驯服为宠物。它们有多种不同的品种和颜色。</p>
<h3>生成</h3>
<p>猫会在以下地点自然生成：</p>
<ul>
  <li>村庄中的村庄房屋附近</li>
</ul>
<h3>行为</h3>
<p>猫有以下行为特征：</p>
<ul>
  <li>会主动攻击兔子、幼年海龟和幻翼</li>
  <li>会避开玩家，除非被驯服</li>
  <li>会坐在玩家放置的床上附近</li>
  <li>会吓跑苦力怕和幻翼</li>
  <li>会跟随持有生 cod 或生鲑鱼的玩家</li>
</ul>
<h3>驯服</h3>
<p>可以通过给野生猫喂食生 cod 或生鲑鱼来驯服它们。驯服后可以用线绳牵引猫。</p>`,
        link: "https://zh.minecraft.wiki/w/%E7%8C%AB"
    },
    {
        name: "洞穴蜘蛛",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/w/File:Cave_Spider_JE2.gif",
        shortDescription: "蜘蛛的变种，体型更小，会施加中毒效果。",
        description: `<p>洞穴蜘蛛(Cave Spider)是蜘蛛的一种变种，主要在废弃矿井中生成。它们比普通蜘蛛体型更小，攻击力更强，并且攻击时会施加中毒效果。</p>
<h3>生成</h3>
<p>洞穴蜘蛛只在以下地点自然生成：</p>
<ul>
  <li>废弃矿井的蜘蛛刷怪笼附近</li>
</ul>
<h3>行为</h3>
<p>洞穴蜘蛛的行为与普通蜘蛛类似，但有以下区别：</p>
<ul>
  <li>不会在阳光下燃烧</li>
  <li>攻击时会施加中毒效果</li>
  <li>体型更小，可以穿过1格高的空间</li>
  <li>爬墙能力与蜘蛛相同</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/%E6%B4%9E%E7%A9%B4%E8%9C%98%E8%9B%9B"
    },
    {
        name: "末影龙",
        category: "Boss生物",
        image: "https://zh.minecraft.wiki/w/File:Ender_Dragon.gif",
        shortDescription: "末地的Boss，是游戏中最著名的Boss之一。",
        description: `<p>末影龙(Ender Dragon)是《我的世界》中的一个Boss生物，是游戏中的主要Boss之一。击败末影龙被认为是游戏的主要目标之一。</p>
<h3>生成</h3>
<p>末影龙在以下情况下生成：</p>
<ul>
  <li>在末地主岛中心的末地传送门上方</li>
  <li>通过末地传送门框架放置末影之眼激活传送门后生成</li>
  <li>使用命令可以生成末影龙</li>
</ul>
<h3>行为</h3>
<p>末影龙有复杂的AI和多种攻击方式：</p>
<ul>
  <li>在末地传送门上方盘旋</li>
  <li>攻击玩家时会俯冲</li>
  <li>会破坏末地水晶</li>
  <li>会降落在末地传送门上</li>
  <li>会随机传送到末地各处</li>
</ul>
<h3>战斗</h3>
<p>击败末影龙需要：</p>
<ul>
  <li>破坏围绕末地传送门的末地水晶</li>
  <li>攻击飞行中的末影龙</li>
  <li>使用弓箭或魔法攻击更有效</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/%E6%9C%AB%E5%BD%B1%E9%BE%99"
    },
    {
        name: "守卫者",
        category: "敌对生物",
        image: "https://zh.minecraft.wiki/w/File:Guardian_JE3.gif",
        shortDescription: "生活在海底神殿中的敌对生物，会发射激光攻击玩家。",
        description: `<p>守卫者(Guardian)是《我的世界》中的一种敌对生物，只在海底神殿中生成。它们会使用激光攻击玩家和其它生物。</p>
<h3>生成</h3>
<p>守卫者只在以下地点自然生成：</p>
<ul>
  <li>海底神殿内部</li>
</ul>
<h3>行为</h3>
<p>守卫者有以下行为特征：</p>
<ul>
  <li>在水中移动速度很快</li>
  <li>会发射激光攻击目标</li>
  <li>会给予玩家挖掘疲劳效果</li>
  <li>死亡时会掉落海晶碎片和海晶砂粒</li>
</ul>
<h3>掉落物</h3>
<p>守卫者死亡时会掉落：</p>
<ul>
  <li>经验球(5点)</li>
  <li>海晶碎片(0-2个)</li>
  <li>海晶砂粒(0-1个)</li>
  <li>鱼(如果被玩家或驯服的狼杀死)</li>
</ul>`,
        link: "https://zh.minecraft.wiki/w/%E5%AE%88%E5%8D%AB%E8%80%85"
    }
];