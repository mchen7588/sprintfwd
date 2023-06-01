import LayoutProvider from '../../components/LayoutProvider'
import Table from '../../components/Table'
import { teamsMock, ITeams } from '../../mocks/teams'
import { toTeamRowData } from './utils/toTeamRowData'

type useTeamsProps = {
  teamsMock: ITeams;
}

function useTeams(props: useTeamsProps) {
  return {
    header: ['Name', 'Members'],
    teams: props.teamsMock.teams.map(toTeamRowData),
  }
}

function Teams() {
  const teamsController = useTeams({
    teamsMock,
  })

  return (
    <LayoutProvider>
      <div>
        <Table 
          headerData={teamsController.header}
          rowDataList={teamsController.teams}
        />
      </div>
    </LayoutProvider>
  )
}

export default Teams
