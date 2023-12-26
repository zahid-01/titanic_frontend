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

  const handleExport = () => {
    const blob = new Blob([TermsandConditionsText], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "T&C.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <pre>{TermsandConditionsText}</pre>
      <button onClick={handleExport} className="font-bold ml-4 mt-4">
        Download T&C's
      </button>
    </div>
  );
};

export default TermsandConditions;
