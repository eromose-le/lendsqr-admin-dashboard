import React, { useState } from "react";

interface StarProps {
  marked: boolean;
  starId: number;
  readOnly?: boolean;
}

const Star: React.FC<StarProps> = ({ marked, starId, readOnly }) => {
  return (
    <span
      data-star-id={starId}
      className="star"
      style={{
        color: "#E9B200",
        cursor: readOnly ? "default" : "pointer",
      }}
      role={readOnly ? undefined : "button"}
    >
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

interface StarRatingProps {
  value: string | number;
  readOnly?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({ value, readOnly }) => {
  const [rating, setRating] = useState<number>(parseInt(value as string) || 0);
  const [selection, setSelection] = useState<number>(0);

  const hoverOver = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | null
  ) => {
    if (readOnly) return;
    let val = 0;
    if (event && event.target && event.target instanceof HTMLElement) {
      val = parseInt(event.target.getAttribute("data-star-id") || "0", 10);
    }
    setSelection(val);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (readOnly) return;
    const newRating = parseInt(
      e.currentTarget.getAttribute("data-star-id") || "0",
      10
    );
    setRating(newRating || rating);
  };

  return (
    <div
      onMouseOut={() => hoverOver(null)}
      onClick={handleClick}
      onMouseOver={hoverOver}
      style={{ display: "flex", padding: "0", margin: "0", gap: "4px" }}
    >
      {Array.from({ length: 3 }, (_v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1}`}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
          readOnly={readOnly}
        />
      ))}
    </div>
  );
};

export default StarRating;
