import { IMember } from '../../../mocks/members';

export function toMemberRowData(memberMock: IMember) {
  return [
    {
      text: `${memberMock.first_name} ${memberMock.last_name}`,
    },
    {
      text: memberMock.team.name,
      url: `/team/${memberMock.team.id}`
    },
  ]
}
