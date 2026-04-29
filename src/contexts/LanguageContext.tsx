import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const translations = {
  en: {
    // Navigation
    "nav.network": "Network",
    "nav.rewards": "Rewards",
    "nav.governance": "Governance",
    "nav.transparency": "Transparency",
    "nav.docs": "Docs",
    "nav.systemFlow": "System Flow",
    "nav.connectWallet": "Connect Wallet",
    "nav.language": "Language",
    
    // Hero
    "hero.title": "Earn Rewards Through Team Growth & Matrix Placement",
    "hero.subtitle": "Activate with 80 USDT, join the global binary matrix, and unlock up to 10 income levels with transparent on-chain rules.",
    "hero.connectWallet": "Connect Wallet",
    "hero.viewDemo": "View Demo",

    // Stats
    "stats.entry": "80 USDT Entry",
    "stats.levels": "10 Levels",
    "stats.onChain": "100% On-Chain",
    "stats.instant": "Instant Rewards",

    // Partners
    "partners.poweredBy": "Powered by Leading Networks",

    // Matrix Features
    "features.globalMatrix": "Global Matrix Tracking",
    "features.trackingTitle": "Advanced tracking system.",
    "features.trackingDesc": "Instantly locate all matrix interactions.",
    "features.detected": "Matrix interaction detected",
    
    "features.communityUpdates": "Community Updates",
    "features.stayConnected": "Stay connected with your network's growth.",
    "features.today": "Today",
    "features.now": "Now",
    "features.update1": "New V5 override commission generated in your downline structure.",
    "features.update2": "Successfully compounded rewards to upgrade matrix position.",
    
    "features.rewardRules": "Matrix Reward Rules",
    "features.rewardRulesDesc": "10 levels of on-chain overrides and instant rewards.",
    "features.level": "Level",
    "features.howToAchieve": "How to Achieve",
    "features.oneTimeReward": "One-time Reward",
    "features.override": "Override %",
    "features.notes": "Notes",
    
    "features.activityFeed": "Activity Feed",
    "features.activityTitle": "Monitor network liquidity.",
    "features.activityDesc": "Instantly verify transparent pool transactions.",

    // Matrix Table
    "table.v1.achieve": "Directly refer 3 members (each 80U)",
    "table.v1.notes": "Basic entry. Must personally invite 3 paying members.",
    "table.v2.achieve": "No direct req. Public matrix fills under you",
    "table.v2.notes": "Matrix placement fills under you automatically.",
    "table.v3.achieve": "No direct req. Deeper matrix formation",
    "table.v3.notes": "Completely hands-free; queue does the work.",
    "table.v4.achieve": "Directly develop 4 V1 members",
    "table.v4.notes": "First level with override commission.",
    "table.v5.achieve": "6 direct V1s + at least 1 V4 in downline",
    "table.v5.notes": "Need a V4 somewhere under you.",
    "table.v6.achieve": "6 direct V1s + at least 3 V4s in downline",
    "table.v6.notes": "You need 3 different V4s.",
    "table.v7.achieve": "12 direct V1s + at least 1 V5 in downline",
    "table.v7.notes": "Jump in direct V1 requirement.",
    "table.v8.achieve": "15 direct V1s + at least 3 V5s in downline",
    "table.v8.notes": "Rely on V5s in your structure.",
    "table.v9.achieve": "18 direct V1s + at least 2 V8s in downline",
    "table.v9.notes": "Requires strong team depth.",
    "table.v10.achieve": "Directly develop 2 V9 members anywhere",
    "table.v10.notes": "The top of the ladder. Only 2 V9s needed.",

    "manage.title": "Seamlessly Manage Your Matrix",
    "manage.desc": "Our intuitive dashboard gives you complete control over your network growth. Monitor your 10 levels of income and track real-time USDT rewards as they land in your wallet.",
    "manage.li1": "Real-time analytics",
    "manage.li2": "Smart contract interaction",

    "collab.title": "Built for Collaborative Growth",
    "collab.desc": "Success in Block Matrix is a team effort. Our binary structure is designed to reward collective growth, ensuring that as your community expands, everyone benefits from the shared momentum.",
    "collab.quote": "\"The automated spillover and referral system makes it easy to grow together. It's the most transparent community I've been part of.\"",
    "collab.author": "COMMUNITY LEAD",

    // System Flow
    "flow.back": "Back",
    "flow.title": "System Flow",
    "flow.live": "Live Runtime",
    "flow.desc": "Visual representation of the Block Matrix settlement and configuration engines processing runtime data flows across ten membership tiers.",

    // Accordion / FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Got questions? We've got answers about Block Matrix.",
    "faq.q1": "How do I join the Block Matrix ecosystem?",
    "faq.a1": "Connect your Web3 wallet (e.g., MetaMask or Trust Wallet) and activate your account with a one-time entry of 80 USDT. The smart contract handles the rest automatically.",
    "faq.q2": "Is the system really 100% on-chain?",
    "faq.a2": "Yes. Every transaction, referral link, and reward payout is verified and executed entirely via smart contracts. There are no central servers holding your funds.",
    "faq.q3": "Do I need to refer people to earn?",
    "faq.a3": "While directing referrals drastically accelerates your progress (especially for V4-V10 tiers), the global binary matrix ensures that you can also benefit from 'spillover' placed under you by the community.",
    "faq.q4": "How are rewards distributed?",
    "faq.a4": "Rewards are instantly deposited to your connected wallet whenever there is a transaction in your downline that qualifies according to your membership level (V1-V10).",
    "faq.q5": "What are the network fees involved?",
    "faq.a5": "You only pay standard gas fees for the network you choose (e.g., BNB Chain, Ethereum). Block Matrix itself does not charge hidden withdrawal or deposit fees.",
    
    // CTA
    "cta.title": "Join the Global Matrix from Anywhere",
    "cta.subtitle": "Access your dashboard, track rewards, and manage your network directly from your mobile device. Secure, fast, and on-chain.",
    "cta.getStarted": "Get Started Now",
    "cta.learnMore": "Learn More",
    
    // Footer
    "footer.builtOnChain": "© 2026 Block Matrix. Built 100% On-Chain.",
    "footer.activeRule": "Active Rule Version: v2026.04.19",
    "footer.terms": "Terms",
    "footer.privacy": "Privacy",
    "footer.security": "Security",
    "footer.status": "Status",
    "footer.twitter": "Twitter",
    "footer.discord": "Discord",
    "footer.telegram": "Telegram",
  },
  zh: {
    // Navigation
    "nav.network": "网络",
    "nav.rewards": "奖励",
    "nav.governance": "治理",
    "nav.transparency": "透明度",
    "nav.docs": "文档",
    "nav.systemFlow": "系统流程",
    "nav.connectWallet": "连接钱包",
    "nav.language": "语言",
    
    // Hero
    "hero.title": "通过团队成长和矩阵排位赚取奖励",
    "hero.subtitle": "80 USDT 激活，加入全球双轨矩阵，通过透明的链上规则解锁高达10级的收入。",
    "hero.connectWallet": "连接钱包",
    "hero.viewDemo": "查看演示",

    // Stats
    "stats.entry": "80 USDT 入驻",
    "stats.levels": "10 级奖励",
    "stats.onChain": "100% 链上",
    "stats.instant": "即时奖励",

    // Partners
    "partners.poweredBy": "由领先网络支持",

    // Matrix Features
    "features.globalMatrix": "全球矩阵追踪",
    "features.trackingTitle": "高级追踪系统。",
    "features.trackingDesc": "即时定位所有矩阵交互。",
    "features.detected": "检测到矩阵交互",
    
    "features.communityUpdates": "社区动态",
    "features.stayConnected": "保持与网络增长的连接。",
    "features.today": "今天",
    "features.now": "现在",
    "features.update1": "您的下线结构中生成了新的V5级差佣金。",
    "features.update2": "成功复利奖励并升级矩阵位置。",
    
    "features.rewardRules": "矩阵奖励规则",
    "features.rewardRulesDesc": "10级链上级差和即时奖励。",
    "features.level": "等级",
    "features.howToAchieve": "如何达成",
    "features.oneTimeReward": "一次性奖励",
    "features.override": "级差 %",
    "features.notes": "备注",

    "features.activityFeed": "活动动态",
    "features.activityTitle": "监控网络流动性。",
    "features.activityDesc": "即时验证透明的资金池交易。",

    // Matrix Table
    "table.v1.achieve": "直推 3 个有效会员（每个 80U）",
    "table.v1.notes": "基础入门。必须亲自邀请 3 个付费会员。",
    "table.v2.achieve": "无直推要求。公排矩阵自动滑落",
    "table.v2.notes": "排位自动在您下方滑落填充。",
    "table.v3.achieve": "无直推要求。更深层的矩阵形成",
    "table.v3.notes": "完全解放双手，排队系统自动运行。",
    "table.v4.achieve": "直接培养 4 个 V1 会员",
    "table.v4.notes": "第一级可享受级差佣金的等级。",
    "table.v5.achieve": "6个直推V1 + 伞下至少1个V4",
    "table.v5.notes": "伞下某处需要出现一个V4。",
    "table.v6.achieve": "6个直推V1 + 伞下至少3个V4",
    "table.v6.notes": "您需要3个不同的V4。",
    "table.v7.achieve": "12个直推V1 + 伞下至少1个V5",
    "table.v7.notes": "直推V1要求跨度跳跃。",
    "table.v8.achieve": "15个直推V1 + 伞下至少3个V5",
    "table.v8.notes": "依赖您的结构中的V5。",
    "table.v9.achieve": "18个直推V1 + 伞下至少2个V8",
    "table.v9.notes": "需要强大的团队深度。",
    "table.v10.achieve": "在伞下任意位置培养2个V9",
    "table.v10.notes": "最高级别，只需要2个V9。",

    "manage.title": "轻松管理您的矩阵",
    "manage.desc": "我们直观的仪表板让您完全掌控网络的增长。监控10级收入并实时跟踪入账的USDT奖励。",
    "manage.li1": "实时分析",
    "manage.li2": "智能合约交互",

    "collab.title": "专为协作增长打造",
    "collab.desc": "在Block Matrix中获得成功靠的是团队努力。我们的双轨结构旨在奖励共同成长，确保随着社区的扩大，每个人都能从共同的动力中受益。",
    "collab.quote": "“自动滑落和推荐系统让我们很容易共同成长。这是我加入过的最透明的社区。”",
    "collab.author": "社区带头人",

    // System Flow
    "flow.back": "返回",
    "flow.title": "系统流程",
    "flow.live": "实时运行",
    "flow.desc": "展示了Block Matrix结算和配置引擎在十个会员层级之间处理运行时数据流的交互。 ",

    // Accordion / FAQ
    "faq.title": "常见问题解答",
    "faq.subtitle": "有疑问吗？这里有关于 Block Matrix 的解答。",
    "faq.q1": "我该如何加入 Block Matrix 生态系统？",
    "faq.a1": "连接您的 Web3 钱包（如 MetaMask 或 Trust Wallet）并以一次性 80 USDT 的入场费激活您的账户。智能合约会自动处理剩下的事情。",
    "faq.q2": "系统真的是 100% 链上的吗？",
    "faq.a2": "是的。每一笔交易、推荐链接和奖励支付都是完全通过智能合约验证和执行的。没有任何中央服务器持有您的资金。",
    "faq.q3": "我必须推荐人才能赚钱吗？",
    "faq.a3": "虽然推荐他人会极大加速您的进度（尤其是 V4-V10 级别），全球双轨矩阵确保您也可以通过社区在您下方放置的“滑落”中获益。",
    "faq.q4": "奖励是如何分配的？",
    "faq.a4": "当您的下线中有符合您会员等级（V1-V10）条件的交易时，奖励将立即存入您连接的钱包。",
    "faq.q5": "这涉及什么网络费用？",
    "faq.a5": "您只需为您选择的网络（如 BNB Chain，Ethereum）支付标准的 Gas 费。Block Matrix 本身不收取隐藏的提款或存款手续费。",
    
    // CTA
    "cta.title": "随时随地加入全球矩阵",
    "cta.subtitle": "直接通过移动设备访问您的仪表板、跟踪奖励并管理您的网络。安全、快速且基于链上。",
    "cta.getStarted": "立即开始",
    "cta.learnMore": "了解更多",
    
    // Footer
    "footer.builtOnChain": "© 2026 Block Matrix. 100% 链上构建。",
    "footer.activeRule": "现行规则版本：v2026.04.19",
    "footer.terms": "条款",
    "footer.privacy": "隐私",
    "footer.security": "安全",
    "footer.status": "状态",
    "footer.twitter": "推特",
    "footer.discord": "Discord",
    "footer.telegram": "电报",
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
