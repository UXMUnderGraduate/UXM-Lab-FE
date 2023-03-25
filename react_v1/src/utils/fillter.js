export function filteredList(dummy, degreeFilter, isAlumniFilter) {
  console.log(dummy, degreeFilter, isAlumniFilter);
  return dummy.filter((obj) => {
    return obj.isAlumni !== isAlumniFilter && !degreeFilter.includes(obj.degree);
  });
}
