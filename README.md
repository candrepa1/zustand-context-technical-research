## Context API vs Zustand for state management

This comparison is based on a simple example app: typing in an input field updates a `search` state, and clicking a button adds that input to a `list` state.

https://github.com/user-attachments/assets/afbcfbcb-bf90-4d01-8188-5d0068e6b2bc

This example was chosen because it demonstrates a simple yet intertwined state logic. For instance, the `AddButton` component needs access both to the current input value and a function to add that value to the list—touching multiple parts of the state.

Two key aspects that can influence our decision are the app structure and rendering behavior.

### App structure
**Zustand**
```
const App = () => {
    return (
        <div className="content">
            <SearchInput />
            <AddButton />
            <List />
        </div>
    );
};
```

**Context**
```
const App = () => {
    return (
        <div className="content">
            <ToDoProvider>
                <SearchInput />
                <ListProvider>
                    <AddButton />
                    <List />
                </ListProvider>
            </ToDoProvider>
        </div>
    );
};
```
As shown above, Zustand allows for a simpler app structure without the need for multiple nested providers. You could consolidate state into a single context to avoid some of the extra nesting, and while that might reduce re-renders in certain cases (as explained below), it still wouldn’t offer the same clean separation of logic and update behavior that Zustand provides.

### Rendering behavior
**Context**

With the Context API, even when only a part of the state changes (e.g., the input), multiple components that consume the context may re-render unnecessarily:

Shared context state can cause components that don't depend on a changed part of the state to still re-render.
Providers and consumers like `AddButton` and `ListProvider` can end up re-rendering on both input changes and item additions, even if they only depend on one.
This can lead to suboptimal performance as the app grows in complexity, unless context usage is carefully scoped and memoized.

**Zustand**

Zustand subscribes components to only the specific slices of state they need:

Components like `AddButton` or `List` only re-render when the state they directly depend on changes.
This enables more fine-grained control over updates, without having to split logic into multiple contexts or deeply nest providers.
The result is fewer unnecessary re-renders and a simpler app structure.

### Summary
While both Context and Zustand can handle this type of state management, Zustand provides:

- A simpler component tree with less boilerplate
- More precise rendering behavior
- Better performance scalability

Context is still a valid option, but requires additional effort—like splitting contexts, memoizing values, or using selector utilities—to achieve similar performance characteristics.
