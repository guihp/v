import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Zap, Clock, Search, TrendingUp, Check, Menu, X } from "lucide-react";
import { IafeLogo } from "@/components/IafeLogo";
import { PlatformMockup } from "@/components/PlatformMockup";
import { WhatsappMockup } from "@/components/WhatsappMockup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

// Generated image imports
import homemImg from "@assets/imagem-2-site-IMOBI_1781273319450.png";
import chatImg from "@assets/imagem-3-site-IMOBI_1781273352262.png";
import beneficiosImg from "@assets/imagem-5-site-IMOBIV1_1781273933278.png";
import aiRobotImg from "@assets/imagem-8-site-IMOBIV2_1781274455835.png";
import funnelImg from "@assets/imagem-9-site-IMOBIV2_1781274490524.png";
import globeImg from "@assets/imagem-10-site-IMOBIV2_1781274498262.png";
import agentImg from "@/assets/ivo-celular-nobg.png";

const WEBHOOK_URL = "https://n8n-sgo8ksokg404ocg8sgc4sooc.vemprajogo.com/webhook/enviathay";

export default function Home() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ nome: "", whatsapp: "", mensagem: "" });
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formData.nome,
          whatsapp: formData.whatsapp,
          mensagem: formData.mensagem,
        }),
      });
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Em breve entraremos em contato.",
      });
      setFormData({ nome: "", whatsapp: "", mensagem: "" });
    } catch {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente em instantes.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-green-200 overflow-x-hidden">
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/">
            <IafeLogo />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#solucoes" className="text-sm font-semibold text-gray-600 hover:text-green-500 transition-colors">Soluções</a>
            <a href="#planos" className="text-sm font-semibold text-gray-600 hover:text-green-500 transition-colors">Planos</a>
            <a href="#contato" className="text-sm font-semibold text-gray-600 hover:text-green-500 transition-colors">Contato</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#planos" className="hidden md:block">
              <Button className="bg-[#22C55E] hover:bg-green-600 text-white rounded-lg font-bold shadow-md hover:scale-105 transition-transform duration-200">
                Agendar demonstração
              </Button>
            </a>
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1 shadow-lg">
            <a href="#solucoes" onClick={() => setMenuOpen(false)} className="text-base font-semibold text-gray-700 hover:text-green-500 py-3 border-b border-gray-50 transition-colors">Soluções</a>
            <a href="#planos" onClick={() => setMenuOpen(false)} className="text-base font-semibold text-gray-700 hover:text-green-500 py-3 border-b border-gray-50 transition-colors">Planos</a>
            <a href="#contato" onClick={() => setMenuOpen(false)} className="text-base font-semibold text-gray-700 hover:text-green-500 py-3 border-b border-gray-50 transition-colors">Contato</a>
            <a href="#planos" onClick={() => setMenuOpen(false)} className="mt-3">
              <Button className="w-full bg-[#22C55E] hover:bg-green-600 text-white rounded-lg font-bold">
                Agendar demonstração
              </Button>
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="pt-12 pb-0 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#22C55E] tracking-tight leading-tight mb-4">
            O CRM imobiliário que está elevando o nível do mercado.
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-8">
            Soluções conectadas e inteligentes para vender mais.
          </h2>
          <a href="#planos">
            <Button className="bg-[#22C55E] hover:bg-green-600 text-white px-10 py-7 text-lg rounded-lg font-bold shadow-xl hover:scale-105 transition-transform duration-200">
              Agendar demonstração
            </Button>
          </a>
        </motion.div>

        <motion.div 
          className="mt-10 mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <PlatformMockup />
        </motion.div>
      </section>

      {/* 3. GREEN BANNER */}
      <section className="bg-[#22C55E] py-12 text-white text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Sozinho você trabalha.</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold">Com a IAFÉ IMOBI, seu negócio trabalha por você.</p>
        </motion.div>
      </section>

      {/* 4. FEATURE HIGHLIGHT SECTION */}
      <section id="solucoes" className="py-12 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#22C55E] mb-4">
            CRM, sites e gestão conectados em uma única plataforma.
          </h2>
          <p className="text-xl font-medium text-gray-800">
            Com IA que trabalha para aumentar suas vendas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img
              src={homemImg}
              alt="Corretor recebendo leads no celular"
              className="w-full max-w-md object-contain rounded-2xl"
              data-testid="img-homem-leads"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img
              src={chatImg}
              alt="Conversa de IA com cliente no WhatsApp"
              className="w-full max-w-md object-contain rounded-2xl"
              data-testid="img-chat-ia"
            />
          </motion.div>
        </div>
      </section>

      {/* 5. PROBLEM/SOLUTION */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-3xl font-extrabold text-[#22C55E]">O problema real.</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Leads chegam todos os dias, mas o desafio está em responder rapidamente antes dos concorrentes. Mensagens perdidas, corretores sobrecarregados e falta de controle aumentam o desperdício de vendas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-3xl font-extrabold text-[#22C55E]">A virada de IA.</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                IAFÉ IMOBI inicia atendimentos via IA, conversa com leads em tempo real, faz perguntas estratégicas, organiza o funil e prepara o cliente para fechar. Enquanto você opera, a IA já está vendendo.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-10"
          >
            <img
              src={beneficiosImg}
              alt="Benefícios práticos IAFÉ IMOBI"
              className="w-full max-w-3xl object-contain rounded-2xl"
            />
            <div className="text-center max-w-2xl">
              <h3 className="text-3xl font-extrabold text-[#22C55E] mb-4">Benefícios práticos.</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Centralize WhatsApp e conversas, torne sua equipe rápida e organizada e acompanhe tudo em um funil visual: mais vendas, menos esforço.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. FEATURES HEADING */}
      <section className="py-10 text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 max-w-4xl mx-auto leading-tight"
        >
          Menos operação. Mais fechamento. Mais crescimento.
        </motion.h2>
      </section>

      {/* 7. THREE FEATURE CARDS */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-48 rounded-xl mb-6 overflow-hidden bg-gray-50 flex items-center justify-center">
              <img src={aiRobotImg} alt="IA 24 horas" className="object-contain h-full" />
            </div>
            <h4 className="text-xl font-bold text-[#22C55E] mb-3">IA 24 horas.</h4>
            <p className="text-gray-700">
              IA atende leads em tempo real, conduzindo conversas e coleta dados essenciais.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-48 rounded-xl mb-6 overflow-hidden bg-gray-50 flex items-center justify-center">
              <img src={funnelImg} alt="Funil visual" className="object-contain h-full" />
            </div>
            <h4 className="text-xl font-bold text-[#22C55E] mb-3">Funil visual.</h4>
            <p className="text-gray-700">
              Veja cada lead em um painel estratégico da captação ao fechamento.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-48 rounded-xl mb-6 overflow-hidden bg-gray-50 flex items-center justify-center">
              <img src={globeImg} alt="Comunicação centralizada" className="object-contain h-full" />
            </div>
            <h4 className="text-xl font-bold text-[#22C55E] mb-3">Comunicação centralizada.</h4>
            <p className="text-gray-700">
              Atendimentos e chats do WhatsApp dentro do CRM sem perder oportunidades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 8. FOUR MINI FEATURES */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex flex-col items-center text-center gap-3">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <Zap className="w-8 h-8 text-[#22C55E]" />
            </div>
            <span className="font-bold text-gray-800">Filtragem automática</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col items-center text-center gap-3">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <Clock className="w-8 h-8 text-[#22C55E]" />
            </div>
            <span className="font-bold text-gray-800">Respostas imediatas</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center text-center gap-3">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <Search className="w-8 h-8 text-[#22C55E]" />
            </div>
            <span className="font-bold text-gray-800">Agenda visitas</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col items-center text-center gap-3">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-[#22C55E]" />
            </div>
            <span className="font-bold text-gray-800">Qualificação ativa</span>
          </motion.div>
        </div>
      </section>

      {/* 9. STATS BANNER */}
      <section className="py-14 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#16A34A] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-around gap-8"
        >
          <div className="text-center">
            <div className="text-5xl sm:text-6xl md:text-7xl font-black mb-2">10x</div>
            <div className="text-base sm:text-lg font-medium text-green-100">Respostas rápidas</div>
          </div>
          <div className="hidden md:block w-px h-24 bg-green-400"></div>
          <div className="w-16 h-px md:hidden bg-green-400"></div>
          <div className="text-center">
            <div className="text-5xl sm:text-6xl md:text-7xl font-black mb-2">30%</div>
            <div className="text-base sm:text-lg font-medium text-green-100">Aumento em vendas</div>
          </div>
          <div className="hidden md:block w-px h-24 bg-green-400"></div>
          <div className="w-16 h-px md:hidden bg-green-400"></div>
          <div className="text-center">
            <div className="text-5xl sm:text-6xl md:text-7xl font-black mb-2">24/7</div>
            <div className="text-base sm:text-lg font-medium text-green-100">Atendimento IA</div>
          </div>
        </motion.div>
      </section>

      {/* 10. PRICING SECTION */}
      <section id="planos" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 flex flex-col items-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Planos</h2>
            <div className="w-16 h-1.5 bg-[#22C55E] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Card A */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Start Imobi</h3>
              <div className="text-3xl font-extrabold text-[#22C55E] mb-6">R$ 749,00 <span className="text-sm font-normal text-gray-500">/mês</span></div>
              <ul className="space-y-4 mb-8">
                {['CRM Imobiliário', 'IA & Automação', 'Captação de Leads', 'Organização & Produtividade', 'Integrações'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <Check className="w-5 h-5 text-[#22C55E]" /> {f}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/5519991570231?text=Olá,%20vim%20pelo%20site%20da%20IAFE%20IMOBI%20e%20tenho%20interesse%20no%20plano%20Start%20Imobi%20de%20R$%20749,00/mês.%20Gostaria%20de%20mais%20informações%20para%20contratação." target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button variant="outline" className="w-full border-2 border-[#22C55E] text-[#22C55E] hover:bg-green-50 rounded-lg py-6 font-bold text-lg hover:scale-105 transition-transform">
                  Começar agora
                </Button>
              </a>
            </motion.div>

            {/* Card B - Highlighted */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#22C55E] text-white border border-green-500 rounded-2xl p-10 shadow-2xl relative z-10 md:scale-105"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Mais popular</div>
              <h3 className="text-xl font-bold mb-2">Imobi Scale</h3>
              <div className="text-4xl font-black mb-8">R$ 1.999,00 <span className="text-sm font-normal text-green-100">/mês</span></div>
              <ul className="space-y-4 mb-8">
                {['Usuários', 'Gestão de Equipe', 'CRM Avançado', 'IA & Automação', 'Captação & Marketing', 'Relatórios'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <Check className="w-5 h-5 text-white" /> {f}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/5519991570231?text=Olá,%20vim%20pelo%20site%20da%20IAFE%20IMOBI%20e%20tenho%20interesse%20no%20plano%20Imobi%20Scale%20de%20R$%201.999,00/mês.%20Gostaria%20de%20mais%20informações%20para%20contratação." target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button className="w-full bg-white text-[#22C55E] hover:bg-gray-100 rounded-lg py-6 font-bold text-lg shadow-lg hover:scale-105 transition-transform">
                  Começar agora
                </Button>
              </a>
            </motion.div>

            {/* Card C */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Imobi Authority</h3>
              <div className="text-3xl font-extrabold text-[#22C55E] mb-6">R$ 2.499,00 <span className="text-sm font-normal text-gray-500">/mês</span></div>
              <ul className="space-y-4 mb-8">
                {['Estrutura Digital Completa', 'SEO & Performance', 'Marketing & Dados', 'IA & Escala', 'Gestão Avançada', 'Suporte'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <Check className="w-5 h-5 text-[#22C55E]" /> {f}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/5519991570231?text=Olá,%20vim%20pelo%20site%20da%20IAFE%20IMOBI%20e%20tenho%20interesse%20no%20plano%20Imobi%20Authority%20de%20R$%202.499,00/mês.%20Gostaria%20de%20agendar%20uma%20demonstração%20e%20entender%20melhor%20a%20solução." target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button className="w-full bg-[#22C55E] text-white hover:bg-green-600 rounded-lg py-6 font-bold text-lg shadow-md hover:scale-105 transition-transform">
                  Agendar demonstração
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 11. TESTIMONIALS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-10">
            Por que empresas de sucesso escolhem a IAFÉ IMOBI
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#22C55E] text-white rounded-2xl p-8 shadow-lg flex flex-col justify-between h-full">
              <p className="text-lg font-medium italic mb-8">"A IAFE Imobi transformou completamente nossa captação. Passamos a responder 3x mais rápido e fechar mais contratos."</p>
              <div className="font-bold opacity-90">— Ana Souza, Corretora</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#22C55E] text-white rounded-2xl p-8 shadow-lg flex flex-col justify-between h-full">
              <p className="text-lg font-medium italic mb-8">"Depois da Imobi, finalmente temos controle real sobre nossos leads. A IA faz o trabalho pesado."</p>
              <div className="font-bold opacity-90">— Carlos Melo, Gerente</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#22C55E] text-white rounded-2xl p-8 shadow-lg flex flex-col justify-between h-full">
              <p className="text-lg font-medium italic mb-8">"Com a Imobi, organizamos todo o fluxo de atendimento. Nossa equipe ficou muito mais produtiva."</p>
              <div className="font-bold opacity-90">— Mariana Costa, Diretora</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 12. FAQ SECTION */}
      <section id="faq" className="pt-16 px-4 sm:px-6 bg-gradient-to-br from-green-400 to-green-600">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10">
            Perguntas frequentes
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-end">
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="w-full md:w-2/3 space-y-4 pb-16"
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="bg-white/95 backdrop-blur-sm rounded-xl px-6 border-none shadow-md data-[state=open]:shadow-lg transition-all">
                  <AccordionTrigger className="text-lg font-bold text-gray-800 hover:text-green-600 hover:no-underline py-5 text-left">
                    Como funciona a IA do IAFÉ IMOBI?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base pb-5">
                    Nossa IA conversa com seus leads 24h por dia pelo WhatsApp e portais, qualificando automaticamente e agendando visitas sem intervenção humana.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="bg-white/95 backdrop-blur-sm rounded-xl px-6 border-none shadow-md data-[state=open]:shadow-lg transition-all">
                  <AccordionTrigger className="text-lg font-bold text-gray-800 hover:text-green-600 hover:no-underline py-5 text-left">
                    É possível integrar com portais imobiliários?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base pb-5">
                    Sim! Integramos com os principais portais como ZAP, VivaReal, OLX e outros, capturando leads automaticamente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="bg-white/95 backdrop-blur-sm rounded-xl px-6 border-none shadow-md data-[state=open]:shadow-lg transition-all">
                  <AccordionTrigger className="text-lg font-bold text-gray-800 hover:text-green-600 hover:no-underline py-5 text-left">
                    Meu time precisa de treinamento?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base pb-5">
                    O sistema é intuitivo e oferecemos onboarding completo. Em menos de 1 dia sua equipe estará operando com confiança.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="hidden md:flex w-full md:w-1/3 justify-center items-end"
            >
              <img
                src={agentImg}
                alt="Ivo IAFÉ IMOBI"
                className="w-full max-w-sm object-contain object-bottom drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 13. CONTACT FORM */}
      <section id="contato" className="py-24 px-6 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="text-[#22C55E] font-bold text-lg mb-2">Agende sua demonstração</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Vendas, visitas e controle em um só lugar.</h2>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-6">
            <div className="space-y-2">
              <label htmlFor="nome" className="text-sm font-bold text-gray-700">Nome</label>
              <Input 
                id="nome"
                placeholder="Ivo Imobi" 
                required 
                value={formData.nome}
                onChange={e => setFormData({...formData, nome: e.target.value})}
                className="h-12 border-gray-200 focus-visible:ring-[#22C55E]"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="whatsapp" className="text-sm font-bold text-gray-700">WhatsApp</label>
              <Input 
                id="whatsapp"
                placeholder="(98)9 9999-9999" 
                required 
                value={formData.whatsapp}
                onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                className="h-12 border-gray-200 focus-visible:ring-[#22C55E]"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="mensagem" className="text-sm font-bold text-gray-700">Mensagem</label>
              <Textarea 
                id="mensagem"
                placeholder="Sua mensagem..." 
                rows={4} 
                required
                value={formData.mensagem}
                onChange={e => setFormData({...formData, mensagem: e.target.value})}
                className="resize-none border-gray-200 focus-visible:ring-[#22C55E]"
              />
            </div>
            
            <Button type="submit" disabled={submitting} className="w-full bg-[#22C55E] hover:bg-green-600 text-white h-14 rounded-lg font-bold text-lg hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:cursor-not-allowed">
              {submitting ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        </motion.div>
      </section>

      {/* 14. FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-12 gap-8">
          <div className="col-span-2 md:col-span-4">
            <IafeLogo />
            <p className="mt-4 text-gray-500 text-sm max-w-xs">
              O CRM imobiliário que está elevando o nível do mercado com IA e automação inteligente.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-gray-900 mb-4">IAFÉ IMOBI</h4>
            <ul className="space-y-3">
              <li><a href="#solucoes" className="text-gray-500 hover:text-[#22C55E] transition-colors text-sm font-medium">Soluções</a></li>
              <li><a href="#planos" className="text-gray-500 hover:text-[#22C55E] transition-colors text-sm font-medium">Planos</a></li>
              <li><a href="#contato" className="text-gray-500 hover:text-[#22C55E] transition-colors text-sm font-medium">Contato</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-gray-900 mb-4">CRM</h4>
            <ul className="space-y-3">
              <li><a href="#solucoes" className="text-gray-500 hover:text-[#22C55E] transition-colors text-sm font-medium">Funil de vendas</a></li>
              <li><a href="#solucoes" className="text-gray-500 hover:text-[#22C55E] transition-colors text-sm font-medium">IA Imobiliária</a></li>
              <li><a href="#solucoes" className="text-gray-500 hover:text-[#22C55E] transition-colors text-sm font-medium">Comunicação</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-gray-900 mb-4">Ajuda</h4>
            <ul className="space-y-3">
              <li><a href="#faq" className="text-gray-500 hover:text-[#22C55E] transition-colors text-sm font-medium">FAQ</a></li>
              <li><a href="#contato" className="text-gray-500 hover:text-[#22C55E] transition-colors text-sm font-medium">Suporte</a></li>
              <li><a href="#contato" className="text-gray-500 hover:text-[#22C55E] transition-colors text-sm font-medium">Contato</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-[#22C55E] transition-colors text-sm font-medium">Termos de uso</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#22C55E] transition-colors text-sm font-medium">Política de privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm font-medium">2026 © IAFÉ IMOBI</p>
        </div>
      </footer>
    </div>
  );
}
