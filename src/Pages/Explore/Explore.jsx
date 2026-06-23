"use Client";

import { Button } from "@heroui/react";
import React from "react";
import VideoExplore from "../../components/VideoExplore/VideoExplore";

export default function Explore() {
  return (
    <>
      <VideoExplore />
      <div>
        <p className="text-3xl font-bold">Explore</p>
        <p className="mt-4 text-lg">
          We are a company dedicated to providing the best coffee experience.
          Our mission is to bring the finest coffee from around the world to
          your doorstep. We believe in quality, sustainability, and community.
          Join us on our journey to explore the world of coffee!
        </p>
      </div>
    </>
  );
}
