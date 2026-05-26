// ✅ Data
const data = [
  "Home",
  "About",
  "Services",
  "Contact",
  "Web Design",
  "SEO",
  "Marketing",
  "Development",
];

// ✅ Elements
const searchInput = document.getElementById("searchInput");
const searchWrap = document.querySelector(".search-wrap");

// ✅ Create suggestion box INSIDE search-wrap
const suggestions = document.createElement("ul");
suggestions.classList.add("suggestions");
searchWrap.appendChild(suggestions);

// ===============================
// ✅ SEARCH FUNCTION
// ===============================
function performSearch(query) {
  query = query.trim();

  if (!query) return;

  alert("Searching for: " + query);

  // Example redirect:
  // window.location.href = `search.html?q=${encodeURIComponent(query)}`;
}

// ===============================
// ✅ LIVE SEARCH
// ===============================
searchInput.addEventListener("input", () => {
  const value = searchInput.value.trim().toLowerCase();

  suggestions.innerHTML = "";

  if (!value) {
    suggestions.style.display = "none";
    return;
  }

  const filtered = data.filter((item) => item.toLowerCase().includes(value));

  filtered.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;

    li.addEventListener("click", () => {
      searchInput.value = item;
      suggestions.style.display = "none";
      performSearch(item);
    });

    suggestions.appendChild(li);
  });

  suggestions.style.display = filtered.length ? "block" : "none";
});

// ===============================
// ✅ ENTER KEY SEARCH
// ===============================
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    performSearch(searchInput.value);
    suggestions.style.display = "none";
  }
});

// ===============================
// ✅ CLICK OUTSIDE CLOSE
// ===============================
document.addEventListener("click", (e) => {
  if (!searchWrap.contains(e.target)) {
    suggestions.style.display = "none";
  }
});
