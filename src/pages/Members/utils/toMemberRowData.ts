import { IMember } from '../../../mocks/members';

export function toMemberRowData(memberMock: IMember) {
  return [
    `${memberMock.first_name} ${memberMock.last_name}`,
    memberMock.team.name,
  ]
}
