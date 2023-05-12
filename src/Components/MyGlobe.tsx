import { useEffect, useMemo, useState } from "react";
import Globe from "react-globe.gl";
import { GlobeStyles } from "../styles/GlobeStyles";

function MyGlobe() {
  const [rise, setRise] = useState(false);

  useEffect(() => {
    setTimeout(() => setRise(true), 6000);
  }, []);

  const N_PATHS = 10;
  const MAX_POINTS_PER_LINE = 10000;
  const MAX_STEP_DEG = 1;
  const MAX_STEP_ALT = 0.015;

  const gData = useMemo(() => [...Array(N_PATHS).keys()].map(() => {
    let lat = (Math.random() - 0.5) * 90;
    let lng = (Math.random() - 0.5) * 360;
    let alt = 0;

    return [[lat, lng, alt], ...[...Array(Math.round(Math.random() * MAX_POINTS_PER_LINE)).keys()].map(() => {
      lat += (Math.random() * 2 - 1) * MAX_STEP_DEG;
      lng += (Math.random() * 2 - 1) * MAX_STEP_DEG;
      alt += (Math.random() * 2 - 1) * MAX_STEP_ALT;
      alt = Math.max(0, alt);

      return [lat, lng, alt];
    })];
  }), []);

  return (
    <GlobeStyles style={{ width: "100%" }}>
      <div style={{ width: "335px", margin: "0 auto", paddingTop: "20px" }}>
        <Globe
          width={335}
          height={200}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          pathsData={gData}
          pathColor={() => ["rgba(0,0,255,0.6)", "rgba(255,0,0,0.6)"]}
          pathDashLength={0.01}
          pathDashGap={0.004}
          pathDashAnimateTime={100000}
          pathPointAlt={rise ? (pnt) => pnt[2] : undefined}
          pathTransitionDuration={rise ? 4000 : undefined}
        />
      </div>
    </GlobeStyles>
  );
}

export default MyGlobe;
