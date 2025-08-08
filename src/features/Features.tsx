function Features() {
  const handlePrint = () => {
    window.print(); // Triggers the browser's print dialog
  };
  return (
    <div className="features no-print">
      {/* <div className="print-btn">
        <button>Print</button>
      </div> */}
      <div className="download-btn" onClick={handlePrint}>
        <button>Download CV</button>
      </div>
    </div>
  );
}

export default Features;
