import { BmArchitecture } from "../components/ui/bm-architecture";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function SystemFlow() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-[#09090b] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2a1367]/30 via-[#09090b] to-[#09090b] text-white flex flex-col font-sans">
      <header className="w-full border-b border-white/10 px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
            <ArrowLeft size={20} />
            <span style={{ fontWeight: 540 }}>{t('flow.back')}</span>
          </Link>
          <div className="h-6 w-px bg-white/10" />
          <div className="flex items-center gap-3">
             <div 
               className="bg-[#4f28ad] rounded-[4px] flex-shrink-0 w-6 h-6"
               style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 30%, 75% 50%, 100% 70%, 100% 100%, 0% 100%)" }}
             />
             <h1 className="text-xl tracking-tight" style={{ fontWeight: 600 }}>{t('flow.title')}</h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
           <span className="text-white/40 text-sm font-mono tracking-widest uppercase">{t('flow.live')}</span>
           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl w-full flex flex-col items-center p-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          <p className="text-white/60 text-center mb-16 text-lg max-w-2xl" style={{ fontWeight: 460 }}>
            {t('flow.desc')}
          </p>
          
          <div className="w-full max-w-[700px] aspect-[2/1] text-white overflow-visible">
            <BmArchitecture className="w-full h-full drop-shadow-[0_0_15px_rgba(79,40,173,0.3)]" showLevels={true} animateLines={true} animateText={true} />
          </div>
        </div>
      </main>
    </div>
  );
}
