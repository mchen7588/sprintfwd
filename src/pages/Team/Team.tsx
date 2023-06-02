import LayoutProvider from '../../components/LayoutProvider'
import Table from '../../components/Table'
import { useParams } from 'react-router-dom'
import { membersMock, IMembers } from '../../mocks/members'
import { toTeamDetail } from './utils/toTeamDetail'
import { byTeamId } from './utils/byTeamId'

type useTeamProps = {
  membersMock: IMembers;
}

function useTeam(props: useTeamProps) {
  let { id } = useParams()

  return {
    header: ['Name', 'Email'],
    teamDetails: props.membersMock.members.filter(byTeamId(id!)).map(toTeamDetail)
  }
}

function Team() {
  const teamController = useTeam({
    membersMock
  })

  return (
    <LayoutProvider>
      <div>
        <Table 
          headerData={teamController.header}
          rowDataList={teamController.teamDetails}
        />
      </div>
    </LayoutProvider>
  )
}

export default Team
