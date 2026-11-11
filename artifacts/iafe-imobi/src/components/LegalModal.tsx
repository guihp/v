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
  className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm"
  onClick={onClose}
>
      <div
        className="relative w-full max-w-3xl max-h-[85vh] bg-[#111827] text-gray-200 border border-gray-700/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-gray-800 bg-[#162032] shrink-0">
          <h2 className="text-base sm:text-xl font-bold text-white tracking-tight">
            {type === "termos" ? "Termos e Política de Uso — IAFÉ IMOBI" : "Política de Privacidade — IAFÉ IMOBI"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition text-lg"
            aria-label="Fechar modal"
          >
            ✕
          </button>
        </div>

        {/* Conteúdo com rolagem responsiva */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-xs sm:text-sm leading-relaxed text-gray-300">
          {type === "termos" ? (
            <>
              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">1. Aceitação</h3>
                <p>
                  Estes Termos regulam o acesso ao site lpimobi.iafeoficial.com e o uso da plataforma IAFÉ IMOBI. Ao acessar o site, enviar o formulário ou contratar um plano, você declara que leu e aceita estes Termos e a Política de Privacidade. Se não concordar, não use os serviços.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">2. O serviço</h3>
                <p>A IAFÉ IMOBI é um software como serviço (SaaS) para o mercado imobiliário que pode incluir, conforme o plano contratado:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                  <li>CRM imobiliário com funil visual de vendas;</li>
                  <li>Atendimento automatizado por inteligência artificial 24 horas;</li>
                  <li>Integração e centralização de conversas de WhatsApp;</li>
                  <li>Captação, qualificação e distribuição de leads;</li>
                  <li>Agendamento de visitas;</li>
                  <li>Sites imobiliários, SEO e recursos de marketing;</li>
                  <li>Relatórios, gestão de equipe e integrações com terceiros.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">3. Cadastro e acesso</h3>
                <p>
                  O cliente deve ser maior de 18 anos ou pessoa jurídica regularmente constituída, fornecendo informações verdadeiras e atualizadas. As credenciais de acesso são pessoais e intransferíveis, sendo o cliente responsável pelas atividades realizadas sob suas contas.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">4. Planos, pagamento e reajuste</h3>
                <p className="mb-2">Os planos são cobrados de forma recorrente e mensal:</p>
                <ul className="list-disc pl-5 mb-2 space-y-1">
                  <li><strong>Start Imobi:</strong> R$ 749,00/mês</li>
                  <li><strong>Imobi Scale:</strong> R$ 1.999,00/mês</li>
                  <li><strong>Imobi Authority:</strong> R$ 2.499,00/mês</li>
                </ul>
                <p>
                  A cobrança é realizada antecipadamente. Em caso de atraso superior a 5 dias, o acesso poderá ser suspenso até a regularização, com aplicação de multa de 2% e juros de 1% ao mês. Os valores poderão sofrer reajuste anual com aviso prévio de 30 dias. Custos de terceiros (como tarifas de API oficial Meta/WhatsApp) podem incidir à parte quando aplicável.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">5. Cancelamento</h3>
                <p>
                  O cliente pode cancelar a assinatura a qualquer momento pelos canais de atendimento ou pelo painel. O cancelamento vigora ao fim do ciclo mensal pago, sem reembolso proporcional. Contratações digitais seguem o direito de arrependimento legal de 7 dias (art. 49 do CDC). Após o cancelamento, o cliente terá até 30 dias para exportar seus dados.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">6. Uso permitido e proibições</h3>
                <p>É expressamente proibido:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Enviar spam, mensagens em massa abusivas ou conteúdo enganoso;</li>
                  <li>Usar a IA ou WhatsApp em desacordo com as políticas oficiais da Meta;</li>
                  <li>Anunciar imóveis com informações falsas ou atuar sem registro legal (CRECI);</li>
                  <li>Inserir dados pessoais obtidos de forma ilícita;</li>
                  <li>Fazer engenharia reversa, copiar, revender ou descompilar a plataforma;</li>
                  <li>Tentar burlar ou sobrecarregar a infraestrutura e segurança do sistema.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">7. Responsabilidades do cliente</h3>
                <p>
                  O cliente atua como Controlador dos dados dos seus leads e clientes finais, respondendo pela respectiva base legal, comunicação aos titulares sobre o atendimento automatizado e veracidade dos imóveis anunciados. Recomenda-se a conferência humana de propostas e agendamentos feitos pela IA antes de compromissos vinculantes.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">8. Inteligência artificial: limitações</h3>
                <p>
                  A IA atua como ferramenta de suporte operacional e pode apresentar respostas imprecisas. Métricas no site (como "10x respostas rápidas" e "30% aumento em vendas") são estimativas comparativas, não garantia contratual de faturamento. A IA não substitui o corretor de imóveis nem presta consultoria jurídica ou financeira.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">9. Disponibilidade e integrações de terceiros</h3>
                <p>
                  Buscamos disponibilidade contínua (24/7), ressalvadas manutenções e oscilações de provedores terceiros (como WhatsApp, servidores em nuvem e provedores de internet). A IAFÉ IMOBI não responde por sanções ou banimentos de números decorrentes de violação das diretrizes da Meta pelos usuários.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">10. Propriedade intelectual e foro</h3>
                <p>
                  A plataforma, marcas, códigos e designs são de propriedade exclusiva da IAFÉ IMOBI. Fica eleito o foro da Comarca de São Luís – MA para dirimir eventuais litígios, ressalvado o domicílio do consumidor.
                </p>
                <div className="mt-3 p-3 bg-gray-900/60 rounded-lg text-xs space-y-1 border border-gray-800">
                  <p><strong>E-mail:</strong> iafeoficial3@gmail.com</p>
                  <p><strong>WhatsApp:</strong> (19) 99157-0231</p>
                  <p><strong>Endereço:</strong> Avenida São Luís Rei de França, nº 325, Dom Center, Loja 28, Turu, São Luís – MA, CEP 65065-470</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">1. Quem somos</h3>
                <p>
                  A IAFÉ IMOBI é uma plataforma de CRM imobiliário com inteligência artificial sediada na Avenida São Luís Rei de França, nº 325, Dom Center, Loja 28, Turu, São Luís – MA, CEP 65065-470. Esta Política regula o tratamento de dados no domínio lpimobi.iafeoficial.com e em nossa aplicação.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">2. Papéis no tratamento de dados (LGPD)</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Visitantes do site e clientes contratantes:</strong> A IAFÉ IMOBI atua como <em>Controladora</em> dos dados.</li>
                  <li><strong>Leads e clientes cadastrados por imobiliárias e corretores:</strong> A imobiliária/corretor contratante atua como <em>Controlador</em>, e a IAFÉ IMOBI atua como <em>Operadora</em>, processando as informações exclusivamente para a execução do serviço contratado.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">3. Dados coletados</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Formulários de demonstração:</strong> Nome, número de WhatsApp e mensagem;</li>
                  <li><strong>Contratação e cadastro:</strong> Nome completo, razão social, CPF/CNPJ, e-mail, telefone, endereço, CRECI e dados para faturação via gateways parceiros (não guardamos números de cartão de crédito);</li>
                  <li><strong>Operação do CRM:</strong> Registros de leads, histórico de atendimentos e conversas via WhatsApp conduzidas com apoio de IA;</li>
                  <li><strong>Dados de navegação:</strong> Endereço IP, registros de data/hora, navegador, dispositivo e métricas de interação.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">4. Finalidades e bases legais</h3>
                <p>
                  Os dados são tratados para execução dos contratos e demonstrações solicitadas, suporte técnico, melhoria da segurança do software, faturamento e cumprimento de obrigações legais (como guarda de registros de conexão prevista no Marco Civil da Internet por 6 meses).
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">5. Inteligência artificial</h3>
                <p>
                  A IA atua na triagem e qualificação de leads por conta e ordem do cliente contratante. Nossos provedores de modelos cumprem requisitos rígidos de proteção e não utilizam os dados do seu atendimento para alimentar ou treinar modelos públicos. O titular tem direito à revisão de decisões unicamente automatizadas (art. 20 da LGPD).
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">6. Compartilhamento de dados</h3>
                <p>
                  Não comercializamos dados pessoais em hipótese alguma. Compartilhamos informações exclusivamente com servidores de nuvem de alta segurança, intermediadores bancários, provedores da API oficial do WhatsApp e autoridades mediante determinação judicial.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">7. Armazenamento e retenção</h3>
                <p>
                  Os dados são mantidos durante a vigência do contrato. Ao término da relação comercial, o cliente tem até 30 dias para exportar seus cadastros antes da anonimização ou exclusão definitiva, resguardados os prazos fiscais e legais obrigatórios.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">8. Seus direitos (art. 18 da LGPD)</h3>
                <p>
                  Você pode solicitar confirmação de tratamento, acesso, correção, eliminação de dados tratados sob consentimento e portabilidade. Caso você seja lead de um corretor parceiro, sua requisição deve ser direcionada diretamente a ele (Controlador).
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">9. Canal de contato e privacidade</h3>
                <p>Para dúvidas sobre privacidade, LGPD ou exercício de direitos, entre em contato:</p>
                <div className="mt-3 p-3 bg-gray-900/60 rounded-lg text-xs space-y-1 border border-gray-800">
                  <p><strong>E-mail:</strong> iafeoficial3@gmail.com</p>
                  <p><strong>WhatsApp:</strong> (19) 99157-0231</p>
                  <p><strong>Endereço:</strong> Avenida São Luís Rei de França, nº 325, Dom Center, Loja 28, Turu, São Luís – MA, CEP 65065-470</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Rodapé do Modal */}
        <div className="px-5 sm:px-6 py-3 border-t border-gray-800 bg-[#162032] flex justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-green-600 hover:bg-green-500 rounded-lg transition shadow-md"
          >
            Entendi e fechar
          </button>
        </div>
      </div>
    </div>
  );
}
