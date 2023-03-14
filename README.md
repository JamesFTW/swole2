### Example of how front end will call api

```javascript
import {getAllExercises} from './src/api/exercise'

const [data, setData] = React.useState(null)

React.useEffect(() => {
  getAllExercises().then(data => setData(data))
})
```

### Learnings

## 3-12-23

How to add decorators and addons to storybook
