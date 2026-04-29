import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { BmArchitecture } from "../components/ui/bm-architecture";
import { AccordionComponent } from "../components/ui/faq-accordion";
import { PlatformFeatures } from "../components/ui/matrix-features";
import { Link } from 'react-router-dom';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-background text-on-background font-sans overflow-x-hidden min-h-screen">
      {/* TopNavBar */}
      <header className="sticky top-0 left-0 w-full z-50 font-medium tracking-tight bg-white/90 backdrop-blur-md border-b border-parchment-border py-4 transition-all duration-300">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4 md:px-8">
          <div 
            className="flex items-center cursor-pointer shrink-0 gap-3 mr-4 lg:mr-8 transition-transform hover:scale-105 active:scale-95"
            onClick={() => window.location.href = '/'}
          >
            <div 
              className="bg-[#4f28ad] rounded-[4px] flex-shrink-0 w-8 h-8"
              style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 30%, 75% 50%, 100% 70%, 100% 100%, 0% 100%)" }}
            />
            <div className="text-charcoal-ink uppercase whitespace-nowrap" style={{ fontWeight: 540, fontSize: "24px", lineHeight: 0.96, letterSpacing: "-0.5px" }}>
              BLOCK MATRIX
            </div>
          </div>
          <nav className="hidden lg:flex lg:gap-6 xl:gap-8 items-center flex-1">
            <a className="text-charcoal-ink hover:text-amethyst-link transition-colors whitespace-nowrap" style={{ fontWeight: 600, fontSize: "16px" }} href="#">Network</a>
            <a className="text-charcoal-ink/80 hover:text-charcoal-ink transition-colors whitespace-nowrap" style={{ fontWeight: 460, fontSize: "16px" }} href="#">Rewards</a>
            <a className="text-charcoal-ink/80 hover:text-charcoal-ink transition-colors whitespace-nowrap" style={{ fontWeight: 460, fontSize: "16px" }} href="#">Governance</a>
            <a className="text-charcoal-ink/80 hover:text-charcoal-ink transition-colors whitespace-nowrap" style={{ fontWeight: 460, fontSize: "16px" }} href="#">Transparency</a>
            <Link className="text-charcoal-ink/80 hover:text-charcoal-ink transition-colors whitespace-nowrap" style={{ fontWeight: 460, fontSize: "16px" }} to="/system/flow">System Flow</Link>
          </nav>
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
            <select className="bg-transparent text-charcoal-ink/80 hover:text-charcoal-ink transition-colors outline-none cursor-pointer" style={{ fontWeight: 600, fontSize: "14px" }}>
              <option value="en">ENG</option>
              <option value="zh">中文</option>
            </select>
            <button className="bg-warm-cream hover:bg-warm-cream/90 hover:scale-105 active:scale-95 text-charcoal-ink px-4 xl:px-5 py-2.5 rounded-lg transition-all duration-200 whitespace-nowrap" style={{ fontWeight: 600, fontSize: "16px" }}>
              Connect Wallet
            </button>
          </div>
          <button 
            className="lg:hidden p-2 text-charcoal-ink hover:bg-black/5 hover:scale-105 active:scale-95 transition-all rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-parchment-border shadow-lg absolute top-full left-0 w-full"
            >
              <nav className="flex flex-col px-6 py-6 gap-6">
                <a className="text-charcoal-ink" style={{ fontWeight: 600, fontSize: "18px" }} href="#" onClick={() => setIsMobileMenuOpen(false)}>Network</a>
                <a className="text-charcoal-ink/80" style={{ fontWeight: 460, fontSize: "18px" }} href="#" onClick={() => setIsMobileMenuOpen(false)}>Rewards</a>
                <a className="text-charcoal-ink/80" style={{ fontWeight: 460, fontSize: "18px" }} href="#" onClick={() => setIsMobileMenuOpen(false)}>Governance</a>
                <a className="text-charcoal-ink/80" style={{ fontWeight: 460, fontSize: "18px" }} href="#" onClick={() => setIsMobileMenuOpen(false)}>Transparency</a>
                <Link className="text-charcoal-ink/80" style={{ fontWeight: 460, fontSize: "18px" }} to="/system/flow" onClick={() => setIsMobileMenuOpen(false)}>System Flow</Link>
                <div className="pt-6 border-t border-parchment-border flex flex-col gap-6">
                  <div className="flex items-center gap-2 text-charcoal-ink/80" style={{ fontWeight: 600, fontSize: "16px" }}>
                    <select className="bg-transparent outline-none cursor-pointer w-full p-2 rounded-md border border-parchment-border">
                      <option value="en">English (ENG)</option>
                      <option value="zh">Chinese (中文)</option>
                    </select>
                  </div>
                  <button className="bg-warm-cream hover:bg-warm-cream/90 hover:scale-[1.02] active:scale-[0.98] transition-all text-charcoal-ink px-6 py-4 rounded-[8px] w-full" style={{ fontWeight: 700, fontSize: "16px" }}>
                    Connect Wallet
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <BackgroundGradientAnimation>
        <section className="relative overflow-hidden pt-24 md:pt-40 pb-16 flex flex-col items-center text-center px-4 w-full text-white">
          <div className="absolute inset-0 z-0 opacity-[0.08]" style={{backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "40px 40px", WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 80%)", maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)"}}></div>
          
          <div className="z-10 max-w-[1000px] mx-auto flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-8 max-w-4xl text-white drop-shadow-sm"
              style={{ fontWeight: 540, fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 0.96, letterSpacing: "-1.32px" }}
            >
              Earn Rewards Through Team Growth & Matrix Placement
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="mb-12 max-w-2xl text-white/90 drop-shadow-sm"
              style={{ fontWeight: 460, fontSize: "26px", lineHeight: 1.3 }}
            >
              Activate with 80 USDT, join the global binary matrix, and unlock up to 10 income levels with transparent on-chain rules.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button className="bg-warm-cream text-charcoal-ink px-8 py-4 rounded-lg hover:bg-warm-cream/90 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 transition-all duration-200" style={{ fontWeight: 700, fontSize: "16px", lineHeight: 1 }}>Connect Wallet</button>
              <button className="text-white px-6 py-4 flex items-center justify-center gap-2 hover:text-lavender-glow hover:-translate-y-1 active:translate-y-0 transition-all duration-200" style={{ fontWeight: 600, fontSize: "16px", lineHeight: 1 }}>
                <span className="border-b border-white/80 pb-[2px] transition-colors">View Demo</span>
              </button>
            </motion.div>
          </div>

          <div className="relative mt-20 z-10 w-full max-w-5xl">
            {/* Glowing background effect */}
            <div className="absolute -inset-4 bg-[#4f28ad] blur-[100px] opacity-60 rounded-full z-0"></div>
            
            {/* BM Container */}
            <div className="w-full rounded-xl border border-[#4f28ad]/40 p-8 shadow-[0_0_60px_rgba(79,40,173,0.5)] bg-[#000000] relative z-10 flex justify-center text-white/90">
              <BmArchitecture className="w-full max-w-3xl h-auto drop-shadow-[0_0_20px_rgba(79,40,173,0.8)]" />
            </div>
          </div>
        </section>
      </BackgroundGradientAnimation>

      {/* Stats Bar */}
      <section className="bg-surface-container-lowest pb-16 md:pb-24 border-b border-parchment-border">
        <div className="max-w-[1000px] mx-auto px-6 py-4 flex flex-wrap justify-center md:justify-between items-center gap-6 bg-white border border-parchment-border rounded-[16px] relative z-20 -mt-10 mx-4 md:mx-auto">
          <div className="flex items-center gap-4 px-4 py-2">
            <div className="w-10 h-10 rounded-[8px] bg-lavender-glow/20 flex items-center justify-center text-amethyst-link shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
            </div>
            <span className="text-charcoal-ink whitespace-nowrap" style={{ fontWeight: 600, fontSize: "16px" }}>80 USDT Entry</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-parchment-border"></div>
          
          <div className="flex items-center gap-4 px-4 py-2">
            <div className="w-10 h-10 rounded-[8px] bg-lavender-glow/20 flex items-center justify-center text-amethyst-link shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>
            </div>
            <span className="text-charcoal-ink whitespace-nowrap" style={{ fontWeight: 600, fontSize: "16px" }}>10 Levels</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-parchment-border"></div>
          
          <div className="flex items-center gap-4 px-4 py-2">
            <div className="w-10 h-10 rounded-[8px] bg-lavender-glow/20 flex items-center justify-center text-amethyst-link shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            </div>
            <span className="text-charcoal-ink whitespace-nowrap" style={{ fontWeight: 600, fontSize: "16px" }}>100% On-Chain</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-parchment-border"></div>
          
          <div className="flex items-center gap-4 px-4 py-2">
            <div className="w-10 h-10 rounded-[8px] bg-lavender-glow/20 flex items-center justify-center text-amethyst-link shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <span className="text-charcoal-ink whitespace-nowrap" style={{ fontWeight: 600, fontSize: "16px" }}>Instant Rewards</span>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-surface-container-lowest flex flex-col items-center border-b border-parchment-border">
        <p className="text-charcoal-ink/60 uppercase tracking-[2px] mb-12" style={{ fontWeight: 700, fontSize: "12px" }}>Powered by Leading Networks</p>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-80 mix-blend-multiply">
          <div className="flex items-center gap-3 transition-opacity hover:opacity-100">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 256 417" xmlns="http://www.w3.org/2000/svg">
              <path d="M127.961 0L125.058 9.873V285.457L127.961 288.35L255.923 161.597L127.961 0Z" fill="#343434"></path>
              <path d="M127.961 0L0 161.597L127.961 288.35V0Z" fill="#8C8C8C"></path>
              <path d="M127.961 312.187L126.386 314.106V416.033L127.961 416.495L255.999 185.348L127.961 312.187Z" fill="#3C3C3B"></path>
              <path d="M127.961 416.495V312.187L0 185.348L127.961 416.495Z" fill="#8C8C8C"></path>
              <path d="M127.961 288.35L255.923 161.597L127.961 100.916V288.35Z" fill="#141414"></path>
              <path d="M0 161.597L127.961 288.35V100.916L0 161.597Z" fill="#393939"></path>
            </svg>
            <span className="text-2xl font-semibold text-[#343434] tracking-tight">Ethereum</span>
          </div>
          <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 0L122.5 22.5L100 45L77.5 22.5L100 0Z" fill="#F3BA2F"></path>
              <path d="M100 155L77.5 177.5L100 200L122.5 177.5L100 155Z" fill="#F3BA2F"></path>
              <path d="M45 100L22.5 77.5L0 100L22.5 122.5L45 100Z" fill="#F3BA2F"></path>
              <path d="M155 100L177.5 77.5L200 100L177.5 122.5L155 100Z" fill="#F3BA2F"></path>
              <path d="M100 65L65 100L100 135L135 100L100 65ZM100 115L85 100L100 85L115 100L100 115Z" fill="#F3BA2F"></path>
              <path d="M141.5 58.5L164 36L141.5 13.5L119 36L141.5 58.5Z" fill="#F3BA2F"></path>
              <path d="M58.5 58.5L81 36L58.5 13.5L36 36L58.5 58.5Z" fill="#F3BA2F"></path>
              <path d="M141.5 141.5L119 164L141.5 186.5L164 164L141.5 141.5Z" fill="#F3BA2F"></path>
              <path d="M58.5 141.5L36 164L58.5 186.5L81 164L58.5 141.5Z" fill="#F3BA2F"></path>
            </svg>
            <span className="text-2xl font-semibold text-[#1E2026] tracking-tight">BNB Chain</span>
          </div>
        </div>
      </section>

      {/* Seamlessly Manage Your Matrix */}
      <section className="py-20 md:py-32 bg-surface-container-lowest border-t border-parchment-border">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-charcoal-ink mb-6" style={{ fontWeight: 460, fontSize: "48px", lineHeight: 0.96, letterSpacing: "-1.32px" }}>Seamlessly Manage Your Matrix</h2>
            <p className="text-charcoal-ink/80 mb-8" style={{ fontWeight: 460, fontSize: "20px", lineHeight: 1.5 }}>
              Our intuitive dashboard gives you complete control over your network growth. Monitor your 10 levels of income and track real-time USDT rewards as they land in your wallet.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-charcoal-ink" style={{ fontWeight: 540, fontSize: "18px" }}>
                <svg className="w-5 h-5 text-lavender-glow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Real-time analytics
              </li>
              <li className="flex items-center gap-3 text-charcoal-ink" style={{ fontWeight: 540, fontSize: "18px" }}>
                <svg className="w-5 h-5 text-lavender-glow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Smart contract interaction
              </li>
            </ul>
          </div>
          <div className="flex-1 order-1 md:order-2 w-full">
            <div className="rounded-[16px] border border-parchment-border overflow-hidden bg-white shadow-sm p-4 w-full">
              <img alt="User managing platform" className="w-full h-auto" src="https://lh3.googleusercontent.com/aida/ADBb0uhEiYTGHa0qy9xQLo3_UEeHZywFZ8I_ZiZNI-Og9EpP5Zh924DWIMufhMt2aMooaatkDmO0t786Ha1h28LtFnE9_wXCirwfLgBxfJRFxZoaaTB9raM-u-_nPG8dMpBb4KLwklihwYU8HB-1SeqhJaIEWOVfhchw83LMIs3vcSCYydQ5tRAT6cquSBK3t2l3mhzQ8jAOrdUth35YIaflw7vBUghhE3JnUp_e62oTSP4F8GwAevcm_lkDMDqlVcq3fV81AxqIpcLZ"/>
            </div>
          </div>
        </div>
      </section>

      <PlatformFeatures />

      {/* Built for Collaborative Growth */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="flex-1 w-full relative">
             <div className="rounded-[16px] border border-parchment-border overflow-hidden bg-white shadow-sm p-4 w-full">
               <img alt="Team collaboration" className="w-full h-auto" src="https://lh3.googleusercontent.com/aida/ADBb0ujHyndb36p39XoJYEPvv44tv8G4q-SG94ors9q2yyWvyQltPBcUFgsLZt67ZF1XkR3pJ4WFm90Nec7csiMu1_phn6bHrtKTa8bdej7mkf2GsKDddqeOO1-Nz6om6506mondoum5XX7Aw3DxcEf_AQvl2weaj6BLvdBOqGjIAntRW0huteExdnyKvIw2LFZbr1pFvGW9O0zPimvvFQTsgGdE57fu8DDk6_-r2X4RICSbW1HhUQMnwDyuUJatv4Wpxlsh-kT_etkN"/>
             </div>
          </div>
          <div className="flex-1">
            <h2 className="text-charcoal-ink mb-6" style={{ fontWeight: 460, fontSize: "48px", lineHeight: 0.96, letterSpacing: "-1.32px" }}>Built for Collaborative Growth</h2>
            <p className="text-charcoal-ink/80 mb-8" style={{ fontWeight: 460, fontSize: "20px", lineHeight: 1.5 }}>
              Success in Block Matrix is a team effort. Our binary structure is designed to reward collective growth, ensuring that as your community expands, everyone benefits from the shared momentum.
            </p>
            <div className="p-8 bg-white rounded-[16px] border border-parchment-border shadow-sm">
              <p className="text-charcoal-ink/90 mb-5 text-[20px]" style={{ fontWeight: 460, lineHeight: 1.5 }}>"The automated spillover and referral system makes it easy to grow together. It's the most transparent community I've been part of."</p>
              <p className="text-charcoal-ink" style={{ fontWeight: 700, fontSize: "14px", letterSpacing: "1px" }}>COMMUNITY LEAD</p>
            </div>
          </div>
        </div>
      </section>

      <AccordionComponent />

      {/* Footer CTA Section */}
      <BackgroundGradientAnimation>
        <section className="py-24 md:py-32 relative text-center md:text-left z-10">
          <div className="max-w-[800px] mx-auto px-8 flex flex-col items-center">
            <h2 className="text-white mb-6 drop-shadow-sm text-center" style={{ fontWeight: 460, fontSize: "48px", lineHeight: 0.96, letterSpacing: "-1.32px" }}>Join the Global Matrix from Anywhere</h2>
            <p className="text-white/90 mb-10 max-w-lg mx-auto drop-shadow-sm text-center" style={{ fontWeight: 460, fontSize: "20px", lineHeight: 1.5 }}>
              Access your dashboard, track rewards, and manage your network directly from your mobile device. Secure, fast, and on-chain.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-warm-cream text-charcoal-ink px-8 py-4 rounded-[8px] hover:bg-warm-cream/90 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 transition-all duration-200" style={{ fontWeight: 700, fontSize: "16px", lineHeight: 1 }}>Get Started Now</button>
              <button className="text-white px-6 py-4 flex items-center justify-center gap-2 hover:text-lavender-glow hover:-translate-y-1 active:translate-y-0 transition-all duration-200" style={{ fontWeight: 600, fontSize: "16px", lineHeight: 1 }}>
                <span className="border-b border-white/80 pb-[2px] transition-colors">Learn More</span>
              </button>
            </div>
          </div>
        </section>
      </BackgroundGradientAnimation>

      {/* Footer */}
      <footer className="bg-white w-full py-16 md:py-24 border-t border-parchment-border text-charcoal-ink" style={{ fontWeight: 460, fontSize: "16px" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center sm:text-left">
          <div className="col-span-1 sm:col-span-2 md:col-span-1 flex flex-col items-center sm:items-start">
            <div className="mb-6 flex items-center cursor-pointer sm:justify-start justify-center gap-3 transition-transform hover:scale-105 active:scale-95" onClick={() => window.location.href = '/'}>
              <div 
                className="bg-[#4f28ad] rounded-[4px] flex-shrink-0 w-8 h-8"
                style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 30%, 75% 50%, 100% 70%, 100% 100%, 0% 100%)" }}
              />
              <div className="text-charcoal-ink uppercase whitespace-nowrap" style={{ fontWeight: 540, fontSize: "24px", lineHeight: 0.96, letterSpacing: "-0.5px" }}>
                BLOCK MATRIX
              </div>
            </div>
            <p className="text-charcoal-ink/50 mb-2">© 2026 Block Matrix. Built 100% On-Chain.</p>
            <p className="text-charcoal-ink/50">Active Rule Version: v2026.04.19</p>
          </div>
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <a className="text-charcoal-ink/60 hover:text-amethyst-link transition-colors font-medium" href="#">Terms</a>
            <a className="text-charcoal-ink/60 hover:text-amethyst-link transition-colors font-medium" href="#">Privacy</a>
            <a className="text-charcoal-ink/60 hover:text-amethyst-link transition-colors font-medium" href="#">Security</a>
          </div>
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <a className="text-charcoal-ink/60 hover:text-amethyst-link transition-colors font-medium" href="#">Status</a>
            <a className="text-charcoal-ink/60 hover:text-amethyst-link transition-colors font-medium" href="#">Twitter</a>
          </div>
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <a className="text-charcoal-ink/60 hover:text-amethyst-link transition-colors font-medium" href="#">Discord</a>
            <a className="text-charcoal-ink/60 hover:text-amethyst-link transition-colors font-medium" href="#">Telegram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
