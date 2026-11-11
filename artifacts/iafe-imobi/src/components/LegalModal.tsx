import React, { useEffect } from "react";

interface LegalModalProps {
  type: "termos" | "privacidade" | null;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    if (type) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [type]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-[#111827] text-gray-200 border border-gray-700/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-gray-800 bg-[#162032]">
          <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {type === "termos" ? "Termos de Uso" : "Política de Privacidade"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
            aria-label="Fechar modal"
          >
            ✕
          </button>
        </div>

        {/* Conteúdo com rolagem responsiva */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed text-gray-300">
          {type === "termos" ? (
            <>
              <h3 className="font-semibold text-white text-sm sm:text-base">1. Aceitação dos Termos</h3>
              <p>
                Ao utilizar a plataforma IAFÉ IMOBI, concorda em cumprir integralmente os presentes Termos de Uso.
              </p>
              <h3 className="font-semibold text-white text-sm sm:text-base">2. Serviços Prestados</h3>
              <p>
                A plataforma disponibiliza soluções de inteligência artificial aplicadas ao mercado imobiliário para qualificação de contactos, automação e gestão de atendimentos.
              </p>
              <h3 className="font-semibold text-white text-sm sm:text-base">3. Responsabilidades</h3>
              <p>
                O utilizador compromete-se a fornecer dados verídicos e a fazer uso ético e em conformidade legal dos recursos de comunicação fornecidos.
              </p>
            </>
          ) : (
            <>
              <h3 className="font-semibold text-white text-sm sm:text-base">1. Recolha de Dados</h3>
              <p>
                Recolhemos os dados submetidos nos formulários de contacto (como nome, e-mail e telefone) com vista ao atendimento e apresentação de soluções.
              </p>
              <h3 className="font-semibold text-white text-sm sm:text-base">2. Proteção de Dados e Privacidade</h3>
              <p>
                Os seus dados são tratados de acordo com as normas de proteção de dados (LGPD), sem qualquer partilha ou comercialização com terceiros para outros fins.
              </p>
              <h3 className="font-semibold text-white text-sm sm:text-base">3. Direitos do Titular</h3>
              <p>
                Poderá solicitar a qualquer momento a consulta, alteração ou eliminação definitiva dos seus registos através dos nossos canais de apoio.
              </p>
            </>
          )}
        </div>

        {/* Rodapé */}
        <div className="px-5 sm:px-6 py-3 border-t border-gray-800 bg-[#162032] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
