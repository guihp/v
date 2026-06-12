export function IafeLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2V30M2 16H30M6.10051 6.10051L25.8995 25.8995M6.10051 25.8995L25.8995 6.10051" stroke="#22C55E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-bold text-lg text-gray-900 tracking-tight">IAFÉ</span>
        <span className="text-[0.6rem] font-semibold text-gray-500 tracking-wider">IMOBI</span>
      </div>
    </div>
  );
}
