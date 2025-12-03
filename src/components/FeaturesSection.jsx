import React from 'react';
import '../styles/features.css';

export function FeaturesSection() {
  return (
    <section className="features container" id="feature">
      <div className="box-wrapper">
        <div className="box box1">
          <i className="fab fa-xbox fa-2x text-red"></i>
          <h2 className="md-heading lt-space text-light">ERANGEL</h2>
          <p className="text-light">
            ERANGEL. PUBG's original map, Erangel is an 8x8 island whose terrain ranges from open grasslands to tall mountains, with cities and towns mixed in-between.
          </p>
        </div>
        <div className="box box2">
          <i className="fab fa-playstation fa-2x text-light"></i>
          <h2 className="md-heading lt-space text-light">VIKENDI</h2>
          <p className="text-light">
            VIKENDI. Vikendi (Croatian: Dihor Otok) is the 4th playable map that is in the works for BATTLEGROUNDS, Vikendi is a 6x6 island on the Adriatic Sea.
          </p>
        </div>
        <div className="box box3">
          <i className="fab fa-critical-role fa-2x text-red"></i>
          <h2 className="md-heading lt-space text-light">MIRAMAR</h2>
          <p className="text-light">
            Miramar is the 2nd playable map for BATTLEGROUNDS. Miramar is a 8x8km city-centric map with an open desert plain and rural areas.
          </p>
        </div>
      </div>
    </section>
  );
}
