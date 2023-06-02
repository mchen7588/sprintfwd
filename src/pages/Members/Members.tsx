import LayoutProvider from '../../components/LayoutProvider'
import Table from '../../components/Table'
import { membersMock, IMembers } from '../../mocks/members'
import { toMemberRowData } from './utils/toMemberRowData'

type useMembersProps = {
  membersMock: IMembers;
}

function useMembers(props: useMembersProps) {
  return {
    header: ['Name', 'Team'],
    members: props.membersMock.members.map(toMemberRowData),
  }
}

function Members() {
  const membersController = useMembers({
    membersMock,
  })

  return (
    <LayoutProvider>
      <div>
        <h1>
          Members Table
        </h1>
        <Table 
          headerData={membersController.header}
          rowDataList={membersController.members}
        />
      </div>
    </LayoutProvider>
  )
}

export default Members
