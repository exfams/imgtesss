const files = [
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
  "5.webp",
  "6.jpeg",
  "7.png",
  "9.png"
];

const baseURL = "https://exfams.github.io/imgtesss/";

const tbody = document.querySelector("#gambar-table tbody");

files.forEach((file, index) => {
  const row = document.createElement("tr");

  const imgCell = document.createElement("td");
  const img = document.createElement("img");
  img.src = baseURL + file;
  img.alt = file;
  img.onclick = () => showFullscreen(img.src);
  imgCell.appendChild(img);

  const nameCell = document.createElement("td");
  nameCell.textContent = file;

  const copyCell = document.createElement("td");
  const copyBtn = document.createElement("button");
  copyBtn.textContent = "Copy";
  copyBtn.className = "copy-btn";
  copyBtn.onclick = () => copyLink(img.src);
  copyCell.appendChild(copyBtn);

  row.appendChild(imgCell);
  row.appendChild(nameCell);
  row.appendChild(copyCell);

  tbody.appendChild(row);
});
