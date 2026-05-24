const WHATSAPP_PHONE = '+916393570832';

export function openWhatsApp(message: string): void {
  const cleanPhone = WHATSAPP_PHONE.replace(/[+\s]/g, '');
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${cleanPhone}?text=${encoded}`;
  window.open(url, '_blank');
}
