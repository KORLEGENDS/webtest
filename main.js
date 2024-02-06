function editSection(sectionId) {
    let content = prompt("새로운 내용을 입력하세요:");
    if (content !== null) {
        document.getElementById(sectionId).textContent = content;
    }
}
