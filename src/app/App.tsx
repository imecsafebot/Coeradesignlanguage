/**
 * coera — Landing Page
 *
 * Demonstrates the coera Design Language System:
 * NavigationBar → Hero → TextImpact → ImageText → ContentLight (with Cards) → Footer
 *
 * Page structure follows composition/layout.md:
 *   NavigationBar (fixed) → Hero → alternating dark/light sections → Footer
 */

import { NavigationBar }       from "./components/coera/NavigationBar";
import { HeroSection }         from "./components/coera/HeroSection";
import { TextImpactSection }   from "./components/coera/TextImpactSection";
import { ImageTextSection }    from "./components/coera/ImageTextSection";
import { ContentLightSection } from "./components/coera/ContentLightSection";
import { Footer }              from "./components/coera/Footer";
import { Card }                from "./components/coera/Card";
import { GlassPanel }          from "./components/coera/GlassPanel";
import { StatusBadge }         from "./components/coera/StatusBadge";

/* Unsplash images — industrial robotics theme */
const IMG_ROBOTICS =
  "https://images.unsplash.com/photo-1774229637247-3cd45219826c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9ib3RpY3MlMjBhcm0lMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc3NTQxOTYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_HUMAN_ROBOT =
  "https://images.unsplash.com/photo-1581090121489-ff9b54bbee43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMHJvYm90JTIwY29sbGFib3JhdGlvbiUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NzU0MTk2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

/* Feature cards for ContentLight section */
const FEATURES = [
  {
    id: "01",
    title: "Universal safety layer",
    body: "A single platform that makes any robot — regardless of vendor or type — safe to operate alongside people.",
  },
  {
    id: "02",
    title: "Continuous learning",
    body: "Every deployment improves the model. Data from the field feeds back into a safer, more capable system.",
  },
  {
    id: "03",
    title: "Plug-in, not bolt-on",
    body: "Integrates with existing robot stacks in days, not months. No hardware modifications required.",
  },
];

export default function App() {
  return (
    <div
      style={{
        background: "var(--semantic-bg-primary)",
        minHeight:  "100vh",
        width:      "100%",
      }}
    >
      {/* ── Fixed NavigationBar ─────────────────────────────────── */}
      <NavigationBar />

      {/* ── Section/Hero ────────────────────────────────────────── */}
      <HeroSection
        headline="The missing piece in the robotics revolution."
        subhead="coera makes physical AI safe, everywhere — a universal layer of trust for every robot that works with us."
        ctaLabel="Explore the platform"
      />

      {/* ── Section/TextImpact (dark) ────────────────────────────── */}
      <TextImpactSection text="Safety that accelerates." />

      {/* ── Section/ImageText (dark) ─────────────────────────────── */}
      <ImageTextSection
        imageUrl={IMG_ROBOTICS}
        imageAlt="Industrial robotic arm in a manufacturing environment"
        title="For robots that work with us, not around us."
        body="coera layers real-time safety intelligence onto any robot arm, mobile platform, or humanoid — enabling faster speeds, tighter human-robot proximity, and confident deployments in environments that were previously off-limits."
        ctaLabel="See how it works"
      />

      {/* ── GlassPanel demo (dark background) ────────────────────── */}
      <section
        style={{
          background:    "var(--semantic-bg-primary)",
          padding:       "120px 120px",
          display:       "flex",
          gap:           "var(--spacing-xl)",
          alignItems:    "flex-start",
          boxSizing:     "border-box",
        }}
      >
        {/* Large GlassPanel */}
        <GlassPanel
          variant="panel"
          title="A universal layer of trust."
          className="flex-1"
        >
          <p style={{ margin: 0 }}>
            Built on real-world operational data from thousands of deployments,
            coera's safety intelligence improves continuously — creating a
            self-reinforcing standard that raises the bar for the entire industry.
          </p>
          {/* StatusBadges demonstrating device health display */}
          <div
            style={{
              display:   "flex",
              gap:       "var(--spacing-sm)",
              flexWrap:  "wrap",
              marginTop: "var(--spacing-md)",
            }}
          >
            <StatusBadge label="Arm Unit 01" status="ok" />
            <StatusBadge label="Mobile Base" status="ok" />
            <StatusBadge label="Vision Node" status="warning" />
          </div>
        </GlassPanel>

        {/* Two GlassCards side by side */}
        <div
          style={{
            flex:          "1",
            display:       "flex",
            flexDirection: "column",
            gap:           "var(--spacing-xl)",
          }}
        >
          <GlassPanel variant="card" title="98.6% uptime">
            Across all active deployments in the last 90 days.
          </GlassPanel>
          <GlassPanel variant="card" title="0.003s response">
            Average safety intervention latency — faster than human reflexes.
          </GlassPanel>
        </div>
      </section>

      {/* ── Section/ImageText reversed (dark) ────────────────────── */}
      <ImageTextSection
        imageUrl={IMG_HUMAN_ROBOT}
        imageAlt="Human and robot working side by side in a logistics warehouse"
        title="Unlocking speed, scale, and coexistence."
        body="The coera platform enables manufacturers and integrators to dramatically reduce safety perimeters, increase throughput, and confidently deploy robots in dynamic, human-populated spaces."
        ctaLabel="Join the pilot"
        reverse
      />

      {/* ── Section/ContentLight (cream) ─────────────────────────── */}
      <ContentLightSection
        title="The foundation for the future of robotics."
        body="Three capabilities that make coera the missing infrastructure layer every serious robotics deployment needs."
      >
        {/* Cards on light background — white fill variant */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap:                 "var(--spacing-xl)",
          }}
        >
          {FEATURES.map(({ id, title, body }) => (
            <div
              key={id}
              style={{
                background:   "var(--brand-white)",
                borderRadius: "var(--radius-lg)",
                padding:      "var(--spacing-xl)",
                display:      "flex",
                flexDirection:"column",
                gap:          "var(--spacing-md)",
              }}
            >
              {/* Orange number accent */}
              <span
                style={{
                  fontFamily: '"PP Telegraf", "Space Grotesk", sans-serif',
                  fontSize:   "14px",
                  fontWeight: 400,
                  color:      "var(--semantic-accent)",
                  lineHeight: "1",
                }}
              >
                {id}
              </span>
              <h3
                style={{
                  fontFamily: '"PP Telegraf", "Space Grotesk", sans-serif',
                  fontSize:   "24px",
                  fontWeight: 400,
                  lineHeight: "1.2",
                  color:      "var(--brand-near-black)",
                  margin:     0,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: '"PP Mori", "DM Sans", sans-serif',
                  fontSize:   "16px",
                  fontWeight: 400,
                  lineHeight: "1.8",
                  color:      "var(--brand-near-black)",
                  margin:     0,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </ContentLightSection>

      {/* ── Card component demo (dark section) ───────────────────── */}
      <section
        style={{
          background:    "var(--semantic-bg-primary)",
          padding:       "120px 120px",
          display:       "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap:           "var(--spacing-xl)",
          boxSizing:     "border-box",
        }}
      >
        <Card title="Robots that learn. Safety that lasts.">
          coera's continuous learning loop means every new deployment sharpens
          the model. Safety improves with scale — not just over time.
        </Card>
        <Card title="Scaling for impact.">
          From a single pilot cell to thousands of units across global facilities,
          the coera platform is built to scale without friction.
        </Card>
      </section>

      {/* ── Section/TextImpact — closing statement ───────────────── */}
      <TextImpactSection text="Making physical AI safe, everywhere." />

      {/* ── Footer ───────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
