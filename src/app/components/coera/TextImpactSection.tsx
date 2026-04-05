/**
 * coera Section/TextImpact
 *
 * Large centered text for bold brand statements and key messages.
 * Black background, cream H2, constrained width.
 *
 * Guidelines: composition/sections.md → Section/TextImpact
 */

interface TextImpactSectionProps {
  text: string;
}

export function TextImpactSection({ text }: TextImpactSectionProps) {
  return (
    <section
      style={{
        background:     "var(--semantic-bg-primary)",
        /* height: 600px */
        minHeight:      "600px",
        /* padding: 120px vertical, 200px horizontal */
        paddingTop:     "120px",
        paddingBottom:  "120px",
        paddingLeft:    "200px",
        paddingRight:   "200px",
        /* layout: centered */
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        textAlign:      "center",
        boxSizing:      "border-box",
      }}
    >
      <h2
        className="desktop-h2"
        style={{
          color:    "var(--semantic-text-primary)",
          margin:   0,
          maxWidth: "800px",
          textWrap: "balance",
        }}
      >
        {text}
      </h2>
    </section>
  );
}
