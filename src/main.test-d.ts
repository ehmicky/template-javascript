import { expectAssignable, expectType } from 'tsd'

import templateName, { type Options } from 'template-name'

expectType<object>(templateName(true))

templateName(true, {})
expectAssignable<Options>({})
