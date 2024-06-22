import { useState } from "react";

function TextExpander({
  children,
  expanded = false,
  maxLength = 20,
  className = "",
  expanderButton = "Show More",
  collapseButton = "Show Less",
  buttonColor = "#1f09cd",
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  // Check if children exist and are a string before accessing length property
  const childrenLength = typeof children === "string" ? children.length : 0;

  const displayText = isExpanded
    ? children
    : childrenLength > maxLength
    ? children.slice(0, maxLength) + "..."
    : children;

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };

  return (
    <p className={className}>
      <span>{displayText}</span>
      {childrenLength > maxLength && (
        <button style={buttonStyle} onClick={() => setIsExpanded((s) => !s)}>
          {isExpanded ? collapseButton : expanderButton}
        </button>
      )}
    </p>
  );
}

export default TextExpander;
