import React from "react";
import html2pdf from "html2pdf.js";

const TermsandConditions = () => {
  const TermsandConditionsText = `
  Terms and Conditions:

  1. Acceptance of Terms:
  👉🏻 By using our services, you agree to comply with our terms and conditions.

  2. User Responsibilities:
  👉🏻 Users are responsible for maintaining the confidentiality of their account information.
  👉🏻 Users must not engage in any unlawful activities while using our services.

  3. Service Availability:
  👉🏻 We strive to ensure uninterrupted availability of our services, but we do not guarantee it.

  4. Changes to Terms:
  👉🏻 We reserve the right to modify our terms and conditions. Users will be notified of any changes.

  5. Contact Information:
  👉🏻 For any inquiries or concerns, please contact us at titanicservicessgr@gmail.com.`;

  const handleExportToPDF = (text, fileName) => {
    const contentDiv = document.createElement("div");
    contentDiv.innerHTML = `<pre>${text}</pre>`;

    html2pdf(contentDiv, {
      margin: 10,
      filename: fileName,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    });
  };

  return (
    <div>
      <div className="border-b p-4">
        <h2>Terms and Conditions</h2>
        <pre>{TermsandConditionsText}</pre>
        <button
          onClick={() =>
            handleExportToPDF(TermsandConditionsText, "TermsAndConditions.pdf")
          }
          className="font-semibold ml-4 bg-green-500 mt-4 p-4 rounded-full text-white tracking-widest hover:bg-green-600"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default TermsandConditions;
