# Styled Components Playground

The purpose of this playground is to learn a bit more about styled-components. I wanted to get familiar with its usage. To that end, I am going to build and load a simple button component using styled-components.

## Where I wouldn't use it

My primary concern with styled-components is the injection of style tags resulting in a CSP violation on the strictest of CSP policies.

I also wouldn't use it in situations like a design system, where you want consumers of the system to be able to hook into those classes.