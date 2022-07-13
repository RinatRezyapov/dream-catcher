import type { FindDreamCatchers } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import DreamCatchers from 'src/components/DreamCatcher/DreamCatchers'

export const QUERY = gql`
  query FindDreamCatchers {
    dreamCatchers {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No dreamCatchers yet. '}
      <Link
        to={routes.newDreamCatcher()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ dreamCatchers }: CellSuccessProps<FindDreamCatchers>) => {
  return <DreamCatchers dreamCatchers={dreamCatchers} />
}
