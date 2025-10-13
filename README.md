# Sample Pricing Dashboard - Jeremy Eissler

A simple example of a complex data list with sample stats and visualization. I chose to use [AgGrid](https://www.ag-grid.com/vue-data-grid) and [AgCharts](https://www.ag-grid.com/charts/vue/quick-start/) for this as they seem very performant with very little setup headaches. Originally I'd planned for Tailwind with [Tanstack Table](https://tanstack.com/table/latest/docs/introduction), but could not ignore the features and speed of development with AgGrid; the enterprise version seems very nice as well with great features such as built-in pagination, [grouping](https://www.ag-grid.com/vue-data-grid/grouping-display-types/) and inline charts. In this instance having the grid grouped by service type might be nice.

### Stack

Vue 3, Vite, Tanstack Query, Tailwind 4, AgGrid, AgChart

### Solution Explanation & Thoughts

Overall I'm satisfied with my solution for the time box, but in a real project there are several things I would expand on or do differently. The loaders especially while there are not fancy—I really like skeleton loaders for tables and stats and set this up so the error state would be for the whole dashboard while the loaders could be separate for each component. This makes it easier (I think) to mark them up since they're closer to what they represent. As well I often structure markup and class utils this way where main page layout resides in the parent for the same reason.

Animations as well I didn't have a reason to do much with where AgGrid is taking over the canvas. Generally there would be some animations: transitioning states, loading, etc. and depending on the complexity can sometimes be done with just css or util classes vs needing transition or transition group.

The registered imports for the charts, while I only used one, I loaded them all for speed of development on this task. In reality I would go and pick out just the ones I wanted to make things as light as possible. In truth I don't love the chart, it would work better with less data. Also I didn't use icons so there is at least one unused package installed.

Suspense and fetch vs [Redaxios](https://github.com/developit/redaxios) vs global config: there are a number of ways to do data fetching, but I chose Tanstack Query with a native fetch as its super easy. I experimented with suspense and it did work with Tanstack, but ultimately wanted a single data loader and dumb display components so I didn't use it. I am interested in this and continually follow Vue and [Tanstack](https://tanstack.com/start/latest/docs/framework/react/overview) updates for such things.

Paginated data seems absolutely necessary for such large data sets while it wasn't in the scope for the time box. One of the reasons I used AgGrid is it has virtualization (window slicing) baked in and I like when users are able to choose the size of page they want. Truly I think you could make this as performant or more so with Tanstack Table and have more flexibility albeit at the cost of more overhead.

## Project Setup

Copy the example env to a local file (ignored by git) and copy/paste the API key send via email or any valid key

```sh
cp .env.example .env
```

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Lint and Test

```sh
pnpm test:unit
```

```sh
pnpm lint
```
