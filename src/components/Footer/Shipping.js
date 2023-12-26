import React from "react";
import html2pdf from "html2pdf.js";

const ShippingPolicy = () => {
  const shippingPolicyText = `
Shipping Policy:


1. Processing Time:

👉🏻 Orders are typically processed within 2-4 business days.
👉🏻 Custom or personalized items may require additional processing time.

2. Shipping Methods:

👉🏻 We offer standard and expedited shipping options.
👉🏻 Shipping costs and estimated delivery times are provided at checkout.

3. Shipping Restrictions:

👉🏻 We currently ship to PAN India
👉🏻 Some items may have shipping restrictions based on local regulations.

3. Order Tracking:

👉🏻 Once your order is shipped, you will receive a confirmation email with tracking information.
Use the provided tracking number to monitor the status of your shipment.

4. Shipping Delays:

👉🏻 We strive to meet estimated delivery times, but external factors may cause delays.
👉🏻 Contact our customer service team for assistance if your order is delayed.`;

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
      <pre>{shippingPolicyText}</pre>
      <button
        onClick={() =>
          handleExportToPDF(shippingPolicyText, "ShippingPolicy.pdf")
        }
        className="font-semibold ml-4 bg-green-500 p-4 mt-4 rounded-full text-white tracking-widest hover:bg-green-600"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default ShippingPolicy;
