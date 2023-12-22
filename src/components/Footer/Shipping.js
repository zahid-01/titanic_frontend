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

  const handleExport = () => {
    const blob = new Blob([shippingPolicyText], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "ShippingPolicy.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <pre>{shippingPolicyText}</pre>
      <button onClick={handleExport} className="font-bold ml-4 mt-4">
        Download Shipping Policy
      </button>
    </div>
  );
};

export default ShippingPolicy;
