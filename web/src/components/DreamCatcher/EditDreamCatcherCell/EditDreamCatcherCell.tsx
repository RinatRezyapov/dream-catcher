import type { EditDreamCatcherById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DreamCatcherForm from 'src/components/DreamCatcher/DreamCatcherForm'

export const QUERY = gql`
  query EditDreamCatcherById($id: Int!) {
    dreamCatcher: dreamCatcher(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`
const UPDATE_DREAM_CATCHER_MUTATION = gql`
  mutation UpdateDreamCatcherMutation($id: Int!, $input: UpdateDreamCatcherInput!) {
    updateDreamCatcher(id: $id, input: $input) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ dreamCatcher }: CellSuccessProps<EditDreamCatcherById>) => {
  const [updateDreamCatcher, { loading, error }] = useMutation(UPDATE_DREAM_CATCHER_MUTATION, {
    onCompleted: () => {
      toast.success('DreamCatcher updated')
      navigate(routes.dreamCatchers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateDreamCatcher({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit DreamCatcher {dreamCatcher.id}</h2>
      </header>
      <div className="rw-segment-main">
        <DreamCatcherForm dreamCatcher={dreamCatcher} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
