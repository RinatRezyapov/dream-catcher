import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_DREAM_CATCHER_MUTATION = gql`
  mutation DeleteDreamCatcherMutation($id: Int!) {
    deleteDreamCatcher(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const DreamCatcher = ({ dreamCatcher }) => {
  const [deleteDreamCatcher] = useMutation(DELETE_DREAM_CATCHER_MUTATION, {
    onCompleted: () => {
      toast.success('DreamCatcher deleted')
      navigate(routes.dreamCatchers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete dreamCatcher ' + id + '?')) {
      deleteDreamCatcher({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">DreamCatcher {dreamCatcher.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{dreamCatcher.id}</td>
            </tr><tr>
              <th>Title</th>
              <td>{dreamCatcher.title}</td>
            </tr><tr>
              <th>Body</th>
              <td>{dreamCatcher.body}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(dreamCatcher.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDreamCatcher({ id: dreamCatcher.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(dreamCatcher.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default DreamCatcher
