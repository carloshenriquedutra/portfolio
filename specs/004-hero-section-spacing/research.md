# Research: Hero Section Spacing

## Decision

Increase the homepage hero's bottom padding using the next Bootstrap spacing utility (`pb-5`).

## Rationale

The About section is a `.row` and Bootstrap applies a negative top gutter margin to rows. The current hero bottom padding is fully consumed by that margin, placing the About border next to the buttons. Increasing the hero padding by one utility step leaves a 1.5rem visible gap.

## Alternatives considered

- Remove the row's negative margin: rejected because it would affect column alignment and potentially all content in the row.
- Add a special CSS override: rejected because an existing spacing utility expresses the needed change with less code and scope.
