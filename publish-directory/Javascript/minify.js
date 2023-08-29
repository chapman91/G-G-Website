
// MINIFY CSS
async function minifyCSS(originalCss) {
  const apiUrl = "https://www.toptal.com/developers/cssminifier/api/raw";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `input=${encodeURIComponent(originalCss)}`
    });

    if (response.ok) {
      const minifiedCss = await response.text();
      return minifiedCss;
    } else {
      return "Error while minifying CSS.";
    }
  } catch (error) {
    console.error("Error:", error);
    return "Error while minifying CSS.";
  }
}
