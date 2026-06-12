import platformImg from "@assets/Design_sem_nome_1781272995278.png";

export function PlatformMockup() {
  return (
    <div className="w-full flex items-center justify-center">
      <img
        src={platformImg}
        alt="IAFÉ IMOBI Platform Dashboard"
        className="w-full max-w-5xl object-contain drop-shadow-2xl"
        data-testid="img-platform-mockup"
      />
    </div>
  );
}
