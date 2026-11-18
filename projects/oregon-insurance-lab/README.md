# Oregon Insurance Lab

A single-page, dependency-free training tool for an Oregon patient access clerk. Open `index.html` in a browser. The page has a card/situation finder, searchable payer notes, and a fictional filled insurance record for each scenario. “Hide answers to practice” and a short decision check make the examples reusable.

## Scope

- Official public sources are linked in the page. Source review: November 18, 2026.
- All patients, employers, groups and claim references are fictional. The Medicare number shown is CMS's published format example; zeros used for OHP and TRICARE are training placeholders. Do not enter real patient information into this app.
- The simulated fields come from the user's existing Patient Logic practice notes. **They are not an exact copy of the live Patient Logic screen.** Match labels, order, required fields, payer search results and approved verification tools against the promised screenshot and current MWMC training before treating them as local instructions.
- OneSource is an Experian eligibility product; whether MWMC has access or a particular payer connection is unconfirmed. MMIS is Oregon's official OHP eligibility/CCO source. Workers' compensation, auto and VA episode verification need their own authorized workflows.
- No patient data is sent to a server or saved in local storage.

## Updating

Edit the `cases` and `sources` objects in `app.js`. Each case renders one reference card and one filled practice record. Keep the cases fictional, link new payer rules to a primary source, and label local field choices **NEEDS CONFIRMATION** until verified.

## Publishing

The site can be hosted from this folder with a static host, or from a GitHub Pages repository once Pages is configured. No build step is required.
