// 엔터로 검색
document.getElementById("searchInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    searchGoogle();
  }
});

// 'Google 검색' 버튼
function searchGoogle() {
  const query = document.getElementById("searchInput").value.trim();
  if (query !== "") {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
}

// 'I'm Feeling Lucky' 버튼
function luckySearch() {
  const query = document.getElementById("searchInput").value.trim();
  if (query !== "") {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=I`;
  }
}

// 다크모드 토글
function toggleDarkMode() {
  const body = document.body;
  const toggleBtn = document.querySelector(".toggle-mode");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ 라이트 모드";
  } else {
    toggleBtn.textContent = "🌙 다크 모드";
  }
}
