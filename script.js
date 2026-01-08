function generateContent() {
    const topic = document.getElementById("topic").value;
    const platform = document.getElementById("platform").value;
    const tone = document.getElementById("tone").value;
    const result = document.getElementById("result");

    if (topic === "" || platform === "" || tone === "") {
        alert("Please fill all fields!");
        return;
    }

    let caption = "";

    if (tone === "Motivational") {
        caption = `Believe in yourself and stay consistent 💪🔥\n\nTopic: ${topic}`;
    } else if (tone === "Funny") {
        caption = `Who else relates to this? 😄😂\n\nTopic: ${topic}`;
    } else {
        caption = `Here are some insights on ${topic} that matter in today's world.`;
    }

    let hashtags = `#${topic.replaceAll(" ", "")} #${platform} #ContentCreator #SocialMedia`;

    result.value = `${caption}\n\n${hashtags}`;
}

function copyContent() {
    const result = document.getElementById("result");
    result.select();
    document.execCommand("copy");
    alert("Content copied!");
}