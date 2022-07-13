import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DreamCatcherForm from 'src/components/DreamCatcher/DreamCatcherForm'

const CREATE_DREAM_CATCHER_MUTATION = gql`
  mutation CreateDreamCatcherMutation($input: CreateDreamCatcherInput!) {
    createDreamCatcher(input: $input) {
      id
    }
  }
`

const NewDreamCatcher = () => {
  const [createDreamCatcher, { loading, error }] = useMutation(CREATE_DREAM_CATCHER_MUTATION, {
    onCompleted: () => {
      toast.success('DreamCatcher created')
      navigate(routes.dreamCatchers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createDreamCatcher({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New DreamCatcher</h2>
      </header>
      <div className="rw-segment-main">
        <DreamCatcherForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDreamCatcher
