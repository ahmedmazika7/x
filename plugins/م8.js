let handler = async (m, { conn, command, text }) => {
let love = `
⦓           ⦓🏆⦔          ⦔ـ
⌟🔊⌜ قـسـم الاصـوات 
⦓           ⦓🏆⦔          ⦔ـ
🎙️❯ ⏐ .عـمـيـق 
☫ ⌟يخلي الريك عميق ⌜
🎙️❯ ⏐ .مـنـفـوخ 
☫ ⌟يخلي الصوت منفوخ ⌜
🎙️❯ ⏐ .تخين 
☫ ⌟يخلي الصوت تخين ⌜
🎙️❯ ⏐ .صـاخـب 
☫ ⌟يخلي الصوت صاحب ⌜
🎙️❯ ⏐ .تخينن
☫ ⌟يخلي الصوت تخين جداً⌜
🎙️❯ ⏐ .سـريـع 
☫ ⌟يخلي الصوت سريع ⌜
🎙️❯ ⏐ .رفـيـع 
☫ ⌟يخلي الصوت رفيع ⌜
🎙️❯ ⏐ .روبـوت 
☫ ⌟يخلي الصوت روبوت ⌜
🎙️❯ ⏐ .نـاعـم 
☫ ⌟يخلي الصوت ناعم ⌜
🎙️❯ ⏐ .سـنـجـاب 
☫ ⌟يخلي الصوت مسنجب ⌜
⦓           ⦓🏆⦔          ⦔ـ
هذا هو قروب الدعم: https://chat.whatsapp.com/IVc2CWdcWem6IEwtly5oA6
⦓           ⦓🏆⦔          ⦔ـ
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م8|م٨)$/i
export default handler
