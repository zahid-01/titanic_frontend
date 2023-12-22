import React from "react";

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

  const handleExport = () => {
    const blob = new Blob([refundPolicyText], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "RefundPolicy.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <pre>{refundPolicyText}</pre>
      <button onClick={handleExport} className="font-bold ml-4">
        Download Refund Policy
      </button>
    </div>
  );
};

export default RefundPolicy;
