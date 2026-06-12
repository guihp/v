import { motion } from "framer-motion";

export function WhatsappMockup() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 rounded-xl overflow-hidden shadow-xl border border-gray-200"
    >
      <div className="bg-[#075E54] text-white p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
          <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        </div>
        <div>
          <div className="font-semibold">IAFÉ IA</div>
          <div className="text-xs text-green-100">online</div>
        </div>
      </div>
      
      <div className="p-4 flex flex-col gap-4 bg-[#E5DDD5] h-[360px] overflow-y-auto">
        <div className="bg-white rounded-lg rounded-tl-none p-3 max-w-[80%] self-start shadow-sm text-sm relative">
          Oi, tudo bem? Tenho interesse nesse imóvel...
          <span className="text-[10px] text-gray-400 absolute bottom-1 right-2">11:57</span>
          <div className="h-4"></div>
        </div>
        
        <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none p-3 max-w-[80%] self-end shadow-sm text-sm relative">
          Tudo ótimo! Esse imóvel é perfeito, vou te enviar as melhores fotos que tenho:
          <span className="text-[10px] text-gray-500 absolute bottom-1 right-2">11:57</span>
          <div className="h-4"></div>
        </div>
        
        <div className="bg-white rounded-lg rounded-tl-none p-3 max-w-[80%] self-start shadow-sm text-sm relative">
          Perfeito mesmo... Queria agendar uma visita, consegue dia 11 às 12h?
          <span className="text-[10px] text-gray-400 absolute bottom-1 right-2">11:59</span>
          <div className="h-4"></div>
        </div>
        
        <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none p-3 max-w-[80%] self-end shadow-sm text-sm relative">
          Sim, horário reservado. O corretor Matheus encontrará você às 12h no endereço: Rua Sete de Setembro, 77
          <span className="text-[10px] text-gray-500 absolute bottom-1 right-2">11:59</span>
          <div className="h-4"></div>
        </div>
      </div>
    </motion.div>
  );
}
