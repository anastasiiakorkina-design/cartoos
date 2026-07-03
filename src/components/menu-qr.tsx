import QRCode from "qrcode";
import { SITE } from "@/lib/site";

/**
 * Server-rendered QR code linking to the digital menu.
 * Generated at build time — no client JS, no external requests.
 * `?src=qr` lets analytics attribute table scans.
 */
export async function MenuQr({
  className = "",
  dark = "#181818",
  light = "#0000",
}: {
  className?: string;
  dark?: string;
  light?: string;
}) {
  const svg = await QRCode.toString(`${SITE.url}/menu?src=qr`, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 0,
    color: { dark, light },
  });

  return (
    <div
      role="img"
      aria-label="QR code — scan to open the Cartoos menu on your phone"
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
