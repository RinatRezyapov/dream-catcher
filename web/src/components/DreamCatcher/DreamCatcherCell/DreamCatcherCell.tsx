import type { FindDreamCatcherById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import DreamCatcher from 'src/components/DreamCatcher/DreamCatcher'

export const QUERY = gql`
  query FindDreamCatcherById($id: Int!) {
    dreamCatcher: dreamCatcher(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>DreamCatcher not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ dreamCatcher }: CellSuccessProps<FindDreamCatcherById>) => {
  return <DreamCatcher dreamCatcher={dreamCatcher} />
}
