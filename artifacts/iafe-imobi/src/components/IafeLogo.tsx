import logoImg from "@assets/IMOBI-LOGO-2_1781272867895.webp";

interface IafeLogoProps {
  className?: string;
}

export function IafeLogo({ className = "" }: IafeLogoProps) {
  return (
    <img
      src={logoImg}
      alt="IAFÉ IMOBI"
      className={`h-10 w-auto object-contain ${className}`}
      width={320}
      height={119}
      decoding="async"
      data-testid="img-iafe-logo"
    />
  );
}
