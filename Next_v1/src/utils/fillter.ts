interface Member {
  id: number;
  nameEn: string;
  nameKr: string;
  affiliation: string;
  isAlumni: boolean;
  researchField: string;
  email: string;
  degree: string;
  img?: string;
  companyAndDepartment?: string;
}

export function filteredList(dummy: Member[], degreeFilter: string[], isAlumniFilter: boolean): Member[] {
  // console.log(dummy, degreeFilter, isAlumniFilter);
  return dummy.filter((obj) => {
    return obj.isAlumni !== isAlumniFilter && !degreeFilter.includes(obj.degree);
  });
}
