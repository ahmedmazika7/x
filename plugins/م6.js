let handler = async (m, { conn, command, text }) => {
let love = `
⦓           ⦓🏆⦔          ⦔ـ
⌟🍄⌜ قـسـم الـتـحـويـلات 
⦓           ⦓🏆⦔          ⦔ـ
📍❯ ⏐ .لانـمـي
☫ ⌟لتحويل الصوره لانمي⌜
📍❯ ⏐ .جـيـف
☫ ⌟لتحويل الفيديو لgif⌜
📍❯ ⏐ .لـصـوره
☫ ⌟لتحويل الملصق لصوره⌜
📍❯ ⏐ .لـصـوت
☫ ⌟لتحويل الفيديو لصوت⌜
📍❯ ⏐ .لـريـك
☫ ⌟لتحويل الفيديو لريكورد⌜
📍❯ ⏐ .لـفـيـديـو
☫ ⌟لتحويل الملصق لفيديو⌜
📍❯ ⏐ .تـلـيـجـراف
☫ ⌟لتحويل الاشياء الي تليجراف⌜
📍❯ ⏐ .انـطـق
☫ ⌟لتحويل النص الي صوت⌜
⦓           ⦓🏆⦔          ⦔ـ
هذا هو قروب الدعم: https://chat.whatsapp.com/IVc2CWdcWem6IEwtly5oA6
⦓           ⦓🏆⦔          ⦔ـ
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م٦|م6|اوامر التحويل|الاوامر التحويل)$/i
export default handler
