export function PlatformMockup() {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-gray-200 shadow-2xl bg-white flex flex-col">
      {/* Browser Chrome */}
      <div className="bg-gray-100 border-b border-gray-200 p-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="bg-white rounded-md mx-auto w-1/2 h-6 border border-gray-200 flex items-center px-2 text-xs text-gray-400">
          app.iafeimobi.com.br
        </div>
      </div>

      {/* App Body */}
      <div className="flex h-[500px]">
        {/* Sidebar */}
        <div className="w-48 bg-gray-50 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="font-bold text-green-600">IAFÉ IMOBI</div>
          </div>
          <div className="p-2 flex flex-col gap-1 text-sm text-gray-600">
            <div className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-default">Propriedades</div>
            <div className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-default">Agenda</div>
            <div className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-default">Funil</div>
            <div className="px-3 py-2 rounded-md bg-green-100 text-green-700 font-medium cursor-default">Pipeline Clientes</div>
            <div className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-default">CRM Clientes</div>
            <div className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-default">Conexões</div>
            <div className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-default">Usuários</div>
            <div className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-default">Conversas</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white p-6 overflow-hidden flex flex-col">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">Pipeline de Vendas</h2>
            <div className="px-3 py-1.5 bg-green-500 text-white rounded-md text-sm font-medium">Novo Lead</div>
          </div>

          <div className="flex gap-4 h-full overflow-x-auto pb-4">
            {/* Column 1 */}
            <div className="w-64 flex-shrink-0 bg-gray-50 rounded-lg p-3 flex flex-col gap-3">
              <div className="flex justify-between items-center px-1">
                <span className="font-semibold text-sm text-gray-700">Novo Lead</span>
                <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full">3</span>
              </div>
              <div className="bg-white p-3 rounded-md shadow-sm border border-gray-100">
                <div className="font-medium text-sm">Pra Prycilla Figame</div>
                <div className="text-xs text-gray-500 mt-1">Interesse: Apartamento</div>
              </div>
              <div className="bg-white p-3 rounded-md shadow-sm border border-gray-100">
                <div className="font-medium text-sm">João Silva</div>
                <div className="text-xs text-gray-500 mt-1">Interesse: Casa 3 quartos</div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="w-64 flex-shrink-0 bg-gray-50 rounded-lg p-3 flex flex-col gap-3">
              <div className="flex justify-between items-center px-1">
                <span className="font-semibold text-sm text-gray-700">Qualificado</span>
                <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full">2</span>
              </div>
              <div className="bg-white p-3 rounded-md shadow-sm border border-gray-100 border-l-4 border-l-green-500">
                <div className="font-medium text-sm">Thayna Castro</div>
                <div className="text-xs text-gray-500 mt-1">Aprovou simulação</div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="w-64 flex-shrink-0 bg-gray-50 rounded-lg p-3 flex flex-col gap-3">
              <div className="flex justify-between items-center px-1">
                <span className="font-semibold text-sm text-gray-700">Visita Agendada</span>
                <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full">1</span>
              </div>
              <div className="bg-white p-3 rounded-md shadow-sm border border-gray-100 border-l-4 border-l-blue-500">
                <div className="font-medium text-sm">Harry</div>
                <div className="text-xs text-gray-500 mt-1">Amanhã, 14:00</div>
              </div>
            </div>
            
            {/* Column 4 */}
            <div className="w-64 flex-shrink-0 bg-gray-50 rounded-lg p-3 flex flex-col gap-3">
              <div className="flex justify-between items-center px-1">
                <span className="font-semibold text-sm text-gray-700">Visita Cancelada</span>
                <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full">0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Floating Chat Panel */}
        <div className="w-64 bg-white border-l border-gray-200 flex flex-col">
          <div className="bg-green-600 text-white p-3 font-medium text-sm">
            Conversas Ativas
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="p-3 border-b border-gray-100 flex items-start gap-2 hover:bg-gray-50 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <div className="font-medium text-sm truncate">Maria Costa</div>
                  <div className="text-[10px] text-green-500 font-medium">12:05</div>
                </div>
                <div className="text-xs text-gray-500 truncate">Vou dar uma olhada.</div>
              </div>
            </div>
            <div className="p-3 border-b border-gray-100 flex items-start gap-2 bg-green-50 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <div className="font-medium text-sm truncate">Carlos Lima</div>
                  <div className="text-[10px] text-green-500 font-medium">11:42</div>
                </div>
                <div className="text-xs text-gray-800 font-medium truncate">Sim, tenho interesse.</div>
              </div>
            </div>
            <div className="p-3 border-b border-gray-100 flex items-start gap-2 hover:bg-gray-50 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <div className="font-medium text-sm truncate">Ana Pereira</div>
                  <div className="text-[10px] text-gray-400">Ontem</div>
                </div>
                <div className="text-xs text-gray-500 truncate">Obrigada!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
