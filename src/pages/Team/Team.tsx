import LayoutProvider from '../../components/LayoutProvider'
import Table from '../../components/Table'
import { useParams } from 'react-router-dom'
import { membersMock, IMembers } from '../../mocks/members'
import { teamsMock } from '../../mocks/teams'
import { toTeamDetail } from './utils/toTeamDetail'
import { byMemberTeamId } from './utils/byMemberTeamId'
import { byTeamId } from './utils/byTeamId'
import { Link } from 'react-router-dom'

import "./Team.css"

type useTeamProps = {
  membersMock: IMembers;
}

function useTeam(props: useTeamProps) {
  let { id } = useParams()

  return {
    header: ['Name', 'Email'],
    teamDetails: props.membersMock.members.filter(byMemberTeamId(id!)).map(toTeamDetail),
    teamName: teamsMock.teams.find(byTeamId(id!))?.name,
  }
}

function Team() {
  const teamController = useTeam({
    membersMock
  })

  return (
    <LayoutProvider>
      <div>
        <div className="team-details-header-container">
          <h1>
            {`${teamController.teamName} Team`}
          </h1>
          <Link to="/members">
            Back
          </Link>
        </div>
        <Table 
          headerData={teamController.header}
          rowDataList={teamController.teamDetails}
        />
      </div>
    </LayoutProvider>
  )
}

export default Team
