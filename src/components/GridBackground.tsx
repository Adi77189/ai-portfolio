const GridBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      {/* Base Background */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow Effect */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full" />
    </div>
  );
};

export default GridBackground;