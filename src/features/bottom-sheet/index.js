const BottomSheet = ({ children, isOpen, handleClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{ zIndex: 1200 }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity: 0.5,
          backgroundColor: "#3e4148",
        }}
        onClick={() => handleClose()}
      />
      <div
        style={{
          position: "fixed",
          width: "100%",
          backgroundColor: "#E0E1DD",
          borderRadius: "8px",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        className="text-center"
      >
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
