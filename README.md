# redux-root-state

Return the `DefaultRootState` interface back to the [react-redux](https://www.npmjs.com/package/react-redux) library.

## How to Use

Step 1.
```bash
npm i redux-root-state
```

Step 2.

```typescript
type RootState = ReturnType<typeof store.getState>;

declare module "redux-root-state" {
  export interface DefaultRootState extends RootState {}
}
```

Step 3.
```typescript
import { useDispatch, useSelector, connect } from "redux-root-state";
```