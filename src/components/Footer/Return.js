import React from "react";
import html2pdf from "html2pdf.js";

const ReturnPolicy = () => {
  const returnPolicyText = `

Return Policy:

Returns and Exchanges Policy:

We want you to be completely satisfied with your purchase. If for any reason you are not satisfied, we will gladly accept returns within 7 days of the delivery date. Please follow the guidelines below for a smooth return process:

1. Return Eligibility:

👉🏻 Items must be in new and unused condition.
👉🏻 Items must be returned with all original packaging and accessories.
👉🏻 Customized or personalized items are not eligible for return.

2. Initiating a Return:

👉🏻 Contact our customer service team at titanicservicessgr@gmail.com to initiate the return process.
👉🏻 Provide your order number, the item(s) you wish to return, and the reason for the return.

3. Return Shipping:

👉🏻 Customers are responsible for return shipping costs unless the return is due to a product defect or an error on our part.
👉🏻 We recommend using a trackable shipping service to ensure your return is received.

4. Refund Process:

👉🏻 Once your return is received and inspected, we will process your refund within 5-7 days.
👉🏻 Refunds will be issued to the original payment method.`;

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
      <pre>{returnPolicyText}</pre>
      <button
        onClick={() => handleExportToPDF(returnPolicyText, "ReturnPolicy.pdf")}
        className="font-semibold ml-4 bg-green-500 p-4 mt-4 rounded-full text-white tracking-widest hover:bg-green-600"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default ReturnPolicy;
