import EditDreamCatcherCell from 'src/components/DreamCatcher/EditDreamCatcherCell'

type DreamCatcherPageProps = {
  id: number
}

const EditDreamCatcherPage = ({ id }: DreamCatcherPageProps) => {
  return <EditDreamCatcherCell id={id} />
}

export default EditDreamCatcherPage
