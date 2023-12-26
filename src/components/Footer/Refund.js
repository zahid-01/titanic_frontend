import React from "react";
import html2pdf from "html2pdf.js";

const RefundPolicy = () => {
  const refundPolicyText = `
    Refund Policy:

    1. Refund Eligibility:
    👉🏻 Refunds are provided for the purchase price of the item(s) returned.
    👉🏻 Shipping charges are non-refundable, except in cases of defective or incorrect items.

    2. Damaged or Defective Items:
    👉🏻 If you receive a damaged or defective item, please contact us immediately.
    👉🏻 Provide photos of the damaged or defective item, and we will arrange a replacement or issue a refund.

    3. Refund Process:
    👉🏻 Refunds will be processed within 5-7 business days of receiving and inspecting the returned item.
    👉🏻 Refunds will be issued to the original payment method.

    4. Late or Missing Refunds:
    👉🏻 If you haven't received your refund within the specified time, please check your bank account.
    👉🏻 Contact your bank or credit card company if the refund is still not reflected.
    👉🏻 If you need further assistance, please contact us at titanicservicessgr@gmail.com.
  `;

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
    <div className="border-b p-4">
      <pre>{refundPolicyText}</pre>
      <button
        onClick={() => handleExportToPDF(refundPolicyText, "RefundPolicy.pdf")}
        className="font-semibold ml-4 bg-green-500 p-4 mt-4 rounded-full text-white tracking-widest hover:bg-green-600"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default RefundPolicy;
