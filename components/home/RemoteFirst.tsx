
import Link from "next/link";
import { ArrowUpRight, Globe2, Network } from "lucide-react";

export default function RemoteFirst() {
  return (
    <section className="remote-first section-padding">
      <div className="section-container">

        <div className="remote-first-card">

          <div className="remote-first-content">
            <div className="remote-first-label">
              <Globe2 size={15} />
              <span>HOW WE OPERATE</span>
            </div>

            <h2>
              Built beyond
              <span> boundaries.</span>
            </h2>

            <h3>Remote-first. Globally minded.</h3>

            <p>
              We bring together people, ideas and capabilities
              beyond geographical boundaries. We believe great
              work comes from shared vision, collaboration
              and purposeful execution.
            </p>

            <Link href="/about" className="remote-first-link">
              Discover our approach
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="remote-first-visual">
            <div className="remote-first-orbit orbit-one" />
            <div className="remote-first-orbit orbit-two" />

            <div className="remote-first-node node-one">
              <Network size={21} />
            </div>

            <div className="remote-first-node node-two">
              <Globe2 size={21} />
            </div>

            <div className="remote-first-core">
              <span>CX</span>
              <small>CONNECTED BY PURPOSE</small>
            </div>

            <div className="remote-first-node node-three">
              <Network size={21} />
            </div>
          </div>

          <span className="remote-first-index">CX / 002</span>

        </div>

      </div>
    </section>
  );
}
