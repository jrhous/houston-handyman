export default function CRTOverlay() {
  return (
    <>
      {/* Scan lines */}
      <div className="crt-layer crt-scanlines" aria-hidden="true" />
      {/* Vignette darkened edges */}
      <div className="crt-layer crt-vignette" aria-hidden="true" />
      {/* Noise grain */}
      <div className="crt-layer crt-noise" aria-hidden="true" />
      {/* Subtle screen flicker */}
      <div className="crt-layer crt-flicker" aria-hidden="true" />
    </>
  );
}
