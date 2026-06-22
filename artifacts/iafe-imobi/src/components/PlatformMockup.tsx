import platformImg from "@assets/Design_sem_nome_1781272995278.webp";

export function PlatformMockup() {
  return (
    <div className="w-full flex items-center justify-center">
      <img
        src={platformImg}
        alt="IAFÉ IMOBI Platform Dashboard"
        className="w-full max-w-5xl object-contain drop-shadow-2xl"
        width={1280}
        height={1024}
        fetchPriority="high"
        decoding="async"
        data-testid="img-platform-mockup"
      />
    </div>
  );
}
