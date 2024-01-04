document.addEventListener("DOMContentLoaded", () => {
    const icons = [
        { id: "linkedin-icon", text: "LinkedIn" },
        { id: "github-icon", text: "GitHub" },
        { id: "youtube-icon", text: "YouTube" },
        { id: "mail-icon", text: "Email" },
        { id: "discord-icon", text: "Discord" }
    ];

    // ForEach
    icons.forEach(icon => {
        const element = document.getElementById(icon.id);
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.textContent = icon.text;
        element.appendChild(tooltip)

    });
});