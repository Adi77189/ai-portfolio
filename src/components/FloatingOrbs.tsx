const FloatingOrbs = () => {
  return (
    <>
      <div className="fixed top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse pointer-events-none" />

      <div className="fixed bottom-20 right-10 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full animate-pulse pointer-events-none" />
    </>
  );
};

export default FloatingOrbs;