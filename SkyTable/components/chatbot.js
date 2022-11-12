const chatbot=()=>{
    return `<div id="bothead">
    <h3>Virtual Assistant</h3>
    <i id="close" class="fa-sharp fa-solid fa-xmark"></i>
</div>
<div id="msg_area">
    <div id="robot">
        <div id="bot"></div>
        <p>Virtual Assistant</p>
        <p class="msg-left">Hey there! 👋 How can I help today?</p>
        <p class="msg-right" id="explore">I'd like to explore how SkyTable can help me</p>
        <p class="msg-right" id="pricing">I want to learn more about pricing</p>
        <p class="msg-right" id="support">I need to speak to Support</p>
        <p class="msg-right" id="billing">I have a billing question</p>
    </div>
</div>
<div id="input">
    <input type="text" placeholder="Reply to Virtual Assistant" id="text">
    <button id="send">Send <i class="fa fa-paper-plane"></i></button>
</div>`
}
export default chatbot