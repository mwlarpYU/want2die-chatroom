document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const messages = [
        { type: "system", text: "XXX 加入群組" },
        { type: "other", text: "大家好！" },
        { type: "user", text: "今天過得怎麼樣？" },
        { type: "other", text: "有人有推薦的電影嗎？" },
        { type: "user", text: "聽說最近天氣變冷了，要注意保暖哦。" },
        { type: "other", text: "有沒有哪裡好吃的餐廳推薦？" },
        { type: "user", text: "有人喜歡運動嗎？" },
        { type: "other", text: "最近有什麼新書推薦嗎？" }
    ];

    let index = 0;

    function displayNextMessage() {
        if (index < messages.length) {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.classList.add(messages[index].type);
            messageElement.textContent = messages[index].text;
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight;  // 自動滾動到最新訊息
            index++;

            // 計算下一條訊息的顯示時間，2到10秒之間隨機
            const nextInterval = Math.random() * (5000 - 2000) + 2000;
            setTimeout(displayNextMessage, nextInterval);
        }
    }

    displayNextMessage();
});
