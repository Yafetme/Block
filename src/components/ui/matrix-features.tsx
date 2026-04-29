'use client'
import { Activity, Map as MapIcon, MessageCircle, Info } from 'lucide-react'
import DottedMap from 'dotted-map'
import { Area, AreaChart, CartesianGrid } from 'recharts'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from './chart'
import { cn } from '../../lib/utils'

export function PlatformFeatures() {
    return (
        <section className="px-4 py-16 md:py-32 bg-surface-container-lowest border-t border-parchment-border">
            <div className="mx-auto grid max-w-[1200px] border border-parchment-border bg-white rounded-[16px] md:grid-cols-2 shadow-sm overflow-hidden text-charcoal-ink">
                <div>
                    <div className="p-6 sm:p-12">
                        <span className="text-charcoal-ink/60 font-semibold uppercase tracking-wider text-xs flex items-center gap-2">
                            <MapIcon className="size-4 text-amethyst-link" />
                            Global Matrix Tracking
                        </span>

                        <p className="mt-8 text-3xl font-semibold tracking-tight leading-tight">Advanced tracking system. <span className="text-charcoal-ink/60">Instantly locate all matrix interactions.</span></p>
                    </div>

                    <div aria-hidden className="relative">
                        <div className="absolute inset-0 z-10 m-auto size-fit">
                            <div className="rounded-[8px] bg-white z-[1] relative flex size-fit w-fit items-center gap-2 border border-parchment-border px-3 py-1.5 text-sm font-medium shadow-md">
                                <span className="text-lg">🌍</span> Matrix interaction detected
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
                            Community Updates
                        </span>

                        <p className="my-8 text-3xl font-semibold tracking-tight leading-tight">Stay connected with your network's growth.</p>
                    </div>
                    <div aria-hidden className="flex flex-col gap-6">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="flex justify-center items-center size-5 rounded-full border border-parchment-border">
                                    <span className="size-3 rounded-full bg-amethyst-link"/>
                                </span>
                                <span className="text-charcoal-ink/50 text-xs font-semibold uppercase tracking-wide">Today</span>
                            </div>
                            <div className="rounded-[8px] bg-white border border-parchment-border mt-3 w-[85%] p-4 text-sm font-medium shadow-sm">New V5 override commission generated in your downline structure.</div>
                        </div>

                        <div>
                            <div className="rounded-[8px] mb-2 ml-auto w-[85%] bg-[#4f28ad] p-4 text-sm text-white font-medium shadow-sm">Successfully compounded rewards to upgrade matrix position.</div>
                            <span className="text-charcoal-ink/50 font-semibold uppercase tracking-wide block text-right text-xs">Now</span>
                        </div>
                    </div>
                </div>
                
                <div className="col-span-full border-y border-parchment-border p-12 bg-white">
                    <p className="text-center text-4xl font-semibold lg:text-7xl tracking-tight text-charcoal-ink">
                    Matrix Reward Rules
                    </p>
                    <p className="text-center text-charcoal-ink/60 mt-4 text-lg font-medium">10 levels of on-chain overrides and instant rewards.</p>
                </div>
                
                {/* V1-V10 Table representation */}
                <div className="col-span-full border-b border-parchment-border p-0 overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap min-w-[800px]">
                      <thead className="bg-surface-container-lowest border-y border-parchment-border text-charcoal-ink/60 uppercase tracking-wider text-xs font-semibold">
                        <tr>
                          <th className="px-6 py-4">Level</th>
                          <th className="px-6 py-4">How to Achieve</th>
                          <th className="px-6 py-4 text-right">One-time Reward</th>
                          <th className="px-6 py-4 text-right">Override %</th>
                          <th className="px-6 py-4">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-parchment-border font-medium text-charcoal-ink bg-white">
                        <tr className="hover:bg-black/5 transition-colors">
                          <td className="px-6 py-4 font-bold text-mysteria-purple">V1</td>
                          <td className="px-6 py-4">Directly refer 3 members (each 80U)</td>
                          <td className="px-6 py-4 text-right">80 USDT</td>
                          <td className="px-6 py-4 text-right">0%</td>
                          <td className="px-6 py-4 text-charcoal-ink/60 text-xs">Basic entry. Must personally invite 3 paying members.</td>
                        </tr>
                        <tr className="hover:bg-black/5 transition-colors">
                          <td className="px-6 py-4 font-bold text-mysteria-purple">V2</td>
                          <td className="px-6 py-4">No direct req. Public matrix fills under you</td>
                          <td className="px-6 py-4 text-right">160 USDT</td>
                          <td className="px-6 py-4 text-right">0%</td>
                          <td className="px-6 py-4 text-charcoal-ink/60 text-xs">Matrix placement fills under you automatically.</td>
                        </tr>
                        <tr className="hover:bg-black/5 transition-colors">
                          <td className="px-6 py-4 font-bold text-mysteria-purple">V3</td>
                          <td className="px-6 py-4">No direct req. Deeper matrix formation</td>
                          <td className="px-6 py-4 text-right">400 USDT</td>
                          <td className="px-6 py-4 text-right">0%</td>
                          <td className="px-6 py-4 text-charcoal-ink/60 text-xs">Completely hands-free; queue does the work.</td>
                        </tr>
                        <tr className="hover:bg-black/5 transition-colors">
                          <td className="px-6 py-4 font-bold text-mysteria-purple">V4</td>
                          <td className="px-6 py-4">Directly develop 4 V1 members</td>
                          <td className="px-6 py-4 text-right">800 USDT</td>
                          <td className="px-6 py-4 text-right">4%</td>
                          <td className="px-6 py-4 text-charcoal-ink/60 text-xs">First level with override commission.</td>
                        </tr>
                        <tr className="hover:bg-black/5 transition-colors">
                          <td className="px-6 py-4 font-bold text-mysteria-purple">V5</td>
                          <td className="px-6 py-4">6 direct V1s + at least 1 V4 in downline</td>
                          <td className="px-6 py-4 text-right">1,600 USDT</td>
                          <td className="px-6 py-4 text-right">5%</td>
                          <td className="px-6 py-4 text-charcoal-ink/60 text-xs">Need a V4 somewhere under you.</td>
                        </tr>
                        <tr className="hover:bg-black/5 transition-colors">
                          <td className="px-6 py-4 font-bold text-mysteria-purple">V6</td>
                          <td className="px-6 py-4">6 direct V1s + at least 3 V4s in downline</td>
                          <td className="px-6 py-4 text-right">3,200 USDT</td>
                          <td className="px-6 py-4 text-right">6%</td>
                          <td className="px-6 py-4 text-charcoal-ink/60 text-xs">You need 3 different V4s.</td>
                        </tr>
                        <tr className="hover:bg-black/5 transition-colors bg-lavender-glow/5">
                          <td className="px-6 py-4 font-bold text-mysteria-purple">V7</td>
                          <td className="px-6 py-4">12 direct V1s + at least 1 V5 in downline</td>
                          <td className="px-6 py-4 text-right">8,000 USDT</td>
                          <td className="px-6 py-4 text-right">7%</td>
                          <td className="px-6 py-4 text-charcoal-ink/60 text-xs">Jump in direct V1 requirement.</td>
                        </tr>
                        <tr className="hover:bg-black/5 transition-colors bg-lavender-glow/10">
                          <td className="px-6 py-4 font-bold text-mysteria-purple">V8</td>
                          <td className="px-6 py-4">15 direct V1s + at least 3 V5s in downline</td>
                          <td className="px-6 py-4 text-right">16,000 USDT</td>
                          <td className="px-6 py-4 text-right">8%</td>
                          <td className="px-6 py-4 text-charcoal-ink/60 text-xs">Rely on V5s in your structure.</td>
                        </tr>
                        <tr className="hover:bg-black/5 transition-colors bg-lavender-glow/20">
                          <td className="px-6 py-4 font-bold text-mysteria-purple">V9</td>
                          <td className="px-6 py-4">18 direct V1s + at least 2 V8s in downline</td>
                          <td className="px-6 py-4 text-right">144,000 USDT</td>
                          <td className="px-6 py-4 text-right">9%</td>
                          <td className="px-6 py-4 text-charcoal-ink/60 text-xs">Requires strong team depth.</td>
                        </tr>
                        <tr className="hover:bg-black/5 transition-colors bg-lavender-glow/30">
                          <td className="px-6 py-4 font-bold text-[#4f28ad]">V10</td>
                          <td className="px-6 py-4">Directly develop 2 V9 members anywhere</td>
                          <td className="px-6 py-4 text-right font-bold">1,440,000 USDT</td>
                          <td className="px-6 py-4 text-right font-bold">10%</td>
                          <td className="px-6 py-4 text-[#4f28ad] font-semibold text-xs">The top of the ladder. Only 2 V9s needed.</td>
                        </tr>
                      </tbody>
                    </table>
                </div>

                <div className="relative col-span-full">
                    <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
                        <span className="text-charcoal-ink/60 font-semibold uppercase tracking-wider text-xs flex items-center gap-2">
                            <Activity className="size-4 text-amethyst-link" />
                            Activity Feed
                        </span>

                        <p className="my-8 text-3xl font-semibold tracking-tight leading-tight">
                            Monitor network liquidity. <span className="text-charcoal-ink/60"> Instantly verify transparent pool transactions.</span>
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
