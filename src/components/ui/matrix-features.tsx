'use client'
import { Activity, Map as MapIcon, MessageCircle, Info } from 'lucide-react'
import DottedMap from 'dotted-map'
import { Area, AreaChart, CartesianGrid } from 'recharts'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from './chart'
import { cn } from '../../lib/utils'
import { useLanguage } from '../../contexts/LanguageContext'

export function PlatformFeatures() {
    const { t } = useLanguage();
    return (
        <section className="px-4 py-16 md:py-32 bg-surface-container-lowest border-t border-parchment-border">
            <div className="mx-auto grid max-w-[1200px] border border-parchment-border bg-white rounded-[16px] md:grid-cols-2 shadow-sm overflow-hidden text-charcoal-ink">
                <div>
                    <div className="p-6 sm:p-12">
                        <span className="text-charcoal-ink/60 font-semibold uppercase tracking-wider text-xs flex items-center gap-2">
                            <MapIcon className="size-4 text-amethyst-link" />
                            {t('features.globalMatrix')}
                        </span>

                        <p className="mt-8 text-3xl font-semibold tracking-tight leading-tight">{t('features.trackingTitle')} <span className="text-charcoal-ink/60">{t('features.trackingDesc')}</span></p>
                    </div>

                    <div aria-hidden className="relative">
                        <div className="absolute inset-0 z-10 m-auto size-fit">
                            <div className="rounded-[8px] bg-white z-[1] relative flex size-fit w-fit items-center gap-2 border border-parchment-border px-3 py-1.5 text-sm font-medium shadow-md">
                                <span className="text-lg">🌍</span> {t('features.detected')}
                            </div>
                            <div className="rounded-[8px] bg-white absolute inset-2 -bottom-2 mx-auto border border-parchment-border px-3 py-4 shadow-sm"></div>
                        </div>

                        <div className="relative overflow-hidden opacity-50 sepia-[.3] hue-rotate-[240deg]">
                            <div className="[background-image:radial-gradient(var(--tw-gradient-stops))] z-1 to-white absolute inset-0 from-transparent to-75%"></div>
                            <Map />
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden border-t border-parchment-border bg-surface-container-lowest p-6 sm:p-12 md:border-0 md:border-l">
                    <div className="relative z-10">
                        <span className="text-charcoal-ink/60 font-semibold uppercase tracking-wider text-xs flex items-center gap-2">
                            <MessageCircle className="size-4 text-amethyst-link" />
                            {t('features.communityUpdates')}
                        </span>

                        <p className="my-8 text-3xl font-semibold tracking-tight leading-tight">{t('features.stayConnected')}</p>
                    </div>
                    <div aria-hidden className="flex flex-col gap-6">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="flex justify-center items-center size-5 rounded-full border border-parchment-border">
                                    <span className="size-3 rounded-full bg-amethyst-link"/>
                                </span>
                                <span className="text-charcoal-ink/50 text-xs font-semibold uppercase tracking-wide">{t('features.today')}</span>
                            </div>
                            <div className="rounded-[8px] bg-white border border-parchment-border mt-3 w-[85%] p-4 text-sm font-medium shadow-sm">{t('features.update1')}</div>
                        </div>

                        <div>
                            <div className="rounded-[8px] mb-2 ml-auto w-[85%] bg-[#4f28ad] p-4 text-sm text-white font-medium shadow-sm">{t('features.update2')}</div>
                            <span className="text-charcoal-ink/50 font-semibold uppercase tracking-wide block text-right text-xs">{t('features.now')}</span>
                        </div>
                    </div>
                </div>
                
                <div className="col-span-full border-y border-parchment-border p-12 bg-white">
                    <p className="text-center text-4xl font-semibold lg:text-7xl tracking-tight text-charcoal-ink">
                    {t('features.rewardRules')}
                    </p>
                    <p className="text-center text-charcoal-ink/60 mt-4 text-lg font-medium">{t('features.rewardRulesDesc')}</p>
                </div>
                
                {/* V1-V10 Table representation */}
                <div className="col-span-full border-b border-parchment-border p-0 overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap min-w-[800px]">
                      <thead className="bg-surface-container-lowest border-y border-parchment-border text-charcoal-ink/60 uppercase tracking-wider text-xs font-semibold">
                        <tr>
                          <th className="px-6 py-4">{t('features.level')}</th>
                          <th className="px-6 py-4">{t('features.howToAchieve')}</th>
                          <th className="px-6 py-4 text-right">{t('features.oneTimeReward')}</th>
                          <th className="px-6 py-4 text-right">{t('features.override')}</th>
                          <th className="px-6 py-4">{t('features.notes')}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-parchment-border font-medium text-charcoal-ink bg-white">
                        <tr className="hover:bg-black/5 transition-colors">
                          <td className="px-6 py-4 font-bold text-mysteria-purple">V1</td>
                          <td className="px-6 py-4">{t('table.v1.achieve')}</td>
                          <td className="px-6 py-4 text-right">80 USDT</td>
                          <td className="px-6 py-4 text-right">0%</td>
                          <td className="px-6 py-4 text-charcoal-ink/60 text-xs">{t('table.v1.notes')}</td>
                        </tr>
                        <tr className="hover:bg-black/5 transition-colors">
                          <td className="px-6 py-4 font-bold text-mysteria-purple">V2</td>
                          <td className="px-6 py-4">{t('table.v2.achieve')}</td>
                          <td className="px-6 py-4 text-right">160 USDT</td>
                          <td className="px-6 py-4 text-right">0%</td>
                          <td className="px-6 py-4 text-charcoal-ink/60 text-xs">{t('table.v2.notes')}</td>
                        </tr>
                        <tr className="hover:bg-black/5 transition-colors">
                          <td className="px-6 py-4 font-bold text-mysteria-purple">V3</td>
                          <td className="px-6 py-4">{t('table.v3.achieve')}</td>
                          <td className="px-6 py-4 text-right">400 USDT</td>
                          <td className="px-6 py-4 text-right">0%</td>
                          <td className="px-6 py-4 text-charcoal-ink/60 text-xs">{t('table.v3.notes')}</td>
                        </tr>
                        <tr className="hover:bg-black/5 transition-colors">
                          <td className="px-6 py-4 font-bold text-mysteria-purple">V4</td>
                          <td className="px-6 py-4">{t('table.v4.achieve')}</td>
                          <td className="px-6 py-4 text-right">800 USDT</td>
                          <td className="px-6 py-4 text-right">4%</td>
                          <td className="px-6 py-4 text-charcoal-ink/60 text-xs">{t('table.v4.notes')}</td>
                        </tr>
                        <tr className="hover:bg-black/5 transition-colors">
                          <td className="px-6 py-4 font-bold text-mysteria-purple">V5</td>
                          <td className="px-6 py-4">{t('table.v5.achieve')}</td>
                          <td className="px-6 py-4 text-right">1,600 USDT</td>
                          <td className="px-6 py-4 text-right">5%</td>
                          <td className="px-6 py-4 text-charcoal-ink/60 text-xs">{t('table.v5.notes')}</td>
                        </tr>
                        <tr className="hover:bg-black/5 transition-colors">
                          <td className="px-6 py-4 font-bold text-mysteria-purple">V6</td>
                          <td className="px-6 py-4">{t('table.v6.achieve')}</td>
                          <td className="px-6 py-4 text-right">3,200 USDT</td>
                          <td className="px-6 py-4 text-right">6%</td>
                          <td className="px-6 py-4 text-charcoal-ink/60 text-xs">{t('table.v6.notes')}</td>
                        </tr>
                        <tr className="hover:bg-black/5 transition-colors bg-lavender-glow/5">
                          <td className="px-6 py-4 font-bold text-mysteria-purple">V7</td>
                          <td className="px-6 py-4">{t('table.v7.achieve')}</td>
                          <td className="px-6 py-4 text-right">8,000 USDT</td>
                          <td className="px-6 py-4 text-right">7%</td>
                          <td className="px-6 py-4 text-charcoal-ink/60 text-xs">{t('table.v7.notes')}</td>
                        </tr>
                        <tr className="hover:bg-black/5 transition-colors bg-lavender-glow/10">
                          <td className="px-6 py-4 font-bold text-mysteria-purple">V8</td>
                          <td className="px-6 py-4">{t('table.v8.achieve')}</td>
                          <td className="px-6 py-4 text-right">16,000 USDT</td>
                          <td className="px-6 py-4 text-right">8%</td>
                          <td className="px-6 py-4 text-charcoal-ink/60 text-xs">{t('table.v8.notes')}</td>
                        </tr>
                        <tr className="hover:bg-black/5 transition-colors bg-lavender-glow/20">
                          <td className="px-6 py-4 font-bold text-mysteria-purple">V9</td>
                          <td className="px-6 py-4">{t('table.v9.achieve')}</td>
                          <td className="px-6 py-4 text-right">144,000 USDT</td>
                          <td className="px-6 py-4 text-right">9%</td>
                          <td className="px-6 py-4 text-charcoal-ink/60 text-xs">{t('table.v9.notes')}</td>
                        </tr>
                        <tr className="hover:bg-black/5 transition-colors bg-lavender-glow/30">
                          <td className="px-6 py-4 font-bold text-[#4f28ad]">V10</td>
                          <td className="px-6 py-4">{t('table.v10.achieve')}</td>
                          <td className="px-6 py-4 text-right font-bold">1,440,000 USDT</td>
                          <td className="px-6 py-4 text-right font-bold">10%</td>
                          <td className="px-6 py-4 text-[#4f28ad] font-semibold text-xs">{t('table.v10.notes')}</td>
                        </tr>
                      </tbody>
                    </table>
                </div>

                <div className="relative col-span-full">
                    <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
                        <span className="text-charcoal-ink/60 font-semibold uppercase tracking-wider text-xs flex items-center gap-2">
                            <Activity className="size-4 text-amethyst-link" />
                            {t('features.activityFeed')}
                        </span>

                        <p className="my-8 text-3xl font-semibold tracking-tight leading-tight">
                            {t('features.activityTitle')} <span className="text-charcoal-ink/60"> {t('features.activityDesc')}</span>
                        </p>
                    </div>
                    <MonitoringChart />
                </div>
            </div>
        </section>
    )
}

const map = new DottedMap({ height: 55, grid: 'diagonal' })

const points = map.getPoints()

const svgOptions = {
    backgroundColor: 'transparent',
    color: '#4f28ad',
    radius: 0.15,
}

const Map = () => {
    const viewBox = `0 0 120 60`
    return (
        <svg viewBox={viewBox} style={{ background: svgOptions.backgroundColor }}>
            {points.map((point, index) => (
                <circle key={index} cx={point.x} cy={point.y} r={svgOptions.radius} fill={svgOptions.color} />
            ))}
        </svg>
    )
}

const chartConfig = {
    desktop: {
        label: 'Global Volume',
        color: '#4f28ad',
    },
    mobile: {
        label: 'Direct Volume',
        color: '#cbb7fb',
    },
} satisfies ChartConfig

const chartData = [
    { month: 'Jan', desktop: 56, mobile: 224 },
    { month: 'Feb', desktop: 156, mobile: 204 },
    { month: 'Mar', desktop: 126, mobile: 252 },
    { month: 'Apr', desktop: 205, mobile: 410 },
    { month: 'May', desktop: 200, mobile: 126 },
    { month: 'Jun', desktop: 400, mobile: 800 },
]

const MonitoringChart = () => {
    return (
        <ChartContainer className="h-120 aspect-auto md:h-96" config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
                }}>
                <defs>
                    <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.5} />
                <ChartTooltip active cursor={false} content={<ChartTooltipContent className="bg-white border-parchment-border" />} />
                <Area strokeWidth={2} dataKey="mobile" type="stepBefore" fill="url(#fillMobile)" fillOpacity={0.1} stroke="var(--color-mobile)" stackId="a" />
                <Area strokeWidth={2} dataKey="desktop" type="stepBefore" fill="url(#fillDesktop)" fillOpacity={0.1} stroke="var(--color-desktop)" stackId="a" />
            </AreaChart>
        </ChartContainer>
    )
}
