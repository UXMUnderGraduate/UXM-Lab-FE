import { userType } from '@/types';

export function filteredList(user: userType[], degreeFilter: string[], isAlumniFilter: boolean): userType[] {
  // console.log(user, degreeFilter, isAlumniFilter);
  return user.filter((obj) => {
    return obj.isAlumni !== isAlumniFilter && !degreeFilter.includes(obj.degree);
  });
}
