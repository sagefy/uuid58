# uuid58

_Convert UUID -> base58 UUID and base58 UUID -> UUID_

```javascript
import { convertUuidToUuid58, convertUuid58ToUuid } from 'uuid58'

convertUuidToUuid58('7a2957d2-b79c-48c6-9771-270aed712fd8')
// output: 'G5w1tJ2db6LJg8PxiEvkdm'

convertUuid58ToUuid('G5w1tJ2db6LJg8PxiEvkdm')
// output: '7a2957d2-b79c-48c6-9771-270aed712fd8'
```

   Copyright 2019 Kevin Heis

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   
