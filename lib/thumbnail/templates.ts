import type { ReactNode } from "react";
import { createElement as h } from "react";
import type { ThumbnailConfig } from "./types";
import { BRAND } from "./brand";

const { colors, dimensions } = BRAND;
const W = dimensions.width;
const H = dimensions.height;

function BottomBar(): ReactNode {
  return h("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: W,
      height: 60,
      backgroundColor: colors.primaryGreen,
      display: "flex",
      alignItems: "center",
      paddingLeft: 80,
      gap: 40,
    },
  },
    h("span", {
      style: { fontFamily: "Inter Black", fontSize: 30, color: colors.accentGreen },
    }, "QUOTELY"),
    h("span", {
      style: { fontFamily: "Inter Bold", fontSize: 22, color: colors.lightGray },
    }, BRAND.site),
  );
}

function HeadlineBlock({ headline, subtext, topOffset }: {
  headline: string; subtext: string; topOffset: number;
}): ReactNode {
  const lines = headline.split("\n");
  return h("div", {
    style: {
      position: "absolute",
      left: 80,
      top: topOffset,
      display: "flex",
      flexDirection: "column",
    },
  },
    ...lines.map((line, i) =>
      h("span", {
        key: i,
        style: {
          fontFamily: "Inter Black",
          fontSize: 76,
          color: colors.white,
          letterSpacing: 2,
          lineHeight: 1.1,
        },
      }, line),
    ),
    h("span", {
      style: {
        fontFamily: "Inter Bold",
        fontSize: 28,
        color: colors.accentGreen,
        letterSpacing: 3,
        marginTop: 20,
      },
    }, subtext),
  );
}

function speedTemplate(cfg: ThumbnailConfig): ReactNode {
  const lines = cfg.headline.split("\n");
  const topOffset = lines.length > 1 ? 180 : 240;

  return h("div", {
    style: {
      position: "relative",
      width: W,
      height: H,
      display: "flex",
    },
  },
    // Metric circle
    cfg.metric ? h("div", {
      style: {
        position: "absolute",
        right: 90,
        top: 60,
        width: 280,
        height: 280,
        borderRadius: "50%",
        backgroundColor: colors.red,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
    },
      h("span", {
        style: { fontFamily: "Inter Black", fontSize: 60, color: colors.white },
      }, cfg.metric),
      cfg.metricLabel ? h("span", {
        style: { fontFamily: "Inter Bold", fontSize: 16, color: colors.lightGray },
      }, cfg.metricLabel) : null,
    ) : null,
    HeadlineBlock({ headline: cfg.headline, subtext: cfg.subtext, topOffset }),
    BottomBar(),
  );
}

function conversionTemplate(cfg: ThumbnailConfig): ReactNode {
  const lines = cfg.headline.split("\n");
  const topOffset = lines.length > 1 ? 160 : 220;

  return h("div", {
    style: {
      position: "relative",
      width: W,
      height: H,
      display: "flex",
    },
  },
    // Red urgency bar
    h("div", {
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        width: 8,
        height: H,
        backgroundColor: colors.red,
      },
    }),
    // Metric box
    cfg.metric ? h("div", {
      style: {
        position: "absolute",
        right: 80,
        top: 120,
        width: 320,
        height: 200,
        borderRadius: 16,
        backgroundColor: colors.red,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
    },
      h("span", {
        style: { fontFamily: "Inter Black", fontSize: 72, color: colors.white },
      }, cfg.metric),
      cfg.metricLabel ? h("span", {
        style: { fontFamily: "Inter Bold", fontSize: 20, color: colors.lightGray },
      }, cfg.metricLabel) : null,
    ) : null,
    HeadlineBlock({ headline: cfg.headline, subtext: cfg.subtext, topOffset }),
    BottomBar(),
  );
}

function comparisonTemplate(cfg: ThumbnailConfig): ReactNode {
  return h("div", {
    style: {
      position: "relative",
      width: W,
      height: H,
      display: "flex",
    },
  },
    // Left panel - Quotely
    h("div", {
      style: {
        position: "absolute",
        left: 60,
        top: 100,
        width: 520,
        height: 440,
        borderRadius: 12,
        backgroundColor: colors.primaryGreen,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      },
    },
      h("span", {
        style: { fontFamily: "Inter Black", fontSize: 40, color: colors.accentGreen },
      }, "QUOTELY"),
      h("span", {
        style: { fontFamily: "Inter Black", fontSize: 80, color: colors.white },
      }, "2 MIN"),
      h("span", {
        style: { fontFamily: "Inter Bold", fontSize: 24, color: colors.neonGreen },
      }, "15 carriers, instant"),
    ),
    // Divider
    h("div", {
      style: {
        position: "absolute",
        left: 636,
        top: 80,
        width: 4,
        height: 500,
        backgroundColor: colors.red,
      },
    }),
    // Right panel - Competitor
    h("div", {
      style: {
        position: "absolute",
        right: 60,
        top: 100,
        width: 520,
        height: 440,
        borderRadius: 12,
        backgroundColor: "#1a1a1a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      },
    },
      h("span", {
        style: { fontFamily: "Inter Black", fontSize: 36, color: colors.lightGray },
      }, "APPLIED SYSTEMS"),
      h("span", {
        style: { fontFamily: "Inter Black", fontSize: 80, color: colors.red },
      }, "15 MIN"),
      h("span", {
        style: { fontFamily: "Inter Bold", fontSize: 24, color: "#999" },
      }, "manual, per-carrier"),
    ),
    BottomBar(),
  );
}

function featureTemplate(cfg: ThumbnailConfig): ReactNode {
  const lines = cfg.headline.split("\n");
  const topOffset = lines.length > 1 ? 160 : 220;

  return h("div", {
    style: {
      position: "relative",
      width: W,
      height: H,
      display: "flex",
    },
  },
    // Metric badge
    cfg.metric ? h("div", {
      style: {
        position: "absolute",
        right: 80,
        top: 140,
        width: 300,
        height: 160,
        borderRadius: 80,
        backgroundColor: colors.accentGreen,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
    },
      h("span", {
        style: { fontFamily: "Inter Black", fontSize: 56, color: colors.primaryGreen },
      }, cfg.metric),
      cfg.metricLabel ? h("span", {
        style: { fontFamily: "Inter Bold", fontSize: 18, color: colors.primaryGreen },
      }, cfg.metricLabel) : null,
    ) : null,
    HeadlineBlock({ headline: cfg.headline, subtext: cfg.subtext, topOffset }),
    BottomBar(),
  );
}

function trustTemplate(cfg: ThumbnailConfig): ReactNode {
  const lines = cfg.headline.split("\n");
  const topOffset = lines.length > 1 ? 180 : 240;

  return h("div", {
    style: {
      position: "relative",
      width: W,
      height: H,
      display: "flex",
    },
  },
    // Shield shape (approximated as hexagon-ish with SVG path rendered as image)
    h("div", {
      style: {
        position: "absolute",
        right: 140,
        top: 80,
        width: 200,
        height: 240,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
      h("div", {
        style: {
          width: 160,
          height: 200,
          borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
          backgroundColor: colors.primaryGreen,
          border: `3px solid ${colors.accentGreen}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
        h("span", {
          style: { fontFamily: "Inter Black", fontSize: 64, color: colors.accentGreen },
        }, "Q"),
      ),
    ),
    HeadlineBlock({ headline: cfg.headline, subtext: cfg.subtext, topOffset }),
    BottomBar(),
  );
}

export function getTemplateElement(cfg: ThumbnailConfig): ReactNode {
  switch (cfg.template) {
    case "speed": return speedTemplate(cfg);
    case "conversion": return conversionTemplate(cfg);
    case "comparison": return comparisonTemplate(cfg);
    case "feature": return featureTemplate(cfg);
    case "trust": return trustTemplate(cfg);
  }
}
