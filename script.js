<script>
  const collapsible = document.querySelector(".collapsible");
  const content = document.querySelector(".collapsible-content");

  collapsible.addEventListener("click", function() {
    this.classList.toggle("active");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
</script>
