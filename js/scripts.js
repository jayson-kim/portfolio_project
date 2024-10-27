document.addEventListener('DOMContentLoaded', function() {
    // Select all portfolio sheets
    const portfolioSheets = document.querySelectorAll('.portfolio-sheet');
  
    // Iterate over each sheet and assign page numbers
    portfolioSheets.forEach((sheet, index) => {
      const pageNumberElement = sheet.querySelector('.portfolio-content__page-number');
      if (pageNumberElement) {
        pageNumberElement.textContent = index + 1; // Page numbers start at 1
      }
    });
  });