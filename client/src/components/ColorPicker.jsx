import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#D32F2F", // Red
          "#1976D2", // Blue
          "#388E3C", // Green
          "#FBC02D", // Yellow
          "#8E24AA", // Purple
          "#F57C00", // Orange
          "#5D4037", // Brown
          "#607D8B", // Blue Grey
          "#C2185B", // Pink
          "#0097A7", // Cyan
          "#7B1FA2", // Deep Purple
          "#AFB42B", // Lime
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
