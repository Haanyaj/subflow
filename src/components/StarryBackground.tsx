import { memo } from "react";

const StarryBackground = memo(() => {
  return (
    <div className="starry-sky" aria-hidden="true">
      <div className="stars-small"></div>
      <div className="stars-medium"></div>
      <div className="stars-large"></div>
    </div>
  );
});

StarryBackground.displayName = "StarryBackground";

export default StarryBackground; 