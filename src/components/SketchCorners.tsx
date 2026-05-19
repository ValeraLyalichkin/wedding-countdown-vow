type Props = {
  trSize?: string;
  blSize?: string;
  opacity?: number;
  corners?: Array<"tr" | "bl">;
};

/**
 * Decorative corners removed by request — kept as a no-op so existing
 * imports across sections continue to compile.
 */
export function SketchCorners(_props: Props) {
  return null;
}
