# redux-root-state

Return back `DefaultRootState` for [react-redux](https://www.npmjs.com/package/react-redux).

## How to Use

Step 1.
```bash
npm i redux-root-state
```

Step 2.

Add declaration
```typescript
type RootState = ReturnType<typeof store.getState>;

declare module "redux-root-state" {
  export interface DefaultRootState extends RootState {}
}
```

Step 3.
```typescript
import { useDispatch, useSelector } from "redux-root-state";
```