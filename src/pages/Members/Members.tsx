import LayoutProvider from '../../components/LayoutProvider'
import { membersMock, IMembers, IMember } from '../../mocks/members';

type MemberRowProps = {
  name: string;
  teamName: string;
}

function MemberRow(props: MemberRowProps) {
  return (
    <tr>
      <td>
        {props.name}
      </td>
      <td>
        {props.teamName}
      </td>
    </tr>
  )
}

function toMember(memberMock: IMember) {
  return {
    name: `${memberMock.first_name} ${memberMock.last_name}`,
    teamName: memberMock.team.name,
  }
}

type useMembersProps = {
  membersMock: IMembers;
}

function useMembers(props: useMembersProps) {
  return {
    members: props.membersMock.members.map(toMember),
  }
}

function Members() {
  const membersController = useMembers({
    membersMock,
  })

  return (
    <LayoutProvider>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {
              membersController.members.map(MemberRow)
            }
          </tbody>
        </table>
      </div>
    </LayoutProvider>
  )
}

export default Members
