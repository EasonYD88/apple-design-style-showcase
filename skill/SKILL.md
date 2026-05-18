---
name: apple-design-style
description: Create or refine interfaces, prototypes, visual systems, icons, and frontend implementations in an Apple design style. Use when the user asks for Apple-like, iOS-like, macOS-like, visionOS-like, Liquid Glass, Human Interface Guidelines, SF Symbols, Apple Design Resources, or polished native-feeling app design across Apple platforms or Apple-inspired web/product UI.
---

# Apple Design Style

Design the experience so it feels native to Apple platforms: content-led, calm, direct, adaptive, accessible, and built from familiar system conventions. Prefer official platform components and Human Interface Guidelines patterns when building for iOS, iPadOS, macOS, watchOS, tvOS, or visionOS.

## Core Workflow

1. Identify the target platform, device class, input modes, and task frequency before choosing layout or styling.
2. Start from the user's content and primary task. Make navigation, controls, and decoration support the content instead of competing with it.
3. Apply the Apple design principles of hierarchy, harmony, and consistency:
   - Establish clear hierarchy between content, navigation, and actions.
   - Use shapes, radii, spacing, materials, and motion that feel harmonious with the device and OS.
   - Reuse platform conventions so behavior remains familiar across screen sizes and input modes.
4. Use system-defined components first. Customize only when the default component cannot support the product's function or brand.
5. Build the same app anatomy across platforms, then adapt density, navigation, and control placement for each form factor.
6. Validate light mode, dark mode, increased contrast, reduced transparency, Dynamic Type or text scaling, keyboard/pointer/touch input, and narrow/wide layouts.

## Visual Language

Use restraint. Apple-style interfaces usually feel precise because they remove unnecessary visual weight.

- Prefer generous whitespace, aligned edges, simple grids, and a small number of visual states.
- Use depth to clarify relationships, not as decoration.
- Use rounded shapes with concentric relationships: nested surfaces should have radii that visually echo their parent containers.
- Avoid heavy borders, dense shadows, noisy gradients, decorative blobs, and ornamental cards that do not map to interaction or hierarchy.
- Avoid making every surface translucent. Reserve material effects for functional layers and important controls.
- Keep transitions smooth, quick, and physically plausible. Motion should explain state changes, not advertise itself.

## Layout

Design around platform expectations.

- On iPhone, prioritize a narrow vertical flow, bottom reachability, clear navigation, and one primary action per view.
- On iPad, support resizable windows, split views, sidebars, multi-column layouts, and adaptable toolbars.
- On macOS, use wider canvases, persistent sidebars, menu bar affordances, keyboard shortcuts, inspectors, and resizable windows.
- On watchOS, keep interactions brief, glanceable, and high contrast, with large controls and minimal text.
- On tvOS, optimize for focus, distance, large type, and clear selection states.
- On visionOS, respect spatial comfort, depth, large hit targets, and legibility over glass.

Use an 8 pt spacing rhythm unless the platform framework provides a more specific spacing token. Keep important controls in familiar homes: navigation and location toward the leading/top areas, primary completion or confirmation at the trailing edge, tab-level navigation in tab bars, and secondary actions in menus.

## Materials and Liquid Glass

Use Liquid Glass as a functional layer for controls and navigation that floats above content. Use it to preserve context while keeping controls legible.

- Prefer system frameworks so controls and navigation adopt Liquid Glass automatically.
- Use Liquid Glass sparingly in custom UI.
- Do not use Liquid Glass as a general content-card material.
- Use standard materials, blur, vibrancy, or solid backgrounds for content-layer grouping.
- Use clear Liquid Glass only over visually rich backgrounds where the material helps preserve context.
- Keep text and controls layered above background extension effects so they remain legible.
- Remove custom toolbar or tab-bar background colors when Liquid Glass and scroll-edge effects can express hierarchy more quietly.
- If reduced transparency or increased contrast is enabled, preserve function and contrast without relying on glass effects.

## Typography

Use typography to express information hierarchy and improve legibility.

- Prefer San Francisco on Apple platforms: SF Pro for iOS, iPadOS, macOS, and tvOS; SF Compact for watchOS; SF Mono for code or aligned tabular data; New York only when a reading/editorial voice is appropriate.
- In web implementations, use `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Arial, sans-serif`.
- Use bolder, clear headings when they help structure content, but keep compact UI text modest.
- Minimize the number of typefaces and weights.
- Support Dynamic Type or equivalent text scaling.
- Avoid thin weights at small sizes.
- Keep labels concise and scannable. Use title case or sentence case according to the platform pattern already present.

## Color

Use color deliberately to communicate state, brand, and hierarchy.

- Prefer system colors and semantic colors because they adapt to light, dark, vibrancy, and contrast settings.
- Use one accent color for primary actions and selection unless the product domain requires more.
- Do not use the same color to mean different things.
- Do not rely on color alone to communicate state. Add labels, icons, shapes, or text.
- Test custom colors in light mode, dark mode, increased contrast, dim environments, bright environments, and on different devices.
- Keep colorful content out of competition with toolbar and button labels. Prefer monochrome controls over already colorful content.
- For Apple-inspired web UI, use restrained neutrals with a clear accent. Example starting points: `#007AFF` for iOS blue, `#34C759` for success, `#FF3B30` for destructive, `#F5F5F7` for grouped light backgrounds, and `#1C1C1E` for dark backgrounds. Adapt them for contrast.

## Components

Use familiar Apple components and states.

- Use standard buttons, menus, segmented controls, toggles, sliders, tab bars, sidebars, sheets, popovers, toolbars, search fields, and list/table patterns before inventing custom equivalents.
- Keep custom components aligned with platform anatomy: icon or symbol, label, state indicator, accessory, and consistent interaction feedback.
- Give touch controls at least a 44 x 44 pt hit region; use at least 60 x 60 pt for visionOS.
- Include press, hover, focus, selected, disabled, loading, and destructive states where relevant.
- Use a prominent button style for the most likely action. Limit prominent buttons to one or two per view.
- Use style, not size, to distinguish the preferred option among peer actions.
- Put secondary or less frequent actions in a More menu or context menu.
- Add an ellipsis to action labels only when the action opens another step that requires more input.

## Toolbars and Navigation

Make bars help people understand where they are and what they can do.

- Choose toolbar items deliberately to avoid overcrowding.
- Group toolbar items by function and frequency.
- Put navigation controls and titles in familiar leading or central areas; put important actions, search, More, Done, Save, or Close in familiar trailing areas.
- Use standard Back and Close symbols instead of text labels when the platform convention provides them.
- Prefer recognizable symbols for common toolbar actions; use text only when a symbol would be ambiguous.
- Allow overflow or customization on iPadOS and macOS when many actions exist.
- Do not manually add overflow behavior where the system can manage it.
- Use concise view titles that describe content or location, not the app name.

## Icons and Symbols

Use simple, single-concept symbols for interface actions.

- Prefer SF Symbols on Apple platforms.
- Match symbol weight and scale to adjacent text.
- Use streamlined glyphs for interface icons; reserve rich dimensional artwork for app icons.
- Avoid text inside interface icons unless the text is essential and localized.
- Avoid culturally narrow metaphors when a clearer universal symbol exists.
- Provide accessibility labels for icon-only controls.
- For Apple-inspired nonnative UI, create icons that follow SF-like clarity and optical balance without copying Apple-protected assets.

## App Icons

Design app icons as memorable product identities, not screenshots of the UI.

- Use a simple core metaphor that remains recognizable at small sizes.
- Prefer layered icon construction when targeting current Apple platforms.
- Use background and foreground layers to create depth and vitality.
- Prepare variants for default, dark, and monochrome or tinted rendering modes when the platform requires them.
- Use Icon Composer and Apple Design Resources when building real Apple app assets.
- Do not use Apple logos, Apple product imagery, or Apple trademarks unless the user has rights and the use is appropriate.

## Accessibility

Treat accessibility as part of the style, not an add-on.

- Make the interface intuitive, perceivable, and adaptable.
- Support large text, VoiceOver labels, keyboard navigation, pointer focus, reduced motion, reduced transparency, increased contrast, and color-blind-safe states.
- Meet accepted contrast thresholds for text and icons.
- Use both color and noncolor indicators for status, validation, charts, and selection.
- Keep controls comfortably sized and spaced for touch, pointer, remote, eye, and keyboard input.
- Provide visual alternatives for audio cues and haptic alternatives when useful.

## Frontend Implementation Notes

When implementing an Apple-inspired web or cross-platform interface:

- Define design tokens for surface, text, secondary text, separator, accent, destructive, radius, spacing, blur, and elevation.
- Use CSS variables and `prefers-color-scheme`.
- Use `backdrop-filter` carefully and provide solid-color fallbacks.
- Use `font: -apple-system` stacks.
- Use native HTML controls where they provide accessibility, then style them lightly.
- Keep layout responsive with container constraints, not viewport-scaled typography.
- Verify the UI in mobile and desktop screenshots before finishing.

## Anti-Patterns

Avoid these outputs:

- A generic glossy interface with Apple-like colors but no platform behavior.
- A translucent card stack where every surface competes for attention.
- Oversized marketing hero layouts when the user asked for a usable app or tool.
- Tiny controls, ambiguous icon-only actions, or inaccessible contrast.
- Decorative gradients, bokeh, or shadow layers that do not clarify hierarchy.
- Copying Apple product pages, Apple logos, Apple app icons, or protected marketing assets.
- Treating iOS, macOS, watchOS, tvOS, and visionOS as the same layout with different screen sizes.

## Delivery Checklist

Before finishing, confirm:

- The primary task is obvious within the first viewport or main screen.
- The interface has clear hierarchy between content, navigation, and actions.
- Controls are familiar, correctly placed, and visibly interactive.
- The visual system works in light and dark appearances.
- The design supports larger text and noncolor state indicators.
- Custom materials or glass effects are sparse and functional.
- The result feels calm, polished, and native to the target Apple context.
