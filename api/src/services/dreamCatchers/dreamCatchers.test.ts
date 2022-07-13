import {
  dreamCatchers,
  dreamCatcher,
  createDreamCatcher,
  updateDreamCatcher,
  deleteDreamCatcher,
} from './dreamCatchers'
import type { StandardScenario } from './dreamCatchers.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('dreamCatchers', () => {
  scenario('returns all dreamCatchers', async (scenario: StandardScenario) => {
    const result = await dreamCatchers()

    expect(result.length).toEqual(Object.keys(scenario.dreamCatcher).length)
  })

  scenario(
    'returns a single dreamCatcher',
    async (scenario: StandardScenario) => {
      const result = await dreamCatcher({ id: scenario.dreamCatcher.one.id })

      expect(result).toEqual(scenario.dreamCatcher.one)
    }
  )

  scenario('creates a dreamCatcher', async () => {
    const result = await createDreamCatcher({
      input: { title: 'String', body: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.body).toEqual('String')
  })

  scenario('updates a dreamCatcher', async (scenario: StandardScenario) => {
    const original = await dreamCatcher({ id: scenario.dreamCatcher.one.id })
    const result = await updateDreamCatcher({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a dreamCatcher', async (scenario: StandardScenario) => {
    const original = await deleteDreamCatcher({
      id: scenario.dreamCatcher.one.id,
    })
    const result = await dreamCatcher({ id: original.id })

    expect(result).toEqual(null)
  })
})
