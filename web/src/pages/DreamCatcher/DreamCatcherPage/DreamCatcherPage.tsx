import DreamCatcherCell from 'src/components/DreamCatcher/DreamCatcherCell'

type DreamCatcherPageProps = {
  id: number
}

const DreamCatcherPage = ({ id }: DreamCatcherPageProps) => {
  return <DreamCatcherCell id={id} />
}

export default DreamCatcherPage
