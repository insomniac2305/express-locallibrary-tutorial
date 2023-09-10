const coverFile = document.getElementById("cover");
const coverPreview = document.getElementById("cover-preview");
const coverLabel = document.getElementById("cover-label");

coverFile.addEventListener("change", () => {
  const curFiles = coverFile.files;

  if (curFiles.length === 0) {
    coverPreview.style.display = "none";
    coverLabel.innerText = "Choose cover image";
  } else {
    const file = curFiles[0];
    coverPreview.src = URL.createObjectURL(file);
    coverLabel.innerText = file.name;
    coverPreview.style.display = "block";
  }
});
