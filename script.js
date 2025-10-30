// Translate using LibreTranslate API
async function translateText() {
 const text = document.getElementById("sourceText").value.trim();
 const from = document.getElementById("sourceLang").value;
 const to = document.getElementById("targetLang").value;
 const result = document.getElementById("result");
 if (!text) return;
 try {
 const res = await fetch("https://libretranslate.de/translate", {
 method: "POST",
 body: JSON.stringify({ q: text, source: from, target: to, format: "text" }),
 headers: { "Content-Type": "application/json" }
 });
 const data = await res.json();
 result.textContent = data.translatedText;
 } catch (err) {
 result.textContent = "Translation unavailable (offline mode).";
 }
}
// Speak aloud using Web Speech API
function speakText(id) {
 const msg = new SpeechSynthesisUtterance(
 document.getElementById(id).textContent || document.getElementById(id).value
 );
 window.speechSynthesis.speak(msg);
 }
